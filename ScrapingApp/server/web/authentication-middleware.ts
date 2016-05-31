/// <reference path="../typings/index.d.ts" />

import * as express from "express";

class AuthenticationMiddleware {
    static authenticationCookieName = "auth";

    constructor(private authenticationTokenStorage: AuthenticationTokenStorage) {
        if (!authenticationTokenStorage)
            throw new Error("authenticationTokenStorage is undefined");
    }

    run(request: express.Request, response: express.Response, next: express.NextFunction) {
        const authenticationToken = request.cookies[AuthenticationMiddleware.authenticationCookieName];

        this.authenticationTokenStorage
            .validate(authenticationToken)
            .then(_ => next())
            .catch(err => response.sendStatus(401).end());
    }

    /**
     * Adds authentication cookie to response.
     * 
     * @param response
     * @param userId
     */
    signIn(response: express.Response, userId: string): Promise<any> {
        if (!response)
            throw new Error("response is undefined");
        if (!userId)
            throw new Error("userId is undefined");

        return this.authenticationTokenStorage
            .generate(userId)
            .then(info => {
                response.cookie(AuthenticationMiddleware.authenticationCookieName,
                    info.token,
                    {
                        httpOnly: true,
                        expires: info.expiresAt,
                    });
            });
    }
}