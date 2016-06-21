/// <reference path="../../typings/index.d.ts" />

import { ValidationRule, rules } from "pojo-fluent-validator";
import { validate } from "../utils";

export default class ProductValidator {
    public validator = rules.obj<Api.Product>({
        id: rules.str().notEmpty({ errorMessage: "Product ID is required" }),
        title: rules.str()
            .notEmpty({ errorMessage: "Product title is required" })
            .must(t => t.length < 1024, { errorMessage: "Product title too long" }),
        scrapingUrls: rules.hash(
            rules.str().must(url => !url || (url.indexOf("http://") === 0 || url.indexOf("https://") === 0), { errorMessage: "URL must starts from http:// or https:// " }))
            .before(urls => Object.keys(urls)
                .map(shopId => urls[shopId])
                .filter((url: string) => url && url.trim().length > 0)
                .length > 0,
            { errorMessage: "At least one scraping URL must be specified." })
    });


    validate(product: Api.Product): Promise<Api.Product> {
        if (!product)
            throw new Error("product is undefined");

        return validate(product, this.validator);
    }
}
