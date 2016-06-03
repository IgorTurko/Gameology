/// <reference path="../../typings/index.d.ts" />

import ProductValidator from "./product-validator";
import WebShopService from "../web-shop/web-shop-service";
import * as moment from "moment";

export default class ProductService {
    private validator = new ProductValidator();

    constructor(private storage: Products.IProductStorage,
                private webShopService: WebShopService) {
        if (!storage)
            throw new Error("storage is undefined");
        if (!webShopService)
            throw new Error("webShopService is undefined");
    }

    all(): Promise<Products.Product[]> {
        return this.storage.all();
    }

    save(product: Products.Product): Promise<Validator.ValidationResult> {
        if (!product)
            throw new Error("product is undefined");

        return new Promise((resolve, reject) => {
            this.validator
                .validate(product)
                .then(validationResult => {
                    if (!validationResult.isValid)
                        reject(validationResult);
                    else
                        this.storage
                            .save(product)
                            .then(() => resolve(validationResult));
                });
        });
    }

    one(productId: string): Promise<Products.Product> {
        if (!productId)
            throw new Error("productId is undefined");

        return this.storage.one(productId);
    }

    updateScrapedData(productId: string, webshopId: string, data: Products.ProductScrapedData): Promise<any> {
        if (!productId)
            throw new Error("productId is undefined");
        if (!webshopId)
            throw new Error("webShopId is undefined");
        if (!data)
            throw new Error("data is undefined");

        return Promise.all([this.one(productId), this.webShopService.one(webshopId)])
            .then(([product, webshop]) => {
                data.scrapedAt = moment().toDate();
                data.url = product.scrapingUrls[webshopId];

                return this.storage.setScrapingData(productId, webshopId, data);
            });
    }
}