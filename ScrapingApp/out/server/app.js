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

	__webpack_require__(1);
	module.exports = __webpack_require__(2);


/***/ },
/* 1 */
/***/ function(module, exports) {

	/// <reference path="typings/index.d.ts" />
	if (!Array.prototype.toHash) {
	    Array.prototype.toHash = function toHash(keySelector, valueSelector) {
	        valueSelector = valueSelector || (function (e) { return (e); });
	        return this.reduce(function (hash, elem) {
	            var key = keySelector(elem);
	            var value = valueSelector(elem);
	            hash[key] = value;
	            return hash;
	        }, {});
	    };
	}
	if (!Object.entries) {
	    Object.entries = function (obj) { return Object.keys(obj)
	        .map(function (key) { return ([key, obj[key]]); }); };
	}
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXh0ZW5zaW9ucy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImV4dGVuc2lvbnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsMkNBQTJDO0FBRTNDLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO0lBQzFCLEtBQUssQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLGdCQUFzQixXQUFnQyxFQUFFLGFBQThCO1FBQzNHLGFBQWEsR0FBRyxhQUFhLElBQUksQ0FBQyxVQUFDLENBQUksSUFBSyxPQUFBLENBQUUsQ0FBYyxDQUFDLEVBQWpCLENBQWlCLENBQUMsQ0FBQztRQUUvRCxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFDLElBQUksRUFBRSxJQUFJO1lBQzFCLElBQU0sR0FBRyxHQUFHLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUM5QixJQUFNLEtBQUssR0FBRyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7WUFFbEMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEtBQUssQ0FBQztZQUVsQixNQUFNLENBQUMsSUFBSSxDQUFDO1FBQ2hCLENBQUMsRUFDRCxFQUFFLENBQTBCLENBQUM7SUFDakMsQ0FBQyxDQUFDO0FBQ04sQ0FBQztBQUVELEVBQUUsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFDbEIsTUFBTSxDQUFDLE9BQU8sR0FBRyxVQUFDLEdBQVEsSUFBSyxPQUFBLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDO1NBQzFDLEdBQUcsQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLENBQUMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBakIsQ0FBaUIsQ0FBQyxFQURILENBQ0csQ0FBQztBQUN2QyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8vIDxyZWZlcmVuY2UgcGF0aD1cInR5cGluZ3MvaW5kZXguZC50c1wiIC8+XHJcblxyXG5pZiAoIUFycmF5LnByb3RvdHlwZS50b0hhc2gpIHtcclxuICAgIEFycmF5LnByb3RvdHlwZS50b0hhc2ggPSBmdW5jdGlvbiB0b0hhc2g8VCwgSz4oa2V5U2VsZWN0b3I6IChlbGVtOiBUKSA9PiBzdHJpbmcsIHZhbHVlU2VsZWN0b3I/OiAoZWxlbTogVCkgPT4gSyk6IHsgW2tleTogc3RyaW5nXTogSzsgfSB7XHJcbiAgICAgICAgdmFsdWVTZWxlY3RvciA9IHZhbHVlU2VsZWN0b3IgfHwgKChlOiBUKSA9PiAoKGUgYXMgYW55KSBhcyBLKSk7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLnJlZHVjZSgoaGFzaCwgZWxlbSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBrZXkgPSBrZXlTZWxlY3RvcihlbGVtKTtcclxuICAgICAgICAgICAgY29uc3QgdmFsdWUgPSB2YWx1ZVNlbGVjdG9yKGVsZW0pO1xyXG5cclxuICAgICAgICAgICAgaGFzaFtrZXldID0gdmFsdWU7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gaGFzaDtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHt9KSBhcyB7IFtrZXk6IHN0cmluZ106IEs7IH07XHJcbiAgICB9O1xyXG59XHJcblxyXG5pZiAoIU9iamVjdC5lbnRyaWVzKSB7XHJcbiAgICBPYmplY3QuZW50cmllcyA9IChvYmo6IGFueSkgPT4gT2JqZWN0LmtleXMob2JqKVxyXG4gICAgICAgIC5tYXAoa2V5ID0+IChba2V5LCBvYmpba2V5XV0pKTtcclxufSJdfQ==

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	/// <reference path="./typings/index.d.ts"/>
	"use strict";
	var webServer = __webpack_require__(3);
	var scrapeServer = __webpack_require__(30);
	scrapeServer.run();
	webServer.run();
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDRDQUE0Qzs7QUFFNUMsSUFBWSxTQUFTLFdBQU0sY0FBYyxDQUFDLENBQUE7QUFDMUMsSUFBWSxZQUFZLFdBQU0saUJBQWlCLENBQUMsQ0FBQTtBQUVoRCxZQUFZLENBQUMsR0FBRyxFQUFFLENBQUM7QUFDbkIsU0FBUyxDQUFDLEdBQUcsRUFBRSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4vdHlwaW5ncy9pbmRleC5kLnRzXCIvPlxyXG5cclxuaW1wb3J0ICogYXMgd2ViU2VydmVyIGZyb20gXCIuL3dlYi1zZXJ2ZXJcIjtcclxuaW1wb3J0ICogYXMgc2NyYXBlU2VydmVyIGZyb20gXCIuL3NjcmFwZS1zZXJ2ZXJcIjtcclxuXHJcbnNjcmFwZVNlcnZlci5ydW4oKTtcclxud2ViU2VydmVyLnJ1bigpOyJdfQ==

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	/// <reference path="./typings/index.d.ts"/>
	"use strict";
	var express = __webpack_require__(4);
	var bodyparser = __webpack_require__(5);
	var cookieparser = __webpack_require__(6);
	var config_1 = __webpack_require__(7);
	var authentication_route_1 = __webpack_require__(9);
	var product_route_1 = __webpack_require__(19);
	var web_shop_route_1 = __webpack_require__(26);
	var server = express();
	server.use(cookieparser());
	server.use("/api", bodyparser.json());
	server.use("/api", authentication_route_1.default);
	server.use("/api/products", product_route_1.default);
	server.use("/api/shops", web_shop_route_1.default);
	server.use("/", express.static("./out/client", {
	    index: "index.html"
	}));
	var port = process.env.PORT || config_1.default.fallbackPort;
	function run() {
	    server.listen(port, function () {
	        console.info("Web server started at http://localhost:" + port + "/");
	    });
	}
	exports.run = run;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2ViLXNlcnZlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIndlYi1zZXJ2ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsNENBQTRDOztBQUc1QyxJQUFZLE9BQU8sV0FBTyxTQUFTLENBQUMsQ0FBQTtBQUVwQyxJQUFZLFVBQVUsV0FBTSxhQUFhLENBQUMsQ0FBQTtBQUMxQyxJQUFZLFlBQVksV0FBTSxlQUFlLENBQUMsQ0FBQTtBQUU5Qyx1QkFBbUIsVUFBVSxDQUFDLENBQUE7QUFFOUIscUNBQWlDLG1DQUFtQyxDQUFDLENBQUE7QUFDckUsOEJBQXlCLDRCQUE0QixDQUFDLENBQUE7QUFDdEQsK0JBQXlCLDZCQUE2QixDQUFDLENBQUE7QUFFdkQsSUFBSSxNQUFNLEdBQUcsT0FBTyxFQUFFLENBQUM7QUFFdkIsTUFBTSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxDQUFDO0FBQzNCLE1BQU0sQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLFVBQVUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO0FBRXRDLE1BQU0sQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLDhCQUFvQixDQUFDLENBQUM7QUFDekMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxlQUFlLEVBQUUsdUJBQVksQ0FBQyxDQUFDO0FBQzFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLHdCQUFZLENBQUMsQ0FBQztBQUd2QyxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxPQUFPLENBQUMsTUFBTSxDQUFDLGNBQWMsRUFBRTtJQUMzQyxLQUFLLEVBQUUsWUFBWTtDQUN0QixDQUFDLENBQUMsQ0FBQztBQUVKLElBQU0sSUFBSSxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxJQUFJLGdCQUFNLENBQUMsWUFBWSxDQUFDO0FBRXJEO0lBRUksTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUU7UUFDaEIsT0FBTyxDQUFDLElBQUksQ0FBQyw0Q0FBMEMsSUFBSSxNQUFHLENBQUMsQ0FBQztJQUNwRSxDQUFDLENBQUMsQ0FBQztBQUNQLENBQUM7QUFMZSxXQUFHLE1BS2xCLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi90eXBpbmdzL2luZGV4LmQudHNcIi8+XHJcblxyXG5pbXBvcnQgKiBhcyBodHRwICBmcm9tIFwiaHR0cFwiO1xyXG5pbXBvcnQgKiBhcyBleHByZXNzICBmcm9tIFwiZXhwcmVzc1wiO1xyXG5cclxuaW1wb3J0ICogYXMgYm9keXBhcnNlciBmcm9tIFwiYm9keS1wYXJzZXJcIjtcclxuaW1wb3J0ICogYXMgY29va2llcGFyc2VyIGZyb20gXCJjb29raWUtcGFyc2VyXCI7XHJcblxyXG5pbXBvcnQgY29uZmlnIGZyb20gXCIuL2NvbmZpZ1wiO1xyXG5cclxuaW1wb3J0IGF1dGhlbnRpY2F0aW9uUm91dGVyIGZyb20gXCIuL3dlYi9yb3V0ZXMvYXV0aGVudGljYXRpb24tcm91dGVcIjtcclxuaW1wb3J0IHByb2R1Y3RSb3V0ZSBmcm9tIFwiLi93ZWIvcm91dGVzL3Byb2R1Y3Qtcm91dGVcIjtcclxuaW1wb3J0IHdlYlNob3BSb3V0ZSBmcm9tIFwiLi93ZWIvcm91dGVzL3dlYi1zaG9wLXJvdXRlXCI7XHJcblxyXG5sZXQgc2VydmVyID0gZXhwcmVzcygpO1xyXG5cclxuc2VydmVyLnVzZShjb29raWVwYXJzZXIoKSk7XHJcbnNlcnZlci51c2UoXCIvYXBpXCIsIGJvZHlwYXJzZXIuanNvbigpKTtcclxuXHJcbnNlcnZlci51c2UoXCIvYXBpXCIsIGF1dGhlbnRpY2F0aW9uUm91dGVyKTtcclxuc2VydmVyLnVzZShcIi9hcGkvcHJvZHVjdHNcIiwgcHJvZHVjdFJvdXRlKTtcclxuc2VydmVyLnVzZShcIi9hcGkvc2hvcHNcIiwgd2ViU2hvcFJvdXRlKTtcclxuXHJcblxyXG5zZXJ2ZXIudXNlKFwiL1wiLCBleHByZXNzLnN0YXRpYyhcIi4vb3V0L2NsaWVudFwiLCB7XHJcbiAgICBpbmRleDogXCJpbmRleC5odG1sXCJcclxufSkpO1xyXG5cclxuY29uc3QgcG9ydCA9IHByb2Nlc3MuZW52LlBPUlQgfHwgY29uZmlnLmZhbGxiYWNrUG9ydDtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBydW4oKSB7XHJcblxyXG4gICAgc2VydmVyLmxpc3Rlbihwb3J0LCAoKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5pbmZvKGBXZWIgc2VydmVyIHN0YXJ0ZWQgYXQgaHR0cDovL2xvY2FsaG9zdDoke3BvcnR9L2ApO1xyXG4gICAgfSk7XHJcbn0iXX0=

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = require("express");

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = require("body-parser");

/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = require("cookie-parser");

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/// <reference path="typings/index.d.ts"/>
	var fs = __webpack_require__(8);
	var configContent = fs.readFileSync("./config.json", "utf8");
	var configuration = JSON.parse(configContent);
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = configuration;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSwwQ0FBMEM7QUFDMUMsSUFBWSxFQUFFLFdBQU0sSUFBSSxDQUFDLENBQUE7QUFHekIsSUFBSSxhQUFhLEdBQUcsRUFBRSxDQUFDLFlBQVksQ0FBQyxlQUFlLEVBQUUsTUFBTSxDQUFDLENBQUM7QUFDN0QsSUFBSSxhQUFhLEdBQWtCLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLENBQUM7QUFFN0Q7a0JBQWUsYUFBYSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8vIDxyZWZlcmVuY2UgcGF0aD1cInR5cGluZ3MvaW5kZXguZC50c1wiLz5cclxuaW1wb3J0ICogYXMgZnMgZnJvbSBcImZzXCI7XHJcblxyXG5cclxubGV0IGNvbmZpZ0NvbnRlbnQgPSBmcy5yZWFkRmlsZVN5bmMoXCIuL2NvbmZpZy5qc29uXCIsIFwidXRmOFwiKTtcclxubGV0IGNvbmZpZ3VyYXRpb24gPSA8Q29uZmlndXJhdGlvbj5KU09OLnBhcnNlKGNvbmZpZ0NvbnRlbnQpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29uZmlndXJhdGlvbjsiXX0=

/***/ },
/* 8 */
/***/ function(module, exports) {

	module.exports = require("fs");

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/// <reference path="../../typings/index.d.ts" />
	var express = __webpack_require__(4);
	var db_1 = __webpack_require__(10);
	var mongo_authentication_token_storage_1 = __webpack_require__(12);
	var authentication_token_provider_1 = __webpack_require__(13);
	var mongo_user_account_storage_1 = __webpack_require__(16);
	var user_account_service_1 = __webpack_require__(17);
	var authentication_middleware_1 = __webpack_require__(18);
	var db = new db_1.default();
	var tokenStorage = new mongo_authentication_token_storage_1.default(db);
	var tokenProvider = new authentication_token_provider_1.default(tokenStorage);
	var authenticationMiddleware = new authentication_middleware_1.default(tokenProvider);
	var userAccountService = new user_account_service_1.default(new mongo_user_account_storage_1.default(db));
	var router = express.Router();
	router.post("/login", function (req, res) {
	    var info = req.body;
	    userAccountService.validateCredentials(info.login, info.password)
	        .then(function () {
	        var result = {
	            ok: true,
	            error: ""
	        };
	        authenticationMiddleware.signIn(req, res, info.login)
	            .then(function () { return res.json(result).end(); });
	    })
	        .catch(function (error) {
	        var result = {
	            ok: false,
	            error: error
	        };
	        res.json(result).end();
	    });
	});
	router.use("*", function (res, req, next) { return authenticationMiddleware.run(res, req, next); });
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = router;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aGVudGljYXRpb24tcm91dGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhdXRoZW50aWNhdGlvbi1yb3V0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsaURBQWlEO0FBQ2pELElBQVksT0FBTyxXQUFNLFNBQVMsQ0FBQyxDQUFBO0FBRW5DLG1CQUFlLHNCQUFzQixDQUFDLENBQUE7QUFFdEMsbURBQTRDLGtFQUFrRSxDQUFDLENBQUE7QUFDL0csOENBQXdDLDZEQUE2RCxDQUFDLENBQUE7QUFFdEcsMkNBQW9DLGlEQUFpRCxDQUFDLENBQUE7QUFDdEYscUNBQStCLDJDQUEyQyxDQUFDLENBQUE7QUFFM0UsMENBQXFDLHFDQUFxQyxDQUFDLENBQUE7QUFFM0UsSUFBTSxFQUFFLEdBQUcsSUFBSSxZQUFFLEVBQUUsQ0FBQztBQUVwQixJQUFNLFlBQVksR0FBRyxJQUFJLDRDQUErQixDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBQzdELElBQU0sYUFBYSxHQUFHLElBQUksdUNBQTJCLENBQUMsWUFBWSxDQUFDLENBQUM7QUFDcEUsSUFBTSx3QkFBd0IsR0FBRyxJQUFJLG1DQUF3QixDQUFDLGFBQWEsQ0FBQyxDQUFDO0FBRTdFLElBQU0sa0JBQWtCLEdBQUcsSUFBSSw4QkFBa0IsQ0FBQyxJQUFJLG9DQUF1QixDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFFbkYsSUFBTSxNQUFNLEdBQUcsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBRWhDLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUNwQixVQUFDLEdBQUcsRUFBRSxHQUFHO0lBQ0wsSUFBTSxJQUFJLEdBQWtDLEdBQUcsQ0FBQyxJQUFJLENBQUM7SUFFckQsa0JBQWtCLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDO1NBQzVELElBQUksQ0FBQztRQUNGLElBQU0sTUFBTSxHQUFnQztZQUN4QyxFQUFFLEVBQUUsSUFBSTtZQUNSLEtBQUssRUFBRSxFQUFFO1NBQ1osQ0FBQztRQUNGLHdCQUF3QixDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUM7YUFDaEQsSUFBSSxDQUFDLGNBQU0sT0FBQSxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUF0QixDQUFzQixDQUFDLENBQUM7SUFDNUMsQ0FBQyxDQUFDO1NBQ0QsS0FBSyxDQUFDLFVBQUEsS0FBSztRQUNSLElBQU0sTUFBTSxHQUFnQztZQUN4QyxFQUFFLEVBQUUsS0FBSztZQUNULEtBQUssRUFBRSxLQUFLO1NBQ2YsQ0FBQztRQUVGLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUM7SUFDM0IsQ0FBQyxDQUFDLENBQUM7QUFDWCxDQUFDLENBQUMsQ0FBQztBQUVILE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLFVBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxJQUFJLElBQUssT0FBQSx3QkFBd0IsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsRUFBNUMsQ0FBNEMsQ0FBQyxDQUFDO0FBRWxGO2tCQUFlLE1BQU0sQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi90eXBpbmdzL2luZGV4LmQudHNcIiAvPlxyXG5pbXBvcnQgKiBhcyBleHByZXNzIGZyb20gXCJleHByZXNzXCI7XHJcblxyXG5pbXBvcnQgRGIgZnJvbSBcIi4uLy4uL2RhdGEtYWNjZXNzL2RiXCI7XHJcblxyXG5pbXBvcnQgTW9uZ29BdXRoZW50aWNhdGlvblRva2VuU3RvcmFnZSBmcm9tIFwiLi4vLi4vc2VydmljZXMvYXV0aGVudGljYXRpb24vbW9uZ28tYXV0aGVudGljYXRpb24tdG9rZW4tc3RvcmFnZVwiO1xyXG5pbXBvcnQgQXV0aGVudGljYXRpb25Ub2tlblByb3ZpZGVyIGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9hdXRoZW50aWNhdGlvbi9hdXRoZW50aWNhdGlvbi10b2tlbi1wcm92aWRlclwiO1xyXG5cclxuaW1wb3J0IE1vbmdvVXNlckFjY291bnRTdG9yYWdlIGZyb20gXCIuLi8uLi9zZXJ2aWNlcy91c2Vycy9tb25nby11c2VyLWFjY291bnQtc3RvcmFnZVwiO1xyXG5pbXBvcnQgVXNlckFjY291bnRTZXJ2aWNlIGZyb20gXCIuLi8uLi9zZXJ2aWNlcy91c2Vycy91c2VyLWFjY291bnQtc2VydmljZVwiO1xyXG5cclxuaW1wb3J0IEF1dGhlbnRpY2F0aW9uTWlkZGxld2FyZSBmcm9tIFwiLi4vLi4vd2ViL2F1dGhlbnRpY2F0aW9uLW1pZGRsZXdhcmVcIjtcclxuXHJcbmNvbnN0IGRiID0gbmV3IERiKCk7XHJcblxyXG5jb25zdCB0b2tlblN0b3JhZ2UgPSBuZXcgTW9uZ29BdXRoZW50aWNhdGlvblRva2VuU3RvcmFnZShkYik7XHJcbmNvbnN0IHRva2VuUHJvdmlkZXIgPSBuZXcgQXV0aGVudGljYXRpb25Ub2tlblByb3ZpZGVyKHRva2VuU3RvcmFnZSk7XHJcbmNvbnN0IGF1dGhlbnRpY2F0aW9uTWlkZGxld2FyZSA9IG5ldyBBdXRoZW50aWNhdGlvbk1pZGRsZXdhcmUodG9rZW5Qcm92aWRlcik7XHJcblxyXG5jb25zdCB1c2VyQWNjb3VudFNlcnZpY2UgPSBuZXcgVXNlckFjY291bnRTZXJ2aWNlKG5ldyBNb25nb1VzZXJBY2NvdW50U3RvcmFnZShkYikpO1xyXG5cclxuY29uc3Qgcm91dGVyID0gZXhwcmVzcy5Sb3V0ZXIoKTtcclxuXHJcbnJvdXRlci5wb3N0KFwiL2xvZ2luXCIsXHJcbihyZXEsIHJlcykgPT4ge1xyXG4gICAgY29uc3QgaW5mbzogQXBpLkF1dGhlbnRpY2F0aW9uQ3JlZGVudGlhbHMgPSByZXEuYm9keTtcclxuXHJcbiAgICB1c2VyQWNjb3VudFNlcnZpY2UudmFsaWRhdGVDcmVkZW50aWFscyhpbmZvLmxvZ2luLCBpbmZvLnBhc3N3b3JkKVxyXG4gICAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgcmVzdWx0OiBBcGkuSUF1dGhlbnRpY2F0aW9uUmVzcG9uc2UgPSB7XHJcbiAgICAgICAgICAgICAgICBvazogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGVycm9yOiBcIlwiXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGF1dGhlbnRpY2F0aW9uTWlkZGxld2FyZS5zaWduSW4ocmVxLCByZXMsIGluZm8ubG9naW4pXHJcbiAgICAgICAgICAgICAgICAudGhlbigoKSA9PiByZXMuanNvbihyZXN1bHQpLmVuZCgpKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaChlcnJvciA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdDogQXBpLklBdXRoZW50aWNhdGlvblJlc3BvbnNlID0ge1xyXG4gICAgICAgICAgICAgICAgb2s6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgZXJyb3I6IGVycm9yXHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICByZXMuanNvbihyZXN1bHQpLmVuZCgpO1xyXG4gICAgICAgIH0pO1xyXG59KTtcclxuXHJcbnJvdXRlci51c2UoXCIqXCIsIChyZXMsIHJlcSwgbmV4dCkgPT4gYXV0aGVudGljYXRpb25NaWRkbGV3YXJlLnJ1bihyZXMsIHJlcSwgbmV4dCkpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcm91dGVyOyJdfQ==

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/// <reference path="../typings/index.d.ts" />
	var mongo = __webpack_require__(11);
	var config_1 = __webpack_require__(7);
	var db = new Promise(function (resolve, reject) {
	    mongo.MongoClient.connect(config_1.default.mongoUrl, function (err, db) {
	        if (err) {
	            reject(err);
	        }
	        else {
	            console.info("Connected to Mongo server at " + config_1.default.mongoUrl);
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
	        products: "products",
	        users: "users"
	    };
	    return Database;
	}());
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = Database;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJkYi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsOENBQThDO0FBQzlDLElBQVksS0FBSyxXQUFNLFNBQVMsQ0FBQyxDQUFBO0FBQ2pDLHVCQUFtQixXQUFXLENBQUMsQ0FBQTtBQUUvQixJQUFJLEVBQUUsR0FBc0IsSUFBSSxPQUFPLENBQUMsVUFBQyxPQUFPLEVBQUUsTUFBTTtJQUNwRCxLQUFLLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxnQkFBTSxDQUFDLFFBQVEsRUFDekMsVUFBQyxHQUFHLEVBQUUsRUFBRTtRQUNKLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDTixNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDaEIsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ0osT0FBTyxDQUFDLElBQUksQ0FBQyxrQ0FBZ0MsZ0JBQU0sQ0FBQyxRQUFVLENBQUMsQ0FBQztZQUNoRSxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDaEIsQ0FBQztJQUNMLENBQUMsQ0FBQyxDQUFDO0FBQ1AsQ0FBQyxDQUFDLENBQUM7QUFFSDtJQUFBO0lBcUJBLENBQUM7SUFiRyw2QkFBVSxHQUFWLFVBQVcsVUFBa0I7UUFDekIsRUFBRSxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUM7WUFDWixNQUFNLElBQUksS0FBSyxDQUFDLHlCQUF5QixDQUFDLENBQUM7UUFDL0MsRUFBRSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQ2xDLE1BQU0sSUFBSSxLQUFLLENBQUMsZ0JBQWMsVUFBVSxnQkFBYSxDQUFDLENBQUM7UUFFM0QsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUU7YUFDaEIsSUFBSSxDQUFDLFVBQUEsRUFBRSxJQUFJLE9BQUEsRUFBRSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsRUFBekIsQ0FBeUIsQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFFTywwQkFBTyxHQUFmO1FBQ0ksTUFBTSxDQUFDLEVBQUUsQ0FBQztJQUNkLENBQUM7SUFuQk0sb0JBQVcsR0FBRztRQUNqQixRQUFRLEVBQUUsVUFBVTtRQUNwQixRQUFRLEVBQUUsVUFBVTtRQUNwQixRQUFRLEVBQUUsVUFBVTtRQUNwQixLQUFLLEVBQUUsT0FBTztLQUNqQixDQUFDO0lBZU4sZUFBQztBQUFELENBQUMsQUFyQkQsSUFxQkM7QUFyQkQ7MEJBcUJDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vdHlwaW5ncy9pbmRleC5kLnRzXCIgLz5cclxuaW1wb3J0ICogYXMgbW9uZ28gZnJvbSBcIm1vbmdvZGJcIjtcclxuaW1wb3J0IGNvbmZpZyBmcm9tIFwiLi4vY29uZmlnXCI7XHJcblxyXG5sZXQgZGI6IFByb21pc2U8bW9uZ28uRGI+ID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgbW9uZ28uTW9uZ29DbGllbnQuY29ubmVjdChjb25maWcubW9uZ29VcmwsXHJcbiAgICAoZXJyLCBkYikgPT4ge1xyXG4gICAgICAgIGlmIChlcnIpIHtcclxuICAgICAgICAgICAgcmVqZWN0KGVycik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc29sZS5pbmZvKGBDb25uZWN0ZWQgdG8gTW9uZ28gc2VydmVyIGF0ICR7Y29uZmlnLm1vbmdvVXJsfWApO1xyXG4gICAgICAgICAgICByZXNvbHZlKGRiKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEYXRhYmFzZSB7XHJcbiAgICBzdGF0aWMgQ29sbGVjdGlvbnMgPSB7XHJcbiAgICAgICAgc2Vzc2lvbnM6IFwic2Vzc2lvbnNcIixcclxuICAgICAgICB3ZWJzaG9wczogXCJ3ZWJzaG9wc1wiLFxyXG4gICAgICAgIHByb2R1Y3RzOiBcInByb2R1Y3RzXCIsXHJcbiAgICAgICAgdXNlcnM6IFwidXNlcnNcIlxyXG4gICAgfTtcclxuXHJcbiAgICBjb2xsZWN0aW9uKGNvbGxlY3Rpb246IHN0cmluZyk6IFByb21pc2U8bW9uZ28uQ29sbGVjdGlvbj4ge1xyXG4gICAgICAgIGlmICghY29sbGVjdGlvbilcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiY29sbGVjdGlvbiBpcyB1bmRlZmluZWRcIik7XHJcbiAgICAgICAgaWYgKCFEYXRhYmFzZS5Db2xsZWN0aW9uc1tjb2xsZWN0aW9uXSlcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBDb2xsZWN0aW9uICR7Y29sbGVjdGlvbn0gaXMgdW5rbm93bmApO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5jb25uZWN0KClcclxuICAgICAgICAgICAgLnRoZW4oZGIgPT4gZGIuY29sbGVjdGlvbihjb2xsZWN0aW9uKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjb25uZWN0KCk6IFByb21pc2U8bW9uZ28uRGI+IHtcclxuICAgICAgICByZXR1cm4gZGI7XHJcbiAgICB9XHJcbn0iXX0=

/***/ },
/* 11 */
/***/ function(module, exports) {

	module.exports = require("mongodb");

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	/// <reference path="../../typings/index.d.ts" />
	"use strict";
	var db_1 = __webpack_require__(10);
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
	            c.find({ token: authenticationToken }, { _id: 0 })
	                .limit(1)
	                .next(function (err, doc) {
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
	            .then(function () { return authenticationInfo; });
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9uZ28tYXV0aGVudGljYXRpb24tdG9rZW4tc3RvcmFnZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1vbmdvLWF1dGhlbnRpY2F0aW9uLXRva2VuLXN0b3JhZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsaURBQWlEOztBQUVqRCxtQkFBcUIsc0JBQXNCLENBQUMsQ0FBQTtBQUU1QztJQUVJLHlDQUFvQixFQUFZO1FBQVosT0FBRSxHQUFGLEVBQUUsQ0FBVTtRQUM1QixFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztZQUNKLE1BQU0sSUFBSSxLQUFLLENBQUMsaUJBQWlCLENBQUMsQ0FBQztJQUMzQyxDQUFDO0lBRUQsOENBQUksR0FBSixVQUFLLG1CQUEyQjtRQUM1QixFQUFFLENBQUMsQ0FBQyxDQUFDLG1CQUFtQixDQUFDO1lBQ3JCLE1BQU0sSUFBSSxLQUFLLENBQUMsa0NBQWtDLENBQUMsQ0FBQztRQUV4RCxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUU7YUFDVCxVQUFVLENBQUMsWUFBUSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUM7YUFDekMsSUFBSSxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsSUFBSSxPQUFPLENBQUMsVUFBQyxPQUFPLEVBQUUsTUFBTTtZQUNuQyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsS0FBSyxFQUFFLG1CQUFtQixFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUM7aUJBQzdDLEtBQUssQ0FBQyxDQUFDLENBQUM7aUJBQ1IsSUFBSSxDQUFDLFVBQUMsR0FBRyxFQUFFLEdBQUc7Z0JBQ1gsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDO29CQUNKLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDaEIsSUFBSTtvQkFDQSxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDckIsQ0FBQyxDQUFDLENBQUM7UUFDWCxDQUFDLENBQUMsRUFUUyxDQVNULENBQUMsQ0FBQztJQUNaLENBQUM7SUFFRCw4Q0FBSSxHQUFKLFVBQUssa0JBQXFEO1FBQ3RELEVBQUUsQ0FBQyxDQUFDLENBQUMsa0JBQWtCLENBQUM7WUFDcEIsTUFBTSxJQUFJLEtBQUssQ0FBQyxpQ0FBaUMsQ0FBQyxDQUFDO1FBRXZELE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRTthQUNULFVBQVUsQ0FBQyxZQUFRLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQzthQUN6QyxJQUFJLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLENBQUMsU0FBUyxDQUNsQjtZQUNJLEtBQUssRUFBRSxrQkFBa0IsQ0FBQyxLQUFLO1NBQ2xDLEVBQ0Qsa0JBQWtCLEVBQ2xCO1lBQ0ksTUFBTSxFQUFFLElBQUk7U0FDZixDQUFDLEVBUEssQ0FPTCxDQUFDO2FBQ04sSUFBSSxDQUFDLGNBQU0sT0FBQSxrQkFBa0IsRUFBbEIsQ0FBa0IsQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUFFRCxnREFBTSxHQUFOLFVBQU8sbUJBQTJCO1FBQzlCLEVBQUUsQ0FBQyxDQUFDLENBQUMsbUJBQW1CLENBQUM7WUFDckIsTUFBTSxJQUFJLEtBQUssQ0FBQyxrQ0FBa0MsQ0FBQyxDQUFDO1FBRXhELE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRTthQUNULFVBQVUsQ0FBQyxZQUFRLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQzthQUN6QyxJQUFJLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLENBQUMsU0FBUyxDQUFDLEVBQUUsS0FBSyxFQUFFLG1CQUFtQixFQUFFLENBQUMsRUFBM0MsQ0FBMkMsQ0FBQyxDQUFDO0lBQ2hFLENBQUM7SUFDTCxzQ0FBQztBQUFELENBQUMsQUFsREQsSUFrREM7QUFsREQ7aURBa0RDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vdHlwaW5ncy9pbmRleC5kLnRzXCIgLz5cclxuXHJcbmltcG9ydCBEYXRhYmFzZSBmcm9tIFwiLi4vLi4vZGF0YS1hY2Nlc3MvZGJcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1vbmdvQXV0aGVudGljYXRpb25Ub2tlblN0b3JhZ2UgaW1wbGVtZW50cyBBdXRoZW50aWNhdGlvbi5JQXV0aGVudGljYXRpb25Ub2tlblN0b3JhZ2Uge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZGI6IERhdGFiYXNlKSB7XHJcbiAgICAgICAgaWYgKCFkYilcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiZGIgaXMgdW5kZWZpbmVkXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIGZpbmQoYXV0aGVudGljYXRpb25Ub2tlbjogc3RyaW5nKTogUHJvbWlzZTxBdXRoZW50aWNhdGlvbi5BdXRoZW50aWNhdGlvbkluZm8+IHtcclxuICAgICAgICBpZiAoIWF1dGhlbnRpY2F0aW9uVG9rZW4pXHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcImF1dGhlbnRpY2F0aW9uVG9rZW4gaXMgdW5kZWZpbmVkXCIpO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5kYlxyXG4gICAgICAgICAgICAuY29sbGVjdGlvbihEYXRhYmFzZS5Db2xsZWN0aW9ucy5zZXNzaW9ucylcclxuICAgICAgICAgICAgLnRoZW4oYyA9PiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjLmZpbmQoeyB0b2tlbjogYXV0aGVudGljYXRpb25Ub2tlbiB9LCB7IF9pZDogMCB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC5saW1pdCgxKVxyXG4gICAgICAgICAgICAgICAgICAgIC5uZXh0KChlcnIsIGRvYykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXJyKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGVycik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoZG9jKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSkpO1xyXG4gICAgfVxyXG5cclxuICAgIHNhdmUoYXV0aGVudGljYXRpb25JbmZvOiBBdXRoZW50aWNhdGlvbi5BdXRoZW50aWNhdGlvbkluZm8pOiBQcm9taXNlPEF1dGhlbnRpY2F0aW9uLkF1dGhlbnRpY2F0aW9uSW5mbz4ge1xyXG4gICAgICAgIGlmICghYXV0aGVudGljYXRpb25JbmZvKVxyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJhdXRoZW50aWNhdGlvbkluZm8gaXMgdW5kZWZpbmVkXCIpO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5kYlxyXG4gICAgICAgICAgICAuY29sbGVjdGlvbihEYXRhYmFzZS5Db2xsZWN0aW9ucy5zZXNzaW9ucylcclxuICAgICAgICAgICAgLnRoZW4oYyA9PiBjLnVwZGF0ZU9uZShcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0b2tlbjogYXV0aGVudGljYXRpb25JbmZvLnRva2VuXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgYXV0aGVudGljYXRpb25JbmZvLFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHVwc2VydDogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgfSkpXHJcbiAgICAgICAgICAgIC50aGVuKCgpID0+IGF1dGhlbnRpY2F0aW9uSW5mbyk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVtb3ZlKGF1dGhlbnRpY2F0aW9uVG9rZW46IHN0cmluZyk6IFByb21pc2U8YW55PiB7XHJcbiAgICAgICAgaWYgKCFhdXRoZW50aWNhdGlvblRva2VuKVxyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJhdXRoZW50aWNhdGlvblRva2VuIGlzIHVuZGVmaW5lZFwiKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZGJcclxuICAgICAgICAgICAgLmNvbGxlY3Rpb24oRGF0YWJhc2UuQ29sbGVjdGlvbnMuc2Vzc2lvbnMpXHJcbiAgICAgICAgICAgIC50aGVuKGMgPT4gYy5kZWxldGVPbmUoeyB0b2tlbjogYXV0aGVudGljYXRpb25Ub2tlbiB9KSk7XHJcbiAgICB9XHJcbn0iXX0=

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/// <reference path="../../typings/index.d.ts" />
	var uuid = __webpack_require__(14);
	var moment = __webpack_require__(15);
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aGVudGljYXRpb24tdG9rZW4tcHJvdmlkZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhdXRoZW50aWNhdGlvbi10b2tlbi1wcm92aWRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsaURBQWlEO0FBQ2pELElBQVksSUFBSSxXQUFNLFdBQVcsQ0FBQyxDQUFBO0FBQ2xDLElBQVksTUFBTSxXQUFNLFFBQVEsQ0FBQyxDQUFBO0FBRWpDO0lBRUkscUNBQW9CLE9BQW1EO1FBQW5ELFlBQU8sR0FBUCxPQUFPLENBQTRDO1FBQ25FLEVBQUUsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDO1lBQ1QsTUFBTSxJQUFJLEtBQUssQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO0lBQ2hELENBQUM7SUFFRCw4Q0FBUSxHQUFSLFVBQVMsbUJBQTJCO1FBQXBDLGlCQW9CQztRQW5CRyxFQUFFLENBQUMsQ0FBQyxDQUFDLG1CQUFtQixDQUFDO1lBQ3JCLE1BQU0sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRWhDLE1BQU0sQ0FBQyxJQUFJLE9BQU8sQ0FBb0MsVUFBQyxPQUFPLEVBQUUsTUFBTTtZQUNsRSxLQUFJLENBQUMsT0FBTztpQkFDUCxJQUFJLENBQUMsbUJBQW1CLENBQUM7aUJBQ3pCLElBQUksQ0FBQyxVQUFBLElBQUk7Z0JBQ04sSUFBTSxHQUFHLEdBQUcsTUFBTSxDQUFDLEdBQUcsRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDO2dCQUVsQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxHQUFHLEdBQUcsQ0FBQztvQkFDckIsS0FBSSxDQUFDLE9BQU87eUJBQ1AsTUFBTSxDQUFDLG1CQUFtQixDQUFDO3lCQUMzQixJQUFJLENBQUMsY0FBTSxPQUFBLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQyxFQUExQixDQUEwQixDQUFDO3lCQUN0QyxLQUFLLENBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxNQUFNLENBQUMsR0FBRyxDQUFDLEVBQVgsQ0FBVyxDQUFDLENBQUM7Z0JBQ25DLElBQUk7b0JBQ0EsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3RCLENBQUMsQ0FBQztpQkFDRCxLQUFLLENBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxNQUFNLENBQUMsR0FBRyxDQUFDLEVBQVgsQ0FBVyxDQUFDLENBQUM7UUFDbkMsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsOENBQVEsR0FBUixVQUFTLE1BQWM7UUFDbkIsRUFBRSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUM7WUFDUixNQUFNLElBQUksS0FBSyxDQUFDLHFCQUFxQixDQUFDLENBQUM7UUFFM0MsSUFBTSxJQUFJLEdBQXNDO1lBQzVDLE1BQU0sRUFBRSxNQUFNO1lBQ2QsS0FBSyxFQUFFLElBQUksQ0FBQyxFQUFFLEVBQUU7WUFDaEIsU0FBUyxFQUFFLE1BQU0sQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxNQUFNLEVBQUU7U0FDbEUsQ0FBQztRQUVGLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTzthQUNkLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNwQixDQUFDO0lBQ0wsa0NBQUM7QUFBRCxDQUFDLEFBMUNELElBMENDO0FBMUNEOzZDQTBDQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL3R5cGluZ3MvaW5kZXguZC50c1wiIC8+XHJcbmltcG9ydCAqIGFzIHV1aWQgZnJvbSBcIm5vZGUtdXVpZFwiO1xyXG5pbXBvcnQgKiBhcyBtb21lbnQgZnJvbSBcIm1vbWVudFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXV0aGVudGljYXRpb25Ub2tlblByb3ZpZGVyIGltcGxlbWVudHMgQXV0aGVudGljYXRpb24uSUF1dGhlbnRpY2F0aW9uVG9rZW5Qcm92aWRlciB7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBzdG9yYWdlOiBBdXRoZW50aWNhdGlvbi5JQXV0aGVudGljYXRpb25Ub2tlblN0b3JhZ2UpIHtcclxuICAgICAgICBpZiAoIXN0b3JhZ2UpXHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcInN0b3JhZ2UgaXMgdW5kZWZpbmVkXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHZhbGlkYXRlKGF1dGhlbnRpY2F0aW9uVG9rZW46IHN0cmluZyk6IFByb21pc2U8QXV0aGVudGljYXRpb24uQXV0aGVudGljYXRpb25JbmZvPiB7XHJcbiAgICAgICAgaWYgKCFhdXRoZW50aWNhdGlvblRva2VuKVxyXG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobnVsbCk7XHJcblxyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZTxBdXRoZW50aWNhdGlvbi5BdXRoZW50aWNhdGlvbkluZm8+KChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5zdG9yYWdlXHJcbiAgICAgICAgICAgICAgICAuZmluZChhdXRoZW50aWNhdGlvblRva2VuKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oaW5mbyA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgbm93ID0gbW9tZW50LnV0YygpLnRvRGF0ZSgpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoaW5mby5leHBpcmVzQXQgPCBub3cpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RvcmFnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnJlbW92ZShhdXRoZW50aWNhdGlvblRva2VuKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4oKCkgPT4gcmVqZWN0KFwiVG9rZW4gaXMgZXhwaXJlZFwiKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5jYXRjaChlcnIgPT4gcmVqZWN0KGVycikpO1xyXG4gICAgICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShpbmZvKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAuY2F0Y2goZXJyID0+IHJlamVjdChlcnIpKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBnZW5lcmF0ZSh1c2VySWQ6IHN0cmluZyk6IFByb21pc2U8QXV0aGVudGljYXRpb24uQXV0aGVudGljYXRpb25JbmZvPiB7XHJcbiAgICAgICAgaWYgKCF1c2VySWQpXHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcInVzZXJJZCBpcyB1bmRlZmluZWRcIik7XHJcblxyXG4gICAgICAgIGNvbnN0IGluZm86IEF1dGhlbnRpY2F0aW9uLkF1dGhlbnRpY2F0aW9uSW5mbyA9IHtcclxuICAgICAgICAgICAgdXNlcklkOiB1c2VySWQsXHJcbiAgICAgICAgICAgIHRva2VuOiB1dWlkLnYxKCksXHJcbiAgICAgICAgICAgIGV4cGlyZXNBdDogbW9tZW50LnV0YygpLmFkZChtb21lbnQuZHVyYXRpb24oNSwgXCJkYXlcIikpLnRvRGF0ZSgpXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RvcmFnZVxyXG4gICAgICAgICAgICAuc2F2ZShpbmZvKTtcclxuICAgIH1cclxufSJdfQ==

/***/ },
/* 14 */
/***/ function(module, exports) {

	module.exports = require("node-uuid");

/***/ },
/* 15 */
/***/ function(module, exports) {

	module.exports = require("moment");

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	/// <reference path="../../typings/index.d.ts"/>
	"use strict";
	var db_1 = __webpack_require__(10);
	var MongoUserAccountStorage = (function () {
	    function MongoUserAccountStorage(db) {
	        this.db = db;
	        if (!db)
	            throw new Error("db is undefined");
	    }
	    MongoUserAccountStorage.prototype.findByUserName = function (userName) {
	        if (!userName)
	            throw new Error("userName is undefined");
	        return this.db
	            .collection(db_1.default.Collections.users)
	            .then(function (c) { return c.find({ userName: userName }, { _id: 0 }); })
	            .then(function (r) { return r.limit(1); })
	            .then(function (c) { return c.next(); });
	    };
	    return MongoUserAccountStorage;
	}());
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = MongoUserAccountStorage;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9uZ28tdXNlci1hY2NvdW50LXN0b3JhZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJtb25nby11c2VyLWFjY291bnQtc3RvcmFnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnREFBZ0Q7O0FBRWhELG1CQUFxQixzQkFBc0IsQ0FBQyxDQUFBO0FBRTVDO0lBQ0ksaUNBQW9CLEVBQVk7UUFBWixPQUFFLEdBQUYsRUFBRSxDQUFVO1FBQzVCLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO1lBQ0osTUFBTSxJQUFJLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0lBQzNDLENBQUM7SUFFRCxnREFBYyxHQUFkLFVBQWUsUUFBZ0I7UUFDM0IsRUFBRSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUM7WUFDVixNQUFNLElBQUksS0FBSyxDQUFDLHVCQUF1QixDQUFDLENBQUM7UUFFN0MsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFO2FBQ1QsVUFBVSxDQUFDLFlBQVEsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDO2FBQ3RDLElBQUksQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBMUMsQ0FBMEMsQ0FBQzthQUNyRCxJQUFJLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFWLENBQVUsQ0FBQzthQUNyQixJQUFJLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQVIsQ0FBUSxDQUFDLENBQUM7SUFDN0IsQ0FBQztJQUNMLDhCQUFDO0FBQUQsQ0FBQyxBQWhCRCxJQWdCQztBQWhCRDt5Q0FnQkMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi90eXBpbmdzL2luZGV4LmQudHNcIi8+XHJcblxyXG5pbXBvcnQgRGF0YWJhc2UgZnJvbSBcIi4uLy4uL2RhdGEtYWNjZXNzL2RiXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNb25nb1VzZXJBY2NvdW50U3RvcmFnZSBpbXBsZW1lbnRzIFVzZXJzLklVc2VyQWNjb3VudFN0b3JhZ2Uge1xyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBkYjogRGF0YWJhc2UpIHtcclxuICAgICAgICBpZiAoIWRiKVxyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJkYiBpcyB1bmRlZmluZWRcIik7XHJcbiAgICB9XHJcblxyXG4gICAgZmluZEJ5VXNlck5hbWUodXNlck5hbWU6IHN0cmluZyk6IFByb21pc2U8VXNlcnMuVXNlckFjY291bnQ+IHtcclxuICAgICAgICBpZiAoIXVzZXJOYW1lKVxyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJ1c2VyTmFtZSBpcyB1bmRlZmluZWRcIik7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLmRiXHJcbiAgICAgICAgICAgIC5jb2xsZWN0aW9uKERhdGFiYXNlLkNvbGxlY3Rpb25zLnVzZXJzKVxyXG4gICAgICAgICAgICAudGhlbihjID0+IGMuZmluZCh7IHVzZXJOYW1lOiB1c2VyTmFtZSB9LCB7IF9pZDogMCB9KSlcclxuICAgICAgICAgICAgLnRoZW4ociA9PiByLmxpbWl0KDEpKVxyXG4gICAgICAgICAgICAudGhlbihjID0+IGMubmV4dCgpKTtcclxuICAgIH1cclxufSJdfQ==

/***/ },
/* 17 */
/***/ function(module, exports) {

	/// <reference path="../../typings/index.d.ts" />
	"use strict";
	var UserAccountService = (function () {
	    function UserAccountService(userAccountStorage) {
	        this.userAccountStorage = userAccountStorage;
	        if (!userAccountStorage)
	            throw new Error("userAccountStorage is undefined");
	    }
	    UserAccountService.prototype.validateCredentials = function (userName, password) {
	        var _this = this;
	        if (!userName || !password)
	            return Promise.reject("Login and password required.");
	        return new Promise(function (resolve, reject) {
	            _this.userAccountStorage
	                .findByUserName(userName)
	                .then(function (user) {
	                if (user != null && user.isActive && user.password === password)
	                    resolve(true);
	                else
	                    reject("User credentials is not valid.");
	            });
	        });
	    };
	    return UserAccountService;
	}());
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = UserAccountService;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1hY2NvdW50LXNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ1c2VyLWFjY291bnQtc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxpREFBaUQ7O0FBRWpEO0lBQ0ksNEJBQW9CLGtCQUE2QztRQUE3Qyx1QkFBa0IsR0FBbEIsa0JBQWtCLENBQTJCO1FBQzdELEVBQUUsQ0FBQyxDQUFDLENBQUMsa0JBQWtCLENBQUM7WUFDcEIsTUFBTSxJQUFJLEtBQUssQ0FBQyxpQ0FBaUMsQ0FBQyxDQUFDO0lBQzNELENBQUM7SUFFRCxnREFBbUIsR0FBbkIsVUFBb0IsUUFBZ0IsRUFBRSxRQUFnQjtRQUF0RCxpQkFlQztRQWRHLEVBQUUsQ0FBQyxDQUFDLENBQUMsUUFBUSxJQUFJLENBQUMsUUFBUSxDQUFDO1lBQ3ZCLE1BQU0sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLDhCQUE4QixDQUFDLENBQUM7UUFHMUQsTUFBTSxDQUFDLElBQUksT0FBTyxDQUFDLFVBQUMsT0FBTyxFQUFFLE1BQU07WUFDL0IsS0FBSSxDQUFDLGtCQUFrQjtpQkFDbEIsY0FBYyxDQUFDLFFBQVEsQ0FBQztpQkFDeEIsSUFBSSxDQUFDLFVBQUEsSUFBSTtnQkFDTixFQUFFLENBQUMsQ0FBQyxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLFFBQVEsS0FBSyxRQUFRLENBQUM7b0JBQzVELE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDbEIsSUFBSTtvQkFDQSxNQUFNLENBQUMsZ0NBQWdDLENBQUMsQ0FBQztZQUNqRCxDQUFDLENBQUMsQ0FBQztRQUNYLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUNMLHlCQUFDO0FBQUQsQ0FBQyxBQXRCRCxJQXNCQztBQXRCRDtvQ0FzQkMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi90eXBpbmdzL2luZGV4LmQudHNcIiAvPlxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVXNlckFjY291bnRTZXJ2aWNlIHtcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgdXNlckFjY291bnRTdG9yYWdlOiBVc2Vycy5JVXNlckFjY291bnRTdG9yYWdlKSB7XHJcbiAgICAgICAgaWYgKCF1c2VyQWNjb3VudFN0b3JhZ2UpXHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcInVzZXJBY2NvdW50U3RvcmFnZSBpcyB1bmRlZmluZWRcIik7XHJcbiAgICB9XHJcblxyXG4gICAgdmFsaWRhdGVDcmVkZW50aWFscyh1c2VyTmFtZTogc3RyaW5nLCBwYXNzd29yZDogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcclxuICAgICAgICBpZiAoIXVzZXJOYW1lIHx8ICFwYXNzd29yZClcclxuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KFwiTG9naW4gYW5kIHBhc3N3b3JkIHJlcXVpcmVkLlwiKTtcclxuXHJcblxyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMudXNlckFjY291bnRTdG9yYWdlXHJcbiAgICAgICAgICAgICAgICAuZmluZEJ5VXNlck5hbWUodXNlck5hbWUpXHJcbiAgICAgICAgICAgICAgICAudGhlbih1c2VyID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodXNlciAhPSBudWxsICYmIHVzZXIuaXNBY3RpdmUgJiYgdXNlci5wYXNzd29yZCA9PT0gcGFzc3dvcmQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoXCJVc2VyIGNyZWRlbnRpYWxzIGlzIG5vdCB2YWxpZC5cIik7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufSJdfQ==

/***/ },
/* 18 */
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aGVudGljYXRpb24tbWlkZGxld2FyZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImF1dGhlbnRpY2F0aW9uLW1pZGRsZXdhcmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsOENBQThDOztBQUk5QztJQUdJLGtDQUFvQiwyQkFBd0U7UUFBeEUsZ0NBQTJCLEdBQTNCLDJCQUEyQixDQUE2QztRQUN4RixFQUFFLENBQUMsQ0FBQyxDQUFDLDJCQUEyQixDQUFDO1lBQzdCLE1BQU0sSUFBSSxLQUFLLENBQUMsMENBQTBDLENBQUMsQ0FBQztJQUNwRSxDQUFDO0lBQ0Q7OztPQUdHO0lBQ0gsc0NBQUcsR0FBSCxVQUFJLE9BQXdCLEVBQUUsUUFBMEIsRUFBRSxJQUEwQjtRQUNoRixJQUFNLG1CQUFtQixHQUFHLENBQUMsT0FBTyxDQUFDLE9BQU8sSUFBSSxFQUFFLENBQUMsQ0FBQyx3QkFBd0IsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO1FBRXZHLElBQUksQ0FBQywyQkFBMkI7YUFDM0IsUUFBUSxDQUFDLG1CQUFtQixDQUFDO2FBQzdCLElBQUksQ0FBQyxVQUFBLElBQUk7WUFDTixPQUFPLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztZQUNwQixJQUFJLEVBQUUsQ0FBQztRQUNYLENBQUMsQ0FBQzthQUNELEtBQUssQ0FBQyxjQUFNLE9BQUEsUUFBUSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBOUIsQ0FBOEIsQ0FBQyxDQUFDO0lBQ3JELENBQUM7SUFFRDs7T0FFRztJQUNILHlDQUFNLEdBQU4sVUFBTyxPQUF3QixFQUFFLFFBQTBCLEVBQUUsTUFBYztRQUN2RSxFQUFFLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQztZQUNWLE1BQU0sSUFBSSxLQUFLLENBQUMsdUJBQXVCLENBQUMsQ0FBQztRQUM3QyxFQUFFLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQztZQUNSLE1BQU0sSUFBSSxLQUFLLENBQUMscUJBQXFCLENBQUMsQ0FBQztRQUUzQyxNQUFNLENBQUMsSUFBSSxDQUFDLDJCQUEyQjthQUNsQyxRQUFRLENBQUMsTUFBTSxDQUFDO2FBQ2hCLElBQUksQ0FBQyxVQUFBLElBQUk7WUFDTixRQUFRLENBQUMsTUFBTSxDQUFDLHdCQUF3QixDQUFDLHdCQUF3QixFQUM3RCxJQUFJLENBQUMsS0FBSyxFQUFFO2dCQUNSLFFBQVEsRUFBRSxJQUFJO2dCQUNkLE9BQU8sRUFBRSxJQUFJLENBQUMsU0FBUzthQUMxQixDQUFDLENBQUM7UUFDWCxDQUFDLENBQUMsQ0FBQztJQUNYLENBQUM7SUF4Q00saURBQXdCLEdBQUcsTUFBTSxDQUFDO0lBeUM3QywrQkFBQztBQUFELENBQUMsQUExQ0QsSUEwQ0M7QUExQ0Q7MENBMENDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vdHlwaW5ncy9pbmRleC5kLnRzXCIgLz5cclxuXHJcbmltcG9ydCAqIGFzIGV4cHJlc3MgZnJvbSBcImV4cHJlc3NcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEF1dGhlbnRpY2F0aW9uTWlkZGxld2FyZSB7XHJcbiAgICBzdGF0aWMgYXV0aGVudGljYXRpb25Db29raWVOYW1lID0gXCJhdXRoXCI7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBhdXRoZW50aWNhdGlvblRva2VuUHJvdmlkZXI6IEF1dGhlbnRpY2F0aW9uLklBdXRoZW50aWNhdGlvblRva2VuUHJvdmlkZXIpIHtcclxuICAgICAgICBpZiAoIWF1dGhlbnRpY2F0aW9uVG9rZW5Qcm92aWRlcilcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiYXV0aGVudGljYXRpb25Ub2tlblByb3ZpZGVyIGlzIHVuZGVmaW5lZFwiKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogUmVxdWVzdCBoYW5kbGVyIHdoaWNoIGNoZWNrcyBhdXRoZW50aWNhdGlvbiBhbmQgc2V0dXBzIHRoZSByZXF1ZXN0LnVzZXIuXHJcbiAgICAgKiBJZiByZXF1ZXN0IGlzIG5vdCBhdXRoZW50aWNhdGVkIHRoZSA0MDEgTm90IGF1dGhvcml6ZWQgc3RhdHVzIHdpbGwgYmUgcmV0dXJuZWQgdG8gdGhlIGNsaWVudC5cclxuICAgICAqL1xyXG4gICAgcnVuKHJlcXVlc3Q6IGV4cHJlc3MuUmVxdWVzdCwgcmVzcG9uc2U6IGV4cHJlc3MuUmVzcG9uc2UsIG5leHQ6IGV4cHJlc3MuTmV4dEZ1bmN0aW9uKSB7XHJcbiAgICAgICAgY29uc3QgYXV0aGVudGljYXRpb25Ub2tlbiA9IChyZXF1ZXN0LmNvb2tpZXMgfHwge30pW0F1dGhlbnRpY2F0aW9uTWlkZGxld2FyZS5hdXRoZW50aWNhdGlvbkNvb2tpZU5hbWVdO1xyXG5cclxuICAgICAgICB0aGlzLmF1dGhlbnRpY2F0aW9uVG9rZW5Qcm92aWRlclxyXG4gICAgICAgICAgICAudmFsaWRhdGUoYXV0aGVudGljYXRpb25Ub2tlbilcclxuICAgICAgICAgICAgLnRoZW4odXNlciA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXF1ZXN0LnVzZXIgPSB1c2VyO1xyXG4gICAgICAgICAgICAgICAgbmV4dCgpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goKCkgPT4gcmVzcG9uc2Uuc2VuZFN0YXR1cyg0MDEpLmVuZCgpKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEFkZHMgYXV0aGVudGljYXRpb24gY29va2llIHRvIHJlc3BvbnNlLlxyXG4gICAgICovXHJcbiAgICBzaWduSW4ocmVxdWVzdDogZXhwcmVzcy5SZXF1ZXN0LCByZXNwb25zZTogZXhwcmVzcy5SZXNwb25zZSwgdXNlcklkOiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgICAgIGlmICghcmVzcG9uc2UpXHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcInJlc3BvbnNlIGlzIHVuZGVmaW5lZFwiKTtcclxuICAgICAgICBpZiAoIXVzZXJJZClcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwidXNlcklkIGlzIHVuZGVmaW5lZFwiKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYXV0aGVudGljYXRpb25Ub2tlblByb3ZpZGVyXHJcbiAgICAgICAgICAgIC5nZW5lcmF0ZSh1c2VySWQpXHJcbiAgICAgICAgICAgIC50aGVuKGluZm8gPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVzcG9uc2UuY29va2llKEF1dGhlbnRpY2F0aW9uTWlkZGxld2FyZS5hdXRoZW50aWNhdGlvbkNvb2tpZU5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgaW5mby50b2tlbiwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBodHRwT25seTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXhwaXJlczogaW5mby5leHBpcmVzQXRcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcbn0iXX0=

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	/// <reference path="../../typings/index.d.ts"/>
	"use strict";
	var express = __webpack_require__(4);
	var db_1 = __webpack_require__(10);
	var mongo_product_storage_1 = __webpack_require__(20);
	var product_service_1 = __webpack_require__(21);
	var db = new db_1.default();
	var productService = new product_service_1.default(new mongo_product_storage_1.default(db));
	var router = express.Router();
	router.get("/:id", function (req, res) {
	    var productId = (req.params || {})["id"];
	    if (!productId) {
	        res.send(404, "Not found")
	            .end();
	        return;
	    }
	    productService.one(productId)
	        .then(function (product) { return res.json(product); })
	        .catch(function (err) { return res.send(404, "Not found").end(); });
	});
	router.get("/", function (req, res) {
	    productService.all()
	        .then(function (products) { return res.json(products); })
	        .catch(function (err) { return res.send(500, err).end(); });
	});
	router.post("/", function (request, response) {
	    var product = request.body;
	    productService.save(product)
	        .then(function (result) {
	        if (result["ok"] === false) {
	            response.json(result).end();
	        }
	        else {
	            var updatedProduct = result;
	            var okResponse = {
	                ok: true,
	                entity: updatedProduct
	            };
	            response.json(okResponse).end();
	        }
	    });
	});
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = router;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1yb3V0ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInByb2R1Y3Qtcm91dGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0RBQWdEOztBQUVoRCxJQUFZLE9BQU8sV0FBTSxTQUFTLENBQUMsQ0FBQTtBQUVuQyxtQkFBZSxzQkFBc0IsQ0FBQyxDQUFBO0FBQ3RDLHNDQUFnQywrQ0FBK0MsQ0FBQyxDQUFBO0FBQ2hGLGdDQUEyQix5Q0FBeUMsQ0FBQyxDQUFBO0FBRXJFLElBQU0sRUFBRSxHQUFHLElBQUksWUFBRSxFQUFFLENBQUM7QUFFcEIsSUFBTSxjQUFjLEdBQUcsSUFBSSx5QkFBYyxDQUFDLElBQUksK0JBQW1CLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUV2RSxJQUFNLE1BQU0sR0FBRyxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUM7QUFFaEMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsVUFBQyxHQUFHLEVBQUUsR0FBRztJQUN4QixJQUFNLFNBQVMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxNQUFNLElBQUksRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7SUFFM0MsRUFBRSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO1FBQ2IsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsV0FBVyxDQUFDO2FBQ3JCLEdBQUcsRUFBRSxDQUFDO1FBQ1gsTUFBTSxDQUFDO0lBQ1gsQ0FBQztJQUdELGNBQWMsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDO1NBQ3hCLElBQUksQ0FBQyxVQUFBLE9BQU8sSUFBSSxPQUFBLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQWpCLENBQWlCLENBQUM7U0FDbEMsS0FBSyxDQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsV0FBVyxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQWhDLENBQWdDLENBQUMsQ0FBQztBQUN4RCxDQUFDLENBQUMsQ0FBQztBQUVILE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLFVBQUMsR0FBRyxFQUFFLEdBQUc7SUFDckIsY0FBYyxDQUFDLEdBQUcsRUFBRTtTQUNmLElBQUksQ0FBQyxVQUFBLFFBQVEsSUFBSSxPQUFBLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQWxCLENBQWtCLENBQUM7U0FDcEMsS0FBSyxDQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQXhCLENBQXdCLENBQUMsQ0FBQztBQUNoRCxDQUFDLENBQUMsQ0FBQztBQUVILE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLFVBQUMsT0FBTyxFQUFFLFFBQVE7SUFDL0IsSUFBTSxPQUFPLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQztJQUU3QixjQUFjLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQztTQUN2QixJQUFJLENBQUMsVUFBQSxNQUFNO1FBQ1IsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDekIsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUNoQyxDQUFDO1FBQ0QsSUFBSSxDQUFDLENBQUM7WUFDRixJQUFNLGNBQWMsR0FBZ0IsTUFBTSxDQUFDO1lBQzNDLElBQU0sVUFBVSxHQUFzQztnQkFDbEQsRUFBRSxFQUFFLElBQUk7Z0JBQ1IsTUFBTSxFQUFFLGNBQWM7YUFDekIsQ0FBQztZQUVGLFFBQVEsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUM7UUFDcEMsQ0FBQztJQUNMLENBQUMsQ0FBQyxDQUFDO0FBRVgsQ0FBQyxDQUFDLENBQUM7QUFFSDtrQkFBZSxNQUFNLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vdHlwaW5ncy9pbmRleC5kLnRzXCIvPlxyXG5cclxuaW1wb3J0ICogYXMgZXhwcmVzcyBmcm9tIFwiZXhwcmVzc1wiO1xyXG5cclxuaW1wb3J0IERiIGZyb20gXCIuLi8uLi9kYXRhLWFjY2Vzcy9kYlwiO1xyXG5pbXBvcnQgTW9uZ29Qcm9kdWN0U3RvcmFnZSBmcm9tIFwiLi4vLi4vc2VydmljZXMvcHJvZHVjdHMvbW9uZ28tcHJvZHVjdC1zdG9yYWdlXCI7XHJcbmltcG9ydCBQcm9kdWN0U2VydmljZSBmcm9tIFwiLi4vLi4vc2VydmljZXMvcHJvZHVjdHMvcHJvZHVjdC1zZXJ2aWNlXCI7XHJcblxyXG5jb25zdCBkYiA9IG5ldyBEYigpO1xyXG5cclxuY29uc3QgcHJvZHVjdFNlcnZpY2UgPSBuZXcgUHJvZHVjdFNlcnZpY2UobmV3IE1vbmdvUHJvZHVjdFN0b3JhZ2UoZGIpKTsgXHJcblxyXG5jb25zdCByb3V0ZXIgPSBleHByZXNzLlJvdXRlcigpO1xyXG5cclxucm91dGVyLmdldChcIi86aWRcIiwgKHJlcSwgcmVzKSA9PiB7XHJcbiAgICBjb25zdCBwcm9kdWN0SWQgPSAocmVxLnBhcmFtcyB8fCB7fSlbXCJpZFwiXTtcclxuXHJcbiAgICBpZiAoIXByb2R1Y3RJZCkge1xyXG4gICAgICAgIHJlcy5zZW5kKDQwNCwgXCJOb3QgZm91bmRcIilcclxuICAgICAgICAgICAgLmVuZCgpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHJvZHVjdFNlcnZpY2Uub25lKHByb2R1Y3RJZClcclxuICAgICAgICAudGhlbihwcm9kdWN0ID0+IHJlcy5qc29uKHByb2R1Y3QpKVxyXG4gICAgICAgIC5jYXRjaChlcnIgPT4gcmVzLnNlbmQoNDA0LCBcIk5vdCBmb3VuZFwiKS5lbmQoKSk7XHJcbn0pO1xyXG5cclxucm91dGVyLmdldChcIi9cIiwgKHJlcSwgcmVzKSA9PiB7XHJcbiAgICBwcm9kdWN0U2VydmljZS5hbGwoKVxyXG4gICAgICAgIC50aGVuKHByb2R1Y3RzID0+IHJlcy5qc29uKHByb2R1Y3RzKSlcclxuICAgICAgICAuY2F0Y2goZXJyID0+IHJlcy5zZW5kKDUwMCwgZXJyKS5lbmQoKSk7IFxyXG59KTtcclxuXHJcbnJvdXRlci5wb3N0KFwiL1wiLCAocmVxdWVzdCwgcmVzcG9uc2UpID0+IHtcclxuICAgIGNvbnN0IHByb2R1Y3QgPSByZXF1ZXN0LmJvZHk7XHJcblxyXG4gICAgcHJvZHVjdFNlcnZpY2Uuc2F2ZShwcm9kdWN0KVxyXG4gICAgICAgIC50aGVuKHJlc3VsdCA9PiB7XHJcbiAgICAgICAgICAgIGlmIChyZXN1bHRbXCJva1wiXSA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgICAgIHJlc3BvbnNlLmpzb24ocmVzdWx0KS5lbmQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHVwZGF0ZWRQcm9kdWN0ID0gPEFwaS5Qcm9kdWN0PnJlc3VsdDtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG9rUmVzcG9uc2U6IEFwaS5JU3VjY2Vzc1Jlc3BvbnNlPEFwaS5Qcm9kdWN0PiA9IHtcclxuICAgICAgICAgICAgICAgICAgICBvazogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICBlbnRpdHk6IHVwZGF0ZWRQcm9kdWN0XHJcbiAgICAgICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgICAgIHJlc3BvbnNlLmpzb24ob2tSZXNwb25zZSkuZW5kKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcm91dGVyOyJdfQ==

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	/// <reference path="../../typings/index.d.ts" />
	"use strict";
	var db_1 = __webpack_require__(10);
	var MongoProductStorage = (function () {
	    function MongoProductStorage(db) {
	        this.db = db;
	        if (!db)
	            throw new Error("db is missing");
	    }
	    MongoProductStorage.prototype.all = function () {
	        return this.db
	            .collection(db_1.default.Collections.products)
	            .then(function (c) { return c.find({}, { _id: 0 }); })
	            .then(function (c) { return c.toArray(); });
	    };
	    MongoProductStorage.prototype.one = function (id) {
	        if (!id)
	            throw new Error("id is undefined");
	        return this.db
	            .collection(db_1.default.Collections.products)
	            .then(function (c) { return c.find({ id: id }, { _id: 0 }); })
	            .then(function (c) { return c.limit(1); })
	            .then(function (c) { return c.next(); });
	    };
	    MongoProductStorage.prototype.save = function (product) {
	        if (!product)
	            throw new Error("product is undefined");
	        return this.db
	            .collection(db_1.default.Collections.products)
	            .then(function (c) { return c.updateOne({
	            id: product.id
	        }, {
	            $set: {
	                id: product.id,
	                title: product.title,
	                scrapingUrls: product.scrapingUrls
	            }
	        }, {
	            upsert: true
	        }); })
	            .then(function () { return product; });
	    };
	    MongoProductStorage.prototype.setScrapingData = function (productId, webShopId, values, log) {
	        var _this = this;
	        if (!productId)
	            throw new Error("productId is undefined");
	        if (!webShopId)
	            throw new Error("webShopId is undefined");
	        if (!values)
	            throw new Error("values is undefined");
	        return this.db
	            .collection(db_1.default.Collections.products)
	            .then(function (c) { return c.updateOne({
	            id: productId
	        }, {
	            $set: (_a = {},
	                _a["values." + webShopId] = values,
	                _a["log." + webShopId] = log,
	                _a
	            )
	        }, {
	            upsert: true
	        }); var _a; })
	            .then(function (r) { return _this.one(productId); });
	    };
	    return MongoProductStorage;
	}());
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = MongoProductStorage;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9uZ28tcHJvZHVjdC1zdG9yYWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibW9uZ28tcHJvZHVjdC1zdG9yYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGlEQUFpRDs7QUFFakQsbUJBQXFCLHNCQUFzQixDQUFDLENBQUE7QUFFNUM7SUFDSSw2QkFBb0IsRUFBWTtRQUFaLE9BQUUsR0FBRixFQUFFLENBQVU7UUFDNUIsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7WUFDSixNQUFNLElBQUksS0FBSyxDQUFDLGVBQWUsQ0FBQyxDQUFDO0lBQ3pDLENBQUM7SUFFRCxpQ0FBRyxHQUFIO1FBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFO2FBQ1QsVUFBVSxDQUFDLFlBQVEsQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDO2FBQ3pDLElBQUksQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQXRCLENBQXNCLENBQUM7YUFDakMsSUFBSSxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxDQUFDLE9BQU8sRUFBRSxFQUFYLENBQVcsQ0FBQyxDQUFDO0lBQ2hDLENBQUM7SUFFRCxpQ0FBRyxHQUFILFVBQUksRUFBVTtRQUNWLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO1lBQ0osTUFBTSxJQUFJLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBRXZDLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRTthQUNULFVBQVUsQ0FBQyxZQUFRLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQzthQUN6QyxJQUFJLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQTlCLENBQThCLENBQUM7YUFDekMsSUFBSSxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBVixDQUFVLENBQUM7YUFDckIsSUFBSSxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFSLENBQVEsQ0FBQyxDQUFDO0lBQzdCLENBQUM7SUFFRCxrQ0FBSSxHQUFKLFVBQUssT0FBb0I7UUFDckIsRUFBRSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUM7WUFDVCxNQUFNLElBQUksS0FBSyxDQUFDLHNCQUFzQixDQUFDLENBQUM7UUFFNUMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFO2FBQ1QsVUFBVSxDQUFDLFlBQVEsQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDO2FBQ3pDLElBQUksQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsQ0FBQyxTQUFTLENBQUM7WUFDbkIsRUFBRSxFQUFFLE9BQU8sQ0FBQyxFQUFFO1NBQ2pCLEVBQ0Q7WUFDSSxJQUFJLEVBQUU7Z0JBQ0YsRUFBRSxFQUFFLE9BQU8sQ0FBQyxFQUFFO2dCQUNkLEtBQUssRUFBRSxPQUFPLENBQUMsS0FBSztnQkFDcEIsWUFBWSxFQUFFLE9BQU8sQ0FBQyxZQUFZO2FBQ3JDO1NBQ0osRUFDRDtZQUNJLE1BQU0sRUFBRSxJQUFJO1NBQ2YsQ0FBQyxFQVpTLENBWVQsQ0FBQzthQUNGLElBQUksQ0FBQyxjQUFNLE9BQUEsT0FBTyxFQUFQLENBQU8sQ0FBQyxDQUFDO0lBQzdCLENBQUM7SUFFRCw2Q0FBZSxHQUFmLFVBQWdCLFNBQWlCLEVBQUUsU0FBaUIsRUFBRSxNQUF5QixFQUFFLEdBQWtCO1FBQW5HLGlCQXdCQztRQXZCRyxFQUFFLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztZQUNYLE1BQU0sSUFBSSxLQUFLLENBQUMsd0JBQXdCLENBQUMsQ0FBQztRQUM5QyxFQUFFLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztZQUNYLE1BQU0sSUFBSSxLQUFLLENBQUMsd0JBQXdCLENBQUMsQ0FBQztRQUM5QyxFQUFFLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQztZQUNSLE1BQU0sSUFBSSxLQUFLLENBQUMscUJBQXFCLENBQUMsQ0FBQztRQUUzQyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUU7YUFDVCxVQUFVLENBQUMsWUFBUSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUM7YUFDekMsSUFBSSxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxDQUFDLFNBQVMsQ0FDdEI7WUFDSSxFQUFFLEVBQUUsU0FBUztTQUNoQixFQUNEO1lBQ0ksSUFBSSxFQUFFO2dCQUNGLEdBQUMsWUFBVSxTQUFXLENBQUMsR0FBRSxNQUFNO2dCQUMvQixHQUFDLFNBQU8sU0FBVyxDQUFDLEdBQUUsR0FBRzs7YUFDNUI7U0FDSixFQUNEO1lBQ0ksTUFBTSxFQUFFLElBQUk7U0FDZixDQUFDLFVBWlMsQ0FZVCxDQUFDO2FBQ0YsSUFBSSxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsS0FBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsRUFBbkIsQ0FBbUIsQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUFDTCwwQkFBQztBQUFELENBQUMsQUF2RUQsSUF1RUM7QUF2RUQ7cUNBdUVDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vdHlwaW5ncy9pbmRleC5kLnRzXCIgLz5cclxuXHJcbmltcG9ydCBEYXRhYmFzZSBmcm9tIFwiLi4vLi4vZGF0YS1hY2Nlc3MvZGJcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1vbmdvUHJvZHVjdFN0b3JhZ2UgaW1wbGVtZW50cyBQcm9kdWN0cy5JUHJvZHVjdFN0b3JhZ2Uge1xyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBkYjogRGF0YWJhc2UpIHtcclxuICAgICAgICBpZiAoIWRiKVxyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJkYiBpcyBtaXNzaW5nXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIGFsbCgpOiBQcm9taXNlPEFwaS5Qcm9kdWN0W10+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5kYlxyXG4gICAgICAgICAgICAuY29sbGVjdGlvbihEYXRhYmFzZS5Db2xsZWN0aW9ucy5wcm9kdWN0cylcclxuICAgICAgICAgICAgLnRoZW4oYyA9PiBjLmZpbmQoe30sIHsgX2lkOiAwIH0pKVxyXG4gICAgICAgICAgICAudGhlbihjID0+IGMudG9BcnJheSgpKTtcclxuICAgIH1cclxuXHJcbiAgICBvbmUoaWQ6IHN0cmluZyk6IFByb21pc2U8QXBpLlByb2R1Y3Q+IHtcclxuICAgICAgICBpZiAoIWlkKVxyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJpZCBpcyB1bmRlZmluZWRcIik7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLmRiXHJcbiAgICAgICAgICAgIC5jb2xsZWN0aW9uKERhdGFiYXNlLkNvbGxlY3Rpb25zLnByb2R1Y3RzKVxyXG4gICAgICAgICAgICAudGhlbihjID0+IGMuZmluZCh7IGlkOiBpZCB9LCB7IF9pZDogMCB9KSlcclxuICAgICAgICAgICAgLnRoZW4oYyA9PiBjLmxpbWl0KDEpKVxyXG4gICAgICAgICAgICAudGhlbihjID0+IGMubmV4dCgpKTtcclxuICAgIH1cclxuXHJcbiAgICBzYXZlKHByb2R1Y3Q6IEFwaS5Qcm9kdWN0KTogUHJvbWlzZTxBcGkuUHJvZHVjdD4ge1xyXG4gICAgICAgIGlmICghcHJvZHVjdClcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwicHJvZHVjdCBpcyB1bmRlZmluZWRcIik7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLmRiXHJcbiAgICAgICAgICAgIC5jb2xsZWN0aW9uKERhdGFiYXNlLkNvbGxlY3Rpb25zLnByb2R1Y3RzKVxyXG4gICAgICAgICAgICAudGhlbihjID0+IGMudXBkYXRlT25lKHtcclxuICAgICAgICAgICAgICAgIGlkOiBwcm9kdWN0LmlkXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICRzZXQ6IHtcclxuICAgICAgICAgICAgICAgICAgICBpZDogcHJvZHVjdC5pZCxcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogcHJvZHVjdC50aXRsZSxcclxuICAgICAgICAgICAgICAgICAgICBzY3JhcGluZ1VybHM6IHByb2R1Y3Quc2NyYXBpbmdVcmxzXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHVwc2VydDogdHJ1ZVxyXG4gICAgICAgICAgICB9KSlcclxuICAgICAgICAgICAgLnRoZW4oKCkgPT4gcHJvZHVjdCk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0U2NyYXBpbmdEYXRhKHByb2R1Y3RJZDogc3RyaW5nLCB3ZWJTaG9wSWQ6IHN0cmluZywgdmFsdWVzOiBBcGkuU2NyYXBlZFZhbHVlcywgbG9nOiBBcGkuU2NyYXBlTG9nKTogUHJvbWlzZTxBcGkuUHJvZHVjdD4ge1xyXG4gICAgICAgIGlmICghcHJvZHVjdElkKVxyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJwcm9kdWN0SWQgaXMgdW5kZWZpbmVkXCIpO1xyXG4gICAgICAgIGlmICghd2ViU2hvcElkKVxyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJ3ZWJTaG9wSWQgaXMgdW5kZWZpbmVkXCIpO1xyXG4gICAgICAgIGlmICghdmFsdWVzKVxyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJ2YWx1ZXMgaXMgdW5kZWZpbmVkXCIpO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5kYlxyXG4gICAgICAgICAgICAuY29sbGVjdGlvbihEYXRhYmFzZS5Db2xsZWN0aW9ucy5wcm9kdWN0cylcclxuICAgICAgICAgICAgLnRoZW4oYyA9PiBjLnVwZGF0ZU9uZShcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWQ6IHByb2R1Y3RJZFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAkc2V0OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgW2B2YWx1ZXMuJHt3ZWJTaG9wSWR9YF06IHZhbHVlcyxcclxuICAgICAgICAgICAgICAgICAgICBbYGxvZy4ke3dlYlNob3BJZH1gXTogbG9nXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHVwc2VydDogdHJ1ZVxyXG4gICAgICAgICAgICB9KSlcclxuICAgICAgICAgICAgLnRoZW4ociA9PiB0aGlzLm9uZShwcm9kdWN0SWQpKTtcclxuICAgIH1cclxufSJdfQ==

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	/// <reference path="../../typings/index.d.ts" />
	"use strict";
	var moment = __webpack_require__(15);
	var uuid = __webpack_require__(14);
	var event_bus_1 = __webpack_require__(22);
	var product_validator_1 = __webpack_require__(24);
	var ProductService = (function () {
	    function ProductService(storage) {
	        this.storage = storage;
	        this.validator = new product_validator_1.default();
	        if (!storage)
	            throw new Error("storage is undefined");
	    }
	    ProductService.prototype.all = function () {
	        return this.storage.all();
	    };
	    ProductService.prototype.save = function (product) {
	        var _this = this;
	        if (!product)
	            throw new Error("product is undefined");
	        if (!product.id)
	            product.id = uuid.v1();
	        return new Promise(function (resolve) {
	            var validationResult = _this.validator.validate(product);
	            if (!validationResult.ok)
	                resolve(validationResult);
	            else {
	                _this.storage
	                    .save(product)
	                    .then(function () { return _this.one(product.id); })
	                    .then(function (p) {
	                    event_bus_1.eventBus.emit(event_bus_1.EventNames.ProductUpdated, p.id);
	                    return p;
	                })
	                    .then(function (entity) { return resolve(entity); });
	            }
	        });
	    };
	    ProductService.prototype.one = function (productId) {
	        if (!productId)
	            throw new Error("productId is undefined");
	        return this.storage.one(productId);
	    };
	    ProductService.prototype.updateScrapedData = function (productId, webshopId, data) {
	        var _this = this;
	        if (!productId)
	            throw new Error("productId is undefined");
	        if (!webshopId)
	            throw new Error("webShopId is undefined");
	        if (!data)
	            throw new Error("data is undefined");
	        var now = moment.utc().toDate();
	        return this.one(productId)
	            .then(function (product) {
	            if (!product.values)
	                product.values = {};
	            var values = product.values[webshopId] ||
	                {
	                    title: null,
	                    price: null,
	                    image: null
	                };
	            product.values[webshopId] = values;
	            if (!product.log)
	                product.log = {};
	            var log = product.log[webshopId] ||
	                {
	                    url: null,
	                    scrapedAt: null,
	                    error: data.error,
	                    values: {}
	                };
	            product.log[webshopId] = log;
	            log.url = product.scrapingUrls[webshopId];
	            log.scrapedAt = now;
	            log.error = data.error;
	            Object.keys(data.values)
	                .forEach(function (name) {
	                var value = data.values[name];
	                if (value.isSuccessful)
	                    values[name] = value.value;
	                log.values[name] = {
	                    scrapedAt: now,
	                    error: value.error
	                };
	            });
	            return _this.storage.setScrapingData(product.id, webshopId, values, log);
	        });
	    };
	    return ProductService;
	}());
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = ProductService;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicHJvZHVjdC1zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGlEQUFpRDs7QUFFakQsSUFBWSxNQUFNLFdBQU0sUUFBUSxDQUFDLENBQUE7QUFDakMsSUFBWSxJQUFJLFdBQU0sV0FBVyxDQUFDLENBQUE7QUFFbEMsMEJBQXFDLGNBQWMsQ0FBQyxDQUFBO0FBRXBELGtDQUE2QixxQkFBcUIsQ0FBQyxDQUFBO0FBRW5EO0lBR0ksd0JBQW9CLE9BQWlDO1FBQWpDLFlBQU8sR0FBUCxPQUFPLENBQTBCO1FBRjdDLGNBQVMsR0FBRyxJQUFJLDJCQUFnQixFQUFFLENBQUM7UUFHdkMsRUFBRSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUM7WUFDVCxNQUFNLElBQUksS0FBSyxDQUFDLHNCQUFzQixDQUFDLENBQUM7SUFDaEQsQ0FBQztJQUVELDRCQUFHLEdBQUg7UUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsQ0FBQztJQUM5QixDQUFDO0lBRUQsNkJBQUksR0FBSixVQUFLLE9BQW9CO1FBQXpCLGlCQXVCQztRQXRCRyxFQUFFLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQztZQUNULE1BQU0sSUFBSSxLQUFLLENBQUMsc0JBQXNCLENBQUMsQ0FBQztRQUU1QyxFQUFFLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUM7WUFDWixPQUFPLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxFQUFFLEVBQUUsQ0FBQztRQUUzQixNQUFNLENBQUMsSUFBSSxPQUFPLENBQUMsVUFBQSxPQUFPO1lBQ3RCLElBQU0sZ0JBQWdCLEdBQUcsS0FBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDMUQsRUFBRSxDQUFDLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFFLENBQUM7Z0JBQ3JCLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1lBQzlCLElBQUksQ0FBQyxDQUFDO2dCQUNGLEtBQUksQ0FBQyxPQUFPO3FCQUNQLElBQUksQ0FBQyxPQUFPLENBQUM7cUJBQ2IsSUFBSSxDQUFDLGNBQU0sT0FBQSxLQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsRUFBcEIsQ0FBb0IsQ0FBQztxQkFDaEMsSUFBSSxDQUFDLFVBQUEsQ0FBQztvQkFDSCxvQkFBUSxDQUFDLElBQUksQ0FBQyxzQkFBVSxDQUFDLGNBQWMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7b0JBRS9DLE1BQU0sQ0FBQyxDQUFDLENBQUM7Z0JBQ2IsQ0FBQyxDQUFDO3FCQUNELElBQUksQ0FBQyxVQUFBLE1BQU0sSUFBSSxPQUFBLE9BQU8sQ0FBQyxNQUFNLENBQUMsRUFBZixDQUFlLENBQUMsQ0FBQztZQUN6QyxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsNEJBQUcsR0FBSCxVQUFJLFNBQWlCO1FBQ2pCLEVBQUUsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO1lBQ1gsTUFBTSxJQUFJLEtBQUssQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO1FBRTlDLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBRUQsMENBQWlCLEdBQWpCLFVBQWtCLFNBQWlCLEVBQUUsU0FBaUIsRUFBRSxJQUFvQztRQUE1RixpQkFxREM7UUFwREcsRUFBRSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7WUFDWCxNQUFNLElBQUksS0FBSyxDQUFDLHdCQUF3QixDQUFDLENBQUM7UUFDOUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7WUFDWCxNQUFNLElBQUksS0FBSyxDQUFDLHdCQUF3QixDQUFDLENBQUM7UUFDOUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7WUFDTixNQUFNLElBQUksS0FBSyxDQUFDLG1CQUFtQixDQUFDLENBQUM7UUFDekMsSUFBTSxHQUFHLEdBQUcsTUFBTSxDQUFDLEdBQUcsRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBRWxDLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQzthQUNyQixJQUFJLENBQUMsVUFBQSxPQUFPO1lBQ1QsRUFBRSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDO2dCQUNoQixPQUFPLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQztZQUV4QixJQUFNLE1BQU0sR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQztnQkFDeEM7b0JBQ0ksS0FBSyxFQUFFLElBQUk7b0JBQ1gsS0FBSyxFQUFFLElBQUk7b0JBQ1gsS0FBSyxFQUFFLElBQUk7aUJBQ2QsQ0FBQztZQUNGLE9BQU8sQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLEdBQUcsTUFBTSxDQUFDO1lBRW5DLEVBQUUsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQztnQkFDYixPQUFPLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQztZQUVyQixJQUFNLEdBQUcsR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQztnQkFDbEM7b0JBQ0ksR0FBRyxFQUFFLElBQUk7b0JBQ1QsU0FBUyxFQUFFLElBQUk7b0JBQ2YsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLO29CQUNqQixNQUFNLEVBQUUsRUFBRTtpQkFDYixDQUFDO1lBQ0YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsR0FBRyxHQUFHLENBQUM7WUFFN0IsR0FBRyxDQUFDLEdBQUcsR0FBRyxPQUFPLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQzFDLEdBQUcsQ0FBQyxTQUFTLEdBQUcsR0FBRyxDQUFDO1lBQ3BCLEdBQUcsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztZQUV2QixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7aUJBQ25CLE9BQU8sQ0FBQyxVQUFBLElBQUk7Z0JBQ1QsSUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFFaEMsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQztvQkFDbkIsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUM7Z0JBRS9CLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUc7b0JBQ2YsU0FBUyxFQUFFLEdBQUc7b0JBQ2QsS0FBSyxFQUFFLEtBQUssQ0FBQyxLQUFLO2lCQUNyQixDQUFDO1lBQ04sQ0FBQyxDQUFDLENBQUM7WUFFUCxNQUFNLENBQUMsS0FBSSxDQUFDLE9BQU8sQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDLEVBQUUsRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQzVFLENBQUMsQ0FBQyxDQUFDO0lBQ1gsQ0FBQztJQUNMLHFCQUFDO0FBQUQsQ0FBQyxBQWxHRCxJQWtHQztBQWxHRDtnQ0FrR0MsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi90eXBpbmdzL2luZGV4LmQudHNcIiAvPlxyXG5cclxuaW1wb3J0ICogYXMgbW9tZW50IGZyb20gXCJtb21lbnRcIjtcclxuaW1wb3J0ICogYXMgdXVpZCBmcm9tIFwibm9kZS11dWlkXCI7XHJcblxyXG5pbXBvcnQgeyBldmVudEJ1cywgRXZlbnROYW1lcyB9IGZyb20gXCIuLi9ldmVudC1idXNcIjtcclxuXHJcbmltcG9ydCBQcm9kdWN0VmFsaWRhdG9yIGZyb20gXCIuL3Byb2R1Y3QtdmFsaWRhdG9yXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9kdWN0U2VydmljZSB7XHJcbiAgICBwcml2YXRlIHZhbGlkYXRvciA9IG5ldyBQcm9kdWN0VmFsaWRhdG9yKCk7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBzdG9yYWdlOiBQcm9kdWN0cy5JUHJvZHVjdFN0b3JhZ2UpIHtcclxuICAgICAgICBpZiAoIXN0b3JhZ2UpXHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcInN0b3JhZ2UgaXMgdW5kZWZpbmVkXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIGFsbCgpOiBQcm9taXNlPEFwaS5Qcm9kdWN0W10+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zdG9yYWdlLmFsbCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHNhdmUocHJvZHVjdDogQXBpLlByb2R1Y3QpOiBQcm9taXNlPEFwaS5WYWxpZGF0aW9uUmVzdWx0IHwgQXBpLlByb2R1Y3Q+IHtcclxuICAgICAgICBpZiAoIXByb2R1Y3QpXHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcInByb2R1Y3QgaXMgdW5kZWZpbmVkXCIpO1xyXG5cclxuICAgICAgICBpZiAoIXByb2R1Y3QuaWQpXHJcbiAgICAgICAgICAgIHByb2R1Y3QuaWQgPSB1dWlkLnYxKCk7XHJcblxyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcclxuICAgICAgICAgICAgY29uc3QgdmFsaWRhdGlvblJlc3VsdCA9IHRoaXMudmFsaWRhdG9yLnZhbGlkYXRlKHByb2R1Y3QpO1xyXG4gICAgICAgICAgICBpZiAoIXZhbGlkYXRpb25SZXN1bHQub2spXHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKHZhbGlkYXRpb25SZXN1bHQpO1xyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RvcmFnZVxyXG4gICAgICAgICAgICAgICAgICAgIC5zYXZlKHByb2R1Y3QpXHJcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oKCkgPT4gdGhpcy5vbmUocHJvZHVjdC5pZCkpXHJcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4ocCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50QnVzLmVtaXQoRXZlbnROYW1lcy5Qcm9kdWN0VXBkYXRlZCwgcC5pZCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcDtcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKGVudGl0eSA9PiByZXNvbHZlKGVudGl0eSkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25lKHByb2R1Y3RJZDogc3RyaW5nKTogUHJvbWlzZTxBcGkuUHJvZHVjdD4ge1xyXG4gICAgICAgIGlmICghcHJvZHVjdElkKVxyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJwcm9kdWN0SWQgaXMgdW5kZWZpbmVkXCIpO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5zdG9yYWdlLm9uZShwcm9kdWN0SWQpO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZVNjcmFwZWREYXRhKHByb2R1Y3RJZDogc3RyaW5nLCB3ZWJzaG9wSWQ6IHN0cmluZywgZGF0YTogU2NyYXBpbmcuV2ViU2hvcFNjcmFwaW5nUmVzdWx0KTogUHJvbWlzZTxBcGkuUHJvZHVjdD4ge1xyXG4gICAgICAgIGlmICghcHJvZHVjdElkKVxyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJwcm9kdWN0SWQgaXMgdW5kZWZpbmVkXCIpO1xyXG4gICAgICAgIGlmICghd2Vic2hvcElkKVxyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJ3ZWJTaG9wSWQgaXMgdW5kZWZpbmVkXCIpO1xyXG4gICAgICAgIGlmICghZGF0YSlcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiZGF0YSBpcyB1bmRlZmluZWRcIik7XHJcbiAgICAgICAgY29uc3Qgbm93ID0gbW9tZW50LnV0YygpLnRvRGF0ZSgpO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5vbmUocHJvZHVjdElkKVxyXG4gICAgICAgICAgICAudGhlbihwcm9kdWN0ID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICghcHJvZHVjdC52YWx1ZXMpXHJcbiAgICAgICAgICAgICAgICAgICAgcHJvZHVjdC52YWx1ZXMgPSB7fTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZXMgPSBwcm9kdWN0LnZhbHVlc1t3ZWJzaG9wSWRdIHx8XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgcHJpY2U6IG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2U6IG51bGxcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICBwcm9kdWN0LnZhbHVlc1t3ZWJzaG9wSWRdID0gdmFsdWVzO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICghcHJvZHVjdC5sb2cpXHJcbiAgICAgICAgICAgICAgICAgICAgcHJvZHVjdC5sb2cgPSB7fTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBsb2cgPSBwcm9kdWN0LmxvZ1t3ZWJzaG9wSWRdIHx8XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdXJsOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgIHNjcmFwZWRBdDogbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICBlcnJvcjogZGF0YS5lcnJvcixcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZXM6IHt9XHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgcHJvZHVjdC5sb2dbd2Vic2hvcElkXSA9IGxvZztcclxuXHJcbiAgICAgICAgICAgICAgICBsb2cudXJsID0gcHJvZHVjdC5zY3JhcGluZ1VybHNbd2Vic2hvcElkXTtcclxuICAgICAgICAgICAgICAgIGxvZy5zY3JhcGVkQXQgPSBub3c7XHJcbiAgICAgICAgICAgICAgICBsb2cuZXJyb3IgPSBkYXRhLmVycm9yO1xyXG5cclxuICAgICAgICAgICAgICAgIE9iamVjdC5rZXlzKGRhdGEudmFsdWVzKVxyXG4gICAgICAgICAgICAgICAgICAgIC5mb3JFYWNoKG5hbWUgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZSA9IGRhdGEudmFsdWVzW25hbWVdO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZhbHVlLmlzU3VjY2Vzc2Z1bClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlc1tuYW1lXSA9IHZhbHVlLnZhbHVlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgbG9nLnZhbHVlc1tuYW1lXSA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjcmFwZWRBdDogbm93LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3I6IHZhbHVlLmVycm9yXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuc3RvcmFnZS5zZXRTY3JhcGluZ0RhdGEocHJvZHVjdC5pZCwgd2Vic2hvcElkLCB2YWx1ZXMsIGxvZyk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG59Il19

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	/// <reference path="../typings/index.d.ts"/>
	"use strict";
	var events_1 = __webpack_require__(23);
	var EventNames = (function () {
	    function EventNames() {
	    }
	    /**
	     * Published when product inserted or updated.
	     * Params is product id: string.
	     */
	    EventNames.ProductUpdated = "product-updated";
	    /**
	     * Published when product data is scraped.
	     * Param is product id: string.
	     */
	    EventNames.ProductScraped = "product-scraped";
	    return EventNames;
	}());
	exports.EventNames = EventNames;
	var eventBus = new events_1.EventEmitter();
	exports.eventBus = eventBus;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXZlbnQtYnVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZXZlbnQtYnVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDZDQUE2Qzs7QUFFN0MsdUJBQTZCLFFBQVEsQ0FBQyxDQUFBO0FBRXRDO0lBQUE7SUFXQSxDQUFDO0lBVkc7OztPQUdHO0lBQ0kseUJBQWMsR0FBRyxpQkFBaUIsQ0FBQztJQUMxQzs7O09BR0c7SUFDSSx5QkFBYyxHQUFHLGlCQUFpQixDQUFDO0lBQzlDLGlCQUFDO0FBQUQsQ0FBQyxBQVhELElBV0M7QUFJa0Isa0JBQVUsY0FKNUI7QUFFRCxJQUFNLFFBQVEsR0FBRyxJQUFJLHFCQUFZLEVBQUU7QUFFMUIsZ0JBQVEsWUFGbUI7QUFFSiIsInNvdXJjZXNDb250ZW50IjpbIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi90eXBpbmdzL2luZGV4LmQudHNcIi8+XHJcblxyXG5pbXBvcnQgeyBFdmVudEVtaXR0ZXIgfSBmcm9tIFwiZXZlbnRzXCI7XHJcblxyXG5jbGFzcyBFdmVudE5hbWVzIHtcclxuICAgIC8qKlxyXG4gICAgICogUHVibGlzaGVkIHdoZW4gcHJvZHVjdCBpbnNlcnRlZCBvciB1cGRhdGVkLlxyXG4gICAgICogUGFyYW1zIGlzIHByb2R1Y3QgaWQ6IHN0cmluZy5cclxuICAgICAqL1xyXG4gICAgc3RhdGljIFByb2R1Y3RVcGRhdGVkID0gXCJwcm9kdWN0LXVwZGF0ZWRcIjtcclxuICAgIC8qKlxyXG4gICAgICogUHVibGlzaGVkIHdoZW4gcHJvZHVjdCBkYXRhIGlzIHNjcmFwZWQuXHJcbiAgICAgKiBQYXJhbSBpcyBwcm9kdWN0IGlkOiBzdHJpbmcuXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBQcm9kdWN0U2NyYXBlZCA9IFwicHJvZHVjdC1zY3JhcGVkXCI7XHJcbn1cclxuXHJcbmNvbnN0IGV2ZW50QnVzID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuZXhwb3J0IHsgZXZlbnRCdXMsIEV2ZW50TmFtZXMgfTsiXX0=

/***/ },
/* 23 */
/***/ function(module, exports) {

	module.exports = require("events");

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	/// <reference path="../../typings/index.d.ts" />
	"use strict";
	var validation_1 = __webpack_require__(25);
	var ProductValidator = (function () {
	    function ProductValidator() {
	    }
	    ProductValidator.prototype.validate = function (product) {
	        if (!product)
	            throw new Error("product is undefined");
	        var validator = new validation_1.Validator();
	        return validator
	            .property("id")
	            .errorIf(function () { return !product.id; }, "Product ID is required")
	            .end()
	            .property("title")
	            .errorIf(function () { return !product.title; }, "Product title is required")
	            .errorIf(function () { return product.title && product.title.length > 1024; }, "Product title too long")
	            .end()
	            .property("scrapingUrls")
	            .errorIf(function () { return !product.scrapingUrls || Object.keys(product.scrapingUrls).length === 0; }, "At least one scraping URL is required")
	            .end()
	            .result();
	    };
	    return ProductValidator;
	}());
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = ProductValidator;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC12YWxpZGF0b3IuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwcm9kdWN0LXZhbGlkYXRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxpREFBaUQ7O0FBRWpELDJCQUEwQiw2QkFBNkIsQ0FBQyxDQUFBO0FBRXhEO0lBQUE7SUFxQkEsQ0FBQztJQW5CRyxtQ0FBUSxHQUFSLFVBQVMsT0FBb0I7UUFDekIsRUFBRSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUM7WUFDVCxNQUFNLElBQUksS0FBSyxDQUFDLHNCQUFzQixDQUFDLENBQUM7UUFFNUMsSUFBTSxTQUFTLEdBQUcsSUFBSSxzQkFBUyxFQUFFLENBQUM7UUFFbEMsTUFBTSxDQUFDLFNBQVM7YUFDWCxRQUFRLENBQUMsSUFBSSxDQUFDO2FBQ1YsT0FBTyxDQUFDLGNBQU0sT0FBQSxDQUFDLE9BQU8sQ0FBQyxFQUFFLEVBQVgsQ0FBVyxFQUFFLHdCQUF3QixDQUFDO2FBQ3hELEdBQUcsRUFBRTthQUNMLFFBQVEsQ0FBQyxPQUFPLENBQUM7YUFDYixPQUFPLENBQUMsY0FBTSxPQUFBLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBZCxDQUFjLEVBQUUsMkJBQTJCLENBQUM7YUFDMUQsT0FBTyxDQUFDLGNBQU0sT0FBQSxPQUFPLENBQUMsS0FBSyxJQUFJLE9BQU8sQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLElBQUksRUFBNUMsQ0FBNEMsRUFBRSx3QkFBd0IsQ0FBQzthQUN6RixHQUFHLEVBQUU7YUFDTCxRQUFRLENBQUMsY0FBYyxDQUFDO2FBQ3BCLE9BQU8sQ0FBQyxjQUFNLE9BQUEsQ0FBQyxPQUFPLENBQUMsWUFBWSxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQXZFLENBQXVFLEVBQUUsdUNBQXVDLENBQUM7YUFDbkksR0FBRyxFQUFFO2FBQ0wsTUFBTSxFQUFFLENBQUM7SUFDbEIsQ0FBQztJQUNMLHVCQUFDO0FBQUQsQ0FBQyxBQXJCRCxJQXFCQztBQXJCRDtrQ0FxQkMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi90eXBpbmdzL2luZGV4LmQudHNcIiAvPlxyXG5cclxuaW1wb3J0IHsgVmFsaWRhdG9yIH0gZnJvbSBcIi4uLy4uL3ZhbGlkYXRpb24vdmFsaWRhdGlvblwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvZHVjdFZhbGlkYXRvciB7XHJcblxyXG4gICAgdmFsaWRhdGUocHJvZHVjdDogQXBpLlByb2R1Y3QpOiBBcGkuVmFsaWRhdGlvblJlc3VsdCB7XHJcbiAgICAgICAgaWYgKCFwcm9kdWN0KVxyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJwcm9kdWN0IGlzIHVuZGVmaW5lZFwiKTtcclxuXHJcbiAgICAgICAgY29uc3QgdmFsaWRhdG9yID0gbmV3IFZhbGlkYXRvcigpO1xyXG5cclxuICAgICAgICByZXR1cm4gdmFsaWRhdG9yXHJcbiAgICAgICAgICAgIC5wcm9wZXJ0eShcImlkXCIpXHJcbiAgICAgICAgICAgICAgICAuZXJyb3JJZigoKSA9PiAhcHJvZHVjdC5pZCwgXCJQcm9kdWN0IElEIGlzIHJlcXVpcmVkXCIpXHJcbiAgICAgICAgICAgIC5lbmQoKVxyXG4gICAgICAgICAgICAucHJvcGVydHkoXCJ0aXRsZVwiKVxyXG4gICAgICAgICAgICAgICAgLmVycm9ySWYoKCkgPT4gIXByb2R1Y3QudGl0bGUsIFwiUHJvZHVjdCB0aXRsZSBpcyByZXF1aXJlZFwiKVxyXG4gICAgICAgICAgICAgICAgLmVycm9ySWYoKCkgPT4gcHJvZHVjdC50aXRsZSAmJiBwcm9kdWN0LnRpdGxlLmxlbmd0aCA+IDEwMjQsIFwiUHJvZHVjdCB0aXRsZSB0b28gbG9uZ1wiKVxyXG4gICAgICAgICAgICAuZW5kKClcclxuICAgICAgICAgICAgLnByb3BlcnR5KFwic2NyYXBpbmdVcmxzXCIpXHJcbiAgICAgICAgICAgICAgICAuZXJyb3JJZigoKSA9PiAhcHJvZHVjdC5zY3JhcGluZ1VybHMgfHwgT2JqZWN0LmtleXMocHJvZHVjdC5zY3JhcGluZ1VybHMpLmxlbmd0aCA9PT0gMCwgXCJBdCBsZWFzdCBvbmUgc2NyYXBpbmcgVVJMIGlzIHJlcXVpcmVkXCIpXHJcbiAgICAgICAgICAgIC5lbmQoKVxyXG4gICAgICAgICAgICAucmVzdWx0KCk7XHJcbiAgICB9XHJcbn0iXX0=

/***/ },
/* 25 */
/***/ function(module, exports) {

	/// <reference path="../typings/index.d.ts"/>
	"use strict";
	var Validator = (function () {
	    function Validator() {
	        this.context = "";
	        this.errors = {};
	    }
	    Validator.prototype.errorIf = function (isError, errorMessage) {
	        if (!isError)
	            throw new Error("isError check is required");
	        if (!isError())
	            return this;
	        var path = this.fullPath();
	        var errors = this.errors[path];
	        if (!errors) {
	            errors = [];
	            this.errors[path] = errors;
	        }
	        errors.push(errorMessage);
	        return this;
	    };
	    Validator.prototype.property = function (propertyName) {
	        var nested = new Validator();
	        var context = propertyName;
	        if (this.context)
	            context = this.context + "." + propertyName;
	        nested.context = context;
	        nested.errors = this.errors;
	        nested.parent = this;
	        return nested;
	    };
	    Validator.prototype.indexer = function (index) {
	        var nested = new Validator();
	        var context = "[" + index + "]";
	        if (this.context)
	            context = "" + this.context + context;
	        nested.context = context;
	        nested.errors = this.errors;
	        nested.parent = this;
	        return nested;
	    };
	    Validator.prototype.array = function (array, validator) {
	        var _this = this;
	        array = array || [];
	        array.forEach(function (element, index) {
	            var indexerValidator = _this.indexer(index);
	            validator(element, indexerValidator);
	        });
	        return this;
	    };
	    Validator.prototype.end = function () {
	        if (!this.parent)
	            throw new Error("No parent");
	        return this.parent;
	    };
	    Validator.prototype.result = function () {
	        return {
	            ok: Object.keys(this.errors).length === 0,
	            errors: this.errors
	        };
	    };
	    Validator.prototype.fullPath = function (path) {
	        if (!path && !this.context)
	            throw new Error("Use property() or indexer() to define value to validate");
	        if (!path)
	            return this.context;
	        if (!this.context)
	            return path;
	        return this.context + "." + path;
	    };
	    return Validator;
	}());
	exports.Validator = Validator;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInZhbGlkYXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsNkNBQTZDOztBQVM3QztJQUFBO1FBQ1ksWUFBTyxHQUFHLEVBQUUsQ0FBQztRQUdiLFdBQU0sR0FBaUMsRUFBRSxDQUFDO0lBdUZ0RCxDQUFDO0lBckZHLDJCQUFPLEdBQVAsVUFBUSxPQUFzQixFQUFFLFlBQW9CO1FBQ2hELEVBQUUsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDO1lBQ1QsTUFBTSxJQUFJLEtBQUssQ0FBQywyQkFBMkIsQ0FBQyxDQUFDO1FBRWpELEVBQUUsQ0FBQyxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDWCxNQUFNLENBQUMsSUFBSSxDQUFDO1FBRWhCLElBQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUU3QixJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQy9CLEVBQUUsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztZQUNWLE1BQU0sR0FBRyxFQUFFLENBQUM7WUFDWixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLE1BQU0sQ0FBQztRQUMvQixDQUFDO1FBRUQsTUFBTSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUUxQixNQUFNLENBQUMsSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFFRCw0QkFBUSxHQUFSLFVBQVMsWUFBb0I7UUFDekIsSUFBTSxNQUFNLEdBQUcsSUFBSSxTQUFTLEVBQUUsQ0FBQztRQUMvQixJQUFJLE9BQU8sR0FBRyxZQUFZLENBQUM7UUFFM0IsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQztZQUNiLE9BQU8sR0FBTSxJQUFJLENBQUMsT0FBTyxTQUFJLFlBQWMsQ0FBQztRQUVoRCxNQUFNLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztRQUN6QixNQUFNLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDNUIsTUFBTSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFFckIsTUFBTSxDQUFDLE1BQU0sQ0FBQztJQUNsQixDQUFDO0lBRUQsMkJBQU8sR0FBUCxVQUFRLEtBQWE7UUFDakIsSUFBTSxNQUFNLEdBQUcsSUFBSSxTQUFTLEVBQUUsQ0FBQztRQUMvQixJQUFJLE9BQU8sR0FBRyxNQUFJLEtBQUssTUFBRyxDQUFDO1FBRTNCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7WUFDYixPQUFPLEdBQUcsS0FBRyxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQVMsQ0FBQztRQUUxQyxNQUFNLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztRQUN6QixNQUFNLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDNUIsTUFBTSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFFckIsTUFBTSxDQUFDLE1BQU0sQ0FBQztJQUNsQixDQUFDO0lBRUQseUJBQUssR0FBTCxVQUFnQixLQUFpQixFQUFFLFNBQXNEO1FBQXpGLGlCQVNDO1FBUkcsS0FBSyxHQUFHLEtBQUssSUFBSSxFQUFFLENBQUM7UUFFcEIsS0FBSyxDQUFDLE9BQU8sQ0FBQyxVQUFDLE9BQU8sRUFBRSxLQUFLO1lBQ3pCLElBQU0sZ0JBQWdCLEdBQUcsS0FBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUM3QyxTQUFTLENBQUMsT0FBTyxFQUFFLGdCQUFnQixDQUFDLENBQUM7UUFDekMsQ0FBQyxDQUFDLENBQUM7UUFFSCxNQUFNLENBQUMsSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFFRCx1QkFBRyxHQUFIO1FBQ0ksRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO1lBQ2IsTUFBTSxJQUFJLEtBQUssQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUVqQyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUN2QixDQUFDO0lBRUQsMEJBQU0sR0FBTjtRQUNJLE1BQU0sQ0FBQztZQUNILEVBQUUsRUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxNQUFNLEtBQUssQ0FBQztZQUN6QyxNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU07U0FDdEIsQ0FBQztJQUNOLENBQUM7SUFFTyw0QkFBUSxHQUFoQixVQUFpQixJQUFhO1FBQzFCLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQztZQUN2QixNQUFNLElBQUksS0FBSyxDQUFDLHlEQUF5RCxDQUFDLENBQUM7UUFFL0UsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7WUFDTixNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUV4QixFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7WUFDZCxNQUFNLENBQUMsSUFBSSxDQUFDO1FBRWhCLE1BQU0sQ0FBSSxJQUFJLENBQUMsT0FBTyxTQUFJLElBQU0sQ0FBQztJQUNyQyxDQUFDO0lBQ0wsZ0JBQUM7QUFBRCxDQUFDLEFBM0ZELElBMkZDO0FBM0ZZLGlCQUFTLFlBMkZyQixDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL3R5cGluZ3MvaW5kZXguZC50c1wiLz5cclxuXHJcbmludGVyZmFjZSBWYWxpZGF0aW9uUmVzdWx0IHtcclxuICAgIG9rOiBib29sZWFuO1xyXG4gICAgZXJyb3JzOiB7XHJcbiAgICAgICAgW3BhdGg6IHN0cmluZ106IHN0cmluZ1tdO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgVmFsaWRhdG9yIHtcclxuICAgIHByaXZhdGUgY29udGV4dCA9IFwiXCI7XHJcbiAgICBwcml2YXRlIHBhcmVudDogVmFsaWRhdG9yO1xyXG5cclxuICAgIHByaXZhdGUgZXJyb3JzOiB7IFtwYXRoOiBzdHJpbmddOiBzdHJpbmdbXSB9ID0ge307XHJcblxyXG4gICAgZXJyb3JJZihpc0Vycm9yOiAoKSA9PiBib29sZWFuLCBlcnJvck1lc3NhZ2U6IHN0cmluZyk6IFZhbGlkYXRvciB7XHJcbiAgICAgICAgaWYgKCFpc0Vycm9yKVxyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJpc0Vycm9yIGNoZWNrIGlzIHJlcXVpcmVkXCIpO1xyXG5cclxuICAgICAgICBpZiAoIWlzRXJyb3IoKSlcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XHJcblxyXG4gICAgICAgIGNvbnN0IHBhdGggPSB0aGlzLmZ1bGxQYXRoKCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgbGV0IGVycm9ycyA9IHRoaXMuZXJyb3JzW3BhdGhdO1xyXG4gICAgICAgIGlmICghZXJyb3JzKSB7XHJcbiAgICAgICAgICAgIGVycm9ycyA9IFtdO1xyXG4gICAgICAgICAgICB0aGlzLmVycm9yc1twYXRoXSA9IGVycm9ycztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGVycm9ycy5wdXNoKGVycm9yTWVzc2FnZSk7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3BlcnR5KHByb3BlcnR5TmFtZTogc3RyaW5nKTogVmFsaWRhdG9yIHtcclxuICAgICAgICBjb25zdCBuZXN0ZWQgPSBuZXcgVmFsaWRhdG9yKCk7XHJcbiAgICAgICAgbGV0IGNvbnRleHQgPSBwcm9wZXJ0eU5hbWU7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmNvbnRleHQpXHJcbiAgICAgICAgICAgIGNvbnRleHQgPSBgJHt0aGlzLmNvbnRleHR9LiR7cHJvcGVydHlOYW1lfWA7XHJcblxyXG4gICAgICAgIG5lc3RlZC5jb250ZXh0ID0gY29udGV4dDtcclxuICAgICAgICBuZXN0ZWQuZXJyb3JzID0gdGhpcy5lcnJvcnM7XHJcbiAgICAgICAgbmVzdGVkLnBhcmVudCA9IHRoaXM7XHJcblxyXG4gICAgICAgIHJldHVybiBuZXN0ZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgaW5kZXhlcihpbmRleDogbnVtYmVyKTogVmFsaWRhdG9yIHtcclxuICAgICAgICBjb25zdCBuZXN0ZWQgPSBuZXcgVmFsaWRhdG9yKCk7XHJcbiAgICAgICAgbGV0IGNvbnRleHQgPSBgWyR7aW5kZXh9XWA7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmNvbnRleHQpXHJcbiAgICAgICAgICAgIGNvbnRleHQgPSBgJHt0aGlzLmNvbnRleHR9JHtjb250ZXh0fWA7XHJcblxyXG4gICAgICAgIG5lc3RlZC5jb250ZXh0ID0gY29udGV4dDtcclxuICAgICAgICBuZXN0ZWQuZXJyb3JzID0gdGhpcy5lcnJvcnM7XHJcbiAgICAgICAgbmVzdGVkLnBhcmVudCA9IHRoaXM7XHJcblxyXG4gICAgICAgIHJldHVybiBuZXN0ZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgYXJyYXk8VEVsZW1lbnQ+KGFycmF5OiBURWxlbWVudFtdLCB2YWxpZGF0b3I6IChlbGVtZW50OiBURWxlbWVudCwgYWNjOiBWYWxpZGF0b3IpID0+IHZvaWQpOiBWYWxpZGF0b3Ige1xyXG4gICAgICAgIGFycmF5ID0gYXJyYXkgfHwgW107XHJcblxyXG4gICAgICAgIGFycmF5LmZvckVhY2goKGVsZW1lbnQsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGluZGV4ZXJWYWxpZGF0b3IgPSB0aGlzLmluZGV4ZXIoaW5kZXgpO1xyXG4gICAgICAgICAgICB2YWxpZGF0b3IoZWxlbWVudCwgaW5kZXhlclZhbGlkYXRvcik7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgZW5kKCk6IFZhbGlkYXRvciB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnBhcmVudClcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTm8gcGFyZW50XCIpO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5wYXJlbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgcmVzdWx0KCk6IFZhbGlkYXRpb25SZXN1bHQge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIG9rOiBPYmplY3Qua2V5cyh0aGlzLmVycm9ycykubGVuZ3RoID09PSAwLFxyXG4gICAgICAgICAgICBlcnJvcnM6IHRoaXMuZXJyb3JzXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGZ1bGxQYXRoKHBhdGg/OiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgICAgIGlmICghcGF0aCAmJiAhdGhpcy5jb250ZXh0KVxyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJVc2UgcHJvcGVydHkoKSBvciBpbmRleGVyKCkgdG8gZGVmaW5lIHZhbHVlIHRvIHZhbGlkYXRlXCIpO1xyXG5cclxuICAgICAgICBpZiAoIXBhdGgpXHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNvbnRleHQ7XHJcblxyXG4gICAgICAgIGlmICghdGhpcy5jb250ZXh0KVxyXG4gICAgICAgICAgICByZXR1cm4gcGF0aDtcclxuXHJcbiAgICAgICAgcmV0dXJuIGAke3RoaXMuY29udGV4dH0uJHtwYXRofWA7XHJcbiAgICB9XHJcbn0iXX0=

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	/// <reference path="../../typings/index.d.ts" />
	"use strict";
	var express = __webpack_require__(4);
	var db_1 = __webpack_require__(10);
	var mongo_web_shop_storage_1 = __webpack_require__(27);
	var web_shop_service_1 = __webpack_require__(28);
	var db = new db_1.default();
	var webShopService = new web_shop_service_1.default(new mongo_web_shop_storage_1.default(db));
	var router = express.Router();
	router.get("/", function (request, response) {
	    webShopService.all()
	        .then(function (shops) {
	        var model = shops.map(function (s) { return ({
	            id: s.id,
	            isBase: s.isBase,
	            title: s.title,
	            delivery: s.delivery
	        }); });
	        response.json(model).end();
	    })
	        .catch(function (err) { return response.send(500, err).end(); });
	});
	router.post("/", function (request, response) {
	    var webShop = request.body;
	    if (!webShop.id) {
	        response.send(400, "Bad request. Web shop identifier is missing").end();
	    }
	    else {
	        webShopService.save(webShop)
	            .then(function (result) {
	            if (result["ok"] === false) {
	                response.json(result).end();
	            }
	            else {
	                var updatedWebShop = result;
	                var okResponse = {
	                    ok: true,
	                    entity: updatedWebShop
	                };
	                response.json(okResponse).end();
	            }
	        })
	            .catch(function (err) {
	            response.send(500, err).end();
	        });
	    }
	});
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = router;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2ViLXNob3Atcm91dGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ3ZWItc2hvcC1yb3V0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxpREFBaUQ7O0FBRWpELElBQVksT0FBTyxXQUFNLFNBQVMsQ0FBQyxDQUFBO0FBRW5DLG1CQUFlLHNCQUFzQixDQUFDLENBQUE7QUFFdEMsdUNBQWdDLGdEQUFnRCxDQUFDLENBQUE7QUFDakYsaUNBQTJCLDBDQUEwQyxDQUFDLENBQUE7QUFFdEUsSUFBTSxFQUFFLEdBQUcsSUFBSSxZQUFFLEVBQUUsQ0FBQztBQUVwQixJQUFNLGNBQWMsR0FBRyxJQUFJLDBCQUFjLENBQUMsSUFBSSxnQ0FBbUIsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBRXZFLElBQU0sTUFBTSxHQUFHLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUVoQyxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxVQUFDLE9BQU8sRUFBRSxRQUFRO0lBQzlCLGNBQWMsQ0FBQyxHQUFHLEVBQUU7U0FDZixJQUFJLENBQUMsVUFBQSxLQUFLO1FBQ1AsSUFBTSxLQUFLLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUM7WUFDMUIsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFO1lBQ1IsTUFBTSxFQUFFLENBQUMsQ0FBQyxNQUFNO1lBQ2hCLEtBQUssRUFBRSxDQUFDLENBQUMsS0FBSztZQUNkLFFBQVEsRUFBRSxDQUFDLENBQUMsUUFBUTtTQUN2QixDQUFDLEVBTDJCLENBSzNCLENBQUMsQ0FBQztRQUNKLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUM7SUFDL0IsQ0FBQyxDQUFDO1NBQ0QsS0FBSyxDQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQTdCLENBQTZCLENBQUMsQ0FBQztBQUNyRCxDQUFDLENBQUMsQ0FBQztBQUVILE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLFVBQUMsT0FBTyxFQUFFLFFBQVE7SUFDL0IsSUFBTSxPQUFPLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQztJQUU3QixFQUFFLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ2QsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsNkNBQTZDLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQztJQUM1RSxDQUFDO0lBQ0QsSUFBSSxDQUFDLENBQUM7UUFDRixjQUFjLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQzthQUN2QixJQUFJLENBQUMsVUFBQSxNQUFNO1lBQ1IsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLEtBQUssQ0FBQyxDQUFDLENBQUM7Z0JBQ3pCLFFBQVEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUM7WUFDaEMsQ0FBQztZQUNELElBQUksQ0FBQyxDQUFDO2dCQUNGLElBQU0sY0FBYyxHQUFnQixNQUFNLENBQUM7Z0JBQzNDLElBQU0sVUFBVSxHQUFzQztvQkFDbEQsRUFBRSxFQUFFLElBQUk7b0JBQ1IsTUFBTSxFQUFFLGNBQWM7aUJBQ3pCLENBQUM7Z0JBRUYsUUFBUSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQztZQUNwQyxDQUFDO1FBQ0wsQ0FBQyxDQUFDO2FBQ0QsS0FBSyxDQUFDLFVBQUEsR0FBRztZQUNOLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBQ2xDLENBQUMsQ0FBQyxDQUFDO0lBQ1gsQ0FBQztBQUNMLENBQUMsQ0FBQyxDQUFDO0FBRUg7a0JBQWUsTUFBTSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL3R5cGluZ3MvaW5kZXguZC50c1wiIC8+XHJcblxyXG5pbXBvcnQgKiBhcyBleHByZXNzIGZyb20gXCJleHByZXNzXCI7XHJcblxyXG5pbXBvcnQgRGIgZnJvbSBcIi4uLy4uL2RhdGEtYWNjZXNzL2RiXCI7XHJcblxyXG5pbXBvcnQgTW9uZ29XZWJTaG9wU3RvcmFnZSBmcm9tIFwiLi4vLi4vc2VydmljZXMvd2ViLXNob3AvbW9uZ28td2ViLXNob3Atc3RvcmFnZVwiO1xyXG5pbXBvcnQgV2ViU2hvcFNlcnZpY2UgZnJvbSBcIi4uLy4uL3NlcnZpY2VzL3dlYi1zaG9wL3dlYi1zaG9wLXNlcnZpY2VcIjtcclxuXHJcbmNvbnN0IGRiID0gbmV3IERiKCk7XHJcblxyXG5jb25zdCB3ZWJTaG9wU2VydmljZSA9IG5ldyBXZWJTaG9wU2VydmljZShuZXcgTW9uZ29XZWJTaG9wU3RvcmFnZShkYikpO1xyXG5cclxuY29uc3Qgcm91dGVyID0gZXhwcmVzcy5Sb3V0ZXIoKTtcclxuXHJcbnJvdXRlci5nZXQoXCIvXCIsIChyZXF1ZXN0LCByZXNwb25zZSkgPT4ge1xyXG4gICAgd2ViU2hvcFNlcnZpY2UuYWxsKClcclxuICAgICAgICAudGhlbihzaG9wcyA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IG1vZGVsID0gc2hvcHMubWFwKHMgPT4gKHtcclxuICAgICAgICAgICAgICAgIGlkOiBzLmlkLFxyXG4gICAgICAgICAgICAgICAgaXNCYXNlOiBzLmlzQmFzZSxcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBzLnRpdGxlLFxyXG4gICAgICAgICAgICAgICAgZGVsaXZlcnk6IHMuZGVsaXZlcnlcclxuICAgICAgICAgICAgfSkpO1xyXG4gICAgICAgICAgICByZXNwb25zZS5qc29uKG1vZGVsKS5lbmQoKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaChlcnIgPT4gcmVzcG9uc2Uuc2VuZCg1MDAsIGVycikuZW5kKCkpO1xyXG59KTtcclxuXHJcbnJvdXRlci5wb3N0KFwiL1wiLCAocmVxdWVzdCwgcmVzcG9uc2UpID0+IHtcclxuICAgIGNvbnN0IHdlYlNob3AgPSByZXF1ZXN0LmJvZHk7XHJcblxyXG4gICAgaWYgKCF3ZWJTaG9wLmlkKSB7XHJcbiAgICAgICAgcmVzcG9uc2Uuc2VuZCg0MDAsIFwiQmFkIHJlcXVlc3QuIFdlYiBzaG9wIGlkZW50aWZpZXIgaXMgbWlzc2luZ1wiKS5lbmQoKTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIHdlYlNob3BTZXJ2aWNlLnNhdmUod2ViU2hvcClcclxuICAgICAgICAgICAgLnRoZW4ocmVzdWx0ID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChyZXN1bHRbXCJva1wiXSA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXNwb25zZS5qc29uKHJlc3VsdCkuZW5kKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB1cGRhdGVkV2ViU2hvcCA9IDxBcGkuV2ViU2hvcD5yZXN1bHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgb2tSZXNwb25zZTogQXBpLklTdWNjZXNzUmVzcG9uc2U8QXBpLldlYlNob3A+ID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvazogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZW50aXR5OiB1cGRhdGVkV2ViU2hvcFxyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlLmpzb24ob2tSZXNwb25zZSkuZW5kKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVzcG9uc2Uuc2VuZCg1MDAsIGVycikuZW5kKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJvdXRlcjsiXX0=

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	/// <reference path="../../typings/index.d.ts" />
	"use strict";
	var db_1 = __webpack_require__(10);
	var MongoWebShopStorage = (function () {
	    function MongoWebShopStorage(db) {
	        this.db = db;
	        if (!db)
	            throw new Error("db is undefined");
	    }
	    MongoWebShopStorage.prototype.all = function () {
	        return this.db
	            .collection(db_1.default.Collections.webshops)
	            .then(function (c) { return c.find({}, { _id: 0 }); })
	            .then(function (c) { return c.toArray(); });
	    };
	    MongoWebShopStorage.prototype.one = function (id) {
	        if (!id)
	            throw new Error("id is undefined");
	        return this.db
	            .collection(db_1.default.Collections.webshops)
	            .then(function (c) { return c.find({ id: id }, { _id: 0 }); })
	            .then(function (c) { return c.limit(1).next(); });
	    };
	    MongoWebShopStorage.prototype.save = function (webShop) {
	        if (!webShop)
	            throw new Error("webShop is undefined");
	        return this.db
	            .collection(db_1.default.Collections.webshops)
	            .then(function (c) { return c.updateOne({
	            id: webShop.id
	        }, {
	            $set: {
	                id: webShop.id,
	                title: webShop.title,
	                delivery: webShop.delivery
	            }
	        }); })
	            .then(function () { return webShop; });
	    };
	    MongoWebShopStorage.prototype.put = function (webShop) {
	        if (!webShop)
	            throw new Error("webShop is undefined");
	        return this.db
	            .collection(db_1.default.Collections.webshops)
	            .then(function (c) { return c.updateOne({
	            id: webShop.id
	        }, webShop, {
	            upsert: true
	        }); })
	            .then(function () { return webShop; });
	    };
	    return MongoWebShopStorage;
	}());
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = MongoWebShopStorage;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9uZ28td2ViLXNob3Atc3RvcmFnZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1vbmdvLXdlYi1zaG9wLXN0b3JhZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsaURBQWlEOztBQUVqRCxtQkFBcUIsc0JBQXNCLENBQUMsQ0FBQTtBQUU1QztJQUNJLDZCQUFvQixFQUFZO1FBQVosT0FBRSxHQUFGLEVBQUUsQ0FBVTtRQUM1QixFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztZQUNKLE1BQU0sSUFBSSxLQUFLLENBQUMsaUJBQWlCLENBQUMsQ0FBQztJQUMzQyxDQUFDO0lBRUQsaUNBQUcsR0FBSDtRQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRTthQUNULFVBQVUsQ0FBQyxZQUFRLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQzthQUN6QyxJQUFJLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUF0QixDQUFzQixDQUFDO2FBQ2pDLElBQUksQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsQ0FBQyxPQUFPLEVBQUUsRUFBWCxDQUFXLENBQUMsQ0FBQztJQUNoQyxDQUFDO0lBRUQsaUNBQUcsR0FBSCxVQUFJLEVBQVU7UUFDVixFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztZQUNKLE1BQU0sSUFBSSxLQUFLLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQUV2QyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUU7YUFDVCxVQUFVLENBQUMsWUFBUSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUM7YUFDekMsSUFBSSxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUE5QixDQUE4QixDQUFDO2FBQ3pDLElBQUksQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQWpCLENBQWlCLENBQUMsQ0FBQztJQUN0QyxDQUFDO0lBRUQsa0NBQUksR0FBSixVQUFLLE9BQW9CO1FBQ3JCLEVBQUUsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDO1lBQ1QsTUFBTSxJQUFJLEtBQUssQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO1FBRTVDLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRTthQUNULFVBQVUsQ0FBQyxZQUFRLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQzthQUN6QyxJQUFJLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLENBQUMsU0FBUyxDQUNsQjtZQUNJLEVBQUUsRUFBRSxPQUFPLENBQUMsRUFBRTtTQUNqQixFQUNEO1lBQ0ksSUFBSSxFQUFFO2dCQUNGLEVBQUUsRUFBRSxPQUFPLENBQUMsRUFBRTtnQkFDZCxLQUFLLEVBQUUsT0FBTyxDQUFDLEtBQUs7Z0JBQ3BCLFFBQVEsRUFBRSxPQUFPLENBQUMsUUFBUTthQUM3QjtTQUNKLENBQ0osRUFYVSxDQVdWLENBQUM7YUFDRCxJQUFJLENBQUMsY0FBTSxPQUFBLE9BQU8sRUFBUCxDQUFPLENBQUMsQ0FBQztJQUM3QixDQUFDO0lBRUQsaUNBQUcsR0FBSCxVQUFJLE9BQW9CO1FBQ3BCLEVBQUUsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDO1lBQ1QsTUFBTSxJQUFJLEtBQUssQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO1FBRTVDLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRTthQUNULFVBQVUsQ0FBQyxZQUFRLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQzthQUN6QyxJQUFJLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLENBQUMsU0FBUyxDQUNsQjtZQUNJLEVBQUUsRUFBRSxPQUFPLENBQUMsRUFBRTtTQUNqQixFQUNELE9BQU8sRUFDUDtZQUNJLE1BQU0sRUFBRSxJQUFJO1NBQ2YsQ0FDSixFQVJVLENBUVYsQ0FBQzthQUNELElBQUksQ0FBQyxjQUFNLE9BQUEsT0FBTyxFQUFQLENBQU8sQ0FBQyxDQUFDO0lBQzdCLENBQUM7SUFDTCwwQkFBQztBQUFELENBQUMsQUE3REQsSUE2REM7QUE3REQ7cUNBNkRDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vdHlwaW5ncy9pbmRleC5kLnRzXCIgLz5cclxuXHJcbmltcG9ydCBEYXRhYmFzZSBmcm9tIFwiLi4vLi4vZGF0YS1hY2Nlc3MvZGJcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1vbmdvV2ViU2hvcFN0b3JhZ2UgaW1wbGVtZW50cyBXZWJTaG9wcy5JV2ViU2hvcFN0b3JhZ2Uge1xyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBkYjogRGF0YWJhc2UpIHtcclxuICAgICAgICBpZiAoIWRiKVxyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJkYiBpcyB1bmRlZmluZWRcIik7XHJcbiAgICB9XHJcblxyXG4gICAgYWxsKCk6IFByb21pc2U8QXBpLldlYlNob3BbXT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmRiXHJcbiAgICAgICAgICAgIC5jb2xsZWN0aW9uKERhdGFiYXNlLkNvbGxlY3Rpb25zLndlYnNob3BzKVxyXG4gICAgICAgICAgICAudGhlbihjID0+IGMuZmluZCh7fSwgeyBfaWQ6IDAgfSkpXHJcbiAgICAgICAgICAgIC50aGVuKGMgPT4gYy50b0FycmF5KCkpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uZShpZDogc3RyaW5nKTogUHJvbWlzZTxBcGkuV2ViU2hvcD4ge1xyXG4gICAgICAgIGlmICghaWQpXHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcImlkIGlzIHVuZGVmaW5lZFwiKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZGJcclxuICAgICAgICAgICAgLmNvbGxlY3Rpb24oRGF0YWJhc2UuQ29sbGVjdGlvbnMud2Vic2hvcHMpXHJcbiAgICAgICAgICAgIC50aGVuKGMgPT4gYy5maW5kKHsgaWQ6IGlkIH0sIHsgX2lkOiAwIH0pKVxyXG4gICAgICAgICAgICAudGhlbihjID0+IGMubGltaXQoMSkubmV4dCgpKTtcclxuICAgIH1cclxuXHJcbiAgICBzYXZlKHdlYlNob3A6IEFwaS5XZWJTaG9wKTogUHJvbWlzZTxBcGkuV2ViU2hvcD4ge1xyXG4gICAgICAgIGlmICghd2ViU2hvcClcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwid2ViU2hvcCBpcyB1bmRlZmluZWRcIik7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLmRiXHJcbiAgICAgICAgICAgIC5jb2xsZWN0aW9uKERhdGFiYXNlLkNvbGxlY3Rpb25zLndlYnNob3BzKVxyXG4gICAgICAgICAgICAudGhlbihjID0+IGMudXBkYXRlT25lKFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGlkOiB3ZWJTaG9wLmlkXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICRzZXQ6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IHdlYlNob3AuaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiB3ZWJTaG9wLnRpdGxlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWxpdmVyeTogd2ViU2hvcC5kZWxpdmVyeVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgLnRoZW4oKCkgPT4gd2ViU2hvcCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHV0KHdlYlNob3A6IEFwaS5XZWJTaG9wKTogUHJvbWlzZTxBcGkuV2ViU2hvcD4ge1xyXG4gICAgICAgIGlmICghd2ViU2hvcClcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwid2ViU2hvcCBpcyB1bmRlZmluZWRcIik7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLmRiXHJcbiAgICAgICAgICAgIC5jb2xsZWN0aW9uKERhdGFiYXNlLkNvbGxlY3Rpb25zLndlYnNob3BzKVxyXG4gICAgICAgICAgICAudGhlbihjID0+IGMudXBkYXRlT25lKFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGlkOiB3ZWJTaG9wLmlkXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgd2ViU2hvcCxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB1cHNlcnQ6IHRydWVcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgLnRoZW4oKCkgPT4gd2ViU2hvcCk7XHJcbiAgICB9XHJcbn0iXX0=

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	/// <reference path="../../typings/index.d.ts" />
	"use strict";
	var web_shop_validator_1 = __webpack_require__(29);
	var WebShopService = (function () {
	    function WebShopService(storage) {
	        this.storage = storage;
	        this.validator = new web_shop_validator_1.default();
	        if (!storage)
	            throw new Error("storage is undefined");
	    }
	    WebShopService.prototype.all = function () {
	        return this.storage.all();
	    };
	    WebShopService.prototype.one = function (webShopId) {
	        if (!webShopId)
	            throw new Error("webShopId is undefined");
	        return this.storage.one(webShopId);
	    };
	    WebShopService.prototype.save = function (webShop) {
	        var _this = this;
	        if (!webShop)
	            throw new Error("webShop is undefined");
	        webShop = this.normalize(webShop);
	        return new Promise(function (resolve) {
	            var validationResult = _this.validator.validate(webShop);
	            if (!validationResult.ok)
	                resolve(validationResult);
	            else
	                _this.storage
	                    .save(webShop)
	                    .then(function () { return _this.one(webShop.id); })
	                    .then(function (entity) { return resolve(entity); })
	                    .catch(function (err) {
	                    var errorResult = {
	                        ok: false,
	                        errors: {
	                            message: err
	                        }
	                    };
	                    resolve(errorResult);
	                });
	        });
	    };
	    WebShopService.prototype.put = function (webShop) {
	        var _this = this;
	        if (!webShop)
	            throw new Error("webShop is undefined");
	        webShop = this.normalize(webShop);
	        return new Promise(function (resolve) {
	            var validationResult = _this.validator.validate(webShop);
	            if (!validationResult.ok)
	                resolve(validationResult);
	            else
	                _this.storage
	                    .put(webShop)
	                    .then(function () { return _this.one(webShop.id); })
	                    .then(function (entity) { return resolve(entity); })
	                    .catch(function (err) {
	                    var errorResult = {
	                        ok: false,
	                        errors: {
	                            message: err
	                        }
	                    };
	                    resolve(errorResult);
	                });
	        });
	    };
	    WebShopService.prototype.normalize = function (webShop) {
	        if (webShop.delivery && webShop.delivery.length) {
	            webShop.delivery = webShop.delivery
	                .map(function (d) { return ({
	                deliveryMethod: d.deliveryMethod,
	                price: parseFloat("" + d.price)
	            }); });
	        }
	        return webShop;
	    };
	    return WebShopService;
	}());
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = WebShopService;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2ViLXNob3Atc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIndlYi1zaG9wLXNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsaURBQWlEOztBQUVqRCxtQ0FBNkIsc0JBQXNCLENBQUMsQ0FBQTtBQUVwRDtJQUlJLHdCQUFvQixPQUFpQztRQUFqQyxZQUFPLEdBQVAsT0FBTyxDQUEwQjtRQUY3QyxjQUFTLEdBQUcsSUFBSSw0QkFBZ0IsRUFBRSxDQUFDO1FBR3ZDLEVBQUUsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDO1lBQ1QsTUFBTSxJQUFJLEtBQUssQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO0lBQ2hELENBQUM7SUFFRCw0QkFBRyxHQUFIO1FBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLENBQUM7SUFDOUIsQ0FBQztJQUVELDRCQUFHLEdBQUgsVUFBSSxTQUFpQjtRQUNqQixFQUFFLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztZQUNYLE1BQU0sSUFBSSxLQUFLLENBQUMsd0JBQXdCLENBQUMsQ0FBQztRQUM5QyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDdkMsQ0FBQztJQUVELDZCQUFJLEdBQUosVUFBSyxPQUFvQjtRQUF6QixpQkEyQkM7UUExQkcsRUFBRSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUM7WUFDVCxNQUFNLElBQUksS0FBSyxDQUFDLHNCQUFzQixDQUFDLENBQUM7UUFFNUMsT0FBTyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUM7UUFFbEMsTUFBTSxDQUFDLElBQUksT0FBTyxDQUFDLFVBQUEsT0FBTztZQUN0QixJQUFNLGdCQUFnQixHQUFHLEtBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBRTFELEVBQUUsQ0FBQyxDQUFDLENBQUMsZ0JBQWdCLENBQUMsRUFBRSxDQUFDO2dCQUNyQixPQUFPLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztZQUM5QixJQUFJO2dCQUNBLEtBQUksQ0FBQyxPQUFPO3FCQUNQLElBQUksQ0FBQyxPQUFPLENBQUM7cUJBQ2IsSUFBSSxDQUFDLGNBQU0sT0FBQSxLQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsRUFBcEIsQ0FBb0IsQ0FBQztxQkFDaEMsSUFBSSxDQUFDLFVBQUEsTUFBTSxJQUFJLE9BQUEsT0FBTyxDQUFDLE1BQU0sQ0FBQyxFQUFmLENBQWUsQ0FBQztxQkFDL0IsS0FBSyxDQUFDLFVBQUEsR0FBRztvQkFDTixJQUFNLFdBQVcsR0FBeUI7d0JBQ3RDLEVBQUUsRUFBRSxLQUFLO3dCQUNULE1BQU0sRUFBRTs0QkFDSixPQUFPLEVBQUUsR0FBRzt5QkFDZjtxQkFDSixDQUFDO29CQUVGLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQztnQkFDekIsQ0FBQyxDQUFDLENBQUM7UUFDZixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCw0QkFBRyxHQUFILFVBQUksT0FBb0I7UUFBeEIsaUJBNEJDO1FBM0JHLEVBQUUsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDO1lBQ1QsTUFBTSxJQUFJLEtBQUssQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO1FBRTVDLE9BQU8sR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBRWxDLE1BQU0sQ0FBQyxJQUFJLE9BQU8sQ0FBQyxVQUFBLE9BQU87WUFFdEIsSUFBTSxnQkFBZ0IsR0FBRyxLQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUUxRCxFQUFFLENBQUMsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLEVBQUUsQ0FBQztnQkFDckIsT0FBTyxDQUFDLGdCQUFnQixDQUFDLENBQUM7WUFDOUIsSUFBSTtnQkFDQSxLQUFJLENBQUMsT0FBTztxQkFDUCxHQUFHLENBQUMsT0FBTyxDQUFDO3FCQUNaLElBQUksQ0FBQyxjQUFNLE9BQUEsS0FBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLEVBQXBCLENBQW9CLENBQUM7cUJBQ2hDLElBQUksQ0FBQyxVQUFBLE1BQU0sSUFBSSxPQUFBLE9BQU8sQ0FBQyxNQUFNLENBQUMsRUFBZixDQUFlLENBQUM7cUJBQy9CLEtBQUssQ0FBQyxVQUFBLEdBQUc7b0JBQ04sSUFBTSxXQUFXLEdBQXlCO3dCQUN0QyxFQUFFLEVBQUUsS0FBSzt3QkFDVCxNQUFNLEVBQUU7NEJBQ0osT0FBTyxFQUFFLEdBQUc7eUJBQ2Y7cUJBQ0osQ0FBQztvQkFDRixPQUFPLENBQUMsV0FBVyxDQUFDLENBQUM7Z0JBQ3pCLENBQUMsQ0FBQyxDQUFDO1FBRWYsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRU8sa0NBQVMsR0FBakIsVUFBa0IsT0FBb0I7UUFFbEMsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLFFBQVEsSUFBSSxPQUFPLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFDOUMsT0FBTyxDQUFDLFFBQVEsR0FBRyxPQUFPLENBQUMsUUFBUTtpQkFDOUIsR0FBRyxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQztnQkFDUCxjQUFjLEVBQUUsQ0FBQyxDQUFDLGNBQWM7Z0JBQ2hDLEtBQUssRUFBRSxVQUFVLENBQUMsS0FBRyxDQUFDLENBQUMsS0FBTyxDQUFDO2FBQ2xDLENBQUMsRUFIUSxDQUdSLENBQUMsQ0FBQztRQUNaLENBQUM7UUFFRCxNQUFNLENBQUMsT0FBTyxDQUFDO0lBQ25CLENBQUM7SUFDTCxxQkFBQztBQUFELENBQUMsQUExRkQsSUEwRkM7QUExRkQ7Z0NBMEZDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vdHlwaW5ncy9pbmRleC5kLnRzXCIgLz5cclxuXHJcbmltcG9ydCBXZWJTaG9wVmFsaWRhdG9yIGZyb20gXCIuL3dlYi1zaG9wLXZhbGlkYXRvclwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgV2ViU2hvcFNlcnZpY2Uge1xyXG5cclxuICAgIHByaXZhdGUgdmFsaWRhdG9yID0gbmV3IFdlYlNob3BWYWxpZGF0b3IoKTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHN0b3JhZ2U6IFdlYlNob3BzLklXZWJTaG9wU3RvcmFnZSkge1xyXG4gICAgICAgIGlmICghc3RvcmFnZSlcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwic3RvcmFnZSBpcyB1bmRlZmluZWRcIik7XHJcbiAgICB9XHJcblxyXG4gICAgYWxsKCk6IFByb21pc2U8QXBpLldlYlNob3BbXT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnN0b3JhZ2UuYWxsKCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25lKHdlYlNob3BJZDogc3RyaW5nKTogUHJvbWlzZTxBcGkuV2ViU2hvcD4ge1xyXG4gICAgICAgIGlmICghd2ViU2hvcElkKVxyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJ3ZWJTaG9wSWQgaXMgdW5kZWZpbmVkXCIpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLnN0b3JhZ2Uub25lKHdlYlNob3BJZCk7XHJcbiAgICB9XHJcblxyXG4gICAgc2F2ZSh3ZWJTaG9wOiBBcGkuV2ViU2hvcCk6IFByb21pc2U8QXBpLldlYlNob3AgfCBBcGkuVmFsaWRhdGlvblJlc3VsdD4ge1xyXG4gICAgICAgIGlmICghd2ViU2hvcClcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwid2ViU2hvcCBpcyB1bmRlZmluZWRcIik7XHJcblxyXG4gICAgICAgIHdlYlNob3AgPSB0aGlzLm5vcm1hbGl6ZSh3ZWJTaG9wKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCB2YWxpZGF0aW9uUmVzdWx0ID0gdGhpcy52YWxpZGF0b3IudmFsaWRhdGUod2ViU2hvcCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoIXZhbGlkYXRpb25SZXN1bHQub2spXHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKHZhbGlkYXRpb25SZXN1bHQpO1xyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0b3JhZ2VcclxuICAgICAgICAgICAgICAgICAgICAuc2F2ZSh3ZWJTaG9wKVxyXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKCgpID0+IHRoaXMub25lKHdlYlNob3AuaWQpKVxyXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKGVudGl0eSA9PiByZXNvbHZlKGVudGl0eSkpXHJcbiAgICAgICAgICAgICAgICAgICAgLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGVycm9yUmVzdWx0OiBBcGkuVmFsaWRhdGlvblJlc3VsdCA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9rOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGVyclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShlcnJvclJlc3VsdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHV0KHdlYlNob3A6IEFwaS5XZWJTaG9wKTogUHJvbWlzZTxBcGkuV2ViU2hvcCB8IEFwaS5WYWxpZGF0aW9uUmVzdWx0PiB7XHJcbiAgICAgICAgaWYgKCF3ZWJTaG9wKVxyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJ3ZWJTaG9wIGlzIHVuZGVmaW5lZFwiKTtcclxuXHJcbiAgICAgICAgd2ViU2hvcCA9IHRoaXMubm9ybWFsaXplKHdlYlNob3ApO1xyXG5cclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XHJcblxyXG4gICAgICAgICAgICBjb25zdCB2YWxpZGF0aW9uUmVzdWx0ID0gdGhpcy52YWxpZGF0b3IudmFsaWRhdGUod2ViU2hvcCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoIXZhbGlkYXRpb25SZXN1bHQub2spXHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKHZhbGlkYXRpb25SZXN1bHQpO1xyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0b3JhZ2VcclxuICAgICAgICAgICAgICAgICAgICAucHV0KHdlYlNob3ApXHJcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oKCkgPT4gdGhpcy5vbmUod2ViU2hvcC5pZCkpXHJcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oZW50aXR5ID0+IHJlc29sdmUoZW50aXR5KSlcclxuICAgICAgICAgICAgICAgICAgICAuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZXJyb3JSZXN1bHQ6IEFwaS5WYWxpZGF0aW9uUmVzdWx0ID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb2s6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogZXJyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoZXJyb3JSZXN1bHQpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG5vcm1hbGl6ZSh3ZWJTaG9wOiBBcGkuV2ViU2hvcCk6IEFwaS5XZWJTaG9wIHtcclxuXHJcbiAgICAgICAgaWYgKHdlYlNob3AuZGVsaXZlcnkgJiYgd2ViU2hvcC5kZWxpdmVyeS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgd2ViU2hvcC5kZWxpdmVyeSA9IHdlYlNob3AuZGVsaXZlcnlcclxuICAgICAgICAgICAgICAgIC5tYXAoZCA9PiAoe1xyXG4gICAgICAgICAgICAgICAgICAgIGRlbGl2ZXJ5TWV0aG9kOiBkLmRlbGl2ZXJ5TWV0aG9kLFxyXG4gICAgICAgICAgICAgICAgICAgIHByaWNlOiBwYXJzZUZsb2F0KGAke2QucHJpY2V9YClcclxuICAgICAgICAgICAgICAgIH0pKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB3ZWJTaG9wO1xyXG4gICAgfVxyXG59Il19

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	/// <reference path="../../typings/index.d.ts" />
	"use strict";
	var validation_1 = __webpack_require__(25);
	var WebShopValidator = (function () {
	    function WebShopValidator() {
	    }
	    WebShopValidator.prototype.validate = function (webShop) {
	        if (!webShop)
	            throw new Error("webShop is undefined");
	        var validator = new validation_1.Validator();
	        return validator
	            .property("title")
	            .errorIf(function () { return !webShop.title; }, "Title is required")
	            .errorIf(function () { return webShop.title && webShop.title.length > 1024; }, "Title too long")
	            .end()
	            .property("delivery")
	            .array(webShop.delivery, function (delivery, validator) {
	            validator
	                .property("deliveryMethod")
	                .errorIf(function () { return !delivery.deliveryMethod; }, "Delivery method is required")
	                .errorIf(function () { return delivery.deliveryMethod && delivery.deliveryMethod.length > 1024; }, "Delivery method too long")
	                .end()
	                .property("price")
	                .errorIf(function () { return isNaN(delivery.price) || !delivery.price || delivery.price < 0; }, "Price is required and must be greater than zero")
	                .end();
	        })
	            .end()
	            .result();
	    };
	    return WebShopValidator;
	}());
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = WebShopValidator;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2ViLXNob3AtdmFsaWRhdG9yLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsid2ViLXNob3AtdmFsaWRhdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGlEQUFpRDs7QUFFakQsMkJBQTBCLDZCQUE2QixDQUFDLENBQUE7QUFFeEQ7SUFBQTtJQTRCQSxDQUFDO0lBMUJHLG1DQUFRLEdBQVIsVUFBUyxPQUFvQjtRQUN6QixFQUFFLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQztZQUNULE1BQU0sSUFBSSxLQUFLLENBQUMsc0JBQXNCLENBQUMsQ0FBQztRQUU1QyxJQUFNLFNBQVMsR0FBRyxJQUFJLHNCQUFTLEVBQUUsQ0FBQztRQUVsQyxNQUFNLENBQUMsU0FBUzthQUNYLFFBQVEsQ0FBQyxPQUFPLENBQUM7YUFDYixPQUFPLENBQUMsY0FBTSxPQUFBLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBZCxDQUFjLEVBQUUsbUJBQW1CLENBQUM7YUFDbEQsT0FBTyxDQUFDLGNBQU0sT0FBQSxPQUFPLENBQUMsS0FBSyxJQUFJLE9BQU8sQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLElBQUksRUFBNUMsQ0FBNEMsRUFBRSxnQkFBZ0IsQ0FBQzthQUNqRixHQUFHLEVBQUU7YUFDTCxRQUFRLENBQUMsVUFBVSxDQUFDO2FBQ2hCLEtBQUssQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUN2QixVQUFDLFFBQVEsRUFBRSxTQUFTO1lBQ2hCLFNBQVM7aUJBQ0osUUFBUSxDQUFDLGdCQUFnQixDQUFDO2lCQUN0QixPQUFPLENBQUMsY0FBTSxPQUFBLENBQUMsUUFBUSxDQUFDLGNBQWMsRUFBeEIsQ0FBd0IsRUFBRSw2QkFBNkIsQ0FBQztpQkFDdEUsT0FBTyxDQUFDLGNBQU0sT0FBQSxRQUFRLENBQUMsY0FBYyxJQUFJLFFBQVEsQ0FBQyxjQUFjLENBQUMsTUFBTSxHQUFHLElBQUksRUFBaEUsQ0FBZ0UsRUFBRSwwQkFBMEIsQ0FBQztpQkFDL0csR0FBRyxFQUFFO2lCQUNMLFFBQVEsQ0FBQyxPQUFPLENBQUM7aUJBQ2IsT0FBTyxDQUFDLGNBQU0sT0FBQSxLQUFLLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssSUFBSSxRQUFRLENBQUMsS0FBSyxHQUFHLENBQUMsRUFBOUQsQ0FBOEQsRUFBRSxpREFBaUQsQ0FBQztpQkFDcEksR0FBRyxFQUFFLENBQUM7UUFDZixDQUFDLENBQUM7YUFDTCxHQUFHLEVBQUU7YUFDTCxNQUFNLEVBQUUsQ0FBQztJQUNsQixDQUFDO0lBQ0wsdUJBQUM7QUFBRCxDQUFDLEFBNUJELElBNEJDO0FBNUJEO2tDQTRCQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL3R5cGluZ3MvaW5kZXguZC50c1wiIC8+XHJcblxyXG5pbXBvcnQgeyBWYWxpZGF0b3IgfSBmcm9tIFwiLi4vLi4vdmFsaWRhdGlvbi92YWxpZGF0aW9uXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBXZWJTaG9wVmFsaWRhdG9yIHtcclxuXHJcbiAgICB2YWxpZGF0ZSh3ZWJTaG9wOiBBcGkuV2ViU2hvcCk6IEFwaS5WYWxpZGF0aW9uUmVzdWx0IHtcclxuICAgICAgICBpZiAoIXdlYlNob3ApXHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIndlYlNob3AgaXMgdW5kZWZpbmVkXCIpO1xyXG5cclxuICAgICAgICBjb25zdCB2YWxpZGF0b3IgPSBuZXcgVmFsaWRhdG9yKCk7XHJcblxyXG4gICAgICAgIHJldHVybiB2YWxpZGF0b3JcclxuICAgICAgICAgICAgLnByb3BlcnR5KFwidGl0bGVcIilcclxuICAgICAgICAgICAgICAgIC5lcnJvcklmKCgpID0+ICF3ZWJTaG9wLnRpdGxlLCBcIlRpdGxlIGlzIHJlcXVpcmVkXCIpXHJcbiAgICAgICAgICAgICAgICAuZXJyb3JJZigoKSA9PiB3ZWJTaG9wLnRpdGxlICYmIHdlYlNob3AudGl0bGUubGVuZ3RoID4gMTAyNCwgXCJUaXRsZSB0b28gbG9uZ1wiKVxyXG4gICAgICAgICAgICAuZW5kKClcclxuICAgICAgICAgICAgLnByb3BlcnR5KFwiZGVsaXZlcnlcIilcclxuICAgICAgICAgICAgICAgIC5hcnJheSh3ZWJTaG9wLmRlbGl2ZXJ5LFxyXG4gICAgICAgICAgICAgICAgKGRlbGl2ZXJ5LCB2YWxpZGF0b3IpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB2YWxpZGF0b3JcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnByb3BlcnR5KFwiZGVsaXZlcnlNZXRob2RcIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5lcnJvcklmKCgpID0+ICFkZWxpdmVyeS5kZWxpdmVyeU1ldGhvZCwgXCJEZWxpdmVyeSBtZXRob2QgaXMgcmVxdWlyZWRcIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5lcnJvcklmKCgpID0+IGRlbGl2ZXJ5LmRlbGl2ZXJ5TWV0aG9kICYmIGRlbGl2ZXJ5LmRlbGl2ZXJ5TWV0aG9kLmxlbmd0aCA+IDEwMjQsIFwiRGVsaXZlcnkgbWV0aG9kIHRvbyBsb25nXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5lbmQoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAucHJvcGVydHkoXCJwcmljZVwiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmVycm9ySWYoKCkgPT4gaXNOYU4oZGVsaXZlcnkucHJpY2UpIHx8ICFkZWxpdmVyeS5wcmljZSB8fCBkZWxpdmVyeS5wcmljZSA8IDAsIFwiUHJpY2UgaXMgcmVxdWlyZWQgYW5kIG11c3QgYmUgZ3JlYXRlciB0aGFuIHplcm9cIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmVuZCgpO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmVuZCgpXHJcbiAgICAgICAgICAgIC5yZXN1bHQoKTtcclxuICAgIH1cclxufSJdfQ==

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	/// <reference path="typings/index.d.ts"/>
	"use strict";
	var config_1 = __webpack_require__(7);
	var db_1 = __webpack_require__(10);
	var mongo_web_shop_storage_1 = __webpack_require__(27);
	var web_shop_service_1 = __webpack_require__(28);
	var mongo_product_storage_1 = __webpack_require__(20);
	var product_service_1 = __webpack_require__(21);
	var scrape_service_1 = __webpack_require__(31);
	var scrape_queue_service_1 = __webpack_require__(36);
	var scrape_scheduler_service_1 = __webpack_require__(38);
	var event_bus_1 = __webpack_require__(22);
	var db = new db_1.default();
	var productService = new product_service_1.default(new mongo_product_storage_1.default(db));
	var webShopService = new web_shop_service_1.default(new mongo_web_shop_storage_1.default(db));
	var scrapeService = new scrape_service_1.default(productService, webShopService);
	var queue = new scrape_queue_service_1.default(scrapeService, config_1.default.scrapingThreads, config_1.default.delayBetweenShopScrapingMs);
	var scheduler = new scrape_scheduler_service_1.default(queue, productService, config_1.default.schedules);
	function run() {
	    // Re-run scraping when product data is changed.
	    event_bus_1.eventBus.on(event_bus_1.EventNames.ProductUpdated, function (productId) {
	        queue.enqueuePriore(productId);
	    });
	    if (scheduler.run())
	        console.info("Scrape server running");
	    else
	        console.error("Error running scrape server");
	}
	exports.run = run;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyYXBlLXNlcnZlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNjcmFwZS1zZXJ2ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsMENBQTBDOztBQUUxQyx1QkFBMEIsVUFBVSxDQUFDLENBQUE7QUFFckMsbUJBQXFCLGtCQUFrQixDQUFDLENBQUE7QUFFeEMsdUNBQWdDLDRDQUE0QyxDQUFDLENBQUE7QUFDN0UsaUNBQTJCLHNDQUFzQyxDQUFDLENBQUE7QUFFbEUsc0NBQWdDLDJDQUEyQyxDQUFDLENBQUE7QUFDNUUsZ0NBQTJCLHFDQUFxQyxDQUFDLENBQUE7QUFFakUsK0JBQTBCLG9DQUFvQyxDQUFDLENBQUE7QUFDL0QscUNBQStCLDBDQUEwQyxDQUFDLENBQUE7QUFDMUUseUNBQW1DLDhDQUE4QyxDQUFDLENBQUE7QUFFbEYsMEJBQXFDLHNCQUFzQixDQUFDLENBQUE7QUFFNUQsSUFBTSxFQUFFLEdBQUcsSUFBSSxZQUFRLEVBQUUsQ0FBQztBQUcxQixJQUFNLGNBQWMsR0FBRyxJQUFJLHlCQUFjLENBQUMsSUFBSSwrQkFBbUIsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQ3ZFLElBQU0sY0FBYyxHQUFHLElBQUksMEJBQWMsQ0FBQyxJQUFJLGdDQUFtQixDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFFdkUsSUFBTSxhQUFhLEdBQUcsSUFBSSx3QkFBYSxDQUFDLGNBQWMsRUFBRSxjQUFjLENBQUMsQ0FBQztBQUV4RSxJQUFNLEtBQUssR0FBRyxJQUFJLDhCQUFrQixDQUFDLGFBQWEsRUFBRSxnQkFBYSxDQUFDLGVBQWUsRUFBRSxnQkFBYSxDQUFDLDBCQUEwQixDQUFDLENBQUM7QUFDN0gsSUFBTSxTQUFTLEdBQUcsSUFBSSxrQ0FBc0IsQ0FBQyxLQUFLLEVBQUUsY0FBYyxFQUFFLGdCQUFhLENBQUMsU0FBUyxDQUFDLENBQUM7QUFFN0Y7SUFFSSxnREFBZ0Q7SUFDaEQsb0JBQVEsQ0FBQyxFQUFFLENBQUMsc0JBQVUsQ0FBQyxjQUFjLEVBQUUsVUFBQSxTQUFTO1FBQzVDLEtBQUssQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDbkMsQ0FBQyxDQUFDLENBQUM7SUFHSCxFQUFFLENBQUMsQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFLENBQUM7UUFDaEIsT0FBTyxDQUFDLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO0lBQzFDLElBQUk7UUFDQSxPQUFPLENBQUMsS0FBSyxDQUFDLDZCQUE2QixDQUFDLENBQUM7QUFDckQsQ0FBQztBQVplLFdBQUcsTUFZbEIsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCJ0eXBpbmdzL2luZGV4LmQudHNcIi8+XHJcblxyXG5pbXBvcnQgY29uZmlndXJhdGlvbiBmcm9tIFwiLi9jb25maWdcIjtcclxuXHJcbmltcG9ydCBEYXRhYmFzZSBmcm9tIFwiLi9kYXRhLWFjY2Vzcy9kYlwiO1xyXG5cclxuaW1wb3J0IE1vbmdvV2ViU2hvcFNlcnZpY2UgZnJvbSBcIi4vc2VydmljZXMvd2ViLXNob3AvbW9uZ28td2ViLXNob3Atc3RvcmFnZVwiO1xyXG5pbXBvcnQgV2ViU2hvcFNlcnZpY2UgZnJvbSBcIi4vc2VydmljZXMvd2ViLXNob3Avd2ViLXNob3Atc2VydmljZVwiO1xyXG5cclxuaW1wb3J0IE1vbmdvUHJvZHVjdFN0b3JhZ2UgZnJvbSBcIi4vc2VydmljZXMvcHJvZHVjdHMvbW9uZ28tcHJvZHVjdC1zdG9yYWdlXCI7XHJcbmltcG9ydCBQcm9kdWN0U2VydmljZSBmcm9tIFwiLi9zZXJ2aWNlcy9wcm9kdWN0cy9wcm9kdWN0LXNlcnZpY2VcIjtcclxuXHJcbmltcG9ydCBTY3JhcGVTZXJ2aWNlIGZyb20gXCIuL3NlcnZpY2VzL3NjcmFwaW5nL3NjcmFwZS1zZXJ2aWNlXCI7XHJcbmltcG9ydCBTY3JhcGVRdWV1ZVNlcnZpY2UgZnJvbSBcIi4vc2VydmljZXMvc2NyYXBpbmcvc2NyYXBlLXF1ZXVlLXNlcnZpY2VcIjtcclxuaW1wb3J0IFNjcmFwZVNjaGVkdWxlclNlcnZpY2UgZnJvbSBcIi4vc2VydmljZXMvc2NyYXBpbmcvc2NyYXBlLXNjaGVkdWxlci1zZXJ2aWNlXCI7XHJcblxyXG5pbXBvcnQgeyBldmVudEJ1cywgRXZlbnROYW1lcyB9IGZyb20gXCIuL3NlcnZpY2VzL2V2ZW50LWJ1c1wiO1xyXG5cclxuY29uc3QgZGIgPSBuZXcgRGF0YWJhc2UoKTtcclxuXHJcblxyXG5jb25zdCBwcm9kdWN0U2VydmljZSA9IG5ldyBQcm9kdWN0U2VydmljZShuZXcgTW9uZ29Qcm9kdWN0U3RvcmFnZShkYikpO1xyXG5jb25zdCB3ZWJTaG9wU2VydmljZSA9IG5ldyBXZWJTaG9wU2VydmljZShuZXcgTW9uZ29XZWJTaG9wU2VydmljZShkYikpO1xyXG5cclxuY29uc3Qgc2NyYXBlU2VydmljZSA9IG5ldyBTY3JhcGVTZXJ2aWNlKHByb2R1Y3RTZXJ2aWNlLCB3ZWJTaG9wU2VydmljZSk7XHJcblxyXG5jb25zdCBxdWV1ZSA9IG5ldyBTY3JhcGVRdWV1ZVNlcnZpY2Uoc2NyYXBlU2VydmljZSwgY29uZmlndXJhdGlvbi5zY3JhcGluZ1RocmVhZHMsIGNvbmZpZ3VyYXRpb24uZGVsYXlCZXR3ZWVuU2hvcFNjcmFwaW5nTXMpO1xyXG5jb25zdCBzY2hlZHVsZXIgPSBuZXcgU2NyYXBlU2NoZWR1bGVyU2VydmljZShxdWV1ZSwgcHJvZHVjdFNlcnZpY2UsIGNvbmZpZ3VyYXRpb24uc2NoZWR1bGVzKTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBydW4oKSB7XHJcblxyXG4gICAgLy8gUmUtcnVuIHNjcmFwaW5nIHdoZW4gcHJvZHVjdCBkYXRhIGlzIGNoYW5nZWQuXHJcbiAgICBldmVudEJ1cy5vbihFdmVudE5hbWVzLlByb2R1Y3RVcGRhdGVkLCBwcm9kdWN0SWQgPT4ge1xyXG4gICAgICAgIHF1ZXVlLmVucXVldWVQcmlvcmUocHJvZHVjdElkKTtcclxuICAgIH0pO1xyXG5cclxuXHJcbiAgICBpZiAoc2NoZWR1bGVyLnJ1bigpKVxyXG4gICAgICAgIGNvbnNvbGUuaW5mbyhcIlNjcmFwZSBzZXJ2ZXIgcnVubmluZ1wiKTtcclxuICAgIGVsc2VcclxuICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgcnVubmluZyBzY3JhcGUgc2VydmVyXCIpO1xyXG59Il19

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	/// <reference path="../../typings/index.d.ts" />
	"use strict";
	var jsdom_scraper_1 = __webpack_require__(32);
	var event_bus_1 = __webpack_require__(22);
	var ScrapeService = (function () {
	    function ScrapeService(productService, webShopService) {
	        this.productService = productService;
	        this.webShopService = webShopService;
	        this.scraper = new jsdom_scraper_1.default();
	        if (!productService)
	            throw new Error("productService is undefined");
	        if (!webShopService)
	            throw new Error("webShopService is undefined");
	        this.webShops = this.webShopService
	            .all()
	            .then(function (shops) { return shops.toHash(function (s) { return s.id; }); });
	    }
	    ScrapeService.prototype.scrapeProductData = function (productId) {
	        var _this = this;
	        if (!productId)
	            throw new Error("productId is undefined");
	        return this.webShops.then(function (shops) {
	            return _this.productService.one(productId)
	                .then(function (product) { return Promise.all(_this.scrapeProduct(product, shops))
	                .then(function (results) { return results.toHash(function (e) { return e.webShopId; }, function (e) { return e.scrapingResult; }); }); })
	                .then(function (r) {
	                event_bus_1.eventBus.emit(event_bus_1.EventNames.ProductScraped, productId);
	                return r;
	            });
	        });
	    };
	    ScrapeService.prototype.scrapeProduct = function (product, shops) {
	        var _this = this;
	        return Object.keys(product.scrapingUrls)
	            .map(function (webShopId) { return _this.scrapeProductFromShopAndSave(product, webShopId, shops)
	            .then(function (productScrapeResult) { return ({
	            webShopId: webShopId,
	            scrapingResult: productScrapeResult
	        }); }); });
	    };
	    ScrapeService.prototype.scrapeProductFromShopAndSave = function (product, webShopId, shops) {
	        var _this = this;
	        return this.scraper
	            .scrape(product.scrapingUrls[webShopId], shops[webShopId].scrapingSettings)
	            .then(function (result) { return _this.productService
	            .updateScrapedData(product.id, webShopId, result)
	            .then(function () { return result; }); });
	    };
	    return ScrapeService;
	}());
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = ScrapeService;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyYXBlLXNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzY3JhcGUtc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxpREFBaUQ7O0FBS2pELDhCQUF5Qiw4QkFBOEIsQ0FBQyxDQUFBO0FBRXhELDBCQUFxQyxjQUFjLENBQUMsQ0FBQTtBQU1wRDtJQUlJLHVCQUFvQixjQUE4QixFQUM5QixjQUE4QjtRQUQ5QixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDOUIsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBSjFDLFlBQU8sR0FBRyxJQUFJLHVCQUFZLEVBQUUsQ0FBQztRQUtqQyxFQUFFLENBQUMsQ0FBQyxDQUFDLGNBQWMsQ0FBQztZQUNoQixNQUFNLElBQUksS0FBSyxDQUFDLDZCQUE2QixDQUFDLENBQUM7UUFDbkQsRUFBRSxDQUFDLENBQUMsQ0FBQyxjQUFjLENBQUM7WUFDaEIsTUFBTSxJQUFJLEtBQUssQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDO1FBRW5ELElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLGNBQWM7YUFDOUIsR0FBRyxFQUFFO2FBQ0wsSUFBSSxDQUFDLFVBQUEsS0FBSyxJQUFJLE9BQUEsS0FBSyxDQUFDLE1BQU0sQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsQ0FBQyxFQUFFLEVBQUosQ0FBSSxDQUFDLEVBQXZCLENBQXVCLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBRUQseUNBQWlCLEdBQWpCLFVBQWtCLFNBQWlCO1FBQW5DLGlCQWNDO1FBYkcsRUFBRSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7WUFDWCxNQUFNLElBQUksS0FBSyxDQUFDLHdCQUF3QixDQUFDLENBQUM7UUFFOUMsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFVBQUEsS0FBSztZQUMzQixNQUFNLENBQUMsS0FBSSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDO2lCQUNwQyxJQUFJLENBQUMsVUFBQSxPQUFPLElBQUksT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFDO2lCQUMzRCxJQUFJLENBQUMsVUFBQSxPQUFPLElBQUksT0FBQSxPQUFPLENBQUMsTUFBTSxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxDQUFDLFNBQVMsRUFBWCxDQUFXLEVBQUUsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLENBQUMsY0FBYyxFQUFoQixDQUFnQixDQUFDLEVBQXZELENBQXVELENBQUMsRUFENUQsQ0FDNEQsQ0FBQztpQkFDN0UsSUFBSSxDQUFDLFVBQUEsQ0FBQztnQkFDSCxvQkFBUSxDQUFDLElBQUksQ0FBQyxzQkFBVSxDQUFDLGNBQWMsRUFBRSxTQUFTLENBQUMsQ0FBQztnQkFFcEQsTUFBTSxDQUFDLENBQUMsQ0FBQztZQUNiLENBQUMsQ0FBQyxDQUFDO1FBQ1gsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRU8scUNBQWEsR0FBckIsVUFBc0IsT0FBb0IsRUFBRSxLQUFrQjtRQUE5RCxpQkFRQztRQU5HLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUM7YUFDbkMsR0FBRyxDQUFDLFVBQUEsU0FBUyxJQUFJLE9BQUEsS0FBSSxDQUFDLDRCQUE0QixDQUFDLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxDQUFDO2FBQ3pFLElBQUksQ0FBQyxVQUFBLG1CQUFtQixJQUFJLE9BQUEsQ0FBQztZQUMxQixTQUFTLEVBQUUsU0FBUztZQUNwQixjQUFjLEVBQUUsbUJBQW1CO1NBQ3RDLENBQUMsRUFIMkIsQ0FHM0IsQ0FBQyxFQUpXLENBSVgsQ0FBQyxDQUFDO0lBQ2pCLENBQUM7SUFFTyxvREFBNEIsR0FBcEMsVUFBcUMsT0FBb0IsRUFBRSxTQUFpQixFQUFFLEtBQWtCO1FBQWhHLGlCQU1DO1FBTEcsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPO2FBQ2QsTUFBTSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLEVBQUUsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDLGdCQUFnQixDQUFDO2FBQzFFLElBQUksQ0FBQyxVQUFBLE1BQU0sSUFBSSxPQUFBLEtBQUksQ0FBQyxjQUFjO2FBQzlCLGlCQUFpQixDQUFDLE9BQU8sQ0FBQyxFQUFFLEVBQUUsU0FBUyxFQUFFLE1BQU0sQ0FBQzthQUNoRCxJQUFJLENBQUMsY0FBTSxPQUFBLE1BQU0sRUFBTixDQUFNLENBQUMsRUFGUCxDQUVPLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBQ0wsb0JBQUM7QUFBRCxDQUFDLEFBakRELElBaURDO0FBakREOytCQWlEQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL3R5cGluZ3MvaW5kZXguZC50c1wiIC8+XHJcblxyXG5pbXBvcnQgUHJvZHVjdFNlcnZpY2UgZnJvbSBcIi4uL3Byb2R1Y3RzL3Byb2R1Y3Qtc2VydmljZVwiO1xyXG5pbXBvcnQgV2ViU2hvcFNlcnZpY2UgZnJvbSBcIi4uL3dlYi1zaG9wL3dlYi1zaG9wLXNlcnZpY2VcIjtcclxuXHJcbmltcG9ydCBKc2RvbVNjcmFwZXIgZnJvbSBcIi4uLy4uL3NjcmFwZXJzL2pzZG9tLXNjcmFwZXJcIjtcclxuXHJcbmltcG9ydCB7IGV2ZW50QnVzLCBFdmVudE5hbWVzIH0gZnJvbSBcIi4uL2V2ZW50LWJ1c1wiO1xyXG5cclxuaW50ZXJmYWNlIFdlYlNob3BIYXNoIHtcclxuICAgIFt3ZWJTaG9wSWQ6IHN0cmluZ106IEFwaS5XZWJTaG9wO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTY3JhcGVTZXJ2aWNlIGltcGxlbWVudHMgU2NyYXBpbmcuSVNjcmFwZVNlcnZpY2Uge1xyXG4gICAgcHJpdmF0ZSBzY3JhcGVyID0gbmV3IEpzZG9tU2NyYXBlcigpO1xyXG4gICAgcHJpdmF0ZSB3ZWJTaG9wczogUHJvbWlzZTxXZWJTaG9wSGFzaD47XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBwcm9kdWN0U2VydmljZTogUHJvZHVjdFNlcnZpY2UsXHJcbiAgICAgICAgICAgICAgICBwcml2YXRlIHdlYlNob3BTZXJ2aWNlOiBXZWJTaG9wU2VydmljZSkge1xyXG4gICAgICAgIGlmICghcHJvZHVjdFNlcnZpY2UpXHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcInByb2R1Y3RTZXJ2aWNlIGlzIHVuZGVmaW5lZFwiKTtcclxuICAgICAgICBpZiAoIXdlYlNob3BTZXJ2aWNlKVxyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJ3ZWJTaG9wU2VydmljZSBpcyB1bmRlZmluZWRcIik7XHJcblxyXG4gICAgICAgIHRoaXMud2ViU2hvcHMgPSB0aGlzLndlYlNob3BTZXJ2aWNlXHJcbiAgICAgICAgICAgIC5hbGwoKVxyXG4gICAgICAgICAgICAudGhlbihzaG9wcyA9PiBzaG9wcy50b0hhc2gocyA9PiBzLmlkKSk7XHJcbiAgICB9XHJcblxyXG4gICAgc2NyYXBlUHJvZHVjdERhdGEocHJvZHVjdElkOiBzdHJpbmcpOiBQcm9taXNlPFNjcmFwaW5nLlByb2R1Y3RTY3JhcGVSZXN1bHQ+IHtcclxuICAgICAgICBpZiAoIXByb2R1Y3RJZClcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwicHJvZHVjdElkIGlzIHVuZGVmaW5lZFwiKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMud2ViU2hvcHMudGhlbihzaG9wcyA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnByb2R1Y3RTZXJ2aWNlLm9uZShwcm9kdWN0SWQpXHJcbiAgICAgICAgICAgICAgICAudGhlbihwcm9kdWN0ID0+IFByb21pc2UuYWxsKHRoaXMuc2NyYXBlUHJvZHVjdChwcm9kdWN0LCBzaG9wcykpXHJcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4ocmVzdWx0cyA9PiByZXN1bHRzLnRvSGFzaChlID0+IGUud2ViU2hvcElkLCBlID0+IGUuc2NyYXBpbmdSZXN1bHQpKSlcclxuICAgICAgICAgICAgICAgIC50aGVuKHIgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGV2ZW50QnVzLmVtaXQoRXZlbnROYW1lcy5Qcm9kdWN0U2NyYXBlZCwgcHJvZHVjdElkKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHI7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHNjcmFwZVByb2R1Y3QocHJvZHVjdDogQXBpLlByb2R1Y3QsIHNob3BzOiBXZWJTaG9wSGFzaCk6IFByb21pc2U8eyB3ZWJTaG9wSWQ6IHN0cmluZzsgc2NyYXBpbmdSZXN1bHQ6IFNjcmFwaW5nLldlYlNob3BTY3JhcGluZ1Jlc3VsdDsgfT5bXSB7XHJcblxyXG4gICAgICAgIHJldHVybiBPYmplY3Qua2V5cyhwcm9kdWN0LnNjcmFwaW5nVXJscylcclxuICAgICAgICAgICAgLm1hcCh3ZWJTaG9wSWQgPT4gdGhpcy5zY3JhcGVQcm9kdWN0RnJvbVNob3BBbmRTYXZlKHByb2R1Y3QsIHdlYlNob3BJZCwgc2hvcHMpXHJcbiAgICAgICAgICAgICAgICAudGhlbihwcm9kdWN0U2NyYXBlUmVzdWx0ID0+ICh7XHJcbiAgICAgICAgICAgICAgICAgICAgd2ViU2hvcElkOiB3ZWJTaG9wSWQsXHJcbiAgICAgICAgICAgICAgICAgICAgc2NyYXBpbmdSZXN1bHQ6IHByb2R1Y3RTY3JhcGVSZXN1bHRcclxuICAgICAgICAgICAgICAgIH0pKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzY3JhcGVQcm9kdWN0RnJvbVNob3BBbmRTYXZlKHByb2R1Y3Q6IEFwaS5Qcm9kdWN0LCB3ZWJTaG9wSWQ6IHN0cmluZywgc2hvcHM6IFdlYlNob3BIYXNoKTogUHJvbWlzZTxTY3JhcGluZy5XZWJTaG9wU2NyYXBpbmdSZXN1bHQ+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zY3JhcGVyXHJcbiAgICAgICAgICAgIC5zY3JhcGUocHJvZHVjdC5zY3JhcGluZ1VybHNbd2ViU2hvcElkXSwgc2hvcHNbd2ViU2hvcElkXS5zY3JhcGluZ1NldHRpbmdzKVxyXG4gICAgICAgICAgICAudGhlbihyZXN1bHQgPT4gdGhpcy5wcm9kdWN0U2VydmljZVxyXG4gICAgICAgICAgICAgICAgLnVwZGF0ZVNjcmFwZWREYXRhKHByb2R1Y3QuaWQsIHdlYlNob3BJZCwgcmVzdWx0KVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oKCkgPT4gcmVzdWx0KSk7XHJcbiAgICB9XHJcbn0iXX0=

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	/// <reference path="../typings/index.d.ts" />
	"use strict";
	var jsdom = __webpack_require__(33);
	var value_parser_1 = __webpack_require__(34);
	var JsdomScraper = (function () {
	    function JsdomScraper() {
	        this.valueParser = new value_parser_1.default();
	    }
	    JsdomScraper.prototype.scrape = function (url, values) {
	        var _this = this;
	        if (!url)
	            throw new Error("url is undefined");
	        if (!values)
	            throw new Error("values is undefined.");
	        if (!Object.keys(values).length)
	            throw new Error("No values to extract");
	        var result = {
	            isSuccessful: false,
	            error: null,
	            values: {}
	        };
	        // "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/50.0.2661.102 Safari/537.36"
	        return new Promise(function (resolve) {
	            jsdom.env({
	                url: url,
	                userAgent: "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/50.0.2661.102 Safari/537.36",
	                features: {
	                    FetchExternalResources: false,
	                    ProcessExternalResources: false
	                },
	                done: function (err, window) {
	                    if (err && err.length) {
	                        result.isSuccessful = false;
	                        result.error = err;
	                        resolve(result);
	                        return;
	                    }
	                    else {
	                        Object.keys(values)
	                            .forEach(function (valueName) {
	                            var settings = values[valueName];
	                            result.values[valueName] = _this.scrapeValue(window.document, settings);
	                        });
	                        result.isSuccessful = Object.keys(result.values)
	                            .map(function (valueName) { return result.values[valueName]; })
	                            .every(function (v) { return v.isSuccessful; });
	                        resolve(result);
	                    }
	                }
	            });
	        });
	    };
	    JsdomScraper.prototype.scrapeValue = function (document, valueScrapingSettings) {
	        if (!document)
	            throw new Error("document is undefined");
	        if (!valueScrapingSettings)
	            throw new Error("valueScrapingSettings is undefined");
	        var parsingContext = {
	            location: document.location
	        };
	        var result = this.emptyValueScrapingResult();
	        for (var _i = 0, valueScrapingSettings_1 = valueScrapingSettings; _i < valueScrapingSettings_1.length; _i++) {
	            var scrapingSetting = valueScrapingSettings_1[_i];
	            try {
	                var rawValue = this.extractRawValueFromDocument(document, scrapingSetting);
	                var parsedValue = this.valueParser[scrapingSetting.type](rawValue, parsingContext);
	                result.isSuccessful = true;
	                result.error = null;
	                result.settings = scrapingSetting;
	                result.value = parsedValue;
	                return result;
	            }
	            catch (error) {
	                result.isSuccessful = false;
	                result.error = error;
	                result.settings = scrapingSetting;
	                if (scrapingSetting.failOnError)
	                    return result;
	            }
	        }
	        return result;
	    };
	    JsdomScraper.prototype.extractRawValueFromDocument = function (document, valueScrapingSetting) {
	        var extractMethod = valueScrapingSetting.extract || "queryselector";
	        switch (extractMethod) {
	            case "queryselector":
	                {
	                    var querySelectorSettings = valueScrapingSetting;
	                    if (!querySelectorSettings.elementSelector)
	                        throw new Error("elementSelector is missing");
	                    var elements = document.querySelectorAll(querySelectorSettings.elementSelector);
	                    if (elements.length === 0)
	                        throw new Error("Element with selector " + querySelectorSettings.elementSelector + " is missing");
	                    if (elements.length > 1)
	                        throw new Error("There are more than one element with selector " + querySelectorSettings.elementSelector);
	                    if (querySelectorSettings.attribute)
	                        return elements[0].getAttribute(querySelectorSettings.attribute);
	                    else
	                        return elements[0].textContent;
	                }
	                ;
	            case "regex":
	                {
	                    var regexSettings = valueScrapingSetting;
	                    if (!regexSettings.regex)
	                        throw new Error("regex missing");
	                    var text = document.querySelector("html").innerHTML;
	                    var regex = new RegExp(regexSettings.regex, "gmi");
	                    var matches = regex.exec(text);
	                    if (!matches.length)
	                        throw new Error("No value matches");
	                    return matches[1];
	                }
	                ;
	            default:
	                throw new Error("Unknown extract method");
	        }
	    };
	    JsdomScraper.prototype.emptyValueScrapingResult = function () {
	        return {
	            value: null,
	            isSuccessful: true,
	            error: null,
	            settings: null
	        };
	    };
	    return JsdomScraper;
	}());
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = JsdomScraper;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianNkb20tc2NyYXBlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImpzZG9tLXNjcmFwZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsOENBQThDOztBQUU5QyxJQUFZLEtBQUssV0FBTSxPQUFPLENBQUMsQ0FBQTtBQUMvQiw2QkFBNEIsZ0JBQWdCLENBQUMsQ0FBQTtBQUU3QztJQUFBO1FBQ1ksZ0JBQVcsR0FBRyxJQUFJLHNCQUFlLEVBQUUsQ0FBQztJQXlJaEQsQ0FBQztJQXZJRyw2QkFBTSxHQUFOLFVBQU8sR0FBVyxFQUFFLE1BQTRCO1FBQWhELGlCQThDQztRQTdDRyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQztZQUNMLE1BQU0sSUFBSSxLQUFLLENBQUMsa0JBQWtCLENBQUMsQ0FBQztRQUN4QyxFQUFFLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQztZQUNSLE1BQU0sSUFBSSxLQUFLLENBQUMsc0JBQXNCLENBQUMsQ0FBQztRQUM1QyxFQUFFLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsTUFBTSxDQUFDO1lBQzVCLE1BQU0sSUFBSSxLQUFLLENBQUMsc0JBQXNCLENBQUMsQ0FBQztRQUU1QyxJQUFNLE1BQU0sR0FBbUM7WUFDM0MsWUFBWSxFQUFFLEtBQUs7WUFDbkIsS0FBSyxFQUFFLElBQUk7WUFDWCxNQUFNLEVBQUUsRUFBRTtTQUNiLENBQUM7UUFDRixtSEFBbUg7UUFDbkgsTUFBTSxDQUFDLElBQUksT0FBTyxDQUFDLFVBQUEsT0FBTztZQUN0QixLQUFLLENBQUMsR0FBRyxDQUFDO2dCQUNOLEdBQUcsRUFBRSxHQUFHO2dCQUNSLFNBQVMsRUFBRSxnSEFBZ0g7Z0JBQzNILFFBQVEsRUFBRTtvQkFDTixzQkFBc0IsRUFBRSxLQUFLO29CQUM3Qix3QkFBd0IsRUFBRSxLQUFLO2lCQUNsQztnQkFDRCxJQUFJLEVBQUUsVUFBQyxHQUFHLEVBQUUsTUFBTTtvQkFDZCxFQUFFLENBQUMsQ0FBQyxHQUFHLElBQUksR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7d0JBQ3BCLE1BQU0sQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO3dCQUM1QixNQUFNLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQzt3QkFFbkIsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO3dCQUVoQixNQUFNLENBQUM7b0JBQ1gsQ0FBQztvQkFBQyxJQUFJLENBQUMsQ0FBQzt3QkFDSixNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQzs2QkFDZCxPQUFPLENBQUMsVUFBQSxTQUFTOzRCQUNkLElBQU0sUUFBUSxHQUFHLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQzs0QkFDbkMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsR0FBRyxLQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDLENBQUM7d0JBQzNFLENBQUMsQ0FBQyxDQUFDO3dCQUVQLE1BQU0sQ0FBQyxZQUFZLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDOzZCQUMzQyxHQUFHLENBQUMsVUFBQSxTQUFTLElBQUksT0FBQSxNQUFNLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxFQUF4QixDQUF3QixDQUFDOzZCQUMxQyxLQUFLLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLENBQUMsWUFBWSxFQUFkLENBQWMsQ0FBQyxDQUFDO3dCQUVoQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7b0JBQ3BCLENBQUM7Z0JBQ0wsQ0FBQzthQUNKLENBQUMsQ0FBQztRQUNQLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVPLGtDQUFXLEdBQW5CLFVBQW9CLFFBQWtCLEVBQUUscUJBQWtEO1FBQ3RGLEVBQUUsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDO1lBQ1YsTUFBTSxJQUFJLEtBQUssQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO1FBQzdDLEVBQUUsQ0FBQyxDQUFDLENBQUMscUJBQXFCLENBQUM7WUFDdkIsTUFBTSxJQUFJLEtBQUssQ0FBQyxvQ0FBb0MsQ0FBQyxDQUFDO1FBRTFELElBQU0sY0FBYyxHQUEyQjtZQUMzQyxRQUFRLEVBQUUsUUFBUSxDQUFDLFFBQVE7U0FDOUIsQ0FBQztRQUVGLElBQU0sTUFBTSxHQUFHLElBQUksQ0FBQyx3QkFBd0IsRUFBRSxDQUFDO1FBRS9DLEdBQUcsQ0FBQyxDQUF3QixVQUFxQixFQUFyQiwrQ0FBcUIsRUFBckIsbUNBQXFCLEVBQXJCLElBQXFCLENBQUM7WUFBN0MsSUFBSSxlQUFlLDhCQUFBO1lBQ3BCLElBQUksQ0FBQztnQkFDRCxJQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsMkJBQTJCLENBQUMsUUFBUSxFQUFFLGVBQWUsQ0FBQyxDQUFDO2dCQUM3RSxJQUFNLFdBQVcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxRQUFRLEVBQUUsY0FBYyxDQUFDLENBQUM7Z0JBRXJGLE1BQU0sQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO2dCQUMzQixNQUFNLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztnQkFDcEIsTUFBTSxDQUFDLFFBQVEsR0FBRyxlQUFlLENBQUM7Z0JBQ2xDLE1BQU0sQ0FBQyxLQUFLLEdBQUcsV0FBVyxDQUFDO2dCQUUzQixNQUFNLENBQUMsTUFBTSxDQUFDO1lBQ2xCLENBQUU7WUFBQSxLQUFLLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO2dCQUNiLE1BQU0sQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO2dCQUM1QixNQUFNLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztnQkFDckIsTUFBTSxDQUFDLFFBQVEsR0FBRyxlQUFlLENBQUM7Z0JBRWxDLEVBQUUsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxXQUFXLENBQUM7b0JBQzVCLE1BQU0sQ0FBQyxNQUFNLENBQUM7WUFDdEIsQ0FBQztTQUNKO1FBRUQsTUFBTSxDQUFDLE1BQU0sQ0FBQztJQUNsQixDQUFDO0lBRU8sa0RBQTJCLEdBQW5DLFVBQW9DLFFBQWtCLEVBQUUsb0JBQStDO1FBQ25HLElBQU0sYUFBYSxHQUFHLG9CQUFvQixDQUFDLE9BQU8sSUFBSSxlQUFlLENBQUM7UUFFdEUsTUFBTSxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztZQUNwQixLQUFLLGVBQWU7Z0JBQ2hCLENBQUM7b0JBQ0csSUFBTSxxQkFBcUIsR0FBRyxvQkFBd0QsQ0FBQztvQkFFdkYsRUFBRSxDQUFDLENBQUMsQ0FBQyxxQkFBcUIsQ0FBQyxlQUFlLENBQUM7d0JBQ3ZDLE1BQU0sSUFBSSxLQUFLLENBQUMsNEJBQTRCLENBQUMsQ0FBQztvQkFFbEQsSUFBTSxRQUFRLEdBQUcsUUFBUSxDQUFDLGdCQUFnQixDQUFDLHFCQUFxQixDQUFDLGVBQWUsQ0FBQyxDQUFDO29CQUNsRixFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQzt3QkFDdEIsTUFBTSxJQUFJLEtBQUssQ0FBQywyQkFBeUIscUJBQXFCLENBQUMsZUFBZSxnQkFBYSxDQUFDLENBQUM7b0JBQ2pHLEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO3dCQUNwQixNQUFNLElBQUksS0FBSyxDQUFDLG1EQUFpRCxxQkFBcUIsQ0FBQyxlQUFpQixDQUFDLENBQUM7b0JBRTlHLEVBQUUsQ0FBQyxDQUFDLHFCQUFxQixDQUFDLFNBQVMsQ0FBQzt3QkFDaEMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMscUJBQXFCLENBQUMsU0FBUyxDQUFDLENBQUM7b0JBQ3JFLElBQUk7d0JBQ0EsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUM7Z0JBQ3ZDLENBQUM7Z0JBQUEsQ0FBQztZQUNOLEtBQUssT0FBTztnQkFDUixDQUFDO29CQUNHLElBQU0sYUFBYSxHQUFHLG9CQUFnRCxDQUFDO29CQUN2RSxFQUFFLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUM7d0JBQ3JCLE1BQU0sSUFBSSxLQUFLLENBQUMsZUFBZSxDQUFDLENBQUM7b0JBRXJDLElBQU0sSUFBSSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUMsU0FBUyxDQUFDO29CQUV0RCxJQUFNLEtBQUssR0FBRyxJQUFJLE1BQU0sQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDO29CQUVyRCxJQUFNLE9BQU8sR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO29CQUNqQyxFQUFFLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUM7d0JBQ2hCLE1BQU0sSUFBSSxLQUFLLENBQUMsa0JBQWtCLENBQUMsQ0FBQztvQkFFeEMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDdEIsQ0FBQztnQkFBQSxDQUFDO1lBQ047Z0JBQ0ksTUFBTSxJQUFJLEtBQUssQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO1FBQ2xELENBQUM7SUFDTCxDQUFDO0lBRU8sK0NBQXdCLEdBQWhDO1FBQ0ksTUFBTSxDQUFDO1lBQ0gsS0FBSyxFQUFFLElBQUk7WUFDWCxZQUFZLEVBQUUsSUFBSTtZQUNsQixLQUFLLEVBQUUsSUFBSTtZQUNYLFFBQVEsRUFBRSxJQUFJO1NBQ2pCLENBQUM7SUFDTixDQUFDO0lBQ0wsbUJBQUM7QUFBRCxDQUFDLEFBMUlELElBMElDO0FBMUlEOzhCQTBJQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL3R5cGluZ3MvaW5kZXguZC50c1wiIC8+XHJcblxyXG5pbXBvcnQgKiBhcyBqc2RvbSBmcm9tIFwianNkb21cIjtcclxuaW1wb3J0IFZhbHVlUGFyc2VySGFzaCBmcm9tIFwiLi92YWx1ZS1wYXJzZXJcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEpzZG9tU2NyYXBlciBpbXBsZW1lbnRzIFNjcmFwaW5nLklTY3JhcGVyIHtcclxuICAgIHByaXZhdGUgdmFsdWVQYXJzZXIgPSBuZXcgVmFsdWVQYXJzZXJIYXNoKCk7XHJcblxyXG4gICAgc2NyYXBlKHVybDogc3RyaW5nLCB2YWx1ZXM6IEFwaS5TY3JhcGluZ1NldHRpbmdzKTogUHJvbWlzZTxTY3JhcGluZy5XZWJTaG9wU2NyYXBpbmdSZXN1bHQ+IHtcclxuICAgICAgICBpZiAoIXVybClcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwidXJsIGlzIHVuZGVmaW5lZFwiKTtcclxuICAgICAgICBpZiAoIXZhbHVlcylcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwidmFsdWVzIGlzIHVuZGVmaW5lZC5cIik7XHJcbiAgICAgICAgaWYgKCFPYmplY3Qua2V5cyh2YWx1ZXMpLmxlbmd0aClcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTm8gdmFsdWVzIHRvIGV4dHJhY3RcIik7XHJcblxyXG4gICAgICAgIGNvbnN0IHJlc3VsdDogU2NyYXBpbmcuV2ViU2hvcFNjcmFwaW5nUmVzdWx0ID0ge1xyXG4gICAgICAgICAgICBpc1N1Y2Nlc3NmdWw6IGZhbHNlLFxyXG4gICAgICAgICAgICBlcnJvcjogbnVsbCxcclxuICAgICAgICAgICAgdmFsdWVzOiB7fVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgLy8gXCJNb3ppbGxhLzUuMCAoV2luZG93cyBOVCAxMC4wOyBXT1c2NCkgQXBwbGVXZWJLaXQvNTM3LjM2IChLSFRNTCwgbGlrZSBHZWNrbykgQ2hyb21lLzUwLjAuMjY2MS4xMDIgU2FmYXJpLzUzNy4zNlwiXHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xyXG4gICAgICAgICAgICBqc2RvbS5lbnYoe1xyXG4gICAgICAgICAgICAgICAgdXJsOiB1cmwsXHJcbiAgICAgICAgICAgICAgICB1c2VyQWdlbnQ6IFwiTW96aWxsYS81LjAgKFdpbmRvd3MgTlQgMTAuMDsgV09XNjQpIEFwcGxlV2ViS2l0LzUzNy4zNiAoS0hUTUwsIGxpa2UgR2Vja28pIENocm9tZS81MC4wLjI2NjEuMTAyIFNhZmFyaS81MzcuMzZcIixcclxuICAgICAgICAgICAgICAgIGZlYXR1cmVzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgRmV0Y2hFeHRlcm5hbFJlc291cmNlczogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgUHJvY2Vzc0V4dGVybmFsUmVzb3VyY2VzOiBmYWxzZVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGRvbmU6IChlcnIsIHdpbmRvdykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChlcnIgJiYgZXJyLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQuaXNTdWNjZXNzZnVsID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdC5lcnJvciA9IGVycjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVzdWx0KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBPYmplY3Qua2V5cyh2YWx1ZXMpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZm9yRWFjaCh2YWx1ZU5hbWUgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHNldHRpbmdzID0gdmFsdWVzW3ZhbHVlTmFtZV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0LnZhbHVlc1t2YWx1ZU5hbWVdID0gdGhpcy5zY3JhcGVWYWx1ZSh3aW5kb3cuZG9jdW1lbnQsIHNldHRpbmdzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0LmlzU3VjY2Vzc2Z1bCA9IE9iamVjdC5rZXlzKHJlc3VsdC52YWx1ZXMpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAubWFwKHZhbHVlTmFtZSA9PiByZXN1bHQudmFsdWVzW3ZhbHVlTmFtZV0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZXZlcnkodiA9PiB2LmlzU3VjY2Vzc2Z1bCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3VsdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHNjcmFwZVZhbHVlKGRvY3VtZW50OiBEb2N1bWVudCwgdmFsdWVTY3JhcGluZ1NldHRpbmdzOiBBcGkuVmFsdWVTY3JhcGluZ1NldHRpbmdzW10pOiBTY3JhcGluZy5WYWx1ZVNjcmFwaW5nUmVzdWx0IHtcclxuICAgICAgICBpZiAoIWRvY3VtZW50KVxyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJkb2N1bWVudCBpcyB1bmRlZmluZWRcIik7XHJcbiAgICAgICAgaWYgKCF2YWx1ZVNjcmFwaW5nU2V0dGluZ3MpXHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcInZhbHVlU2NyYXBpbmdTZXR0aW5ncyBpcyB1bmRlZmluZWRcIik7XHJcblxyXG4gICAgICAgIGNvbnN0IHBhcnNpbmdDb250ZXh0OiBTY3JhcGluZy5QYXJzZXJDb250ZXh0ID0ge1xyXG4gICAgICAgICAgICBsb2NhdGlvbjogZG9jdW1lbnQubG9jYXRpb25cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBjb25zdCByZXN1bHQgPSB0aGlzLmVtcHR5VmFsdWVTY3JhcGluZ1Jlc3VsdCgpO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBzY3JhcGluZ1NldHRpbmcgb2YgdmFsdWVTY3JhcGluZ1NldHRpbmdzKSB7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCByYXdWYWx1ZSA9IHRoaXMuZXh0cmFjdFJhd1ZhbHVlRnJvbURvY3VtZW50KGRvY3VtZW50LCBzY3JhcGluZ1NldHRpbmcpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcGFyc2VkVmFsdWUgPSB0aGlzLnZhbHVlUGFyc2VyW3NjcmFwaW5nU2V0dGluZy50eXBlXShyYXdWYWx1ZSwgcGFyc2luZ0NvbnRleHQpO1xyXG5cclxuICAgICAgICAgICAgICAgIHJlc3VsdC5pc1N1Y2Nlc3NmdWwgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0LmVycm9yID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIHJlc3VsdC5zZXR0aW5ncyA9IHNjcmFwaW5nU2V0dGluZztcclxuICAgICAgICAgICAgICAgIHJlc3VsdC52YWx1ZSA9IHBhcnNlZFZhbHVlO1xyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICByZXN1bHQuaXNTdWNjZXNzZnVsID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICByZXN1bHQuZXJyb3IgPSBlcnJvcjtcclxuICAgICAgICAgICAgICAgIHJlc3VsdC5zZXR0aW5ncyA9IHNjcmFwaW5nU2V0dGluZztcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoc2NyYXBpbmdTZXR0aW5nLmZhaWxPbkVycm9yKVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBleHRyYWN0UmF3VmFsdWVGcm9tRG9jdW1lbnQoZG9jdW1lbnQ6IERvY3VtZW50LCB2YWx1ZVNjcmFwaW5nU2V0dGluZzogQXBpLlZhbHVlU2NyYXBpbmdTZXR0aW5ncyk6IHN0cmluZyB7XHJcbiAgICAgICAgY29uc3QgZXh0cmFjdE1ldGhvZCA9IHZhbHVlU2NyYXBpbmdTZXR0aW5nLmV4dHJhY3QgfHwgXCJxdWVyeXNlbGVjdG9yXCI7XHJcblxyXG4gICAgICAgIHN3aXRjaCAoZXh0cmFjdE1ldGhvZCkge1xyXG4gICAgICAgICAgICBjYXNlIFwicXVlcnlzZWxlY3RvclwiOlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHF1ZXJ5U2VsZWN0b3JTZXR0aW5ncyA9IHZhbHVlU2NyYXBpbmdTZXR0aW5nIGFzIEFwaS5RdWVyeVNlbGVjdG9yRXh0cmFjdFNldHRpbmdzO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoIXF1ZXJ5U2VsZWN0b3JTZXR0aW5ncy5lbGVtZW50U2VsZWN0b3IpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgZWxlbWVudFNlbGVjdG9yIGlzIG1pc3NpbmdgKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHF1ZXJ5U2VsZWN0b3JTZXR0aW5ncy5lbGVtZW50U2VsZWN0b3IpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChlbGVtZW50cy5sZW5ndGggPT09IDApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRWxlbWVudCB3aXRoIHNlbGVjdG9yICR7cXVlcnlTZWxlY3RvclNldHRpbmdzLmVsZW1lbnRTZWxlY3Rvcn0gaXMgbWlzc2luZ2ApO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChlbGVtZW50cy5sZW5ndGggPiAxKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZXJlIGFyZSBtb3JlIHRoYW4gb25lIGVsZW1lbnQgd2l0aCBzZWxlY3RvciAke3F1ZXJ5U2VsZWN0b3JTZXR0aW5ncy5lbGVtZW50U2VsZWN0b3J9YCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChxdWVyeVNlbGVjdG9yU2V0dGluZ3MuYXR0cmlidXRlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZWxlbWVudHNbMF0uZ2V0QXR0cmlidXRlKHF1ZXJ5U2VsZWN0b3JTZXR0aW5ncy5hdHRyaWJ1dGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnRzWzBdLnRleHRDb250ZW50O1xyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgY2FzZSBcInJlZ2V4XCI6XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVnZXhTZXR0aW5ncyA9IHZhbHVlU2NyYXBpbmdTZXR0aW5nIGFzIEFwaS5SZWdleEV4dHJhY3RTZXR0aW5ncztcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIXJlZ2V4U2V0dGluZ3MucmVnZXgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcInJlZ2V4IG1pc3NpbmdcIik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRleHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaHRtbFwiKS5pbm5lckhUTUw7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlZ2V4ID0gbmV3IFJlZ0V4cChyZWdleFNldHRpbmdzLnJlZ2V4LCBcImdtaVwiKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbWF0Y2hlcyA9IHJlZ2V4LmV4ZWModGV4dCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFtYXRjaGVzLmxlbmd0aClcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTm8gdmFsdWUgbWF0Y2hlc1wiKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG1hdGNoZXNbMV07XHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVW5rbm93biBleHRyYWN0IG1ldGhvZFwiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBlbXB0eVZhbHVlU2NyYXBpbmdSZXN1bHQoKTogU2NyYXBpbmcuVmFsdWVTY3JhcGluZ1Jlc3VsdCB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgdmFsdWU6IG51bGwsXHJcbiAgICAgICAgICAgIGlzU3VjY2Vzc2Z1bDogdHJ1ZSxcclxuICAgICAgICAgICAgZXJyb3I6IG51bGwsXHJcbiAgICAgICAgICAgIHNldHRpbmdzOiBudWxsXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxufSJdfQ==

/***/ },
/* 33 */
/***/ function(module, exports) {

	module.exports = require("jsdom");

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/// <reference path="../typings/index.d.ts"/>
	var path = __webpack_require__(35);
	var ValueParserHash = (function () {
	    function ValueParserHash() {
	        this.parsers = {};
	        this.parsers["string"] = this.string;
	        this.parsers["number"] = this.number;
	    }
	    ValueParserHash.prototype.string = function (input) {
	        return (input || "").trim();
	    };
	    ValueParserHash.prototype.number = function (input) {
	        if (!input)
	            throw new Error("Number is missing.");
	        var src = input.replace(/[^0-9\.]/g, "");
	        var number = parseFloat(src);
	        if (number && !isNaN(number))
	            return number;
	        throw new Error("Number format is not valid.");
	    };
	    ValueParserHash.prototype.relativeUrl = function (input, context) {
	        var baseLocation = input[0] === "/" ? context.location.origin : context.location.href;
	        return path.posix.join(baseLocation, input).replace(":/", "://");
	    };
	    return ValueParserHash;
	}());
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = ValueParserHash;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsdWUtcGFyc2VyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidmFsdWUtcGFyc2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSw2Q0FBNkM7QUFDN0MsSUFBWSxJQUFJLFdBQU0sTUFBTSxDQUFDLENBQUE7QUFFN0I7SUFHSTtRQUZBLFlBQU8sR0FBRyxFQUFFLENBQUM7UUFHVCxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDckMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3pDLENBQUM7SUFFRCxnQ0FBTSxHQUFOLFVBQU8sS0FBYTtRQUNoQixNQUFNLENBQUMsQ0FBQyxLQUFLLElBQUksRUFBRSxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDaEMsQ0FBQztJQUVELGdDQUFNLEdBQU4sVUFBTyxLQUFhO1FBQ2hCLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO1lBQ1AsTUFBTSxJQUFJLEtBQUssQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO1FBRTFDLElBQU0sR0FBRyxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBRTNDLElBQU0sTUFBTSxHQUFHLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUUvQixFQUFFLENBQUMsQ0FBQyxNQUFNLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDekIsTUFBTSxDQUFDLE1BQU0sQ0FBQztRQUVsQixNQUFNLElBQUksS0FBSyxDQUFDLDZCQUE2QixDQUFDLENBQUM7SUFDbkQsQ0FBQztJQUVELHFDQUFXLEdBQVgsVUFBWSxLQUFhLEVBQUUsT0FBK0I7UUFDdEQsSUFBTSxZQUFZLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsR0FBRyxPQUFPLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxPQUFPLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQztRQUV4RixNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLEtBQUssQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDckUsQ0FBQztJQUNMLHNCQUFDO0FBQUQsQ0FBQyxBQS9CRCxJQStCQztBQS9CRDtpQ0ErQkMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi90eXBpbmdzL2luZGV4LmQudHNcIi8+XHJcbmltcG9ydCAqIGFzIHBhdGggZnJvbSBcInBhdGhcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFZhbHVlUGFyc2VySGFzaCB7XHJcbiAgICBwYXJzZXJzID0ge307XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5wYXJzZXJzW1wic3RyaW5nXCJdID0gdGhpcy5zdHJpbmc7XHJcbiAgICAgICAgdGhpcy5wYXJzZXJzW1wibnVtYmVyXCJdID0gdGhpcy5udW1iZXI7XHJcbiAgICB9XHJcblxyXG4gICAgc3RyaW5nKGlucHV0OiBzdHJpbmcpOiBhbnkge1xyXG4gICAgICAgIHJldHVybiAoaW5wdXQgfHwgXCJcIikudHJpbSgpO1xyXG4gICAgfVxyXG5cclxuICAgIG51bWJlcihpbnB1dDogc3RyaW5nKTogYW55IHtcclxuICAgICAgICBpZiAoIWlucHV0KVxyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJOdW1iZXIgaXMgbWlzc2luZy5cIik7XHJcblxyXG4gICAgICAgIGNvbnN0IHNyYyA9IGlucHV0LnJlcGxhY2UoL1teMC05XFwuXS9nLCBcIlwiKTtcclxuXHJcbiAgICAgICAgY29uc3QgbnVtYmVyID0gcGFyc2VGbG9hdChzcmMpO1xyXG5cclxuICAgICAgICBpZiAobnVtYmVyICYmICFpc05hTihudW1iZXIpKVxyXG4gICAgICAgICAgICByZXR1cm4gbnVtYmVyO1xyXG5cclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJOdW1iZXIgZm9ybWF0IGlzIG5vdCB2YWxpZC5cIik7XHJcbiAgICB9XHJcblxyXG4gICAgcmVsYXRpdmVVcmwoaW5wdXQ6IHN0cmluZywgY29udGV4dDogU2NyYXBpbmcuUGFyc2VyQ29udGV4dCkge1xyXG4gICAgICAgIGNvbnN0IGJhc2VMb2NhdGlvbiA9IGlucHV0WzBdID09PSBcIi9cIiA/IGNvbnRleHQubG9jYXRpb24ub3JpZ2luIDogY29udGV4dC5sb2NhdGlvbi5ocmVmOyAgICAgICAgXHJcblxyXG4gICAgICAgIHJldHVybiBwYXRoLnBvc2l4LmpvaW4oYmFzZUxvY2F0aW9uLCBpbnB1dCkucmVwbGFjZShcIjovXCIsIFwiOi8vXCIpO1xyXG4gICAgfVxyXG59Il19

/***/ },
/* 35 */
/***/ function(module, exports) {

	module.exports = require("path");

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	/// <reference path="../../typings/index.d.ts"/>
	"use strict";
	var async = __webpack_require__(37);
	var ScrapeQueueService = (function () {
	    function ScrapeQueueService(scrapeService, scrapingThreads, delayBetweenProductScraping) {
	        var _this = this;
	        this.scrapeService = scrapeService;
	        if (!scrapeService)
	            throw new Error("scrapeService is missing");
	        this.queue = async.queue(function (productId, callback) {
	            console.log("Scraping data for product " + productId);
	            _this.scrapeService.scrapeProductData(productId)
	                .then(function (res) {
	                Object.keys(res)
	                    .forEach(function (webShop) {
	                    var result = res[webShop];
	                    if (result.isSuccessful)
	                        console.log("Scraping product " + productId + " from shop " + webShop + " completed successfuly");
	                    else {
	                        console.error("Scraping product " + productId + " from shop " + webShop + " failed");
	                        console.error(result.error);
	                    }
	                });
	                setTimeout(callback, delayBetweenProductScraping);
	            })
	                .catch(function (err) { return callback(err); });
	        }, scrapingThreads);
	    }
	    /**
	     * Enqueues scraping data and saving results for a product.
	     * Method returns a promise which will be resolved when processing finishes.
	     */
	    ScrapeQueueService.prototype.enqueue = function (productId) {
	        var _this = this;
	        if (!productId)
	            throw new Error("productId is undefined");
	        return new Promise(function (resolve, reject) {
	            _this.queue.push(productId, function (err) {
	                if (err)
	                    reject(err);
	                else
	                    resolve(productId);
	            });
	        });
	    };
	    /**
	     * Enqueues scraping data and saving results for a product before other enqueued products.
	     * Method returns a promise which will be resolved when processing finishes.
	     */
	    ScrapeQueueService.prototype.enqueuePriore = function (productId) {
	        var _this = this;
	        if (!productId)
	            throw new Error("productId is undefined");
	        return new Promise(function (resolve, reject) {
	            _this.queue.unshift(productId, function (err) {
	                if (err)
	                    reject(err);
	                else
	                    resolve(productId);
	            });
	        });
	    };
	    return ScrapeQueueService;
	}());
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = ScrapeQueueService;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyYXBlLXF1ZXVlLXNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzY3JhcGUtcXVldWUtc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnREFBZ0Q7O0FBRWhELElBQVksS0FBSyxXQUFNLE9BQU8sQ0FBQyxDQUFBO0FBSS9CO0lBR0ksNEJBQW9CLGFBQTRCLEVBQUUsZUFBdUIsRUFBRSwyQkFBbUM7UUFIbEgsaUJBaUVDO1FBOUR1QixrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUM1QyxFQUFFLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQztZQUNmLE1BQU0sSUFBSSxLQUFLLENBQUMsMEJBQTBCLENBQUMsQ0FBQztRQUVoRCxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsVUFBQyxTQUFpQixFQUFFLFFBQVE7WUFDakQsT0FBTyxDQUFDLEdBQUcsQ0FBQywrQkFBNkIsU0FBVyxDQUFDLENBQUM7WUFFdEQsS0FBSSxDQUFDLGFBQWEsQ0FBQyxpQkFBaUIsQ0FBQyxTQUFTLENBQUM7aUJBQzFDLElBQUksQ0FBQyxVQUFBLEdBQUc7Z0JBQ0wsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUM7cUJBQ1gsT0FBTyxDQUFDLFVBQUEsT0FBTztvQkFDWixJQUFNLE1BQU0sR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7b0JBQzVCLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUM7d0JBQ3BCLE9BQU8sQ0FBQyxHQUFHLENBQUMsc0JBQW9CLFNBQVMsbUJBQWMsT0FBTywyQkFBd0IsQ0FBQyxDQUFDO29CQUM1RixJQUFJLENBQUMsQ0FBQzt3QkFDRixPQUFPLENBQUMsS0FBSyxDQUFDLHNCQUFvQixTQUFTLG1CQUFjLE9BQU8sWUFBUyxDQUFDLENBQUM7d0JBQzNFLE9BQU8sQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO29CQUNoQyxDQUFDO2dCQUNMLENBQUMsQ0FBQyxDQUFDO2dCQUVQLFVBQVUsQ0FBQyxRQUFRLEVBQUUsMkJBQTJCLENBQUMsQ0FBQztZQUN0RCxDQUFDLENBQUM7aUJBQ0QsS0FBSyxDQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsUUFBUSxDQUFDLEdBQUcsQ0FBQyxFQUFiLENBQWEsQ0FBQyxDQUFDO1FBRXJDLENBQUMsRUFBRSxlQUFlLENBQUMsQ0FBQztJQUN4QixDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsb0NBQU8sR0FBUCxVQUFRLFNBQWlCO1FBQXpCLGlCQVlDO1FBWEcsRUFBRSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7WUFDWCxNQUFNLElBQUksS0FBSyxDQUFDLHdCQUF3QixDQUFDLENBQUM7UUFFOUMsTUFBTSxDQUFDLElBQUksT0FBTyxDQUFDLFVBQUMsT0FBTyxFQUFFLE1BQU07WUFDL0IsS0FBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLFVBQUEsR0FBRztnQkFDMUIsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDO29CQUNKLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDaEIsSUFBSTtvQkFDQSxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDM0IsQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRDs7O09BR0c7SUFDSCwwQ0FBYSxHQUFiLFVBQWMsU0FBaUI7UUFBL0IsaUJBWUM7UUFYRyxFQUFFLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztZQUNYLE1BQU0sSUFBSSxLQUFLLENBQUMsd0JBQXdCLENBQUMsQ0FBQztRQUU5QyxNQUFNLENBQUMsSUFBSSxPQUFPLENBQUMsVUFBQyxPQUFPLEVBQUUsTUFBTTtZQUMvQixLQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsVUFBQSxHQUFHO2dCQUM3QixFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUM7b0JBQ0osTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNoQixJQUFJO29CQUNBLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUMzQixDQUFDLENBQUMsQ0FBQztRQUNQLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUNMLHlCQUFDO0FBQUQsQ0FBQyxBQWpFRCxJQWlFQztBQWpFRDtvQ0FpRUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi90eXBpbmdzL2luZGV4LmQudHNcIi8+XHJcblxyXG5pbXBvcnQgKiBhcyBhc3luYyBmcm9tIFwiYXN5bmNcIjtcclxuXHJcbmltcG9ydCBTY3JhcGVTZXJ2aWNlIGZyb20gXCIuL3NjcmFwZS1zZXJ2aWNlXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTY3JhcGVRdWV1ZVNlcnZpY2Uge1xyXG4gICAgcHJpdmF0ZSBxdWV1ZTogQXN5bmNRdWV1ZTxzdHJpbmc+O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgc2NyYXBlU2VydmljZTogU2NyYXBlU2VydmljZSwgc2NyYXBpbmdUaHJlYWRzOiBudW1iZXIsIGRlbGF5QmV0d2VlblByb2R1Y3RTY3JhcGluZzogbnVtYmVyKSB7XHJcbiAgICAgICAgaWYgKCFzY3JhcGVTZXJ2aWNlKVxyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJzY3JhcGVTZXJ2aWNlIGlzIG1pc3NpbmdcIik7XHJcblxyXG4gICAgICAgIHRoaXMucXVldWUgPSBhc3luYy5xdWV1ZSgocHJvZHVjdElkOiBzdHJpbmcsIGNhbGxiYWNrKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBTY3JhcGluZyBkYXRhIGZvciBwcm9kdWN0ICR7cHJvZHVjdElkfWApO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5zY3JhcGVTZXJ2aWNlLnNjcmFwZVByb2R1Y3REYXRhKHByb2R1Y3RJZClcclxuICAgICAgICAgICAgICAgIC50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmtleXMocmVzKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuZm9yRWFjaCh3ZWJTaG9wID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHJlc1t3ZWJTaG9wXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHQuaXNTdWNjZXNzZnVsKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBTY3JhcGluZyBwcm9kdWN0ICR7cHJvZHVjdElkfSBmcm9tIHNob3AgJHt3ZWJTaG9wfSBjb21wbGV0ZWQgc3VjY2Vzc2Z1bHlgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYFNjcmFwaW5nIHByb2R1Y3QgJHtwcm9kdWN0SWR9IGZyb20gc2hvcCAke3dlYlNob3B9IGZhaWxlZGApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IocmVzdWx0LmVycm9yKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoY2FsbGJhY2ssIGRlbGF5QmV0d2VlblByb2R1Y3RTY3JhcGluZyk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLmNhdGNoKGVyciA9PiBjYWxsYmFjayhlcnIpKTtcclxuXHJcbiAgICAgICAgfSwgc2NyYXBpbmdUaHJlYWRzKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEVucXVldWVzIHNjcmFwaW5nIGRhdGEgYW5kIHNhdmluZyByZXN1bHRzIGZvciBhIHByb2R1Y3QuXHJcbiAgICAgKiBNZXRob2QgcmV0dXJucyBhIHByb21pc2Ugd2hpY2ggd2lsbCBiZSByZXNvbHZlZCB3aGVuIHByb2Nlc3NpbmcgZmluaXNoZXMuICAgICBcclxuICAgICAqL1xyXG4gICAgZW5xdWV1ZShwcm9kdWN0SWQ6IHN0cmluZyk6IFByb21pc2U8c3RyaW5nPiB7XHJcbiAgICAgICAgaWYgKCFwcm9kdWN0SWQpXHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcInByb2R1Y3RJZCBpcyB1bmRlZmluZWRcIik7XHJcblxyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMucXVldWUucHVzaChwcm9kdWN0SWQsIGVyciA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZXJyKVxyXG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChlcnIpO1xyXG4gICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUocHJvZHVjdElkKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBFbnF1ZXVlcyBzY3JhcGluZyBkYXRhIGFuZCBzYXZpbmcgcmVzdWx0cyBmb3IgYSBwcm9kdWN0IGJlZm9yZSBvdGhlciBlbnF1ZXVlZCBwcm9kdWN0cy5cclxuICAgICAqIE1ldGhvZCByZXR1cm5zIGEgcHJvbWlzZSB3aGljaCB3aWxsIGJlIHJlc29sdmVkIHdoZW4gcHJvY2Vzc2luZyBmaW5pc2hlcy4gICAgIFxyXG4gICAgICovXHJcbiAgICBlbnF1ZXVlUHJpb3JlKHByb2R1Y3RJZDogc3RyaW5nKSB7XHJcbiAgICAgICAgaWYgKCFwcm9kdWN0SWQpXHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcInByb2R1Y3RJZCBpcyB1bmRlZmluZWRcIik7XHJcblxyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMucXVldWUudW5zaGlmdChwcm9kdWN0SWQsIGVyciA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZXJyKVxyXG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChlcnIpO1xyXG4gICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUocHJvZHVjdElkKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn0iXX0=

/***/ },
/* 37 */
/***/ function(module, exports) {

	module.exports = require("async");

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	/// <reference path="../../typings/index.d.ts" />
	"use strict";
	var schedule = __webpack_require__(39);
	var uuid = __webpack_require__(14);
	var ScrapeSchedulerService = (function () {
	    function ScrapeSchedulerService(queue, productService, schedules) {
	        this.queue = queue;
	        this.productService = productService;
	        this.schedules = schedules;
	        if (!queue)
	            throw new Error("queue is undefined");
	        if (!productService)
	            throw new Error("productService is undefined");
	        if (!schedules && !schedules.length)
	            throw new Error("schedules is undefined or empty");
	    }
	    ScrapeSchedulerService.prototype.run = function () {
	        var _this = this;
	        if (schedule.scheduledJobs && Object.keys(schedule.scheduledJobs).length)
	            return false;
	        this.schedules
	            .map(function (rule) { return schedule.scheduleJob(uuid.v1(), rule, function () {
	            console.log(new Date() + " Running product scraping for scheduler rule " + rule);
	            _this.productService
	                .all()
	                .then(function (products) {
	                products.forEach(function (p) { return _this.queue.enqueue(p.id); });
	            });
	        }); });
	        return true;
	    };
	    return ScrapeSchedulerService;
	}());
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = ScrapeSchedulerService;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyYXBlLXNjaGVkdWxlci1zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic2NyYXBlLXNjaGVkdWxlci1zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGlEQUFpRDs7QUFFakQsSUFBWSxRQUFRLFdBQU0sZUFBZSxDQUFDLENBQUE7QUFDMUMsSUFBWSxJQUFJLFdBQU0sV0FBVyxDQUFDLENBQUE7QUFLbEM7SUFDSSxnQ0FBb0IsS0FBeUIsRUFDekIsY0FBOEIsRUFDOUIsU0FBbUI7UUFGbkIsVUFBSyxHQUFMLEtBQUssQ0FBb0I7UUFDekIsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQzlCLGNBQVMsR0FBVCxTQUFTLENBQVU7UUFDbkMsRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7WUFDUCxNQUFNLElBQUksS0FBSyxDQUFDLG9CQUFvQixDQUFDLENBQUM7UUFDMUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxjQUFjLENBQUM7WUFDaEIsTUFBTSxJQUFJLEtBQUssQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDO1FBQ25ELEVBQUUsQ0FBQyxDQUFDLENBQUMsU0FBUyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQztZQUNoQyxNQUFNLElBQUksS0FBSyxDQUFDLGlDQUFpQyxDQUFDLENBQUM7SUFDM0QsQ0FBQztJQUVELG9DQUFHLEdBQUg7UUFBQSxpQkFrQkM7UUFqQkcsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLGFBQWEsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsQ0FBQyxNQUFNLENBQUM7WUFDckUsTUFBTSxDQUFDLEtBQUssQ0FBQztRQUVqQixJQUFJLENBQUMsU0FBUzthQUNULEdBQUcsQ0FBQyxVQUFBLElBQUksSUFBSSxPQUFBLFFBQVEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxFQUN2QyxJQUFJLEVBQ0o7WUFDSSxPQUFPLENBQUMsR0FBRyxDQUFJLElBQUksSUFBSSxFQUFFLHFEQUFnRCxJQUFNLENBQUMsQ0FBQztZQUVqRixLQUFJLENBQUMsY0FBYztpQkFDZCxHQUFHLEVBQUU7aUJBQ0wsSUFBSSxDQUFDLFVBQUEsUUFBUTtnQkFDVixRQUFRLENBQUMsT0FBTyxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsS0FBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUF4QixDQUF3QixDQUFDLENBQUM7WUFDcEQsQ0FBQyxDQUFDLENBQUM7UUFDWCxDQUFDLENBQUMsRUFWTyxDQVVQLENBQUMsQ0FBQztRQUVaLE1BQU0sQ0FBQyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUNMLDZCQUFDO0FBQUQsQ0FBQyxBQS9CRCxJQStCQztBQS9CRDt3Q0ErQkMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi90eXBpbmdzL2luZGV4LmQudHNcIiAvPlxyXG5cclxuaW1wb3J0ICogYXMgc2NoZWR1bGUgZnJvbSBcIm5vZGUtc2NoZWR1bGVcIjtcclxuaW1wb3J0ICogYXMgdXVpZCBmcm9tIFwibm9kZS11dWlkXCI7XHJcblxyXG5pbXBvcnQgU2NyYXBlUXVldWVTZXJ2aWNlIGZyb20gXCIuL3NjcmFwZS1xdWV1ZS1zZXJ2aWNlXCI7XHJcbmltcG9ydCBQcm9kdWN0U2VydmljZSBmcm9tIFwiLi4vcHJvZHVjdHMvcHJvZHVjdC1zZXJ2aWNlXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTY3JhcGVTY2hlZHVsZXJTZXJ2aWNlIHtcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcXVldWU6IFNjcmFwZVF1ZXVlU2VydmljZSxcclxuICAgICAgICAgICAgICAgIHByaXZhdGUgcHJvZHVjdFNlcnZpY2U6IFByb2R1Y3RTZXJ2aWNlLFxyXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBzY2hlZHVsZXM6IHN0cmluZ1tdKSB7XHJcbiAgICAgICAgaWYgKCFxdWV1ZSlcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwicXVldWUgaXMgdW5kZWZpbmVkXCIpO1xyXG4gICAgICAgIGlmICghcHJvZHVjdFNlcnZpY2UpXHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcInByb2R1Y3RTZXJ2aWNlIGlzIHVuZGVmaW5lZFwiKTtcclxuICAgICAgICBpZiAoIXNjaGVkdWxlcyAmJiAhc2NoZWR1bGVzLmxlbmd0aClcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwic2NoZWR1bGVzIGlzIHVuZGVmaW5lZCBvciBlbXB0eVwiKTtcclxuICAgIH1cclxuXHJcbiAgICBydW4oKTogYm9vbGVhbiB7XHJcbiAgICAgICAgaWYgKHNjaGVkdWxlLnNjaGVkdWxlZEpvYnMgJiYgT2JqZWN0LmtleXMoc2NoZWR1bGUuc2NoZWR1bGVkSm9icykubGVuZ3RoKVxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcblxyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVzXHJcbiAgICAgICAgICAgIC5tYXAocnVsZSA9PiBzY2hlZHVsZS5zY2hlZHVsZUpvYih1dWlkLnYxKCksXHJcbiAgICAgICAgICAgICAgICBydWxlLFxyXG4gICAgICAgICAgICAgICAgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGAke25ldyBEYXRlKCl9IFJ1bm5pbmcgcHJvZHVjdCBzY3JhcGluZyBmb3Igc2NoZWR1bGVyIHJ1bGUgJHtydWxlfWApO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb2R1Y3RTZXJ2aWNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hbGwoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAudGhlbihwcm9kdWN0cyA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0cy5mb3JFYWNoKHAgPT4gdGhpcy5xdWV1ZS5lbnF1ZXVlKHAuaWQpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9KSk7XHJcblxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG59Il19

/***/ },
/* 39 */
/***/ function(module, exports) {

	module.exports = require("node-schedule");

/***/ }
/******/ ]);
//# sourceMappingURL=app.js.map