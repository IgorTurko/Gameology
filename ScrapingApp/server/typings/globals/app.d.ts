declare interface Configuration {
    fallbackPort: number;
    mongoUrl: string;
}

declare interface AuthenticationInfo {
    token: string;
    userId: string;
    expiresAt: Date;
}

declare interface AuthenticationTokenStorage {
    /**
     * Validates given authentication token and returns authentication information.
     * If token is not valid resulting promise will be rejected.
     * 
     */
    validate(authenticationToken: string): Promise<AuthenticationInfo>;

    /**
     * Generates and stores authentication info for specified user.
     * 
     */
    generate(userId: string): Promise<AuthenticationInfo>;
}