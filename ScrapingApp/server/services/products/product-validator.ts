/// <reference path="../../typings/index.d.ts" />

import * as validator from "node-validator";

export default class ProductValidator {
    private productValidator: validator.Validatable;

    constructor() {
        this.productValidator = validator.isAnyObject()
            .withRequired("id", validator.isString())
            .withRequired("title", validator.isString());

    }

    validate(product: Api.Product): Promise<Api.ValidationResult> {
        if (!product)
            throw new Error("product is undefined");

        return new Promise(resolve => {
            validator.run(this.productValidator,
                product,
                (errorCount, errors) => {
                    resolve({
                        isValid: errorCount === 0,
                        errorCount: errorCount,
                        errors: errors
                    });
                });
        });
    }
}