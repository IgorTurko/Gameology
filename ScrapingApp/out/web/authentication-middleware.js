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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aGVudGljYXRpb24tbWlkZGxld2FyZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NlcnZlci93ZWIvYXV0aGVudGljYXRpb24tbWlkZGxld2FyZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQyw4Q0FBOEM7O0FBSS9DO0lBR0ksa0NBQW9CLDJCQUF3RTtRQUF4RSxnQ0FBMkIsR0FBM0IsMkJBQTJCLENBQTZDO1FBQ3hGLEVBQUUsQ0FBQyxDQUFDLENBQUMsMkJBQTJCLENBQUM7WUFDN0IsTUFBTSxJQUFJLEtBQUssQ0FBQywwQ0FBMEMsQ0FBQyxDQUFDO0lBQ3BFLENBQUM7SUFDRDs7O09BR0c7SUFDSCxzQ0FBRyxHQUFILFVBQUksT0FBd0IsRUFBRSxRQUEwQixFQUFFLElBQTBCO1FBQ2hGLElBQU0sbUJBQW1CLEdBQUcsQ0FBQyxPQUFPLENBQUMsT0FBTyxJQUFJLEVBQUUsQ0FBQyxDQUFDLHdCQUF3QixDQUFDLHdCQUF3QixDQUFDLENBQUM7UUFFdkcsSUFBSSxDQUFDLDJCQUEyQjthQUMzQixRQUFRLENBQUMsbUJBQW1CLENBQUM7YUFDN0IsSUFBSSxDQUFDLFVBQUEsSUFBSTtZQUNOLE9BQU8sQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1lBQ3BCLElBQUksRUFBRSxDQUFDO1FBQ1gsQ0FBQyxDQUFDO2FBQ0QsS0FBSyxDQUFDLGNBQU0sT0FBQSxRQUFRLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUE5QixDQUE4QixDQUFDLENBQUM7SUFDckQsQ0FBQztJQUVEOztPQUVHO0lBQ0gseUNBQU0sR0FBTixVQUFPLE9BQXdCLEVBQUUsUUFBMEIsRUFBRSxNQUFjO1FBQ3ZFLEVBQUUsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDO1lBQ1YsTUFBTSxJQUFJLEtBQUssQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO1FBQzdDLEVBQUUsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDO1lBQ1IsTUFBTSxJQUFJLEtBQUssQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1FBRTNDLE1BQU0sQ0FBQyxJQUFJLENBQUMsMkJBQTJCO2FBQ2xDLFFBQVEsQ0FBQyxNQUFNLENBQUM7YUFDaEIsSUFBSSxDQUFDLFVBQUEsSUFBSTtZQUNOLFFBQVEsQ0FBQyxNQUFNLENBQUMsd0JBQXdCLENBQUMsd0JBQXdCLEVBQzdELElBQUksQ0FBQyxLQUFLLEVBQUU7Z0JBQ1IsUUFBUSxFQUFFLElBQUk7Z0JBQ2QsT0FBTyxFQUFFLElBQUksQ0FBQyxTQUFTO2FBQzFCLENBQUMsQ0FBQztRQUNYLENBQUMsQ0FBQyxDQUFDO0lBQ1gsQ0FBQztJQXhDTSxpREFBd0IsR0FBRyxNQUFNLENBQUM7SUF5QzdDLCtCQUFDO0FBQUQsQ0FBQyxBQTFDRCxJQTBDQztBQTFDRDswQ0EwQ0MsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIu+7vy8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi90eXBpbmdzL2luZGV4LmQudHNcIiAvPlxyXG5cclxuaW1wb3J0ICogYXMgZXhwcmVzcyBmcm9tIFwiZXhwcmVzc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXV0aGVudGljYXRpb25NaWRkbGV3YXJlIHtcclxuICAgIHN0YXRpYyBhdXRoZW50aWNhdGlvbkNvb2tpZU5hbWUgPSBcImF1dGhcIjtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGF1dGhlbnRpY2F0aW9uVG9rZW5Qcm92aWRlcjogQXV0aGVudGljYXRpb24uSUF1dGhlbnRpY2F0aW9uVG9rZW5Qcm92aWRlcikge1xyXG4gICAgICAgIGlmICghYXV0aGVudGljYXRpb25Ub2tlblByb3ZpZGVyKVxyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJhdXRoZW50aWNhdGlvblRva2VuUHJvdmlkZXIgaXMgdW5kZWZpbmVkXCIpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBSZXF1ZXN0IGhhbmRsZXIgd2hpY2ggY2hlY2tzIGF1dGhlbnRpY2F0aW9uIGFuZCBzZXR1cHMgdGhlIHJlcXVlc3QudXNlci5cclxuICAgICAqIElmIHJlcXVlc3QgaXMgbm90IGF1dGhlbnRpY2F0ZWQgdGhlIDQwMSBOb3QgYXV0aG9yaXplZCBzdGF0dXMgd2lsbCBiZSByZXR1cm5lZCB0byB0aGUgY2xpZW50LlxyXG4gICAgICovXHJcbiAgICBydW4ocmVxdWVzdDogZXhwcmVzcy5SZXF1ZXN0LCByZXNwb25zZTogZXhwcmVzcy5SZXNwb25zZSwgbmV4dDogZXhwcmVzcy5OZXh0RnVuY3Rpb24pIHtcclxuICAgICAgICBjb25zdCBhdXRoZW50aWNhdGlvblRva2VuID0gKHJlcXVlc3QuY29va2llcyB8fCB7fSlbQXV0aGVudGljYXRpb25NaWRkbGV3YXJlLmF1dGhlbnRpY2F0aW9uQ29va2llTmFtZV07XHJcblxyXG4gICAgICAgIHRoaXMuYXV0aGVudGljYXRpb25Ub2tlblByb3ZpZGVyXHJcbiAgICAgICAgICAgIC52YWxpZGF0ZShhdXRoZW50aWNhdGlvblRva2VuKVxyXG4gICAgICAgICAgICAudGhlbih1c2VyID0+IHtcclxuICAgICAgICAgICAgICAgIHJlcXVlc3QudXNlciA9IHVzZXI7XHJcbiAgICAgICAgICAgICAgICBuZXh0KCk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaCgoKSA9PiByZXNwb25zZS5zZW5kU3RhdHVzKDQwMSkuZW5kKCkpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQWRkcyBhdXRoZW50aWNhdGlvbiBjb29raWUgdG8gcmVzcG9uc2UuXHJcbiAgICAgKi9cclxuICAgIHNpZ25JbihyZXF1ZXN0OiBleHByZXNzLlJlcXVlc3QsIHJlc3BvbnNlOiBleHByZXNzLlJlc3BvbnNlLCB1c2VySWQ6IHN0cmluZyk6IFByb21pc2U8YW55PiB7XHJcbiAgICAgICAgaWYgKCFyZXNwb25zZSlcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwicmVzcG9uc2UgaXMgdW5kZWZpbmVkXCIpO1xyXG4gICAgICAgIGlmICghdXNlcklkKVxyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJ1c2VySWQgaXMgdW5kZWZpbmVkXCIpO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5hdXRoZW50aWNhdGlvblRva2VuUHJvdmlkZXJcclxuICAgICAgICAgICAgLmdlbmVyYXRlKHVzZXJJZClcclxuICAgICAgICAgICAgLnRoZW4oaW5mbyA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXNwb25zZS5jb29raWUoQXV0aGVudGljYXRpb25NaWRkbGV3YXJlLmF1dGhlbnRpY2F0aW9uQ29va2llTmFtZSxcclxuICAgICAgICAgICAgICAgICAgICBpbmZvLnRva2VuLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGh0dHBPbmx5OiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBleHBpcmVzOiBpbmZvLmV4cGlyZXNBdFxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxufSJdfQ==