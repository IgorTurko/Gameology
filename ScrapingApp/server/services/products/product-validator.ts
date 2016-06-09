/// <reference path="../../typings/index.d.ts" />

import { Validator } from "../../validation/validation";

export default class ProductValidator {

    validate(product: Api.Product): Api.ValidationResult {
        if (!product)
            throw new Error("product is undefined");

        const validator = new Validator();

        return validator
            .property("id")
                .errorIf(() => !product.id, "Product ID is required")
            .end()
            .property("title")
                .errorIf(() => !product.title, "Product title is required")
                .errorIf(() => product.title && product.title.length > 1024, "Product title too long")
            .end()
            .property("scrapingUrls")
                .errorIf(() => !product.scrapingUrls || Object.keys(product.scrapingUrls).length === 0, "At least one scraping URL is required")
            .end()
            .result();
    }
}