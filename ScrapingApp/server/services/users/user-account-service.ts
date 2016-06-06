/// <reference path="../../typings/index.d.ts" />

export default class UserAccountService {
    constructor(private userAccountStorage: Users.IUserAccountStorage) {
        if (!userAccountStorage)
            throw new Error("userAccountStorage is undefined");
    }

    validateCredentials(userName: string, password: string): Promise<boolean> {
        if (!userName || !password)
            return Promise.resolve(false);

        return this.userAccountStorage
            .findByUserName(userName)
            .then(user => {
                return user != null && user.isActive && user.password === password;
            });
    }
}