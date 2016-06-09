/// <reference path="../typings/index.d.ts"/>
import * as path from "path";

export default class ValueParserHash {
    parsers = {};

    constructor() {
        this.parsers["string"] = this.string;
        this.parsers["number"] = this.number;
    }

    string(input: string): any {
        return (input || "").trim();
    }

    number(input: string): any {
        if (!input)
            throw new Error("Number is missing.");

        const src = input.replace(/[^0-9\.]/g, "");

        const number = parseFloat(src);

        if (number && !isNaN(number))
            return number;

        throw new Error("Number format is not valid.");
    }

    relativeUrl(input: string, context: Scraping.ParserContext) {
        return path.posix.join(context.pageUrl, input).replace(":/", "://");
    }
}