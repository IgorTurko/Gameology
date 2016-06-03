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
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var express = __webpack_require__(1);
	var bodyparser = __webpack_require__(2);
	var cookieparser = __webpack_require__(3);
	var config_1 = __webpack_require__(4);
	var authentication_route_1 = __webpack_require__(6);
	var server = express();
	server.use(cookieparser());
	server.use("/api", bodyparser());
	server.use("/api", authentication_route_1.default);
	server.use("/", express.static("./public", {
	    index: "index.html"
	}));
	var port = process.env.PORT || config_1.default.fallbackPort;
	server.listen(port, function () {
	    console.log("Web server started at http://localhost:" + port + "/");
	});
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc2VydmVyL2FwcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBRUEsSUFBWSxPQUFPLFdBQU8sU0FBUyxDQUFDLENBQUE7QUFFcEMsSUFBWSxVQUFVLFdBQU0sYUFBYSxDQUFDLENBQUE7QUFDMUMsSUFBWSxZQUFZLFdBQU0sZUFBZSxDQUFDLENBQUE7QUFFOUMsdUJBQW1CLFVBQVUsQ0FBQyxDQUFBO0FBQzlCLHFDQUFpQywrQkFBK0IsQ0FBQyxDQUFBO0FBRWpFLElBQUksTUFBTSxHQUFHLE9BQU8sRUFBRSxDQUFDO0FBRXZCLE1BQU0sQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLENBQUMsQ0FBQztBQUMzQixNQUFNLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxVQUFVLEVBQUUsQ0FBQyxDQUFDO0FBQ2pDLE1BQU0sQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLDhCQUFvQixDQUFDLENBQUM7QUFHekMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsT0FBTyxDQUFDLE1BQU0sQ0FBQyxVQUFVLEVBQUU7SUFDdkMsS0FBSyxFQUFFLFlBQVk7Q0FDdEIsQ0FBQyxDQUFDLENBQUM7QUFFSixJQUFNLElBQUksR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksSUFBSSxnQkFBTSxDQUFDLFlBQVksQ0FBQztBQUNyRCxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRTtJQUNoQixPQUFPLENBQUMsR0FBRyxDQUFDLDRDQUEwQyxJQUFJLE1BQUcsQ0FBQyxDQUFDO0FBQ25FLENBQUMsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4vdHlwaW5ncy9pbmRleC5kLnRzXCIvPlxyXG5pbXBvcnQgKiBhcyBodHRwICBmcm9tIFwiaHR0cFwiO1xyXG5pbXBvcnQgKiBhcyBleHByZXNzICBmcm9tIFwiZXhwcmVzc1wiO1xyXG5cclxuaW1wb3J0ICogYXMgYm9keXBhcnNlciBmcm9tIFwiYm9keS1wYXJzZXJcIjtcclxuaW1wb3J0ICogYXMgY29va2llcGFyc2VyIGZyb20gXCJjb29raWUtcGFyc2VyXCI7XHJcblxyXG5pbXBvcnQgY29uZmlnIGZyb20gXCIuL2NvbmZpZ1wiO1xyXG5pbXBvcnQgYXV0aGVudGljYXRpb25Sb3V0ZXIgZnJvbSBcIi4vcm91dGVzL2F1dGhlbnRpY2F0aW9uLXJvdXRlXCI7XHJcblxyXG5sZXQgc2VydmVyID0gZXhwcmVzcygpO1xyXG5cclxuc2VydmVyLnVzZShjb29raWVwYXJzZXIoKSk7XHJcbnNlcnZlci51c2UoXCIvYXBpXCIsIGJvZHlwYXJzZXIoKSk7XHJcbnNlcnZlci51c2UoXCIvYXBpXCIsIGF1dGhlbnRpY2F0aW9uUm91dGVyKTtcclxuXHJcblxyXG5zZXJ2ZXIudXNlKFwiL1wiLCBleHByZXNzLnN0YXRpYyhcIi4vcHVibGljXCIsIHtcclxuICAgIGluZGV4OiBcImluZGV4Lmh0bWxcIlxyXG59KSk7XHJcblxyXG5jb25zdCBwb3J0ID0gcHJvY2Vzcy5lbnYuUE9SVCB8fCBjb25maWcuZmFsbGJhY2tQb3J0O1xyXG5zZXJ2ZXIubGlzdGVuKHBvcnQsICgpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKGBXZWIgc2VydmVyIHN0YXJ0ZWQgYXQgaHR0cDovL2xvY2FsaG9zdDoke3BvcnR9L2ApO1xyXG59KTsiXX0=

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = require("express");

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = require("body-parser");

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = require("cookie-parser");

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/// <reference path="typings/index.d.ts"/>
	var fs = __webpack_require__(5);
	var configContent = fs.readFileSync("./config.json", "utf8");
	var configuration = JSON.parse(configContent);
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = configuration;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc2VydmVyL2NvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsMENBQTBDO0FBQzFDLElBQVksRUFBRSxXQUFNLElBQUksQ0FBQyxDQUFBO0FBR3pCLElBQUksYUFBYSxHQUFHLEVBQUUsQ0FBQyxZQUFZLENBQUMsZUFBZSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0FBQzdELElBQUksYUFBYSxHQUFrQixJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxDQUFDO0FBRTdEO2tCQUFlLGFBQWEsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCJ0eXBpbmdzL2luZGV4LmQudHNcIi8+XHJcbmltcG9ydCAqIGFzIGZzIGZyb20gXCJmc1wiO1xyXG5cclxuXHJcbmxldCBjb25maWdDb250ZW50ID0gZnMucmVhZEZpbGVTeW5jKFwiLi9jb25maWcuanNvblwiLCBcInV0ZjhcIik7XHJcbmxldCBjb25maWd1cmF0aW9uID0gPENvbmZpZ3VyYXRpb24+SlNPTi5wYXJzZShjb25maWdDb250ZW50KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbmZpZ3VyYXRpb247Il19

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = require("fs");

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/// <reference path="../typings/index.d.ts" />
	var express = __webpack_require__(1);
	var db_1 = __webpack_require__(7);
	var mongo_authentication_token_storage_1 = __webpack_require__(9);
	var authentication_token_provider_1 = __webpack_require__(10);
	var authentication_middleware_1 = __webpack_require__(13);
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aGVudGljYXRpb24tcm91dGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zZXJ2ZXIvcm91dGVzL2F1dGhlbnRpY2F0aW9uLXJvdXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSw4Q0FBOEM7QUFDOUMsSUFBWSxPQUFPLFdBQU0sU0FBUyxDQUFDLENBQUE7QUFFbkMsbUJBQWUsbUJBQW1CLENBQUMsQ0FBQTtBQUNuQyxtREFBNEMsK0RBQStELENBQUMsQ0FBQTtBQUU1Ryw4Q0FBd0MsMERBQTBELENBQUMsQ0FBQTtBQUNuRywwQ0FBcUMsa0NBQWtDLENBQUMsQ0FBQTtBQUV4RSxJQUFNLEVBQUUsR0FBRyxJQUFJLFlBQUUsRUFBRSxDQUFDO0FBRXBCLElBQU0sWUFBWSxHQUFHLElBQUksNENBQStCLENBQUMsRUFBRSxDQUFDLENBQUM7QUFDN0QsaUVBQWlFO0FBQ2pFLElBQU0sYUFBYSxHQUFHLElBQUksdUNBQTJCLENBQUMsWUFBWSxDQUFDLENBQUM7QUFDcEUsSUFBTSx3QkFBd0IsR0FBRyxJQUFJLG1DQUF3QixDQUFDLGFBQWEsQ0FBQyxDQUFDO0FBRTdFLElBQU0sTUFBTSxHQUFHLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUVoQyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFDcEIsVUFBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLElBQUk7SUFDWCxJQUFNLElBQUksR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDO0lBRXRCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQ2Isd0JBQXdCLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQzthQUNoRCxJQUFJLENBQUM7WUFDRixHQUFHLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQztpQkFDZCxHQUFHLEVBQUUsQ0FBQztRQUNmLENBQUMsQ0FBQyxDQUFDO0lBQ1gsQ0FBQztJQUFDLElBQUksQ0FBQyxDQUFDO1FBQ0osR0FBRyxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUM7YUFDZCxHQUFHLEVBQUUsQ0FBQztJQUNmLENBQUM7QUFDTCxDQUFDLENBQUMsQ0FBQztBQUVILE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLFVBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxJQUFJLElBQUssT0FBQSx3QkFBd0IsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsRUFBNUMsQ0FBNEMsQ0FBQyxDQUFDO0FBRWxGO2tCQUFlLE1BQU0sQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi90eXBpbmdzL2luZGV4LmQudHNcIiAvPlxyXG5pbXBvcnQgKiBhcyBleHByZXNzIGZyb20gXCJleHByZXNzXCI7XHJcblxyXG5pbXBvcnQgRGIgZnJvbSBcIi4uL2RhdGEtYWNjZXNzL2RiXCI7XHJcbmltcG9ydCBNb25nb0F1dGhlbnRpY2F0aW9uVG9rZW5TdG9yYWdlIGZyb20gXCIuLi9zZXJ2aWNlcy9hdXRoZW50aWNhdGlvbi9tb25nby1hdXRoZW50aWNhdGlvbi10b2tlbi1zdG9yYWdlXCI7XHJcbmltcG9ydCBJbk1lbW9yeUF1dGhlbnRpY2F0aW9uVG9rZW5TdG9yYWdlIGZyb20gXCIuLi9zZXJ2aWNlcy9hdXRoZW50aWNhdGlvbi9pbi1tZW1vcnktYXV0aGVudGljYXRpb24tdG9rZW4tc3RvcmFnZVwiO1xyXG5pbXBvcnQgQXV0aGVudGljYXRpb25Ub2tlblByb3ZpZGVyIGZyb20gXCIuLi9zZXJ2aWNlcy9hdXRoZW50aWNhdGlvbi9hdXRoZW50aWNhdGlvbi10b2tlbi1wcm92aWRlclwiO1xyXG5pbXBvcnQgQXV0aGVudGljYXRpb25NaWRkbGV3YXJlIGZyb20gXCIuLi93ZWIvYXV0aGVudGljYXRpb24tbWlkZGxld2FyZVwiO1xyXG5cclxuY29uc3QgZGIgPSBuZXcgRGIoKTtcclxuXHJcbmNvbnN0IHRva2VuU3RvcmFnZSA9IG5ldyBNb25nb0F1dGhlbnRpY2F0aW9uVG9rZW5TdG9yYWdlKGRiKTtcclxuLy8gY29uc3QgdG9rZW5TdG9yYWdlID0gbmV3IEluTWVtb3J5QXV0aGVudGljYXRpb25Ub2tlblN0b3JhZ2UoKTtcclxuY29uc3QgdG9rZW5Qcm92aWRlciA9IG5ldyBBdXRoZW50aWNhdGlvblRva2VuUHJvdmlkZXIodG9rZW5TdG9yYWdlKTtcclxuY29uc3QgYXV0aGVudGljYXRpb25NaWRkbGV3YXJlID0gbmV3IEF1dGhlbnRpY2F0aW9uTWlkZGxld2FyZSh0b2tlblByb3ZpZGVyKTtcclxuXHJcbmNvbnN0IHJvdXRlciA9IGV4cHJlc3MuUm91dGVyKCk7XHJcblxyXG5yb3V0ZXIucG9zdChcIi9sb2dpblwiLFxyXG4ocmVxLCByZXMsIG5leHQpID0+IHtcclxuICAgIGNvbnN0IGluZm8gPSByZXEuYm9keTtcclxuXHJcbiAgICBpZiAoaW5mby5sb2dpbikge1xyXG4gICAgICAgIGF1dGhlbnRpY2F0aW9uTWlkZGxld2FyZS5zaWduSW4ocmVxLCByZXMsIGluZm8ubG9naW4pXHJcbiAgICAgICAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHJlcy5zZW5kU3RhdHVzKDIwMClcclxuICAgICAgICAgICAgICAgICAgICAuZW5kKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICByZXMuc2VuZFN0YXR1cyg0MDApXHJcbiAgICAgICAgICAgIC5lbmQoKTtcclxuICAgIH1cclxufSk7XHJcblxyXG5yb3V0ZXIudXNlKFwiKlwiLCAocmVzLCByZXEsIG5leHQpID0+IGF1dGhlbnRpY2F0aW9uTWlkZGxld2FyZS5ydW4ocmVzLCByZXEsIG5leHQpKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJvdXRlcjsiXX0=

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/// <reference path="../typings/index.d.ts" />
	var mongo = __webpack_require__(8);
	var config_1 = __webpack_require__(4);
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zZXJ2ZXIvZGF0YS1hY2Nlc3MvZGIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLDhDQUE4QztBQUM5QyxJQUFZLEtBQUssV0FBTSxTQUFTLENBQUMsQ0FBQTtBQUNqQyx1QkFBbUIsV0FBVyxDQUFDLENBQUE7QUFFL0IsSUFBSSxFQUFFLEdBQXNCLElBQUksT0FBTyxDQUFDLFVBQUMsT0FBTyxFQUFFLE1BQU07SUFDcEQsS0FBSyxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsZ0JBQU0sQ0FBQyxRQUFRLEVBQ3pDLFVBQUMsR0FBRyxFQUFFLEVBQUU7UUFDSixFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQ04sTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2hCLENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNKLE9BQU8sQ0FBQyxHQUFHLENBQUMsa0NBQWdDLGdCQUFNLENBQUMsUUFBVSxDQUFDLENBQUM7WUFDL0QsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ2hCLENBQUM7SUFDTCxDQUFDLENBQUMsQ0FBQztBQUNQLENBQUMsQ0FBQyxDQUFDO0FBRUg7SUFBQTtJQW9CQSxDQUFDO0lBYkcsNkJBQVUsR0FBVixVQUFXLFVBQWtCO1FBQ3pCLEVBQUUsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDO1lBQ1osTUFBTSxJQUFJLEtBQUssQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO1FBQy9DLEVBQUUsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUNsQyxNQUFNLElBQUksS0FBSyxDQUFDLGdCQUFjLFVBQVUsZ0JBQWEsQ0FBQyxDQUFDO1FBRTNELE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFO2FBQ2hCLElBQUksQ0FBQyxVQUFBLEVBQUUsSUFBSSxPQUFBLEVBQUUsQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLEVBQXpCLENBQXlCLENBQUMsQ0FBQztJQUMvQyxDQUFDO0lBRU8sMEJBQU8sR0FBZjtRQUNJLE1BQU0sQ0FBQyxFQUFFLENBQUM7SUFDZCxDQUFDO0lBbEJNLG9CQUFXLEdBQUc7UUFDakIsUUFBUSxFQUFFLFVBQVU7UUFDcEIsUUFBUSxFQUFFLFVBQVU7UUFDcEIsUUFBUSxFQUFFLFVBQVU7S0FDdkIsQ0FBQztJQWVOLGVBQUM7QUFBRCxDQUFDLEFBcEJELElBb0JDO0FBcEJEOzBCQW9CQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL3R5cGluZ3MvaW5kZXguZC50c1wiIC8+XHJcbmltcG9ydCAqIGFzIG1vbmdvIGZyb20gXCJtb25nb2RiXCI7XHJcbmltcG9ydCBjb25maWcgZnJvbSBcIi4uL2NvbmZpZ1wiO1xyXG5cclxubGV0IGRiOiBQcm9taXNlPG1vbmdvLkRiPiA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgIG1vbmdvLk1vbmdvQ2xpZW50LmNvbm5lY3QoY29uZmlnLm1vbmdvVXJsLFxyXG4gICAgKGVyciwgZGIpID0+IHtcclxuICAgICAgICBpZiAoZXJyKSB7XHJcbiAgICAgICAgICAgIHJlamVjdChlcnIpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBDb25uZWN0ZWQgdG8gTW9uZ28gc2VydmVyIGF0ICR7Y29uZmlnLm1vbmdvVXJsfWApO1xyXG4gICAgICAgICAgICByZXNvbHZlKGRiKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEYXRhYmFzZSB7XHJcbiAgICBzdGF0aWMgQ29sbGVjdGlvbnMgPSB7XHJcbiAgICAgICAgc2Vzc2lvbnM6IFwic2Vzc2lvbnNcIixcclxuICAgICAgICB3ZWJzaG9wczogXCJ3ZWJzaG9wc1wiLFxyXG4gICAgICAgIHByb2R1Y3RzOiBcInByb2R1Y3RzXCJcclxuICAgIH07XHJcblxyXG4gICAgY29sbGVjdGlvbihjb2xsZWN0aW9uOiBzdHJpbmcpOiBQcm9taXNlPG1vbmdvLkNvbGxlY3Rpb24+IHtcclxuICAgICAgICBpZiAoIWNvbGxlY3Rpb24pXHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcImNvbGxlY3Rpb24gaXMgdW5kZWZpbmVkXCIpO1xyXG4gICAgICAgIGlmICghRGF0YWJhc2UuQ29sbGVjdGlvbnNbY29sbGVjdGlvbl0pXHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgQ29sbGVjdGlvbiAke2NvbGxlY3Rpb259IGlzIHVua25vd25gKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY29ubmVjdCgpXHJcbiAgICAgICAgICAgIC50aGVuKGRiID0+IGRiLmNvbGxlY3Rpb24oY29sbGVjdGlvbikpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgY29ubmVjdCgpOiBQcm9taXNlPG1vbmdvLkRiPiB7XHJcbiAgICAgICAgcmV0dXJuIGRiO1xyXG4gICAgfVxyXG59Il19

/***/ },
/* 8 */
/***/ function(module, exports) {

	module.exports = require("mongodb");

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	/// <reference path="../../typings/index.d.ts" />
	"use strict";
	var db_1 = __webpack_require__(7);
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9uZ28tYXV0aGVudGljYXRpb24tdG9rZW4tc3RvcmFnZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NlcnZlci9zZXJ2aWNlcy9hdXRoZW50aWNhdGlvbi9tb25nby1hdXRoZW50aWNhdGlvbi10b2tlbi1zdG9yYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGlEQUFpRDs7QUFFakQsbUJBQXFCLHNCQUFzQixDQUFDLENBQUE7QUFFNUM7SUFFSSx5Q0FBb0IsRUFBWTtRQUFaLE9BQUUsR0FBRixFQUFFLENBQVU7UUFDNUIsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7WUFDSixNQUFNLElBQUksS0FBSyxDQUFDLGlCQUFpQixDQUFDLENBQUM7SUFDM0MsQ0FBQztJQUVELDhDQUFJLEdBQUosVUFBSyxtQkFBMkI7UUFDNUIsRUFBRSxDQUFDLENBQUMsQ0FBQyxtQkFBbUIsQ0FBQztZQUNyQixNQUFNLElBQUksS0FBSyxDQUFDLGtDQUFrQyxDQUFDLENBQUM7UUFFeEQsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFO2FBQ1QsVUFBVSxDQUFDLFlBQVEsQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDO2FBQ3pDLElBQUksQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLElBQUksT0FBTyxDQUFDLFVBQUMsT0FBTyxFQUFFLE1BQU07WUFDbkMsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLEtBQUssRUFBRSxtQkFBbUIsRUFBRSxDQUFDO2lCQUNqQyxLQUFLLENBQUMsQ0FBQyxDQUFDO2lCQUNSLElBQUksQ0FBQyxVQUFDLEdBQUcsRUFBRSxHQUFHO2dCQUNYLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBRWpCLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQztvQkFDSixNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ2hCLElBQUk7b0JBQ0EsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ3JCLENBQUMsQ0FBQyxDQUFDO1FBQ1gsQ0FBQyxDQUFDLEVBWFMsQ0FXVCxDQUFDLENBQUM7SUFDWixDQUFDO0lBRUQsOENBQUksR0FBSixVQUFLLGtCQUFxRDtRQUN0RCxFQUFFLENBQUMsQ0FBQyxDQUFDLGtCQUFrQixDQUFDO1lBQ3BCLE1BQU0sSUFBSSxLQUFLLENBQUMsaUNBQWlDLENBQUMsQ0FBQztRQUV2RCxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUU7YUFDVCxVQUFVLENBQUMsWUFBUSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUM7YUFDekMsSUFBSSxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxDQUFDLFNBQVMsQ0FDbEI7WUFDSSxLQUFLLEVBQUUsa0JBQWtCLENBQUMsS0FBSztTQUNsQyxFQUNELGtCQUFrQixFQUNsQjtZQUNJLE1BQU0sRUFBRSxJQUFJO1NBQ2YsQ0FBQyxFQVBLLENBT0wsQ0FBQzthQUNOLElBQUksQ0FBQyxVQUFBLEdBQUc7WUFFTCxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBRWpCLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQztRQUM5QixDQUFDLENBQUMsQ0FBQztJQUNYLENBQUM7SUFFRCxnREFBTSxHQUFOLFVBQU8sbUJBQTJCO1FBQzlCLEVBQUUsQ0FBQyxDQUFDLENBQUMsbUJBQW1CLENBQUM7WUFDckIsTUFBTSxJQUFJLEtBQUssQ0FBQyxrQ0FBa0MsQ0FBQyxDQUFDO1FBRXhELE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRTthQUNULFVBQVUsQ0FBQyxZQUFRLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQzthQUN6QyxJQUFJLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLENBQUMsU0FBUyxDQUFDLEVBQUUsS0FBSyxFQUFFLG1CQUFtQixFQUFFLENBQUMsRUFBM0MsQ0FBMkMsQ0FBQyxDQUFDO0lBQ2hFLENBQUM7SUFDTCxzQ0FBQztBQUFELENBQUMsQUF6REQsSUF5REM7QUF6REQ7aURBeURDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vdHlwaW5ncy9pbmRleC5kLnRzXCIgLz5cclxuXHJcbmltcG9ydCBEYXRhYmFzZSBmcm9tIFwiLi4vLi4vZGF0YS1hY2Nlc3MvZGJcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1vbmdvQXV0aGVudGljYXRpb25Ub2tlblN0b3JhZ2UgaW1wbGVtZW50cyBBdXRoZW50aWNhdGlvbi5JQXV0aGVudGljYXRpb25Ub2tlblN0b3JhZ2Uge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZGI6IERhdGFiYXNlKSB7XHJcbiAgICAgICAgaWYgKCFkYilcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiZGIgaXMgdW5kZWZpbmVkXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIGZpbmQoYXV0aGVudGljYXRpb25Ub2tlbjogc3RyaW5nKTogUHJvbWlzZTxBdXRoZW50aWNhdGlvbi5BdXRoZW50aWNhdGlvbkluZm8+IHtcclxuICAgICAgICBpZiAoIWF1dGhlbnRpY2F0aW9uVG9rZW4pXHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcImF1dGhlbnRpY2F0aW9uVG9rZW4gaXMgdW5kZWZpbmVkXCIpO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5kYlxyXG4gICAgICAgICAgICAuY29sbGVjdGlvbihEYXRhYmFzZS5Db2xsZWN0aW9ucy5zZXNzaW9ucylcclxuICAgICAgICAgICAgLnRoZW4oYyA9PiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjLmZpbmQoeyB0b2tlbjogYXV0aGVudGljYXRpb25Ub2tlbiB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC5saW1pdCgxKVxyXG4gICAgICAgICAgICAgICAgICAgIC5uZXh0KChlcnIsIGRvYykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmRpcihkb2MpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVycilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChlcnIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKGRvYyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pKTtcclxuICAgIH1cclxuXHJcbiAgICBzYXZlKGF1dGhlbnRpY2F0aW9uSW5mbzogQXV0aGVudGljYXRpb24uQXV0aGVudGljYXRpb25JbmZvKTogUHJvbWlzZTxBdXRoZW50aWNhdGlvbi5BdXRoZW50aWNhdGlvbkluZm8+IHtcclxuICAgICAgICBpZiAoIWF1dGhlbnRpY2F0aW9uSW5mbylcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiYXV0aGVudGljYXRpb25JbmZvIGlzIHVuZGVmaW5lZFwiKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZGJcclxuICAgICAgICAgICAgLmNvbGxlY3Rpb24oRGF0YWJhc2UuQ29sbGVjdGlvbnMuc2Vzc2lvbnMpXHJcbiAgICAgICAgICAgIC50aGVuKGMgPT4gYy51cGRhdGVPbmUoXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9rZW46IGF1dGhlbnRpY2F0aW9uSW5mby50b2tlblxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGF1dGhlbnRpY2F0aW9uSW5mbyxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB1cHNlcnQ6IHRydWVcclxuICAgICAgICAgICAgICAgIH0pKVxyXG4gICAgICAgICAgICAudGhlbihyZXMgPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZGlyKHJlcyk7XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGF1dGhlbnRpY2F0aW9uSW5mbztcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVtb3ZlKGF1dGhlbnRpY2F0aW9uVG9rZW46IHN0cmluZyk6IFByb21pc2U8YW55PiB7XHJcbiAgICAgICAgaWYgKCFhdXRoZW50aWNhdGlvblRva2VuKVxyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJhdXRoZW50aWNhdGlvblRva2VuIGlzIHVuZGVmaW5lZFwiKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZGJcclxuICAgICAgICAgICAgLmNvbGxlY3Rpb24oRGF0YWJhc2UuQ29sbGVjdGlvbnMuc2Vzc2lvbnMpXHJcbiAgICAgICAgICAgIC50aGVuKGMgPT4gYy5kZWxldGVPbmUoeyB0b2tlbjogYXV0aGVudGljYXRpb25Ub2tlbiB9KSk7XHJcbiAgICB9XHJcbn0iXX0=

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/// <reference path="../../typings/index.d.ts" />
	var uuid = __webpack_require__(11);
	var moment = __webpack_require__(12);
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aGVudGljYXRpb24tdG9rZW4tcHJvdmlkZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zZXJ2ZXIvc2VydmljZXMvYXV0aGVudGljYXRpb24vYXV0aGVudGljYXRpb24tdG9rZW4tcHJvdmlkZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLGlEQUFpRDtBQUNqRCxJQUFZLElBQUksV0FBTSxXQUFXLENBQUMsQ0FBQTtBQUNsQyxJQUFZLE1BQU0sV0FBTSxRQUFRLENBQUMsQ0FBQTtBQUVqQztJQUVJLHFDQUFvQixPQUFtRDtRQUFuRCxZQUFPLEdBQVAsT0FBTyxDQUE0QztRQUNuRSxFQUFFLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQztZQUNULE1BQU0sSUFBSSxLQUFLLENBQUMsc0JBQXNCLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBRUQsOENBQVEsR0FBUixVQUFTLG1CQUEyQjtRQUFwQyxpQkFvQkM7UUFuQkcsRUFBRSxDQUFDLENBQUMsQ0FBQyxtQkFBbUIsQ0FBQztZQUNyQixNQUFNLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUVoQyxNQUFNLENBQUMsSUFBSSxPQUFPLENBQW9DLFVBQUMsT0FBTyxFQUFFLE1BQU07WUFDbEUsS0FBSSxDQUFDLE9BQU87aUJBQ1AsSUFBSSxDQUFDLG1CQUFtQixDQUFDO2lCQUN6QixJQUFJLENBQUMsVUFBQSxJQUFJO2dCQUNOLElBQU0sR0FBRyxHQUFHLE1BQU0sQ0FBQyxHQUFHLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQztnQkFFbEMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxHQUFHLENBQUM7b0JBQ3JCLEtBQUksQ0FBQyxPQUFPO3lCQUNQLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQzt5QkFDM0IsSUFBSSxDQUFDLGNBQU0sT0FBQSxNQUFNLENBQUMsa0JBQWtCLENBQUMsRUFBMUIsQ0FBMEIsQ0FBQzt5QkFDdEMsS0FBSyxDQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsTUFBTSxDQUFDLEdBQUcsQ0FBQyxFQUFYLENBQVcsQ0FBQyxDQUFDO2dCQUNuQyxJQUFJO29CQUNBLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUN0QixDQUFDLENBQUM7aUJBQ0QsS0FBSyxDQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsTUFBTSxDQUFDLEdBQUcsQ0FBQyxFQUFYLENBQVcsQ0FBQyxDQUFDO1FBQ25DLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELDhDQUFRLEdBQVIsVUFBUyxNQUFjO1FBQ25CLEVBQUUsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDO1lBQ1IsTUFBTSxJQUFJLEtBQUssQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1FBRTNDLElBQU0sSUFBSSxHQUFzQztZQUM1QyxNQUFNLEVBQUUsTUFBTTtZQUNkLEtBQUssRUFBRSxJQUFJLENBQUMsRUFBRSxFQUFFO1lBQ2hCLFNBQVMsRUFBRSxNQUFNLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsTUFBTSxFQUFFO1NBQ2xFLENBQUM7UUFFRixNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU87YUFDZCxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDcEIsQ0FBQztJQUNMLGtDQUFDO0FBQUQsQ0FBQyxBQTFDRCxJQTBDQztBQTFDRDs2Q0EwQ0MsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi90eXBpbmdzL2luZGV4LmQudHNcIiAvPlxyXG5pbXBvcnQgKiBhcyB1dWlkIGZyb20gXCJub2RlLXV1aWRcIjtcclxuaW1wb3J0ICogYXMgbW9tZW50IGZyb20gXCJtb21lbnRcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEF1dGhlbnRpY2F0aW9uVG9rZW5Qcm92aWRlciBpbXBsZW1lbnRzIEF1dGhlbnRpY2F0aW9uLklBdXRoZW50aWNhdGlvblRva2VuUHJvdmlkZXIge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgc3RvcmFnZTogQXV0aGVudGljYXRpb24uSUF1dGhlbnRpY2F0aW9uVG9rZW5TdG9yYWdlKSB7XHJcbiAgICAgICAgaWYgKCFzdG9yYWdlKVxyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJzdG9yYWdlIGlzIHVuZGVmaW5lZFwiKTtcclxuICAgIH1cclxuXHJcbiAgICB2YWxpZGF0ZShhdXRoZW50aWNhdGlvblRva2VuOiBzdHJpbmcpOiBQcm9taXNlPEF1dGhlbnRpY2F0aW9uLkF1dGhlbnRpY2F0aW9uSW5mbz4ge1xyXG4gICAgICAgIGlmICghYXV0aGVudGljYXRpb25Ub2tlbilcclxuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG51bGwpO1xyXG5cclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2U8QXV0aGVudGljYXRpb24uQXV0aGVudGljYXRpb25JbmZvPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuc3RvcmFnZVxyXG4gICAgICAgICAgICAgICAgLmZpbmQoYXV0aGVudGljYXRpb25Ub2tlbilcclxuICAgICAgICAgICAgICAgIC50aGVuKGluZm8gPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG5vdyA9IG1vbWVudC51dGMoKS50b0RhdGUoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGluZm8uZXhwaXJlc0F0IDwgbm93KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0b3JhZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5yZW1vdmUoYXV0aGVudGljYXRpb25Ub2tlbilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKCgpID0+IHJlamVjdChcIlRva2VuIGlzIGV4cGlyZWRcIikpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuY2F0Y2goZXJyID0+IHJlamVjdChlcnIpKTtcclxuICAgICAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoaW5mbyk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLmNhdGNoKGVyciA9PiByZWplY3QoZXJyKSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2VuZXJhdGUodXNlcklkOiBzdHJpbmcpOiBQcm9taXNlPEF1dGhlbnRpY2F0aW9uLkF1dGhlbnRpY2F0aW9uSW5mbz4ge1xyXG4gICAgICAgIGlmICghdXNlcklkKVxyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJ1c2VySWQgaXMgdW5kZWZpbmVkXCIpO1xyXG5cclxuICAgICAgICBjb25zdCBpbmZvOiBBdXRoZW50aWNhdGlvbi5BdXRoZW50aWNhdGlvbkluZm8gPSB7XHJcbiAgICAgICAgICAgIHVzZXJJZDogdXNlcklkLFxyXG4gICAgICAgICAgICB0b2tlbjogdXVpZC52MSgpLFxyXG4gICAgICAgICAgICBleHBpcmVzQXQ6IG1vbWVudC51dGMoKS5hZGQobW9tZW50LmR1cmF0aW9uKDUsIFwiZGF5XCIpKS50b0RhdGUoKVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLnN0b3JhZ2VcclxuICAgICAgICAgICAgLnNhdmUoaW5mbyk7XHJcbiAgICB9XHJcbn0iXX0=

/***/ },
/* 11 */
/***/ function(module, exports) {

	module.exports = require("node-uuid");

/***/ },
/* 12 */
/***/ function(module, exports) {

	module.exports = require("moment");

/***/ },
/* 13 */
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aGVudGljYXRpb24tbWlkZGxld2FyZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NlcnZlci93ZWIvYXV0aGVudGljYXRpb24tbWlkZGxld2FyZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw4Q0FBOEM7O0FBSTlDO0lBR0ksa0NBQW9CLDJCQUF3RTtRQUF4RSxnQ0FBMkIsR0FBM0IsMkJBQTJCLENBQTZDO1FBQ3hGLEVBQUUsQ0FBQyxDQUFDLENBQUMsMkJBQTJCLENBQUM7WUFDN0IsTUFBTSxJQUFJLEtBQUssQ0FBQywwQ0FBMEMsQ0FBQyxDQUFDO0lBQ3BFLENBQUM7SUFDRDs7O09BR0c7SUFDSCxzQ0FBRyxHQUFILFVBQUksT0FBd0IsRUFBRSxRQUEwQixFQUFFLElBQTBCO1FBQ2hGLElBQU0sbUJBQW1CLEdBQUcsQ0FBQyxPQUFPLENBQUMsT0FBTyxJQUFJLEVBQUUsQ0FBQyxDQUFDLHdCQUF3QixDQUFDLHdCQUF3QixDQUFDLENBQUM7UUFFdkcsSUFBSSxDQUFDLDJCQUEyQjthQUMzQixRQUFRLENBQUMsbUJBQW1CLENBQUM7YUFDN0IsSUFBSSxDQUFDLFVBQUEsSUFBSTtZQUNOLE9BQU8sQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1lBQ3BCLElBQUksRUFBRSxDQUFDO1FBQ1gsQ0FBQyxDQUFDO2FBQ0QsS0FBSyxDQUFDLGNBQU0sT0FBQSxRQUFRLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUE5QixDQUE4QixDQUFDLENBQUM7SUFDckQsQ0FBQztJQUVEOztPQUVHO0lBQ0gseUNBQU0sR0FBTixVQUFPLE9BQXdCLEVBQUUsUUFBMEIsRUFBRSxNQUFjO1FBQ3ZFLEVBQUUsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDO1lBQ1YsTUFBTSxJQUFJLEtBQUssQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO1FBQzdDLEVBQUUsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDO1lBQ1IsTUFBTSxJQUFJLEtBQUssQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1FBRTNDLE1BQU0sQ0FBQyxJQUFJLENBQUMsMkJBQTJCO2FBQ2xDLFFBQVEsQ0FBQyxNQUFNLENBQUM7YUFDaEIsSUFBSSxDQUFDLFVBQUEsSUFBSTtZQUNOLFFBQVEsQ0FBQyxNQUFNLENBQUMsd0JBQXdCLENBQUMsd0JBQXdCLEVBQzdELElBQUksQ0FBQyxLQUFLLEVBQUU7Z0JBQ1IsUUFBUSxFQUFFLElBQUk7Z0JBQ2QsT0FBTyxFQUFFLElBQUksQ0FBQyxTQUFTO2FBQzFCLENBQUMsQ0FBQztRQUNYLENBQUMsQ0FBQyxDQUFDO0lBQ1gsQ0FBQztJQXhDTSxpREFBd0IsR0FBRyxNQUFNLENBQUM7SUF5QzdDLCtCQUFDO0FBQUQsQ0FBQyxBQTFDRCxJQTBDQztBQTFDRDswQ0EwQ0MsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi90eXBpbmdzL2luZGV4LmQudHNcIiAvPlxyXG5cclxuaW1wb3J0ICogYXMgZXhwcmVzcyBmcm9tIFwiZXhwcmVzc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXV0aGVudGljYXRpb25NaWRkbGV3YXJlIHtcclxuICAgIHN0YXRpYyBhdXRoZW50aWNhdGlvbkNvb2tpZU5hbWUgPSBcImF1dGhcIjtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGF1dGhlbnRpY2F0aW9uVG9rZW5Qcm92aWRlcjogQXV0aGVudGljYXRpb24uSUF1dGhlbnRpY2F0aW9uVG9rZW5Qcm92aWRlcikge1xyXG4gICAgICAgIGlmICghYXV0aGVudGljYXRpb25Ub2tlblByb3ZpZGVyKVxyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJhdXRoZW50aWNhdGlvblRva2VuUHJvdmlkZXIgaXMgdW5kZWZpbmVkXCIpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBSZXF1ZXN0IGhhbmRsZXIgd2hpY2ggY2hlY2tzIGF1dGhlbnRpY2F0aW9uIGFuZCBzZXR1cHMgdGhlIHJlcXVlc3QudXNlci5cclxuICAgICAqIElmIHJlcXVlc3QgaXMgbm90IGF1dGhlbnRpY2F0ZWQgdGhlIDQwMSBOb3QgYXV0aG9yaXplZCBzdGF0dXMgd2lsbCBiZSByZXR1cm5lZCB0byB0aGUgY2xpZW50LlxyXG4gICAgICovXHJcbiAgICBydW4ocmVxdWVzdDogZXhwcmVzcy5SZXF1ZXN0LCByZXNwb25zZTogZXhwcmVzcy5SZXNwb25zZSwgbmV4dDogZXhwcmVzcy5OZXh0RnVuY3Rpb24pIHtcclxuICAgICAgICBjb25zdCBhdXRoZW50aWNhdGlvblRva2VuID0gKHJlcXVlc3QuY29va2llcyB8fCB7fSlbQXV0aGVudGljYXRpb25NaWRkbGV3YXJlLmF1dGhlbnRpY2F0aW9uQ29va2llTmFtZV07XHJcblxyXG4gICAgICAgIHRoaXMuYXV0aGVudGljYXRpb25Ub2tlblByb3ZpZGVyXHJcbiAgICAgICAgICAgIC52YWxpZGF0ZShhdXRoZW50aWNhdGlvblRva2VuKVxyXG4gICAgICAgICAgICAudGhlbih1c2VyID0+IHtcclxuICAgICAgICAgICAgICAgIHJlcXVlc3QudXNlciA9IHVzZXI7XHJcbiAgICAgICAgICAgICAgICBuZXh0KCk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaCgoKSA9PiByZXNwb25zZS5zZW5kU3RhdHVzKDQwMSkuZW5kKCkpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQWRkcyBhdXRoZW50aWNhdGlvbiBjb29raWUgdG8gcmVzcG9uc2UuXHJcbiAgICAgKi9cclxuICAgIHNpZ25JbihyZXF1ZXN0OiBleHByZXNzLlJlcXVlc3QsIHJlc3BvbnNlOiBleHByZXNzLlJlc3BvbnNlLCB1c2VySWQ6IHN0cmluZyk6IFByb21pc2U8YW55PiB7XHJcbiAgICAgICAgaWYgKCFyZXNwb25zZSlcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwicmVzcG9uc2UgaXMgdW5kZWZpbmVkXCIpO1xyXG4gICAgICAgIGlmICghdXNlcklkKVxyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJ1c2VySWQgaXMgdW5kZWZpbmVkXCIpO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5hdXRoZW50aWNhdGlvblRva2VuUHJvdmlkZXJcclxuICAgICAgICAgICAgLmdlbmVyYXRlKHVzZXJJZClcclxuICAgICAgICAgICAgLnRoZW4oaW5mbyA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXNwb25zZS5jb29raWUoQXV0aGVudGljYXRpb25NaWRkbGV3YXJlLmF1dGhlbnRpY2F0aW9uQ29va2llTmFtZSxcclxuICAgICAgICAgICAgICAgICAgICBpbmZvLnRva2VuLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGh0dHBPbmx5OiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBleHBpcmVzOiBpbmZvLmV4cGlyZXNBdFxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxufSJdfQ==

/***/ }
/******/ ]);
//# sourceMappingURL=app.js.map