/// <reference path="../../typings/index.d.ts" />

import WebShopValidator from "./web-shop-validator";

export default class WebShopService {

    private validator = new WebShopValidator();

    constructor(private storage: WebShops.IWebShopStorage) {
        if (!storage)
            throw new Error("storage is undefined");
    }

    all(): Promise<WebShops.WebShop[]> {
        return this.storage.all();
    }

    save(webShop: WebShops.WebShop): Promise<Validator.ValidationResult> {
        if (!webShop)
            throw new Error("webShop is undefined");

        return this.validator
            .validate(webShop)
            .then(validationResult => {
                if (!validationResult.isValid)
                    return validationResult;
                return this.storage
                    .save(webShop)
                    .then(() => validationResult);
            });
    }
}