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

    one(webShopId: string): Promise<WebShops.WebShop> {
        if (!webShopId)
            throw new Error("webShopId is undefined");

        return this.storage.one(webShopId);
    }

    save(webShop: WebShops.WebShop): Promise<Validator.ValidationResult> {
        if (!webShop)
            throw new Error("webShop is undefined");

        return new Promise((resolve, reject) => {
            this.validator
                .validate(webShop)
                .then(validationResult => {
                    if (!validationResult.isValid)
                        reject(validationResult);
                    else
                        this.storage
                            .save(webShop)
                            .then(() => resolve(validationResult));
                });
        });
    }
}