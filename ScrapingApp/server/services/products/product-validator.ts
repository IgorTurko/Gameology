/// <reference path="../../typings/index.d.ts" />

import * as v from "../../validator";

export default class ProductValidator {
    public validator = v.obj<Api.Product, Api.Product>({
        id: v.str().required("Product ID is required"),
        title: v.str()
            .notEmpty("Product title is required")
            .must(t => t.length < 1024, "Product title too long"),
        scrapingUrls: v.hash(
            v.str()
                .must(url => !url || (url.indexOf("http://") === 0 || url.indexOf("https://") === 0), "URL must starts from http:// or https:// "))
            .must(urls => Object.keys(urls)
                .map(shopId => urls[shopId])
                .filter((url: string) => url && url.trim().length > 0)
                .length > 0, "At least one scraping URL must be specified.")
    });


    validate(product: Api.Product): Api.EntityValidationResult<Api.Product> {
        if (!product)
            throw new Error("product is undefined");

        const result = v.validate(product, this.validator);

        return {
            ok: result.valid,
            entity: result.value,
            errors: result.errors
        };
    }
}