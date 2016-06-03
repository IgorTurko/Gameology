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
	var product_route_1 = __webpack_require__(7);
	var server = express();
	server.use(cookieparser());
	server.use("/api", bodyparser());
	// server.use("/api", authenticationRouter);
	server.use("/api/products", product_route_1.default);
	server.use("/", express.static("./out/client", {
	    index: "index.html"
	}));
	var port = process.env.PORT || config_1.default.fallbackPort;
	server.listen(port, function () {
	    console.log("Web server started at http://localhost:" + port + "/");
	});
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSw0Q0FBNEM7QUFDNUMsT0FBTyxDQUFDLDBCQUEwQixDQUFDLENBQUM7QUFHcEMsSUFBWSxPQUFPLFdBQU8sU0FBUyxDQUFDLENBQUE7QUFFcEMsSUFBWSxVQUFVLFdBQU0sYUFBYSxDQUFDLENBQUE7QUFDMUMsSUFBWSxZQUFZLFdBQU0sZUFBZSxDQUFDLENBQUE7QUFFOUMsdUJBQW1CLFVBQVUsQ0FBQyxDQUFBO0FBRzlCLDhCQUEwQix3QkFBd0IsQ0FBQyxDQUFBO0FBRW5ELElBQUksTUFBTSxHQUFHLE9BQU8sRUFBRSxDQUFDO0FBRXZCLE1BQU0sQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLENBQUMsQ0FBQztBQUMzQixNQUFNLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxVQUFVLEVBQUUsQ0FBQyxDQUFDO0FBRWpDLDRDQUE0QztBQUM1QyxNQUFNLENBQUMsR0FBRyxDQUFDLGVBQWUsRUFBRSx1QkFBYSxDQUFDLENBQUM7QUFHM0MsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsT0FBTyxDQUFDLE1BQU0sQ0FBQyxjQUFjLEVBQUU7SUFDM0MsS0FBSyxFQUFFLFlBQVk7Q0FDdEIsQ0FBQyxDQUFDLENBQUM7QUFFSixJQUFNLElBQUksR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksSUFBSSxnQkFBTSxDQUFDLFlBQVksQ0FBQztBQUNyRCxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRTtJQUNoQixPQUFPLENBQUMsR0FBRyxDQUFDLDRDQUEwQyxJQUFJLE1BQUcsQ0FBQyxDQUFDO0FBQ25FLENBQUMsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4vdHlwaW5ncy9pbmRleC5kLnRzXCIvPlxyXG5yZXF1aXJlKFwiLi91dGlscy9hcnJheS1leHRlbnNpb25zXCIpO1xyXG5cclxuaW1wb3J0ICogYXMgaHR0cCAgZnJvbSBcImh0dHBcIjtcclxuaW1wb3J0ICogYXMgZXhwcmVzcyAgZnJvbSBcImV4cHJlc3NcIjtcclxuXHJcbmltcG9ydCAqIGFzIGJvZHlwYXJzZXIgZnJvbSBcImJvZHktcGFyc2VyXCI7XHJcbmltcG9ydCAqIGFzIGNvb2tpZXBhcnNlciBmcm9tIFwiY29va2llLXBhcnNlclwiO1xyXG5cclxuaW1wb3J0IGNvbmZpZyBmcm9tIFwiLi9jb25maWdcIjtcclxuXHJcbmltcG9ydCBhdXRoZW50aWNhdGlvblJvdXRlciBmcm9tIFwiLi9yb3V0ZXMvYXV0aGVudGljYXRpb24tcm91dGVcIjtcclxuaW1wb3J0IHByb2R1Y3RSb3V0ZXIgZnJvbSBcIi4vcm91dGVzL3Byb2R1Y3Qtcm91dGVcIjtcclxuXHJcbmxldCBzZXJ2ZXIgPSBleHByZXNzKCk7XHJcblxyXG5zZXJ2ZXIudXNlKGNvb2tpZXBhcnNlcigpKTtcclxuc2VydmVyLnVzZShcIi9hcGlcIiwgYm9keXBhcnNlcigpKTtcclxuXHJcbi8vIHNlcnZlci51c2UoXCIvYXBpXCIsIGF1dGhlbnRpY2F0aW9uUm91dGVyKTtcclxuc2VydmVyLnVzZShcIi9hcGkvcHJvZHVjdHNcIiwgcHJvZHVjdFJvdXRlcik7XHJcblxyXG5cclxuc2VydmVyLnVzZShcIi9cIiwgZXhwcmVzcy5zdGF0aWMoXCIuL291dC9jbGllbnRcIiwge1xyXG4gICAgaW5kZXg6IFwiaW5kZXguaHRtbFwiXHJcbn0pKTtcclxuXHJcbmNvbnN0IHBvcnQgPSBwcm9jZXNzLmVudi5QT1JUIHx8IGNvbmZpZy5mYWxsYmFja1BvcnQ7XHJcbnNlcnZlci5saXN0ZW4ocG9ydCwgKCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coYFdlYiBzZXJ2ZXIgc3RhcnRlZCBhdCBodHRwOi8vbG9jYWxob3N0OiR7cG9ydH0vYCk7XHJcbn0pOyJdfQ==

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

	/// <reference path="../typings/index.d.ts"/>
	"use strict";
	var express = __webpack_require__(2);
	var db_1 = __webpack_require__(8);
	var mongo_product_storage_1 = __webpack_require__(10);
	var product_service_1 = __webpack_require__(11);
	var db = new db_1.default();
	var productService = new product_service_1.default(new mongo_product_storage_1.default(db));
	var router = express.Router();
	router.get("/", function (req, res) {
	    productService.all()
	        .then(function (products) { return res.json(products); })
	        .catch(function (err) { return res.send(500, err).end(); });
	});
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = router;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1yb3V0ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInByb2R1Y3Qtcm91dGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsNkNBQTZDOztBQUU3QyxJQUFZLE9BQU8sV0FBTSxTQUFTLENBQUMsQ0FBQTtBQUVuQyxtQkFBZSxtQkFBbUIsQ0FBQyxDQUFBO0FBQ25DLHNDQUFnQyw0Q0FBNEMsQ0FBQyxDQUFBO0FBQzdFLGdDQUEyQixzQ0FBc0MsQ0FBQyxDQUFBO0FBRWxFLElBQU0sRUFBRSxHQUFHLElBQUksWUFBRSxFQUFFLENBQUM7QUFFcEIsSUFBTSxjQUFjLEdBQUcsSUFBSSx5QkFBYyxDQUFDLElBQUksK0JBQW1CLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUV2RSxJQUFNLE1BQU0sR0FBRyxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUM7QUFFaEMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsVUFBQyxHQUFHLEVBQUUsR0FBRztJQUNyQixjQUFjLENBQUMsR0FBRyxFQUFFO1NBQ2YsSUFBSSxDQUFDLFVBQUEsUUFBUSxJQUFJLE9BQUEsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBbEIsQ0FBa0IsQ0FBQztTQUNwQyxLQUFLLENBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBeEIsQ0FBd0IsQ0FBQyxDQUFDO0FBQ2hELENBQUMsQ0FBQyxDQUFDO0FBRUg7a0JBQWUsTUFBTSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL3R5cGluZ3MvaW5kZXguZC50c1wiLz5cclxuXHJcbmltcG9ydCAqIGFzIGV4cHJlc3MgZnJvbSBcImV4cHJlc3NcIjtcclxuXHJcbmltcG9ydCBEYiBmcm9tIFwiLi4vZGF0YS1hY2Nlc3MvZGJcIjtcclxuaW1wb3J0IE1vbmdvUHJvZHVjdFN0b3JhZ2UgZnJvbSBcIi4uL3NlcnZpY2VzL3Byb2R1Y3RzL21vbmdvLXByb2R1Y3Qtc3RvcmFnZVwiO1xyXG5pbXBvcnQgUHJvZHVjdFNlcnZpY2UgZnJvbSBcIi4uL3NlcnZpY2VzL3Byb2R1Y3RzL3Byb2R1Y3Qtc2VydmljZVwiO1xyXG5cclxuY29uc3QgZGIgPSBuZXcgRGIoKTtcclxuXHJcbmNvbnN0IHByb2R1Y3RTZXJ2aWNlID0gbmV3IFByb2R1Y3RTZXJ2aWNlKG5ldyBNb25nb1Byb2R1Y3RTdG9yYWdlKGRiKSk7IFxyXG5cclxuY29uc3Qgcm91dGVyID0gZXhwcmVzcy5Sb3V0ZXIoKTtcclxuXHJcbnJvdXRlci5nZXQoXCIvXCIsIChyZXEsIHJlcykgPT4ge1xyXG4gICAgcHJvZHVjdFNlcnZpY2UuYWxsKClcclxuICAgICAgICAudGhlbihwcm9kdWN0cyA9PiByZXMuanNvbihwcm9kdWN0cykpXHJcbiAgICAgICAgLmNhdGNoKGVyciA9PiByZXMuc2VuZCg1MDAsIGVycikuZW5kKCkpOyBcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCByb3V0ZXI7Il19

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
	        }, product, {
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9uZ28tcHJvZHVjdC1zdG9yYWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibW9uZ28tcHJvZHVjdC1zdG9yYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGlEQUFpRDs7QUFFakQsbUJBQXFCLHNCQUFzQixDQUFDLENBQUE7QUFFNUM7SUFDSSw2QkFBb0IsRUFBWTtRQUFaLE9BQUUsR0FBRixFQUFFLENBQVU7UUFDNUIsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7WUFDSixNQUFNLElBQUksS0FBSyxDQUFDLGVBQWUsQ0FBQyxDQUFDO0lBQ3pDLENBQUM7SUFFRCxpQ0FBRyxHQUFIO1FBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFO2FBQ1QsVUFBVSxDQUFDLFlBQVEsQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDO2FBQ3pDLElBQUksQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQXRCLENBQXNCLENBQUM7YUFDakMsSUFBSSxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxDQUFDLE9BQU8sRUFBRSxFQUFYLENBQVcsQ0FBQyxDQUFDO0lBQ2hDLENBQUM7SUFFRCxpQ0FBRyxHQUFILFVBQUksRUFBVTtRQUNWLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO1lBQ0osTUFBTSxJQUFJLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBRXZDLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRTthQUNULFVBQVUsQ0FBQyxZQUFRLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQzthQUN6QyxJQUFJLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQTlCLENBQThCLENBQUM7YUFDekMsSUFBSSxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBVixDQUFVLENBQUM7YUFDckIsSUFBSSxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFSLENBQVEsQ0FBQyxDQUFDO0lBQzdCLENBQUM7SUFFRCxrQ0FBSSxHQUFKLFVBQUssT0FBb0I7UUFDckIsRUFBRSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUM7WUFDVCxNQUFNLElBQUksS0FBSyxDQUFDLHNCQUFzQixDQUFDLENBQUM7UUFFNUMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFO2FBQ1QsVUFBVSxDQUFDLFlBQVEsQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDO2FBQ3pDLElBQUksQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsQ0FBQyxTQUFTLENBQUM7WUFDZixFQUFFLEVBQUUsT0FBTyxDQUFDLEVBQUU7U0FDakIsRUFDRCxPQUFPLEVBQ1A7WUFDSSxNQUFNLEVBQUUsSUFBSTtTQUNmLENBQUMsRUFOSyxDQU1MLENBQUM7YUFDTixJQUFJLENBQUMsY0FBTSxPQUFBLE9BQU8sRUFBUCxDQUFPLENBQUMsQ0FBQztJQUM3QixDQUFDO0lBRUQsNkNBQWUsR0FBZixVQUFnQixTQUFpQixFQUFFLFNBQWlCLEVBQUUsTUFBeUIsRUFBRSxHQUFrQjtRQUFuRyxpQkF3QkM7UUF2QkcsRUFBRSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7WUFDWCxNQUFNLElBQUksS0FBSyxDQUFDLHdCQUF3QixDQUFDLENBQUM7UUFDOUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7WUFDWCxNQUFNLElBQUksS0FBSyxDQUFDLHdCQUF3QixDQUFDLENBQUM7UUFDOUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUM7WUFDUixNQUFNLElBQUksS0FBSyxDQUFDLHFCQUFxQixDQUFDLENBQUM7UUFFM0MsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFO2FBQ1QsVUFBVSxDQUFDLFlBQVEsQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDO2FBQ3pDLElBQUksQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsQ0FBQyxTQUFTLENBQ3RCO1lBQ0ksRUFBRSxFQUFFLFNBQVM7U0FDaEIsRUFDRDtZQUNJLElBQUksRUFBRTtnQkFDRixHQUFDLFlBQVUsU0FBVyxDQUFDLEdBQUUsTUFBTTtnQkFDL0IsR0FBQyxTQUFPLFNBQVcsQ0FBQyxHQUFFLEdBQUc7O2FBQzVCO1NBQ0osRUFDRDtZQUNJLE1BQU0sRUFBRSxJQUFJO1NBQ2YsQ0FBQyxVQVpTLENBWVQsQ0FBQzthQUNGLElBQUksQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLEtBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLEVBQW5CLENBQW1CLENBQUMsQ0FBQztJQUN4QyxDQUFDO0lBQ0wsMEJBQUM7QUFBRCxDQUFDLEFBakVELElBaUVDO0FBakVEO3FDQWlFQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL3R5cGluZ3MvaW5kZXguZC50c1wiIC8+XHJcblxyXG5pbXBvcnQgRGF0YWJhc2UgZnJvbSBcIi4uLy4uL2RhdGEtYWNjZXNzL2RiXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNb25nb1Byb2R1Y3RTdG9yYWdlIGltcGxlbWVudHMgUHJvZHVjdHMuSVByb2R1Y3RTdG9yYWdlIHtcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZGI6IERhdGFiYXNlKSB7XHJcbiAgICAgICAgaWYgKCFkYilcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiZGIgaXMgbWlzc2luZ1wiKTtcclxuICAgIH1cclxuXHJcbiAgICBhbGwoKTogUHJvbWlzZTxBcGkuUHJvZHVjdFtdPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZGJcclxuICAgICAgICAgICAgLmNvbGxlY3Rpb24oRGF0YWJhc2UuQ29sbGVjdGlvbnMucHJvZHVjdHMpXHJcbiAgICAgICAgICAgIC50aGVuKGMgPT4gYy5maW5kKHt9LCB7IF9pZDogMCB9KSlcclxuICAgICAgICAgICAgLnRoZW4oYyA9PiBjLnRvQXJyYXkoKSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25lKGlkOiBzdHJpbmcpOiBQcm9taXNlPEFwaS5Qcm9kdWN0PiB7XHJcbiAgICAgICAgaWYgKCFpZClcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiaWQgaXMgdW5kZWZpbmVkXCIpO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5kYlxyXG4gICAgICAgICAgICAuY29sbGVjdGlvbihEYXRhYmFzZS5Db2xsZWN0aW9ucy5wcm9kdWN0cylcclxuICAgICAgICAgICAgLnRoZW4oYyA9PiBjLmZpbmQoeyBpZDogaWQgfSwgeyBfaWQ6IDAgfSkpXHJcbiAgICAgICAgICAgIC50aGVuKGMgPT4gYy5saW1pdCgxKSlcclxuICAgICAgICAgICAgLnRoZW4oYyA9PiBjLm5leHQoKSk7XHJcbiAgICB9XHJcblxyXG4gICAgc2F2ZShwcm9kdWN0OiBBcGkuUHJvZHVjdCk6IFByb21pc2U8QXBpLlByb2R1Y3Q+IHtcclxuICAgICAgICBpZiAoIXByb2R1Y3QpXHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcInByb2R1Y3QgaXMgdW5kZWZpbmVkXCIpO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5kYlxyXG4gICAgICAgICAgICAuY29sbGVjdGlvbihEYXRhYmFzZS5Db2xsZWN0aW9ucy5wcm9kdWN0cylcclxuICAgICAgICAgICAgLnRoZW4oYyA9PiBjLnVwZGF0ZU9uZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgaWQ6IHByb2R1Y3QuaWRcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBwcm9kdWN0LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHVwc2VydDogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgfSkpXHJcbiAgICAgICAgICAgIC50aGVuKCgpID0+IHByb2R1Y3QpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldFNjcmFwaW5nRGF0YShwcm9kdWN0SWQ6IHN0cmluZywgd2ViU2hvcElkOiBzdHJpbmcsIHZhbHVlczogQXBpLlNjcmFwZWRWYWx1ZXMsIGxvZzogQXBpLlNjcmFwZUxvZyk6IFByb21pc2U8QXBpLlByb2R1Y3Q+IHtcclxuICAgICAgICBpZiAoIXByb2R1Y3RJZClcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwicHJvZHVjdElkIGlzIHVuZGVmaW5lZFwiKTtcclxuICAgICAgICBpZiAoIXdlYlNob3BJZClcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwid2ViU2hvcElkIGlzIHVuZGVmaW5lZFwiKTtcclxuICAgICAgICBpZiAoIXZhbHVlcylcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwidmFsdWVzIGlzIHVuZGVmaW5lZFwiKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZGJcclxuICAgICAgICAgICAgLmNvbGxlY3Rpb24oRGF0YWJhc2UuQ29sbGVjdGlvbnMucHJvZHVjdHMpXHJcbiAgICAgICAgICAgIC50aGVuKGMgPT4gYy51cGRhdGVPbmUoXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlkOiBwcm9kdWN0SWRcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgJHNldDoge1xyXG4gICAgICAgICAgICAgICAgICAgIFtgdmFsdWVzLiR7d2ViU2hvcElkfWBdOiB2YWx1ZXMsXHJcbiAgICAgICAgICAgICAgICAgICAgW2Bsb2cuJHt3ZWJTaG9wSWR9YF06IGxvZ1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB1cHNlcnQ6IHRydWVcclxuICAgICAgICAgICAgfSkpXHJcbiAgICAgICAgICAgIC50aGVuKHIgPT4gdGhpcy5vbmUocHJvZHVjdElkKSk7XHJcbiAgICB9XHJcbn0iXX0=

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	/// <reference path="../../typings/index.d.ts" />
	"use strict";
	var product_validator_1 = __webpack_require__(12);
	var moment = __webpack_require__(14);
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
	        return new Promise(function (resolve, reject) {
	            _this.validator
	                .validate(product)
	                .then(function (validationResult) {
	                if (!validationResult.isValid)
	                    reject(validationResult);
	                else
	                    _this.storage
	                        .save(product)
	                        .then(function () { return resolve(validationResult); });
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicHJvZHVjdC1zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGlEQUFpRDs7QUFFakQsa0NBQTZCLHFCQUFxQixDQUFDLENBQUE7QUFDbkQsSUFBWSxNQUFNLFdBQU0sUUFBUSxDQUFDLENBQUE7QUFFakM7SUFHSSx3QkFBb0IsT0FBaUM7UUFBakMsWUFBTyxHQUFQLE9BQU8sQ0FBMEI7UUFGN0MsY0FBUyxHQUFHLElBQUksMkJBQWdCLEVBQUUsQ0FBQztRQUd2QyxFQUFFLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQztZQUNULE1BQU0sSUFBSSxLQUFLLENBQUMsc0JBQXNCLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBRUQsNEJBQUcsR0FBSDtRQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxDQUFDO0lBQzlCLENBQUM7SUFFRCw2QkFBSSxHQUFKLFVBQUssT0FBb0I7UUFBekIsaUJBZ0JDO1FBZkcsRUFBRSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUM7WUFDVCxNQUFNLElBQUksS0FBSyxDQUFDLHNCQUFzQixDQUFDLENBQUM7UUFFNUMsTUFBTSxDQUFDLElBQUksT0FBTyxDQUFDLFVBQUMsT0FBTyxFQUFFLE1BQU07WUFDL0IsS0FBSSxDQUFDLFNBQVM7aUJBQ1QsUUFBUSxDQUFDLE9BQU8sQ0FBQztpQkFDakIsSUFBSSxDQUFDLFVBQUEsZ0JBQWdCO2dCQUNsQixFQUFFLENBQUMsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLE9BQU8sQ0FBQztvQkFDMUIsTUFBTSxDQUFDLGdCQUFnQixDQUFDLENBQUM7Z0JBQzdCLElBQUk7b0JBQ0EsS0FBSSxDQUFDLE9BQU87eUJBQ1AsSUFBSSxDQUFDLE9BQU8sQ0FBQzt5QkFDYixJQUFJLENBQUMsY0FBTSxPQUFBLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxFQUF6QixDQUF5QixDQUFDLENB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LENBQUMsQ0FBQztRQUM1RSxDQUFDLENBQUMsQ0FBQztJQUNYLENBQUM7SUFDTCxxQkFBQztBQUFELENBQUMsQUExRkQsSUEwRkM7QUExRkQ7Z0NBMEZDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vdHlwaW5ncy9pbmRleC5kLnRzXCIgLz5cclxuXHJcbmltcG9ydCBQcm9kdWN0VmFsaWRhdG9yIGZyb20gXCIuL3Byb2R1Y3QtdmFsaWRhdG9yXCI7XHJcbmltcG9ydCAqIGFzIG1vbWVudCBmcm9tIFwibW9tZW50XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9kdWN0U2VydmljZSB7XHJcbiAgICBwcml2YXRlIHZhbGlkYXRvciA9IG5ldyBQcm9kdWN0VmFsaWRhdG9yKCk7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBzdG9yYWdlOiBQcm9kdWN0cy5JUHJvZHVjdFN0b3JhZ2UpIHtcclxuICAgICAgICBpZiAoIXN0b3JhZ2UpXHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcInN0b3JhZ2UgaXMgdW5kZWZpbmVkXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIGFsbCgpOiBQcm9taXNlPEFwaS5Qcm9kdWN0W10+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zdG9yYWdlLmFsbCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHNhdmUocHJvZHVjdDogQXBpLlByb2R1Y3QpOiBQcm9taXNlPEFwaS5WYWxpZGF0aW9uUmVzdWx0PiB7XHJcbiAgICAgICAgaWYgKCFwcm9kdWN0KVxyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJwcm9kdWN0IGlzIHVuZGVmaW5lZFwiKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgdGhpcy52YWxpZGF0b3JcclxuICAgICAgICAgICAgICAgIC52YWxpZGF0ZShwcm9kdWN0KVxyXG4gICAgICAgICAgICAgICAgLnRoZW4odmFsaWRhdGlvblJlc3VsdCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF2YWxpZGF0aW9uUmVzdWx0LmlzVmFsaWQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdCh2YWxpZGF0aW9uUmVzdWx0KTtcclxuICAgICAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RvcmFnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnNhdmUocHJvZHVjdClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKCgpID0+IHJlc29sdmUodmFsaWRhdGlvblJlc3VsdCkpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25lKHByb2R1Y3RJZDogc3RyaW5nKTogUHJvbWlzZTxBcGkuUHJvZHVjdD4ge1xyXG4gICAgICAgIGlmICghcHJvZHVjdElkKVxyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJwcm9kdWN0SWQgaXMgdW5kZWZpbmVkXCIpO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5zdG9yYWdlLm9uZShwcm9kdWN0SWQpO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZVNjcmFwZWREYXRhKHByb2R1Y3RJZDogc3RyaW5nLCB3ZWJzaG9wSWQ6IHN0cmluZywgZGF0YTogU2NyYXBpbmcuV2ViU2hvcFNjcmFwaW5nUmVzdWx0KTogUHJvbWlzZTxBcGkuUHJvZHVjdD4ge1xyXG4gICAgICAgIGlmICghcHJvZHVjdElkKVxyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJwcm9kdWN0SWQgaXMgdW5kZWZpbmVkXCIpO1xyXG4gICAgICAgIGlmICghd2Vic2hvcElkKVxyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJ3ZWJTaG9wSWQgaXMgdW5kZWZpbmVkXCIpO1xyXG4gICAgICAgIGlmICghZGF0YSlcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiZGF0YSBpcyB1bmRlZmluZWRcIik7XHJcbiAgICAgICAgY29uc3Qgbm93ID0gbW9tZW50LnV0YygpLnRvRGF0ZSgpO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5vbmUocHJvZHVjdElkKVxyXG4gICAgICAgICAgICAudGhlbihwcm9kdWN0ID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICghcHJvZHVjdC52YWx1ZXMpXHJcbiAgICAgICAgICAgICAgICAgICAgcHJvZHVjdC52YWx1ZXMgPSB7fTtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgdmFsdWVzID0gcHJvZHVjdC52YWx1ZXNbd2Vic2hvcElkXSB8fCB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgcHJpY2U6IG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2U6IG51bGxcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICBwcm9kdWN0LnZhbHVlc1t3ZWJzaG9wSWRdID0gdmFsdWVzO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoIXByb2R1Y3QubG9nKVxyXG4gICAgICAgICAgICAgICAgICAgIHByb2R1Y3QubG9nID0ge307XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IGxvZyA9IHByb2R1Y3QubG9nW3dlYnNob3BJZF0gfHwge1xyXG4gICAgICAgICAgICAgICAgICAgIHVybDogbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICBzY3JhcGVkQXQ6IG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgZXJyb3I6IGRhdGEuZXJyb3IsXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWVzOiB7fVxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIHByb2R1Y3QubG9nW3dlYnNob3BJZF0gPSBsb2c7XHJcblxyXG4gICAgICAgICAgICAgICAgbG9nLnVybCA9IHByb2R1Y3Quc2NyYXBpbmdVcmxzW3dlYnNob3BJZF07XHJcbiAgICAgICAgICAgICAgICBsb2cuc2NyYXBlZEF0ID0gbm93O1xyXG4gICAgICAgICAgICAgICAgbG9nLmVycm9yID0gZGF0YS5lcnJvcjtcclxuXHJcbiAgICAgICAgICAgICAgICBPYmplY3Qua2V5cyhkYXRhLnZhbHVlcylcclxuICAgICAgICAgICAgICAgICAgICAuZm9yRWFjaChuYW1lID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBkYXRhLnZhbHVlc1tuYW1lXTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2YWx1ZS5pc1N1Y2Nlc3NmdWwpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZXNbbmFtZV0gPSB2YWx1ZS52YWx1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvZy52YWx1ZXNbbmFtZV0gPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY3JhcGVkQXQ6IG5vdyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yOiB2YWx1ZS5lcnJvclxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnN0b3JhZ2Uuc2V0U2NyYXBpbmdEYXRhKHByb2R1Y3QuaWQsIHdlYnNob3BJZCwgdmFsdWVzLCBsb2cpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxufSJdfQ==

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	/// <reference path="../../typings/index.d.ts" />
	"use strict";
	var validator = __webpack_require__(13);
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
/* 13 */
/***/ function(module, exports) {

	module.exports = require("node-validator");

/***/ },
/* 14 */
/***/ function(module, exports) {

	module.exports = require("moment");

/***/ }
/******/ ]);
//# sourceMappingURL=app.js.map