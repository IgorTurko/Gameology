/// <reference path="../../typings/index.d.ts" />

export default class InMemoryAuthenticationTokenStorage implements Authentication.IAuthenticationTokenStorage {
    private storage: { [authenticationToken: string]: Authentication.AuthenticationInfo } = {};

    find(authenticationToken: string): Promise<Authentication.AuthenticationInfo> {
        if (!authenticationToken)
            return Promise.reject("Empty authentication token.");

        const info = this.storage[authenticationToken];

        if (!info)
            return Promise.reject("Token is invalid.");

        return Promise.resolve(info);
    }

    save(authenticationInfo: Authentication.AuthenticationInfo): Promise<Authentication.AuthenticationInfo> {
        if (!authenticationInfo)
            throw new Error("authenticationInfo is undefined");
        if (!authenticationInfo.token)
            throw new Error("authenticationInfo.token is undefined");

        this.storage[authenticationInfo.token] = authenticationInfo;

        return Promise.resolve(authenticationInfo);
    }

    remove(authenticationToken: string): Promise<any> {
        if (authenticationToken)
            delete this.storage[authenticationToken];

        return Promise.resolve(null);
    }
}