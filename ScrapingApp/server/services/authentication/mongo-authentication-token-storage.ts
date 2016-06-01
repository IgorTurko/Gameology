/// <reference path="../../typings/index.d.ts" />

import Database from "../../data-access/db";

export default class MongoAuthenticationTokenStorage implements Authentication.IAuthenticationTokenStorage {

    constructor(private db: Database) {
        if (!db)
            throw new Error("db is undefined");
    }

    find(authenticationToken: string): Promise<Authentication.AuthenticationInfo> {
        if (!authenticationToken)
            throw new Error("authenticationToken is undefined");

        return this.db
            .collection(Database.Collections.sessions)
            .then(c => new Promise((resolve, reject) => {
                c.find({ token: authenticationToken })
                    .limit(1)
                    .next((err, doc) => {
                        console.dir(doc);

                        if (err)
                            reject(err);
                        else
                            resolve(doc);
                    });
            }));
    }

    save(authenticationInfo: Authentication.AuthenticationInfo): Promise<Authentication.AuthenticationInfo> {
        if (!authenticationInfo)
            throw new Error("authenticationInfo is undefined");

        return this.db
            .collection(Database.Collections.sessions)
            .then(c => c.updateOne(
                {
                    token: authenticationInfo.token
                },
                authenticationInfo,
                {
                    upsert: true
                }))
            .then(res => {

                console.dir(res);

                return authenticationInfo;
            });
    }

    remove(authenticationToken: string): Promise<any> {
        if (!authenticationToken)
            throw new Error("authenticationToken is undefined");

        return this.db
            .collection(Database.Collections.sessions)
            .then(c => c.deleteOne({ token: authenticationToken }));
    }
}