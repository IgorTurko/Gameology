/// <reference path="../../typings/index.d.ts"/>

import Database from "../../data-access/db";

export default class MongoUserAccountStorage implements Users.IUserAccountStorage {
    constructor(private db: Database) {
        if (!db)
            throw new Error("db is undefined");
    }

    findByUserName(userName: string): Promise<Users.UserAccount> {
        if (!userName)
            throw new Error("userName is undefined");

        return this.db
            .collection(Database.Collections.users)
            .then(c => c.find({ userName: userName }, { _id: 0 }))
            .then(r => r.limit(1))
            .then(c => c.next());
    }
}