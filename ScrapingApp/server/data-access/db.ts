/// <reference path="../typings/index.d.ts"/>
import { Db, MongoClient } from "mongodb";
import config from "../config";


let db: Promise<Db> = new Promise((resolve, reject) => {
    MongoClient.connect(config.mongoUrl, (err, db) => {
        if (err) {
            reject(err);
        }
        else {
            resolve(db);
        }
    });
});

export default class Database {
    constructor() {
    }

    private connect(): Promise<Db> {
        return db;
    }
}