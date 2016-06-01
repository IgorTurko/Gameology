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
            .then(function (user) {
            request.user = user;
            next();
        })
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
            console.log("Authentication info generated");
            console.dir(info);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aGVudGljYXRpb24tbWlkZGxld2FyZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NlcnZlci93ZWIvYXV0aGVudGljYXRpb24tbWlkZGxld2FyZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw4Q0FBOEM7O0FBSTlDO0lBR0ksa0NBQW9CLDJCQUF3RTtRQUF4RSxnQ0FBMkIsR0FBM0IsMkJBQTJCLENBQTZDO1FBQ3hGLEVBQUUsQ0FBQyxDQUFDLENBQUMsMkJBQTJCLENBQUM7WUFDN0IsTUFBTSxJQUFJLEtBQUssQ0FBQywwQ0FBMEMsQ0FBQyxDQUFDO0lBQ3BFLENBQUM7SUFFRCxzQ0FBRyxHQUFILFVBQUksT0FBd0IsRUFBRSxRQUEwQixFQUFFLElBQTBCO1FBQ2hGLElBQU0sbUJBQW1CLEdBQUcsQ0FBQyxPQUFPLENBQUMsT0FBTyxJQUFJLEVBQUUsQ0FBQyxDQUFDLHdCQUF3QixDQUFDLHdCQUF3QixDQUFDLENBQUM7UUFFdkcsSUFBSSxDQUFDLDJCQUEyQjthQUMzQixRQUFRLENBQUMsbUJBQW1CLENBQUM7YUFDN0IsSUFBSSxDQUFDLFVBQUEsSUFBSTtZQUNOLE9BQU8sQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1lBQ3BCLElBQUksRUFBRSxDQUFDO1FBQ1gsQ0FBQyxDQUFDO2FBQ0QsS0FBSyxDQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsUUFBUSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBOUIsQ0FBOEIsQ0FBQyxDQUFDO0lBQ3RELENBQUM7SUFFRDs7Ozs7T0FLRztJQUNILHlDQUFNLEdBQU4sVUFBTyxRQUEwQixFQUFFLE1BQWM7UUFDN0MsRUFBRSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUM7WUFDVixNQUFNLElBQUksS0FBSyxDQUFDLHVCQUF1QixDQUFDLENBQUM7UUFDN0MsRUFBRSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUM7WUFDUixNQUFNLElBQUksS0FBSyxDQUFDLHFCQUFxQixDQUFDLENBQUM7UUFFM0MsTUFBTSxDQUFDLElBQUksQ0FBQywyQkFBMkI7YUFDbEMsUUFBUSxDQUFDLE1BQU0sQ0FBQzthQUNoQixJQUFJLENBQUMsVUFBQSxJQUFJO1lBQ04sT0FBTyxDQUFDLEdBQUcsQ0FBQywrQkFBK0IsQ0FBQyxDQUFDO1lBQzdDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7WUFFbEIsUUFBUSxDQUFDLE1BQU0sQ0FBQyx3QkFBd0IsQ0FBQyx3QkFBd0IsRUFDN0QsSUFBSSxDQUFDLEtBQUssRUFDVjtnQkFDSSxRQUFRLEVBQUUsSUFBSTtnQkFDZCxPQUFPLEVBQUUsSUFBSSxDQUFDLFNBQVM7YUFDMUIsQ0FBQyxDQUFDO1FBQ1gsQ0FBQyxDQUFDLENBQUM7SUFDWCxDQUFDO0lBNUNNLGlEQUF3QixHQUFHLE1BQU0sQ0FBQztJQTZDN0MsK0JBQUM7QUFBRCxDQUFDLEFBOUNELElBOENDO0FBOUNEOzBDQThDQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL3R5cGluZ3MvaW5kZXguZC50c1wiIC8+XHJcblxyXG5pbXBvcnQgKiBhcyBleHByZXNzIGZyb20gXCJleHByZXNzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBdXRoZW50aWNhdGlvbk1pZGRsZXdhcmUge1xyXG4gICAgc3RhdGljIGF1dGhlbnRpY2F0aW9uQ29va2llTmFtZSA9IFwiYXV0aFwiO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgYXV0aGVudGljYXRpb25Ub2tlblByb3ZpZGVyOiBBdXRoZW50aWNhdGlvbi5JQXV0aGVudGljYXRpb25Ub2tlblByb3ZpZGVyKSB7XHJcbiAgICAgICAgaWYgKCFhdXRoZW50aWNhdGlvblRva2VuUHJvdmlkZXIpXHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcImF1dGhlbnRpY2F0aW9uVG9rZW5Qcm92aWRlciBpcyB1bmRlZmluZWRcIik7XHJcbiAgICB9XHJcblxyXG4gICAgcnVuKHJlcXVlc3Q6IGV4cHJlc3MuUmVxdWVzdCwgcmVzcG9uc2U6IGV4cHJlc3MuUmVzcG9uc2UsIG5leHQ6IGV4cHJlc3MuTmV4dEZ1bmN0aW9uKSB7XHJcbiAgICAgICAgY29uc3QgYXV0aGVudGljYXRpb25Ub2tlbiA9IChyZXF1ZXN0LmNvb2tpZXMgfHwge30pW0F1dGhlbnRpY2F0aW9uTWlkZGxld2FyZS5hdXRoZW50aWNhdGlvbkNvb2tpZU5hbWVdO1xyXG5cclxuICAgICAgICB0aGlzLmF1dGhlbnRpY2F0aW9uVG9rZW5Qcm92aWRlclxyXG4gICAgICAgICAgICAudmFsaWRhdGUoYXV0aGVudGljYXRpb25Ub2tlbilcclxuICAgICAgICAgICAgLnRoZW4odXNlciA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXF1ZXN0LnVzZXIgPSB1c2VyO1xyXG4gICAgICAgICAgICAgICAgbmV4dCgpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goZXJyID0+IHJlc3BvbnNlLnNlbmRTdGF0dXMoNDAxKS5lbmQoKSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBZGRzIGF1dGhlbnRpY2F0aW9uIGNvb2tpZSB0byByZXNwb25zZS5cclxuICAgICAqIFxyXG4gICAgICogQHBhcmFtIHJlc3BvbnNlXHJcbiAgICAgKiBAcGFyYW0gdXNlcklkXHJcbiAgICAgKi9cclxuICAgIHNpZ25JbihyZXNwb25zZTogZXhwcmVzcy5SZXNwb25zZSwgdXNlcklkOiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgICAgIGlmICghcmVzcG9uc2UpXHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcInJlc3BvbnNlIGlzIHVuZGVmaW5lZFwiKTtcclxuICAgICAgICBpZiAoIXVzZXJJZClcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwidXNlcklkIGlzIHVuZGVmaW5lZFwiKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYXV0aGVudGljYXRpb25Ub2tlblByb3ZpZGVyXHJcbiAgICAgICAgICAgIC5nZW5lcmF0ZSh1c2VySWQpXHJcbiAgICAgICAgICAgIC50aGVuKGluZm8gPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYEF1dGhlbnRpY2F0aW9uIGluZm8gZ2VuZXJhdGVkYCk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmRpcihpbmZvKTtcclxuXHJcbiAgICAgICAgICAgICAgICByZXNwb25zZS5jb29raWUoQXV0aGVudGljYXRpb25NaWRkbGV3YXJlLmF1dGhlbnRpY2F0aW9uQ29va2llTmFtZSxcclxuICAgICAgICAgICAgICAgICAgICBpbmZvLnRva2VuLFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaHR0cE9ubHk6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4cGlyZXM6IGluZm8uZXhwaXJlc0F0LFxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxufSJdfQ==