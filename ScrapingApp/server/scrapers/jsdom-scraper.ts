/// <reference path="../typings/index.d.ts" />
import * as jsdom from "jsdom";
import ValueParserHash from "./value-parser";

export default class JsdomScraper implements Scraping.IScraper {
    private valueParser = new ValueParserHash();

    scrape(url: string, values: { [index: string]: Scraping.ValueExtractingSettings; }): Promise<Scraping.ScrapingResult> {
        if (!url)
            throw new Error("url is undefined");
        if (!values || !Object.keys(values).length)
            throw new Error("value extraction settings is missing.");


        let result: Scraping.ScrapingResult = {
            isSuccessful: false,
            error: null,
            values: {}
        };

        return new Promise((resolve, reject) => {
            jsdom.env({
                url: url,
                done: (err, window) => {
                    if (err && err.length) {
                        result.isSuccessful = false;
                        result.error = err;

                        reject(result);

                        return;
                    }
                    else {
                        Object.keys(values)
                            .forEach(valueName => {
                                const settings = values[valueName];
                                const valueResult: Scraping.ValueScrapingResult = {
                                    value: null,
                                    isSuccessful: false,
                                    error: null,
                                    settings: settings
                                };

                                result.values[valueName] = valueResult;

                                if (!settings.elementSelector) {
                                    valueResult.error = "Configuration error: element selector is missing.";
                                    valueResult.isSuccessful = false;
                                    return;
                                }

                                let elem = window.document.querySelector(settings.elementSelector);
                                if (!elem) {
                                    valueResult.error = "Element is missing";
                                    valueResult.isSuccessful = false;
                                    return;
                                }

                                try {
                                    const textValue = this.valueFromElement(elem, settings.valueSelector);
                                    valueResult.value = textValue;
                                    valueResult.isSuccessful = true;
                                }
                                catch (e) {
                                    valueResult.error = e;
                                    valueResult.isSuccessful = false;
                                }
                            });

                        result.isSuccessful = !Object.keys(result.values)
                            .map(valueName => result.values[valueName])
                            .some(v => !v.isSuccessful && !v.settings.isOptional);


                        if (result.isSuccessful)
                            resolve(result);
                        else
                            reject(result);
                    }
                }
            });
        });
    }

    private valueFromElement(element: Element, valueSelector: string): string {
        if (!element)
            throw new Error("element is undefined");

        if (!valueSelector)
            return element.textContent;
        else {
            if (valueSelector[0] === "@")
                return element.getAttribute(valueSelector.substring(1));

            throw new Error("Unknown value selector format");
        }
    }
}