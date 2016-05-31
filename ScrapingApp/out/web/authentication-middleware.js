/// <reference path="../typings/index.d.ts" />
"use strict";
var AuthenticationMiddleware = (function () {
    function AuthenticationMiddleware(authenticationTokenStorage) {
        this.authenticationTokenStorage = authenticationTokenStorage;
        if (!authenticationTokenStorage)
            throw new Error("authenticationTokenStorage is undefined");
    }
    AuthenticationMiddleware.prototype.run = function (request, response, next) {
        var authenticationToken = request.cookies[AuthenticationMiddleware.authenticationCookieName];
        this.authenticationTokenStorage
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
        return this.authenticationTokenStorage
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aGVudGljYXRpb24tbWlkZGxld2FyZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NlcnZlci93ZWIvYXV0aGVudGljYXRpb24tbWlkZGxld2FyZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw4Q0FBOEM7O0FBSTlDO0lBR0ksa0NBQW9CLDBCQUFzRDtRQUF0RCwrQkFBMEIsR0FBMUIsMEJBQTBCLENBQTRCO1FBQ3RFLEVBQUUsQ0FBQyxDQUFDLENBQUMsMEJBQTBCLENBQUM7WUFDNUIsTUFBTSxJQUFJLEtBQUssQ0FBQyx5Q0FBeUMsQ0FBQyxDQUFDO0lBQ25FLENBQUM7SUFFRCxzQ0FBRyxHQUFILFVBQUksT0FBd0IsRUFBRSxRQUEwQixFQUFFLElBQTBCO1FBQ2hGLElBQU0sbUJBQW1CLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQyx3QkFBd0IsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO1FBRS9GLElBQUksQ0FBQywwQkFBMEI7YUFDMUIsUUFBUSxDQUFDLG1CQUFtQixDQUFDO2FBQzdCLElBQUksQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLElBQUksRUFBRSxFQUFOLENBQU0sQ0FBQzthQUNqQixLQUFLLENBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxRQUFRLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUE5QixDQUE4QixDQUFDLENBQUM7SUFDdEQsQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0gseUNBQU0sR0FBTixVQUFPLFFBQTBCLEVBQUUsTUFBYztRQUM3QyxFQUFFLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQztZQUNWLE1BQU0sSUFBSSxLQUFLLENBQUMsdUJBQXVCLENBQUMsQ0FBQztRQUM3QyxFQUFFLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQztZQUNSLE1BQU0sSUFBSSxLQUFLLENBQUMscUJBQXFCLENBQUMsQ0FBQztRQUUzQyxNQUFNLENBQUMsSUFBSSxDQUFDLDBCQUEwQjthQUNqQyxRQUFRLENBQUMsTUFBTSxDQUFDO2FBQ2hCLElBQUksQ0FBQyxVQUFBLElBQUk7WUFDTixRQUFRLENBQUMsTUFBTSxDQUFDLHdCQUF3QixDQUFDLHdCQUF3QixFQUM3RCxJQUFJLENBQUMsS0FBSyxFQUNWO2dCQUNJLFFBQVEsRUFBRSxJQUFJO2dCQUNkLE9BQU8sRUFBRSxJQUFJLENBQUMsU0FBUzthQUMxQixDQUFDLENBQUM7UUFDWCxDQUFDLENBQUMsQ0FBQztJQUNYLENBQUM7SUF0Q00saURBQXdCLEdBQUcsTUFBTSxDQUFDO0lBdUM3QywrQkFBQztBQUFELENBQUMsQUF4Q0QsSUF3Q0MiLCJzb3VyY2VzQ29udGVudCI6WyIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vdHlwaW5ncy9pbmRleC5kLnRzXCIgLz5cclxuXHJcbmltcG9ydCAqIGFzIGV4cHJlc3MgZnJvbSBcImV4cHJlc3NcIjtcclxuXHJcbmNsYXNzIEF1dGhlbnRpY2F0aW9uTWlkZGxld2FyZSB7XHJcbiAgICBzdGF0aWMgYXV0aGVudGljYXRpb25Db29raWVOYW1lID0gXCJhdXRoXCI7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBhdXRoZW50aWNhdGlvblRva2VuU3RvcmFnZTogQXV0aGVudGljYXRpb25Ub2tlblN0b3JhZ2UpIHtcclxuICAgICAgICBpZiAoIWF1dGhlbnRpY2F0aW9uVG9rZW5TdG9yYWdlKVxyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJhdXRoZW50aWNhdGlvblRva2VuU3RvcmFnZSBpcyB1bmRlZmluZWRcIik7XHJcbiAgICB9XHJcblxyXG4gICAgcnVuKHJlcXVlc3Q6IGV4cHJlc3MuUmVxdWVzdCwgcmVzcG9uc2U6IGV4cHJlc3MuUmVzcG9uc2UsIG5leHQ6IGV4cHJlc3MuTmV4dEZ1bmN0aW9uKSB7XHJcbiAgICAgICAgY29uc3QgYXV0aGVudGljYXRpb25Ub2tlbiA9IHJlcXVlc3QuY29va2llc1tBdXRoZW50aWNhdGlvbk1pZGRsZXdhcmUuYXV0aGVudGljYXRpb25Db29raWVOYW1lXTtcclxuXHJcbiAgICAgICAgdGhpcy5hdXRoZW50aWNhdGlvblRva2VuU3RvcmFnZVxyXG4gICAgICAgICAgICAudmFsaWRhdGUoYXV0aGVudGljYXRpb25Ub2tlbilcclxuICAgICAgICAgICAgLnRoZW4oXyA9PiBuZXh0KCkpXHJcbiAgICAgICAgICAgIC5jYXRjaChlcnIgPT4gcmVzcG9uc2Uuc2VuZFN0YXR1cyg0MDEpLmVuZCgpKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEFkZHMgYXV0aGVudGljYXRpb24gY29va2llIHRvIHJlc3BvbnNlLlxyXG4gICAgICogXHJcbiAgICAgKiBAcGFyYW0gcmVzcG9uc2VcclxuICAgICAqIEBwYXJhbSB1c2VySWRcclxuICAgICAqL1xyXG4gICAgc2lnbkluKHJlc3BvbnNlOiBleHByZXNzLlJlc3BvbnNlLCB1c2VySWQ6IHN0cmluZyk6IFByb21pc2U8YW55PiB7XHJcbiAgICAgICAgaWYgKCFyZXNwb25zZSlcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwicmVzcG9uc2UgaXMgdW5kZWZpbmVkXCIpO1xyXG4gICAgICAgIGlmICghdXNlcklkKVxyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJ1c2VySWQgaXMgdW5kZWZpbmVkXCIpO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5hdXRoZW50aWNhdGlvblRva2VuU3RvcmFnZVxyXG4gICAgICAgICAgICAuZ2VuZXJhdGUodXNlcklkKVxyXG4gICAgICAgICAgICAudGhlbihpbmZvID0+IHtcclxuICAgICAgICAgICAgICAgIHJlc3BvbnNlLmNvb2tpZShBdXRoZW50aWNhdGlvbk1pZGRsZXdhcmUuYXV0aGVudGljYXRpb25Db29raWVOYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgIGluZm8udG9rZW4sXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBodHRwT25seTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXhwaXJlczogaW5mby5leHBpcmVzQXQsXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG59Il19