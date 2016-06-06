/// <reference path="../../typings/index.d.ts" />
import * as express from "express";

import Db from "../../data-access/db";
import MongoAuthenticationTokenStorage from "../../services/authentication/mongo-authentication-token-storage";
import InMemoryAuthenticationTokenStorage from "../../services/authentication/in-memory-authentication-token-storage";
import AuthenticationTokenProvider from "../../services/authentication/authentication-token-provider";
import AuthenticationMiddleware from "../../web/authentication-middleware";

const db = new Db();

const tokenStorage = new MongoAuthenticationTokenStorage(db);
// const tokenStorage = new InMemoryAuthenticationTokenStorage();
const tokenProvider = new AuthenticationTokenProvider(tokenStorage);
const authenticationMiddleware = new AuthenticationMiddleware(tokenProvider);

const router = express.Router();

router.post("/login", (req, res, next) => {
    const info: Api.AuthenticationCredentials = req.body;

    if (info.login) {
        authenticationMiddleware.signIn(req, res, info.login)
            .then(() => {
                res.sendStatus(200)
                    .end();
            });
    } else {
        res.sendStatus(400)
            .end();
    }
});

router.use("*", (res, req, next) => authenticationMiddleware.run(res, req, next));

export default router;