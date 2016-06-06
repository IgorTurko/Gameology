/// <reference path="../../typings/index.d.ts" />

import WebShopValidator from "./web-shop-validator";

export default class WebShopService {

    private validator = new WebShopValidator();

    constructor(private storage: WebShops.IWebShopStorage) {
        if (!storage)
            throw new Error("storage is undefined");
    }

    all(): Promise<Api.WebShop[]> {
        return this.storage.all();
    }

    one(webShopId: string): Promise<Api.WebShop> {
        if (!webShopId)
            throw new Error("webShopId is undefined");

        return this.storage.one(webShopId);
    }

    save(webShop: Api.WebShop): Promise<Api.WebShop | Api.ValidationResult> {
        if (!webShop)
            throw new Error("webShop is undefined");

        return new Promise(resolve => {
            this.validator
                .validate(webShop)
                .then(validationResult => {
                    if (!validationResult.isValid)
                        resolve(validationResult);
                    else
                        this.storage
                            .save(webShop)
                            .then(() => this.one(webShop.id))
                            .then(entity => resolve(entity));
                });
        });
    }
}