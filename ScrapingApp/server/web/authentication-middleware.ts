/// <reference path="../typings/index.d.ts" />

import * as express from "express";

export default class AuthenticationMiddleware {
    static authenticationCookieName = "auth";

    constructor(private authenticationTokenProvider: Authentication.IAuthenticationTokenProvider) {
        if (!authenticationTokenProvider)
            throw new Error("authenticationTokenProvider is undefined");
    }
    /**
     * Request handler which checks authentication and setups the request.user.
     * If request is not authenticated the 401 Not authorized status will be returned to the client.
     */
    run(request: express.Request, response: express.Response, next: express.NextFunction) {
        const authenticationToken = (request.cookies || {})[AuthenticationMiddleware.authenticationCookieName];

        this.authenticationTokenProvider
            .validate(authenticationToken)
            .then(user => {
                request.user = user;
                next();
            })
            .catch(() => response.sendStatus(401).end());
    }

    /**
     * Adds authentication cookie to response.
     */
    signIn(request: express.Request, response: express.Response, userId: string): Promise<any> {
        if (!response)
            throw new Error("response is undefined");
        if (!userId)
            throw new Error("userId is undefined");

        return this.authenticationTokenProvider
            .generate(userId)
            .then(info => {
                response.cookie(AuthenticationMiddleware.authenticationCookieName,
                    info.token, {
                        httpOnly: true,
                        expires: info.expiresAt
                    });
            });
    }
}