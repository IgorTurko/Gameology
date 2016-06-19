/// <reference path="../../typings/index.d.ts" />

import * as moment from "moment";
import * as uuid from "node-uuid";

import { eventBus, EventNames } from "../event-bus";

import ProductValidator from "./product-validator";

export default class ProductService {
    private validator = new ProductValidator();

    constructor(private storage: Products.IProductStorage) {
        if (!storage)
            throw new Error("storage is undefined");
    }

    all(): Promise<Api.Product[]> {
        return this.storage.all();
    }

    save(product: Api.Product): Promise<Api.ValidationResult | Api.Product> {
        if (!product)
            throw new Error("product is undefined");

        if (!product.id)
            product.id = uuid.v1();

        return new Promise(resolve => {

            this.validator
                .validate(product)
                .then(product => {
                    this.storage
                        .findByTitle(product.title)
                        .then(p => {
                            if (p && p.id !== product.id) {
                                const failedResult: Api.EntityValidationResult<Api.Product> = {
                                    entity: null,
                                    errors: {
                                        "title": ["Product with such title already exists"]
                                    },
                                    ok: false
                                };

                                resolve(failedResult);
                                throw failedResult;
                            }
                        })
                        .then(() => this.storage.save(product))
                        .then(() => this.one(product.id))
                        .then(p => {
                            eventBus.emit(EventNames.ProductUpdated, p.id);

                            return p;
                        })
                        .then(entity => resolve(entity));
                })
                .catch(err => {
                    const validationResult: Api.ValidationResult = {
                        ok: false,
                        errors: err
                    };

                    resolve(validationResult);
                });
        });
    }

    one(productId: string): Promise<Api.Product> {
        if (!productId)
            throw new Error("productId is undefined");

        return this.storage.one(productId);
    }

    findByTitle(title: string): Promise<Api.Product> {
        return this.storage.findByTitle(title);
    }

    updateScrapedData(productId: string, webshopId: string, data: Scraping.WebShopScrapingResult): Promise<Api.Product> {
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

                const values = product.values[webshopId] ||
                    {
                        title: null,
                        price: null,
                        image: null
                    };
                product.values[webshopId] = values;

                if (!product.log)
                    product.log = {};

                const log = product.log[webshopId] ||
                    {
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