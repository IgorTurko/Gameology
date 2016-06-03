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
	/// <reference path="./typings/index.d.ts"/>
	__webpack_require__(1);
	var express = __webpack_require__(2);
	var bodyparser = __webpack_require__(3);
	var cookieparser = __webpack_require__(4);
	var config_1 = __webpack_require__(5);
	var authentication_route_1 = __webpack_require__(7);
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSw0Q0FBNEM7QUFDNUMsT0FBTyxDQUFDLDBCQUEwQixDQUFDLENBQUM7QUFHcEMsSUFBWSxPQUFPLFdBQU8sU0FBUyxDQUFDLENBQUE7QUFFcEMsSUFBWSxVQUFVLFdBQU0sYUFBYSxDQUFDLENBQUE7QUFDMUMsSUFBWSxZQUFZLFdBQU0sZUFBZSxDQUFDLENBQUE7QUFFOUMsdUJBQW1CLFVBQVUsQ0FBQyxDQUFBO0FBQzlCLHFDQUFpQywrQkFBK0IsQ0FBQyxDQUFBO0FBRWpFLElBQUksTUFBTSxHQUFHLE9BQU8sRUFBRSxDQUFDO0FBRXZCLE1BQU0sQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLENBQUMsQ0FBQztBQUMzQixNQUFNLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxVQUFVLEVBQUUsQ0FBQyxDQUFDO0FBQ2pDLE1BQU0sQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLDhCQUFvQixDQUFDLENBQUM7QUFHekMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsT0FBTyxDQUFDLE1BQU0sQ0FBQyxjQUFjLEVBQUU7SUFDM0MsS0FBSyxFQUFFLFlBQVk7Q0FDdEIsQ0FBQyxDQUFDLENBQUM7QUFFSixJQUFNLElBQUksR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksSUFBSSxnQkFBTSxDQUFDLFlBQVksQ0FBQztBQUNyRCxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRTtJQUNoQixPQUFPLENBQUMsR0FBRyxDQUFDLDRDQUEwQyxJQUFJLE1BQUcsQ0FBQyxDQUFDO0FBQ25FLENBQUMsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4vdHlwaW5ncy9pbmRleC5kLnRzXCIvPlxyXG5yZXF1aXJlKFwiLi91dGlscy9hcnJheS1leHRlbnNpb25zXCIpO1xyXG5cclxuaW1wb3J0ICogYXMgaHR0cCAgZnJvbSBcImh0dHBcIjtcclxuaW1wb3J0ICogYXMgZXhwcmVzcyAgZnJvbSBcImV4cHJlc3NcIjtcclxuXHJcbmltcG9ydCAqIGFzIGJvZHlwYXJzZXIgZnJvbSBcImJvZHktcGFyc2VyXCI7XHJcbmltcG9ydCAqIGFzIGNvb2tpZXBhcnNlciBmcm9tIFwiY29va2llLXBhcnNlclwiO1xyXG5cclxuaW1wb3J0IGNvbmZpZyBmcm9tIFwiLi9jb25maWdcIjtcclxuaW1wb3J0IGF1dGhlbnRpY2F0aW9uUm91dGVyIGZyb20gXCIuL3JvdXRlcy9hdXRoZW50aWNhdGlvbi1yb3V0ZVwiO1xyXG5cclxubGV0IHNlcnZlciA9IGV4cHJlc3MoKTtcclxuXHJcbnNlcnZlci51c2UoY29va2llcGFyc2VyKCkpO1xyXG5zZXJ2ZXIudXNlKFwiL2FwaVwiLCBib2R5cGFyc2VyKCkpO1xyXG5zZXJ2ZXIudXNlKFwiL2FwaVwiLCBhdXRoZW50aWNhdGlvblJvdXRlcik7XHJcblxyXG5cclxuc2VydmVyLnVzZShcIi9cIiwgZXhwcmVzcy5zdGF0aWMoXCIuL291dC9jbGllbnRcIiwge1xyXG4gICAgaW5kZXg6IFwiaW5kZXguaHRtbFwiXHJcbn0pKTtcclxuXHJcbmNvbnN0IHBvcnQgPSBwcm9jZXNzLmVudi5QT1JUIHx8IGNvbmZpZy5mYWxsYmFja1BvcnQ7XHJcbnNlcnZlci5saXN0ZW4ocG9ydCwgKCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coYFdlYiBzZXJ2ZXIgc3RhcnRlZCBhdCBodHRwOi8vbG9jYWxob3N0OiR7cG9ydH0vYCk7XHJcbn0pOyJdfQ==

/***/ },
/* 1 */
/***/ function(module, exports) {

	/// <reference path="../typings/index.d.ts" />
	Array.prototype.toHash = function toHash(keySelector, valueSelector) {
	    valueSelector = valueSelector || (function (e) { return (e); });
	    return this.reduce(function (hash, elem) {
	        var key = keySelector(elem);
	        var value = valueSelector(elem);
	        hash[key] = value;
	        return hash;
	    }, {});
	};
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXJyYXktZXh0ZW5zaW9ucy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFycmF5LWV4dGVuc2lvbnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsOENBQThDO0FBRTlDLEtBQUssQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLGdCQUFzQixXQUFnQyxFQUFFLGFBQThCO0lBQzNHLGFBQWEsR0FBRyxhQUFhLElBQUksQ0FBQyxVQUFDLENBQUksSUFBSyxPQUFBLENBQUUsQ0FBYyxDQUFDLEVBQWpCLENBQWlCLENBQUMsQ0FBQztJQUUvRCxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFDLElBQUksRUFBRSxJQUFJO1FBQzFCLElBQU0sR0FBRyxHQUFHLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM5QixJQUFNLEtBQUssR0FBRyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFbEMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEtBQUssQ0FBQztRQUVsQixNQUFNLENBQUMsSUFBSSxDQUFDO0lBQ2hCLENBQUMsRUFDRyxFQUFFLENBQTBCLENBQUM7QUFDckMsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL3R5cGluZ3MvaW5kZXguZC50c1wiIC8+XHJcblxyXG5BcnJheS5wcm90b3R5cGUudG9IYXNoID0gZnVuY3Rpb24gdG9IYXNoPFQsIEs+KGtleVNlbGVjdG9yOiAoZWxlbTogVCkgPT4gc3RyaW5nLCB2YWx1ZVNlbGVjdG9yPzogKGVsZW06IFQpID0+IEspOiB7IFtrZXk6IHN0cmluZ106IEs7IH0ge1xyXG4gICAgdmFsdWVTZWxlY3RvciA9IHZhbHVlU2VsZWN0b3IgfHwgKChlOiBUKSA9PiAoKGUgYXMgYW55KSBhcyBLKSk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXMucmVkdWNlKChoYXNoLCBlbGVtKSA9PiB7XHJcbiAgICAgICAgY29uc3Qga2V5ID0ga2V5U2VsZWN0b3IoZWxlbSk7XHJcbiAgICAgICAgY29uc3QgdmFsdWUgPSB2YWx1ZVNlbGVjdG9yKGVsZW0pO1xyXG5cclxuICAgICAgICBoYXNoW2tleV0gPSB2YWx1ZTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGhhc2g7XHJcbiAgICB9LFxyXG4gICAgICAgIHt9KSBhcyB7IFtrZXk6IHN0cmluZ106IEs7IH07XHJcbn07Il19

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
	/// <reference path="../typings/index.d.ts" />
	var express = __webpack_require__(2);
	var db_1 = __webpack_require__(8);
	var mongo_authentication_token_storage_1 = __webpack_require__(10);
	var authentication_token_provider_1 = __webpack_require__(11);
	var authentication_middleware_1 = __webpack_require__(14);
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aGVudGljYXRpb24tcm91dGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhdXRoZW50aWNhdGlvbi1yb3V0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsOENBQThDO0FBQzlDLElBQVksT0FBTyxXQUFNLFNBQVMsQ0FBQyxDQUFBO0FBRW5DLG1CQUFlLG1CQUFtQixDQUFDLENBQUE7QUFDbkMsbURBQTRDLCtEQUErRCxDQUFDLENBQUE7QUFFNUcsOENBQXdDLDBEQUEwRCxDQUFDLENBQUE7QUFDbkcsMENBQXFDLGtDQUFrQyxDQUFDLENBQUE7QUFFeEUsSUFBTSxFQUFFLEdBQUcsSUFBSSxZQUFFLEVBQUUsQ0FBQztBQUVwQixJQUFNLFlBQVksR0FBRyxJQUFJLDRDQUErQixDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBQzdELGlFQUFpRTtBQUNqRSxJQUFNLGFBQWEsR0FBRyxJQUFJLHVDQUEyQixDQUFDLFlBQVksQ0FBQyxDQUFDO0FBQ3BFLElBQU0sd0JBQXdCLEdBQUcsSUFBSSxtQ0FBd0IsQ0FBQyxhQUFhLENBQUMsQ0FBQztBQUU3RSxJQUFNLE1BQU0sR0FBRyxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUM7QUFFaEMsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQ3BCLFVBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxJQUFJO0lBQ1gsSUFBTSxJQUFJLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQztJQUV0QixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUNiLHdCQUF3QixDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUM7YUFDaEQsSUFBSSxDQUFDO1lBQ0YsR0FBRyxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUM7aUJBQ2QsR0FBRyxFQUFFLENBQUM7UUFDZixDQUFDLENBQUMsQ0FBQztJQUNYLENBQUM7SUFBQyxJQUFJLENBQUMsQ0FBQztRQUNKLEdBQUcsQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDO2FBQ2QsR0FBRyxFQUFFLENBQUM7SUFDZixDQUFDO0FBQ0wsQ0FBQyxDQUFDLENBQUM7QUFFSCxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxVQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsSUFBSSxJQUFLLE9BQUEsd0JBQXdCLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLEVBQTVDLENBQTRDLENBQUMsQ0FBQztBQUVsRjtrQkFBZSxNQUFNLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vdHlwaW5ncy9pbmRleC5kLnRzXCIgLz5cclxuaW1wb3J0ICogYXMgZXhwcmVzcyBmcm9tIFwiZXhwcmVzc1wiO1xyXG5cclxuaW1wb3J0IERiIGZyb20gXCIuLi9kYXRhLWFjY2Vzcy9kYlwiO1xyXG5pbXBvcnQgTW9uZ29BdXRoZW50aWNhdGlvblRva2VuU3RvcmFnZSBmcm9tIFwiLi4vc2VydmljZXMvYXV0aGVudGljYXRpb24vbW9uZ28tYXV0aGVudGljYXRpb24tdG9rZW4tc3RvcmFnZVwiO1xyXG5pbXBvcnQgSW5NZW1vcnlBdXRoZW50aWNhdGlvblRva2VuU3RvcmFnZSBmcm9tIFwiLi4vc2VydmljZXMvYXV0aGVudGljYXRpb24vaW4tbWVtb3J5LWF1dGhlbnRpY2F0aW9uLXRva2VuLXN0b3JhZ2VcIjtcclxuaW1wb3J0IEF1dGhlbnRpY2F0aW9uVG9rZW5Qcm92aWRlciBmcm9tIFwiLi4vc2VydmljZXMvYXV0aGVudGljYXRpb24vYXV0aGVudGljYXRpb24tdG9rZW4tcHJvdmlkZXJcIjtcclxuaW1wb3J0IEF1dGhlbnRpY2F0aW9uTWlkZGxld2FyZSBmcm9tIFwiLi4vd2ViL2F1dGhlbnRpY2F0aW9uLW1pZGRsZXdhcmVcIjtcclxuXHJcbmNvbnN0IGRiID0gbmV3IERiKCk7XHJcblxyXG5jb25zdCB0b2tlblN0b3JhZ2UgPSBuZXcgTW9uZ29BdXRoZW50aWNhdGlvblRva2VuU3RvcmFnZShkYik7XHJcbi8vIGNvbnN0IHRva2VuU3RvcmFnZSA9IG5ldyBJbk1lbW9yeUF1dGhlbnRpY2F0aW9uVG9rZW5TdG9yYWdlKCk7XHJcbmNvbnN0IHRva2VuUHJvdmlkZXIgPSBuZXcgQXV0aGVudGljYXRpb25Ub2tlblByb3ZpZGVyKHRva2VuU3RvcmFnZSk7XHJcbmNvbnN0IGF1dGhlbnRpY2F0aW9uTWlkZGxld2FyZSA9IG5ldyBBdXRoZW50aWNhdGlvbk1pZGRsZXdhcmUodG9rZW5Qcm92aWRlcik7XHJcblxyXG5jb25zdCByb3V0ZXIgPSBleHByZXNzLlJvdXRlcigpO1xyXG5cclxucm91dGVyLnBvc3QoXCIvbG9naW5cIixcclxuKHJlcSwgcmVzLCBuZXh0KSA9PiB7XHJcbiAgICBjb25zdCBpbmZvID0gcmVxLmJvZHk7XHJcblxyXG4gICAgaWYgKGluZm8ubG9naW4pIHtcclxuICAgICAgICBhdXRoZW50aWNhdGlvbk1pZGRsZXdhcmUuc2lnbkluKHJlcSwgcmVzLCBpbmZvLmxvZ2luKVxyXG4gICAgICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXMuc2VuZFN0YXR1cygyMDApXHJcbiAgICAgICAgICAgICAgICAgICAgLmVuZCgpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmVzLnNlbmRTdGF0dXMoNDAwKVxyXG4gICAgICAgICAgICAuZW5kKCk7XHJcbiAgICB9XHJcbn0pO1xyXG5cclxucm91dGVyLnVzZShcIipcIiwgKHJlcywgcmVxLCBuZXh0KSA9PiBhdXRoZW50aWNhdGlvbk1pZGRsZXdhcmUucnVuKHJlcywgcmVxLCBuZXh0KSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCByb3V0ZXI7Il19

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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9uZ28tYXV0aGVudGljYXRpb24tdG9rZW4tc3RvcmFnZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1vbmdvLWF1dGhlbnRpY2F0aW9uLXRva2VuLXN0b3JhZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsaURBQWlEOztBQUVqRCxtQkFBcUIsc0JBQXNCLENBQUMsQ0FBQTtBQUU1QztJQUVJLHlDQUFvQixFQUFZO1FBQVosT0FBRSxHQUFGLEVBQUUsQ0FBVTtRQUM1QixFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztZQUNKLE1BQU0sSUFBSSxLQUFLLENBQUMsaUJBQWlCLENBQUMsQ0FBQztJQUMzQyxDQUFDO0lBRUQsOENBQUksR0FBSixVQUFLLG1CQUEyQjtRQUM1QixFQUFFLENBQUMsQ0FBQyxDQUFDLG1CQUFtQixDQUFDO1lBQ3JCLE1BQU0sSUFBSSxLQUFLLENBQUMsa0NBQWtDLENBQUMsQ0FBQztRQUV4RCxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUU7YUFDVCxVQUFVLENBQUMsWUFBUSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUM7YUFDekMsSUFBSSxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsSUFBSSxPQUFPLENBQUMsVUFBQyxPQUFPLEVBQUUsTUFBTTtZQUNuQyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsS0FBSyxFQUFFLG1CQUFtQixFQUFFLENBQUM7aUJBQ2pDLEtBQUssQ0FBQyxDQUFDLENBQUM7aUJBQ1IsSUFBSSxDQUFDLFVBQUMsR0FBRyxFQUFFLEdBQUc7Z0JBQ1gsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFFakIsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDO29CQUNKLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDaEIsSUFBSTtvQkFDQSxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDckIsQ0FBQyxDQUFDLENBQUM7UUFDWCxDQUFDLENBQUMsRUFYUyxDQVdULENBQUMsQ0FBQztJQUNaLENBQUM7SUFFRCw4Q0FBSSxHQUFKLFVBQUssa0JBQXFEO1FBQ3RELEVBQUUsQ0FBQyxDQUFDLENBQUMsa0JBQWtCLENBQUM7WUFDcEIsTUFBTSxJQUFJLEtBQUssQ0FBQyxpQ0FBaUMsQ0FBQyxDQUFDO1FBRXZELE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRTthQUNULFVBQVUsQ0FBQyxZQUFRLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQzthQUN6QyxJQUFJLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLENBQUMsU0FBUyxDQUNsQjtZQUNJLEtBQUssRUFBRSxrQkFBa0IsQ0FBQyxLQUFLO1NBQ2xDLEVBQ0Qsa0JBQWtCLEVBQ2xCO1lBQ0ksTUFBTSxFQUFFLElBQUk7U0FDZixDQUFDLEVBUEssQ0FPTCxDQUFDO2FBQ04sSUFBSSxDQUFDLFVBQUEsR0FBRztZQUVMLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7WUFFakIsTUFBTSxDQUFDLGtCQUFrQixDQUFDO1FBQzlCLENBQUMsQ0FBQyxDQUFDO0lBQ1gsQ0FBQztJQUVELGdEQUFNLEdBQU4sVUFBTyxtQkFBMkI7UUFDOUIsRUFBRSxDQUFDLENBQUMsQ0FBQyxtQkFBbUIsQ0FBQztZQUNyQixNQUFNLElBQUksS0FBSyxDQUFDLGtDQUFrQyxDQUFDLENBQUM7UUFFeEQsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFO2FBQ1QsVUFBVSxDQUFDLFlBQVEsQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDO2FBQ3pDLElBQUksQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsQ0FBQyxTQUFTLENBQUMsRUFBRSxLQUFLLEVBQUUsbUJBQW1CLEVBQUUsQ0FBQyxFQUEzQyxDQUEyQyxDQUFDLENBQUM7SUFDaEUsQ0FBQztJQUNMLHNDQUFDO0FBQUQsQ0FBQyxBQXpERCxJQXlEQztBQXpERDtpREF5REMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi90eXBpbmdzL2luZGV4LmQudHNcIiAvPlxyXG5cclxuaW1wb3J0IERhdGFiYXNlIGZyb20gXCIuLi8uLi9kYXRhLWFjY2Vzcy9kYlwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTW9uZ29BdXRoZW50aWNhdGlvblRva2VuU3RvcmFnZSBpbXBsZW1lbnRzIEF1dGhlbnRpY2F0aW9uLklBdXRoZW50aWNhdGlvblRva2VuU3RvcmFnZSB7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBkYjogRGF0YWJhc2UpIHtcclxuICAgICAgICBpZiAoIWRiKVxyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJkYiBpcyB1bmRlZmluZWRcIik7XHJcbiAgICB9XHJcblxyXG4gICAgZmluZChhdXRoZW50aWNhdGlvblRva2VuOiBzdHJpbmcpOiBQcm9taXNlPEF1dGhlbnRpY2F0aW9uLkF1dGhlbnRpY2F0aW9uSW5mbz4ge1xyXG4gICAgICAgIGlmICghYXV0aGVudGljYXRpb25Ub2tlbilcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiYXV0aGVudGljYXRpb25Ub2tlbiBpcyB1bmRlZmluZWRcIik7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLmRiXHJcbiAgICAgICAgICAgIC5jb2xsZWN0aW9uKERhdGFiYXNlLkNvbGxlY3Rpb25zLnNlc3Npb25zKVxyXG4gICAgICAgICAgICAudGhlbihjID0+IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgICAgIGMuZmluZCh7IHRva2VuOiBhdXRoZW50aWNhdGlvblRva2VuIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgLmxpbWl0KDEpXHJcbiAgICAgICAgICAgICAgICAgICAgLm5leHQoKGVyciwgZG9jKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZGlyKGRvYyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXJyKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGVycik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoZG9jKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSkpO1xyXG4gICAgfVxyXG5cclxuICAgIHNhdmUoYXV0aGVudGljYXRpb25JbmZvOiBBdXRoZW50aWNhdGlvbi5BdXRoZW50aWNhdGlvbkluZm8pOiBQcm9taXNlPEF1dGhlbnRpY2F0aW9uLkF1dGhlbnRpY2F0aW9uSW5mbz4ge1xyXG4gICAgICAgIGlmICghYXV0aGVudGljYXRpb25JbmZvKVxyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJhdXRoZW50aWNhdGlvbkluZm8gaXMgdW5kZWZpbmVkXCIpO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5kYlxyXG4gICAgICAgICAgICAuY29sbGVjdGlvbihEYXRhYmFzZS5Db2xsZWN0aW9ucy5zZXNzaW9ucylcclxuICAgICAgICAgICAgLnRoZW4oYyA9PiBjLnVwZGF0ZU9uZShcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0b2tlbjogYXV0aGVudGljYXRpb25JbmZvLnRva2VuXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgYXV0aGVudGljYXRpb25JbmZvLFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHVwc2VydDogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgfSkpXHJcbiAgICAgICAgICAgIC50aGVuKHJlcyA9PiB7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5kaXIocmVzKTtcclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYXV0aGVudGljYXRpb25JbmZvO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZW1vdmUoYXV0aGVudGljYXRpb25Ub2tlbjogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcclxuICAgICAgICBpZiAoIWF1dGhlbnRpY2F0aW9uVG9rZW4pXHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcImF1dGhlbnRpY2F0aW9uVG9rZW4gaXMgdW5kZWZpbmVkXCIpO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5kYlxyXG4gICAgICAgICAgICAuY29sbGVjdGlvbihEYXRhYmFzZS5Db2xsZWN0aW9ucy5zZXNzaW9ucylcclxuICAgICAgICAgICAgLnRoZW4oYyA9PiBjLmRlbGV0ZU9uZSh7IHRva2VuOiBhdXRoZW50aWNhdGlvblRva2VuIH0pKTtcclxuICAgIH1cclxufSJdfQ==

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

/***/ }
/******/ ]);
//# sourceMappingURL=app.js.map