/// <reference path="../../typings/index.d.ts" />

import Database from "../../data-access/db";

export default class MongoWebShopStorage implements WebShops.IWebShopStorage {
    constructor(private db: Database) {
        if (!db)
            throw new Error("db is undefined");
    }

    all(): Promise<WebShops.WebShop[]> {
        return this.db
            .collection(Database.Collections.webshops)
            .then(c => c.find({}, { _id: 0 }))
            .then(c => c.toArray());
    }

    one(id: string): Promise<WebShops.WebShop> {
        if (!id)
            throw new Error("id is undefined");

        return this.db
            .collection(Database.Collections.webshops)
            .then(c => c.find({ id: id }, { _id: 0 }))
            .then(r => r.limit(1))
            .then(c => c.next());
    }

    save(webShop: WebShops.WebShop): Promise<WebShops.WebShop> {
        if (!webShop)
            throw new Error("webShop is undefined");

        return this.db
            .collection(Database.Collections.webshops)
            .then(c => c.updateOne({ id: webShop.id }, webShop, { upsert: true }))
            .then(() => webShop);
    }
}