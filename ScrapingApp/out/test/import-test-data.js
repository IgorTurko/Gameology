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

	/// <reference path="../../server/typings/index.d.ts" />
	"use strict";
	var db_1 = __webpack_require__(3);
	var mongo_web_shop_storage_1 = __webpack_require__(7);
	var web_shop_service_1 = __webpack_require__(8);
	var mongo_product_storage_1 = __webpack_require__(11);
	var product_service_1 = __webpack_require__(12);
	var web_shops_1 = __webpack_require__(18);
	var products_1 = __webpack_require__(19);
	var db = new db_1.default();
	var webShopService = new web_shop_service_1.default(new mongo_web_shop_storage_1.default(db));
	var productService = new product_service_1.default(new mongo_product_storage_1.default(db));
	function addWebShop(webShop) {
	    return webShopService.put(webShop)
	        .then(function (res) {
	        if (res["isValid"] === undefined) {
	            var index = web_shops_1.webShops.indexOf(webShop);
	            if (index !== web_shops_1.webShops.length - 1) {
	                return addWebShop(web_shops_1.webShops[index + 1]);
	            }
	        }
	        else {
	            console.error("Error adding web shop " + webShop.title);
	            console.dir(res);
	        }
	    })
	        .catch(function (err) {
	        console.error("Error adding web shop " + webShop.title);
	        console.error(err);
	    });
	}
	function addProduct(product) {
	    return productService.save(product)
	        .then(function () {
	        console.info("Product " + product.title + " added.");
	        var index = products_1.products.indexOf(product);
	        if (index !== products_1.products.length - 1) {
	            return addProduct(products_1.products[index + 1]);
	        }
	    })
	        .catch(function (err) {
	        console.error("Error adding product " + product.title);
	        console.error(err);
	    });
	}
	addWebShop(web_shops_1.webShops[0])
	    .then(function () {
	    return addProduct(products_1.products[0]);
	})
	    .then(function () {
	    console.info("Test data added.");
	    process.exit();
	});
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1wb3J0LXRlc3QtZGF0YS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImltcG9ydC10ZXN0LWRhdGEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsd0RBQXdEOztBQUV4RCxtQkFBcUIsNkJBQTZCLENBQUMsQ0FBQTtBQUVuRCx1Q0FBZ0MsdURBQXVELENBQUMsQ0FBQTtBQUN4RixpQ0FBMkIsaURBQWlELENBQUMsQ0FBQTtBQUU3RSxzQ0FBZ0Msc0RBQXNELENBQUMsQ0FBQTtBQUN2RixnQ0FBMkIsZ0RBQWdELENBQUMsQ0FBQTtBQUU1RSwwQkFBeUIsYUFBYSxDQUFDLENBQUE7QUFDdkMseUJBQXlCLFlBQVksQ0FBQyxDQUFBO0FBRXRDLElBQU0sRUFBRSxHQUFHLElBQUksWUFBUSxFQUFFLENBQUM7QUFFMUIsSUFBTSxjQUFjLEdBQUcsSUFBSSwwQkFBYyxDQUFDLElBQUksZ0NBQW1CLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUN2RSxJQUFNLGNBQWMsR0FBRyxJQUFJLHlCQUFjLENBQUMsSUFBSSwrQkFBbUIsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBRXZFLG9CQUFvQixPQUFvQjtJQUNwQyxNQUFNLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUM7U0FDN0IsSUFBSSxDQUFDLFVBQUEsR0FBRztRQUNMLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDO1lBQy9CLElBQU0sS0FBSyxHQUFHLG9CQUFRLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ3hDLEVBQUUsQ0FBQyxDQUFDLEtBQUssS0FBSyxvQkFBUSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNoQyxNQUFNLENBQUMsVUFBVSxDQUFDLG9CQUFRLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDM0MsQ0FBQztRQUNMLENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNKLE9BQU8sQ0FBQyxLQUFLLENBQUMsMkJBQXlCLE9BQU8sQ0FBQyxLQUFPLENBQUMsQ0FBQztZQUN4RCxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3JCLENBQUM7SUFDTCxDQUFDLENBQUM7U0FDRCxLQUFLLENBQUMsVUFBQSxHQUFHO1FBQ04sT0FBTyxDQUFDLEtBQUssQ0FBQywyQkFBeUIsT0FBTyxDQUFDLEtBQU8sQ0FBQyxDQUFDO1FBQ3hELE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDdkIsQ0FBQyxDQUFDLENBQUM7QUFDWCxDQUFDO0FBRUQsb0JBQW9CLE9BQW9CO0lBQ3BDLE1BQU0sQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQztTQUM5QixJQUFJLENBQUM7UUFDRixPQUFPLENBQUMsSUFBSSxDQUFDLGFBQVcsT0FBTyxDQUFDLEtBQUssWUFBUyxDQUFDLENBQUM7UUFFaEQsSUFBTSxLQUFLLEdBQUcsbUJBQVEsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDeEMsRUFBRSxDQUFDLENBQUMsS0FBSyxLQUFLLG1CQUFRLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDaEMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxtQkFBUSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzNDLENBQUM7SUFDTCxDQUFDLENBQUM7U0FDRCxLQUFLLENBQUMsVUFBQSxHQUFHO1FBQ04sT0FBTyxDQUFDLEtBQUssQ0FBQywwQkFBd0IsT0FBTyxDQUFDLEtBQU8sQ0FBQyxDQUFDO1FBQ3ZELE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDdkIsQ0FBQyxDQUFDLENBQUM7QUFDWCxDQUFDO0FBRUQsVUFBVSxDQUFDLG9CQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7S0FDbEIsSUFBSSxDQUFDO0lBQ0YsTUFBTSxDQUFDLFVBQVUsQ0FBQyxtQkFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDbkMsQ0FBQyxDQUFDO0tBQ0QsSUFBSSxDQUFDO0lBQ0YsT0FBTyxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0lBQ2pDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQztBQUNuQixDQUFDLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi9zZXJ2ZXIvdHlwaW5ncy9pbmRleC5kLnRzXCIgLz5cclxuXHJcbmltcG9ydCBEYXRhYmFzZSBmcm9tIFwiLi4vLi4vc2VydmVyL2RhdGEtYWNjZXNzL2RiXCI7XHJcblxyXG5pbXBvcnQgTW9uZ29XZWJTaG9wU3RvcmFnZSBmcm9tIFwiLi4vLi4vc2VydmVyL3NlcnZpY2VzL3dlYi1zaG9wL21vbmdvLXdlYi1zaG9wLXN0b3JhZ2VcIjtcclxuaW1wb3J0IFdlYlNob3BTZXJ2aWNlIGZyb20gXCIuLi8uLi9zZXJ2ZXIvc2VydmljZXMvd2ViLXNob3Avd2ViLXNob3Atc2VydmljZVwiO1xyXG5cclxuaW1wb3J0IE1vbmdvUHJvZHVjdFN0b3JhZ2UgZnJvbSBcIi4uLy4uL3NlcnZlci9zZXJ2aWNlcy9wcm9kdWN0cy9tb25nby1wcm9kdWN0LXN0b3JhZ2VcIjtcclxuaW1wb3J0IFByb2R1Y3RTZXJ2aWNlIGZyb20gXCIuLi8uLi9zZXJ2ZXIvc2VydmljZXMvcHJvZHVjdHMvcHJvZHVjdC1zZXJ2aWNlXCI7XHJcblxyXG5pbXBvcnQgeyB3ZWJTaG9wcyB9IGZyb20gXCIuL3dlYi1zaG9wc1wiO1xyXG5pbXBvcnQgeyBwcm9kdWN0cyB9IGZyb20gXCIuL3Byb2R1Y3RzXCI7XHJcblxyXG5jb25zdCBkYiA9IG5ldyBEYXRhYmFzZSgpO1xyXG5cclxuY29uc3Qgd2ViU2hvcFNlcnZpY2UgPSBuZXcgV2ViU2hvcFNlcnZpY2UobmV3IE1vbmdvV2ViU2hvcFN0b3JhZ2UoZGIpKTtcclxuY29uc3QgcHJvZHVjdFNlcnZpY2UgPSBuZXcgUHJvZHVjdFNlcnZpY2UobmV3IE1vbmdvUHJvZHVjdFN0b3JhZ2UoZGIpKTtcclxuXHJcbmZ1bmN0aW9uIGFkZFdlYlNob3Aod2ViU2hvcDogQXBpLldlYlNob3ApOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuIHdlYlNob3BTZXJ2aWNlLnB1dCh3ZWJTaG9wKVxyXG4gICAgICAgIC50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICAgIGlmIChyZXNbXCJpc1ZhbGlkXCJdID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gd2ViU2hvcHMuaW5kZXhPZih3ZWJTaG9wKTtcclxuICAgICAgICAgICAgICAgIGlmIChpbmRleCAhPT0gd2ViU2hvcHMubGVuZ3RoIC0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBhZGRXZWJTaG9wKHdlYlNob3BzW2luZGV4ICsgMV0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihgRXJyb3IgYWRkaW5nIHdlYiBzaG9wICR7d2ViU2hvcC50aXRsZX1gKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZGlyKHJlcyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGBFcnJvciBhZGRpbmcgd2ViIHNob3AgJHt3ZWJTaG9wLnRpdGxlfWApO1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICAgICAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZFByb2R1Y3QocHJvZHVjdDogQXBpLlByb2R1Y3QpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuIHByb2R1Y3RTZXJ2aWNlLnNhdmUocHJvZHVjdClcclxuICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuaW5mbyhgUHJvZHVjdCAke3Byb2R1Y3QudGl0bGV9IGFkZGVkLmApO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgaW5kZXggPSBwcm9kdWN0cy5pbmRleE9mKHByb2R1Y3QpO1xyXG4gICAgICAgICAgICBpZiAoaW5kZXggIT09IHByb2R1Y3RzLmxlbmd0aCAtIDEpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBhZGRQcm9kdWN0KHByb2R1Y3RzW2luZGV4ICsgMV0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihgRXJyb3IgYWRkaW5nIHByb2R1Y3QgJHtwcm9kdWN0LnRpdGxlfWApO1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICAgICAgfSk7XHJcbn1cclxuXHJcbmFkZFdlYlNob3Aod2ViU2hvcHNbMF0pXHJcbiAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIGFkZFByb2R1Y3QocHJvZHVjdHNbMF0pO1xyXG4gICAgfSlcclxuICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICBjb25zb2xlLmluZm8oXCJUZXN0IGRhdGEgYWRkZWQuXCIpO1xyXG4gICAgICAgIHByb2Nlc3MuZXhpdCgpO1xyXG4gICAgfSk7Il19

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/// <reference path="../typings/index.d.ts" />
	var mongo = __webpack_require__(4);
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
/* 4 */
/***/ function(module, exports) {

	module.exports = require("mongodb");

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

	/// <reference path="../../typings/index.d.ts" />
	"use strict";
	var db_1 = __webpack_require__(3);
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
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	/// <reference path="../../typings/index.d.ts" />
	"use strict";
	var web_shop_validator_1 = __webpack_require__(9);
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
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	/// <reference path="../../typings/index.d.ts" />
	"use strict";
	var validation_1 = __webpack_require__(10);
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
/* 10 */
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
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	/// <reference path="../../typings/index.d.ts" />
	"use strict";
	var db_1 = __webpack_require__(3);
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
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	/// <reference path="../../typings/index.d.ts" />
	"use strict";
	var moment = __webpack_require__(13);
	var uuid = __webpack_require__(14);
	var event_bus_1 = __webpack_require__(15);
	var product_validator_1 = __webpack_require__(17);
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
/* 13 */
/***/ function(module, exports) {

	module.exports = require("moment");

/***/ },
/* 14 */
/***/ function(module, exports) {

	module.exports = require("node-uuid");

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	/// <reference path="../typings/index.d.ts"/>
	"use strict";
	var events_1 = __webpack_require__(16);
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
/* 16 */
/***/ function(module, exports) {

	module.exports = require("events");

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	/// <reference path="../../typings/index.d.ts" />
	"use strict";
	var validation_1 = __webpack_require__(10);
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
/* 18 */
/***/ function(module, exports) {

	/// <reference path="../../server/typings/index.d.ts" />
	"use strict";
	exports.webShops = [
	    {
	        id: "gameology",
	        isBase: true,
	        title: "Gameology",
	        scrapingSettings: {
	            title: [{
	                    type: "string",
	                    elementSelector: "h1[itemprop='name']"
	                }],
	            price: [{
	                    type: "number",
	                    elementSelector: "#ProductPrice"
	                }],
	            image: [{
	                    type: "string",
	                    elementSelector: "#ProductPhotoImg",
	                    attribute: "src"
	                }]
	        }
	    },
	    {
	        id: "spieledeluxe",
	        isBase: false,
	        title: "Spiele-Deluxe",
	        scrapingSettings: {
	            title: [{
	                    type: "string",
	                    elementSelector: "h1[itemprop='name']"
	                }],
	            price: [{
	                    type: "number",
	                    elementSelector: "span[itemprop='price']",
	                    attribute: "content"
	                }],
	            image: [{
	                    type: "string",
	                    elementSelector: "img[itemprop='image']",
	                    attribute: "src"
	                }]
	        }
	    },
	    {
	        id: "joedodgy",
	        isBase: false,
	        title: "Joe Dodgy",
	        scrapingSettings: {
	            title: [{
	                    type: "string",
	                    elementSelector: "meta[itemprop='name']",
	                    attribute: "content"
	                }],
	            price: [{
	                    type: "number",
	                    elementSelector: "#productPrices"
	                }],
	            image: [{
	                    type: "string",
	                    elementSelector: "meta[itemprop='image']",
	                    attribute: "content"
	                }]
	        }
	    },
	    {
	        id: "mightyape",
	        isBase: false,
	        title: "Mighty Ape",
	        scrapingSettings: {
	            title: [{
	                    type: "string",
	                    elementSelector: "#product-main span[itemprop='name']"
	                }],
	            price: [{
	                    type: "number",
	                    elementSelector: "#summary meta[itemprop='price']",
	                    attribute: "content"
	                }],
	            image: [{
	                    type: "string",
	                    elementSelector: "#product-main .main-image img",
	                    attribute: "src"
	                }]
	        }
	    },
	    {
	        id: "unhalfbricking",
	        title: "Unhalfbricking",
	        isBase: false,
	        scrapingSettings: {
	            title: [{
	                    type: "string",
	                    extract: "regex",
	                    regex: "<font.*?>(.*?)<\\/font>"
	                }],
	            price: [{
	                    type: "number",
	                    extract: "regex",
	                    regex: "\\(\\$([\\d\\.]*?)\\)"
	                }],
	            image: [{
	                    type: "relativeUrl",
	                    extract: "regex",
	                    regex: '<img.*?src="(.*?images/games/.*?)".*?\\>'
	                }]
	        }
	    }
	];
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2ViLXNob3BzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsid2ViLXNob3BzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHdEQUF3RDs7QUFFM0MsZ0JBQVEsR0FDckI7SUFDSTtRQUNJLEVBQUUsRUFBRSxXQUFXO1FBQ2YsTUFBTSxFQUFFLElBQUk7UUFDWixLQUFLLEVBQUUsV0FBVztRQUNsQixnQkFBZ0IsRUFBRTtZQUNkLEtBQUssRUFBRSxDQUFDO29CQUNKLElBQUksRUFBRSxRQUFRO29CQUNkLGVBQWUsRUFBRSxxQkFBcUI7aUJBQ3pDLENBQUM7WUFDRixLQUFLLEVBQUUsQ0FBQztvQkFDSixJQUFJLEVBQUUsUUFBUTtvQkFDZCxlQUFlLEVBQUUsZUFBZTtpQkFDbkMsQ0FBQztZQUNGLEtBQUssRUFBRSxDQUFDO29CQUNKLElBQUksRUFBRSxRQUFRO29CQUNkLGVBQWUsRUFBRSxrQkFBa0I7b0JBQ25DLFNBQVMsRUFBRSxLQUFLO2lCQUNuQixDQUFDO1NBQ0w7S0FDSjtJQUNEO1FBQ0ksRUFBRSxFQUFFLGNBQWM7UUFDbEIsTUFBTSxFQUFFLEtBQUs7UUFDYixLQUFLLEVBQUUsZUFBZTtRQUN0QixnQkFBZ0IsRUFBRTtZQUNkLEtBQUssRUFBRSxDQUFDO29CQUNKLElBQUksRUFBRSxRQUFRO29CQUNkLGVBQWUsRUFBRSxxQkFBcUI7aUJBQ3pDLENBQUM7WUFDRixLQUFLLEVBQUUsQ0FBQztvQkFDSixJQUFJLEVBQUUsUUFBUTtvQkFDZCxlQUFlLEVBQUUsd0JBQXdCO29CQUN6QyxTQUFTLEVBQUUsU0FBUztpQkFDdkIsQ0FBQztZQUNGLEtBQUssRUFBRSxDQUFDO29CQUNKLElBQUksRUFBRSxRQUFRO29CQUNkLGVBQWUsRUFBRSx1QkFBdUI7b0JBQ3hDLFNBQVMsRUFBRSxLQUFLO2lCQUNuQixDQUFDO1NBQ0w7S0FDSjtJQUNEO1FBQ0ksRUFBRSxFQUFFLFVBQVU7UUFDZCxNQUFNLEVBQUUsS0FBSztRQUNiLEtBQUssRUFBRSxXQUFXO1FBQ2xCLGdCQUFnQixFQUFFO1lBQ2QsS0FBSyxFQUFFLENBQUM7b0JBQ0osSUFBSSxFQUFFLFFBQVE7b0JBQ2QsZUFBZSxFQUFFLHVCQUF1QjtvQkFDeEMsU0FBUyxFQUFFLFNBQVM7aUJBQ3ZCLENBQUM7WUFDRixLQUFLLEVBQUUsQ0FBQztvQkFDSixJQUFJLEVBQUUsUUFBUTtvQkFDZCxlQUFlLEVBQUUsZ0JBQWdCO2lCQUNwQyxDQUFDO1lBQ0YsS0FBSyxFQUFFLENBQUM7b0JBQ0osSUFBSSxFQUFFLFFBQVE7b0JBQ2QsZUFBZSxFQUFFLHdCQUF3QjtvQkFDekMsU0FBUyxFQUFFLFNBQVM7aUJBQ3ZCLENBQUM7U0FDTDtLQUNKO0lBQ0Q7UUFDSSxFQUFFLEVBQUUsV0FBVztRQUNmLE1BQU0sRUFBRSxLQUFLO1FBQ2IsS0FBSyxFQUFFLFlBQVk7UUFDbkIsZ0JBQWdCLEVBQUU7WUFDZCxLQUFLLEVBQUUsQ0FBQztvQkFDSixJQUFJLEVBQUUsUUFBUTtvQkFDZCxlQUFlLEVBQUUscUNBQXFDO2lCQUN6RCxDQUFDO1lBQ0YsS0FBSyxFQUFFLENBQUM7b0JBQ0osSUFBSSxFQUFFLFFBQVE7b0JBQ2QsZUFBZSxFQUFFLGlDQUFpQztvQkFDbEQsU0FBUyxFQUFFLFNBQVM7aUJBQ3ZCLENBQUM7WUFDRixLQUFLLEVBQUUsQ0FBQztvQkFDSixJQUFJLEVBQUUsUUFBUTtvQkFDZCxlQUFlLEVBQUUsK0JBQStCO29CQUNoRCxTQUFTLEVBQUUsS0FBSztpQkFDbkIsQ0FBQztTQUNMO0tBQ0o7SUFDRDtRQUNJLEVBQUUsRUFBRSxnQkFBZ0I7UUFDcEIsS0FBSyxFQUFFLGdCQUFnQjtRQUN2QixNQUFNLEVBQUUsS0FBSztRQUNiLGdCQUFnQixFQUFFO1lBQ2QsS0FBSyxFQUFFLENBQUM7b0JBQ0osSUFBSSxFQUFFLFFBQVE7b0JBQ2QsT0FBTyxFQUFFLE9BQU87b0JBQ2hCLEtBQUssRUFBRSx5QkFBeUI7aUJBQ25DLENBQUM7WUFDRixLQUFLLEVBQUUsQ0FBQztvQkFDSixJQUFJLEVBQUUsUUFBUTtvQkFDZCxPQUFPLEVBQUUsT0FBTztvQkFDaEIsS0FBSyxFQUFFLHVCQUF1QjtpQkFDakMsQ0FBQztZQUNGLEtBQUssRUFBRSxDQUFDO29CQUNKLElBQUksRUFBRSxhQUFhO29CQUNuQixPQUFPLEVBQUUsT0FBTztvQkFDaEIsS0FBSyxFQUFFLDBDQUEwQztpQkFDcEQsQ0FBQztTQUNMO0tBQ0o7Q0FDSixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL3NlcnZlci90eXBpbmdzL2luZGV4LmQudHNcIiAvPlxyXG5cclxuZXhwb3J0IGNvbnN0IHdlYlNob3BzOiBBcGkuV2ViU2hvcFtdID1cclxuW1xyXG4gICAge1xyXG4gICAgICAgIGlkOiBcImdhbWVvbG9neVwiLFxyXG4gICAgICAgIGlzQmFzZTogdHJ1ZSxcclxuICAgICAgICB0aXRsZTogXCJHYW1lb2xvZ3lcIixcclxuICAgICAgICBzY3JhcGluZ1NldHRpbmdzOiB7XHJcbiAgICAgICAgICAgIHRpdGxlOiBbe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJzdHJpbmdcIixcclxuICAgICAgICAgICAgICAgIGVsZW1lbnRTZWxlY3RvcjogXCJoMVtpdGVtcHJvcD0nbmFtZSddXCJcclxuICAgICAgICAgICAgfV0sXHJcbiAgICAgICAgICAgIHByaWNlOiBbe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJudW1iZXJcIixcclxuICAgICAgICAgICAgICAgIGVsZW1lbnRTZWxlY3RvcjogXCIjUHJvZHVjdFByaWNlXCJcclxuICAgICAgICAgICAgfV0sXHJcbiAgICAgICAgICAgIGltYWdlOiBbe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJzdHJpbmdcIixcclxuICAgICAgICAgICAgICAgIGVsZW1lbnRTZWxlY3RvcjogXCIjUHJvZHVjdFBob3RvSW1nXCIsXHJcbiAgICAgICAgICAgICAgICBhdHRyaWJ1dGU6IFwic3JjXCJcclxuICAgICAgICAgICAgfV1cclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGlkOiBcInNwaWVsZWRlbHV4ZVwiLFxyXG4gICAgICAgIGlzQmFzZTogZmFsc2UsXHJcbiAgICAgICAgdGl0bGU6IFwiU3BpZWxlLURlbHV4ZVwiLFxyXG4gICAgICAgIHNjcmFwaW5nU2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgdGl0bGU6IFt7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcInN0cmluZ1wiLFxyXG4gICAgICAgICAgICAgICAgZWxlbWVudFNlbGVjdG9yOiBcImgxW2l0ZW1wcm9wPSduYW1lJ11cIlxyXG4gICAgICAgICAgICB9XSxcclxuICAgICAgICAgICAgcHJpY2U6IFt7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcIm51bWJlclwiLFxyXG4gICAgICAgICAgICAgICAgZWxlbWVudFNlbGVjdG9yOiBcInNwYW5baXRlbXByb3A9J3ByaWNlJ11cIixcclxuICAgICAgICAgICAgICAgIGF0dHJpYnV0ZTogXCJjb250ZW50XCJcclxuICAgICAgICAgICAgfV0sXHJcbiAgICAgICAgICAgIGltYWdlOiBbe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJzdHJpbmdcIixcclxuICAgICAgICAgICAgICAgIGVsZW1lbnRTZWxlY3RvcjogXCJpbWdbaXRlbXByb3A9J2ltYWdlJ11cIixcclxuICAgICAgICAgICAgICAgIGF0dHJpYnV0ZTogXCJzcmNcIlxyXG4gICAgICAgICAgICB9XVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6IFwiam9lZG9kZ3lcIixcclxuICAgICAgICBpc0Jhc2U6IGZhbHNlLFxyXG4gICAgICAgIHRpdGxlOiBcIkpvZSBEb2RneVwiLFxyXG4gICAgICAgIHNjcmFwaW5nU2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgdGl0bGU6IFt7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcInN0cmluZ1wiLFxyXG4gICAgICAgICAgICAgICAgZWxlbWVudFNlbGVjdG9yOiBcIm1ldGFbaXRlbXByb3A9J25hbWUnXVwiLFxyXG4gICAgICAgICAgICAgICAgYXR0cmlidXRlOiBcImNvbnRlbnRcIlxyXG4gICAgICAgICAgICB9XSxcclxuICAgICAgICAgICAgcHJpY2U6IFt7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcIm51bWJlclwiLFxyXG4gICAgICAgICAgICAgICAgZWxlbWVudFNlbGVjdG9yOiBcIiNwcm9kdWN0UHJpY2VzXCJcclxuICAgICAgICAgICAgfV0sXHJcbiAgICAgICAgICAgIGltYWdlOiBbe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJzdHJpbmdcIixcclxuICAgICAgICAgICAgICAgIGVsZW1lbnRTZWxlY3RvcjogXCJtZXRhW2l0ZW1wcm9wPSdpbWFnZSddXCIsXHJcbiAgICAgICAgICAgICAgICBhdHRyaWJ1dGU6IFwiY29udGVudFwiXHJcbiAgICAgICAgICAgIH1dXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDogXCJtaWdodHlhcGVcIixcclxuICAgICAgICBpc0Jhc2U6IGZhbHNlLFxyXG4gICAgICAgIHRpdGxlOiBcIk1pZ2h0eSBBcGVcIixcclxuICAgICAgICBzY3JhcGluZ1NldHRpbmdzOiB7XHJcbiAgICAgICAgICAgIHRpdGxlOiBbe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJzdHJpbmdcIixcclxuICAgICAgICAgICAgICAgIGVsZW1lbnRTZWxlY3RvcjogXCIjcHJvZHVjdC1tYWluIHNwYW5baXRlbXByb3A9J25hbWUnXVwiXHJcbiAgICAgICAgICAgIH1dLFxyXG4gICAgICAgICAgICBwcmljZTogW3tcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwibnVtYmVyXCIsXHJcbiAgICAgICAgICAgICAgICBlbGVtZW50U2VsZWN0b3I6IFwiI3N1bW1hcnkgbWV0YVtpdGVtcHJvcD0ncHJpY2UnXVwiLFxyXG4gICAgICAgICAgICAgICAgYXR0cmlidXRlOiBcImNvbnRlbnRcIlxyXG4gICAgICAgICAgICB9XSxcclxuICAgICAgICAgICAgaW1hZ2U6IFt7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcInN0cmluZ1wiLFxyXG4gICAgICAgICAgICAgICAgZWxlbWVudFNlbGVjdG9yOiBcIiNwcm9kdWN0LW1haW4gLm1haW4taW1hZ2UgaW1nXCIsXHJcbiAgICAgICAgICAgICAgICBhdHRyaWJ1dGU6IFwic3JjXCJcclxuICAgICAgICAgICAgfV1cclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGlkOiBcInVuaGFsZmJyaWNraW5nXCIsXHJcbiAgICAgICAgdGl0bGU6IFwiVW5oYWxmYnJpY2tpbmdcIixcclxuICAgICAgICBpc0Jhc2U6IGZhbHNlLFxyXG4gICAgICAgIHNjcmFwaW5nU2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgdGl0bGU6IFt7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcInN0cmluZ1wiLFxyXG4gICAgICAgICAgICAgICAgZXh0cmFjdDogXCJyZWdleFwiLFxyXG4gICAgICAgICAgICAgICAgcmVnZXg6IFwiPGZvbnQuKj8+KC4qPyk8XFxcXC9mb250PlwiXHJcbiAgICAgICAgICAgIH1dLFxyXG4gICAgICAgICAgICBwcmljZTogW3tcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwibnVtYmVyXCIsXHJcbiAgICAgICAgICAgICAgICBleHRyYWN0OiBcInJlZ2V4XCIsXHJcbiAgICAgICAgICAgICAgICByZWdleDogXCJcXFxcKFxcXFwkKFtcXFxcZFxcXFwuXSo/KVxcXFwpXCJcclxuICAgICAgICAgICAgfV0sXHJcbiAgICAgICAgICAgIGltYWdlOiBbe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJyZWxhdGl2ZVVybFwiLFxyXG4gICAgICAgICAgICAgICAgZXh0cmFjdDogXCJyZWdleFwiLFxyXG4gICAgICAgICAgICAgICAgcmVnZXg6ICc8aW1nLio/c3JjPVwiKC4qP2ltYWdlcy9nYW1lcy8uKj8pXCIuKj9cXFxcPidcclxuICAgICAgICAgICAgfV1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbl07Il19

/***/ },
/* 19 */
/***/ function(module, exports) {

	/// <reference path="../../server/typings/index.d.ts" />
	"use strict";
	exports.products = [
	    {
	        id: "be81468f1c774f4c96e11d3e2c2df67e",
	        title: "DIXIT",
	        scrapingUrls: {
	            "gameology": "http://www.gameology.com.au/products/b157_dixit_b?variant=11511240901",
	            "spieledeluxe": "http://spieledeluxe.com/products/dixit-2014-edition",
	            "joedodgy": "http://www.joedodgy.com.au/index.php?main_page=product_info&cPath=3_373_374&products_id=1038",
	            "mightyape": "https://www.mightyape.com.au/product/Dixit/10339571",
	            "unhalfbricking": "http://www.unhalfbricking.com/display_game.php?gameid=453"
	        }
	    },
	    {
	        id: "43e5dc04389047c580079af28cd03dc4",
	        title: "King of Tokyo",
	        scrapingUrls: {
	            "gameology": "http://www.gameology.com.au/products/b147_kingtok_b?variant=11511228037",
	            "spieledeluxe": "http://spieledeluxe.com/products/king-of-tokyo",
	            "joedodgy": "http://www.joedodgy.com.au/index.php?main_page=product_info&cPath=3_438_439&products_id=1092",
	            "mightyape": "https://www.mightyape.com.au/product/King-of-New-York/22831407",
	            "unhalfbricking": "http://www.unhalfbricking.com/display_game.php?gameid=747"
	        }
	    },
	    {
	        id: "893ce29ee2414a8fa9378a633c3909d5",
	        title: "Talisman",
	        scrapingUrls: {
	            "gameology": "http://www.gameology.com.au/products/b175_talisman_b?variant=11511245893",
	            "spieledeluxe": "http://spieledeluxe.com/products/talisman-revised-4th-edition",
	            "joedodgy": "http://www.joedodgy.com.au/index.php?main_page=product_info&cPath=3_28_66&products_id=49",
	            "mightyape": "https://www.mightyape.com.au/product/Talisman-4th-edition/10515428"
	        }
	    },
	    {
	        id: "0cdd314016294b369c48c10694928a46",
	        title: "Takenoko",
	        scrapingUrls: {
	            "gameology": "http://www.gameology.com.au/products/b174_takenoko_b?variant=11511245125",
	            "spieledeluxe": "http://spieledeluxe.com/products/takenoko-1",
	            "joedodgy": "http://www.joedodgy.com.au/index.php?main_page=product_info&cPath=3_373_376&products_id=1533",
	            "mightyape": "https://www.mightyape.com.au/product/Takenoko/19756515",
	            "unhalfbricking": "http://www.unhalfbricking.com/display_game.php?gameid=662"
	        }
	    },
	    {
	        id: "b0c45cf6a00e4ec493b2300d12be6a84",
	        title: "Tokaido",
	        scrapingUrls: {
	            "gameology": "http://www.gameology.com.au/products/tokaido?variant=16810693829",
	            "spieledeluxe": "http://spieledeluxe.com/products/tokaido",
	            "joedodgy": "http://www.joedodgy.com.au/index.php?main_page=product_info&cPath=3_276&products_id=1644",
	            "mightyape": "https://www.mightyape.com.au/product/Tokaido/21890321",
	            "unhalfbricking": "http://www.unhalfbricking.com/display_game.php?gameid=997"
	        }
	    },
	];
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwcm9kdWN0cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSx3REFBd0Q7O0FBRTNDLGdCQUFRLEdBQWtCO0lBQ25DO1FBQ0ksRUFBRSxFQUFFLGtDQUFrQztRQUN0QyxLQUFLLEVBQUUsT0FBTztRQUNkLFlBQVksRUFBRTtZQUNWLFdBQVcsRUFBRSx1RUFBdUU7WUFDcEYsY0FBYyxFQUFFLHFEQUFxRDtZQUNyRSxVQUFVLEVBQUUsOEZBQThGO1lBQzFHLFdBQVcsRUFBRSxxREFBcUQ7WUFDbEUsZ0JBQWdCLEVBQUUsMkRBQTJEO1NBQ2hGO0tBQ0o7SUFDRDtRQUNJLEVBQUUsRUFBRSxrQ0FBa0M7UUFDdEMsS0FBSyxFQUFFLGVBQWU7UUFDdEIsWUFBWSxFQUFFO1lBQ1YsV0FBVyxFQUFFLHlFQUF5RTtZQUN0RixjQUFjLEVBQUUsZ0RBQWdEO1lBQ2hFLFVBQVUsRUFBRSw4RkFBOEY7WUFDMUcsV0FBVyxFQUFFLGdFQUFnRTtZQUM3RSxnQkFBZ0IsRUFBRSwyREFBMkQ7U0FDaEY7S0FDSjtJQUNEO1FBQ0ksRUFBRSxFQUFFLGtDQUFrQztRQUN0QyxLQUFLLEVBQUUsVUFBVTtRQUNqQixZQUFZLEVBQUU7WUFDVixXQUFXLEVBQUUsMEVBQTBFO1lBQ3ZGLGNBQWMsRUFBRSwrREFBK0Q7WUFDL0UsVUFBVSxFQUFFLDBGQUEwRjtZQUN0RyxXQUFXLEVBQUUsb0VBQW9FO1NBQ3BGO0tBQ0o7SUFDRDtRQUNJLEVBQUUsRUFBRSxrQ0FBa0M7UUFDdEMsS0FBSyxFQUFFLFVBQVU7UUFDakIsWUFBWSxFQUFFO1lBQ1YsV0FBVyxFQUFFLDBFQUEwRTtZQUN2RixjQUFjLEVBQUUsNkNBQTZDO1lBQzdELFVBQVUsRUFBRSw4RkFBOEY7WUFDMUcsV0FBVyxFQUFFLHdEQUF3RDtZQUNyRSxnQkFBZ0IsRUFBRSwyREFBMkQ7U0FDaEY7S0FDSjtJQUNEO1FBQ0ksRUFBRSxFQUFFLGtDQUFrQztRQUN0QyxLQUFLLEVBQUUsU0FBUztRQUNoQixZQUFZLEVBQUU7WUFDVixXQUFXLEVBQUUsa0VBQWtFO1lBQy9FLGNBQWMsRUFBRSwwQ0FBMEM7WUFDMUQsVUFBVSxFQUFFLDBGQUEwRjtZQUN0RyxXQUFXLEVBQUUsdURBQXVEO1lBQ3BFLGdCQUFnQixFQUFFLDJEQUEyRDtTQUNoRjtLQUNKO0NBQ0osQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi9zZXJ2ZXIvdHlwaW5ncy9pbmRleC5kLnRzXCIgLz5cclxuXHJcbmV4cG9ydCBjb25zdCBwcm9kdWN0czogQXBpLlByb2R1Y3RbXSA9IFtcclxuICAgIHtcclxuICAgICAgICBpZDogXCJiZTgxNDY4ZjFjNzc0ZjRjOTZlMTFkM2UyYzJkZjY3ZVwiLFxyXG4gICAgICAgIHRpdGxlOiBcIkRJWElUXCIsXHJcbiAgICAgICAgc2NyYXBpbmdVcmxzOiB7XHJcbiAgICAgICAgICAgIFwiZ2FtZW9sb2d5XCI6IFwiaHR0cDovL3d3dy5nYW1lb2xvZ3kuY29tLmF1L3Byb2R1Y3RzL2IxNTdfZGl4aXRfYj92YXJpYW50PTExNTExMjQwOTAxXCIsXHJcbiAgICAgICAgICAgIFwic3BpZWxlZGVsdXhlXCI6IFwiaHR0cDovL3NwaWVsZWRlbHV4ZS5jb20vcHJvZHVjdHMvZGl4aXQtMjAxNC1lZGl0aW9uXCIsXHJcbiAgICAgICAgICAgIFwiam9lZG9kZ3lcIjogXCJodHRwOi8vd3d3LmpvZWRvZGd5LmNvbS5hdS9pbmRleC5waHA/bWFpbl9wYWdlPXByb2R1Y3RfaW5mbyZjUGF0aD0zXzM3M18zNzQmcHJvZHVjdHNfaWQ9MTAzOFwiLFxyXG4gICAgICAgICAgICBcIm1pZ2h0eWFwZVwiOiBcImh0dHBzOi8vd3d3Lm1pZ2h0eWFwZS5jb20uYXUvcHJvZHVjdC9EaXhpdC8xMDMzOTU3MVwiLFxyXG4gICAgICAgICAgICBcInVuaGFsZmJyaWNraW5nXCI6IFwiaHR0cDovL3d3dy51bmhhbGZicmlja2luZy5jb20vZGlzcGxheV9nYW1lLnBocD9nYW1laWQ9NDUzXCJcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGlkOiBcIjQzZTVkYzA0Mzg5MDQ3YzU4MDA3OWFmMjhjZDAzZGM0XCIsXHJcbiAgICAgICAgdGl0bGU6IFwiS2luZyBvZiBUb2t5b1wiLFxyXG4gICAgICAgIHNjcmFwaW5nVXJsczoge1xyXG4gICAgICAgICAgICBcImdhbWVvbG9neVwiOiBcImh0dHA6Ly93d3cuZ2FtZW9sb2d5LmNvbS5hdS9wcm9kdWN0cy9iMTQ3X2tpbmd0b2tfYj92YXJpYW50PTExNTExMjI4MDM3XCIsXHJcbiAgICAgICAgICAgIFwic3BpZWxlZGVsdXhlXCI6IFwiaHR0cDovL3NwaWVsZWRlbHV4ZS5jb20vcHJvZHVjdHMva2luZy1vZi10b2t5b1wiLFxyXG4gICAgICAgICAgICBcImpvZWRvZGd5XCI6IFwiaHR0cDovL3d3dy5qb2Vkb2RneS5jb20uYXUvaW5kZXgucGhwP21haW5fcGFnZT1wcm9kdWN0X2luZm8mY1BhdGg9M180MzhfNDM5JnByb2R1Y3RzX2lkPTEwOTJcIixcclxuICAgICAgICAgICAgXCJtaWdodHlhcGVcIjogXCJodHRwczovL3d3dy5taWdodHlhcGUuY29tLmF1L3Byb2R1Y3QvS2luZy1vZi1OZXctWW9yay8yMjgzMTQwN1wiLFxyXG4gICAgICAgICAgICBcInVuaGFsZmJyaWNraW5nXCI6IFwiaHR0cDovL3d3dy51bmhhbGZicmlja2luZy5jb20vZGlzcGxheV9nYW1lLnBocD9nYW1laWQ9NzQ3XCJcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGlkOiBcIjg5M2NlMjllZTI0MTRhOGZhOTM3OGE2MzNjMzkwOWQ1XCIsXHJcbiAgICAgICAgdGl0bGU6IFwiVGFsaXNtYW5cIixcclxuICAgICAgICBzY3JhcGluZ1VybHM6IHtcclxuICAgICAgICAgICAgXCJnYW1lb2xvZ3lcIjogXCJodHRwOi8vd3d3LmdhbWVvbG9neS5jb20uYXUvcHJvZHVjdHMvYjE3NV90YWxpc21hbl9iP3ZhcmlhbnQ9MTE1MTEyNDU4OTNcIixcclxuICAgICAgICAgICAgXCJzcGllbGVkZWx1eGVcIjogXCJodHRwOi8vc3BpZWxlZGVsdXhlLmNvbS9wcm9kdWN0cy90YWxpc21hbi1yZXZpc2VkLTR0aC1lZGl0aW9uXCIsXHJcbiAgICAgICAgICAgIFwiam9lZG9kZ3lcIjogXCJodHRwOi8vd3d3LmpvZWRvZGd5LmNvbS5hdS9pbmRleC5waHA/bWFpbl9wYWdlPXByb2R1Y3RfaW5mbyZjUGF0aD0zXzI4XzY2JnByb2R1Y3RzX2lkPTQ5XCIsXHJcbiAgICAgICAgICAgIFwibWlnaHR5YXBlXCI6IFwiaHR0cHM6Ly93d3cubWlnaHR5YXBlLmNvbS5hdS9wcm9kdWN0L1RhbGlzbWFuLTR0aC1lZGl0aW9uLzEwNTE1NDI4XCJcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGlkOiBcIjBjZGQzMTQwMTYyOTRiMzY5YzQ4YzEwNjk0OTI4YTQ2XCIsXHJcbiAgICAgICAgdGl0bGU6IFwiVGFrZW5va29cIixcclxuICAgICAgICBzY3JhcGluZ1VybHM6IHtcclxuICAgICAgICAgICAgXCJnYW1lb2xvZ3lcIjogXCJodHRwOi8vd3d3LmdhbWVvbG9neS5jb20uYXUvcHJvZHVjdHMvYjE3NF90YWtlbm9rb19iP3ZhcmlhbnQ9MTE1MTEyNDUxMjVcIixcclxuICAgICAgICAgICAgXCJzcGllbGVkZWx1eGVcIjogXCJodHRwOi8vc3BpZWxlZGVsdXhlLmNvbS9wcm9kdWN0cy90YWtlbm9rby0xXCIsXHJcbiAgICAgICAgICAgIFwiam9lZG9kZ3lcIjogXCJodHRwOi8vd3d3LmpvZWRvZGd5LmNvbS5hdS9pbmRleC5waHA/bWFpbl9wYWdlPXByb2R1Y3RfaW5mbyZjUGF0aD0zXzM3M18zNzYmcHJvZHVjdHNfaWQ9MTUzM1wiLFxyXG4gICAgICAgICAgICBcIm1pZ2h0eWFwZVwiOiBcImh0dHBzOi8vd3d3Lm1pZ2h0eWFwZS5jb20uYXUvcHJvZHVjdC9UYWtlbm9rby8xOTc1NjUxNVwiLFxyXG4gICAgICAgICAgICBcInVuaGFsZmJyaWNraW5nXCI6IFwiaHR0cDovL3d3dy51bmhhbGZicmlja2luZy5jb20vZGlzcGxheV9nYW1lLnBocD9nYW1laWQ9NjYyXCJcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGlkOiBcImIwYzQ1Y2Y2YTAwZTRlYzQ5M2IyMzAwZDEyYmU2YTg0XCIsXHJcbiAgICAgICAgdGl0bGU6IFwiVG9rYWlkb1wiLFxyXG4gICAgICAgIHNjcmFwaW5nVXJsczoge1xyXG4gICAgICAgICAgICBcImdhbWVvbG9neVwiOiBcImh0dHA6Ly93d3cuZ2FtZW9sb2d5LmNvbS5hdS9wcm9kdWN0cy90b2thaWRvP3ZhcmlhbnQ9MTY4MTA2OTM4MjlcIixcclxuICAgICAgICAgICAgXCJzcGllbGVkZWx1eGVcIjogXCJodHRwOi8vc3BpZWxlZGVsdXhlLmNvbS9wcm9kdWN0cy90b2thaWRvXCIsXHJcbiAgICAgICAgICAgIFwiam9lZG9kZ3lcIjogXCJodHRwOi8vd3d3LmpvZWRvZGd5LmNvbS5hdS9pbmRleC5waHA/bWFpbl9wYWdlPXByb2R1Y3RfaW5mbyZjUGF0aD0zXzI3NiZwcm9kdWN0c19pZD0xNjQ0XCIsXHJcbiAgICAgICAgICAgIFwibWlnaHR5YXBlXCI6IFwiaHR0cHM6Ly93d3cubWlnaHR5YXBlLmNvbS5hdS9wcm9kdWN0L1Rva2FpZG8vMjE4OTAzMjFcIixcclxuICAgICAgICAgICAgXCJ1bmhhbGZicmlja2luZ1wiOiBcImh0dHA6Ly93d3cudW5oYWxmYnJpY2tpbmcuY29tL2Rpc3BsYXlfZ2FtZS5waHA/Z2FtZWlkPTk5N1wiXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXTsiXX0=

/***/ }
/******/ ]);
//# sourceMappingURL=import-test-data.js.map