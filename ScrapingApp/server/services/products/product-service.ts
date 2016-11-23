/// <reference path="../../typings/index.d.ts" />

import * as moment from "moment";
import * as uuid from "node-uuid";

import { eventBus, EventNames } from "../event-bus";

import { ProductValidator, PriceValidator } from "./product-validator";

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
                    .then(() => this.writeProductAndDiscardScrapeData(product))
                    .then(product => {
                        eventBus.emit(EventNames.ProductUpdated, product.id);
                        return product;
                    });
            });
    }

    savePrice(productId: string, shopId: string, price: string): Promise<Api.IResponse> {
        if (!productId)
            throw new Error("product id is undefined");
        
        if (!shopId)
            throw new Error("shop id is undefined");

        let priceValidator = new PriceValidator();    

        return priceValidator
            .validate(price)
            .then(r => {
                return this.storage.savePrice(productId, shopId, r);
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

    updateScrapedData(productId: string, webshopId: string, data: Api.ScrapedValues): Promise<Api.Product> {
        if (!productId)
            throw new Error("productId is undefined");
        if (!webshopId)
            throw new Error("webShopId is undefined");
        if (!data)
            throw new Error("data is undefined");

        return this.one(productId)
            .then(product => {
                return this.storage.setScrapingData(product.id, webshopId, data);
            });
    }

    delete(productId: string): Promise<any> {
        if (!productId)
            throw new Error("Product ID is not defined.");
        return this.storage.delete(productId);
    }

    /**
     * Writes validated product to storage and removes values and logs for changed URL.
     */
    writeProductAndDiscardScrapeData(product: Api.Product): Promise<Api.Product> {
        return this.one(product.id)
            .then(origin => {

                return this.storage
                    .save(product)
                    .then(() => {
                        if (origin) {
                            const shops = Object.entries(product.scrapingUrls)
                                .filter(([shop, url]) => {
                                    const originUrl = origin.scrapingUrls[shop];

                                    return url !== originUrl;
                                })
                                .map(([shop, url]) => shop);

                            const removedShops = Object.keys(origin.scrapingUrls)
                                .filter(shopId => !product.scrapingUrls[shopId]);

                            shops.push(...removedShops);

                            return this.storage.discardScrapingData(product.id, shops);
                        }
                        else {
                            return Promise.resolve();
                        }
                    })
                    .then(() => this.storage.one(product.id))
            });
    }
}