/// <reference path="../typings/index.d.ts"/>

export default class ValueParserHash implements Scraping.IValueParserHash {

    string(input: string): Promise<any> {
        return Promise.resolve((input || "").trim());
    }

    number(input: string): Promise<any> {
        if (!input)
            return Promise.reject("Number is missing.");

        const src = input.replace(/[^0-9\.]/g, "");

        const number = parseFloat(src);

        if (number && !isNaN(number))
            return Promise.resolve(number);

        return Promise.reject("Number format is not valid.");
    }

    [index: string]: Scraping.ValueParser;
}