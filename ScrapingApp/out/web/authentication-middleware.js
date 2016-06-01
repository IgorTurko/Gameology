/// <reference path="../typings/index.d.ts" />
"use strict";
var AuthenticationMiddleware = (function () {
    function AuthenticationMiddleware(authenticationTokenProvider) {
        this.authenticationTokenProvider = authenticationTokenProvider;
        if (!authenticationTokenProvider)
            throw new Error("authenticationTokenProvider is undefined");
    }
    /**
     * Request handler which checks authentication and setups the request.user.
     * If request is not authenticated the 401 Not authorized status will be returned to the client.
     */
    AuthenticationMiddleware.prototype.run = function (request, response, next) {
        var authenticationToken = (request.cookies || {})[AuthenticationMiddleware.authenticationCookieName];
        this.authenticationTokenProvider
            .validate(authenticationToken)
            .then(function (user) {
            request.user = user;
            next();
        })
            .catch(function () { return response.sendStatus(401).end(); });
    };
    /**
     * Adds authentication cookie to response.
     */
    AuthenticationMiddleware.prototype.signIn = function (request, response, userId) {
        if (!response)
            throw new Error("response is undefined");
        if (!userId)
            throw new Error("userId is undefined");
        return this.authenticationTokenProvider
            .generate(userId)
            .then(function (info) {
            response.cookie(AuthenticationMiddleware.authenticationCookieName, info.token, {
                httpOnly: true,
                expires: info.expiresAt
            });
        });
    };
    AuthenticationMiddleware.authenticationCookieName = "auth";
    return AuthenticationMiddleware;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = AuthenticationMiddleware;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aGVudGljYXRpb24tbWlkZGxld2FyZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NlcnZlci93ZWIvYXV0aGVudGljYXRpb24tbWlkZGxld2FyZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQyw4Q0FBOEM7O0FBSS9DO0lBR0ksa0NBQW9CLDJCQUF3RTtRQUF4RSxnQ0FBMkIsR0FBM0IsMkJBQTJCLENBQTZDO1FBQ3hGLEVBQUUsQ0FBQyxDQUFDLENBQUMsMkJBQTJCLENBQUM7WUFDN0IsTUFBTSxJQUFJLEtBQUssQ0FBQywwQ0FBMEMsQ0FBQyxDQUFDO0lBQ3BFLENBQUM7SUFDRDs7O09BR0c7SUFDSCxzQ0FBRyxHQUFILFVBQUksT0FBd0IsRUFBRSxRQUEwQixFQUFFLElBQTBCO1FBQ2hGLElBQU0sbUJBQW1CLEdBQUcsQ0FBQyxPQUFPLENBQUMsT0FBTyxJQUFJLEVBQUUsQ0FBQyxDQUFDLHdCQUF3QixDQUFDLHdCQUF3QixDQUFDLENBQUM7UUFFdkcsSUFBSSxDQUFDLDJCQUEyQjthQUMzQixRQUFRLENBQUMsbUJBQW1CLENBQUM7YUFDN0IsSUFBSSxDQUFDLFVBQUEsSUFBSTtZQUNOLE9BQU8sQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1lBQ3BCLElBQUksRUFBRSxDQUFDO1FBQ1gsQ0FBQyxDQUFDO2FBQ0QsS0FBSyxDQUFDLGNBQU0sT0FBQSxRQUFRLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUE5QixDQUE4QixDQUFDLENBQUM7SUFDckQsQ0FBQztJQUVEOztPQUVHO0lBQ0gseUNBQU0sR0FBTixVQUFPLE9BQXdCLEVBQUUsUUFBMEIsRUFBRSxNQUFjO1FBQ3ZFLEVBQUUsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDO1lBQ1YsTUFBTSxJQUFJLEtBQUssQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO1FBQzdDLEVBQUUsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDO1lBQ1IsTUFBTSxJQUFJLEtBQUssQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1FBRTNDLE1BQU0sQ0FBQyxJQUFJLENBQUMsMkJBQTJCO2FBQ2xDLFFBQVEsQ0FBQyxNQUFNLENBQUM7YUFDaEIsSUFBSSxDQUFDLFVBQUEsSUFBSTtZQUNOLFFBQVEsQ0FBQyxNQUFNLENBQUMsd0JBQXdCLENBQUMsd0JBQXdCLEVBQzdELElBQUksQ0FBQyxLQUFLLEVBQUU7Z0JBQ1IsUUFBUSxFQUFFLElBQUk7Z0JBQ2QsT0FBTyxFQUFFLElBQUksQ0FBQyxTQUFTO2FBQzFCLENBQUMsQ0FBQztRQUNYLENBQUMsQ0FBQyxDQUFDO0lBQ1gsQ0FBQztJQXhDTSxpREFBd0IsR0FBRyxNQUFNLENBQUM7SUF5QzdDLCtCQUFDO0FBQUQsQ0FBQyxBQTFDRCxJQTBDQztBQTFDRDswQ0EwQ0MsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIu+7vy8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi90eXBpbmdzL2luZGV4LmQudHNcIiAvPlxuXG5pbXBvcnQgKiBhcyBleHByZXNzIGZyb20gXCJleHByZXNzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEF1dGhlbnRpY2F0aW9uTWlkZGxld2FyZSB7XG4gICAgc3RhdGljIGF1dGhlbnRpY2F0aW9uQ29va2llTmFtZSA9IFwiYXV0aFwiO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBhdXRoZW50aWNhdGlvblRva2VuUHJvdmlkZXI6IEF1dGhlbnRpY2F0aW9uLklBdXRoZW50aWNhdGlvblRva2VuUHJvdmlkZXIpIHtcbiAgICAgICAgaWYgKCFhdXRoZW50aWNhdGlvblRva2VuUHJvdmlkZXIpXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJhdXRoZW50aWNhdGlvblRva2VuUHJvdmlkZXIgaXMgdW5kZWZpbmVkXCIpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZXF1ZXN0IGhhbmRsZXIgd2hpY2ggY2hlY2tzIGF1dGhlbnRpY2F0aW9uIGFuZCBzZXR1cHMgdGhlIHJlcXVlc3QudXNlci5cbiAgICAgKiBJZiByZXF1ZXN0IGlzIG5vdCBhdXRoZW50aWNhdGVkIHRoZSA0MDEgTm90IGF1dGhvcml6ZWQgc3RhdHVzIHdpbGwgYmUgcmV0dXJuZWQgdG8gdGhlIGNsaWVudC5cbiAgICAgKi9cbiAgICBydW4ocmVxdWVzdDogZXhwcmVzcy5SZXF1ZXN0LCByZXNwb25zZTogZXhwcmVzcy5SZXNwb25zZSwgbmV4dDogZXhwcmVzcy5OZXh0RnVuY3Rpb24pIHtcbiAgICAgICAgY29uc3QgYXV0aGVudGljYXRpb25Ub2tlbiA9IChyZXF1ZXN0LmNvb2tpZXMgfHwge30pW0F1dGhlbnRpY2F0aW9uTWlkZGxld2FyZS5hdXRoZW50aWNhdGlvbkNvb2tpZU5hbWVdO1xuXG4gICAgICAgIHRoaXMuYXV0aGVudGljYXRpb25Ub2tlblByb3ZpZGVyXG4gICAgICAgICAgICAudmFsaWRhdGUoYXV0aGVudGljYXRpb25Ub2tlbilcbiAgICAgICAgICAgIC50aGVuKHVzZXIgPT4ge1xuICAgICAgICAgICAgICAgIHJlcXVlc3QudXNlciA9IHVzZXI7XG4gICAgICAgICAgICAgICAgbmV4dCgpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaCgoKSA9PiByZXNwb25zZS5zZW5kU3RhdHVzKDQwMSkuZW5kKCkpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFkZHMgYXV0aGVudGljYXRpb24gY29va2llIHRvIHJlc3BvbnNlLlxuICAgICAqL1xuICAgIHNpZ25JbihyZXF1ZXN0OiBleHByZXNzLlJlcXVlc3QsIHJlc3BvbnNlOiBleHByZXNzLlJlc3BvbnNlLCB1c2VySWQ6IHN0cmluZyk6IFByb21pc2U8YW55PiB7XG4gICAgICAgIGlmICghcmVzcG9uc2UpXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJyZXNwb25zZSBpcyB1bmRlZmluZWRcIik7XG4gICAgICAgIGlmICghdXNlcklkKVxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwidXNlcklkIGlzIHVuZGVmaW5lZFwiKTtcblxuICAgICAgICByZXR1cm4gdGhpcy5hdXRoZW50aWNhdGlvblRva2VuUHJvdmlkZXJcbiAgICAgICAgICAgIC5nZW5lcmF0ZSh1c2VySWQpXG4gICAgICAgICAgICAudGhlbihpbmZvID0+IHtcbiAgICAgICAgICAgICAgICByZXNwb25zZS5jb29raWUoQXV0aGVudGljYXRpb25NaWRkbGV3YXJlLmF1dGhlbnRpY2F0aW9uQ29va2llTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgaW5mby50b2tlbiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgaHR0cE9ubHk6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBleHBpcmVzOiBpbmZvLmV4cGlyZXNBdFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgIH1cbn0iXX0=