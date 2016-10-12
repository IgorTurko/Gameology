/// <reference path="../typings/index.d.ts" />

import * as jsdom from "jsdom";
import * as createDebugger from "debug";

import ValueParserHash from "./value-parser";

const log = {
    error: createDebugger("gameology:jsdom:error"),
    debug: createDebugger("gameology:jsdom:debug")
};

export default class JsdomScraper implements Scraping.IScraper {
    private valueParser = new ValueParserHash();

    scrape(url: string, values: Api.ScrapingSettings): Promise<Api.ScrapedValues> {
        if (!url)
            throw new Error("url is undefined");
        if (!values)
            throw new Error("values is undefined.");
        if (!Object.keys(values).length)
            throw new Error("No values to extract");

        const result: Api.ScrapedValues = {
            title: null,
            price: null,
            image: null
        };

        // "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/50.0.2661.102 Safari/537.36"
        return new Promise((resolve, reject) => {
            jsdom.env({
                url: url,
                userAgent: "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/50.0.2661.102 Safari/537.36",
                features: {
                    FetchExternalResources: false,
                    ProcessExternalResources: false
                },
                done: (err, window) => {
                    if (err) {
                        log.error(`Error occured on scraping URL ${url}.\r\n${JSON.stringify(err)}`);
                        reject(err);
                        return;
                    }

                    if (!window || !window.document) {
                        log.error(`Error occured on scraping URL ${url}. HTML data are not received.`);
                        reject(new Error("HTML is not received."));
                        return;
                    }

                    const html = window.document.getElementsByTagName("html")[0];

                    log.debug(html.innerHTML);

                    Object.keys(values)
                        .forEach(valueName => {
                            const settings = values[valueName];
                            result[valueName] = this.scrapeValue(window.document, settings);
                        });

                    log.debug(`Scraping data from ${url} completed with values ${JSON.stringify(result)}`);

                    resolve(result);
                }
            });
        });
    }

    private scrapeValue(document: Document, valueScrapingSettings: Api.ValueScrapingSettings[]): string | number {
        if (!document)
            throw new Error("document is undefined");
        if (!valueScrapingSettings)
            throw new Error("valueScrapingSettings is undefined");

        const parsingContext: Scraping.ParserContext = {
            location: document.location
        };

        for (let scrapingSetting of valueScrapingSettings) {
            try {
                const rawValue = this.extractRawValueFromDocument(document, scrapingSetting);
                const parsedValue = this.valueParser[scrapingSetting.type](rawValue, parsingContext);

                return parsedValue;
            } catch (error) {
                log.error(`The error occured due parsing value. ${error}`);

                if (scrapingSetting.failOnError)
                    return null;
            }
        }

        return null;
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
}