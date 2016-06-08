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

	/// <reference path="./typings/index.d.ts"/>
	"use strict";
	var webServer = __webpack_require__(1);
	var scrapeServer = __webpack_require__(28);
	scrapeServer.run();
	webServer.run();
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDRDQUE0Qzs7QUFFNUMsSUFBWSxTQUFTLFdBQU0sY0FBYyxDQUFDLENBQUE7QUFDMUMsSUFBWSxZQUFZLFdBQU0saUJBQWlCLENBQUMsQ0FBQTtBQUVoRCxZQUFZLENBQUMsR0FBRyxFQUFFLENBQUM7QUFDbkIsU0FBUyxDQUFDLEdBQUcsRUFBRSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4vdHlwaW5ncy9pbmRleC5kLnRzXCIvPlxyXG5cclxuaW1wb3J0ICogYXMgd2ViU2VydmVyIGZyb20gXCIuL3dlYi1zZXJ2ZXJcIjtcclxuaW1wb3J0ICogYXMgc2NyYXBlU2VydmVyIGZyb20gXCIuL3NjcmFwZS1zZXJ2ZXJcIjtcclxuXHJcbnNjcmFwZVNlcnZlci5ydW4oKTtcclxud2ViU2VydmVyLnJ1bigpOyJdfQ==

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	/// <reference path="./typings/index.d.ts"/>
	"use strict";
	var express = __webpack_require__(2);
	var bodyparser = __webpack_require__(3);
	var cookieparser = __webpack_require__(4);
	var config_1 = __webpack_require__(5);
	var authentication_route_1 = __webpack_require__(7);
	var product_route_1 = __webpack_require__(17);
	var web_shop_route_1 = __webpack_require__(24);
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2ViLXNlcnZlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIndlYi1zZXJ2ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsNENBQTRDOztBQUc1QyxJQUFZLE9BQU8sV0FBTyxTQUFTLENBQUMsQ0FBQTtBQUVwQyxJQUFZLFVBQVUsV0FBTSxhQUFhLENBQUMsQ0FBQTtBQUMxQyxJQUFZLFlBQVksV0FBTSxlQUFlLENBQUMsQ0FBQTtBQUU5Qyx1QkFBbUIsVUFBVSxDQUFDLENBQUE7QUFFOUIscUNBQWlDLG1DQUFtQyxDQUFDLENBQUE7QUFDckUsOEJBQXlCLDRCQUE0QixDQUFDLENBQUE7QUFDdEQsK0JBQXlCLDZCQUE2QixDQUFDLENBQUE7QUFFdkQsSUFBSSxNQUFNLEdBQUcsT0FBTyxFQUFFLENBQUM7QUFFdkIsTUFBTSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxDQUFDO0FBQzNCLE1BQU0sQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLFVBQVUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO0FBRXRDLE1BQU0sQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLDhCQUFvQixDQUFDLENBQUM7QUFDekMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxlQUFlLEVBQUUsdUJBQVksQ0FBQyxDQUFDO0FBQzFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLHdCQUFZLENBQUMsQ0FBQztBQUl2QyxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxPQUFPLENBQUMsTUFBTSxDQUFDLGNBQWMsRUFBRTtJQUMzQyxLQUFLLEVBQUUsWUFBWTtDQUN0QixDQUFDLENBQUMsQ0FBQztBQUVKLElBQU0sSUFBSSxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxJQUFJLGdCQUFNLENBQUMsWUFBWSxDQUFDO0FBRXJEO0lBRUksTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUU7UUFDaEIsT0FBTyxDQUFDLElBQUksQ0FBQyw0Q0FBMEMsSUFBSSxNQUFHLENBQUMsQ0FBQztJQUNwRSxDQUFDLENBQUMsQ0FBQztBQUNQLENBQUM7QUFMZSxXQUFHLE1BS2xCLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi90eXBpbmdzL2luZGV4LmQudHNcIi8+XHJcblxyXG5pbXBvcnQgKiBhcyBodHRwICBmcm9tIFwiaHR0cFwiO1xyXG5pbXBvcnQgKiBhcyBleHByZXNzICBmcm9tIFwiZXhwcmVzc1wiO1xyXG5cclxuaW1wb3J0ICogYXMgYm9keXBhcnNlciBmcm9tIFwiYm9keS1wYXJzZXJcIjtcclxuaW1wb3J0ICogYXMgY29va2llcGFyc2VyIGZyb20gXCJjb29raWUtcGFyc2VyXCI7XHJcblxyXG5pbXBvcnQgY29uZmlnIGZyb20gXCIuL2NvbmZpZ1wiO1xyXG5cclxuaW1wb3J0IGF1dGhlbnRpY2F0aW9uUm91dGVyIGZyb20gXCIuL3dlYi9yb3V0ZXMvYXV0aGVudGljYXRpb24tcm91dGVcIjtcclxuaW1wb3J0IHByb2R1Y3RSb3V0ZSBmcm9tIFwiLi93ZWIvcm91dGVzL3Byb2R1Y3Qtcm91dGVcIjtcclxuaW1wb3J0IHdlYlNob3BSb3V0ZSBmcm9tIFwiLi93ZWIvcm91dGVzL3dlYi1zaG9wLXJvdXRlXCI7XHJcblxyXG5sZXQgc2VydmVyID0gZXhwcmVzcygpO1xyXG5cclxuc2VydmVyLnVzZShjb29raWVwYXJzZXIoKSk7XHJcbnNlcnZlci51c2UoXCIvYXBpXCIsIGJvZHlwYXJzZXIuanNvbigpKTtcclxuXHJcbnNlcnZlci51c2UoXCIvYXBpXCIsIGF1dGhlbnRpY2F0aW9uUm91dGVyKTtcclxuc2VydmVyLnVzZShcIi9hcGkvcHJvZHVjdHNcIiwgcHJvZHVjdFJvdXRlKTtcclxuc2VydmVyLnVzZShcIi9hcGkvc2hvcHNcIiwgd2ViU2hvcFJvdXRlKTtcclxuXHJcblxyXG5cclxuc2VydmVyLnVzZShcIi9cIiwgZXhwcmVzcy5zdGF0aWMoXCIuL291dC9jbGllbnRcIiwge1xyXG4gICAgaW5kZXg6IFwiaW5kZXguaHRtbFwiXHJcbn0pKTtcclxuXHJcbmNvbnN0IHBvcnQgPSBwcm9jZXNzLmVudi5QT1JUIHx8IGNvbmZpZy5mYWxsYmFja1BvcnQ7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcnVuKCkge1xyXG5cclxuICAgIHNlcnZlci5saXN0ZW4ocG9ydCwgKCkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUuaW5mbyhgV2ViIHNlcnZlciBzdGFydGVkIGF0IGh0dHA6Ly9sb2NhbGhvc3Q6JHtwb3J0fS9gKTtcclxuICAgIH0pO1xyXG59Il19

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = require("express");

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = require("body-parser");

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = require("cookie-parser");

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/// <reference path="typings/index.d.ts"/>
	var fs = __webpack_require__(6);
	var configContent = fs.readFileSync("./config.json", "utf8");
	var configuration = JSON.parse(configContent);
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = configuration;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSwwQ0FBMEM7QUFDMUMsSUFBWSxFQUFFLFdBQU0sSUFBSSxDQUFDLENBQUE7QUFHekIsSUFBSSxhQUFhLEdBQUcsRUFBRSxDQUFDLFlBQVksQ0FBQyxlQUFlLEVBQUUsTUFBTSxDQUFDLENBQUM7QUFDN0QsSUFBSSxhQUFhLEdBQWtCLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLENBQUM7QUFFN0Q7a0JBQWUsYUFBYSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8vIDxyZWZlcmVuY2UgcGF0aD1cInR5cGluZ3MvaW5kZXguZC50c1wiLz5cclxuaW1wb3J0ICogYXMgZnMgZnJvbSBcImZzXCI7XHJcblxyXG5cclxubGV0IGNvbmZpZ0NvbnRlbnQgPSBmcy5yZWFkRmlsZVN5bmMoXCIuL2NvbmZpZy5qc29uXCIsIFwidXRmOFwiKTtcclxubGV0IGNvbmZpZ3VyYXRpb24gPSA8Q29uZmlndXJhdGlvbj5KU09OLnBhcnNlKGNvbmZpZ0NvbnRlbnQpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29uZmlndXJhdGlvbjsiXX0=

/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = require("fs");

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/// <reference path="../../typings/index.d.ts" />
	var express = __webpack_require__(2);
	var db_1 = __webpack_require__(8);
	var mongo_authentication_token_storage_1 = __webpack_require__(10);
	var authentication_token_provider_1 = __webpack_require__(11);
	var mongo_user_account_storage_1 = __webpack_require__(14);
	var user_account_service_1 = __webpack_require__(15);
	var authentication_middleware_1 = __webpack_require__(16);
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
	            ok: true,
	            error: error
	        };
	        res.json(result).end();
	    });
	});
	router.use("*", function (res, req, next) { return authenticationMiddleware.run(res, req, next); });
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = router;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aGVudGljYXRpb24tcm91dGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhdXRoZW50aWNhdGlvbi1yb3V0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsaURBQWlEO0FBQ2pELElBQVksT0FBTyxXQUFNLFNBQVMsQ0FBQyxDQUFBO0FBRW5DLG1CQUFlLHNCQUFzQixDQUFDLENBQUE7QUFFdEMsbURBQTRDLGtFQUFrRSxDQUFDLENBQUE7QUFDL0csOENBQXdDLDZEQUE2RCxDQUFDLENBQUE7QUFFdEcsMkNBQW9DLGlEQUFpRCxDQUFDLENBQUE7QUFDdEYscUNBQStCLDJDQUEyQyxDQUFDLENBQUE7QUFFM0UsMENBQXFDLHFDQUFxQyxDQUFDLENBQUE7QUFFM0UsSUFBTSxFQUFFLEdBQUcsSUFBSSxZQUFFLEVBQUUsQ0FBQztBQUVwQixJQUFNLFlBQVksR0FBRyxJQUFJLDRDQUErQixDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBQzdELElBQU0sYUFBYSxHQUFHLElBQUksdUNBQTJCLENBQUMsWUFBWSxDQUFDLENBQUM7QUFDcEUsSUFBTSx3QkFBd0IsR0FBRyxJQUFJLG1DQUF3QixDQUFDLGFBQWEsQ0FBQyxDQUFDO0FBRTdFLElBQU0sa0JBQWtCLEdBQUcsSUFBSSw4QkFBa0IsQ0FBQyxJQUFJLG9DQUF1QixDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFFbkYsSUFBTSxNQUFNLEdBQUcsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBRWhDLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUNwQixVQUFDLEdBQUcsRUFBRSxHQUFHO0lBQ0wsSUFBTSxJQUFJLEdBQWtDLEdBQUcsQ0FBQyxJQUFJLENBQUM7SUFFckQsa0JBQWtCLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDO1NBQzVELElBQUksQ0FBQztRQUNGLElBQU0sTUFBTSxHQUFnQztZQUN4QyxFQUFFLEVBQUUsSUFBSTtZQUNSLEtBQUssRUFBRSxFQUFFO1NBQ1osQ0FBQztRQUNGLHdCQUF3QixDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUM7YUFDaEQsSUFBSSxDQUFDLGNBQU0sT0FBQSxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUF0QixDQUFzQixDQUFDLENBQUM7SUFDNUMsQ0FBQyxDQUFDO1NBQ0QsS0FBSyxDQUFDLFVBQUEsS0FBSztRQUNSLElBQU0sTUFBTSxHQUFnQztZQUN4QyxFQUFFLEVBQUUsSUFBSTtZQUNSLEtBQUssRUFBRSxLQUFLO1NBQ2YsQ0FBQztRQUVGLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUM7SUFDM0IsQ0FBQyxDQUFDLENBQUM7QUFDWCxDQUFDLENBQUMsQ0FBQztBQUVILE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLFVBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxJQUFJLElBQUssT0FBQSx3QkFBd0IsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsRUFBNUMsQ0FBNEMsQ0FBQyxDQUFDO0FBRWxGO2tCQUFlLE1BQU0sQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi90eXBpbmdzL2luZGV4LmQudHNcIiAvPlxyXG5pbXBvcnQgKiBhcyBleHByZXNzIGZyb20gXCJleHByZXNzXCI7XHJcblxyXG5pbXBvcnQgRGIgZnJvbSBcIi4uLy4uL2RhdGEtYWNjZXNzL2RiXCI7XHJcblxyXG5pbXBvcnQgTW9uZ29BdXRoZW50aWNhdGlvblRva2VuU3RvcmFnZSBmcm9tIFwiLi4vLi4vc2VydmljZXMvYXV0aGVudGljYXRpb24vbW9uZ28tYXV0aGVudGljYXRpb24tdG9rZW4tc3RvcmFnZVwiO1xyXG5pbXBvcnQgQXV0aGVudGljYXRpb25Ub2tlblByb3ZpZGVyIGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9hdXRoZW50aWNhdGlvbi9hdXRoZW50aWNhdGlvbi10b2tlbi1wcm92aWRlclwiO1xyXG5cclxuaW1wb3J0IE1vbmdvVXNlckFjY291bnRTdG9yYWdlIGZyb20gXCIuLi8uLi9zZXJ2aWNlcy91c2Vycy9tb25nby11c2VyLWFjY291bnQtc3RvcmFnZVwiO1xyXG5pbXBvcnQgVXNlckFjY291bnRTZXJ2aWNlIGZyb20gXCIuLi8uLi9zZXJ2aWNlcy91c2Vycy91c2VyLWFjY291bnQtc2VydmljZVwiO1xyXG5cclxuaW1wb3J0IEF1dGhlbnRpY2F0aW9uTWlkZGxld2FyZSBmcm9tIFwiLi4vLi4vd2ViL2F1dGhlbnRpY2F0aW9uLW1pZGRsZXdhcmVcIjtcclxuXHJcbmNvbnN0IGRiID0gbmV3IERiKCk7XHJcblxyXG5jb25zdCB0b2tlblN0b3JhZ2UgPSBuZXcgTW9uZ29BdXRoZW50aWNhdGlvblRva2VuU3RvcmFnZShkYik7XHJcbmNvbnN0IHRva2VuUHJvdmlkZXIgPSBuZXcgQXV0aGVudGljYXRpb25Ub2tlblByb3ZpZGVyKHRva2VuU3RvcmFnZSk7XHJcbmNvbnN0IGF1dGhlbnRpY2F0aW9uTWlkZGxld2FyZSA9IG5ldyBBdXRoZW50aWNhdGlvbk1pZGRsZXdhcmUodG9rZW5Qcm92aWRlcik7XHJcblxyXG5jb25zdCB1c2VyQWNjb3VudFNlcnZpY2UgPSBuZXcgVXNlckFjY291bnRTZXJ2aWNlKG5ldyBNb25nb1VzZXJBY2NvdW50U3RvcmFnZShkYikpO1xyXG5cclxuY29uc3Qgcm91dGVyID0gZXhwcmVzcy5Sb3V0ZXIoKTtcclxuXHJcbnJvdXRlci5wb3N0KFwiL2xvZ2luXCIsXHJcbihyZXEsIHJlcykgPT4ge1xyXG4gICAgY29uc3QgaW5mbzogQXBpLkF1dGhlbnRpY2F0aW9uQ3JlZGVudGlhbHMgPSByZXEuYm9keTtcclxuXHJcbiAgICB1c2VyQWNjb3VudFNlcnZpY2UudmFsaWRhdGVDcmVkZW50aWFscyhpbmZvLmxvZ2luLCBpbmZvLnBhc3N3b3JkKVxyXG4gICAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgcmVzdWx0OiBBcGkuSUF1dGhlbnRpY2F0aW9uUmVzcG9uc2UgPSB7XHJcbiAgICAgICAgICAgICAgICBvazogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGVycm9yOiBcIlwiXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGF1dGhlbnRpY2F0aW9uTWlkZGxld2FyZS5zaWduSW4ocmVxLCByZXMsIGluZm8ubG9naW4pXHJcbiAgICAgICAgICAgICAgICAudGhlbigoKSA9PiByZXMuanNvbihyZXN1bHQpLmVuZCgpKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaChlcnJvciA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdDogQXBpLklBdXRoZW50aWNhdGlvblJlc3BvbnNlID0ge1xyXG4gICAgICAgICAgICAgICAgb2s6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBlcnJvcjogZXJyb3JcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIHJlcy5qc29uKHJlc3VsdCkuZW5kKCk7XHJcbiAgICAgICAgfSk7XHJcbn0pO1xyXG5cclxucm91dGVyLnVzZShcIipcIiwgKHJlcywgcmVxLCBuZXh0KSA9PiBhdXRoZW50aWNhdGlvbk1pZGRsZXdhcmUucnVuKHJlcywgcmVxLCBuZXh0KSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCByb3V0ZXI7Il19

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/// <reference path="../typings/index.d.ts" />
	var mongo = __webpack_require__(9);
	var config_1 = __webpack_require__(5);
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
/* 9 */
/***/ function(module, exports) {

	module.exports = require("mongodb");

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	/// <reference path="../../typings/index.d.ts" />
	"use strict";
	var db_1 = __webpack_require__(8);
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
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/// <reference path="../../typings/index.d.ts" />
	var uuid = __webpack_require__(12);
	var moment = __webpack_require__(13);
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
/* 12 */
/***/ function(module, exports) {

	module.exports = require("node-uuid");

/***/ },
/* 13 */
/***/ function(module, exports) {

	module.exports = require("moment");

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	/// <reference path="../../typings/index.d.ts"/>
	"use strict";
	var db_1 = __webpack_require__(8);
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
/* 15 */
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
/* 16 */
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
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	/// <reference path="../../typings/index.d.ts"/>
	"use strict";
	var express = __webpack_require__(2);
	var db_1 = __webpack_require__(8);
	var mongo_product_storage_1 = __webpack_require__(18);
	var product_service_1 = __webpack_require__(19);
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
	        if (result["isValid"] === false) {
	            var validationResult = result;
	            var failResponse = {
	                ok: false,
	                errors: validationResult.errors
	            };
	            response.json(failResponse).end();
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1yb3V0ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInByb2R1Y3Qtcm91dGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0RBQWdEOztBQUVoRCxJQUFZLE9BQU8sV0FBTSxTQUFTLENBQUMsQ0FBQTtBQUVuQyxtQkFBZSxzQkFBc0IsQ0FBQyxDQUFBO0FBQ3RDLHNDQUFnQywrQ0FBK0MsQ0FBQyxDQUFBO0FBQ2hGLGdDQUEyQix5Q0FBeUMsQ0FBQyxDQUFBO0FBRXJFLElBQU0sRUFBRSxHQUFHLElBQUksWUFBRSxFQUFFLENBQUM7QUFFcEIsSUFBTSxjQUFjLEdBQUcsSUFBSSx5QkFBYyxDQUFDLElBQUksK0JBQW1CLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUV2RSxJQUFNLE1BQU0sR0FBRyxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUM7QUFFaEMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsVUFBQyxHQUFHLEVBQUUsR0FBRztJQUN4QixJQUFNLFNBQVMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxNQUFNLElBQUksRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7SUFFM0MsRUFBRSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO1FBQ2IsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsV0FBVyxDQUFDO2FBQ3JCLEdBQUcsRUFBRSxDQUFDO1FBQ1gsTUFBTSxDQUFDO0lBQ1gsQ0FBQztJQUdELGNBQWMsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDO1NBQ3hCLElBQUksQ0FBQyxVQUFBLE9BQU8sSUFBSSxPQUFBLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQWpCLENBQWlCLENBQUM7U0FDbEMsS0FBSyxDQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsV0FBVyxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQWhDLENBQWdDLENBQUMsQ0FBQztBQUN4RCxDQUFDLENBQUMsQ0FBQztBQUVILE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLFVBQUMsR0FBRyxFQUFFLEdBQUc7SUFDckIsY0FBYyxDQUFDLEdBQUcsRUFBRTtTQUNmLElBQUksQ0FBQyxVQUFBLFFBQVEsSUFBSSxPQUFBLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQWxCLENBQWtCLENBQUM7U0FDcEMsS0FBSyxDQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQXhCLENBQXdCLENBQUMsQ0FBQztBQUNoRCxDQUFDLENBQUMsQ0FBQztBQUVILE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLFVBQUMsT0FBTyxFQUFFLFFBQVE7SUFDL0IsSUFBTSxPQUFPLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQztJQUU3QixjQUFjLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQztTQUN2QixJQUFJLENBQUMsVUFBQSxNQUFNO1FBQ1IsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDOUIsSUFBTSxnQkFBZ0IsR0FBeUIsTUFBTSxDQUFDO1lBRXRELElBQU0sWUFBWSxHQUFzQjtnQkFDcEMsRUFBRSxFQUFFLEtBQUs7Z0JBQ1QsTUFBTSxFQUFFLGdCQUFnQixDQUFDLE1BQU07YUFDbEMsQ0FBQztZQUVGLFFBQVEsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUM7UUFDdEMsQ0FBQztRQUNELElBQUksQ0FBQyxDQUFDO1lBQ0YsSUFBTSxjQUFjLEdBQWdCLE1BQU0sQ0FBQztZQUMzQyxJQUFNLFVBQVUsR0FBc0M7Z0JBQ2xELEVBQUUsRUFBRSxJQUFJO2dCQUNSLE1BQU0sRUFBRSxjQUFjO2FBQ3pCLENBQUM7WUFFRixRQUFRLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBQ3BDLENBQUM7SUFDTCxDQUFDLENBQUMsQ0FBQztBQUVYLENBQUMsQ0FBQyxDQUFDO0FBRUg7a0JBQWUsTUFBTSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL3R5cGluZ3MvaW5kZXguZC50c1wiLz5cclxuXHJcbmltcG9ydCAqIGFzIGV4cHJlc3MgZnJvbSBcImV4cHJlc3NcIjtcclxuXHJcbmltcG9ydCBEYiBmcm9tIFwiLi4vLi4vZGF0YS1hY2Nlc3MvZGJcIjtcclxuaW1wb3J0IE1vbmdvUHJvZHVjdFN0b3JhZ2UgZnJvbSBcIi4uLy4uL3NlcnZpY2VzL3Byb2R1Y3RzL21vbmdvLXByb2R1Y3Qtc3RvcmFnZVwiO1xyXG5pbXBvcnQgUHJvZHVjdFNlcnZpY2UgZnJvbSBcIi4uLy4uL3NlcnZpY2VzL3Byb2R1Y3RzL3Byb2R1Y3Qtc2VydmljZVwiO1xyXG5cclxuY29uc3QgZGIgPSBuZXcgRGIoKTtcclxuXHJcbmNvbnN0IHByb2R1Y3RTZXJ2aWNlID0gbmV3IFByb2R1Y3RTZXJ2aWNlKG5ldyBNb25nb1Byb2R1Y3RTdG9yYWdlKGRiKSk7IFxyXG5cclxuY29uc3Qgcm91dGVyID0gZXhwcmVzcy5Sb3V0ZXIoKTtcclxuXHJcbnJvdXRlci5nZXQoXCIvOmlkXCIsIChyZXEsIHJlcykgPT4ge1xyXG4gICAgY29uc3QgcHJvZHVjdElkID0gKHJlcS5wYXJhbXMgfHwge30pW1wiaWRcIl07XHJcblxyXG4gICAgaWYgKCFwcm9kdWN0SWQpIHtcclxuICAgICAgICByZXMuc2VuZCg0MDQsIFwiTm90IGZvdW5kXCIpXHJcbiAgICAgICAgICAgIC5lbmQoKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHByb2R1Y3RTZXJ2aWNlLm9uZShwcm9kdWN0SWQpXHJcbiAgICAgICAgLnRoZW4ocHJvZHVjdCA9PiByZXMuanNvbihwcm9kdWN0KSlcclxuICAgICAgICAuY2F0Y2goZXJyID0+IHJlcy5zZW5kKDQwNCwgXCJOb3QgZm91bmRcIikuZW5kKCkpO1xyXG59KTtcclxuXHJcbnJvdXRlci5nZXQoXCIvXCIsIChyZXEsIHJlcykgPT4ge1xyXG4gICAgcHJvZHVjdFNlcnZpY2UuYWxsKClcclxuICAgICAgICAudGhlbihwcm9kdWN0cyA9PiByZXMuanNvbihwcm9kdWN0cykpXHJcbiAgICAgICAgLmNhdGNoKGVyciA9PiByZXMuc2VuZCg1MDAsIGVycikuZW5kKCkpOyBcclxufSk7XHJcblxyXG5yb3V0ZXIucG9zdChcIi9cIiwgKHJlcXVlc3QsIHJlc3BvbnNlKSA9PiB7XHJcbiAgICBjb25zdCBwcm9kdWN0ID0gcmVxdWVzdC5ib2R5O1xyXG5cclxuICAgIHByb2R1Y3RTZXJ2aWNlLnNhdmUocHJvZHVjdClcclxuICAgICAgICAudGhlbihyZXN1bHQgPT4ge1xyXG4gICAgICAgICAgICBpZiAocmVzdWx0W1wiaXNWYWxpZFwiXSA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHZhbGlkYXRpb25SZXN1bHQgPSA8QXBpLlZhbGlkYXRpb25SZXN1bHQ+cmVzdWx0O1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IGZhaWxSZXNwb25zZTogQXBpLklGYWlsUmVzcG9uc2UgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgb2s6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIGVycm9yczogdmFsaWRhdGlvblJlc3VsdC5lcnJvcnNcclxuICAgICAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAgICAgcmVzcG9uc2UuanNvbihmYWlsUmVzcG9uc2UpLmVuZCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdXBkYXRlZFByb2R1Y3QgPSA8QXBpLlByb2R1Y3Q+cmVzdWx0O1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgb2tSZXNwb25zZTogQXBpLklTdWNjZXNzUmVzcG9uc2U8QXBpLlByb2R1Y3Q+ID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIG9rOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIGVudGl0eTogdXBkYXRlZFByb2R1Y3RcclxuICAgICAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAgICAgcmVzcG9uc2UuanNvbihva1Jlc3BvbnNlKS5lbmQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCByb3V0ZXI7Il19

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	/// <reference path="../../typings/index.d.ts" />
	"use strict";
	var db_1 = __webpack_require__(8);
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
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	/// <reference path="../../typings/index.d.ts" />
	"use strict";
	var moment = __webpack_require__(13);
	var uuid = __webpack_require__(12);
	var event_bus_1 = __webpack_require__(20);
	var product_validator_1 = __webpack_require__(22);
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
	            _this.validator
	                .validate(product)
	                .then(function (validationResult) {
	                if (!validationResult.isValid)
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
	            var values = product.values[webshopId] || {
	                title: null,
	                price: null,
	                image: null
	            };
	            product.values[webshopId] = values;
	            if (!product.log)
	                product.log = {};
	            var log = product.log[webshopId] || {
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicHJvZHVjdC1zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGlEQUFpRDs7QUFFakQsSUFBWSxNQUFNLFdBQU0sUUFBUSxDQUFDLENBQUE7QUFDakMsSUFBWSxJQUFJLFdBQU0sV0FBVyxDQUFDLENBQUE7QUFFbEMsMEJBQXFDLGNBQWMsQ0FBQyxDQUFBO0FBRXBELGtDQUE2QixxQkFBcUIsQ0FBQyxDQUFBO0FBRW5EO0lBR0ksd0JBQW9CLE9BQWlDO1FBQWpDLFlBQU8sR0FBUCxPQUFPLENBQTBCO1FBRjdDLGNBQVMsR0FBRyxJQUFJLDJCQUFnQixFQUFFLENBQUM7UUFHdkMsRUFBRSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUM7WUFDVCxNQUFNLElBQUksS0FBSyxDQUFDLHNCQUFzQixDQUFDLENBQUM7SUFDaEQsQ0FBQztJQUVELDRCQUFHLEdBQUg7UUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsQ0FBQztJQUM5QixDQUFDO0lBRUQsNkJBQUksR0FBSixVQUFLLE9BQW9CO1FBQXpCLGlCQTBCQztRQXpCRyxFQUFFLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQztZQUNULE1BQU0sSUFBSSxLQUFLLENBQUMsc0JBQXNCLENBQUMsQ0FBQztRQUU1QyxFQUFFLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUM7WUFDWixPQUFPLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxFQUFFLEVBQUUsQ0FBQztRQUUzQixNQUFNLENBQUMsSUFBSSxPQUFPLENBQUMsVUFBQSxPQUFPO1lBQ3RCLEtBQUksQ0FBQyxTQUFTO2lCQUNULFFBQVEsQ0FBQyxPQUFPLENBQUM7aUJBQ2pCLElBQUksQ0FBQyxVQUFBLGdCQUFnQjtnQkFDbEIsRUFBRSxDQUFDLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUM7b0JBQzFCLE9B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QyxNQUFNLENBQUM7aUJBQ25CLE9BQU8sQ0FBQyxVQUFBLElBQUk7Z0JBQ1QsSUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFFaEMsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQztvQkFDbkIsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUM7Z0JBRS9CLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUc7b0JBQ2YsU0FBUyxFQUFFLEdBQUc7b0JBQ2QsS0FBSyxFQUFFLEtBQUssQ0FBQyxLQUFLO2lCQUNyQixDQUFDO1lBQ04sQ0FBQyxDQUFDLENBQUM7WUFFUCxNQUFNLENBQUMsS0FBSSxDQUFDLE9BQU8sQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDLEVBQUUsRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQzVFLENBQUMsQ0FBQyxDQUFDO0lBQ1gsQ0FBQztJQUNMLHFCQUFDO0FBQUQsQ0FBQyxBQXBHRCxJQW9HQztBQXBHRDtnQ0FvR0MsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi90eXBpbmdzL2luZGV4LmQudHNcIiAvPlxyXG5cclxuaW1wb3J0ICogYXMgbW9tZW50IGZyb20gXCJtb21lbnRcIjtcclxuaW1wb3J0ICogYXMgdXVpZCBmcm9tIFwibm9kZS11dWlkXCI7XHJcblxyXG5pbXBvcnQgeyBldmVudEJ1cywgRXZlbnROYW1lcyB9IGZyb20gXCIuLi9ldmVudC1idXNcIjtcclxuXHJcbmltcG9ydCBQcm9kdWN0VmFsaWRhdG9yIGZyb20gXCIuL3Byb2R1Y3QtdmFsaWRhdG9yXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9kdWN0U2VydmljZSB7XHJcbiAgICBwcml2YXRlIHZhbGlkYXRvciA9IG5ldyBQcm9kdWN0VmFsaWRhdG9yKCk7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBzdG9yYWdlOiBQcm9kdWN0cy5JUHJvZHVjdFN0b3JhZ2UpIHtcclxuICAgICAgICBpZiAoIXN0b3JhZ2UpXHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcInN0b3JhZ2UgaXMgdW5kZWZpbmVkXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIGFsbCgpOiBQcm9taXNlPEFwaS5Qcm9kdWN0W10+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zdG9yYWdlLmFsbCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHNhdmUocHJvZHVjdDogQXBpLlByb2R1Y3QpOiBQcm9taXNlPEFwaS5WYWxpZGF0aW9uUmVzdWx0IHwgQXBpLlByb2R1Y3Q+IHtcclxuICAgICAgICBpZiAoIXByb2R1Y3QpXHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcInByb2R1Y3QgaXMgdW5kZWZpbmVkXCIpO1xyXG5cclxuICAgICAgICBpZiAoIXByb2R1Y3QuaWQpXHJcbiAgICAgICAgICAgIHByb2R1Y3QuaWQgPSB1dWlkLnYxKCk7XHJcblxyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcclxuICAgICAgICAgICAgdGhpcy52YWxpZGF0b3JcclxuICAgICAgICAgICAgICAgIC52YWxpZGF0ZShwcm9kdWN0KVxyXG4gICAgICAgICAgICAgICAgLnRoZW4odmFsaWRhdGlvblJlc3VsdCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF2YWxpZGF0aW9uUmVzdWx0LmlzVmFsaWQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUodmFsaWRhdGlvblJlc3VsdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RvcmFnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnNhdmUocHJvZHVjdClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKCgpID0+IHRoaXMub25lKHByb2R1Y3QuaWQpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4ocCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnRCdXMuZW1pdChFdmVudE5hbWVzLlByb2R1Y3RVcGRhdGVkLCBwLmlkKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4oZW50aXR5ID0+IHJlc29sdmUoZW50aXR5KSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25lKHByb2R1Y3RJZDogc3RyaW5nKTogUHJvbWlzZTxBcGkuUHJvZHVjdD4ge1xyXG4gICAgICAgIGlmICghcHJvZHVjdElkKVxyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJwcm9kdWN0SWQgaXMgdW5kZWZpbmVkXCIpO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5zdG9yYWdlLm9uZShwcm9kdWN0SWQpO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZVNjcmFwZWREYXRhKHByb2R1Y3RJZDogc3RyaW5nLCB3ZWJzaG9wSWQ6IHN0cmluZywgZGF0YTogU2NyYXBpbmcuV2ViU2hvcFNjcmFwaW5nUmVzdWx0KTogUHJvbWlzZTxBcGkuUHJvZHVjdD4ge1xyXG4gICAgICAgIGlmICghcHJvZHVjdElkKVxyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJwcm9kdWN0SWQgaXMgdW5kZWZpbmVkXCIpO1xyXG4gICAgICAgIGlmICghd2Vic2hvcElkKVxyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJ3ZWJTaG9wSWQgaXMgdW5kZWZpbmVkXCIpO1xyXG4gICAgICAgIGlmICghZGF0YSlcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiZGF0YSBpcyB1bmRlZmluZWRcIik7XHJcbiAgICAgICAgY29uc3Qgbm93ID0gbW9tZW50LnV0YygpLnRvRGF0ZSgpO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5vbmUocHJvZHVjdElkKVxyXG4gICAgICAgICAgICAudGhlbihwcm9kdWN0ID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICghcHJvZHVjdC52YWx1ZXMpXHJcbiAgICAgICAgICAgICAgICAgICAgcHJvZHVjdC52YWx1ZXMgPSB7fTtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgdmFsdWVzID0gcHJvZHVjdC52YWx1ZXNbd2Vic2hvcElkXSB8fCB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgcHJpY2U6IG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2U6IG51bGxcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICBwcm9kdWN0LnZhbHVlc1t3ZWJzaG9wSWRdID0gdmFsdWVzO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoIXByb2R1Y3QubG9nKVxyXG4gICAgICAgICAgICAgICAgICAgIHByb2R1Y3QubG9nID0ge307XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IGxvZyA9IHByb2R1Y3QubG9nW3dlYnNob3BJZF0gfHwge1xyXG4gICAgICAgICAgICAgICAgICAgIHVybDogbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICBzY3JhcGVkQXQ6IG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgZXJyb3I6IGRhdGEuZXJyb3IsXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWVzOiB7fVxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIHByb2R1Y3QubG9nW3dlYnNob3BJZF0gPSBsb2c7XHJcblxyXG4gICAgICAgICAgICAgICAgbG9nLnVybCA9IHByb2R1Y3Quc2NyYXBpbmdVcmxzW3dlYnNob3BJZF07XHJcbiAgICAgICAgICAgICAgICBsb2cuc2NyYXBlZEF0ID0gbm93O1xyXG4gICAgICAgICAgICAgICAgbG9nLmVycm9yID0gZGF0YS5lcnJvcjtcclxuXHJcbiAgICAgICAgICAgICAgICBPYmplY3Qua2V5cyhkYXRhLnZhbHVlcylcclxuICAgICAgICAgICAgICAgICAgICAuZm9yRWFjaChuYW1lID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBkYXRhLnZhbHVlc1tuYW1lXTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2YWx1ZS5pc1N1Y2Nlc3NmdWwpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZXNbbmFtZV0gPSB2YWx1ZS52YWx1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvZy52YWx1ZXNbbmFtZV0gPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY3JhcGVkQXQ6IG5vdyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yOiB2YWx1ZS5lcnJvclxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnN0b3JhZ2Uuc2V0U2NyYXBpbmdEYXRhKHByb2R1Y3QuaWQsIHdlYnNob3BJZCwgdmFsdWVzLCBsb2cpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxufSJdfQ==

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	/// <reference path="../typings/index.d.ts"/>
	"use strict";
	var events_1 = __webpack_require__(21);
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
/* 21 */
/***/ function(module, exports) {

	module.exports = require("events");

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	/// <reference path="../../typings/index.d.ts" />
	"use strict";
	var validator = __webpack_require__(23);
	var ProductValidator = (function () {
	    function ProductValidator() {
	        this.productValidator = validator.isAnyObject()
	            .withRequired("id", validator.isString())
	            .withRequired("title", validator.isString());
	    }
	    ProductValidator.prototype.validate = function (product) {
	        var _this = this;
	        if (!product)
	            throw new Error("product is undefined");
	        return new Promise(function (resolve) {
	            validator.run(_this.productValidator, product, function (errorCount, errors) {
	                resolve({
	                    isValid: errorCount === 0,
	                    errorCount: errorCount,
	                    errors: errors
	                });
	            });
	        });
	    };
	    return ProductValidator;
	}());
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = ProductValidator;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC12YWxpZGF0b3IuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwcm9kdWN0LXZhbGlkYXRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxpREFBaUQ7O0FBRWpELElBQVksU0FBUyxXQUFNLGdCQUFnQixDQUFDLENBQUE7QUFFNUM7SUFHSTtRQUNJLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxTQUFTLENBQUMsV0FBVyxFQUFFO2FBQzFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsU0FBUyxDQUFDLFFBQVEsRUFBRSxDQUFDO2FBQ3hDLFlBQVksQ0FBQyxPQUFPLEVBQUUsU0FBUyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7SUFFckQsQ0FBQztJQUVELG1DQUFRLEdBQVIsVUFBUyxPQUFvQjtRQUE3QixpQkFlQztRQWRHLEVBQUUsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDO1lBQ1QsTUFBTSxJQUFJLEtBQUssQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO1FBRTVDLE1BQU0sQ0FBQyxJQUFJLE9BQU8sQ0FBQyxVQUFBLE9BQU87WUFDdEIsU0FBUyxDQUFDLEdBQUcsQ0FBQyxLQUFJLENBQUMsZ0JBQWdCLEVBQy9CLE9BQU8sRUFDUCxVQUFDLFVBQVUsRUFBRSxNQUFNO2dCQUNmLE9BQU8sQ0FBQztvQkFDSixPQUFPLEVBQUUsVUFBVSxLQUFLLENBQUM7b0JBQ3pCLFVBQVUsRUFBRSxVQUFVO29CQUN0QixNQUFNLEVBQUUsTUFBTTtpQkFDakIsQ0FBQyxDQUFDO1lBQ1AsQ0FBQyxDQUFDLENBQUM7UUFDWCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFDTCx1QkFBQztBQUFELENBQUMsQUExQkQsSUEwQkM7QUExQkQ7a0NBMEJDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vdHlwaW5ncy9pbmRleC5kLnRzXCIgLz5cclxuXHJcbmltcG9ydCAqIGFzIHZhbGlkYXRvciBmcm9tIFwibm9kZS12YWxpZGF0b3JcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2R1Y3RWYWxpZGF0b3Ige1xyXG4gICAgcHJpdmF0ZSBwcm9kdWN0VmFsaWRhdG9yOiB2YWxpZGF0b3IuVmFsaWRhdGFibGU7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5wcm9kdWN0VmFsaWRhdG9yID0gdmFsaWRhdG9yLmlzQW55T2JqZWN0KClcclxuICAgICAgICAgICAgLndpdGhSZXF1aXJlZChcImlkXCIsIHZhbGlkYXRvci5pc1N0cmluZygpKVxyXG4gICAgICAgICAgICAud2l0aFJlcXVpcmVkKFwidGl0bGVcIiwgdmFsaWRhdG9yLmlzU3RyaW5nKCkpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICB2YWxpZGF0ZShwcm9kdWN0OiBBcGkuUHJvZHVjdCk6IFByb21pc2U8QXBpLlZhbGlkYXRpb25SZXN1bHQ+IHtcclxuICAgICAgICBpZiAoIXByb2R1Y3QpXHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcInByb2R1Y3QgaXMgdW5kZWZpbmVkXCIpO1xyXG5cclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XHJcbiAgICAgICAgICAgIHZhbGlkYXRvci5ydW4odGhpcy5wcm9kdWN0VmFsaWRhdG9yLFxyXG4gICAgICAgICAgICAgICAgcHJvZHVjdCxcclxuICAgICAgICAgICAgICAgIChlcnJvckNvdW50LCBlcnJvcnMpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXNWYWxpZDogZXJyb3JDb3VudCA9PT0gMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JDb3VudDogZXJyb3JDb3VudCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JzOiBlcnJvcnNcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59Il19

/***/ },
/* 23 */
/***/ function(module, exports) {

	module.exports = require("node-validator");

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	/// <reference path="../../typings/index.d.ts" />
	"use strict";
	var express = __webpack_require__(2);
	var db_1 = __webpack_require__(8);
	var mongo_web_shop_storage_1 = __webpack_require__(25);
	var web_shop_service_1 = __webpack_require__(26);
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
	            if (result["isValid"] === false) {
	                var validationResult = result;
	                var failResponse = {
	                    ok: false,
	                    errors: validationResult.errors
	                };
	                response.json(failResponse).end();
	            }
	            else {
	                var updatedWebShop = result;
	                var okResponse = {
	                    ok: true,
	                    entity: updatedWebShop
	                };
	                response.json(okResponse).end();
	            }
	        });
	    }
	});
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = router;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2ViLXNob3Atcm91dGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ3ZWItc2hvcC1yb3V0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxpREFBaUQ7O0FBRWpELElBQVksT0FBTyxXQUFNLFNBQVMsQ0FBQyxDQUFBO0FBRW5DLG1CQUFlLHNCQUFzQixDQUFDLENBQUE7QUFFdEMsdUNBQWdDLGdEQUFnRCxDQUFDLENBQUE7QUFDakYsaUNBQTJCLDBDQUEwQyxDQUFDLENBQUE7QUFFdEUsSUFBTSxFQUFFLEdBQUcsSUFBSSxZQUFFLEVBQUUsQ0FBQztBQUVwQixJQUFNLGNBQWMsR0FBRyxJQUFJLDBCQUFjLENBQUMsSUFBSSxnQ0FBbUIsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBRXZFLElBQU0sTUFBTSxHQUFHLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUVoQyxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxVQUFDLE9BQU8sRUFBRSxRQUFRO0lBQzlCLGNBQWMsQ0FBQyxHQUFHLEVBQUU7U0FDZixJQUFJLENBQUMsVUFBQSxLQUFLO1FBQ1AsSUFBTSxLQUFLLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUM7WUFDMUIsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFO1lBQ1IsTUFBTSxFQUFFLENBQUMsQ0FBQyxNQUFNO1lBQ2hCLEtBQUssRUFBRSxDQUFDLENBQUMsS0FBSztZQUNkLFFBQVEsRUFBRSxDQUFDLENBQUMsUUFBUTtTQUN2QixDQUFDLEVBTDJCLENBSzNCLENBQUMsQ0FBQztRQUNKLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUM7SUFDL0IsQ0FBQyxDQUFDO1NBQ0QsS0FBSyxDQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQTdCLENBQTZCLENBQUMsQ0FBQztBQUNyRCxDQUFDLENBQUMsQ0FBQztBQUVILE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLFVBQUMsT0FBTyxFQUFFLFFBQVE7SUFDL0IsSUFBTSxPQUFPLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQztJQUU3QixFQUFFLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ2QsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsNkNBQTZDLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQztJQUM1RSxDQUFDO0lBQ0QsSUFBSSxDQUFDLENBQUM7UUFDRixjQUFjLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQzthQUN2QixJQUFJLENBQUMsVUFBQSxNQUFNO1lBQ1IsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEtBQUssQ0FBQyxDQUFDLENBQUM7Z0JBQzlCLElBQU0sZ0JBQWdCLEdBQXlCLE1BQU0sQ0FBQztnQkFFdEQsSUFBTSxZQUFZLEdBQXNCO29CQUNwQyxFQUFFLEVBQUUsS0FBSztvQkFDVCxNQUFNLEVBQUUsZ0JBQWdCLENBQUMsTUFBTTtpQkFDbEMsQ0FBQztnQkFFRixRQUFRLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDO1lBQ3RDLENBQUM7WUFDRCxJQUFJLENBQUMsQ0FBQztnQkFDRixJQUFNLGNBQWMsR0FBZ0IsTUFBTSxDQUFDO2dCQUMzQyxJQUFNLFVBQVUsR0FBc0M7b0JBQ2xELEVBQUUsRUFBRSxJQUFJO29CQUNSLE1BQU0sRUFBRSxjQUFjO2lCQUN6QixDQUFDO2dCQUVGLFFBQVEsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUM7WUFDcEMsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFDO0lBQ1gsQ0FBQztBQUNMLENBQUMsQ0FBQyxDQUFDO0FBRUg7a0JBQWUsTUFBTSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL3R5cGluZ3MvaW5kZXguZC50c1wiIC8+XHJcblxyXG5pbXBvcnQgKiBhcyBleHByZXNzIGZyb20gXCJleHByZXNzXCI7XHJcblxyXG5pbXBvcnQgRGIgZnJvbSBcIi4uLy4uL2RhdGEtYWNjZXNzL2RiXCI7XHJcblxyXG5pbXBvcnQgTW9uZ29XZWJTaG9wU3RvcmFnZSBmcm9tIFwiLi4vLi4vc2VydmljZXMvd2ViLXNob3AvbW9uZ28td2ViLXNob3Atc3RvcmFnZVwiO1xyXG5pbXBvcnQgV2ViU2hvcFNlcnZpY2UgZnJvbSBcIi4uLy4uL3NlcnZpY2VzL3dlYi1zaG9wL3dlYi1zaG9wLXNlcnZpY2VcIjtcclxuXHJcbmNvbnN0IGRiID0gbmV3IERiKCk7XHJcblxyXG5jb25zdCB3ZWJTaG9wU2VydmljZSA9IG5ldyBXZWJTaG9wU2VydmljZShuZXcgTW9uZ29XZWJTaG9wU3RvcmFnZShkYikpO1xyXG5cclxuY29uc3Qgcm91dGVyID0gZXhwcmVzcy5Sb3V0ZXIoKTtcclxuXHJcbnJvdXRlci5nZXQoXCIvXCIsIChyZXF1ZXN0LCByZXNwb25zZSkgPT4ge1xyXG4gICAgd2ViU2hvcFNlcnZpY2UuYWxsKClcclxuICAgICAgICAudGhlbihzaG9wcyA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IG1vZGVsID0gc2hvcHMubWFwKHMgPT4gKHtcclxuICAgICAgICAgICAgICAgIGlkOiBzLmlkLFxyXG4gICAgICAgICAgICAgICAgaXNCYXNlOiBzLmlzQmFzZSxcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBzLnRpdGxlLFxyXG4gICAgICAgICAgICAgICAgZGVsaXZlcnk6IHMuZGVsaXZlcnlcclxuICAgICAgICAgICAgfSkpO1xyXG4gICAgICAgICAgICByZXNwb25zZS5qc29uKG1vZGVsKS5lbmQoKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaChlcnIgPT4gcmVzcG9uc2Uuc2VuZCg1MDAsIGVycikuZW5kKCkpO1xyXG59KTtcclxuXHJcbnJvdXRlci5wb3N0KFwiL1wiLCAocmVxdWVzdCwgcmVzcG9uc2UpID0+IHtcclxuICAgIGNvbnN0IHdlYlNob3AgPSByZXF1ZXN0LmJvZHk7XHJcblxyXG4gICAgaWYgKCF3ZWJTaG9wLmlkKSB7XHJcbiAgICAgICAgcmVzcG9uc2Uuc2VuZCg0MDAsIFwiQmFkIHJlcXVlc3QuIFdlYiBzaG9wIGlkZW50aWZpZXIgaXMgbWlzc2luZ1wiKS5lbmQoKTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIHdlYlNob3BTZXJ2aWNlLnNhdmUod2ViU2hvcClcclxuICAgICAgICAgICAgLnRoZW4ocmVzdWx0ID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChyZXN1bHRbXCJpc1ZhbGlkXCJdID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHZhbGlkYXRpb25SZXN1bHQgPSA8QXBpLlZhbGlkYXRpb25SZXN1bHQ+cmVzdWx0O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBmYWlsUmVzcG9uc2U6IEFwaS5JRmFpbFJlc3BvbnNlID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvazogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yczogdmFsaWRhdGlvblJlc3VsdC5lcnJvcnNcclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICByZXNwb25zZS5qc29uKGZhaWxSZXNwb25zZSkuZW5kKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB1cGRhdGVkV2ViU2hvcCA9IDxBcGkuV2ViU2hvcD5yZXN1bHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgb2tSZXNwb25zZTogQXBpLklTdWNjZXNzUmVzcG9uc2U8QXBpLldlYlNob3A+ID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvazogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZW50aXR5OiB1cGRhdGVkV2ViU2hvcFxyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlLmpzb24ob2tSZXNwb25zZSkuZW5kKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJvdXRlcjsiXX0=

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	/// <reference path="../../typings/index.d.ts" />
	"use strict";
	var db_1 = __webpack_require__(8);
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
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	/// <reference path="../../typings/index.d.ts" />
	"use strict";
	var web_shop_validator_1 = __webpack_require__(27);
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
	        return new Promise(function (resolve) {
	            _this.validator
	                .validate(webShop)
	                .then(function (validationResult) {
	                if (!validationResult.isValid)
	                    resolve(validationResult);
	                else
	                    _this.storage
	                        .save(webShop)
	                        .then(function () { return _this.one(webShop.id); })
	                        .then(function (entity) { return resolve(entity); })
	                        .catch(function (err) {
	                        var errorResult = {
	                            isValid: false,
	                            errorCount: 1,
	                            errors: [{
	                                    parameter: "",
	                                    value: null,
	                                    message: err
	                                }]
	                        };
	                        resolve(errorResult);
	                    });
	            })
	                .catch(function () {
	                var errorResult = {
	                    isValid: false,
	                    errorCount: 1,
	                    errors: [{
	                            parameter: "",
	                            value: null,
	                            message: "Validation failed"
	                        }]
	                };
	                resolve(errorResult);
	            });
	        });
	    };
	    WebShopService.prototype.put = function (webShop) {
	        var _this = this;
	        if (!webShop)
	            throw new Error("webShop is undefined");
	        return new Promise(function (resolve) {
	            _this.validator
	                .validate(webShop)
	                .then(function (validationResult) {
	                if (!validationResult.isValid)
	                    resolve(validationResult);
	                else
	                    _this.storage
	                        .put(webShop)
	                        .then(function () { return _this.one(webShop.id); })
	                        .then(function (entity) { return resolve(entity); })
	                        .catch(function (err) {
	                        var errorResult = {
	                            isValid: false,
	                            errorCount: 1,
	                            errors: [{
	                                    parameter: "",
	                                    value: null,
	                                    message: err
	                                }]
	                        };
	                        resolve(errorResult);
	                    });
	            })
	                .catch(function () {
	                var errorResult = {
	                    isValid: false,
	                    errorCount: 1,
	                    errors: [{
	                            parameter: "",
	                            value: null,
	                            message: "Validation failed"
	                        }]
	                };
	                resolve(errorResult);
	            });
	        });
	    };
	    return WebShopService;
	}());
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = WebShopService;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2ViLXNob3Atc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIndlYi1zaG9wLXNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsaURBQWlEOztBQUVqRCxtQ0FBNkIsc0JBQXNCLENBQUMsQ0FBQTtBQUVwRDtJQUlJLHdCQUFvQixPQUFpQztRQUFqQyxZQUFPLEdBQVAsT0FBTyxDQUEwQjtRQUY3QyxjQUFTLEdBQUcsSUFBSSw0QkFBZ0IsRUFBRSxDQUFDO1FBR3ZDLEVBQUUsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDO1lBQ1QsTUFBTSxJQUFJLEtBQUssQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO0lBQ2hELENBQUM7SUFFRCw0QkFBRyxHQUFIO1FBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLENBQUM7SUFDOUIsQ0FBQztJQUVELDRCQUFHLEdBQUgsVUFBSSxTQUFpQjtRQUNqQixFQUFFLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztZQUNYLE1BQU0sSUFBSSxLQUFLLENBQUMsd0JBQXdCLENBQUMsQ0FBQztRQUM5QyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDdkMsQ0FBQztJQUVELDZCQUFJLEdBQUosVUFBSyxPQUFvQjtRQUF6QixpQkE0Q0M7UUEzQ0csRUFBRSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUM7WUFDVCxNQUFNLElBQUksS0FBSyxDQUFDLHNCQUFzQixDQUFDLENBQUM7UUFFNUMsTUFBTSxDQUFDLElBQUksT0FBTyxDQUFDLFVBQUEsT0FBTztZQUN0QixLQUFJLENBQUMsU0FBUztpQkFDVCxRQUFRLENBQUMsT0FBTyxDQUFDO2lCQUNqQixJQUFJLENBQUMsVUFBQSxnQkFBZ0I7Z0JBRWxCLEVBQUUsQ0FBQyxDQUFDLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxDQUFDO29CQUMxQixPQUFPLENBQUMsZ0JBQWdCLENB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UUFDWCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFDTCxxQkFBQztBQUFELENBQUMsQUE5R0QsSUE4R0M7QUE5R0Q7Z0NBOEdDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vdHlwaW5ncy9pbmRleC5kLnRzXCIgLz5cclxuXHJcbmltcG9ydCBXZWJTaG9wVmFsaWRhdG9yIGZyb20gXCIuL3dlYi1zaG9wLXZhbGlkYXRvclwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgV2ViU2hvcFNlcnZpY2Uge1xyXG5cclxuICAgIHByaXZhdGUgdmFsaWRhdG9yID0gbmV3IFdlYlNob3BWYWxpZGF0b3IoKTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHN0b3JhZ2U6IFdlYlNob3BzLklXZWJTaG9wU3RvcmFnZSkge1xyXG4gICAgICAgIGlmICghc3RvcmFnZSlcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwic3RvcmFnZSBpcyB1bmRlZmluZWRcIik7XHJcbiAgICB9XHJcblxyXG4gICAgYWxsKCk6IFByb21pc2U8QXBpLldlYlNob3BbXT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnN0b3JhZ2UuYWxsKCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25lKHdlYlNob3BJZDogc3RyaW5nKTogUHJvbWlzZTxBcGkuV2ViU2hvcD4ge1xyXG4gICAgICAgIGlmICghd2ViU2hvcElkKVxyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJ3ZWJTaG9wSWQgaXMgdW5kZWZpbmVkXCIpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLnN0b3JhZ2Uub25lKHdlYlNob3BJZCk7XHJcbiAgICB9XHJcblxyXG4gICAgc2F2ZSh3ZWJTaG9wOiBBcGkuV2ViU2hvcCk6IFByb21pc2U8QXBpLldlYlNob3AgfCBBcGkuVmFsaWRhdGlvblJlc3VsdD4ge1xyXG4gICAgICAgIGlmICghd2ViU2hvcClcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwid2ViU2hvcCBpcyB1bmRlZmluZWRcIik7XHJcblxyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcclxuICAgICAgICAgICAgdGhpcy52YWxpZGF0b3JcclxuICAgICAgICAgICAgICAgIC52YWxpZGF0ZSh3ZWJTaG9wKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4odmFsaWRhdGlvblJlc3VsdCA9PiB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghdmFsaWRhdGlvblJlc3VsdC5pc1ZhbGlkKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHZhbGlkYXRpb25SZXN1bHQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdG9yYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuc2F2ZSh3ZWJTaG9wKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4oKCkgPT4gdGhpcy5vbmUod2ViU2hvcC5pZCkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAudGhlbihlbnRpdHkgPT4gcmVzb2x2ZShlbnRpdHkpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZXJyb3JSZXN1bHQ6IEFwaS5WYWxpZGF0aW9uUmVzdWx0ID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc1ZhbGlkOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JDb3VudDogMSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JzOiBbe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyYW1ldGVyOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBlcnJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfV1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKGVycm9yUmVzdWx0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5jYXRjaCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZXJyb3JSZXN1bHQ6IEFwaS5WYWxpZGF0aW9uUmVzdWx0ID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpc1ZhbGlkOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JDb3VudDogMSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JzOiBbe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyYW1ldGVyOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIlZhbGlkYXRpb24gZmFpbGVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgfV1cclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKGVycm9yUmVzdWx0KTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1dCh3ZWJTaG9wOiBBcGkuV2ViU2hvcCk6IFByb21pc2U8QXBpLldlYlNob3AgfCBBcGkuVmFsaWRhdGlvblJlc3VsdD4ge1xyXG4gICAgICAgIGlmICghd2ViU2hvcClcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwid2ViU2hvcCBpcyB1bmRlZmluZWRcIik7XHJcblxyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcclxuICAgICAgICAgICAgdGhpcy52YWxpZGF0b3JcclxuICAgICAgICAgICAgICAgIC52YWxpZGF0ZSh3ZWJTaG9wKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4odmFsaWRhdGlvblJlc3VsdCA9PiB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghdmFsaWRhdGlvblJlc3VsdC5pc1ZhbGlkKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHZhbGlkYXRpb25SZXN1bHQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdG9yYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAucHV0KHdlYlNob3ApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAudGhlbigoKSA9PiB0aGlzLm9uZSh3ZWJTaG9wLmlkKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKGVudGl0eSA9PiByZXNvbHZlKGVudGl0eSkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBlcnJvclJlc3VsdDogQXBpLlZhbGlkYXRpb25SZXN1bHQgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzVmFsaWQ6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvckNvdW50OiAxLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcnM6IFt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJhbWV0ZXI6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGVyclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoZXJyb3JSZXN1bHQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLmNhdGNoKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBlcnJvclJlc3VsdDogQXBpLlZhbGlkYXRpb25SZXN1bHQgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzVmFsaWQ6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvckNvdW50OiAxLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvcnM6IFt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJhbWV0ZXI6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwiVmFsaWRhdGlvbiBmYWlsZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XVxyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoZXJyb3JSZXN1bHQpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn0iXX0=

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	/// <reference path="../../typings/index.d.ts" />
	"use strict";
	var validator = __webpack_require__(23);
	var WebShopValidator = (function () {
	    function WebShopValidator() {
	        this.deliveryMethodValidator = validator.isAnyObject()
	            .withRequired("deliveryMethod", validator.isString())
	            .withRequired("price", validator.isNumber({ min: 0 }));
	        this.webShopValidator = validator.isAnyObject()
	            .withRequired("title", validator.isString());
	    }
	    WebShopValidator.prototype.validate = function (webShop) {
	        var _this = this;
	        if (!webShop)
	            throw new Error("webShop is undefined");
	        return new Promise(function (resolve) {
	            validator.run(_this.webShopValidator, webShop, function (errorCount, errors) {
	                resolve({
	                    isValid: errorCount === 0,
	                    errorCount: errorCount,
	                    errors: errors
	                });
	            });
	        });
	    };
	    return WebShopValidator;
	}());
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = WebShopValidator;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2ViLXNob3AtdmFsaWRhdG9yLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsid2ViLXNob3AtdmFsaWRhdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGlEQUFpRDs7QUFFakQsSUFBWSxTQUFTLFdBQU0sZ0JBQWdCLENBQUMsQ0FBQTtBQUU1QztJQUlJO1FBQ0ksSUFBSSxDQUFDLHVCQUF1QixHQUFHLFNBQVMsQ0FBQyxXQUFXLEVBQUU7YUFDakQsWUFBWSxDQUFDLGdCQUFnQixFQUFFLFNBQVMsQ0FBQyxRQUFRLEVBQUUsQ0FBQzthQUNwRCxZQUFZLENBQUMsT0FBTyxFQUFFLFNBQVMsQ0FBQyxRQUFRLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBRzNELElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxTQUFTLENBQUMsV0FBVyxFQUFFO2FBQzFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsU0FBUyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7SUFDckQsQ0FBQztJQUVELG1DQUFRLEdBQVIsVUFBUyxPQUFvQjtRQUE3QixpQkFlQztRQWRHLEVBQUUsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDO1lBQ1QsTUFBTSxJQUFJLEtBQUssQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO1FBRTVDLE1BQU0sQ0FBQyxJQUFJLE9BQU8sQ0FBQyxVQUFBLE9BQU87WUFDdEIsU0FBUyxDQUFDLEdBQUcsQ0FBQyxLQUFJLENBQUMsZ0JBQWdCLEVBQy9CLE9BQU8sRUFDUCxVQUFDLFVBQVUsRUFBRSxNQUFNO2dCQUNmLE9BQU8sQ0FBQztvQkFDSixPQUFPLEVBQUUsVUFBVSxLQUFLLENBQUM7b0JBQ3pCLFVBQVUsRUFBRSxVQUFVO29CQUN0QixNQUFNLEVBQUUsTUFBTTtpQkFDakIsQ0FBQyxDQUFDO1lBQ1AsQ0FBQyxDQUFDLENBQUM7UUFDWCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFDTCx1QkFBQztBQUFELENBQUMsQUE5QkQsSUE4QkM7QUE5QkQ7a0NBOEJDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vdHlwaW5ncy9pbmRleC5kLnRzXCIgLz5cclxuXHJcbmltcG9ydCAqIGFzIHZhbGlkYXRvciBmcm9tIFwibm9kZS12YWxpZGF0b3JcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFdlYlNob3BWYWxpZGF0b3Ige1xyXG4gICAgcHJpdmF0ZSB3ZWJTaG9wVmFsaWRhdG9yOiB2YWxpZGF0b3IuVmFsaWRhdGFibGU7XHJcbiAgICBwcml2YXRlIGRlbGl2ZXJ5TWV0aG9kVmFsaWRhdG9yOiB2YWxpZGF0b3IuVmFsaWRhdGFibGU7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5kZWxpdmVyeU1ldGhvZFZhbGlkYXRvciA9IHZhbGlkYXRvci5pc0FueU9iamVjdCgpXHJcbiAgICAgICAgICAgIC53aXRoUmVxdWlyZWQoXCJkZWxpdmVyeU1ldGhvZFwiLCB2YWxpZGF0b3IuaXNTdHJpbmcoKSlcclxuICAgICAgICAgICAgLndpdGhSZXF1aXJlZChcInByaWNlXCIsIHZhbGlkYXRvci5pc051bWJlcih7IG1pbjogMCB9KSk7XHJcblxyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMud2ViU2hvcFZhbGlkYXRvciA9IHZhbGlkYXRvci5pc0FueU9iamVjdCgpXHJcbiAgICAgICAgICAgIC53aXRoUmVxdWlyZWQoXCJ0aXRsZVwiLCB2YWxpZGF0b3IuaXNTdHJpbmcoKSk7XHJcbiAgICB9XHJcblxyXG4gICAgdmFsaWRhdGUod2ViU2hvcDogQXBpLldlYlNob3ApOiBQcm9taXNlPEFwaS5WYWxpZGF0aW9uUmVzdWx0PiB7XHJcbiAgICAgICAgaWYgKCF3ZWJTaG9wKVxyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJ3ZWJTaG9wIGlzIHVuZGVmaW5lZFwiKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xyXG4gICAgICAgICAgICB2YWxpZGF0b3IucnVuKHRoaXMud2ViU2hvcFZhbGlkYXRvcixcclxuICAgICAgICAgICAgICAgIHdlYlNob3AsXHJcbiAgICAgICAgICAgICAgICAoZXJyb3JDb3VudCwgZXJyb3JzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzVmFsaWQ6IGVycm9yQ291bnQgPT09IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yQ291bnQ6IGVycm9yQ291bnQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yczogZXJyb3JzXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufSJdfQ==

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	/// <reference path="typings/index.d.ts"/>
	"use strict";
	var config_1 = __webpack_require__(5);
	var db_1 = __webpack_require__(8);
	var mongo_web_shop_storage_1 = __webpack_require__(25);
	var web_shop_service_1 = __webpack_require__(26);
	var mongo_product_storage_1 = __webpack_require__(18);
	var product_service_1 = __webpack_require__(19);
	var scrape_service_1 = __webpack_require__(29);
	var scrape_queue_service_1 = __webpack_require__(35);
	var scrape_scheduler_service_1 = __webpack_require__(37);
	var event_bus_1 = __webpack_require__(20);
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
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	/// <reference path="../../typings/index.d.ts" />
	"use strict";
	var jsdom_scraper_1 = __webpack_require__(30);
	var event_bus_1 = __webpack_require__(20);
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
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/// <reference path="../typings/index.d.ts" />
	__webpack_require__(31);
	var jsdom = __webpack_require__(32);
	var value_parser_1 = __webpack_require__(33);
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
	            pageUrl: document.location.href
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianNkb20tc2NyYXBlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImpzZG9tLXNjcmFwZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLDhDQUE4QztBQUM5QyxPQUFPLENBQUMsZUFBZSxDQUFDLENBQUM7QUFFekIsSUFBWSxLQUFLLFdBQU0sT0FBTyxDQUFDLENBQUE7QUFDL0IsNkJBQTRCLGdCQUFnQixDQUFDLENBQUE7QUFFN0M7SUFBQTtRQUNZLGdCQUFXLEdBQUcsSUFBSSxzQkFBZSxFQUFFLENBQUM7SUF5SWhELENBQUM7SUF2SUcsNkJBQU0sR0FBTixVQUFPLEdBQVcsRUFBRSxNQUE0QjtRQUFoRCxpQkE4Q0M7UUE3Q0csRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUM7WUFDTCxNQUFNLElBQUksS0FBSyxDQUFDLGtCQUFrQixDQUFDLENBQUM7UUFDeEMsRUFBRSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUM7WUFDUixNQUFNLElBQUksS0FBSyxDQUFDLHNCQUFzQixDQUFDLENBQUM7UUFDNUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLE1BQU0sQ0FBQztZQUM1QixNQUFNLElBQUksS0FBSyxDQUFDLHNCQUFzQixDQUFDLENBQUM7UUFFNUMsSUFBTSxNQUFNLEdBQW1DO1lBQzNDLFlBQVksRUFBRSxLQUFLO1lBQ25CLEtBQUssRUFBRSxJQUFJO1lBQ1gsTUFBTSxFQUFFLEVBQUU7U0FDYixDQUFDO1FBQ0YsbUhBQW1IO1FBQ25ILE1BQU0sQ0FBQyxJQUFJLE9BQU8sQ0FBQyxVQUFBLE9BQU87WUFDdEIsS0FBSyxDQUFDLEdBQUcsQ0FBQztnQkFDTixHQUFHLEVBQUUsR0FBRztnQkFDUixTQUFTLEVBQUUsZ0hBQWdIO2dCQUMzSCxRQUFRLEVBQUU7b0JBQ04sc0JBQXNCLEVBQUUsS0FBSztvQkFDN0Isd0JBQXdCLEVBQUUsS0FBSztpQkFDbEM7Z0JBQ0QsSUFBSSxF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b0JBQ3ZFLEVBQUUsQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQzt3QkFDckIsTUFBTSxJQUFJLEtBQUssQ0FBQyxlQUFlLENBQUMsQ0FBQztvQkFFckMsSUFBTSxJQUFJLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxTQUFTLENBQUM7b0JBRXRELElBQU0sS0FBSyxHQUFHLElBQUksTUFBTSxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUM7b0JBRXJELElBQU0sT0FBTyxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ2pDLEVBQUUsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQzt3QkFDaEIsTUFBTSxJQUFJLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO29CQUV4QyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUN0QixDQUFDO2dCQUFBLENBQUM7WUFDRjtnQkFDSSxNQUFNLElBQUksS0FBSyxDQUFDLHdCQUF3QixDQUFDLENBQUM7UUFDbEQsQ0FBQztJQUNMLENBQUM7SUFFTywrQ0FBd0IsR0FBaEM7UUFDSSxNQUFNLENBQUM7WUFDSCxLQUFLLEVBQUUsSUFBSTtZQUNYLFlBQVksRUFBRSxJQUFJO1lBQ2xCLEtBQUssRUFBRSxJQUFJO1lBQ1gsUUFBUSxFQUFFLElBQUk7U0FDakIsQ0FBQztJQUNOLENBQUM7SUFDTCxtQkFBQztBQUFELENBQUMsQUExSUQsSUEwSUM7QUExSUQ7OEJBMElDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vdHlwaW5ncy9pbmRleC5kLnRzXCIgLz5cclxucmVxdWlyZShcIi4uL2V4dGVuc2lvbnNcIik7XHJcblxyXG5pbXBvcnQgKiBhcyBqc2RvbSBmcm9tIFwianNkb21cIjtcclxuaW1wb3J0IFZhbHVlUGFyc2VySGFzaCBmcm9tIFwiLi92YWx1ZS1wYXJzZXJcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEpzZG9tU2NyYXBlciBpbXBsZW1lbnRzIFNjcmFwaW5nLklTY3JhcGVyIHtcclxuICAgIHByaXZhdGUgdmFsdWVQYXJzZXIgPSBuZXcgVmFsdWVQYXJzZXJIYXNoKCk7XHJcblxyXG4gICAgc2NyYXBlKHVybDogc3RyaW5nLCB2YWx1ZXM6IEFwaS5TY3JhcGluZ1NldHRpbmdzKTogUHJvbWlzZTxTY3JhcGluZy5XZWJTaG9wU2NyYXBpbmdSZXN1bHQ+IHtcclxuICAgICAgICBpZiAoIXVybClcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwidXJsIGlzIHVuZGVmaW5lZFwiKTtcclxuICAgICAgICBpZiAoIXZhbHVlcylcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwidmFsdWVzIGlzIHVuZGVmaW5lZC5cIik7XHJcbiAgICAgICAgaWYgKCFPYmplY3Qua2V5cyh2YWx1ZXMpLmxlbmd0aClcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTm8gdmFsdWVzIHRvIGV4dHJhY3RcIik7XHJcblxyXG4gICAgICAgIGNvbnN0IHJlc3VsdDogU2NyYXBpbmcuV2ViU2hvcFNjcmFwaW5nUmVzdWx0ID0ge1xyXG4gICAgICAgICAgICBpc1N1Y2Nlc3NmdWw6IGZhbHNlLFxyXG4gICAgICAgICAgICBlcnJvcjogbnVsbCxcclxuICAgICAgICAgICAgdmFsdWVzOiB7fVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgLy8gXCJNb3ppbGxhLzUuMCAoV2luZG93cyBOVCAxMC4wOyBXT1c2NCkgQXBwbGVXZWJLaXQvNTM3LjM2IChLSFRNTCwgbGlrZSBHZWNrbykgQ2hyb21lLzUwLjAuMjY2MS4xMDIgU2FmYXJpLzUzNy4zNlwiXHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xyXG4gICAgICAgICAgICBqc2RvbS5lbnYoe1xyXG4gICAgICAgICAgICAgICAgdXJsOiB1cmwsXHJcbiAgICAgICAgICAgICAgICB1c2VyQWdlbnQ6IFwiTW96aWxsYS81LjAgKFdpbmRvd3MgTlQgMTAuMDsgV09XNjQpIEFwcGxlV2ViS2l0LzUzNy4zNiAoS0hUTUwsIGxpa2UgR2Vja28pIENocm9tZS81MC4wLjI2NjEuMTAyIFNhZmFyaS81MzcuMzZcIixcclxuICAgICAgICAgICAgICAgIGZlYXR1cmVzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgRmV0Y2hFeHRlcm5hbFJlc291cmNlczogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgUHJvY2Vzc0V4dGVybmFsUmVzb3VyY2VzOiBmYWxzZVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGRvbmU6IChlcnIsIHdpbmRvdykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChlcnIgJiYgZXJyLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQuaXNTdWNjZXNzZnVsID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdC5lcnJvciA9IGVycjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVzdWx0KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBPYmplY3Qua2V5cyh2YWx1ZXMpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZm9yRWFjaCh2YWx1ZU5hbWUgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHNldHRpbmdzID0gdmFsdWVzW3ZhbHVlTmFtZV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0LnZhbHVlc1t2YWx1ZU5hbWVdID0gdGhpcy5zY3JhcGVWYWx1ZSh3aW5kb3cuZG9jdW1lbnQsIHNldHRpbmdzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0LmlzU3VjY2Vzc2Z1bCA9IE9iamVjdC5rZXlzKHJlc3VsdC52YWx1ZXMpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAubWFwKHZhbHVlTmFtZSA9PiByZXN1bHQudmFsdWVzW3ZhbHVlTmFtZV0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZXZlcnkodiA9PiB2LmlzU3VjY2Vzc2Z1bCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3VsdCk7ICBcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc2NyYXBlVmFsdWUoZG9jdW1lbnQ6IERvY3VtZW50LCB2YWx1ZVNjcmFwaW5nU2V0dGluZ3M6IEFwaS5WYWx1ZVNjcmFwaW5nU2V0dGluZ3NbXSk6IFNjcmFwaW5nLlZhbHVlU2NyYXBpbmdSZXN1bHQge1xyXG4gICAgICAgIGlmICghZG9jdW1lbnQpXHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcImRvY3VtZW50IGlzIHVuZGVmaW5lZFwiKTtcclxuICAgICAgICBpZiAoIXZhbHVlU2NyYXBpbmdTZXR0aW5ncylcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwidmFsdWVTY3JhcGluZ1NldHRpbmdzIGlzIHVuZGVmaW5lZFwiKTtcclxuXHJcbiAgICAgICAgY29uc3QgcGFyc2luZ0NvbnRleHQ6IFNjcmFwaW5nLlBhcnNlckNvbnRleHQgPSB7XHJcbiAgICAgICAgICAgIHBhZ2VVcmw6IGRvY3VtZW50LmxvY2F0aW9uLmhyZWZcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBjb25zdCByZXN1bHQgPSB0aGlzLmVtcHR5VmFsdWVTY3JhcGluZ1Jlc3VsdCgpO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBzY3JhcGluZ1NldHRpbmcgb2YgdmFsdWVTY3JhcGluZ1NldHRpbmdzKSB7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCByYXdWYWx1ZSA9IHRoaXMuZXh0cmFjdFJhd1ZhbHVlRnJvbURvY3VtZW50KGRvY3VtZW50LCBzY3JhcGluZ1NldHRpbmcpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcGFyc2VkVmFsdWUgPSB0aGlzLnZhbHVlUGFyc2VyW3NjcmFwaW5nU2V0dGluZy50eXBlXShyYXdWYWx1ZSwgcGFyc2luZ0NvbnRleHQpO1xyXG5cclxuICAgICAgICAgICAgICAgIHJlc3VsdC5pc1N1Y2Nlc3NmdWwgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0LmVycm9yID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIHJlc3VsdC5zZXR0aW5ncyA9IHNjcmFwaW5nU2V0dGluZztcclxuICAgICAgICAgICAgICAgIHJlc3VsdC52YWx1ZSA9IHBhcnNlZFZhbHVlO1xyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICByZXN1bHQuaXNTdWNjZXNzZnVsID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICByZXN1bHQuZXJyb3IgPSBlcnJvcjtcclxuICAgICAgICAgICAgICAgIHJlc3VsdC5zZXR0aW5ncyA9IHNjcmFwaW5nU2V0dGluZztcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoc2NyYXBpbmdTZXR0aW5nLmZhaWxPbkVycm9yKVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBleHRyYWN0UmF3VmFsdWVGcm9tRG9jdW1lbnQoZG9jdW1lbnQ6IERvY3VtZW50LCB2YWx1ZVNjcmFwaW5nU2V0dGluZzogQXBpLlZhbHVlU2NyYXBpbmdTZXR0aW5ncyk6IHN0cmluZyB7XHJcbiAgICAgICAgY29uc3QgZXh0cmFjdE1ldGhvZCA9IHZhbHVlU2NyYXBpbmdTZXR0aW5nLmV4dHJhY3QgfHwgXCJxdWVyeXNlbGVjdG9yXCI7XHJcblxyXG4gICAgICAgIHN3aXRjaCAoZXh0cmFjdE1ldGhvZCkge1xyXG4gICAgICAgICAgICBjYXNlIFwicXVlcnlzZWxlY3RvclwiOlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBxdWVyeVNlbGVjdG9yU2V0dGluZ3MgPSB2YWx1ZVNjcmFwaW5nU2V0dGluZyBhcyBBcGkuUXVlcnlTZWxlY3RvckV4dHJhY3RTZXR0aW5ncztcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoIXF1ZXJ5U2VsZWN0b3JTZXR0aW5ncy5lbGVtZW50U2VsZWN0b3IpXHJcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBlbGVtZW50U2VsZWN0b3IgaXMgbWlzc2luZ2ApO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IGVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChxdWVyeVNlbGVjdG9yU2V0dGluZ3MuZWxlbWVudFNlbGVjdG9yKTtcclxuICAgICAgICAgICAgICAgIGlmIChlbGVtZW50cy5sZW5ndGggPT09IDApXHJcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBFbGVtZW50IHdpdGggc2VsZWN0b3IgJHtxdWVyeVNlbGVjdG9yU2V0dGluZ3MuZWxlbWVudFNlbGVjdG9yfSBpcyBtaXNzaW5nYCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoZWxlbWVudHMubGVuZ3RoID4gMSlcclxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZXJlIGFyZSBtb3JlIHRoYW4gb25lIGVsZW1lbnQgd2l0aCBzZWxlY3RvciAke3F1ZXJ5U2VsZWN0b3JTZXR0aW5ncy5lbGVtZW50U2VsZWN0b3J9YCk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHF1ZXJ5U2VsZWN0b3JTZXR0aW5ncy5hdHRyaWJ1dGUpXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnRzWzBdLmdldEF0dHJpYnV0ZShxdWVyeVNlbGVjdG9yU2V0dGluZ3MuYXR0cmlidXRlKTtcclxuICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZWxlbWVudHNbMF0udGV4dENvbnRlbnQ7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGNhc2UgXCJyZWdleFwiOlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCByZWdleFNldHRpbmdzID0gdmFsdWVTY3JhcGluZ1NldHRpbmcgYXMgQXBpLlJlZ2V4RXh0cmFjdFNldHRpbmdzO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFyZWdleFNldHRpbmdzLnJlZ2V4KVxyXG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcInJlZ2V4IG1pc3NpbmdcIik7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgdGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJodG1sXCIpLmlubmVySFRNTDtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCByZWdleCA9IG5ldyBSZWdFeHAocmVnZXhTZXR0aW5ncy5yZWdleCwgXCJnbWlcIik7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgbWF0Y2hlcyA9IHJlZ2V4LmV4ZWModGV4dCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoIW1hdGNoZXMubGVuZ3RoKVxyXG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIk5vIHZhbHVlIG1hdGNoZXNcIik7XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG1hdGNoZXNbMV07XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJVbmtub3duIGV4dHJhY3QgbWV0aG9kXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGVtcHR5VmFsdWVTY3JhcGluZ1Jlc3VsdCgpOiBTY3JhcGluZy5WYWx1ZVNjcmFwaW5nUmVzdWx0IHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICB2YWx1ZTogbnVsbCxcclxuICAgICAgICAgICAgaXNTdWNjZXNzZnVsOiB0cnVlLFxyXG4gICAgICAgICAgICBlcnJvcjogbnVsbCxcclxuICAgICAgICAgICAgc2V0dGluZ3M6IG51bGxcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG59Il19

/***/ },
/* 31 */
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
/* 32 */
/***/ function(module, exports) {

	module.exports = require("jsdom");

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/// <reference path="../typings/index.d.ts"/>
	var path = __webpack_require__(34);
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
	        return path.posix.join(context.pageUrl, input).replace(":/", "://");
	    };
	    return ValueParserHash;
	}());
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = ValueParserHash;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsdWUtcGFyc2VyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidmFsdWUtcGFyc2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSw2Q0FBNkM7QUFDN0MsSUFBWSxJQUFJLFdBQU0sTUFBTSxDQUFDLENBQUE7QUFFN0I7SUFHSTtRQUZBLFlBQU8sR0FBRyxFQUFFLENBQUM7UUFHVCxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDckMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3pDLENBQUM7SUFFRCxnQ0FBTSxHQUFOLFVBQU8sS0FBYTtRQUNoQixNQUFNLENBQUMsQ0FBQyxLQUFLLElBQUksRUFBRSxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDaEMsQ0FBQztJQUVELGdDQUFNLEdBQU4sVUFBTyxLQUFhO1FBQ2hCLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO1lBQ1AsTUFBTSxJQUFJLEtBQUssQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO1FBRTFDLElBQU0sR0FBRyxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBRTNDLElBQU0sTUFBTSxHQUFHLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUUvQixFQUFFLENBQUMsQ0FBQyxNQUFNLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDekIsTUFBTSxDQUFDLE1BQU0sQ0FBQztRQUVsQixNQUFNLElBQUksS0FBSyxDQUFDLDZCQUE2QixDQUFDLENBQUM7SUFDbkQsQ0FBQztJQUVELHFDQUFXLEdBQVgsVUFBWSxLQUFhLEVBQUUsT0FBK0I7UUFDdEQsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQztJQUN4RSxDQUFDO0lBQ0wsc0JBQUM7QUFBRCxDQUFDLEFBN0JELElBNkJDO0FBN0JEO2lDQTZCQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL3R5cGluZ3MvaW5kZXguZC50c1wiLz5cclxuaW1wb3J0ICogYXMgcGF0aCBmcm9tIFwicGF0aFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmFsdWVQYXJzZXJIYXNoIHtcclxuICAgIHBhcnNlcnMgPSB7fTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLnBhcnNlcnNbXCJzdHJpbmdcIl0gPSB0aGlzLnN0cmluZztcclxuICAgICAgICB0aGlzLnBhcnNlcnNbXCJudW1iZXJcIl0gPSB0aGlzLm51bWJlcjtcclxuICAgIH1cclxuXHJcbiAgICBzdHJpbmcoaW5wdXQ6IHN0cmluZyk6IGFueSB7XHJcbiAgICAgICAgcmV0dXJuIChpbnB1dCB8fCBcIlwiKS50cmltKCk7XHJcbiAgICB9XHJcblxyXG4gICAgbnVtYmVyKGlucHV0OiBzdHJpbmcpOiBhbnkge1xyXG4gICAgICAgIGlmICghaW5wdXQpXHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIk51bWJlciBpcyBtaXNzaW5nLlwiKTtcclxuXHJcbiAgICAgICAgY29uc3Qgc3JjID0gaW5wdXQucmVwbGFjZSgvW14wLTlcXC5dL2csIFwiXCIpO1xyXG5cclxuICAgICAgICBjb25zdCBudW1iZXIgPSBwYXJzZUZsb2F0KHNyYyk7XHJcblxyXG4gICAgICAgIGlmIChudW1iZXIgJiYgIWlzTmFOKG51bWJlcikpXHJcbiAgICAgICAgICAgIHJldHVybiBudW1iZXI7XHJcblxyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIk51bWJlciBmb3JtYXQgaXMgbm90IHZhbGlkLlwiKTtcclxuICAgIH1cclxuXHJcbiAgICByZWxhdGl2ZVVybChpbnB1dDogc3RyaW5nLCBjb250ZXh0OiBTY3JhcGluZy5QYXJzZXJDb250ZXh0KSB7XHJcbiAgICAgICAgcmV0dXJuIHBhdGgucG9zaXguam9pbihjb250ZXh0LnBhZ2VVcmwsIGlucHV0KS5yZXBsYWNlKFwiOi9cIiwgXCI6Ly9cIik7XHJcbiAgICB9XHJcbn0iXX0=

/***/ },
/* 34 */
/***/ function(module, exports) {

	module.exports = require("path");

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	/// <reference path="../../typings/index.d.ts"/>
	"use strict";
	var async = __webpack_require__(36);
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
/* 36 */
/***/ function(module, exports) {

	module.exports = require("async");

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	/// <reference path="../../typings/index.d.ts" />
	"use strict";
	var schedule = __webpack_require__(38);
	var uuid = __webpack_require__(12);
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
/* 38 */
/***/ function(module, exports) {

	module.exports = require("node-schedule");

/***/ }
/******/ ]);
//# sourceMappingURL=app.js.map