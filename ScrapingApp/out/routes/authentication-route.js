"use strict";
/// <reference path="../typings/index.d.ts"/>
var express = require("express");
var db_1 = require("../data-access/db");
var mongo_authentication_token_storage_1 = require("../services/authentication/mongo-authentication-token-storage");
var authentication_token_provider_1 = require("../services/authentication/authentication-token-provider");
var authentication_middleware_1 = require("../web/authentication-middleware");
var db = new db_1.default();
var tokenStorage = new mongo_authentication_token_storage_1.default(db);
var tokenProvider = new authentication_token_provider_1.default(tokenStorage);
var authenticationMiddleware = new authentication_middleware_1.default(tokenProvider);
var router = express.Router();
router.post("/login", function (req, res, next) {
    var info = req.body;
});
router.use("*", function (res, req, next) { return authenticationMiddleware.run(res, req, next); });
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = router;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aGVudGljYXRpb24tcm91dGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zZXJ2ZXIvcm91dGVzL2F1dGhlbnRpY2F0aW9uLXJvdXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSw2Q0FBNkM7QUFDN0MsSUFBWSxPQUFPLFdBQU0sU0FBUyxDQUFDLENBQUE7QUFFbkMsbUJBQWUsbUJBQW1CLENBQUMsQ0FBQTtBQUNuQyxtREFBNEMsK0RBQStELENBQUMsQ0FBQTtBQUM1Ryw4Q0FBd0MsMERBQTBELENBQUMsQ0FBQTtBQUNuRywwQ0FBcUMsa0NBQWtDLENBQUMsQ0FBQTtBQUV4RSxJQUFNLEVBQUUsR0FBRyxJQUFJLFlBQUUsRUFBRSxDQUFDO0FBRXBCLElBQU0sWUFBWSxHQUFHLElBQUksNENBQStCLENBQUMsRUFBRSxDQUFDLENBQUM7QUFDN0QsSUFBTSxhQUFhLEdBQUcsSUFBSSx1Q0FBMkIsQ0FBQyxZQUFZLENBQUMsQ0FBQztBQUNwRSxJQUFNLHdCQUF3QixHQUFHLElBQUksbUNBQXdCLENBQUMsYUFBYSxDQUFDLENBQUM7QUFFN0UsSUFBTSxNQUFNLEdBQUcsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBRWhDLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLFVBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxJQUFJO0lBQ2pDLElBQU0sSUFBSSxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUM7QUFDMUIsQ0FBQyxDQUFDLENBQUM7QUFFSCxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxVQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsSUFBSSxJQUFLLE9BQUEsd0JBQXdCLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLEVBQTVDLENBQTRDLENBQUMsQ0FBQztBQUdsRjtrQkFBZSxNQUFNLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vdHlwaW5ncy9pbmRleC5kLnRzXCIvPlxyXG5pbXBvcnQgKiBhcyBleHByZXNzIGZyb20gXCJleHByZXNzXCI7XHJcblxyXG5pbXBvcnQgRGIgZnJvbSBcIi4uL2RhdGEtYWNjZXNzL2RiXCI7XHJcbmltcG9ydCBNb25nb0F1dGhlbnRpY2F0aW9uVG9rZW5TdG9yYWdlIGZyb20gXCIuLi9zZXJ2aWNlcy9hdXRoZW50aWNhdGlvbi9tb25nby1hdXRoZW50aWNhdGlvbi10b2tlbi1zdG9yYWdlXCI7XHJcbmltcG9ydCBBdXRoZW50aWNhdGlvblRva2VuUHJvdmlkZXIgZnJvbSBcIi4uL3NlcnZpY2VzL2F1dGhlbnRpY2F0aW9uL2F1dGhlbnRpY2F0aW9uLXRva2VuLXByb3ZpZGVyXCI7XHJcbmltcG9ydCBBdXRoZW50aWNhdGlvbk1pZGRsZXdhcmUgZnJvbSBcIi4uL3dlYi9hdXRoZW50aWNhdGlvbi1taWRkbGV3YXJlXCI7XHJcblxyXG5jb25zdCBkYiA9IG5ldyBEYigpO1xyXG5cclxuY29uc3QgdG9rZW5TdG9yYWdlID0gbmV3IE1vbmdvQXV0aGVudGljYXRpb25Ub2tlblN0b3JhZ2UoZGIpO1xyXG5jb25zdCB0b2tlblByb3ZpZGVyID0gbmV3IEF1dGhlbnRpY2F0aW9uVG9rZW5Qcm92aWRlcih0b2tlblN0b3JhZ2UpO1xyXG5jb25zdCBhdXRoZW50aWNhdGlvbk1pZGRsZXdhcmUgPSBuZXcgQXV0aGVudGljYXRpb25NaWRkbGV3YXJlKHRva2VuUHJvdmlkZXIpO1xyXG5cclxuY29uc3Qgcm91dGVyID0gZXhwcmVzcy5Sb3V0ZXIoKTtcclxuXHJcbnJvdXRlci5wb3N0KFwiL2xvZ2luXCIsIChyZXEsIHJlcywgbmV4dCkgPT4ge1xyXG4gICAgY29uc3QgaW5mbyA9IHJlcS5ib2R5O1xyXG59KTtcclxuXHJcbnJvdXRlci51c2UoXCIqXCIsIChyZXMsIHJlcSwgbmV4dCkgPT4gYXV0aGVudGljYXRpb25NaWRkbGV3YXJlLnJ1bihyZXMsIHJlcSwgbmV4dCkpO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJvdXRlcjsiXX0=