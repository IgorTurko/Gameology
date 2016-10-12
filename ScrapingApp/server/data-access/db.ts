/// <reference path="../typings/index.d.ts" />
import * as mongo from "mongodb";
import config from "../config";

let connectionString = config.mongoUrl;

let db: Promise<mongo.Db> = new Promise((resolve, reject) => {
    if (process.env.OPENSHIFT_MONGODB_DB_PASSWORD) {
        connectionString = process.env.OPENSHIFT_MONGODB_DB_USERNAME + ":" +
            process.env.OPENSHIFT_MONGODB_DB_PASSWORD + "@" +
            process.env.OPENSHIFT_MONGODB_DB_HOST + ':' +
            process.env.OPENSHIFT_MONGODB_DB_PORT + '/' +
            process.env.OPENSHIFT_APP_NAME;
    }
    mongo.MongoClient.connect('mongodb://' + connectionString,
        (err, db) => {
            if (err) {
                reject(err);
            } else {
                console.info(`Connected to Mongo server at ${connectionString}`);
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