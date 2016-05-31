/// <reference path="../typings/index.d.ts"/>
import * as express from "express";

import Db from "../data-access/db";
import MongoAuthenticationTokenStorage from "../services/authentication/mongo-authentication-token-storage";
import AuthenticationTokenProvider from "../services/authentication/authentication-token-provider";
import AuthenticationMiddleware from "../web/authentication-middleware";

const db = new Db();

const tokenStorage = new MongoAuthenticationTokenStorage(db);
const tokenProvider = new AuthenticationTokenProvider(tokenStorage);
const authenticationMiddleware = new AuthenticationMiddleware(tokenProvider);

const router = express.Router();

router.post("/login", (req, res, next) => {
    const info = req.body;
    if (info.login) {
        authenticationMiddleware.signIn(res, info.login);
    }
});

router.use("*", (res, req, next) => authenticationMiddleware.run(res, req, next));


export default router;