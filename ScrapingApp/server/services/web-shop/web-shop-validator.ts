/// <reference path="../../typings/index.d.ts" />

import * as validator from "node-validator";

export default class WebShopValidator {
    private webShopValidator: validator.Validatable;
    private deliveryMethodValidator: validator.Validatable;

    constructor() {
        this.deliveryMethodValidator = validator.isAnyObject()
            .withRequired("deliveryMethod", validator.isString())
            .withRequired("price", validator.isNumber({ min: 0 }));

        
        this.webShopValidator = validator.isAnyObject()
            .withRequired("title", validator.isString())
            .withOptional("deliveryMethods", validator.isArray(this.deliveryMethodValidator));
    }

    validate(webShop: WebShops.WebShop): Promise<Validator.ValidationResult> {
        if (!webShop)
            throw new Error("webShop is undefined");

        return new Promise(resolve => {
            validator.run(this.webShopValidator,
                webShop,
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