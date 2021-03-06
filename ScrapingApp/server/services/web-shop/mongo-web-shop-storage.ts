﻿/// <reference path="../../typings/index.d.ts" />

import Database from "../../data-access/db";

export default class MongoWebShopStorage implements WebShops.IWebShopStorage {
    constructor(private db: Database) {
        if (!db)
            throw new Error("db is undefined");
    }

    all(): Promise<Api.WebShop[]> {
        return this.db
            .collection(Database.Collections.webshops)
            .then(c => c.find({}, { _id: 0 }))
            .then(c => c.toArray());
    }

    one(id: string): Promise<Api.WebShop> {
        if (!id)
            throw new Error("id is undefined");

        return this.db
            .collection(Database.Collections.webshops)
            .then(c => c.find({ id: id }, { _id: 0 }))
            .then(c => c.limit(1).next());
    }

    save(webShop: Api.WebShop): Promise<Api.WebShop> {
        if (!webShop)
            throw new Error("webShop is undefined");

        return this.db
            .collection(Database.Collections.webshops)
            .then(c => c.updateOne(
                {
                    id: webShop.id
                },
                {
                    $set: {
                        deliveryPrice: webShop.deliveryPrice
                    }
                }
            ))
            .then(() => webShop);
    }

    put(webShop: Api.WebShop): Promise<Api.WebShop> {
        if (!webShop)
            throw new Error("webShop is undefined");

        return this.db
            .collection(Database.Collections.webshops)
            .then(c => c.updateOne(
                {
                    id: webShop.id
                },
                webShop,
                {
                    upsert: true
                }
            ))
            .then(() => webShop);
    }
}