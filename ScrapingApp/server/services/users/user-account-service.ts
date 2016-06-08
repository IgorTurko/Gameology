/// <reference path="../../typings/index.d.ts" />

export default class UserAccountService {
    constructor(private userAccountStorage: Users.IUserAccountStorage) {
        if (!userAccountStorage)
            throw new Error("userAccountStorage is undefined");
    }

    validateCredentials(userName: string, password: string): Promise<any> {
        if (!userName || !password)
            return Promise.reject("Login and password required.");


        return new Promise((resolve, reject) => {
            this.userAccountStorage
                .findByUserName(userName)
                .then(user => {
                    if (user != null && user.isActive && user.password === password)
                        resolve(true);
                    else
                        reject("User credentials is not valid.");
                });
        });
    }
}