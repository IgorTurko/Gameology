/// <reference path="../../typings/index.d.ts" />
import * as express from "express";

import Db from "../../data-access/db";

import MongoAuthenticationTokenStorage from "../../services/authentication/mongo-authentication-token-storage";
import AuthenticationTokenProvider from "../../services/authentication/authentication-token-provider";

import MongoUserAccountStorage from "../../services/users/mongo-user-account-storage";
import UserAccountService from "../../services/users/user-account-service";

import AuthenticationMiddleware from "../../web/authentication-middleware";

const db = new Db();

const tokenStorage = new MongoAuthenticationTokenStorage(db);
const tokenProvider = new AuthenticationTokenProvider(tokenStorage);
const authenticationMiddleware = new AuthenticationMiddleware(tokenProvider);

const userAccountService = new UserAccountService(new MongoUserAccountStorage(db));

const router = express.Router();

router.post("/login",
(req, res) => {
    const info: Api.AuthenticationCredentials = req.body;

    userAccountService.validateCredentials(info.login, info.password)
        .then(() => {
            const result: Api.IAuthenticationResponse = {
                ok: true,
                error: ""
            };
            authenticationMiddleware.signIn(req, res, info.login)
                .then(() => res.json(result).end());
        })
        .catch(error => {
            const result: Api.IAuthenticationResponse = {
                ok: false,
                error: error
            };

            res.json(result).end();
        });
});

router.use("*", (res, req, next) => authenticationMiddleware.run(res, req, next));

export default router;