/// <reference path="../../typings/index.d.ts" />

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
            .then(c => c.find({ id: id }))
            .then(c => c.limit(1))
            .then(c => c.next());
    }

    save(product: Products.Product): Promise<Products.Product> {
        if (!product)
            throw new Error("product is undefined");

        return this.db
            .collection(Database.Collections.products)
            .then(c => c.updateOne({ id: product.id }, product, { upsert: true }))
            .then(() => product);
    }
}