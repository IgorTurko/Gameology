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

    save(product: Api.Product): Promise<Api.Product> {
        if (!product)
            throw new Error("product is undefined");

        if (!product.id)
            product.id = uuid.v1();

        return this.validator
            .validate(product)
            .then(product => {
                return this.storage
                    .findByTitle(product.title)
                    .then(found => {
                        if (found && found.id !== product.id) {
                            throw {
                                "title": ["Product with such title already exists"]
                            };
                        }
                    })
                    .then(() => this.storage.save(product))
                    .then(() => this.findByTitle(product.id))
                    .then(product => {
                        eventBus.emit(EventNames.ProductUpdated, product.id);
                        return product;
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