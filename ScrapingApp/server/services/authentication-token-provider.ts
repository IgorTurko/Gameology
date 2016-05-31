/// <reference path="../typings/index.d.ts" />
import now from "./now";

export default class AuthenticationTokenProvider implements Authentication.IAuthenticationTokenProvider {

    constructor(private storage: Authentication.IAuthenticationTokenStorage) {
        if (!storage)
            throw new Error("storage is undefined");
    }

    validate(authenticationToken: string): Promise<Authentication.AuthenticationInfo> {
        if (!authenticationToken)
            return Promise.reject(null);

        return new Promise<Authentication.AuthenticationInfo>((resolve, reject) => {
            this.storage
                .find(authenticationToken)
                .then(info => {

                    if (info.expiresAt < now())
                        this.storage
                            .remove(authenticationToken)
                            .then(() => reject("Token is expired"))
                            .catch(err => reject(err));
                    else
                        resolve(info);
                })
                .catch(err => reject(err));
        });
    }

    generate(userId: string): Promise<Authentication.AuthenticationInfo> {
        if (!userId)
            throw new Error("userId is undefined");


    }
}