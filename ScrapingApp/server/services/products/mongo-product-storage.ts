/// <reference path="../../typings/index.d.ts" />

import Database from "../../data-access/db";

export default class MongoProductStorage implements Products.IProductStorage {
    constructor(private db: Database) {
        if (!db)
            throw new Error("db is missing");
    }

    all(): Promise<Api.Product[]> {
        return this.db
            .collection(Database.Collections.products)
            .then(c => c.find({}, { _id: 0 }))
            .then(c => c.toArray());
    }

    one(id: string): Promise<Api.Product> {
        if (!id)
            throw new Error("id is undefined");

        return this.db
            .collection(Database.Collections.products)
            .then(c => c.find({ id: id }, { _id: 0 }))
            .then(c => c.limit(1))
            .then(c => c.next());
    }

    findByTitle(title: string): Promise<Api.Product> {
        if (!title)
            return Promise.reject("Title is empty");

        return this.db
            .collection(Database.Collections.products)
            .then(c => c.find({ title }, { _id: 0 }))
            .then(c => c.limit(1))
            .then(c => c.next());
    }

    save(product: Api.Product): Promise<Api.Product> {
        if (!product)
            throw new Error("product is undefined");

        return this.db
            .collection(Database.Collections.products)
            .then(c => c.updateOne({
                id: product.id
            },
                {
                    $set: {
                        id: product.id,
                        title: product.title,
                        scrapingUrls: product.scrapingUrls
                    }
                },
                {
                    upsert: true
                }))
            .then(() => product);
    }

    delete(productId: string): Promise<any> {
        if (!productId)
            throw new Error("Product ID is not defined.");

        return this.db
            .collection(Database.Collections.products)
            .then(c => c.deleteOne({ id: productId }))
            .then(c => true);
    }

    setScrapingData(productId: string, webShopId: string, values: Api.ScrapedValues, log: Api.ScrapeLog): Promise<Api.Product> {
        if (!productId)
            throw new Error("productId is undefined");
        if (!webShopId)
            throw new Error("webShopId is undefined");
        if (!values)
            throw new Error("values is undefined");

        return this.db
            .collection(Database.Collections.products)
            .then(c => c.updateOne(
                {
                    id: productId
                },
                {
                    $set: {
                        [`values.${webShopId}`]: values,
                        [`log.${webShopId}`]: log
                    }
                },
                {
                    upsert: true
                }))
            .then(r => this.one(productId));
    }

    discardScrapingLog(productId: string): Promise<any> {
        return this.db
            .collection(Database.Collections.products)
            .then(c => c.updateOne(
                { id: productId },
                { 
                    $unset: {
                        log: ""
                    }
                }
            ));
    }
}