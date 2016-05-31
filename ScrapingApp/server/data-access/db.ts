/// <reference path="../typings/index.d.ts"/>
import { Db, MongoClient } from "mongodb";
import config from "../config";


let db: Promise<Db> = new Promise((res, rej) => {
    MongoClient
});

export class Database {
    constructor() {
    }

    private connect(): Promise<Db> {
        return db;
    }
}