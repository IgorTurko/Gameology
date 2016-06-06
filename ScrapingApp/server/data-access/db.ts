/// <reference path="../typings/index.d.ts" />
import * as mongo from "mongodb";
import config from "../config";

let db: Promise<mongo.Db> = new Promise((resolve, reject) => {
    mongo.MongoClient.connect(config.mongoUrl,
    (err, db) => {
        if (err) {
            reject(err);
        } else {
            console.info(`Connected to Mongo server at ${config.mongoUrl}`);
            resolve(db);
        }
    });
});

export default class Database {
    static Collections = {
        sessions: "sessions",
        webshops: "webshops",
        products: "products",
        users: "users"
    };

    collection(collection: string): Promise<mongo.Collection> {
        if (!collection)
            throw new Error("collection is undefined");
        if (!Database.Collections[collection])
            throw new Error(`Collection ${collection} is unknown`);

        return this.connect()
            .then(db => db.collection(collection));
    }

    private connect(): Promise<mongo.Db> {
        return db;
    }
}