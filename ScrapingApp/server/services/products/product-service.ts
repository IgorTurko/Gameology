/// <reference path="../../typings/index.d.ts" />

import ProductValidator from "./product-validator";
import * as moment from "moment";

export default class ProductService {
    private validator = new ProductValidator();

    constructor(private storage: Products.IProductStorage) {
        if (!storage)
            throw new Error("storage is undefined");
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

    updateScrapedData(productId: string, webshopId: string, data: Scraping.WebShopScrapingResult): Promise<Products.Product> {
        if (!productId)
            throw new Error("productId is undefined");
        if (!webshopId)
            throw new Error("webShopId is undefined");
        if (!data)
            throw new Error("data is undefined");
        const now = moment.utc().toDate();

        return this.one(productId)
            .then(product => {
                if (!product.values)
                    product.values = {};

                let values = product.values[webshopId] || {
                    title: null,
                    price: null,
                    image: null
                };
                product.values[webshopId] = values;


                if (!product.log)
                    product.log = {};

                let log = product.log[webshopId] || {
                    url: null,
                    scrapedAt: null,
                    error: data.error,
                    values: {}
                };
                product.log[webshopId] = log;

                log.url = product.scrapingUrls[webshopId];
                log.scrapedAt = now;
                log.error = data.error;

                Object.keys(data.values)
                    .forEach(name => {
                        const value = data.values[name];

                        if (value.isSuccessful)
                            values[name] = value.value;

                        log.values[name] = {
                            scrapedAt: now,
                            error: value.error
                        };
                    });

                return this.storage.setScrapingData(product.id, webshopId, values, log);
            });
    }
}