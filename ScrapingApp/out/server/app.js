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
	var scrapeServer = __webpack_require__(20);
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
	var product_route_1 = __webpack_require__(7);
	var web_shop_route_1 = __webpack_require__(16);
	var server = express();
	server.use(cookieparser());
	server.use("/api", bodyparser());
	// server.use("/api", authenticationRouter);
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2ViLXNlcnZlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIndlYi1zZXJ2ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsNENBQTRDOztBQUc1QyxJQUFZLE9BQU8sV0FBTyxTQUFTLENBQUMsQ0FBQTtBQUVwQyxJQUFZLFVBQVUsV0FBTSxhQUFhLENBQUMsQ0FBQTtBQUMxQyxJQUFZLFlBQVksV0FBTSxlQUFlLENBQUMsQ0FBQTtBQUU5Qyx1QkFBbUIsVUFBVSxDQUFDLENBQUE7QUFHOUIsOEJBQXlCLDRCQUE0QixDQUFDLENBQUE7QUFDdEQsK0JBQXlCLDZCQUE2QixDQUFDLENBQUE7QUFFdkQsSUFBSSxNQUFNLEdBQUcsT0FBTyxFQUFFLENBQUM7QUFFdkIsTUFBTSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxDQUFDO0FBQzNCLE1BQU0sQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLFVBQVUsRUFBRSxDQUFDLENBQUM7QUFFakMsNENBQTRDO0FBQzVDLE1BQU0sQ0FBQyxHQUFHLENBQUMsZUFBZSxFQUFFLHVCQUFZLENBQUMsQ0FBQztBQUMxQyxNQUFNLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSx3QkFBWSxDQUFDLENBQUM7QUFJdkMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsT0FBTyxDQUFDLE1BQU0sQ0FBQyxjQUFjLEVBQUU7SUFDM0MsS0FBSyxFQUFFLFlBQVk7Q0FDdEIsQ0FBQyxDQUFDLENBQUM7QUFFSixJQUFNLElBQUksR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksSUFBSSxnQkFBTSxDQUFDLFlBQVksQ0FBQztBQUVyRDtJQUVJLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFO1FBQ2hCLE9BQU8sQ0FBQyxJQUFJLENBQUMsNENBQTBDLElBQUksTUFBRyxDQUFDLENBQUM7SUFDcEUsQ0FBQyxDQUFDLENBQUM7QUFDUCxDQUFDO0FBTGUsV0FBRyxNQUtsQixDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4vdHlwaW5ncy9pbmRleC5kLnRzXCIvPlxyXG5cclxuaW1wb3J0ICogYXMgaHR0cCAgZnJvbSBcImh0dHBcIjtcclxuaW1wb3J0ICogYXMgZXhwcmVzcyAgZnJvbSBcImV4cHJlc3NcIjtcclxuXHJcbmltcG9ydCAqIGFzIGJvZHlwYXJzZXIgZnJvbSBcImJvZHktcGFyc2VyXCI7XHJcbmltcG9ydCAqIGFzIGNvb2tpZXBhcnNlciBmcm9tIFwiY29va2llLXBhcnNlclwiO1xyXG5cclxuaW1wb3J0IGNvbmZpZyBmcm9tIFwiLi9jb25maWdcIjtcclxuXHJcbmltcG9ydCBhdXRoZW50aWNhdGlvblJvdXRlciBmcm9tIFwiLi93ZWIvcm91dGVzL2F1dGhlbnRpY2F0aW9uLXJvdXRlXCI7XHJcbmltcG9ydCBwcm9kdWN0Um91dGUgZnJvbSBcIi4vd2ViL3JvdXRlcy9wcm9kdWN0LXJvdXRlXCI7XHJcbmltcG9ydCB3ZWJTaG9wUm91dGUgZnJvbSBcIi4vd2ViL3JvdXRlcy93ZWItc2hvcC1yb3V0ZVwiO1xyXG5cclxubGV0IHNlcnZlciA9IGV4cHJlc3MoKTtcclxuXHJcbnNlcnZlci51c2UoY29va2llcGFyc2VyKCkpO1xyXG5zZXJ2ZXIudXNlKFwiL2FwaVwiLCBib2R5cGFyc2VyKCkpO1xyXG5cclxuLy8gc2VydmVyLnVzZShcIi9hcGlcIiwgYXV0aGVudGljYXRpb25Sb3V0ZXIpO1xyXG5zZXJ2ZXIudXNlKFwiL2FwaS9wcm9kdWN0c1wiLCBwcm9kdWN0Um91dGUpO1xyXG5zZXJ2ZXIudXNlKFwiL2FwaS9zaG9wc1wiLCB3ZWJTaG9wUm91dGUpO1xyXG5cclxuXHJcblxyXG5zZXJ2ZXIudXNlKFwiL1wiLCBleHByZXNzLnN0YXRpYyhcIi4vb3V0L2NsaWVudFwiLCB7XHJcbiAgICBpbmRleDogXCJpbmRleC5odG1sXCJcclxufSkpO1xyXG5cclxuY29uc3QgcG9ydCA9IHByb2Nlc3MuZW52LlBPUlQgfHwgY29uZmlnLmZhbGxiYWNrUG9ydDtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBydW4oKSB7XHJcblxyXG4gICAgc2VydmVyLmxpc3Rlbihwb3J0LCAoKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5pbmZvKGBXZWIgc2VydmVyIHN0YXJ0ZWQgYXQgaHR0cDovL2xvY2FsaG9zdDoke3BvcnR9L2ApO1xyXG4gICAgfSk7XHJcbn0iXX0=

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

	/// <reference path="../../typings/index.d.ts"/>
	"use strict";
	var express = __webpack_require__(2);
	var db_1 = __webpack_require__(8);
	var mongo_product_storage_1 = __webpack_require__(10);
	var product_service_1 = __webpack_require__(11);
	var db = new db_1.default();
	var productService = new product_service_1.default(new mongo_product_storage_1.default(db));
	var router = express.Router();
	router.get("/:id", function (req, res) {
	    var productId = req.param("id");
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1yb3V0ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInByb2R1Y3Qtcm91dGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0RBQWdEOztBQUVoRCxJQUFZLE9BQU8sV0FBTSxTQUFTLENBQUMsQ0FBQTtBQUVuQyxtQkFBZSxzQkFBc0IsQ0FBQyxDQUFBO0FBQ3RDLHNDQUFnQywrQ0FBK0MsQ0FBQyxDQUFBO0FBQ2hGLGdDQUEyQix5Q0FBeUMsQ0FBQyxDQUFBO0FBRXJFLElBQU0sRUFBRSxHQUFHLElBQUksWUFBRSxFQUFFLENBQUM7QUFFcEIsSUFBTSxjQUFjLEdBQUcsSUFBSSx5QkFBYyxDQUFDLElBQUksK0JBQW1CLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUV2RSxJQUFNLE1BQU0sR0FBRyxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUM7QUFFaEMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsVUFBQyxHQUFHLEVBQUUsR0FBRztJQUN4QixJQUFNLFNBQVMsR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBRWxDLEVBQUUsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztRQUNiLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLFdBQVcsQ0FBQzthQUNyQixHQUFHLEVBQUUsQ0FBQztRQUNYLE1BQU0sQ0FBQztJQUNYLENBQUM7SUFHRCxjQUFjLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQztTQUN4QixJQUFJLENBQUMsVUFBQSxPQUFPLElBQUksT0FBQSxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFqQixDQUFpQixDQUFDO1NBQ2xDLEtBQUssQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLFdBQVcsQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFoQyxDQUFnQyxDQUFDLENBQUM7QUFDeEQsQ0FBQyxDQUFDLENBQUM7QUFFSCxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxVQUFDLEdBQUcsRUFBRSxHQUFHO0lBQ3JCLGNBQWMsQ0FBQyxHQUFHLEVBQUU7U0FDZixJQUFJLENBQUMsVUFBQSxRQUFRLElBQUksT0FBQSxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFsQixDQUFrQixDQUFDO1NBQ3BDLEtBQUssQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUF4QixDQUF3QixDQUFDLENBQUM7QUFDaEQsQ0FBQyxDQUFDLENBQUM7QUFFSCxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxVQUFDLE9BQU8sRUFBRSxRQUFRO0lBQy9CLElBQU0sT0FBTyxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUM7SUFFN0IsY0FBYyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7U0FDdkIsSUFBSSxDQUFDLFVBQUEsTUFBTTtRQUNSLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsS0FBSyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQzlCLElBQU0sZ0JBQWdCLEdBQXlCLE1BQU0sQ0FBQztZQUV0RCxJQUFNLFlBQVksR0FBc0I7Z0JBQ3BDLEVBQUUsRUFBRSxLQUFLO2dCQUNULE1BQU0sRUFBRSxnQkFBZ0IsQ0FBQyxNQUFNO2FBQ2xDLENBQUM7WUFFRixRQUFRLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBQ3RDLENBQUM7UUFDRCxJQUFJLENBQUMsQ0FBQztZQUNGLElBQU0sY0FBYyxHQUFnQixNQUFNLENBQUM7WUFDM0MsSUFBTSxVQUFVLEdBQXNDO2dCQUNsRCxFQUFFLEVBQUUsSUFBSTtnQkFDUixNQUFNLEVBQUUsY0FBYzthQUN6QixDQUFDO1lBRUYsUUFBUSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUNwQyxDQUFDO0lBQ0wsQ0FBQyxDQUFDLENBQUM7QUFFWCxDQUFDLENBQUMsQ0FBQztBQUVIO2tCQUFlLE1BQU0sQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi90eXBpbmdzL2luZGV4LmQudHNcIi8+XHJcblxyXG5pbXBvcnQgKiBhcyBleHByZXNzIGZyb20gXCJleHByZXNzXCI7XHJcblxyXG5pbXBvcnQgRGIgZnJvbSBcIi4uLy4uL2RhdGEtYWNjZXNzL2RiXCI7XHJcbmltcG9ydCBNb25nb1Byb2R1Y3RTdG9yYWdlIGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9wcm9kdWN0cy9tb25nby1wcm9kdWN0LXN0b3JhZ2VcIjtcclxuaW1wb3J0IFByb2R1Y3RTZXJ2aWNlIGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9wcm9kdWN0cy9wcm9kdWN0LXNlcnZpY2VcIjtcclxuXHJcbmNvbnN0IGRiID0gbmV3IERiKCk7XHJcblxyXG5jb25zdCBwcm9kdWN0U2VydmljZSA9IG5ldyBQcm9kdWN0U2VydmljZShuZXcgTW9uZ29Qcm9kdWN0U3RvcmFnZShkYikpOyBcclxuXHJcbmNvbnN0IHJvdXRlciA9IGV4cHJlc3MuUm91dGVyKCk7XHJcblxyXG5yb3V0ZXIuZ2V0KFwiLzppZFwiLCAocmVxLCByZXMpID0+IHtcclxuICAgIGNvbnN0IHByb2R1Y3RJZCA9IHJlcS5wYXJhbShcImlkXCIpO1xyXG5cclxuICAgIGlmICghcHJvZHVjdElkKSB7XHJcbiAgICAgICAgcmVzLnNlbmQoNDA0LCBcIk5vdCBmb3VuZFwiKVxyXG4gICAgICAgICAgICAuZW5kKCk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwcm9kdWN0U2VydmljZS5vbmUocHJvZHVjdElkKVxyXG4gICAgICAgIC50aGVuKHByb2R1Y3QgPT4gcmVzLmpzb24ocHJvZHVjdCkpXHJcbiAgICAgICAgLmNhdGNoKGVyciA9PiByZXMuc2VuZCg0MDQsIFwiTm90IGZvdW5kXCIpLmVuZCgpKTtcclxufSk7XHJcblxyXG5yb3V0ZXIuZ2V0KFwiL1wiLCAocmVxLCByZXMpID0+IHtcclxuICAgIHByb2R1Y3RTZXJ2aWNlLmFsbCgpXHJcbiAgICAgICAgLnRoZW4ocHJvZHVjdHMgPT4gcmVzLmpzb24ocHJvZHVjdHMpKVxyXG4gICAgICAgIC5jYXRjaChlcnIgPT4gcmVzLnNlbmQoNTAwLCBlcnIpLmVuZCgpKTsgXHJcbn0pO1xyXG5cclxucm91dGVyLnBvc3QoXCIvXCIsIChyZXF1ZXN0LCByZXNwb25zZSkgPT4ge1xyXG4gICAgY29uc3QgcHJvZHVjdCA9IHJlcXVlc3QuYm9keTtcclxuXHJcbiAgICBwcm9kdWN0U2VydmljZS5zYXZlKHByb2R1Y3QpXHJcbiAgICAgICAgLnRoZW4ocmVzdWx0ID0+IHtcclxuICAgICAgICAgICAgaWYgKHJlc3VsdFtcImlzVmFsaWRcIl0gPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB2YWxpZGF0aW9uUmVzdWx0ID0gPEFwaS5WYWxpZGF0aW9uUmVzdWx0PnJlc3VsdDtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBmYWlsUmVzcG9uc2U6IEFwaS5JRmFpbFJlc3BvbnNlID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIG9rOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICBlcnJvcnM6IHZhbGlkYXRpb25SZXN1bHQuZXJyb3JzXHJcbiAgICAgICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgICAgIHJlc3BvbnNlLmpzb24oZmFpbFJlc3BvbnNlKS5lbmQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHVwZGF0ZWRQcm9kdWN0ID0gPEFwaS5Qcm9kdWN0PnJlc3VsdDtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG9rUmVzcG9uc2U6IEFwaS5JU3VjY2Vzc1Jlc3BvbnNlPEFwaS5Qcm9kdWN0PiA9IHtcclxuICAgICAgICAgICAgICAgICAgICBvazogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICBlbnRpdHk6IHVwZGF0ZWRQcm9kdWN0XHJcbiAgICAgICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgICAgIHJlc3BvbnNlLmpzb24ob2tSZXNwb25zZSkuZW5kKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcm91dGVyOyJdfQ==

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
	        products: "products"
	    };
	    return Database;
	}());
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = Database;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJkYi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsOENBQThDO0FBQzlDLElBQVksS0FBSyxXQUFNLFNBQVMsQ0FBQyxDQUFBO0FBQ2pDLHVCQUFtQixXQUFXLENBQUMsQ0FBQTtBQUUvQixJQUFJLEVBQUUsR0FBc0IsSUFBSSxPQUFPLENBQUMsVUFBQyxPQUFPLEVBQUUsTUFBTTtJQUNwRCxLQUFLLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxnQkFBTSxDQUFDLFFBQVEsRUFDekMsVUFBQyxHQUFHLEVBQUUsRUFBRTtRQUNKLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDTixNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDaEIsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ0osT0FBTyxDQUFDLElBQUksQ0FBQyxrQ0FBZ0MsZ0JBQU0sQ0FBQyxRQUFVLENBQUMsQ0FBQztZQUNoRSxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDaEIsQ0FBQztJQUNMLENBQUMsQ0FBQyxDQUFDO0FBQ1AsQ0FBQyxDQUFDLENBQUM7QUFFSDtJQUFBO0lBb0JBLENBQUM7SUFiRyw2QkFBVSxHQUFWLFVBQVcsVUFBa0I7UUFDekIsRUFBRSxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUM7WUFDWixNQUFNLElBQUksS0FBSyxDQUFDLHlCQUF5QixDQUFDLENBQUM7UUFDL0MsRUFBRSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQ2xDLE1BQU0sSUFBSSxLQUFLLENBQUMsZ0JBQWMsVUFBVSxnQkFBYSxDQUFDLENBQUM7UUFFM0QsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUU7YUFDaEIsSUFBSSxDQUFDLFVBQUEsRUFBRSxJQUFJLE9BQUEsRUFBRSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsRUFBekIsQ0FBeUIsQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFFTywwQkFBTyxHQUFmO1FBQ0ksTUFBTSxDQUFDLEVBQUUsQ0FBQztJQUNkLENBQUM7SUFsQk0sb0JBQVcsR0FBRztRQUNqQixRQUFRLEVBQUUsVUFBVTtRQUNwQixRQUFRLEVBQUUsVUFBVTtRQUNwQixRQUFRLEVBQUUsVUFBVTtLQUN2QixDQUFDO0lBZU4sZUFBQztBQUFELENBQUMsQUFwQkQsSUFvQkM7QUFwQkQ7MEJBb0JDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vdHlwaW5ncy9pbmRleC5kLnRzXCIgLz5cclxuaW1wb3J0ICogYXMgbW9uZ28gZnJvbSBcIm1vbmdvZGJcIjtcclxuaW1wb3J0IGNvbmZpZyBmcm9tIFwiLi4vY29uZmlnXCI7XHJcblxyXG5sZXQgZGI6IFByb21pc2U8bW9uZ28uRGI+ID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgbW9uZ28uTW9uZ29DbGllbnQuY29ubmVjdChjb25maWcubW9uZ29VcmwsXHJcbiAgICAoZXJyLCBkYikgPT4ge1xyXG4gICAgICAgIGlmIChlcnIpIHtcclxuICAgICAgICAgICAgcmVqZWN0KGVycik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc29sZS5pbmZvKGBDb25uZWN0ZWQgdG8gTW9uZ28gc2VydmVyIGF0ICR7Y29uZmlnLm1vbmdvVXJsfWApO1xyXG4gICAgICAgICAgICByZXNvbHZlKGRiKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEYXRhYmFzZSB7XHJcbiAgICBzdGF0aWMgQ29sbGVjdGlvbnMgPSB7XHJcbiAgICAgICAgc2Vzc2lvbnM6IFwic2Vzc2lvbnNcIixcclxuICAgICAgICB3ZWJzaG9wczogXCJ3ZWJzaG9wc1wiLFxyXG4gICAgICAgIHByb2R1Y3RzOiBcInByb2R1Y3RzXCJcclxuICAgIH07XHJcblxyXG4gICAgY29sbGVjdGlvbihjb2xsZWN0aW9uOiBzdHJpbmcpOiBQcm9taXNlPG1vbmdvLkNvbGxlY3Rpb24+IHtcclxuICAgICAgICBpZiAoIWNvbGxlY3Rpb24pXHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcImNvbGxlY3Rpb24gaXMgdW5kZWZpbmVkXCIpO1xyXG4gICAgICAgIGlmICghRGF0YWJhc2UuQ29sbGVjdGlvbnNbY29sbGVjdGlvbl0pXHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgQ29sbGVjdGlvbiAke2NvbGxlY3Rpb259IGlzIHVua25vd25gKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY29ubmVjdCgpXHJcbiAgICAgICAgICAgIC50aGVuKGRiID0+IGRiLmNvbGxlY3Rpb24oY29sbGVjdGlvbikpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgY29ubmVjdCgpOiBQcm9taXNlPG1vbmdvLkRiPiB7XHJcbiAgICAgICAgcmV0dXJuIGRiO1xyXG4gICAgfVxyXG59Il19

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
	var uuid = __webpack_require__(15);
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
	                        .then(function () { return resolve(product); });
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicHJvZHVjdC1zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGlEQUFpRDs7QUFFakQsa0NBQTZCLHFCQUFxQixDQUFDLENBQUE7QUFDbkQsSUFBWSxNQUFNLFdBQU0sUUFBUSxDQUFDLENBQUE7QUFDakMsSUFBWSxJQUFJLFdBQU0sV0FBVyxDQUFDLENBQUE7QUFFbEM7SUFHSSx3QkFBb0IsT0FBaUM7UUFBakMsWUFBTyxHQUFQLE9BQU8sQ0FBMEI7UUFGN0MsY0FBUyxHQUFHLElBQUksMkJBQWdCLEVBQUUsQ0FBQztRQUd2QyxFQUFFLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQztZQUNULE1BQU0sSUFBSSxLQUFLLENBQUMsc0JBQXNCLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBRUQsNEJBQUcsR0FBSDtRQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxDQUFDO0lBQzlCLENBQUM7SUFFRCw2QkFBSSxHQUFKLFVBQUssT0FBb0I7UUFBekIsaUJBb0JDO1FBbkJHLEVBQUUsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDO1lBQ1QsTUFBTSxJQUFJLEtBQUssQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO1FBRTVDLEVBQUUsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQztZQUNaLE9BQU8sQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLEVBQUUsRUFBRSxDQUFDO1FBRTNCLE1BQU0sQ0FBQyxJQUFJLE9BQU8sQ0FBQyxVQUFBLE9BQU87WUFDdEIsS0FBSSxDQUFDLFNBQVM7aUJBQ1QsUUFBUSxDQUFDLE9BQU8sQ0FBQztpQkFDakIsSUFBSSxDQUFDLFVBQUEsZ0JBQWdCO2dCQUNsQixFQUFFLENBQUMsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLE9BQU8sQ0FBQztvQkFDMUIsT0FBTyxDQUFDLGdCQUFnQixDQUFDLENBQUM7Z0JB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LEVBQUUsS0FBSyxDQUFDLEtBQUs7aUJBQ3JCLENBQUM7WUFDTixDQUFDLENBQUMsQ0FBQztZQUVQLE1BQU0sQ0FBQyxLQUFJLENBQUMsT0FBTyxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUMsRUFBRSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDNUUsQ0FBQyxDQUFDLENBQUM7SUFDWCxDQUFDO0lBQ0wscUJBQUM7QUFBRCxDQUFDLEFBOUZELElBOEZDO0FBOUZEO2dDQThGQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL3R5cGluZ3MvaW5kZXguZC50c1wiIC8+XHJcblxyXG5pbXBvcnQgUHJvZHVjdFZhbGlkYXRvciBmcm9tIFwiLi9wcm9kdWN0LXZhbGlkYXRvclwiO1xyXG5pbXBvcnQgKiBhcyBtb21lbnQgZnJvbSBcIm1vbWVudFwiO1xyXG5pbXBvcnQgKiBhcyB1dWlkIGZyb20gXCJub2RlLXV1aWRcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2R1Y3RTZXJ2aWNlIHtcclxuICAgIHByaXZhdGUgdmFsaWRhdG9yID0gbmV3IFByb2R1Y3RWYWxpZGF0b3IoKTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHN0b3JhZ2U6IFByb2R1Y3RzLklQcm9kdWN0U3RvcmFnZSkge1xyXG4gICAgICAgIGlmICghc3RvcmFnZSlcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwic3RvcmFnZSBpcyB1bmRlZmluZWRcIik7XHJcbiAgICB9XHJcblxyXG4gICAgYWxsKCk6IFByb21pc2U8QXBpLlByb2R1Y3RbXT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnN0b3JhZ2UuYWxsKCk7XHJcbiAgICB9XHJcblxyXG4gICAgc2F2ZShwcm9kdWN0OiBBcGkuUHJvZHVjdCk6IFByb21pc2U8QXBpLlZhbGlkYXRpb25SZXN1bHQgfCBBcGkuUHJvZHVjdD4ge1xyXG4gICAgICAgIGlmICghcHJvZHVjdClcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwicHJvZHVjdCBpcyB1bmRlZmluZWRcIik7XHJcblxyXG4gICAgICAgIGlmICghcHJvZHVjdC5pZClcclxuICAgICAgICAgICAgcHJvZHVjdC5pZCA9IHV1aWQudjEoKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnZhbGlkYXRvclxyXG4gICAgICAgICAgICAgICAgLnZhbGlkYXRlKHByb2R1Y3QpXHJcbiAgICAgICAgICAgICAgICAudGhlbih2YWxpZGF0aW9uUmVzdWx0ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIXZhbGlkYXRpb25SZXN1bHQuaXNWYWxpZClcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSh2YWxpZGF0aW9uUmVzdWx0KTtcclxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdG9yYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuc2F2ZShwcm9kdWN0KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4oKCkgPT4gcmVzb2x2ZShwcm9kdWN0KSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25lKHByb2R1Y3RJZDogc3RyaW5nKTogUHJvbWlzZTxBcGkuUHJvZHVjdD4ge1xyXG4gICAgICAgIGlmICghcHJvZHVjdElkKVxyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJwcm9kdWN0SWQgaXMgdW5kZWZpbmVkXCIpO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5zdG9yYWdlLm9uZShwcm9kdWN0SWQpO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZVNjcmFwZWREYXRhKHByb2R1Y3RJZDogc3RyaW5nLCB3ZWJzaG9wSWQ6IHN0cmluZywgZGF0YTogU2NyYXBpbmcuV2ViU2hvcFNjcmFwaW5nUmVzdWx0KTogUHJvbWlzZTxBcGkuUHJvZHVjdD4ge1xyXG4gICAgICAgIGlmICghcHJvZHVjdElkKVxyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJwcm9kdWN0SWQgaXMgdW5kZWZpbmVkXCIpO1xyXG4gICAgICAgIGlmICghd2Vic2hvcElkKVxyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJ3ZWJTaG9wSWQgaXMgdW5kZWZpbmVkXCIpO1xyXG4gICAgICAgIGlmICghZGF0YSlcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiZGF0YSBpcyB1bmRlZmluZWRcIik7XHJcbiAgICAgICAgY29uc3Qgbm93ID0gbW9tZW50LnV0YygpLnRvRGF0ZSgpO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5vbmUocHJvZHVjdElkKVxyXG4gICAgICAgICAgICAudGhlbihwcm9kdWN0ID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICghcHJvZHVjdC52YWx1ZXMpXHJcbiAgICAgICAgICAgICAgICAgICAgcHJvZHVjdC52YWx1ZXMgPSB7fTtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgdmFsdWVzID0gcHJvZHVjdC52YWx1ZXNbd2Vic2hvcElkXSB8fCB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgcHJpY2U6IG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2U6IG51bGxcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICBwcm9kdWN0LnZhbHVlc1t3ZWJzaG9wSWRdID0gdmFsdWVzO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoIXByb2R1Y3QubG9nKVxyXG4gICAgICAgICAgICAgICAgICAgIHByb2R1Y3QubG9nID0ge307XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IGxvZyA9IHByb2R1Y3QubG9nW3dlYnNob3BJZF0gfHwge1xyXG4gICAgICAgICAgICAgICAgICAgIHVybDogbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICBzY3JhcGVkQXQ6IG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgZXJyb3I6IGRhdGEuZXJyb3IsXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWVzOiB7fVxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIHByb2R1Y3QubG9nW3dlYnNob3BJZF0gPSBsb2c7XHJcblxyXG4gICAgICAgICAgICAgICAgbG9nLnVybCA9IHByb2R1Y3Quc2NyYXBpbmdVcmxzW3dlYnNob3BJZF07XHJcbiAgICAgICAgICAgICAgICBsb2cuc2NyYXBlZEF0ID0gbm93O1xyXG4gICAgICAgICAgICAgICAgbG9nLmVycm9yID0gZGF0YS5lcnJvcjtcclxuXHJcbiAgICAgICAgICAgICAgICBPYmplY3Qua2V5cyhkYXRhLnZhbHVlcylcclxuICAgICAgICAgICAgICAgICAgICAuZm9yRWFjaChuYW1lID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBkYXRhLnZhbHVlc1tuYW1lXTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2YWx1ZS5pc1N1Y2Nlc3NmdWwpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZXNbbmFtZV0gPSB2YWx1ZS52YWx1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvZy52YWx1ZXNbbmFtZV0gPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY3JhcGVkQXQ6IG5vdyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yOiB2YWx1ZS5lcnJvclxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnN0b3JhZ2Uuc2V0U2NyYXBpbmdEYXRhKHByb2R1Y3QuaWQsIHdlYnNob3BJZCwgdmFsdWVzLCBsb2cpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxufSJdfQ==

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

/***/ },
/* 15 */
/***/ function(module, exports) {

	module.exports = require("node-uuid");

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	/// <reference path="../../typings/index.d.ts"/>
	"use strict";
	var express = __webpack_require__(2);
	var db_1 = __webpack_require__(8);
	var mongo_web_shop_storage_1 = __webpack_require__(17);
	var web_shop_service_1 = __webpack_require__(18);
	var db = new db_1.default();
	var webShopService = new web_shop_service_1.default(new mongo_web_shop_storage_1.default(db));
	var router = express.Router();
	router.get("/", function (request, response) {
	    webShopService.all()
	        .then(function (shops) {
	        response.json(shops).end();
	    })
	        .catch(function (err) { return response.send(500, err).end(); });
	});
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = router;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2ViLXNob3Atcm91dGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ3ZWItc2hvcC1yb3V0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnREFBZ0Q7O0FBRWhELElBQVksT0FBTyxXQUFNLFNBQVMsQ0FBQyxDQUFBO0FBRW5DLG1CQUFlLHNCQUFzQixDQUFDLENBQUE7QUFFdEMsdUNBQWdDLGdEQUFnRCxDQUFDLENBQUE7QUFDakYsaUNBQTJCLDBDQUEwQyxDQUFDLENBQUE7QUFFdEUsSUFBTSxFQUFFLEdBQUcsSUFBSSxZQUFFLEVBQUUsQ0FBQztBQUVwQixJQUFNLGNBQWMsR0FBRyxJQUFJLDBCQUFjLENBQUMsSUFBSSxnQ0FBbUIsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBRXZFLElBQU0sTUFBTSxHQUFHLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUVoQyxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxVQUFDLE9BQU8sRUFBRSxRQUFRO0lBQzlCLGNBQWMsQ0FBQyxHQUFHLEVBQUU7U0FDZixJQUFJLENBQUMsVUFBQSxLQUFLO1FBQ1AsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQztJQUMvQixDQUFDLENBQUM7U0FDRCxLQUFLLENBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBN0IsQ0FBNkIsQ0FBQyxDQUFDO0FBQ3JELENBQUMsQ0FBQyxDQUFDO0FBRUg7a0JBQWUsTUFBTSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL3R5cGluZ3MvaW5kZXguZC50c1wiLz5cclxuXHJcbmltcG9ydCAqIGFzIGV4cHJlc3MgZnJvbSBcImV4cHJlc3NcIjtcclxuXHJcbmltcG9ydCBEYiBmcm9tIFwiLi4vLi4vZGF0YS1hY2Nlc3MvZGJcIjtcclxuXHJcbmltcG9ydCBNb25nb1dlYlNob3BTdG9yYWdlIGZyb20gXCIuLi8uLi9zZXJ2aWNlcy93ZWItc2hvcC9tb25nby13ZWItc2hvcC1zdG9yYWdlXCI7XHJcbmltcG9ydCBXZWJTaG9wU2VydmljZSBmcm9tIFwiLi4vLi4vc2VydmljZXMvd2ViLXNob3Avd2ViLXNob3Atc2VydmljZVwiO1xyXG5cclxuY29uc3QgZGIgPSBuZXcgRGIoKTtcclxuXHJcbmNvbnN0IHdlYlNob3BTZXJ2aWNlID0gbmV3IFdlYlNob3BTZXJ2aWNlKG5ldyBNb25nb1dlYlNob3BTdG9yYWdlKGRiKSk7XHJcblxyXG5jb25zdCByb3V0ZXIgPSBleHByZXNzLlJvdXRlcigpO1xyXG5cclxucm91dGVyLmdldChcIi9cIiwgKHJlcXVlc3QsIHJlc3BvbnNlKSA9PiB7XHJcbiAgICB3ZWJTaG9wU2VydmljZS5hbGwoKVxyXG4gICAgICAgIC50aGVuKHNob3BzID0+IHtcclxuICAgICAgICAgICAgcmVzcG9uc2UuanNvbihzaG9wcykuZW5kKCk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goZXJyID0+IHJlc3BvbnNlLnNlbmQoNTAwLCBlcnIpLmVuZCgpKTtcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCByb3V0ZXI7Il19

/***/ },
/* 17 */
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
	            .then(function (r) { return r.limit(1); })
	            .then(function (c) { return c.next(); });
	    };
	    MongoWebShopStorage.prototype.save = function (webShop) {
	        if (!webShop)
	            throw new Error("webShop is undefined");
	        return this.db
	            .collection(db_1.default.Collections.webshops)
	            .then(function (c) { return c.updateOne({ id: webShop.id }, webShop, { upsert: true }); })
	            .then(function () { return webShop; });
	    };
	    return MongoWebShopStorage;
	}());
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = MongoWebShopStorage;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9uZ28td2ViLXNob3Atc3RvcmFnZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1vbmdvLXdlYi1zaG9wLXN0b3JhZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsaURBQWlEOztBQUVqRCxtQkFBcUIsc0JBQXNCLENBQUMsQ0FBQTtBQUU1QztJQUNJLDZCQUFvQixFQUFZO1FBQVosT0FBRSxHQUFGLEVBQUUsQ0FBVTtRQUM1QixFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztZQUNKLE1BQU0sSUFBSSxLQUFLLENBQUMsaUJBQWlCLENBQUMsQ0FBQztJQUMzQyxDQUFDO0lBRUQsaUNBQUcsR0FBSDtRQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRTthQUNULFVBQVUsQ0FBQyxZQUFRLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQzthQUN6QyxJQUFJLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUF0QixDQUFzQixDQUFDO2FBQ2pDLElBQUksQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsQ0FBQyxPQUFPLEVBQUUsRUFBWCxDQUFXLENBQUMsQ0FBQztJQUNoQyxDQUFDO0lBRUQsaUNBQUcsR0FBSCxVQUFJLEVBQVU7UUFDVixFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztZQUNKLE1BQU0sSUFBSSxLQUFLLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQUV2QyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUU7YUFDVCxVQUFVLENBQUMsWUFBUSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUM7YUFDekMsSUFBSSxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUE5QixDQUE4QixDQUFDO2FBQ3pDLElBQUksQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQVYsQ0FBVSxDQUFDO2FBQ3JCLElBQUksQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBUixDQUFRLENBQUMsQ0FBQztJQUM3QixDQUFDO0lBRUQsa0NBQUksR0FBSixVQUFLLE9BQXlCO1FBQzFCLEVBQUUsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDO1lBQ1QsTUFBTSxJQUFJLEtBQUssQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO1FBRTVDLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRTthQUNULFVBQVUsQ0FBQyxZQUFRLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQzthQUN6QyxJQUFJLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLENBQUMsU0FBUyxDQUFDLEVBQUUsRUFBRSxFQUFFLE9BQU8sQ0FBQyxFQUFFLEVBQUUsRUFBRSxPQUFPLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBMUQsQ0FBMEQsQ0FBQzthQUNyRSxJQUFJLENBQUMsY0FBTSxPQUFBLE9BQU8sRUFBUCxDQUFPLENBQUMsQ0FBQztJQUM3QixDQUFDO0lBQ0wsMEJBQUM7QUFBRCxDQUFDLEFBakNELElBaUNDO0FBakNEO3FDQWlDQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL3R5cGluZ3MvaW5kZXguZC50c1wiIC8+XHJcblxyXG5pbXBvcnQgRGF0YWJhc2UgZnJvbSBcIi4uLy4uL2RhdGEtYWNjZXNzL2RiXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNb25nb1dlYlNob3BTdG9yYWdlIGltcGxlbWVudHMgV2ViU2hvcHMuSVdlYlNob3BTdG9yYWdlIHtcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZGI6IERhdGFiYXNlKSB7XHJcbiAgICAgICAgaWYgKCFkYilcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiZGIgaXMgdW5kZWZpbmVkXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIGFsbCgpOiBQcm9taXNlPFdlYlNob3BzLldlYlNob3BbXT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmRiXHJcbiAgICAgICAgICAgIC5jb2xsZWN0aW9uKERhdGFiYXNlLkNvbGxlY3Rpb25zLndlYnNob3BzKVxyXG4gICAgICAgICAgICAudGhlbihjID0+IGMuZmluZCh7fSwgeyBfaWQ6IDAgfSkpXHJcbiAgICAgICAgICAgIC50aGVuKGMgPT4gYy50b0FycmF5KCkpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uZShpZDogc3RyaW5nKTogUHJvbWlzZTxXZWJTaG9wcy5XZWJTaG9wPiB7XHJcbiAgICAgICAgaWYgKCFpZClcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiaWQgaXMgdW5kZWZpbmVkXCIpO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5kYlxyXG4gICAgICAgICAgICAuY29sbGVjdGlvbihEYXRhYmFzZS5Db2xsZWN0aW9ucy53ZWJzaG9wcylcclxuICAgICAgICAgICAgLnRoZW4oYyA9PiBjLmZpbmQoeyBpZDogaWQgfSwgeyBfaWQ6IDAgfSkpXHJcbiAgICAgICAgICAgIC50aGVuKHIgPT4gci5saW1pdCgxKSlcclxuICAgICAgICAgICAgLnRoZW4oYyA9PiBjLm5leHQoKSk7XHJcbiAgICB9XHJcblxyXG4gICAgc2F2ZSh3ZWJTaG9wOiBXZWJTaG9wcy5XZWJTaG9wKTogUHJvbWlzZTxXZWJTaG9wcy5XZWJTaG9wPiB7XHJcbiAgICAgICAgaWYgKCF3ZWJTaG9wKVxyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJ3ZWJTaG9wIGlzIHVuZGVmaW5lZFwiKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZGJcclxuICAgICAgICAgICAgLmNvbGxlY3Rpb24oRGF0YWJhc2UuQ29sbGVjdGlvbnMud2Vic2hvcHMpXHJcbiAgICAgICAgICAgIC50aGVuKGMgPT4gYy51cGRhdGVPbmUoeyBpZDogd2ViU2hvcC5pZCB9LCB3ZWJTaG9wLCB7IHVwc2VydDogdHJ1ZSB9KSlcclxuICAgICAgICAgICAgLnRoZW4oKCkgPT4gd2ViU2hvcCk7XHJcbiAgICB9XHJcbn0iXX0=

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	/// <reference path="../../typings/index.d.ts" />
	"use strict";
	var web_shop_validator_1 = __webpack_require__(19);
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
	        return new Promise(function (resolve, reject) {
	            _this.validator
	                .validate(webShop)
	                .then(function (validationResult) {
	                if (!validationResult.isValid)
	                    reject(validationResult);
	                else
	                    _this.storage
	                        .save(webShop)
	                        .then(function () { return resolve(validationResult); });
	            });
	        });
	    };
	    return WebShopService;
	}());
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = WebShopService;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2ViLXNob3Atc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIndlYi1zaG9wLXNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsaURBQWlEOztBQUVqRCxtQ0FBNkIsc0JBQXNCLENBQUMsQ0FBQTtBQUVwRDtJQUlJLHdCQUFvQixPQUFpQztRQUFqQyxZQUFPLEdBQVAsT0FBTyxDQUEwQjtRQUY3QyxjQUFTLEdBQUcsSUFBSSw0QkFBZ0IsRUFBRSxDQUFDO1FBR3ZDLEVBQUUsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDO1lBQ1QsTUFBTSxJQUFJLEtBQUssQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO0lBQ2hELENBQUM7SUFFRCw0QkFBRyxHQUFIO1FBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLENBQUM7SUFDOUIsQ0FBQztJQUVELDRCQUFHLEdBQUgsVUFBSSxTQUFpQjtRQUNqQixFQUFFLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztZQUNYLE1BQU0sSUFBSSxLQUFLLENBQUMsd0JBQXdCLENBQUMsQ0FBQztRQUU5QyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDdkMsQ0FBQztJQUVELDZCQUFJLEdBQUosVUFBSyxPQUF5QjtRQUE5QixpQkFnQkM7UUFmRyxFQUFFLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQztZQUNULE1BQU0sSUFBSSxLQUFLLENBQUMsc0JBQXNCLENBQUMsQ0FBQztRQUU1QyxNQUFNLENBQUMsSUFBSSxPQUFPLENBQUMsVUFBQyxPQUFPLEVBQUUsTUFBTTtZQUMvQixLQUFJLENBQUMsU0FBUztpQkFDVCxRQUFRLENBQUMsT0FBTyxDQUFDO2lCQUNqQixJQUFJLENBQUMsVUFBQSxnQkFBZ0I7Z0JBQ2xCLEVBQUUsQ0FBQyxDQUFDLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxDQUFDO29CQUMxQixNQUFNLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztnQkFDN0IsSUFBSTtvQkFDQSxLQUFJLENBQUMsT0FBTzt5QkFDUCxJQUFJLENBQUMsT0FBTyxDQUFDO3lCQUNiLElBQUksQ0FBQyxjQUFNLE9BQUEsT0FBTyxDQUFDLGdCQUFnQixDQUFDLEVBQXpCLENBQXlCLENBQUMsQ0FBQztZQUNuRCxDQUFDLENBQUMsQ0FBQztRQUNYLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUNMLHFCQUFDO0FBQUQsQ0FBQyxBQXJDRCxJQXFDQztBQXJDRDtnQ0FxQ0MsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi90eXBpbmdzL2luZGV4LmQudHNcIiAvPlxyXG5cclxuaW1wb3J0IFdlYlNob3BWYWxpZGF0b3IgZnJvbSBcIi4vd2ViLXNob3AtdmFsaWRhdG9yXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBXZWJTaG9wU2VydmljZSB7XHJcblxyXG4gICAgcHJpdmF0ZSB2YWxpZGF0b3IgPSBuZXcgV2ViU2hvcFZhbGlkYXRvcigpO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgc3RvcmFnZTogV2ViU2hvcHMuSVdlYlNob3BTdG9yYWdlKSB7XHJcbiAgICAgICAgaWYgKCFzdG9yYWdlKVxyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJzdG9yYWdlIGlzIHVuZGVmaW5lZFwiKTtcclxuICAgIH1cclxuXHJcbiAgICBhbGwoKTogUHJvbWlzZTxXZWJTaG9wcy5XZWJTaG9wW10+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zdG9yYWdlLmFsbCgpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uZSh3ZWJTaG9wSWQ6IHN0cmluZyk6IFByb21pc2U8V2ViU2hvcHMuV2ViU2hvcD4ge1xyXG4gICAgICAgIGlmICghd2ViU2hvcElkKVxyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJ3ZWJTaG9wSWQgaXMgdW5kZWZpbmVkXCIpO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5zdG9yYWdlLm9uZSh3ZWJTaG9wSWQpO1xyXG4gICAgfVxyXG5cclxuICAgIHNhdmUod2ViU2hvcDogV2ViU2hvcHMuV2ViU2hvcCk6IFByb21pc2U8QXBpLlZhbGlkYXRpb25SZXN1bHQ+IHtcclxuICAgICAgICBpZiAoIXdlYlNob3ApXHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIndlYlNob3AgaXMgdW5kZWZpbmVkXCIpO1xyXG5cclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnZhbGlkYXRvclxyXG4gICAgICAgICAgICAgICAgLnZhbGlkYXRlKHdlYlNob3ApXHJcbiAgICAgICAgICAgICAgICAudGhlbih2YWxpZGF0aW9uUmVzdWx0ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIXZhbGlkYXRpb25SZXN1bHQuaXNWYWxpZClcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KHZhbGlkYXRpb25SZXN1bHQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdG9yYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuc2F2ZSh3ZWJTaG9wKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4oKCkgPT4gcmVzb2x2ZSh2YWxpZGF0aW9uUmVzdWx0KSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufSJdfQ==

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	/// <reference path="../../typings/index.d.ts" />
	"use strict";
	var validator = __webpack_require__(13);
	var WebShopValidator = (function () {
	    function WebShopValidator() {
	        this.deliveryMethodValidator = validator.isAnyObject()
	            .withRequired("deliveryMethod", validator.isString())
	            .withRequired("price", validator.isNumber({ min: 0 }));
	        this.webShopValidator = validator.isAnyObject()
	            .withRequired("title", validator.isString())
	            .withOptional("deliveryMethods", validator.isArray(this.deliveryMethodValidator));
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2ViLXNob3AtdmFsaWRhdG9yLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsid2ViLXNob3AtdmFsaWRhdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGlEQUFpRDs7QUFFakQsSUFBWSxTQUFTLFdBQU0sZ0JBQWdCLENBQUMsQ0FBQTtBQUU1QztJQUlJO1FBQ0ksSUFBSSxDQUFDLHVCQUF1QixHQUFHLFNBQVMsQ0FBQyxXQUFXLEVBQUU7YUFDakQsWUFBWSxDQUFDLGdCQUFnQixFQUFFLFNBQVMsQ0FBQyxRQUFRLEVBQUUsQ0FBQzthQUNwRCxZQUFZLENBQUMsT0FBTyxFQUFFLFNBQVMsQ0FBQyxRQUFRLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBRzNELElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxTQUFTLENBQUMsV0FBVyxFQUFFO2FBQzFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsU0FBUyxDQUFDLFFBQVEsRUFBRSxDQUFDO2FBQzNDLFlBQVksQ0FBQyxpQkFBaUIsRUFBRSxTQUFTLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLENBQUM7SUFDMUYsQ0FBQztJQUVELG1DQUFRLEdBQVIsVUFBUyxPQUF5QjtRQUFsQyxpQkFlQztRQWRHLEVBQUUsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDO1lBQ1QsTUFBTSxJQUFJLEtBQUssQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO1FBRTVDLE1BQU0sQ0FBQyxJQUFJLE9BQU8sQ0FBQyxVQUFBLE9BQU87WUFDdEIsU0FBUyxDQUFDLEdBQUcsQ0FBQyxLQUFJLENBQUMsZ0JBQWdCLEVBQy9CLE9BQU8sRUFDUCxVQUFDLFVBQVUsRUFBRSxNQUFNO2dCQUNmLE9BQU8sQ0FBQztvQkFDSixPQUFPLEVBQUUsVUFBVSxLQUFLLENBQUM7b0JBQ3pCLFVBQVUsRUFBRSxVQUFVO29CQUN0QixNQUFNLEVBQUUsTUFBTTtpQkFDakIsQ0FBQyxDQUFDO1lBQ1AsQ0FBQyxDQUFDLENBQUM7UUFDWCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFDTCx1QkFBQztBQUFELENBQUMsQUEvQkQsSUErQkM7QUEvQkQ7a0NBK0JDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vdHlwaW5ncy9pbmRleC5kLnRzXCIgLz5cclxuXHJcbmltcG9ydCAqIGFzIHZhbGlkYXRvciBmcm9tIFwibm9kZS12YWxpZGF0b3JcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFdlYlNob3BWYWxpZGF0b3Ige1xyXG4gICAgcHJpdmF0ZSB3ZWJTaG9wVmFsaWRhdG9yOiB2YWxpZGF0b3IuVmFsaWRhdGFibGU7XHJcbiAgICBwcml2YXRlIGRlbGl2ZXJ5TWV0aG9kVmFsaWRhdG9yOiB2YWxpZGF0b3IuVmFsaWRhdGFibGU7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5kZWxpdmVyeU1ldGhvZFZhbGlkYXRvciA9IHZhbGlkYXRvci5pc0FueU9iamVjdCgpXHJcbiAgICAgICAgICAgIC53aXRoUmVxdWlyZWQoXCJkZWxpdmVyeU1ldGhvZFwiLCB2YWxpZGF0b3IuaXNTdHJpbmcoKSlcclxuICAgICAgICAgICAgLndpdGhSZXF1aXJlZChcInByaWNlXCIsIHZhbGlkYXRvci5pc051bWJlcih7IG1pbjogMCB9KSk7XHJcblxyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMud2ViU2hvcFZhbGlkYXRvciA9IHZhbGlkYXRvci5pc0FueU9iamVjdCgpXHJcbiAgICAgICAgICAgIC53aXRoUmVxdWlyZWQoXCJ0aXRsZVwiLCB2YWxpZGF0b3IuaXNTdHJpbmcoKSlcclxuICAgICAgICAgICAgLndpdGhPcHRpb25hbChcImRlbGl2ZXJ5TWV0aG9kc1wiLCB2YWxpZGF0b3IuaXNBcnJheSh0aGlzLmRlbGl2ZXJ5TWV0aG9kVmFsaWRhdG9yKSk7XHJcbiAgICB9XHJcblxyXG4gICAgdmFsaWRhdGUod2ViU2hvcDogV2ViU2hvcHMuV2ViU2hvcCk6IFByb21pc2U8QXBpLlZhbGlkYXRpb25SZXN1bHQ+IHtcclxuICAgICAgICBpZiAoIXdlYlNob3ApXHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIndlYlNob3AgaXMgdW5kZWZpbmVkXCIpO1xyXG5cclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XHJcbiAgICAgICAgICAgIHZhbGlkYXRvci5ydW4odGhpcy53ZWJTaG9wVmFsaWRhdG9yLFxyXG4gICAgICAgICAgICAgICAgd2ViU2hvcCxcclxuICAgICAgICAgICAgICAgIChlcnJvckNvdW50LCBlcnJvcnMpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXNWYWxpZDogZXJyb3JDb3VudCA9PT0gMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JDb3VudDogZXJyb3JDb3VudCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JzOiBlcnJvcnNcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59Il19

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	/// <reference path="typings/index.d.ts"/>
	"use strict";
	var config_1 = __webpack_require__(5);
	var db_1 = __webpack_require__(8);
	var mongo_web_shop_storage_1 = __webpack_require__(17);
	var web_shop_service_1 = __webpack_require__(18);
	var mongo_product_storage_1 = __webpack_require__(10);
	var product_service_1 = __webpack_require__(11);
	var scrape_service_1 = __webpack_require__(21);
	var scrape_queue_service_1 = __webpack_require__(26);
	var scrape_scheduler_service_1 = __webpack_require__(28);
	var db = new db_1.default();
	var productService = new product_service_1.default(new mongo_product_storage_1.default(db));
	var webShopService = new web_shop_service_1.default(new mongo_web_shop_storage_1.default(db));
	var scrapeService = new scrape_service_1.default(productService, webShopService);
	var queue = new scrape_queue_service_1.default(scrapeService, config_1.default.scrapingThreads, config_1.default.delayBetweenShopScrapingMs);
	var scheduler = new scrape_scheduler_service_1.default(queue, productService, config_1.default.schedules);
	function run() {
	    if (scheduler.run())
	        console.info("Scrape server running");
	    else
	        console.error("Error running scrape server");
	}
	exports.run = run;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyYXBlLXNlcnZlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNjcmFwZS1zZXJ2ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsMENBQTBDOztBQUUxQyx1QkFBMEIsVUFBVSxDQUFDLENBQUE7QUFFckMsbUJBQXFCLGtCQUFrQixDQUFDLENBQUE7QUFFeEMsdUNBQWdDLDRDQUE0QyxDQUFDLENBQUE7QUFDN0UsaUNBQTJCLHNDQUFzQyxDQUFDLENBQUE7QUFFbEUsc0NBQWdDLDJDQUEyQyxDQUFDLENBQUE7QUFDNUUsZ0NBQTJCLHFDQUFxQyxDQUFDLENBQUE7QUFFakUsK0JBQTBCLDJCQUEyQixDQUFDLENBQUE7QUFDdEQscUNBQStCLGlDQUFpQyxDQUFDLENBQUE7QUFDakUseUNBQW1DLHFDQUFxQyxDQUFDLENBQUE7QUFFekUsSUFBTSxFQUFFLEdBQUcsSUFBSSxZQUFRLEVBQUUsQ0FBQztBQUcxQixJQUFNLGNBQWMsR0FBRyxJQUFJLHlCQUFjLENBQUMsSUFBSSwrQkFBbUIsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQ3ZFLElBQU0sY0FBYyxHQUFHLElBQUksMEJBQWMsQ0FBQyxJQUFJLGdDQUFtQixDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFFdkUsSUFBTSxhQUFhLEdBQUcsSUFBSSx3QkFBYSxDQUFDLGNBQWMsRUFBRSxjQUFjLENBQUMsQ0FBQztBQUV4RSxJQUFNLEtBQUssR0FBRyxJQUFJLDhCQUFrQixDQUFDLGFBQWEsRUFBRSxnQkFBYSxDQUFDLGVBQWUsRUFBRSxnQkFBYSxDQUFDLDBCQUEwQixDQUFDLENBQUM7QUFDN0gsSUFBTSxTQUFTLEdBQUcsSUFBSSxrQ0FBc0IsQ0FBQyxLQUFLLEVBQUUsY0FBYyxFQUFFLGdCQUFhLENBQUMsU0FBUyxDQUFDLENBQUM7QUFFN0Y7SUFDSSxFQUFFLENBQUMsQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFLENBQUM7UUFDaEIsT0FBTyxDQUFDLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO0lBQzFDLElBQUk7UUFDQSxPQUFPLENBQUMsS0FBSyxDQUFDLDZCQUE2QixDQUFDLENBQUM7QUFDckQsQ0FBQztBQUxlLFdBQUcsTUFLbEIsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCJ0eXBpbmdzL2luZGV4LmQudHNcIi8+XHJcblxyXG5pbXBvcnQgY29uZmlndXJhdGlvbiBmcm9tIFwiLi9jb25maWdcIjtcclxuXHJcbmltcG9ydCBEYXRhYmFzZSBmcm9tIFwiLi9kYXRhLWFjY2Vzcy9kYlwiO1xyXG5cclxuaW1wb3J0IE1vbmdvV2ViU2hvcFNlcnZpY2UgZnJvbSBcIi4vc2VydmljZXMvd2ViLXNob3AvbW9uZ28td2ViLXNob3Atc3RvcmFnZVwiO1xyXG5pbXBvcnQgV2ViU2hvcFNlcnZpY2UgZnJvbSBcIi4vc2VydmljZXMvd2ViLXNob3Avd2ViLXNob3Atc2VydmljZVwiO1xyXG5cclxuaW1wb3J0IE1vbmdvUHJvZHVjdFN0b3JhZ2UgZnJvbSBcIi4vc2VydmljZXMvcHJvZHVjdHMvbW9uZ28tcHJvZHVjdC1zdG9yYWdlXCI7XHJcbmltcG9ydCBQcm9kdWN0U2VydmljZSBmcm9tIFwiLi9zZXJ2aWNlcy9wcm9kdWN0cy9wcm9kdWN0LXNlcnZpY2VcIjtcclxuXHJcbmltcG9ydCBTY3JhcGVTZXJ2aWNlIGZyb20gXCIuL3NlcnZpY2VzL3NjcmFwZS1zZXJ2aWNlXCI7XHJcbmltcG9ydCBTY3JhcGVRdWV1ZVNlcnZpY2UgZnJvbSBcIi4vc2VydmljZXMvc2NyYXBlLXF1ZXVlLXNlcnZpY2VcIjtcclxuaW1wb3J0IFNjcmFwZVNjaGVkdWxlclNlcnZpY2UgZnJvbSBcIi4vc2VydmljZXMvc2NyYXBlLXNjaGVkdWxlci1zZXJ2aWNlXCI7XHJcblxyXG5jb25zdCBkYiA9IG5ldyBEYXRhYmFzZSgpO1xyXG5cclxuXHJcbmNvbnN0IHByb2R1Y3RTZXJ2aWNlID0gbmV3IFByb2R1Y3RTZXJ2aWNlKG5ldyBNb25nb1Byb2R1Y3RTdG9yYWdlKGRiKSk7XHJcbmNvbnN0IHdlYlNob3BTZXJ2aWNlID0gbmV3IFdlYlNob3BTZXJ2aWNlKG5ldyBNb25nb1dlYlNob3BTZXJ2aWNlKGRiKSk7XHJcblxyXG5jb25zdCBzY3JhcGVTZXJ2aWNlID0gbmV3IFNjcmFwZVNlcnZpY2UocHJvZHVjdFNlcnZpY2UsIHdlYlNob3BTZXJ2aWNlKTtcclxuXHJcbmNvbnN0IHF1ZXVlID0gbmV3IFNjcmFwZVF1ZXVlU2VydmljZShzY3JhcGVTZXJ2aWNlLCBjb25maWd1cmF0aW9uLnNjcmFwaW5nVGhyZWFkcywgY29uZmlndXJhdGlvbi5kZWxheUJldHdlZW5TaG9wU2NyYXBpbmdNcyk7XHJcbmNvbnN0IHNjaGVkdWxlciA9IG5ldyBTY3JhcGVTY2hlZHVsZXJTZXJ2aWNlKHF1ZXVlLCBwcm9kdWN0U2VydmljZSwgY29uZmlndXJhdGlvbi5zY2hlZHVsZXMpO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJ1bigpIHtcclxuICAgIGlmIChzY2hlZHVsZXIucnVuKCkpXHJcbiAgICAgICAgY29uc29sZS5pbmZvKFwiU2NyYXBlIHNlcnZlciBydW5uaW5nXCIpO1xyXG4gICAgZWxzZVxyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBydW5uaW5nIHNjcmFwZSBzZXJ2ZXJcIik7XHJcbn0iXX0=

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	/// <reference path="../typings/index.d.ts" />
	"use strict";
	var jsdom_scraper_1 = __webpack_require__(22);
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
	                .then(function (results) { return results.toHash(function (e) { return e.webShopId; }, function (e) { return e.scrapingResult; }); }); });
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyYXBlLXNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzY3JhcGUtc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw4Q0FBOEM7O0FBSzlDLDhCQUF5QiwyQkFBMkIsQ0FBQyxDQUFBO0FBTXJEO0lBSUksdUJBQW9CLGNBQThCLEVBQzlCLGNBQThCO1FBRDlCLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUM5QixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFKMUMsWUFBTyxHQUFHLElBQUksdUJBQVksRUFBRSxDQUFDO1FBS2pDLEVBQUUsQ0FBQyxDQUFDLENBQUMsY0FBYyxDQUFDO1lBQ2hCLE1BQU0sSUFBSSxLQUFLLENBQUMsNkJBQTZCLENBQUMsQ0FBQztRQUNuRCxFQUFFLENBQUMsQ0FBQyxDQUFDLGNBQWMsQ0FBQztZQUNoQixNQUFNLElBQUksS0FBSyxDQUFDLDZCQUE2QixDQUFDLENBQUM7UUFFbkQsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsY0FBYzthQUM5QixHQUFHLEVBQUU7YUFDTCxJQUFJLENBQUMsVUFBQSxLQUFLLElBQUksT0FBQSxLQUFLLENBQUMsTUFBTSxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxDQUFDLEVBQUUsRUFBSixDQUFJLENBQUMsRUFBdkIsQ0FBdUIsQ0FBQyxDQUFDO0lBQ2hELENBQUM7SUFFRCx5Q0FBaUIsR0FBakIsVUFBa0IsU0FBaUI7UUFBbkMsaUJBU0M7UUFSRyxFQUFFLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztZQUNYLE1BQU0sSUFBSSxLQUFLLENBQUMsd0JBQXdCLENBQUMsQ0FBQztRQUU5QyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsVUFBQSxLQUFLO1lBQzNCLE1BQU0sQ0FBQyxLQUFJLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUM7aUJBQ3BDLElBQUksQ0FBQyxVQUFBLE9BQU8sSUFBSSxPQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUM7aUJBQzNELElBQUksQ0FBQyxVQUFBLE9BQU8sSUFBSSxPQUFBLE9BQU8sQ0FBQyxNQUFNLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLENBQUMsU0FBUyxFQUFYLENBQVcsRUFBRSxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsQ0FBQyxjQUFjLEVBQWhCLENBQWdCLENBQUMsRUFBdkQsQ0FBdUQsQ0FBQyxFQUQ1RCxDQUM0RCxDQUFDLENBQUM7UUFDdkYsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRU8scUNBQWEsR0FBckIsVUFBc0IsT0FBb0IsRUFBRSxLQUFrQjtRQUE5RCxpQkFRQztRQU5HLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUM7YUFDbkMsR0FBRyxDQUFDLFVBQUEsU0FBUyxJQUFJLE9BQUEsS0FBSSxDQUFDLDRCQUE0QixDQUFDLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxDQUFDO2FBQ3pFLElBQUksQ0FBQyxVQUFBLG1CQUFtQixJQUFJLE9BQUEsQ0FBQztZQUMxQixTQUFTLEVBQUUsU0FBUztZQUNwQixjQUFjLEVBQUUsbUJBQW1CO1NBQ3RDLENBQUMsRUFIMkIsQ0FHM0IsQ0FBQyxFQUpXLENBSVgsQ0FBQyxDQUFDO0lBQ2pCLENBQUM7SUFFTyxvREFBNEIsR0FBcEMsVUFBcUMsT0FBb0IsRUFBRSxTQUFpQixFQUFFLEtBQWtCO1FBQWhHLGlCQU1DO1FBTEcsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPO2FBQ2QsTUFBTSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLEVBQUUsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDLGdCQUFnQixDQUFDO2FBQzFFLElBQUksQ0FBQyxVQUFBLE1BQU0sSUFBSSxPQUFBLEtBQUksQ0FBQyxjQUFjO2FBQzlCLGlCQUFpQixDQUFDLE9BQU8sQ0FBQyxFQUFFLEVBQUUsU0FBUyxFQUFFLE1BQU0sQ0FBQzthQUNoRCxJQUFJLENBQUMsY0FBTSxPQUFBLE1BQU0sRUFBTixDQUFNLENBQUMsRUFGUCxDQUVPLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBQ0wsb0JBQUM7QUFBRCxDQUFDLEFBNUNELElBNENDO0FBNUNEOytCQTRDQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL3R5cGluZ3MvaW5kZXguZC50c1wiIC8+XHJcblxyXG5pbXBvcnQgUHJvZHVjdFNlcnZpY2UgZnJvbSBcIi4vcHJvZHVjdHMvcHJvZHVjdC1zZXJ2aWNlXCI7XHJcbmltcG9ydCBXZWJTaG9wU2VydmljZSBmcm9tIFwiLi93ZWItc2hvcC93ZWItc2hvcC1zZXJ2aWNlXCI7XHJcblxyXG5pbXBvcnQgSnNkb21TY3JhcGVyIGZyb20gXCIuLi9zY3JhcGVycy9qc2RvbS1zY3JhcGVyXCI7XHJcblxyXG5pbnRlcmZhY2UgV2ViU2hvcEhhc2gge1xyXG4gICAgW3dlYlNob3BJZDogc3RyaW5nXTogV2ViU2hvcHMuV2ViU2hvcDtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2NyYXBlU2VydmljZSBpbXBsZW1lbnRzIFNjcmFwaW5nLklTY3JhcGVTZXJ2aWNlIHtcclxuICAgIHByaXZhdGUgc2NyYXBlciA9IG5ldyBKc2RvbVNjcmFwZXIoKTtcclxuICAgIHByaXZhdGUgd2ViU2hvcHM6IFByb21pc2U8V2ViU2hvcEhhc2g+O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcHJvZHVjdFNlcnZpY2U6IFByb2R1Y3RTZXJ2aWNlLFxyXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSB3ZWJTaG9wU2VydmljZTogV2ViU2hvcFNlcnZpY2UpIHtcclxuICAgICAgICBpZiAoIXByb2R1Y3RTZXJ2aWNlKVxyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJwcm9kdWN0U2VydmljZSBpcyB1bmRlZmluZWRcIik7XHJcbiAgICAgICAgaWYgKCF3ZWJTaG9wU2VydmljZSlcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwid2ViU2hvcFNlcnZpY2UgaXMgdW5kZWZpbmVkXCIpO1xyXG5cclxuICAgICAgICB0aGlzLndlYlNob3BzID0gdGhpcy53ZWJTaG9wU2VydmljZVxyXG4gICAgICAgICAgICAuYWxsKClcclxuICAgICAgICAgICAgLnRoZW4oc2hvcHMgPT4gc2hvcHMudG9IYXNoKHMgPT4gcy5pZCkpO1xyXG4gICAgfVxyXG5cclxuICAgIHNjcmFwZVByb2R1Y3REYXRhKHByb2R1Y3RJZDogc3RyaW5nKTogUHJvbWlzZTxTY3JhcGluZy5Qcm9kdWN0U2NyYXBlUmVzdWx0PiB7XHJcbiAgICAgICAgaWYgKCFwcm9kdWN0SWQpXHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcInByb2R1Y3RJZCBpcyB1bmRlZmluZWRcIik7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLndlYlNob3BzLnRoZW4oc2hvcHMgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wcm9kdWN0U2VydmljZS5vbmUocHJvZHVjdElkKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4ocHJvZHVjdCA9PiBQcm9taXNlLmFsbCh0aGlzLnNjcmFwZVByb2R1Y3QocHJvZHVjdCwgc2hvcHMpKVxyXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKHJlc3VsdHMgPT4gcmVzdWx0cy50b0hhc2goZSA9PiBlLndlYlNob3BJZCwgZSA9PiBlLnNjcmFwaW5nUmVzdWx0KSkpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc2NyYXBlUHJvZHVjdChwcm9kdWN0OiBBcGkuUHJvZHVjdCwgc2hvcHM6IFdlYlNob3BIYXNoKTogUHJvbWlzZTx7IHdlYlNob3BJZDogc3RyaW5nOyBzY3JhcGluZ1Jlc3VsdDogU2NyYXBpbmcuV2ViU2hvcFNjcmFwaW5nUmVzdWx0OyB9PltdIHtcclxuXHJcbiAgICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKHByb2R1Y3Quc2NyYXBpbmdVcmxzKVxyXG4gICAgICAgICAgICAubWFwKHdlYlNob3BJZCA9PiB0aGlzLnNjcmFwZVByb2R1Y3RGcm9tU2hvcEFuZFNhdmUocHJvZHVjdCwgd2ViU2hvcElkLCBzaG9wcylcclxuICAgICAgICAgICAgICAgIC50aGVuKHByb2R1Y3RTY3JhcGVSZXN1bHQgPT4gKHtcclxuICAgICAgICAgICAgICAgICAgICB3ZWJTaG9wSWQ6IHdlYlNob3BJZCxcclxuICAgICAgICAgICAgICAgICAgICBzY3JhcGluZ1Jlc3VsdDogcHJvZHVjdFNjcmFwZVJlc3VsdFxyXG4gICAgICAgICAgICAgICAgfSkpKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHNjcmFwZVByb2R1Y3RGcm9tU2hvcEFuZFNhdmUocHJvZHVjdDogQXBpLlByb2R1Y3QsIHdlYlNob3BJZDogc3RyaW5nLCBzaG9wczogV2ViU2hvcEhhc2gpOiBQcm9taXNlPFNjcmFwaW5nLldlYlNob3BTY3JhcGluZ1Jlc3VsdD4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnNjcmFwZXJcclxuICAgICAgICAgICAgLnNjcmFwZShwcm9kdWN0LnNjcmFwaW5nVXJsc1t3ZWJTaG9wSWRdLCBzaG9wc1t3ZWJTaG9wSWRdLnNjcmFwaW5nU2V0dGluZ3MpXHJcbiAgICAgICAgICAgIC50aGVuKHJlc3VsdCA9PiB0aGlzLnByb2R1Y3RTZXJ2aWNlXHJcbiAgICAgICAgICAgICAgICAudXBkYXRlU2NyYXBlZERhdGEocHJvZHVjdC5pZCwgd2ViU2hvcElkLCByZXN1bHQpXHJcbiAgICAgICAgICAgICAgICAudGhlbigoKSA9PiByZXN1bHQpKTtcclxuICAgIH1cclxufSJdfQ==

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/// <reference path="../typings/index.d.ts" />
	__webpack_require__(23);
	var jsdom = __webpack_require__(24);
	var value_parser_1 = __webpack_require__(25);
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
	        var result = this.emptyValueScrapingResult();
	        for (var _i = 0, valueScrapingSettings_1 = valueScrapingSettings; _i < valueScrapingSettings_1.length; _i++) {
	            var scrapingSetting = valueScrapingSettings_1[_i];
	            try {
	                var rawValue = this.extractRawValueFromDocument(document, scrapingSetting);
	                var parsedValue = this.valueParser[scrapingSetting.type](rawValue);
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianNkb20tc2NyYXBlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImpzZG9tLXNjcmFwZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLDhDQUE4QztBQUM5QyxPQUFPLENBQUMsZUFBZSxDQUFDLENBQUM7QUFFekIsSUFBWSxLQUFLLFdBQU0sT0FBTyxDQUFDLENBQUE7QUFDL0IsNkJBQTRCLGdCQUFnQixDQUFDLENBQUE7QUFFN0M7SUFBQTtRQUNZLGdCQUFXLEdBQUcsSUFBSSxzQkFBZSxFQUFFLENBQUM7SUFxSWhELENBQUM7SUFuSUcsNkJBQU0sR0FBTixVQUFPLEdBQVcsRUFBRSxNQUFpQztRQUFyRCxpQkE4Q0M7UUE3Q0csRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUM7WUFDTCxNQUFNLElBQUksS0FBSyxDQUFDLGtCQUFrQixDQUFDLENBQUM7UUFDeEMsRUFBRSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUM7WUFDUixNQUFNLElBQUksS0FBSyxDQUFDLHNCQUFzQixDQUFDLENBQUM7UUFDNUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLE1BQU0sQ0FBQztZQUM1QixNQUFNLElBQUksS0FBSyxDQUFDLHNCQUFzQixDQUFDLENBQUM7UUFFNUMsSUFBTSxNQUFNLEdBQW1DO1lBQzNDLFlBQVksRUFBRSxLQUFLO1lBQ25CLEtBQUssRUFBRSxJQUFJO1lBQ1gsTUFBTSxFQUFFLEVBQUU7U0FDYixDQUFDO1FBQ0YsbUhBQW1IO1FBQ25ILE1BQU0sQ0FBQyxJQUFJLE9BQU8sQ0FBQyxVQUFBLE9BQU87WUFDdEIsS0FBSyxDQUFDLEdBQUcsQ0FBQztnQkFDTixHQUFHLEVBQUUsR0FBRztnQkFDUixTQUFTLEVBQUUsZ0hBQWdIO2dCQUMzSCxRQUFRLEVBQUU7b0JBQ04sc0JBQXNCLEVBQUUsS0FBSztvQkFDN0Isd0JBQXdCLEVBQUUsS0FBSztpQkFDbEM7Z0JBQ0QsSUFBSSxF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LENBQUM7b0JBRXJDLElBQU0sSUFBSSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUMsU0FBUyxDQUFDO29CQUV0RCxJQUFNLEtBQUssR0FBRyxJQUFJLE1BQU0sQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDO29CQUVyRCxJQUFNLE9BQU8sR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO29CQUNqQyxFQUFFLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUM7d0JBQ2hCLE1BQU0sSUFBSSxLQUFLLENBQUMsa0JBQWtCLENBQUMsQ0FBQztvQkFFeEMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDdEIsQ0FBQztnQkFBQSxDQUFDO1lBQ0Y7Z0JBQ0ksTUFBTSxJQUFJLEtBQUssQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO1FBQ2xELENBQUM7SUFDTCxDQUFDO0lBRU8sK0NBQXdCLEdBQWhDO1FBQ0ksTUFBTSxDQUFDO1lBQ0gsS0FBSyxFQUFFLElBQUk7WUFDWCxZQUFZLEVBQUUsSUFBSTtZQUNsQixLQUFLLEVBQUUsSUFBSTtZQUNYLFFBQVEsRUFBRSxJQUFJO1NBQ2pCLENBQUM7SUFDTixDQUFDO0lBQ0wsbUJBQUM7QUFBRCxDQUFDLEFBdElELElBc0lDO0FBdElEOzhCQXNJQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL3R5cGluZ3MvaW5kZXguZC50c1wiIC8+XHJcbnJlcXVpcmUoXCIuLi9leHRlbnNpb25zXCIpO1xyXG5cclxuaW1wb3J0ICogYXMganNkb20gZnJvbSBcImpzZG9tXCI7XHJcbmltcG9ydCBWYWx1ZVBhcnNlckhhc2ggZnJvbSBcIi4vdmFsdWUtcGFyc2VyXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBKc2RvbVNjcmFwZXIgaW1wbGVtZW50cyBTY3JhcGluZy5JU2NyYXBlciB7XHJcbiAgICBwcml2YXRlIHZhbHVlUGFyc2VyID0gbmV3IFZhbHVlUGFyc2VySGFzaCgpO1xyXG5cclxuICAgIHNjcmFwZSh1cmw6IHN0cmluZywgdmFsdWVzOiBTY3JhcGluZy5TY3JhcGluZ1NldHRpbmdzKTogUHJvbWlzZTxTY3JhcGluZy5XZWJTaG9wU2NyYXBpbmdSZXN1bHQ+IHtcclxuICAgICAgICBpZiAoIXVybClcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwidXJsIGlzIHVuZGVmaW5lZFwiKTtcclxuICAgICAgICBpZiAoIXZhbHVlcylcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwidmFsdWVzIGlzIHVuZGVmaW5lZC5cIik7XHJcbiAgICAgICAgaWYgKCFPYmplY3Qua2V5cyh2YWx1ZXMpLmxlbmd0aClcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTm8gdmFsdWVzIHRvIGV4dHJhY3RcIik7XHJcblxyXG4gICAgICAgIGNvbnN0IHJlc3VsdDogU2NyYXBpbmcuV2ViU2hvcFNjcmFwaW5nUmVzdWx0ID0ge1xyXG4gICAgICAgICAgICBpc1N1Y2Nlc3NmdWw6IGZhbHNlLFxyXG4gICAgICAgICAgICBlcnJvcjogbnVsbCxcclxuICAgICAgICAgICAgdmFsdWVzOiB7fVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgLy8gXCJNb3ppbGxhLzUuMCAoV2luZG93cyBOVCAxMC4wOyBXT1c2NCkgQXBwbGVXZWJLaXQvNTM3LjM2IChLSFRNTCwgbGlrZSBHZWNrbykgQ2hyb21lLzUwLjAuMjY2MS4xMDIgU2FmYXJpLzUzNy4zNlwiXHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xyXG4gICAgICAgICAgICBqc2RvbS5lbnYoe1xyXG4gICAgICAgICAgICAgICAgdXJsOiB1cmwsXHJcbiAgICAgICAgICAgICAgICB1c2VyQWdlbnQ6IFwiTW96aWxsYS81LjAgKFdpbmRvd3MgTlQgMTAuMDsgV09XNjQpIEFwcGxlV2ViS2l0LzUzNy4zNiAoS0hUTUwsIGxpa2UgR2Vja28pIENocm9tZS81MC4wLjI2NjEuMTAyIFNhZmFyaS81MzcuMzZcIixcclxuICAgICAgICAgICAgICAgIGZlYXR1cmVzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgRmV0Y2hFeHRlcm5hbFJlc291cmNlczogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgUHJvY2Vzc0V4dGVybmFsUmVzb3VyY2VzOiBmYWxzZVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGRvbmU6IChlcnIsIHdpbmRvdykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChlcnIgJiYgZXJyLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQuaXNTdWNjZXNzZnVsID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdC5lcnJvciA9IGVycjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVzdWx0KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBPYmplY3Qua2V5cyh2YWx1ZXMpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZm9yRWFjaCh2YWx1ZU5hbWUgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHNldHRpbmdzID0gdmFsdWVzW3ZhbHVlTmFtZV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0LnZhbHVlc1t2YWx1ZU5hbWVdID0gdGhpcy5zY3JhcGVWYWx1ZSh3aW5kb3cuZG9jdW1lbnQsIHNldHRpbmdzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0LmlzU3VjY2Vzc2Z1bCA9IE9iamVjdC5rZXlzKHJlc3VsdC52YWx1ZXMpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAubWFwKHZhbHVlTmFtZSA9PiByZXN1bHQudmFsdWVzW3ZhbHVlTmFtZV0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZXZlcnkodiA9PiB2LmlzU3VjY2Vzc2Z1bCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3VsdCk7ICBcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc2NyYXBlVmFsdWUoZG9jdW1lbnQ6IERvY3VtZW50LCB2YWx1ZVNjcmFwaW5nU2V0dGluZ3M6IFNjcmFwaW5nLlZhbHVlU2NyYXBpbmdTZXR0aW5nc1tdKTogU2NyYXBpbmcuVmFsdWVTY3JhcGluZ1Jlc3VsdCB7XHJcbiAgICAgICAgaWYgKCFkb2N1bWVudClcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiZG9jdW1lbnQgaXMgdW5kZWZpbmVkXCIpO1xyXG4gICAgICAgIGlmICghdmFsdWVTY3JhcGluZ1NldHRpbmdzKVxyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJ2YWx1ZVNjcmFwaW5nU2V0dGluZ3MgaXMgdW5kZWZpbmVkXCIpO1xyXG5cclxuICAgICAgICBjb25zdCByZXN1bHQgPSB0aGlzLmVtcHR5VmFsdWVTY3JhcGluZ1Jlc3VsdCgpO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBzY3JhcGluZ1NldHRpbmcgb2YgdmFsdWVTY3JhcGluZ1NldHRpbmdzKSB7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCByYXdWYWx1ZSA9IHRoaXMuZXh0cmFjdFJhd1ZhbHVlRnJvbURvY3VtZW50KGRvY3VtZW50LCBzY3JhcGluZ1NldHRpbmcpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcGFyc2VkVmFsdWUgPSB0aGlzLnZhbHVlUGFyc2VyW3NjcmFwaW5nU2V0dGluZy50eXBlXShyYXdWYWx1ZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgcmVzdWx0LmlzU3VjY2Vzc2Z1bCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICByZXN1bHQuZXJyb3IgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0LnNldHRpbmdzID0gc2NyYXBpbmdTZXR0aW5nO1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0LnZhbHVlID0gcGFyc2VkVmFsdWU7XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIHJlc3VsdC5pc1N1Y2Nlc3NmdWwgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHJlc3VsdC5lcnJvciA9IGVycm9yO1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0LnNldHRpbmdzID0gc2NyYXBpbmdTZXR0aW5nO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChzY3JhcGluZ1NldHRpbmcuZmFpbE9uRXJyb3IpXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGV4dHJhY3RSYXdWYWx1ZUZyb21Eb2N1bWVudChkb2N1bWVudDogRG9jdW1lbnQsIHZhbHVlU2NyYXBpbmdTZXR0aW5nOiBTY3JhcGluZy5WYWx1ZVNjcmFwaW5nU2V0dGluZ3MpOiBzdHJpbmcge1xyXG4gICAgICAgIGNvbnN0IGV4dHJhY3RNZXRob2QgPSB2YWx1ZVNjcmFwaW5nU2V0dGluZy5leHRyYWN0IHx8IFwicXVlcnlzZWxlY3RvclwiO1xyXG5cclxuICAgICAgICBzd2l0Y2ggKGV4dHJhY3RNZXRob2QpIHtcclxuICAgICAgICAgICAgY2FzZSBcInF1ZXJ5c2VsZWN0b3JcIjpcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcXVlcnlTZWxlY3RvclNldHRpbmdzID0gdmFsdWVTY3JhcGluZ1NldHRpbmcgYXMgU2NyYXBpbmcuUXVlcnlTZWxlY3RvckV4dHJhY3RTZXR0aW5ncztcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoIXF1ZXJ5U2VsZWN0b3JTZXR0aW5ncy5lbGVtZW50U2VsZWN0b3IpXHJcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBlbGVtZW50U2VsZWN0b3IgaXMgbWlzc2luZ2ApO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IGVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChxdWVyeVNlbGVjdG9yU2V0dGluZ3MuZWxlbWVudFNlbGVjdG9yKTtcclxuICAgICAgICAgICAgICAgIGlmIChlbGVtZW50cy5sZW5ndGggPT09IDApXHJcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBFbGVtZW50IHdpdGggc2VsZWN0b3IgJHtxdWVyeVNlbGVjdG9yU2V0dGluZ3MuZWxlbWVudFNlbGVjdG9yfSBpcyBtaXNzaW5nYCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoZWxlbWVudHMubGVuZ3RoID4gMSlcclxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZXJlIGFyZSBtb3JlIHRoYW4gb25lIGVsZW1lbnQgd2l0aCBzZWxlY3RvciAke3F1ZXJ5U2VsZWN0b3JTZXR0aW5ncy5lbGVtZW50U2VsZWN0b3J9YCk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHF1ZXJ5U2VsZWN0b3JTZXR0aW5ncy5hdHRyaWJ1dGUpXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnRzWzBdLmdldEF0dHJpYnV0ZShxdWVyeVNlbGVjdG9yU2V0dGluZ3MuYXR0cmlidXRlKTtcclxuICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZWxlbWVudHNbMF0udGV4dENvbnRlbnQ7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGNhc2UgXCJyZWdleFwiOlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCByZWdleFNldHRpbmdzID0gdmFsdWVTY3JhcGluZ1NldHRpbmcgYXMgU2NyYXBpbmcuUmVnZXhFeHRyYWN0U2V0dGluZ3M7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXJlZ2V4U2V0dGluZ3MucmVnZXgpXHJcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwicmVnZXggbWlzc2luZ1wiKTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCB0ZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImh0bWxcIikuaW5uZXJIVE1MO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IHJlZ2V4ID0gbmV3IFJlZ0V4cChyZWdleFNldHRpbmdzLnJlZ2V4LCBcImdtaVwiKTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBtYXRjaGVzID0gcmVnZXguZXhlYyh0ZXh0KTtcclxuICAgICAgICAgICAgICAgIGlmICghbWF0Y2hlcy5sZW5ndGgpXHJcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTm8gdmFsdWUgbWF0Y2hlc1wiKTtcclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbWF0Y2hlc1sxXTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlVua25vd24gZXh0cmFjdCBtZXRob2RcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZW1wdHlWYWx1ZVNjcmFwaW5nUmVzdWx0KCk6IFNjcmFwaW5nLlZhbHVlU2NyYXBpbmdSZXN1bHQge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHZhbHVlOiBudWxsLFxyXG4gICAgICAgICAgICBpc1N1Y2Nlc3NmdWw6IHRydWUsXHJcbiAgICAgICAgICAgIGVycm9yOiBudWxsLFxyXG4gICAgICAgICAgICBzZXR0aW5nczogbnVsbFxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbn0iXX0=

/***/ },
/* 23 */
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
/* 24 */
/***/ function(module, exports) {

	module.exports = require("jsdom");

/***/ },
/* 25 */
/***/ function(module, exports) {

	/// <reference path="../typings/index.d.ts"/>
	"use strict";
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
	    return ValueParserHash;
	}());
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = ValueParserHash;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsdWUtcGFyc2VyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidmFsdWUtcGFyc2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDZDQUE2Qzs7QUFFN0M7SUFHSTtRQUZBLFlBQU8sR0FBRyxFQUFFLENBQUM7UUFHVCxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDckMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3pDLENBQUM7SUFFRCxnQ0FBTSxHQUFOLFVBQU8sS0FBYTtRQUNoQixNQUFNLENBQUMsQ0FBQyxLQUFLLElBQUksRUFBRSxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDaEMsQ0FBQztJQUVELGdDQUFNLEdBQU4sVUFBTyxLQUFhO1FBQ2hCLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO1lBQ1AsTUFBTSxJQUFJLEtBQUssQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO1FBRTFDLElBQU0sR0FBRyxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBRTNDLElBQU0sTUFBTSxHQUFHLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUUvQixFQUFFLENBQUMsQ0FBQyxNQUFNLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDekIsTUFBTSxDQUFDLE1BQU0sQ0FBQztRQUVsQixNQUFNLElBQUksS0FBSyxDQUFDLDZCQUE2QixDQUFDLENBQUM7SUFDbkQsQ0FBQztJQUNMLHNCQUFDO0FBQUQsQ0FBQyxBQXpCRCxJQXlCQztBQXpCRDtpQ0F5QkMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi90eXBpbmdzL2luZGV4LmQudHNcIi8+XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBWYWx1ZVBhcnNlckhhc2gge1xyXG4gICAgcGFyc2VycyA9IHt9O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMucGFyc2Vyc1tcInN0cmluZ1wiXSA9IHRoaXMuc3RyaW5nO1xyXG4gICAgICAgIHRoaXMucGFyc2Vyc1tcIm51bWJlclwiXSA9IHRoaXMubnVtYmVyO1xyXG4gICAgfVxyXG5cclxuICAgIHN0cmluZyhpbnB1dDogc3RyaW5nKTogYW55IHtcclxuICAgICAgICByZXR1cm4gKGlucHV0IHx8IFwiXCIpLnRyaW0oKTtcclxuICAgIH1cclxuXHJcbiAgICBudW1iZXIoaW5wdXQ6IHN0cmluZyk6IGFueSB7XHJcbiAgICAgICAgaWYgKCFpbnB1dClcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTnVtYmVyIGlzIG1pc3NpbmcuXCIpO1xyXG5cclxuICAgICAgICBjb25zdCBzcmMgPSBpbnB1dC5yZXBsYWNlKC9bXjAtOVxcLl0vZywgXCJcIik7XHJcblxyXG4gICAgICAgIGNvbnN0IG51bWJlciA9IHBhcnNlRmxvYXQoc3JjKTtcclxuXHJcbiAgICAgICAgaWYgKG51bWJlciAmJiAhaXNOYU4obnVtYmVyKSlcclxuICAgICAgICAgICAgcmV0dXJuIG51bWJlcjtcclxuXHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTnVtYmVyIGZvcm1hdCBpcyBub3QgdmFsaWQuXCIpO1xyXG4gICAgfVxyXG59Il19

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	/// <reference path="../typings/index.d.ts"/>
	"use strict";
	var async = __webpack_require__(27);
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyYXBlLXF1ZXVlLXNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzY3JhcGUtcXVldWUtc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw2Q0FBNkM7O0FBRTdDLElBQVksS0FBSyxXQUFNLE9BQU8sQ0FBQyxDQUFBO0FBSS9CO0lBR0ksNEJBQW9CLGFBQTRCLEVBQUUsZUFBdUIsRUFBRSwyQkFBbUM7UUFIbEgsaUJBaUVDO1FBOUR1QixrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUM1QyxFQUFFLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQztZQUNmLE1BQU0sSUFBSSxLQUFLLENBQUMsMEJBQTBCLENBQUMsQ0FBQztRQUVoRCxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsVUFBQyxTQUFpQixFQUFFLFFBQVE7WUFDakQsT0FBTyxDQUFDLEdBQUcsQ0FBQywrQkFBNkIsU0FBVyxDQUFDLENBQUM7WUFFdEQsS0FBSSxDQUFDLGFBQWEsQ0FBQyxpQkFBaUIsQ0FBQyxTQUFTLENBQUM7aUJBQzFDLElBQUksQ0FBQyxVQUFBLEdBQUc7Z0JBQ0wsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUM7cUJBQ1gsT0FBTyxDQUFDLFVBQUEsT0FBTztvQkFDWixJQUFNLE1BQU0sR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7b0JBQzVCLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUM7d0JBQ3BCLE9BQU8sQ0FBQyxHQUFHLENBQUMsc0JBQW9CLFNBQVMsbUJBQWMsT0FBTywyQkFBd0IsQ0FBQyxDQUFDO29CQUM1RixJQUFJLENBQUMsQ0FBQzt3QkFDRixPQUFPLENBQUMsS0FBSyxDQUFDLHNCQUFvQixTQUFTLG1CQUFjLE9BQU8sWUFBUyxDQUFDLENBQUM7d0JBQzNFLE9BQU8sQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO29CQUNoQyxDQUFDO2dCQUNMLENBQUMsQ0FBQyxDQUFDO2dCQUVQLFVBQVUsQ0FBQyxRQUFRLEVBQUUsMkJBQTJCLENBQUMsQ0FBQztZQUN0RCxDQUFDLENBQUM7aUJBQ0QsS0FBSyxDQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsUUFBUSxDQUFDLEdBQUcsQ0FBQyxFQUFiLENBQWEsQ0FBQyxDQUFDO1FBRXJDLENBQUMsRUFBRSxlQUFlLENBQUMsQ0FBQztJQUN4QixDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsb0NBQU8sR0FBUCxVQUFRLFNBQWlCO1FBQXpCLGlCQVlDO1FBWEcsRUFBRSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7WUFDWCxNQUFNLElBQUksS0FBSyxDQUFDLHdCQUF3QixDQUFDLENBQUM7UUFFOUMsTUFBTSxDQUFDLElBQUksT0FBTyxDQUFDLFVBQUMsT0FBTyxFQUFFLE1BQU07WUFDL0IsS0FBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLFVBQUEsR0FBRztnQkFDMUIsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDO29CQUNKLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDaEIsSUFBSTtvQkFDQSxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDM0IsQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRDs7O09BR0c7SUFDSCwwQ0FBYSxHQUFiLFVBQWMsU0FBaUI7UUFBL0IsaUJBWUM7UUFYRyxFQUFFLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztZQUNYLE1BQU0sSUFBSSxLQUFLLENBQUMsd0JBQXdCLENBQUMsQ0FBQztRQUU5QyxNQUFNLENBQUMsSUFBSSxPQUFPLENBQUMsVUFBQyxPQUFPLEVBQUUsTUFBTTtZQUMvQixLQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsVUFBQSxHQUFHO2dCQUM3QixFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUM7b0JBQ0osTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNoQixJQUFJO29CQUNBLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUMzQixDQUFDLENBQUMsQ0FBQztRQUNQLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUNMLHlCQUFDO0FBQUQsQ0FBQyxBQWpFRCxJQWlFQztBQWpFRDtvQ0FpRUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi90eXBpbmdzL2luZGV4LmQudHNcIi8+XHJcblxyXG5pbXBvcnQgKiBhcyBhc3luYyBmcm9tIFwiYXN5bmNcIjtcclxuXHJcbmltcG9ydCBTY3JhcGVTZXJ2aWNlIGZyb20gXCIuL3NjcmFwZS1zZXJ2aWNlXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTY3JhcGVRdWV1ZVNlcnZpY2Uge1xyXG4gICAgcHJpdmF0ZSBxdWV1ZTogQXN5bmNRdWV1ZTxzdHJpbmc+O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgc2NyYXBlU2VydmljZTogU2NyYXBlU2VydmljZSwgc2NyYXBpbmdUaHJlYWRzOiBudW1iZXIsIGRlbGF5QmV0d2VlblByb2R1Y3RTY3JhcGluZzogbnVtYmVyKSB7XHJcbiAgICAgICAgaWYgKCFzY3JhcGVTZXJ2aWNlKVxyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJzY3JhcGVTZXJ2aWNlIGlzIG1pc3NpbmdcIik7XHJcblxyXG4gICAgICAgIHRoaXMucXVldWUgPSBhc3luYy5xdWV1ZSgocHJvZHVjdElkOiBzdHJpbmcsIGNhbGxiYWNrKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBTY3JhcGluZyBkYXRhIGZvciBwcm9kdWN0ICR7cHJvZHVjdElkfWApO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5zY3JhcGVTZXJ2aWNlLnNjcmFwZVByb2R1Y3REYXRhKHByb2R1Y3RJZClcclxuICAgICAgICAgICAgICAgIC50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmtleXMocmVzKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuZm9yRWFjaCh3ZWJTaG9wID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHJlc1t3ZWJTaG9wXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHQuaXNTdWNjZXNzZnVsKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBTY3JhcGluZyBwcm9kdWN0ICR7cHJvZHVjdElkfSBmcm9tIHNob3AgJHt3ZWJTaG9wfSBjb21wbGV0ZWQgc3VjY2Vzc2Z1bHlgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYFNjcmFwaW5nIHByb2R1Y3QgJHtwcm9kdWN0SWR9IGZyb20gc2hvcCAke3dlYlNob3B9IGZhaWxlZGApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IocmVzdWx0LmVycm9yKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoY2FsbGJhY2ssIGRlbGF5QmV0d2VlblByb2R1Y3RTY3JhcGluZyk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLmNhdGNoKGVyciA9PiBjYWxsYmFjayhlcnIpKTtcclxuXHJcbiAgICAgICAgfSwgc2NyYXBpbmdUaHJlYWRzKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEVucXVldWVzIHNjcmFwaW5nIGRhdGEgYW5kIHNhdmluZyByZXN1bHRzIGZvciBhIHByb2R1Y3QuXHJcbiAgICAgKiBNZXRob2QgcmV0dXJucyBhIHByb21pc2Ugd2hpY2ggd2lsbCBiZSByZXNvbHZlZCB3aGVuIHByb2Nlc3NpbmcgZmluaXNoZXMuICAgICBcclxuICAgICAqL1xyXG4gICAgZW5xdWV1ZShwcm9kdWN0SWQ6IHN0cmluZyk6IFByb21pc2U8c3RyaW5nPiB7XHJcbiAgICAgICAgaWYgKCFwcm9kdWN0SWQpXHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcInByb2R1Y3RJZCBpcyB1bmRlZmluZWRcIik7XHJcblxyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMucXVldWUucHVzaChwcm9kdWN0SWQsIGVyciA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZXJyKVxyXG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChlcnIpO1xyXG4gICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUocHJvZHVjdElkKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBFbnF1ZXVlcyBzY3JhcGluZyBkYXRhIGFuZCBzYXZpbmcgcmVzdWx0cyBmb3IgYSBwcm9kdWN0IGJlZm9yZSBvdGhlciBlbnF1ZXVlZCBwcm9kdWN0cy5cclxuICAgICAqIE1ldGhvZCByZXR1cm5zIGEgcHJvbWlzZSB3aGljaCB3aWxsIGJlIHJlc29sdmVkIHdoZW4gcHJvY2Vzc2luZyBmaW5pc2hlcy4gICAgIFxyXG4gICAgICovXHJcbiAgICBlbnF1ZXVlUHJpb3JlKHByb2R1Y3RJZDogc3RyaW5nKSB7XHJcbiAgICAgICAgaWYgKCFwcm9kdWN0SWQpXHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcInByb2R1Y3RJZCBpcyB1bmRlZmluZWRcIik7XHJcblxyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMucXVldWUudW5zaGlmdChwcm9kdWN0SWQsIGVyciA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZXJyKVxyXG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChlcnIpO1xyXG4gICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUocHJvZHVjdElkKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn0iXX0=

/***/ },
/* 27 */
/***/ function(module, exports) {

	module.exports = require("async");

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	/// <reference path="../typings/index.d.ts" />
	"use strict";
	var schedule = __webpack_require__(29);
	var uuid = __webpack_require__(15);
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyYXBlLXNjaGVkdWxlci1zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic2NyYXBlLXNjaGVkdWxlci1zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDhDQUE4Qzs7QUFFOUMsSUFBWSxRQUFRLFdBQU0sZUFBZSxDQUFDLENBQUE7QUFDMUMsSUFBWSxJQUFJLFdBQU0sV0FBVyxDQUFDLENBQUE7QUFLbEM7SUFDSSxnQ0FBb0IsS0FBeUIsRUFDekIsY0FBOEIsRUFDOUIsU0FBbUI7UUFGbkIsVUFBSyxHQUFMLEtBQUssQ0FBb0I7UUFDekIsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQzlCLGNBQVMsR0FBVCxTQUFTLENBQVU7UUFDbkMsRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7WUFDUCxNQUFNLElBQUksS0FBSyxDQUFDLG9CQUFvQixDQUFDLENBQUM7UUFDMUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxjQUFjLENBQUM7WUFDaEIsTUFBTSxJQUFJLEtBQUssQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDO1FBQ25ELEVBQUUsQ0FBQyxDQUFDLENBQUMsU0FBUyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQztZQUNoQyxNQUFNLElBQUksS0FBSyxDQUFDLGlDQUFpQyxDQUFDLENBQUM7SUFDM0QsQ0FBQztJQUVELG9DQUFHLEdBQUg7UUFBQSxpQkFrQkM7UUFqQkcsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLGFBQWEsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsQ0FBQyxNQUFNLENBQUM7WUFDckUsTUFBTSxDQUFDLEtBQUssQ0FBQztRQUVqQixJQUFJLENBQUMsU0FBUzthQUNULEdBQUcsQ0FBQyxVQUFBLElBQUksSUFBSSxPQUFBLFFBQVEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxFQUN2QyxJQUFJLEVBQ0o7WUFDSSxPQUFPLENBQUMsR0FBRyxDQUFJLElBQUksSUFBSSxFQUFFLHFEQUFnRCxJQUFNLENBQUMsQ0FBQztZQUVqRixLQUFJLENBQUMsY0FBYztpQkFDZCxHQUFHLEVBQUU7aUJBQ0wsSUFBSSxDQUFDLFVBQUEsUUFBUTtnQkFDVixRQUFRLENBQUMsT0FBTyxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsS0FBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUF4QixDQUF3QixDQUFDLENBQUM7WUFDcEQsQ0FBQyxDQUFDLENBQUM7UUFDWCxDQUFDLENBQUMsRUFWTyxDQVVQLENBQUMsQ0FBQztRQUVaLE1BQU0sQ0FBQyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUNMLDZCQUFDO0FBQUQsQ0FBQyxBQS9CRCxJQStCQztBQS9CRDt3Q0ErQkMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi90eXBpbmdzL2luZGV4LmQudHNcIiAvPlxyXG5cclxuaW1wb3J0ICogYXMgc2NoZWR1bGUgZnJvbSBcIm5vZGUtc2NoZWR1bGVcIjtcclxuaW1wb3J0ICogYXMgdXVpZCBmcm9tIFwibm9kZS11dWlkXCI7XHJcblxyXG5pbXBvcnQgU2NyYXBlUXVldWVTZXJ2aWNlIGZyb20gXCIuL3NjcmFwZS1xdWV1ZS1zZXJ2aWNlXCI7XHJcbmltcG9ydCBQcm9kdWN0U2VydmljZSBmcm9tIFwiLi9wcm9kdWN0cy9wcm9kdWN0LXNlcnZpY2VcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNjcmFwZVNjaGVkdWxlclNlcnZpY2Uge1xyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBxdWV1ZTogU2NyYXBlUXVldWVTZXJ2aWNlLFxyXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBwcm9kdWN0U2VydmljZTogUHJvZHVjdFNlcnZpY2UsXHJcbiAgICAgICAgICAgICAgICBwcml2YXRlIHNjaGVkdWxlczogc3RyaW5nW10pIHtcclxuICAgICAgICBpZiAoIXF1ZXVlKVxyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJxdWV1ZSBpcyB1bmRlZmluZWRcIik7XHJcbiAgICAgICAgaWYgKCFwcm9kdWN0U2VydmljZSlcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwicHJvZHVjdFNlcnZpY2UgaXMgdW5kZWZpbmVkXCIpO1xyXG4gICAgICAgIGlmICghc2NoZWR1bGVzICYmICFzY2hlZHVsZXMubGVuZ3RoKVxyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJzY2hlZHVsZXMgaXMgdW5kZWZpbmVkIG9yIGVtcHR5XCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHJ1bigpOiBib29sZWFuIHtcclxuICAgICAgICBpZiAoc2NoZWR1bGUuc2NoZWR1bGVkSm9icyAmJiBPYmplY3Qua2V5cyhzY2hlZHVsZS5zY2hlZHVsZWRKb2JzKS5sZW5ndGgpXHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuXHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZXNcclxuICAgICAgICAgICAgLm1hcChydWxlID0+IHNjaGVkdWxlLnNjaGVkdWxlSm9iKHV1aWQudjEoKSxcclxuICAgICAgICAgICAgICAgIHJ1bGUsXHJcbiAgICAgICAgICAgICAgICAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYCR7bmV3IERhdGUoKX0gUnVubmluZyBwcm9kdWN0IHNjcmFwaW5nIGZvciBzY2hlZHVsZXIgcnVsZSAke3J1bGV9YCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvZHVjdFNlcnZpY2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmFsbCgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKHByb2R1Y3RzID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3RzLmZvckVhY2gocCA9PiB0aGlzLnF1ZXVlLmVucXVldWUocC5pZCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0pKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbn0iXX0=

/***/ },
/* 29 */
/***/ function(module, exports) {

	module.exports = require("node-schedule");

/***/ }
/******/ ]);
//# sourceMappingURL=app.js.map