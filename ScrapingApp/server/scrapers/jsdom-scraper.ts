/// <reference path="../typings/index.d.ts" />
require("../extensions");

import * as jsdom from "jsdom";
import ValueParserHash from "./value-parser";

export default class JsdomScraper implements Scraping.IScraper {
    private valueParser = new ValueParserHash();

    scrape(url: string, values: Api.ScrapingSettings): Promise<Scraping.WebShopScrapingResult> {
        if (!url)
            throw new Error("url is undefined");
        if (!values)
            throw new Error("values is undefined.");
        if (!Object.keys(values).length)
            throw new Error("No values to extract");

        const result: Scraping.WebShopScrapingResult = {
            isSuccessful: false,
            error: null,
            values: {}
        };
        // "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/50.0.2661.102 Safari/537.36"
        return new Promise(resolve => {
            jsdom.env({
                url: url,
                userAgent: "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/50.0.2661.102 Safari/537.36",
                features: {
                    FetchExternalResources: false,
                    ProcessExternalResources: false
                },
                done: (err, window) => {
                    if (err && err.length) {
                        result.isSuccessful = false;
                        result.error = err;

                        resolve(result);

                        return;
                    } else {
                        Object.keys(values)
                            .forEach(valueName => {
                                const settings = values[valueName];
                                result.values[valueName] = this.scrapeValue(window.document, settings);
                            });

                        result.isSuccessful = Object.keys(result.values)
                            .map(valueName => result.values[valueName])
                            .every(v => v.isSuccessful);

                        resolve(result);  
                    }
                }
            });
        });
    }

    private scrapeValue(document: Document, valueScrapingSettings: Api.ValueScrapingSettings[]): Scraping.ValueScrapingResult {
        if (!document)
            throw new Error("document is undefined");
        if (!valueScrapingSettings)
            throw new Error("valueScrapingSettings is undefined");

        const result = this.emptyValueScrapingResult();

        for (let scrapingSetting of valueScrapingSettings) {
            try {
                const rawValue = this.extractRawValueFromDocument(document, scrapingSetting);
                const parsedValue = this.valueParser[scrapingSetting.type](rawValue);

                result.isSuccessful = true;
                result.error = null;
                result.settings = scrapingSetting;
                result.value = parsedValue;

                return result;
            } catch (error) {
                result.isSuccessful = false;
                result.error = error;
                result.settings = scrapingSetting;

                if (scrapingSetting.failOnError)
                    return result;
            }
        }

        return result;
    }

    private extractRawValueFromDocument(document: Document, valueScrapingSetting: Api.ValueScrapingSettings): string {
        const extractMethod = valueScrapingSetting.extract || "queryselector";

        switch (extractMethod) {
            case "queryselector":
            {
                const querySelectorSettings = valueScrapingSetting as Api.QuerySelectorExtractSettings;

                if (!querySelectorSettings.elementSelector)
                    throw new Error(`elementSelector is missing`);

                const elements = document.querySelectorAll(querySelectorSettings.elementSelector);
                if (elements.length === 0)
                    throw new Error(`Element with selector ${querySelectorSettings.elementSelector} is missing`);
                if (elements.length > 1)
                    throw new Error(`There are more than one element with selector ${querySelectorSettings.elementSelector}`);

                if (querySelectorSettings.attribute)
                    return elements[0].getAttribute(querySelectorSettings.attribute);
                else
                    return elements[0].textContent;
            };
            case "regex":
            {
                const regexSettings = valueScrapingSetting as Api.RegexExtractSettings;
                if (!regexSettings.regex)
                    throw new Error("regex missing");

                const text = document.querySelector("html").innerHTML;

                const regex = new RegExp(regexSettings.regex, "gmi");

                const matches = regex.exec(text);
                if (!matches.length)
                    throw new Error("No value matches");

                return matches[1];
            };
            default:
                throw new Error("Unknown extract method");
        }
    }

    private emptyValueScrapingResult(): Scraping.ValueScrapingResult {
        return {
            value: null,
            isSuccessful: true,
            error: null,
            settings: null
        };
    }
}