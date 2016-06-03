/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!***********************!*\
  !*** ./server/app.ts ***!
  \***********************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var express = __webpack_require__(/*! express */ 1);
	var bodyparser = __webpack_require__(/*! body-parser */ 2);
	var cookieparser = __webpack_require__(/*! cookie-parser */ 3);
	var config_1 = __webpack_require__(/*! ./config */ 4);
	var authentication_route_1 = __webpack_require__(/*! ./routes/authentication-route */ 6);
	var server = express();
	server.use(cookieparser());
	server.use("/api", bodyparser());
	server.use("/api", authentication_route_1.default);
	server.use("/", express.static("./out/client", {
	    index: "index.html"
	}));
	var port = process.env.PORT || config_1.default.fallbackPort;
	server.listen(port, function () {
	    console.log("Web server started at http://localhost:" + port + "/");
	});
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFFQSxJQUFZLE9BQU8sV0FBTyxTQUFTLENBQUMsQ0FBQTtBQUVwQyxJQUFZLFVBQVUsV0FBTSxhQUFhLENBQUMsQ0FBQTtBQUMxQyxJQUFZLFlBQVksV0FBTSxlQUFlLENBQUMsQ0FBQTtBQUU5Qyx1QkFBbUIsVUFBVSxDQUFDLENBQUE7QUFDOUIscUNBQWlDLCtCQUErQixDQUFDLENBQUE7QUFFakUsSUFBSSxNQUFNLEdBQUcsT0FBTyxFQUFFLENBQUM7QUFFdkIsTUFBTSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxDQUFDO0FBQzNCLE1BQU0sQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLFVBQVUsRUFBRSxDQUFDLENBQUM7QUFDakMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsOEJBQW9CLENBQUMsQ0FBQztBQUd6QyxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxPQUFPLENBQUMsTUFBTSxDQUFDLGNBQWMsRUFBRTtJQUMzQyxLQUFLLEVBQUUsWUFBWTtDQUN0QixDQUFDLENBQUMsQ0FBQztBQUVKLElBQU0sSUFBSSxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxJQUFJLGdCQUFNLENBQUMsWUFBWSxDQUFDO0FBQ3JELE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFO0lBQ2hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsNENBQTBDLElBQUksTUFBRyxDQUFDLENBQUM7QUFDbkUsQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi90eXBpbmdzL2luZGV4LmQudHNcIi8+XG5pbXBvcnQgKiBhcyBodHRwICBmcm9tIFwiaHR0cFwiO1xuaW1wb3J0ICogYXMgZXhwcmVzcyAgZnJvbSBcImV4cHJlc3NcIjtcblxuaW1wb3J0ICogYXMgYm9keXBhcnNlciBmcm9tIFwiYm9keS1wYXJzZXJcIjtcbmltcG9ydCAqIGFzIGNvb2tpZXBhcnNlciBmcm9tIFwiY29va2llLXBhcnNlclwiO1xuXG5pbXBvcnQgY29uZmlnIGZyb20gXCIuL2NvbmZpZ1wiO1xuaW1wb3J0IGF1dGhlbnRpY2F0aW9uUm91dGVyIGZyb20gXCIuL3JvdXRlcy9hdXRoZW50aWNhdGlvbi1yb3V0ZVwiO1xuXG5sZXQgc2VydmVyID0gZXhwcmVzcygpO1xuXG5zZXJ2ZXIudXNlKGNvb2tpZXBhcnNlcigpKTtcbnNlcnZlci51c2UoXCIvYXBpXCIsIGJvZHlwYXJzZXIoKSk7XG5zZXJ2ZXIudXNlKFwiL2FwaVwiLCBhdXRoZW50aWNhdGlvblJvdXRlcik7XG5cblxuc2VydmVyLnVzZShcIi9cIiwgZXhwcmVzcy5zdGF0aWMoXCIuL291dC9jbGllbnRcIiwge1xuICAgIGluZGV4OiBcImluZGV4Lmh0bWxcIlxufSkpO1xuXG5jb25zdCBwb3J0ID0gcHJvY2Vzcy5lbnYuUE9SVCB8fCBjb25maWcuZmFsbGJhY2tQb3J0O1xuc2VydmVyLmxpc3Rlbihwb3J0LCAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coYFdlYiBzZXJ2ZXIgc3RhcnRlZCBhdCBodHRwOi8vbG9jYWxob3N0OiR7cG9ydH0vYCk7XG59KTsiXX0=

/***/ },
/* 1 */
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ function(module, exports) {

	module.exports = require("express");

/***/ },
/* 2 */
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/***/ function(module, exports) {

	module.exports = require("body-parser");

/***/ },
/* 3 */
/*!********************************!*\
  !*** external "cookie-parser" ***!
  \********************************/
/***/ function(module, exports) {

	module.exports = require("cookie-parser");

/***/ },
/* 4 */
/*!**************************!*\
  !*** ./server/config.ts ***!
  \**************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/// <reference path="typings/index.d.ts"/>
	var fs = __webpack_require__(/*! fs */ 5);
	var configContent = fs.readFileSync("./config.json", "utf8");
	var configuration = JSON.parse(configContent);
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = configuration;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSwwQ0FBMEM7QUFDMUMsSUFBWSxFQUFFLFdBQU0sSUFBSSxDQUFDLENBQUE7QUFHekIsSUFBSSxhQUFhLEdBQUcsRUFBRSxDQUFDLFlBQVksQ0FBQyxlQUFlLEVBQUUsTUFBTSxDQUFDLENBQUM7QUFDN0QsSUFBSSxhQUFhLEdBQWtCLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLENBQUM7QUFFN0Q7a0JBQWUsYUFBYSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8vIDxyZWZlcmVuY2UgcGF0aD1cInR5cGluZ3MvaW5kZXguZC50c1wiLz5cclxuaW1wb3J0ICogYXMgZnMgZnJvbSBcImZzXCI7XHJcblxyXG5cclxubGV0IGNvbmZpZ0NvbnRlbnQgPSBmcy5yZWFkRmlsZVN5bmMoXCIuL2NvbmZpZy5qc29uXCIsIFwidXRmOFwiKTtcclxubGV0IGNvbmZpZ3VyYXRpb24gPSA8Q29uZmlndXJhdGlvbj5KU09OLnBhcnNlKGNvbmZpZ0NvbnRlbnQpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29uZmlndXJhdGlvbjsiXX0=

/***/ },
/* 5 */
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ function(module, exports) {

	module.exports = require("fs");

/***/ },
/* 6 */
/*!***********************************************!*\
  !*** ./server/routes/authentication-route.ts ***!
  \***********************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/// <reference path="../typings/index.d.ts" />
	var express = __webpack_require__(/*! express */ 1);
	var db_1 = __webpack_require__(/*! ../data-access/db */ 7);
	var mongo_authentication_token_storage_1 = __webpack_require__(/*! ../services/authentication/mongo-authentication-token-storage */ 9);
	var authentication_token_provider_1 = __webpack_require__(/*! ../services/authentication/authentication-token-provider */ 10);
	var authentication_middleware_1 = __webpack_require__(/*! ../web/authentication-middleware */ 13);
	var db = new db_1.default();
	var tokenStorage = new mongo_authentication_token_storage_1.default(db);
	// const tokenStorage = new InMemoryAuthenticationTokenStorage();
	var tokenProvider = new authentication_token_provider_1.default(tokenStorage);
	var authenticationMiddleware = new authentication_middleware_1.default(tokenProvider);
	var router = express.Router();
	router.post("/login", function (req, res, next) {
	    var info = req.body;
	    if (info.login) {
	        authenticationMiddleware.signIn(req, res, info.login)
	            .then(function () {
	            res.sendStatus(200)
	                .end();
	        });
	    }
	    else {
	        res.sendStatus(400)
	            .end();
	    }
	});
	router.use("*", function (res, req, next) { return authenticationMiddleware.run(res, req, next); });
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = router;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aGVudGljYXRpb24tcm91dGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhdXRoZW50aWNhdGlvbi1yb3V0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsOENBQThDO0FBQzlDLElBQVksT0FBTyxXQUFNLFNBQVMsQ0FBQyxDQUFBO0FBRW5DLG1CQUFlLG1CQUFtQixDQUFDLENBQUE7QUFDbkMsbURBQTRDLCtEQUErRCxDQUFDLENBQUE7QUFFNUcsOENBQXdDLDBEQUEwRCxDQUFDLENBQUE7QUFDbkcsMENBQXFDLGtDQUFrQyxDQUFDLENBQUE7QUFFeEUsSUFBTSxFQUFFLEdBQUcsSUFBSSxZQUFFLEVBQUUsQ0FBQztBQUVwQixJQUFNLFlBQVksR0FBRyxJQUFJLDRDQUErQixDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBQzdELGlFQUFpRTtBQUNqRSxJQUFNLGFBQWEsR0FBRyxJQUFJLHVDQUEyQixDQUFDLFlBQVksQ0FBQyxDQUFDO0FBQ3BFLElBQU0sd0JBQXdCLEdBQUcsSUFBSSxtQ0FBd0IsQ0FBQyxhQUFhLENBQUMsQ0FBQztBQUU3RSxJQUFNLE1BQU0sR0FBRyxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUM7QUFFaEMsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQ3BCLFVBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxJQUFJO0lBQ1gsSUFBTSxJQUFJLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQztJQUV0QixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUNiLHdCQUF3QixDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUM7YUFDaEQsSUFBSSxDQUFDO1lBQ0YsR0FBRyxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUM7aUJBQ2QsR0FBRyxFQUFFLENBQUM7UUFDZixDQUFDLENBQUMsQ0FBQztJQUNYLENBQUM7SUFBQyxJQUFJLENBQUMsQ0FBQztRQUNKLEdBQUcsQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDO2FBQ2QsR0FBRyxFQUFFLENBQUM7SUFDZixDQUFDO0FBQ0wsQ0FBQyxDQUFDLENBQUM7QUFFSCxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxVQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsSUFBSSxJQUFLLE9BQUEsd0JBQXdCLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLEVBQTVDLENBQTRDLENBQUMsQ0FBQztBQUVsRjtrQkFBZSxNQUFNLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vdHlwaW5ncy9pbmRleC5kLnRzXCIgLz5cbmltcG9ydCAqIGFzIGV4cHJlc3MgZnJvbSBcImV4cHJlc3NcIjtcblxuaW1wb3J0IERiIGZyb20gXCIuLi9kYXRhLWFjY2Vzcy9kYlwiO1xuaW1wb3J0IE1vbmdvQXV0aGVudGljYXRpb25Ub2tlblN0b3JhZ2UgZnJvbSBcIi4uL3NlcnZpY2VzL2F1dGhlbnRpY2F0aW9uL21vbmdvLWF1dGhlbnRpY2F0aW9uLXRva2VuLXN0b3JhZ2VcIjtcbmltcG9ydCBJbk1lbW9yeUF1dGhlbnRpY2F0aW9uVG9rZW5TdG9yYWdlIGZyb20gXCIuLi9zZXJ2aWNlcy9hdXRoZW50aWNhdGlvbi9pbi1tZW1vcnktYXV0aGVudGljYXRpb24tdG9rZW4tc3RvcmFnZVwiO1xuaW1wb3J0IEF1dGhlbnRpY2F0aW9uVG9rZW5Qcm92aWRlciBmcm9tIFwiLi4vc2VydmljZXMvYXV0aGVudGljYXRpb24vYXV0aGVudGljYXRpb24tdG9rZW4tcHJvdmlkZXJcIjtcbmltcG9ydCBBdXRoZW50aWNhdGlvbk1pZGRsZXdhcmUgZnJvbSBcIi4uL3dlYi9hdXRoZW50aWNhdGlvbi1taWRkbGV3YXJlXCI7XG5cbmNvbnN0IGRiID0gbmV3IERiKCk7XG5cbmNvbnN0IHRva2VuU3RvcmFnZSA9IG5ldyBNb25nb0F1dGhlbnRpY2F0aW9uVG9rZW5TdG9yYWdlKGRiKTtcbi8vIGNvbnN0IHRva2VuU3RvcmFnZSA9IG5ldyBJbk1lbW9yeUF1dGhlbnRpY2F0aW9uVG9rZW5TdG9yYWdlKCk7XG5jb25zdCB0b2tlblByb3ZpZGVyID0gbmV3IEF1dGhlbnRpY2F0aW9uVG9rZW5Qcm92aWRlcih0b2tlblN0b3JhZ2UpO1xuY29uc3QgYXV0aGVudGljYXRpb25NaWRkbGV3YXJlID0gbmV3IEF1dGhlbnRpY2F0aW9uTWlkZGxld2FyZSh0b2tlblByb3ZpZGVyKTtcblxuY29uc3Qgcm91dGVyID0gZXhwcmVzcy5Sb3V0ZXIoKTtcblxucm91dGVyLnBvc3QoXCIvbG9naW5cIixcbihyZXEsIHJlcywgbmV4dCkgPT4ge1xuICAgIGNvbnN0IGluZm8gPSByZXEuYm9keTtcblxuICAgIGlmIChpbmZvLmxvZ2luKSB7XG4gICAgICAgIGF1dGhlbnRpY2F0aW9uTWlkZGxld2FyZS5zaWduSW4ocmVxLCByZXMsIGluZm8ubG9naW4pXG4gICAgICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgcmVzLnNlbmRTdGF0dXMoMjAwKVxuICAgICAgICAgICAgICAgICAgICAuZW5kKCk7XG4gICAgICAgICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXMuc2VuZFN0YXR1cyg0MDApXG4gICAgICAgICAgICAuZW5kKCk7XG4gICAgfVxufSk7XG5cbnJvdXRlci51c2UoXCIqXCIsIChyZXMsIHJlcSwgbmV4dCkgPT4gYXV0aGVudGljYXRpb25NaWRkbGV3YXJlLnJ1bihyZXMsIHJlcSwgbmV4dCkpO1xuXG5leHBvcnQgZGVmYXVsdCByb3V0ZXI7Il19

/***/ },
/* 7 */
/*!**********************************!*\
  !*** ./server/data-access/db.ts ***!
  \**********************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/// <reference path="../typings/index.d.ts" />
	var mongo = __webpack_require__(/*! mongodb */ 8);
	var config_1 = __webpack_require__(/*! ../config */ 4);
	var db = new Promise(function (resolve, reject) {
	    mongo.MongoClient.connect(config_1.default.mongoUrl, function (err, db) {
	        if (err) {
	            reject(err);
	        }
	        else {
	            console.log("Connected to Mongo server at " + config_1.default.mongoUrl);
	            resolve(db);
	        }
	    });
	});
	var Database = (function () {
	    function Database() {
	    }
	    Database.prototype.collection = function (collection) {
	        if (!collection)
	            throw new Error("collection is undefined");
	        if (!Database.Collections[collection])
	            throw new Error("Collection " + collection + " is unknown");
	        return this.connect()
	            .then(function (db) { return db.collection(collection); });
	    };
	    Database.prototype.connect = function () {
	        return db;
	    };
	    Database.Collections = {
	        sessions: "sessions",
	        webshops: "webshops",
	        products: "products"
	    };
	    return Database;
	}());
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = Database;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJkYi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsOENBQThDO0FBQzlDLElBQVksS0FBSyxXQUFNLFNBQVMsQ0FBQyxDQUFBO0FBQ2pDLHVCQUFtQixXQUFXLENBQUMsQ0FBQTtBQUUvQixJQUFJLEVBQUUsR0FBc0IsSUFBSSxPQUFPLENBQUMsVUFBQyxPQUFPLEVBQUUsTUFBTTtJQUNwRCxLQUFLLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxnQkFBTSxDQUFDLFFBQVEsRUFDekMsVUFBQyxHQUFHLEVBQUUsRUFBRTtRQUNKLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDTixNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDaEIsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ0osT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQ0FBZ0MsZ0JBQU0sQ0FBQyxRQUFVLENBQUMsQ0FBQztZQUMvRCxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDaEIsQ0FBQztJQUNMLENBQUMsQ0FBQyxDQUFDO0FBQ1AsQ0FBQyxDQUFDLENBQUM7QUFFSDtJQUFBO0lBb0JBLENBQUM7SUFiRyw2QkFBVSxHQUFWLFVBQVcsVUFBa0I7UUFDekIsRUFBRSxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUM7WUFDWixNQUFNLElBQUksS0FBSyxDQUFDLHlCQUF5QixDQUFDLENBQUM7UUFDL0MsRUFBRSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQ2xDLE1BQU0sSUFBSSxLQUFLLENBQUMsZ0JBQWMsVUFBVSxnQkFBYSxDQUFDLENBQUM7UUFFM0QsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUU7YUFDaEIsSUFBSSxDQUFDLFVBQUEsRUFBRSxJQUFJLE9BQUEsRUFBRSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsRUFBekIsQ0FBeUIsQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFFTywwQkFBTyxHQUFmO1FBQ0ksTUFBTSxDQUFDLEVBQUUsQ0FBQztJQUNkLENBQUM7SUFsQk0sb0JBQVcsR0FBRztRQUNqQixRQUFRLEVBQUUsVUFBVTtRQUNwQixRQUFRLEVBQUUsVUFBVTtRQUNwQixRQUFRLEVBQUUsVUFBVTtLQUN2QixDQUFDO0lBZU4sZUFBQztBQUFELENBQUMsQUFwQkQsSUFvQkM7QUFwQkQ7MEJBb0JDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vdHlwaW5ncy9pbmRleC5kLnRzXCIgLz5cclxuaW1wb3J0ICogYXMgbW9uZ28gZnJvbSBcIm1vbmdvZGJcIjtcclxuaW1wb3J0IGNvbmZpZyBmcm9tIFwiLi4vY29uZmlnXCI7XHJcblxyXG5sZXQgZGI6IFByb21pc2U8bW9uZ28uRGI+ID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgbW9uZ28uTW9uZ29DbGllbnQuY29ubmVjdChjb25maWcubW9uZ29VcmwsXHJcbiAgICAoZXJyLCBkYikgPT4ge1xyXG4gICAgICAgIGlmIChlcnIpIHtcclxuICAgICAgICAgICAgcmVqZWN0KGVycik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coYENvbm5lY3RlZCB0byBNb25nbyBzZXJ2ZXIgYXQgJHtjb25maWcubW9uZ29Vcmx9YCk7XHJcbiAgICAgICAgICAgIHJlc29sdmUoZGIpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERhdGFiYXNlIHtcclxuICAgIHN0YXRpYyBDb2xsZWN0aW9ucyA9IHtcclxuICAgICAgICBzZXNzaW9uczogXCJzZXNzaW9uc1wiLFxyXG4gICAgICAgIHdlYnNob3BzOiBcIndlYnNob3BzXCIsXHJcbiAgICAgICAgcHJvZHVjdHM6IFwicHJvZHVjdHNcIlxyXG4gICAgfTtcclxuXHJcbiAgICBjb2xsZWN0aW9uKGNvbGxlY3Rpb246IHN0cmluZyk6IFByb21pc2U8bW9uZ28uQ29sbGVjdGlvbj4ge1xyXG4gICAgICAgIGlmICghY29sbGVjdGlvbilcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiY29sbGVjdGlvbiBpcyB1bmRlZmluZWRcIik7XHJcbiAgICAgICAgaWYgKCFEYXRhYmFzZS5Db2xsZWN0aW9uc1tjb2xsZWN0aW9uXSlcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBDb2xsZWN0aW9uICR7Y29sbGVjdGlvbn0gaXMgdW5rbm93bmApO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5jb25uZWN0KClcclxuICAgICAgICAgICAgLnRoZW4oZGIgPT4gZGIuY29sbGVjdGlvbihjb2xsZWN0aW9uKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjb25uZWN0KCk6IFByb21pc2U8bW9uZ28uRGI+IHtcclxuICAgICAgICByZXR1cm4gZGI7XHJcbiAgICB9XHJcbn0iXX0=

/***/ },
/* 8 */
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/***/ function(module, exports) {

	module.exports = require("mongodb");

/***/ },
/* 9 */
/*!******************************************************************************!*\
  !*** ./server/services/authentication/mongo-authentication-token-storage.ts ***!
  \******************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	/// <reference path="../../typings/index.d.ts" />
	"use strict";
	var db_1 = __webpack_require__(/*! ../../data-access/db */ 7);
	var MongoAuthenticationTokenStorage = (function () {
	    function MongoAuthenticationTokenStorage(db) {
	        this.db = db;
	        if (!db)
	            throw new Error("db is undefined");
	    }
	    MongoAuthenticationTokenStorage.prototype.find = function (authenticationToken) {
	        if (!authenticationToken)
	            throw new Error("authenticationToken is undefined");
	        return this.db
	            .collection(db_1.default.Collections.sessions)
	            .then(function (c) { return new Promise(function (resolve, reject) {
	            c.find({ token: authenticationToken })
	                .limit(1)
	                .next(function (err, doc) {
	                console.dir(doc);
	                if (err)
	                    reject(err);
	                else
	                    resolve(doc);
	            });
	        }); });
	    };
	    MongoAuthenticationTokenStorage.prototype.save = function (authenticationInfo) {
	        if (!authenticationInfo)
	            throw new Error("authenticationInfo is undefined");
	        return this.db
	            .collection(db_1.default.Collections.sessions)
	            .then(function (c) { return c.updateOne({
	            token: authenticationInfo.token
	        }, authenticationInfo, {
	            upsert: true
	        }); })
	            .then(function (res) {
	            console.dir(res);
	            return authenticationInfo;
	        });
	    };
	    MongoAuthenticationTokenStorage.prototype.remove = function (authenticationToken) {
	        if (!authenticationToken)
	            throw new Error("authenticationToken is undefined");
	        return this.db
	            .collection(db_1.default.Collections.sessions)
	            .then(function (c) { return c.deleteOne({ token: authenticationToken }); });
	    };
	    return MongoAuthenticationTokenStorage;
	}());
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = MongoAuthenticationTokenStorage;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9uZ28tYXV0aGVudGljYXRpb24tdG9rZW4tc3RvcmFnZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1vbmdvLWF1dGhlbnRpY2F0aW9uLXRva2VuLXN0b3JhZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsaURBQWlEOztBQUVqRCxtQkFBcUIsc0JBQXNCLENBQUMsQ0FBQTtBQUU1QztJQUVJLHlDQUFvQixFQUFZO1FBQVosT0FBRSxHQUFGLEVBQUUsQ0FBVTtRQUM1QixFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztZQUNKLE1BQU0sSUFBSSxLQUFLLENBQUMsaUJBQWlCLENBQUMsQ0FBQztJQUMzQyxDQUFDO0lBRUQsOENBQUksR0FBSixVQUFLLG1CQUEyQjtRQUM1QixFQUFFLENBQUMsQ0FBQyxDQUFDLG1CQUFtQixDQUFDO1lBQ3JCLE1BQU0sSUFBSSxLQUFLLENBQUMsa0NBQWtDLENBQUMsQ0FBQztRQUV4RCxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUU7YUFDVCxVQUFVLENBQUMsWUFBUSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUM7YUFDekMsSUFBSSxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsSUFBSSxPQUFPLENBQUMsVUFBQyxPQUFPLEVBQUUsTUFBTTtZQUNuQyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsS0FBSyxFQUFFLG1CQUFtQixFQUFFLENBQUM7aUJBQ2pDLEtBQUssQ0FBQyxDQUFDLENBQUM7aUJBQ1IsSUFBSSxDQUFDLFVBQUMsR0FBRyxFQUFFLEdBQUc7Z0JBQ1gsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFFakIsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDO29CQUNKLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDaEIsSUFBSTtvQkFDQSxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDckIsQ0FBQyxDQUFDLENBQUM7UUFDWCxDQUFDLENBQUMsRUFYUyxDQVdULENBQUMsQ0FBQztJQUNaLENBQUM7SUFFRCw4Q0FBSSxHQUFKLFVBQUssa0JBQXFEO1FBQ3RELEVBQUUsQ0FBQyxDQUFDLENBQUMsa0JBQWtCLENBQUM7WUFDcEIsTUFBTSxJQUFJLEtBQUssQ0FBQyxpQ0FBaUMsQ0FBQyxDQUFDO1FBRXZELE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRTthQUNULFVBQVUsQ0FBQyxZQUFRLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQzthQUN6QyxJQUFJLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLENBQUMsU0FBUyxDQUNsQjtZQUNJLEtBQUssRUFBRSxrQkFBa0IsQ0FBQyxLQUFLO1NBQ2xDLEVBQ0Qsa0JBQWtCLEVBQ2xCO1lBQ0ksTUFBTSxFQUFFLElBQUk7U0FDZixDQUFDLEVBUEssQ0FPTCxDQUFDO2FBQ04sSUFBSSxDQUFDLFVBQUEsR0FBRztZQUVMLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7WUFFakIsTUFBTSxDQUFDLGtCQUFrQixDQUFDO1FBQzlCLENBQUMsQ0FBQyxDQUFDO0lBQ1gsQ0FBQztJQUVELGdEQUFNLEdBQU4sVUFBTyxtQkFBMkI7UUFDOUIsRUFBRSxDQUFDLENBQUMsQ0FBQyxtQkFBbUIsQ0FBQztZQUNyQixNQUFNLElBQUksS0FBSyxDQUFDLGtDQUFrQyxDQUFDLENBQUM7UUFFeEQsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFO2FBQ1QsVUFBVSxDQUFDLFlBQVEsQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDO2FBQ3pDLElBQUksQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsQ0FBQyxTQUFTLENBQUMsRUFBRSxLQUFLLEVBQUUsbUJBQW1CLEVBQUUsQ0FBQyxFQUEzQyxDQUEyQyxDQUFDLENBQUM7SUFDaEUsQ0FBQztJQUNMLHNDQUFDO0FBQUQsQ0FBQyxBQXpERCxJQXlEQztBQXpERDtpREF5REMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi90eXBpbmdzL2luZGV4LmQudHNcIiAvPlxuXG5pbXBvcnQgRGF0YWJhc2UgZnJvbSBcIi4uLy4uL2RhdGEtYWNjZXNzL2RiXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1vbmdvQXV0aGVudGljYXRpb25Ub2tlblN0b3JhZ2UgaW1wbGVtZW50cyBBdXRoZW50aWNhdGlvbi5JQXV0aGVudGljYXRpb25Ub2tlblN0b3JhZ2Uge1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBkYjogRGF0YWJhc2UpIHtcbiAgICAgICAgaWYgKCFkYilcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcImRiIGlzIHVuZGVmaW5lZFwiKTtcbiAgICB9XG5cbiAgICBmaW5kKGF1dGhlbnRpY2F0aW9uVG9rZW46IHN0cmluZyk6IFByb21pc2U8QXV0aGVudGljYXRpb24uQXV0aGVudGljYXRpb25JbmZvPiB7XG4gICAgICAgIGlmICghYXV0aGVudGljYXRpb25Ub2tlbilcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcImF1dGhlbnRpY2F0aW9uVG9rZW4gaXMgdW5kZWZpbmVkXCIpO1xuXG4gICAgICAgIHJldHVybiB0aGlzLmRiXG4gICAgICAgICAgICAuY29sbGVjdGlvbihEYXRhYmFzZS5Db2xsZWN0aW9ucy5zZXNzaW9ucylcbiAgICAgICAgICAgIC50aGVuKGMgPT4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgICAgIGMuZmluZCh7IHRva2VuOiBhdXRoZW50aWNhdGlvblRva2VuIH0pXG4gICAgICAgICAgICAgICAgICAgIC5saW1pdCgxKVxuICAgICAgICAgICAgICAgICAgICAubmV4dCgoZXJyLCBkb2MpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZGlyKGRvYyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlcnIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGVycik7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShkb2MpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pKTtcbiAgICB9XG5cbiAgICBzYXZlKGF1dGhlbnRpY2F0aW9uSW5mbzogQXV0aGVudGljYXRpb24uQXV0aGVudGljYXRpb25JbmZvKTogUHJvbWlzZTxBdXRoZW50aWNhdGlvbi5BdXRoZW50aWNhdGlvbkluZm8+IHtcbiAgICAgICAgaWYgKCFhdXRoZW50aWNhdGlvbkluZm8pXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJhdXRoZW50aWNhdGlvbkluZm8gaXMgdW5kZWZpbmVkXCIpO1xuXG4gICAgICAgIHJldHVybiB0aGlzLmRiXG4gICAgICAgICAgICAuY29sbGVjdGlvbihEYXRhYmFzZS5Db2xsZWN0aW9ucy5zZXNzaW9ucylcbiAgICAgICAgICAgIC50aGVuKGMgPT4gYy51cGRhdGVPbmUoXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0b2tlbjogYXV0aGVudGljYXRpb25JbmZvLnRva2VuXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBhdXRoZW50aWNhdGlvbkluZm8sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB1cHNlcnQ6IHRydWVcbiAgICAgICAgICAgICAgICB9KSlcbiAgICAgICAgICAgIC50aGVuKHJlcyA9PiB7XG5cbiAgICAgICAgICAgICAgICBjb25zb2xlLmRpcihyZXMpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuIGF1dGhlbnRpY2F0aW9uSW5mbztcbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJlbW92ZShhdXRoZW50aWNhdGlvblRva2VuOiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xuICAgICAgICBpZiAoIWF1dGhlbnRpY2F0aW9uVG9rZW4pXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJhdXRoZW50aWNhdGlvblRva2VuIGlzIHVuZGVmaW5lZFwiKTtcblxuICAgICAgICByZXR1cm4gdGhpcy5kYlxuICAgICAgICAgICAgLmNvbGxlY3Rpb24oRGF0YWJhc2UuQ29sbGVjdGlvbnMuc2Vzc2lvbnMpXG4gICAgICAgICAgICAudGhlbihjID0+IGMuZGVsZXRlT25lKHsgdG9rZW46IGF1dGhlbnRpY2F0aW9uVG9rZW4gfSkpO1xuICAgIH1cbn0iXX0=

/***/ },
/* 10 */
/*!*************************************************************************!*\
  !*** ./server/services/authentication/authentication-token-provider.ts ***!
  \*************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/// <reference path="../../typings/index.d.ts" />
	var uuid = __webpack_require__(/*! node-uuid */ 11);
	var moment = __webpack_require__(/*! moment */ 12);
	var AuthenticationTokenProvider = (function () {
	    function AuthenticationTokenProvider(storage) {
	        this.storage = storage;
	        if (!storage)
	            throw new Error("storage is undefined");
	    }
	    AuthenticationTokenProvider.prototype.validate = function (authenticationToken) {
	        var _this = this;
	        if (!authenticationToken)
	            return Promise.reject(null);
	        return new Promise(function (resolve, reject) {
	            _this.storage
	                .find(authenticationToken)
	                .then(function (info) {
	                var now = moment.utc().toDate();
	                if (info.expiresAt < now)
	                    _this.storage
	                        .remove(authenticationToken)
	                        .then(function () { return reject("Token is expired"); })
	                        .catch(function (err) { return reject(err); });
	                else
	                    resolve(info);
	            })
	                .catch(function (err) { return reject(err); });
	        });
	    };
	    AuthenticationTokenProvider.prototype.generate = function (userId) {
	        if (!userId)
	            throw new Error("userId is undefined");
	        var info = {
	            userId: userId,
	            token: uuid.v1(),
	            expiresAt: moment.utc().add(moment.duration(5, "day")).toDate()
	        };
	        return this.storage
	            .save(info);
	    };
	    return AuthenticationTokenProvider;
	}());
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = AuthenticationTokenProvider;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aGVudGljYXRpb24tdG9rZW4tcHJvdmlkZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhdXRoZW50aWNhdGlvbi10b2tlbi1wcm92aWRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsaURBQWlEO0FBQ2pELElBQVksSUFBSSxXQUFNLFdBQVcsQ0FBQyxDQUFBO0FBQ2xDLElBQVksTUFBTSxXQUFNLFFBQVEsQ0FBQyxDQUFBO0FBRWpDO0lBRUkscUNBQW9CLE9BQW1EO1FBQW5ELFlBQU8sR0FBUCxPQUFPLENBQTRDO1FBQ25FLEVBQUUsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDO1lBQ1QsTUFBTSxJQUFJLEtBQUssQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO0lBQ2hELENBQUM7SUFFRCw4Q0FBUSxHQUFSLFVBQVMsbUJBQTJCO1FBQXBDLGlCQW9CQztRQW5CRyxFQUFFLENBQUMsQ0FBQyxDQUFDLG1CQUFtQixDQUFDO1lBQ3JCLE1BQU0sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRWhDLE1BQU0sQ0FBQyxJQUFJLE9BQU8sQ0FBb0MsVUFBQyxPQUFPLEVBQUUsTUFBTTtZQUNsRSxLQUFJLENBQUMsT0FBTztpQkFDUCxJQUFJLENBQUMsbUJBQW1CLENBQUM7aUJBQ3pCLElBQUksQ0FBQyxVQUFBLElBQUk7Z0JBQ04sSUFBTSxHQUFHLEdBQUcsTUFBTSxDQUFDLEdBQUcsRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDO2dCQUVsQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxHQUFHLEdBQUcsQ0FBQztvQkFDckIsS0FBSSxDQUFDLE9BQU87eUJBQ1AsTUFBTSxDQUFDLG1CQUFtQixDQUFDO3lCQUMzQixJQUFJLENBQUMsY0FBTSxPQUFBLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQyxFQUExQixDQUEwQixDQUFDO3lCQUN0QyxLQUFLLENBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxNQUFNLENBQUMsR0FBRyxDQUFDLEVBQVgsQ0FBVyxDQUFDLENBQUM7Z0JBQ25DLElBQUk7b0JBQ0EsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3RCLENBQUMsQ0FBQztpQkFDRCxLQUFLLENBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxNQUFNLENBQUMsR0FBRyxDQUFDLEVBQVgsQ0FBVyxDQUFDLENBQUM7UUFDbkMsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsOENBQVEsR0FBUixVQUFTLE1BQWM7UUFDbkIsRUFBRSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUM7WUFDUixNQUFNLElBQUksS0FBSyxDQUFDLHFCQUFxQixDQUFDLENBQUM7UUFFM0MsSUFBTSxJQUFJLEdBQXNDO1lBQzVDLE1BQU0sRUFBRSxNQUFNO1lBQ2QsS0FBSyxFQUFFLElBQUksQ0FBQyxFQUFFLEVBQUU7WUFDaEIsU0FBUyxFQUFFLE1BQU0sQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxNQUFNLEVBQUU7U0FDbEUsQ0FBQztRQUVGLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTzthQUNkLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNwQixDQUFDO0lBQ0wsa0NBQUM7QUFBRCxDQUFDLEFBMUNELElBMENDO0FBMUNEOzZDQTBDQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL3R5cGluZ3MvaW5kZXguZC50c1wiIC8+XG5pbXBvcnQgKiBhcyB1dWlkIGZyb20gXCJub2RlLXV1aWRcIjtcbmltcG9ydCAqIGFzIG1vbWVudCBmcm9tIFwibW9tZW50XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEF1dGhlbnRpY2F0aW9uVG9rZW5Qcm92aWRlciBpbXBsZW1lbnRzIEF1dGhlbnRpY2F0aW9uLklBdXRoZW50aWNhdGlvblRva2VuUHJvdmlkZXIge1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBzdG9yYWdlOiBBdXRoZW50aWNhdGlvbi5JQXV0aGVudGljYXRpb25Ub2tlblN0b3JhZ2UpIHtcbiAgICAgICAgaWYgKCFzdG9yYWdlKVxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwic3RvcmFnZSBpcyB1bmRlZmluZWRcIik7XG4gICAgfVxuXG4gICAgdmFsaWRhdGUoYXV0aGVudGljYXRpb25Ub2tlbjogc3RyaW5nKTogUHJvbWlzZTxBdXRoZW50aWNhdGlvbi5BdXRoZW50aWNhdGlvbkluZm8+IHtcbiAgICAgICAgaWYgKCFhdXRoZW50aWNhdGlvblRva2VuKVxuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG51bGwpO1xuXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZTxBdXRoZW50aWNhdGlvbi5BdXRoZW50aWNhdGlvbkluZm8+KChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc3RvcmFnZVxuICAgICAgICAgICAgICAgIC5maW5kKGF1dGhlbnRpY2F0aW9uVG9rZW4pXG4gICAgICAgICAgICAgICAgLnRoZW4oaW5mbyA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG5vdyA9IG1vbWVudC51dGMoKS50b0RhdGUoKTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoaW5mby5leHBpcmVzQXQgPCBub3cpXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0b3JhZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAucmVtb3ZlKGF1dGhlbnRpY2F0aW9uVG9rZW4pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4oKCkgPT4gcmVqZWN0KFwiVG9rZW4gaXMgZXhwaXJlZFwiKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuY2F0Y2goZXJyID0+IHJlamVjdChlcnIpKTtcbiAgICAgICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShpbmZvKTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5jYXRjaChlcnIgPT4gcmVqZWN0KGVycikpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBnZW5lcmF0ZSh1c2VySWQ6IHN0cmluZyk6IFByb21pc2U8QXV0aGVudGljYXRpb24uQXV0aGVudGljYXRpb25JbmZvPiB7XG4gICAgICAgIGlmICghdXNlcklkKVxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwidXNlcklkIGlzIHVuZGVmaW5lZFwiKTtcblxuICAgICAgICBjb25zdCBpbmZvOiBBdXRoZW50aWNhdGlvbi5BdXRoZW50aWNhdGlvbkluZm8gPSB7XG4gICAgICAgICAgICB1c2VySWQ6IHVzZXJJZCxcbiAgICAgICAgICAgIHRva2VuOiB1dWlkLnYxKCksXG4gICAgICAgICAgICBleHBpcmVzQXQ6IG1vbWVudC51dGMoKS5hZGQobW9tZW50LmR1cmF0aW9uKDUsIFwiZGF5XCIpKS50b0RhdGUoKVxuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiB0aGlzLnN0b3JhZ2VcbiAgICAgICAgICAgIC5zYXZlKGluZm8pO1xuICAgIH1cbn0iXX0=

/***/ },
/* 11 */
/*!****************************!*\
  !*** external "node-uuid" ***!
  \****************************/
/***/ function(module, exports) {

	module.exports = require("node-uuid");

/***/ },
/* 12 */
/*!*************************!*\
  !*** external "moment" ***!
  \*************************/
/***/ function(module, exports) {

	module.exports = require("moment");

/***/ },
/* 13 */
/*!*************************************************!*\
  !*** ./server/web/authentication-middleware.ts ***!
  \*************************************************/
/***/ function(module, exports) {

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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aGVudGljYXRpb24tbWlkZGxld2FyZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImF1dGhlbnRpY2F0aW9uLW1pZGRsZXdhcmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsOENBQThDOztBQUk5QztJQUdJLGtDQUFvQiwyQkFBd0U7UUFBeEUsZ0NBQTJCLEdBQTNCLDJCQUEyQixDQUE2QztRQUN4RixFQUFFLENBQUMsQ0FBQyxDQUFDLDJCQUEyQixDQUFDO1lBQzdCLE1BQU0sSUFBSSxLQUFLLENBQUMsMENBQTBDLENBQUMsQ0FBQztJQUNwRSxDQUFDO0lBQ0Q7OztPQUdHO0lBQ0gsc0NBQUcsR0FBSCxVQUFJLE9BQXdCLEVBQUUsUUFBMEIsRUFBRSxJQUEwQjtRQUNoRixJQUFNLG1CQUFtQixHQUFHLENBQUMsT0FBTyxDQUFDLE9BQU8sSUFBSSxFQUFFLENBQUMsQ0FBQyx3QkFBd0IsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO1FBRXZHLElBQUksQ0FBQywyQkFBMkI7YUFDM0IsUUFBUSxDQUFDLG1CQUFtQixDQUFDO2FBQzdCLElBQUksQ0FBQyxVQUFBLElBQUk7WUFDTixPQUFPLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztZQUNwQixJQUFJLEVBQUUsQ0FBQztRQUNYLENBQUMsQ0FBQzthQUNELEtBQUssQ0FBQyxjQUFNLE9BQUEsUUFBUSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBOUIsQ0FBOEIsQ0FBQyxDQUFDO0lBQ3JELENBQUM7SUFFRDs7T0FFRztJQUNILHlDQUFNLEdBQU4sVUFBTyxPQUF3QixFQUFFLFFBQTBCLEVBQUUsTUFBYztRQUN2RSxFQUFFLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQztZQUNWLE1BQU0sSUFBSSxLQUFLLENBQUMsdUJBQXVCLENBQUMsQ0FBQztRQUM3QyxFQUFFLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQztZQUNSLE1BQU0sSUFBSSxLQUFLLENBQUMscUJBQXFCLENBQUMsQ0FBQztRQUUzQyxNQUFNLENBQUMsSUFBSSxDQUFDLDJCQUEyQjthQUNsQyxRQUFRLENBQUMsTUFBTSxDQUFDO2FBQ2hCLElBQUksQ0FBQyxVQUFBLElBQUk7WUFDTixRQUFRLENBQUMsTUFBTSxDQUFDLHdCQUF3QixDQUFDLHdCQUF3QixFQUM3RCxJQUFJLENBQUMsS0FBSyxFQUFFO2dCQUNSLFFBQVEsRUFBRSxJQUFJO2dCQUNkLE9BQU8sRUFBRSxJQUFJLENBQUMsU0FBUzthQUMxQixDQUFDLENBQUM7UUFDWCxDQUFDLENBQUMsQ0FBQztJQUNYLENBQUM7SUF4Q00saURBQXdCLEdBQUcsTUFBTSxDQUFDO0lBeUM3QywrQkFBQztBQUFELENBQUMsQUExQ0QsSUEwQ0M7QUExQ0Q7MENBMENDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vdHlwaW5ncy9pbmRleC5kLnRzXCIgLz5cblxuaW1wb3J0ICogYXMgZXhwcmVzcyBmcm9tIFwiZXhwcmVzc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBdXRoZW50aWNhdGlvbk1pZGRsZXdhcmUge1xuICAgIHN0YXRpYyBhdXRoZW50aWNhdGlvbkNvb2tpZU5hbWUgPSBcImF1dGhcIjtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgYXV0aGVudGljYXRpb25Ub2tlblByb3ZpZGVyOiBBdXRoZW50aWNhdGlvbi5JQXV0aGVudGljYXRpb25Ub2tlblByb3ZpZGVyKSB7XG4gICAgICAgIGlmICghYXV0aGVudGljYXRpb25Ub2tlblByb3ZpZGVyKVxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiYXV0aGVudGljYXRpb25Ub2tlblByb3ZpZGVyIGlzIHVuZGVmaW5lZFwiKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmVxdWVzdCBoYW5kbGVyIHdoaWNoIGNoZWNrcyBhdXRoZW50aWNhdGlvbiBhbmQgc2V0dXBzIHRoZSByZXF1ZXN0LnVzZXIuXG4gICAgICogSWYgcmVxdWVzdCBpcyBub3QgYXV0aGVudGljYXRlZCB0aGUgNDAxIE5vdCBhdXRob3JpemVkIHN0YXR1cyB3aWxsIGJlIHJldHVybmVkIHRvIHRoZSBjbGllbnQuXG4gICAgICovXG4gICAgcnVuKHJlcXVlc3Q6IGV4cHJlc3MuUmVxdWVzdCwgcmVzcG9uc2U6IGV4cHJlc3MuUmVzcG9uc2UsIG5leHQ6IGV4cHJlc3MuTmV4dEZ1bmN0aW9uKSB7XG4gICAgICAgIGNvbnN0IGF1dGhlbnRpY2F0aW9uVG9rZW4gPSAocmVxdWVzdC5jb29raWVzIHx8IHt9KVtBdXRoZW50aWNhdGlvbk1pZGRsZXdhcmUuYXV0aGVudGljYXRpb25Db29raWVOYW1lXTtcblxuICAgICAgICB0aGlzLmF1dGhlbnRpY2F0aW9uVG9rZW5Qcm92aWRlclxuICAgICAgICAgICAgLnZhbGlkYXRlKGF1dGhlbnRpY2F0aW9uVG9rZW4pXG4gICAgICAgICAgICAudGhlbih1c2VyID0+IHtcbiAgICAgICAgICAgICAgICByZXF1ZXN0LnVzZXIgPSB1c2VyO1xuICAgICAgICAgICAgICAgIG5leHQoKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goKCkgPT4gcmVzcG9uc2Uuc2VuZFN0YXR1cyg0MDEpLmVuZCgpKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBZGRzIGF1dGhlbnRpY2F0aW9uIGNvb2tpZSB0byByZXNwb25zZS5cbiAgICAgKi9cbiAgICBzaWduSW4ocmVxdWVzdDogZXhwcmVzcy5SZXF1ZXN0LCByZXNwb25zZTogZXhwcmVzcy5SZXNwb25zZSwgdXNlcklkOiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xuICAgICAgICBpZiAoIXJlc3BvbnNlKVxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwicmVzcG9uc2UgaXMgdW5kZWZpbmVkXCIpO1xuICAgICAgICBpZiAoIXVzZXJJZClcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcInVzZXJJZCBpcyB1bmRlZmluZWRcIik7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuYXV0aGVudGljYXRpb25Ub2tlblByb3ZpZGVyXG4gICAgICAgICAgICAuZ2VuZXJhdGUodXNlcklkKVxuICAgICAgICAgICAgLnRoZW4oaW5mbyA9PiB7XG4gICAgICAgICAgICAgICAgcmVzcG9uc2UuY29va2llKEF1dGhlbnRpY2F0aW9uTWlkZGxld2FyZS5hdXRoZW50aWNhdGlvbkNvb2tpZU5hbWUsXG4gICAgICAgICAgICAgICAgICAgIGluZm8udG9rZW4sIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGh0dHBPbmx5OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgZXhwaXJlczogaW5mby5leHBpcmVzQXRcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICB9XG59Il19

/***/ }
/******/ ]);
//# sourceMappingURL=app.js.map