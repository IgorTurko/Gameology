/// <reference path="../typings/index.d.ts" />
"use strict";
var AuthenticationMiddleware = (function () {
    function AuthenticationMiddleware(authenticationTokenProvider) {
        this.authenticationTokenProvider = authenticationTokenProvider;
        if (!authenticationTokenProvider)
            throw new Error("authenticationTokenProvider is undefined");
    }
    AuthenticationMiddleware.prototype.run = function (request, response, next) {
        var authenticationToken = (request.cookies || {})[AuthenticationMiddleware.authenticationCookieName];
        this.authenticationTokenProvider
            .validate(authenticationToken)
            .then(function (_) { return next(); })
            .catch(function (err) { return response.sendStatus(401).end(); });
    };
    /**
     * Adds authentication cookie to response.
     *
     * @param response
     * @param userId
     */
    AuthenticationMiddleware.prototype.signIn = function (response, userId) {
        if (!response)
            throw new Error("response is undefined");
        if (!userId)
            throw new Error("userId is undefined");
        return this.authenticationTokenProvider
            .generate(userId)
            .then(function (info) {
            response.cookie(AuthenticationMiddleware.authenticationCookieName, info.token, {
                httpOnly: true,
                expires: info.expiresAt,
            });
        });
    };
    AuthenticationMiddleware.authenticationCookieName = "auth";
    return AuthenticationMiddleware;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = AuthenticationMiddleware;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aGVudGljYXRpb24tbWlkZGxld2FyZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NlcnZlci93ZWIvYXV0aGVudGljYXRpb24tbWlkZGxld2FyZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw4Q0FBOEM7O0FBSTlDO0lBR0ksa0NBQW9CLDJCQUF3RTtRQUF4RSxnQ0FBMkIsR0FBM0IsMkJBQTJCLENBQTZDO1FBQ3hGLEVBQUUsQ0FBQyxDQUFDLENBQUMsMkJBQTJCLENBQUM7WUFDN0IsTUFBTSxJQUFJLEtBQUssQ0FBQywwQ0FBMEMsQ0FBQyxDQUFDO0lBQ3BFLENBQUM7SUFFRCxzQ0FBRyxHQUFILFVBQUksT0FBd0IsRUFBRSxRQUEwQixFQUFFLElBQTBCO1FBQ2hGLElBQU0sbUJBQW1CLEdBQUcsQ0FBQyxPQUFPLENBQUMsT0FBTyxJQUFJLEVBQUUsQ0FBQyxDQUFDLHdCQUF3QixDQUFDLHdCQUF3QixDQUFDLENBQUM7UUFFdkcsSUFBSSxDQUFDLDJCQUEyQjthQUMzQixRQUFRLENBQUMsbUJBQW1CLENBQUM7YUFDN0IsSUFBSSxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsSUFBSSxFQUFFLEVBQU4sQ0FBTSxDQUFDO2FBQ2pCLEtBQUssQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLFFBQVEsQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQTlCLENBQThCLENBQUMsQ0FBQztJQUN0RCxDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSCx5Q0FBTSxHQUFOLFVBQU8sUUFBMEIsRUFBRSxNQUFjO1FBQzdDLEVBQUUsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDO1lBQ1YsTUFBTSxJQUFJLEtBQUssQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO1FBQzdDLEVBQUUsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDO1lBQ1IsTUFBTSxJQUFJLEtBQUssQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1FBRTNDLE1BQU0sQ0FBQyxJQUFJLENBQUMsMkJBQTJCO2FBQ2xDLFFBQVEsQ0FBQyxNQUFNLENBQUM7YUFDaEIsSUFBSSxDQUFDLFVBQUEsSUFBSTtZQUNOLFFBQVEsQ0FBQyxNQUFNLENBQUMsd0JBQXdCLENBQUMsd0JBQXdCLEVBQzdELElBQUksQ0FBQyxLQUFLLEVBQ1Y7Z0JBQ0ksUUFBUSxFQUFFLElBQUk7Z0JBQ2QsT0FBTyxFQUFFLElBQUksQ0FBQyxTQUFTO2FBQzFCLENBQUMsQ0FBQztRQUNYLENBQUMsQ0FBQyxDQUFDO0lBQ1gsQ0FBQztJQXRDTSxpREFBd0IsR0FBRyxNQUFNLENBQUM7SUF1QzdDLCtCQUFDO0FBQUQsQ0FBQyxBQXhDRCxJQXdDQztBQXhDRDswQ0F3Q0MsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi90eXBpbmdzL2luZGV4LmQudHNcIiAvPlxyXG5cclxuaW1wb3J0ICogYXMgZXhwcmVzcyBmcm9tIFwiZXhwcmVzc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXV0aGVudGljYXRpb25NaWRkbGV3YXJlIHtcclxuICAgIHN0YXRpYyBhdXRoZW50aWNhdGlvbkNvb2tpZU5hbWUgPSBcImF1dGhcIjtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGF1dGhlbnRpY2F0aW9uVG9rZW5Qcm92aWRlcjogQXV0aGVudGljYXRpb24uSUF1dGhlbnRpY2F0aW9uVG9rZW5Qcm92aWRlcikge1xyXG4gICAgICAgIGlmICghYXV0aGVudGljYXRpb25Ub2tlblByb3ZpZGVyKVxyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJhdXRoZW50aWNhdGlvblRva2VuUHJvdmlkZXIgaXMgdW5kZWZpbmVkXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHJ1bihyZXF1ZXN0OiBleHByZXNzLlJlcXVlc3QsIHJlc3BvbnNlOiBleHByZXNzLlJlc3BvbnNlLCBuZXh0OiBleHByZXNzLk5leHRGdW5jdGlvbikge1xyXG4gICAgICAgIGNvbnN0IGF1dGhlbnRpY2F0aW9uVG9rZW4gPSAocmVxdWVzdC5jb29raWVzIHx8IHt9KVtBdXRoZW50aWNhdGlvbk1pZGRsZXdhcmUuYXV0aGVudGljYXRpb25Db29raWVOYW1lXTtcclxuXHJcbiAgICAgICAgdGhpcy5hdXRoZW50aWNhdGlvblRva2VuUHJvdmlkZXJcclxuICAgICAgICAgICAgLnZhbGlkYXRlKGF1dGhlbnRpY2F0aW9uVG9rZW4pXHJcbiAgICAgICAgICAgIC50aGVuKF8gPT4gbmV4dCgpKVxyXG4gICAgICAgICAgICAuY2F0Y2goZXJyID0+IHJlc3BvbnNlLnNlbmRTdGF0dXMoNDAxKS5lbmQoKSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBZGRzIGF1dGhlbnRpY2F0aW9uIGNvb2tpZSB0byByZXNwb25zZS5cclxuICAgICAqIFxyXG4gICAgICogQHBhcmFtIHJlc3BvbnNlXHJcbiAgICAgKiBAcGFyYW0gdXNlcklkXHJcbiAgICAgKi9cclxuICAgIHNpZ25JbihyZXNwb25zZTogZXhwcmVzcy5SZXNwb25zZSwgdXNlcklkOiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgICAgIGlmICghcmVzcG9uc2UpXHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcInJlc3BvbnNlIGlzIHVuZGVmaW5lZFwiKTtcclxuICAgICAgICBpZiAoIXVzZXJJZClcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwidXNlcklkIGlzIHVuZGVmaW5lZFwiKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYXV0aGVudGljYXRpb25Ub2tlblByb3ZpZGVyXHJcbiAgICAgICAgICAgIC5nZW5lcmF0ZSh1c2VySWQpXHJcbiAgICAgICAgICAgIC50aGVuKGluZm8gPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVzcG9uc2UuY29va2llKEF1dGhlbnRpY2F0aW9uTWlkZGxld2FyZS5hdXRoZW50aWNhdGlvbkNvb2tpZU5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgaW5mby50b2tlbixcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGh0dHBPbmx5OiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBleHBpcmVzOiBpbmZvLmV4cGlyZXNBdCxcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcbn0iXX0=