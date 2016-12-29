/// <reference path="../../typings/index.d.ts" />
import { Cursor } from "mongodb";

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

    search(search?: string): Promise<Cursor> {
        return this.db
            .collection(Database.Collections.products)
            .then(c => c.find({ title: { $regex: search, $options: "i" } }, { _id: 0 }));
    }

    paginate(search?: string, page?: number, perPage?: number): Promise<Api.Product[]> {
        return this.search(search).then(c => c.skip(page > 1 ? (page - 1) * perPage : 0).limit(perPage))
            .then(c => c.toArray())
    }

    count(search?: string): Promise<number> {
        return this.search(search).then(c => c.count(false));
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

    savePrice(productId: string, shopId: string, price: number): Promise<Api.IResponse> {
        if (!productId)
            throw new Error("product id is undefined");

        if (!productId)
            throw new Error("product id is undefined");

        return this.db
            .collection(Database.Collections.products)
            .then(c => {
                c.update({
                    id: productId
                },
                    {
                        $set: {
                            [`values.${shopId}.manualPrice`]: price
                        }
                    },
                    {
                        upsert: true
                    });
            })
            .then(() => ({ ok: true }));
    }

    delete(productId: string): Promise<any> {
        if (!productId)
            throw new Error("Product ID is not defined.");

        return this.db
            .collection(Database.Collections.products)
            .then(c => c.deleteOne({ id: productId }))
            .then(c => true);
    }

    setScrapingData(productId: string, webShopId: string, values: Api.ScrapedValues): Promise<Api.Product> {
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
                        [`values.${webShopId}`]: values
                    }
                },
                {
                    upsert: true
                }))
            .then(r => this.one(productId));
    }

    discardScrapingData(productId: string, shops: string[]): Promise<any> {
        if (!shops || !shops.length) {
            return;
        }

        const unset = shops.reduce((val, shopId) => {
            val[`log.${shopId}`] = "";
            val[`values.${shopId}`] = "";

            return val;
        }, {});


        return this.db
            .collection(Database.Collections.products)
            .then(c => c.updateOne(
                { id: productId },
                { $unset: unset }
            ));
    }
}