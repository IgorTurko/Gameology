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

        return this.validator
            .validate(webShop)
            .then(webShop => this.storage
                .save(webShop)
                .then(() => this.one(webShop.id)));
    }

    put(webShop: Api.WebShop): Promise<Api.WebShop> {
        if (!webShop)
            throw new Error("webShop is undefined");

        return <Promise<Api.WebShop>><any>this.storage
            .put(webShop)
            .then(() => this.one(webShop.id))
            .catch(err => {
                throw {
                    "": `${err}`
                };
            });
    }
}