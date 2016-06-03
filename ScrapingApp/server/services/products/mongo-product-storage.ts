﻿/// <reference path="../../typings/index.d.ts" />

import Database from "../../data-access/db";

export default class MongoProductStorage implements Products.IProductStorage {
    constructor(private db: Database) {
        if (!db)
            throw new Error("db is missing");
    }

    all(): Promise<Products.Product[]> {
        return this.db
            .collection(Database.Collections.products)
            .then(c => c.find())
            .then(c => c.toArray());
    }

    one(id: string): Promise<Products.Product> {
        if (!id)
            throw new Error("id is undefined");

        return this.db
            .collection(Database.Collections.products)
            .then(c => c.find({
                id: id
            }))
            .then(c => c.limit(1))
            .then(c => c.next());
    }

    save(product: Products.Product): Promise<Products.Product> {
        if (!product)
            throw new Error("product is undefined");

        return this.db
            .collection(Database.Collections.products)
            .then(c => c.updateOne({
                    id: product.id
                },
                product,
                {
                    upsert: true
                }))
            .then(() => product);
    }

    setScrapingData(productId: string, webShopId: string, values: Products.ScrapedValues, log: Products.ScrapeLog): Promise<Products.Product> {
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
}