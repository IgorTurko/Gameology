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
	var mongo_product_storage_1 = __webpack_require__(19);
	var product_service_1 = __webpack_require__(20);
	var web_shops_1 = __webpack_require__(26);
	var products_1 = __webpack_require__(27);
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
	                deliveryPrice: webShop.deliveryPrice
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9uZ28td2ViLXNob3Atc3RvcmFnZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1vbmdvLXdlYi1zaG9wLXN0b3JhZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsaURBQWlEOztBQUVqRCxtQkFBcUIsc0JBQXNCLENBQUMsQ0FBQTtBQUU1QztJQUNJLDZCQUFvQixFQUFZO1FBQVosT0FBRSxHQUFGLEVBQUUsQ0FBVTtRQUM1QixFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztZQUNKLE1BQU0sSUFBSSxLQUFLLENBQUMsaUJBQWlCLENBQUMsQ0FBQztJQUMzQyxDQUFDO0lBRUQsaUNBQUcsR0FBSDtRQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRTthQUNULFVBQVUsQ0FBQyxZQUFRLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQzthQUN6QyxJQUFJLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUF0QixDQUFzQixDQUFDO2FBQ2pDLElBQUksQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsQ0FBQyxPQUFPLEVBQUUsRUFBWCxDQUFXLENBQUMsQ0FBQztJQUNoQyxDQUFDO0lBRUQsaUNBQUcsR0FBSCxVQUFJLEVBQVU7UUFDVixFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztZQUNKLE1BQU0sSUFBSSxLQUFLLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQUV2QyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUU7YUFDVCxVQUFVLENBQUMsWUFBUSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUM7YUFDekMsSUFBSSxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUE5QixDQUE4QixDQUFDO2FBQ3pDLElBQUksQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQWpCLENBQWlCLENBQUMsQ0FBQztJQUN0QyxDQUFDO0lBRUQsa0NBQUksR0FBSixVQUFLLE9BQW9CO1FBQ3JCLEVBQUUsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDO1lBQ1QsTUFBTSxJQUFJLEtBQUssQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO1FBRTVDLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRTthQUNULFVBQVUsQ0FBQyxZQUFRLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQzthQUN6QyxJQUFJLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLENBQUMsU0FBUyxDQUNsQjtZQUNJLEVBQUUsRUFBRSxPQUFPLENBQUMsRUFBRTtTQUNqQixFQUNEO1lBQ0ksSUFBSSxFQUFFO2dCQUNGLGFBQWEsRUFBRSxPQUFPLENBQUMsYUFBYTthQUN2QztTQUNKLENBQ0osRUFUVSxDQVNWLENBQUM7YUFDRCxJQUFJLENBQUMsY0FBTSxPQUFBLE9BQU8sRUFBUCxDQUFPLENBQUMsQ0FBQztJQUM3QixDQUFDO0lBRUQsaUNBQUcsR0FBSCxVQUFJLE9BQW9CO1FBQ3BCLEVBQUUsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDO1lBQ1QsTUFBTSxJQUFJLEtBQUssQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO1FBRTVDLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRTthQUNULFVBQVUsQ0FBQyxZQUFRLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQzthQUN6QyxJQUFJLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLENBQUMsU0FBUyxDQUNsQjtZQUNJLEVBQUUsRUFBRSxPQUFPLENBQUMsRUFBRTtTQUNqQixFQUNELE9BQU8sRUFDUDtZQUNJLE1BQU0sRUFBRSxJQUFJO1NBQ2YsQ0FDSixFQVJVLENBUVYsQ0FBQzthQUNELElBQUksQ0FBQyxjQUFNLE9BQUEsT0FBTyxFQUFQLENBQU8sQ0FBQyxDQUFDO0lBQzdCLENBQUM7SUFDTCwwQkFBQztBQUFELENBQUMsQUEzREQsSUEyREM7QUEzREQ7cUNBMkRDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vdHlwaW5ncy9pbmRleC5kLnRzXCIgLz5cclxuXHJcbmltcG9ydCBEYXRhYmFzZSBmcm9tIFwiLi4vLi4vZGF0YS1hY2Nlc3MvZGJcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1vbmdvV2ViU2hvcFN0b3JhZ2UgaW1wbGVtZW50cyBXZWJTaG9wcy5JV2ViU2hvcFN0b3JhZ2Uge1xyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBkYjogRGF0YWJhc2UpIHtcclxuICAgICAgICBpZiAoIWRiKVxyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJkYiBpcyB1bmRlZmluZWRcIik7XHJcbiAgICB9XHJcblxyXG4gICAgYWxsKCk6IFByb21pc2U8QXBpLldlYlNob3BbXT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmRiXHJcbiAgICAgICAgICAgIC5jb2xsZWN0aW9uKERhdGFiYXNlLkNvbGxlY3Rpb25zLndlYnNob3BzKVxyXG4gICAgICAgICAgICAudGhlbihjID0+IGMuZmluZCh7fSwgeyBfaWQ6IDAgfSkpXHJcbiAgICAgICAgICAgIC50aGVuKGMgPT4gYy50b0FycmF5KCkpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uZShpZDogc3RyaW5nKTogUHJvbWlzZTxBcGkuV2ViU2hvcD4ge1xyXG4gICAgICAgIGlmICghaWQpXHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcImlkIGlzIHVuZGVmaW5lZFwiKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZGJcclxuICAgICAgICAgICAgLmNvbGxlY3Rpb24oRGF0YWJhc2UuQ29sbGVjdGlvbnMud2Vic2hvcHMpXHJcbiAgICAgICAgICAgIC50aGVuKGMgPT4gYy5maW5kKHsgaWQ6IGlkIH0sIHsgX2lkOiAwIH0pKVxyXG4gICAgICAgICAgICAudGhlbihjID0+IGMubGltaXQoMSkubmV4dCgpKTtcclxuICAgIH1cclxuXHJcbiAgICBzYXZlKHdlYlNob3A6IEFwaS5XZWJTaG9wKTogUHJvbWlzZTxBcGkuV2ViU2hvcD4ge1xyXG4gICAgICAgIGlmICghd2ViU2hvcClcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwid2ViU2hvcCBpcyB1bmRlZmluZWRcIik7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLmRiXHJcbiAgICAgICAgICAgIC5jb2xsZWN0aW9uKERhdGFiYXNlLkNvbGxlY3Rpb25zLndlYnNob3BzKVxyXG4gICAgICAgICAgICAudGhlbihjID0+IGMudXBkYXRlT25lKFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGlkOiB3ZWJTaG9wLmlkXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICRzZXQ6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVsaXZlcnlQcmljZTogd2ViU2hvcC5kZWxpdmVyeVByaWNlXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApKVxyXG4gICAgICAgICAgICAudGhlbigoKSA9PiB3ZWJTaG9wKTtcclxuICAgIH1cclxuXHJcbiAgICBwdXQod2ViU2hvcDogQXBpLldlYlNob3ApOiBQcm9taXNlPEFwaS5XZWJTaG9wPiB7XHJcbiAgICAgICAgaWYgKCF3ZWJTaG9wKVxyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJ3ZWJTaG9wIGlzIHVuZGVmaW5lZFwiKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZGJcclxuICAgICAgICAgICAgLmNvbGxlY3Rpb24oRGF0YWJhc2UuQ29sbGVjdGlvbnMud2Vic2hvcHMpXHJcbiAgICAgICAgICAgIC50aGVuKGMgPT4gYy51cGRhdGVPbmUoXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWQ6IHdlYlNob3AuaWRcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB3ZWJTaG9wLFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHVwc2VydDogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApKVxyXG4gICAgICAgICAgICAudGhlbigoKSA9PiB3ZWJTaG9wKTtcclxuICAgIH1cclxufSJdfQ==

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
	        return new Promise(function (resolve) {
	            var validationResult = _this.validator.validate(webShop);
	            if (!validationResult.ok)
	                resolve(validationResult);
	            else {
	                webShop = validationResult.entity;
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
	            }
	        });
	    };
	    WebShopService.prototype.put = function (webShop) {
	        var _this = this;
	        if (!webShop)
	            throw new Error("webShop is undefined");
	        return new Promise(function (resolve) {
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
	    return WebShopService;
	}());
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = WebShopService;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2ViLXNob3Atc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIndlYi1zaG9wLXNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsaURBQWlEOztBQUVqRCxtQ0FBNkIsc0JBQXNCLENBQUMsQ0FBQTtBQUVwRDtJQUlJLHdCQUFvQixPQUFpQztRQUFqQyxZQUFPLEdBQVAsT0FBTyxDQUEwQjtRQUY3QyxjQUFTLEdBQUcsSUFBSSw0QkFBZ0IsRUFBRSxDQUFDO1FBR3ZDLEVBQUUsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDO1lBQ1QsTUFBTSxJQUFJLEtBQUssQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO0lBQ2hELENBQUM7SUFFRCw0QkFBRyxHQUFIO1FBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLENBQUM7SUFDOUIsQ0FBQztJQUVELDRCQUFHLEdBQUgsVUFBSSxTQUFpQjtRQUNqQixFQUFFLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztZQUNYLE1BQU0sSUFBSSxLQUFLLENBQUMsd0JBQXdCLENBQUMsQ0FBQztRQUM5QyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDdkMsQ0FBQztJQUVELDZCQUFJLEdBQUosVUFBSyxPQUFvQjtRQUF6QixpQkE2QkM7UUE1QkcsRUFBRSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUM7WUFDVCxNQUFNLElBQUksS0FBSyxDQUFDLHNCQUFzQixDQUFDLENBQUM7UUFFNUMsTUFBTSxDQUFDLElBQUksT0FBTyxDQUFDLFVBQUEsT0FBTztZQUN0QixJQUFNLGdCQUFnQixHQUFHLEtBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBRTFELEVBQUUsQ0FBQyxDQUFDLENBQUMsZ0JBQWdCLENBQUMsRUFBRSxDQUFDO2dCQUNyQixPQUFPLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztZQUM5QixJQUFJLENBQUMsQ0FBQztnQkFFRixPQUFPLEdBQUcsZ0JBQWdCLENBQUMsTUFBTSxDQUFDO2dCQUVsQyxLQUFJLENBQUMsT0FBTztxQkFDUCxJQUFJLENBQUMsT0FBTyxDQUFDO3FCQUNiLElBQUksQ0FBQyxjQUFNLE9BQUEsS0FBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLEVBQXBCLENBQW9CLENBQUM7cUJBQ2hDLElBQUksQ0FBQyxVQUFBLE1BQU0sSUFBSSxPQUFBLE9BQU8sQ0FBQyxNQUFNLENBQUMsRUFBZixDQUFlLENBQUM7cUJBQy9CLEtBQUssQ0FBQyxVQUFBLEdBQUc7b0JBQ04sSUFBTSxXQUFXLEdBQXlCO3dCQUN0QyxFQUFFLEVBQUUsS0FBSzt3QkFDVCxNQUFNLEVBQUU7NEJBQ0osT0FBTyxFQUFFLEdBQUc7eUJBQ2Y7cUJBQ0osQ0FBQztvQkFFRixPQUFPLENBQUMsV0FBVyxDQUFDLENBQUM7Z0JBQ3pCLENBQUMsQ0FBQyxDQUFDO1lBQ1gsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELDRCQUFHLEdBQUgsVUFBSSxPQUFvQjtRQUF4QixpQkFxQkM7UUFwQkcsRUFBRSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUM7WUFDVCxNQUFNLElBQUksS0FBSyxDQUFDLHNCQUFzQixDQUFDLENBQUM7UUFFNUMsTUFBTSxDQUFDLElBQUksT0FBTyxDQUFDLFVBQUEsT0FBTztZQUV0QixLQUFJLENBQUMsT0FBTztpQkFDUCxHQUFHLENBQUMsT0FBTyxDQUFDO2lCQUNaLElBQUksQ0FBQyxjQUFNLE9BQUEsS0FBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLEVBQXBCLENBQW9CLENBQUM7aUJBQ2hDLElBQUksQ0FBQyxVQUFBLE1BQU0sSUFBSSxPQUFBLE9BQU8sQ0FBQyxNQUFNLENBQUMsRUFBZixDQUFlLENBQUM7aUJBQy9CLEtBQUssQ0FBQyxVQUFBLEdBQUc7Z0JBQ04sSUFBTSxXQUFXLEdBQXlCO29CQUN0QyxFQUFFLEVBQUUsS0FBSztvQkFDVCxNQUFNLEVBQUU7d0JBQ0osT0FBTyxFQUFFLEdBQUc7cUJBQ2Y7aUJBQ0osQ0FBQztnQkFDRixPQUFPLENBQUMsV0FBVyxDQUFDLENBQUM7WUFDekIsQ0FBQyxDQUFDLENBQUM7UUFFWCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFDTCxxQkFBQztBQUFELENBQUMsQUF4RUQsSUF3RUM7QUF4RUQ7Z0NBd0VDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vdHlwaW5ncy9pbmRleC5kLnRzXCIgLz5cclxuXHJcbmltcG9ydCBXZWJTaG9wVmFsaWRhdG9yIGZyb20gXCIuL3dlYi1zaG9wLXZhbGlkYXRvclwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgV2ViU2hvcFNlcnZpY2Uge1xyXG5cclxuICAgIHByaXZhdGUgdmFsaWRhdG9yID0gbmV3IFdlYlNob3BWYWxpZGF0b3IoKTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHN0b3JhZ2U6IFdlYlNob3BzLklXZWJTaG9wU3RvcmFnZSkge1xyXG4gICAgICAgIGlmICghc3RvcmFnZSlcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwic3RvcmFnZSBpcyB1bmRlZmluZWRcIik7XHJcbiAgICB9XHJcblxyXG4gICAgYWxsKCk6IFByb21pc2U8QXBpLldlYlNob3BbXT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnN0b3JhZ2UuYWxsKCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25lKHdlYlNob3BJZDogc3RyaW5nKTogUHJvbWlzZTxBcGkuV2ViU2hvcD4ge1xyXG4gICAgICAgIGlmICghd2ViU2hvcElkKVxyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJ3ZWJTaG9wSWQgaXMgdW5kZWZpbmVkXCIpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLnN0b3JhZ2Uub25lKHdlYlNob3BJZCk7XHJcbiAgICB9XHJcblxyXG4gICAgc2F2ZSh3ZWJTaG9wOiBBcGkuV2ViU2hvcCk6IFByb21pc2U8QXBpLldlYlNob3AgfCBBcGkuVmFsaWRhdGlvblJlc3VsdD4ge1xyXG4gICAgICAgIGlmICghd2ViU2hvcClcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwid2ViU2hvcCBpcyB1bmRlZmluZWRcIik7XHJcblxyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcclxuICAgICAgICAgICAgY29uc3QgdmFsaWRhdGlvblJlc3VsdCA9IHRoaXMudmFsaWRhdG9yLnZhbGlkYXRlKHdlYlNob3ApO1xyXG5cclxuICAgICAgICAgICAgaWYgKCF2YWxpZGF0aW9uUmVzdWx0Lm9rKVxyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZSh2YWxpZGF0aW9uUmVzdWx0KTtcclxuICAgICAgICAgICAgZWxzZSB7XHJcblxyXG4gICAgICAgICAgICAgICAgd2ViU2hvcCA9IHZhbGlkYXRpb25SZXN1bHQuZW50aXR5O1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuc3RvcmFnZVxyXG4gICAgICAgICAgICAgICAgICAgIC5zYXZlKHdlYlNob3ApXHJcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oKCkgPT4gdGhpcy5vbmUod2ViU2hvcC5pZCkpXHJcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oZW50aXR5ID0+IHJlc29sdmUoZW50aXR5KSlcclxuICAgICAgICAgICAgICAgICAgICAuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZXJyb3JSZXN1bHQ6IEFwaS5WYWxpZGF0aW9uUmVzdWx0ID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb2s6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogZXJyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKGVycm9yUmVzdWx0KTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1dCh3ZWJTaG9wOiBBcGkuV2ViU2hvcCk6IFByb21pc2U8QXBpLldlYlNob3AgfCBBcGkuVmFsaWRhdGlvblJlc3VsdD4ge1xyXG4gICAgICAgIGlmICghd2ViU2hvcClcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwid2ViU2hvcCBpcyB1bmRlZmluZWRcIik7XHJcblxyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuc3RvcmFnZVxyXG4gICAgICAgICAgICAgICAgLnB1dCh3ZWJTaG9wKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oKCkgPT4gdGhpcy5vbmUod2ViU2hvcC5pZCkpXHJcbiAgICAgICAgICAgICAgICAudGhlbihlbnRpdHkgPT4gcmVzb2x2ZShlbnRpdHkpKVxyXG4gICAgICAgICAgICAgICAgLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZXJyb3JSZXN1bHQ6IEFwaS5WYWxpZGF0aW9uUmVzdWx0ID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvazogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogZXJyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoZXJyb3JSZXN1bHQpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59Il19

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	/// <reference path="../../typings/index.d.ts" />
	"use strict";
	var v = __webpack_require__(10);
	var WebShopValidator = (function () {
	    function WebShopValidator() {
	        /** Only updateable fields is validated */
	        this.validator = v.expandableObject({
	            deliveryPrice: v.num()
	                .must(function (price) { return price > 0; }, "Delivery price must be greater than zero")
	        });
	    }
	    WebShopValidator.prototype.validate = function (webShop) {
	        if (!webShop)
	            throw new Error("webShop is undefined");
	        var result = v.validate(webShop, this.validator);
	        return {
	            ok: result.valid,
	            entity: result.value,
	            errors: result.errors
	        };
	    };
	    return WebShopValidator;
	}());
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = WebShopValidator;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2ViLXNob3AtdmFsaWRhdG9yLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsid2ViLXNob3AtdmFsaWRhdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGlEQUFpRDs7QUFFakQsSUFBWSxDQUFDLFdBQU0saUJBQWlCLENBQUMsQ0FBQTtBQUVyQztJQUFBO1FBQ0ksMENBQTBDO1FBQ25DLGNBQVMsR0FBOEMsQ0FBQyxDQUFDLGdCQUFnQixDQUEyQjtZQUN2RyxhQUFhLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRTtpQkFDakIsSUFBSSxDQUFDLFVBQUEsS0FBSyxJQUFJLE9BQUEsS0FBSyxHQUFHLENBQUMsRUFBVCxDQUFTLEVBQUUsMENBQTBDLENBQUM7U0FDNUUsQ0FBQyxDQUFDO0lBY1AsQ0FBQztJQVhHLG1DQUFRLEdBQVIsVUFBUyxPQUFvQjtRQUN6QixFQUFFLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQztZQUNULE1BQU0sSUFBSSxLQUFLLENBQUMsc0JBQXNCLENBQUMsQ0FBQztRQUU1QyxJQUFNLE1BQU0sR0FBRyxDQUFDLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDbkQsTUFBTSxDQUFDO1lBQ0gsRUFBRSxFQUFFLE1BQU0sQ0FBQyxLQUFLO1lBQ2hCLE1BQU0sRUFBRSxNQUFNLENBQUMsS0FBSztZQUNwQixNQUFNLEVBQUUsTUFBTSxDQUFDLE1BQU07U0FDeEIsQ0FBQztJQUNOLENBQUM7SUFDTCx1QkFBQztBQUFELENBQUMsQUFuQkQsSUFtQkM7QUFuQkQ7a0NBbUJDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vdHlwaW5ncy9pbmRleC5kLnRzXCIgLz5cclxuXHJcbmltcG9ydCAqIGFzIHYgZnJvbSBcIi4uLy4uL3ZhbGlkYXRvclwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgV2ViU2hvcFZhbGlkYXRvciB7XHJcbiAgICAvKiogT25seSB1cGRhdGVhYmxlIGZpZWxkcyBpcyB2YWxpZGF0ZWQgKi9cclxuICAgIHB1YmxpYyB2YWxpZGF0b3I6IElWYWxpZGF0aW9uUnVsZTxBcGkuV2ViU2hvcCwgQXBpLldlYlNob3A+ID0gdi5leHBhbmRhYmxlT2JqZWN0PEFwaS5XZWJTaG9wLCBBcGkuV2ViU2hvcD4oe1xyXG4gICAgICAgIGRlbGl2ZXJ5UHJpY2U6IHYubnVtKClcclxuICAgICAgICAgICAgLm11c3QocHJpY2UgPT4gcHJpY2UgPiAwLCBcIkRlbGl2ZXJ5IHByaWNlIG11c3QgYmUgZ3JlYXRlciB0aGFuIHplcm9cIilcclxuICAgIH0pO1xyXG5cclxuXHJcbiAgICB2YWxpZGF0ZSh3ZWJTaG9wOiBBcGkuV2ViU2hvcCk6IEFwaS5FbnRpdHlWYWxpZGF0aW9uUmVzdWx0PEFwaS5XZWJTaG9wPiB7XHJcbiAgICAgICAgaWYgKCF3ZWJTaG9wKVxyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJ3ZWJTaG9wIGlzIHVuZGVmaW5lZFwiKTtcclxuXHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gdi52YWxpZGF0ZSh3ZWJTaG9wLCB0aGlzLnZhbGlkYXRvcik7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgb2s6IHJlc3VsdC52YWxpZCxcclxuICAgICAgICAgICAgZW50aXR5OiByZXN1bHQudmFsdWUsXHJcbiAgICAgICAgICAgIGVycm9yczogcmVzdWx0LmVycm9yc1xyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbn0iXX0=

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	/// <reference path="./validator.d.ts" />
	var error_accumulator_1 = __webpack_require__(11);
	var validation_context_1 = __webpack_require__(12);
	__export(__webpack_require__(13));
	function validate(value, validator) {
	    var errorAccumulator = new error_accumulator_1.default();
	    var validationContext = new validation_context_1.default("", errorAccumulator);
	    var result = validator.run(value, validationContext, value, value);
	    var errors = errorAccumulator.errors();
	    if (Object.keys(errors).length) {
	        return {
	            valid: false,
	            value: result,
	            errors: errors
	        };
	    }
	    return {
	        valid: true,
	        value: result
	    };
	}
	exports.validate = validate;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEseUNBQXlDO0FBQ3pDLGtDQUE2QixxQkFBcUIsQ0FBQyxDQUFBO0FBQ25ELG1DQUE4QixzQkFBc0IsQ0FBQyxDQUFBO0FBSXJELGlCQUFjLFNBQVMsQ0FBQyxFQUFBO0FBRXhCLGtCQUFvQyxLQUFVLEVBQUUsU0FBcUM7SUFDakYsSUFBTSxnQkFBZ0IsR0FBRyxJQUFJLDJCQUFnQixFQUFFLENBQUM7SUFDaEQsSUFBTSxpQkFBaUIsR0FBRyxJQUFJLDRCQUFpQixDQUFDLEVBQUUsRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDO0lBRXRFLElBQU0sTUFBTSxHQUFHLFNBQVMsQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLGlCQUFpQixFQUFFLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQztJQUNyRSxJQUFNLE1BQU0sR0FBRyxnQkFBZ0IsQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUV6QyxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFDN0IsTUFBTSxDQUFDO1lBQ0gsS0FBSyxFQUFFLEtBQUs7WUFDWixLQUFLLEVBQUUsTUFBTTtZQUNiLE1BQU0sRUFBRSxNQUFNO1NBQ2pCLENBQUM7SUFDTixDQUFDO0lBRUQsTUFBTSxDQUFDO1FBQ0gsS0FBSyxFQUFFLElBQUk7UUFDWCxLQUFLLEVBQUUsTUFBTTtLQUNoQixDQUFBO0FBQ0wsQ0FBQztBQW5CZSxnQkFBUSxXQW1CdkIsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL3ZhbGlkYXRvci5kLnRzXCIgLz5cclxuaW1wb3J0IEVycm9yQWNjdW11bGF0b3IgZnJvbSBcIi4vZXJyb3ItYWNjdW11bGF0b3JcIjtcclxuaW1wb3J0IFZhbGlkYXRpb25Db250ZXh0IGZyb20gXCIuL3ZhbGlkYXRpb24tY29udGV4dFwiO1xyXG5cclxuaW1wb3J0ICogYXMgciBmcm9tIFwiLi9ydWxlc1wiO1xyXG5cclxuZXhwb3J0ICogZnJvbSBcIi4vcnVsZXNcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB2YWxpZGF0ZTxUSW4sIFRPdXQ+KHZhbHVlOiBUSW4sIHZhbGlkYXRvcjogSVZhbGlkYXRpb25SdWxlPFRJbiwgVE91dD4pOiBWYWxpZGF0aW9uUmVzdWx0PFRPdXQ+IHtcclxuICAgIGNvbnN0IGVycm9yQWNjdW11bGF0b3IgPSBuZXcgRXJyb3JBY2N1bXVsYXRvcigpO1xyXG4gICAgY29uc3QgdmFsaWRhdGlvbkNvbnRleHQgPSBuZXcgVmFsaWRhdGlvbkNvbnRleHQoXCJcIiwgZXJyb3JBY2N1bXVsYXRvcik7XHJcblxyXG4gICAgY29uc3QgcmVzdWx0ID0gdmFsaWRhdG9yLnJ1bih2YWx1ZSwgdmFsaWRhdGlvbkNvbnRleHQsIHZhbHVlLCB2YWx1ZSk7XHJcbiAgICBjb25zdCBlcnJvcnMgPSBlcnJvckFjY3VtdWxhdG9yLmVycm9ycygpO1xyXG5cclxuICAgIGlmIChPYmplY3Qua2V5cyhlcnJvcnMpLmxlbmd0aCkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHZhbGlkOiBmYWxzZSxcclxuICAgICAgICAgICAgdmFsdWU6IHJlc3VsdCxcclxuICAgICAgICAgICAgZXJyb3JzOiBlcnJvcnNcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdmFsaWQ6IHRydWUsXHJcbiAgICAgICAgdmFsdWU6IHJlc3VsdFxyXG4gICAgfVxyXG59Il19

/***/ },
/* 11 */
/***/ function(module, exports) {

	/// <reference path="./validator.d.ts" />
	"use strict";
	var ErrorAccumulator = (function () {
	    function ErrorAccumulator() {
	        this.errorHash = {};
	    }
	    ErrorAccumulator.prototype.report = function (path, errorMessage) {
	        if (!errorMessage) {
	            return;
	        }
	        var messages = this.errorHash[path] = (this.errorHash[path] || []);
	        messages.push(errorMessage);
	    };
	    ErrorAccumulator.prototype.errors = function () {
	        return this.errorHash;
	    };
	    return ErrorAccumulator;
	}());
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = ErrorAccumulator;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXJyb3ItYWNjdW11bGF0b3IuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJlcnJvci1hY2N1bXVsYXRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSx5Q0FBeUM7O0FBRXpDO0lBQUE7UUFDWSxjQUFTLEdBQXFCLEVBQUUsQ0FBQztJQWU3QyxDQUFDO0lBYkcsaUNBQU0sR0FBTixVQUFPLElBQVksRUFBRSxZQUFvQjtRQUNyQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7WUFDaEIsTUFBTSxDQUFDO1FBQ1gsQ0FBQztRQUVELElBQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO1FBRXJFLFFBQVEsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDaEMsQ0FBQztJQUVELGlDQUFNLEdBQU47UUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUMxQixDQUFDO0lBQ0wsdUJBQUM7QUFBRCxDQUFDLEFBaEJELElBZ0JDO0FBaEJEO2tDQWdCQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4vdmFsaWRhdG9yLmQudHNcIiAvPlxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXJyb3JBY2N1bXVsYXRvciB7XHJcbiAgICBwcml2YXRlIGVycm9ySGFzaDogVmFsaWRhdGlvbkVycm9ycyA9IHt9O1xyXG5cclxuICAgIHJlcG9ydChwYXRoOiBzdHJpbmcsIGVycm9yTWVzc2FnZTogc3RyaW5nKSB7XHJcbiAgICAgICAgaWYgKCFlcnJvck1lc3NhZ2UpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgbWVzc2FnZXMgPSB0aGlzLmVycm9ySGFzaFtwYXRoXSA9ICh0aGlzLmVycm9ySGFzaFtwYXRoXSB8fCBbXSk7XHJcblxyXG4gICAgICAgIG1lc3NhZ2VzLnB1c2goZXJyb3JNZXNzYWdlKTtcclxuICAgIH1cclxuXHJcbiAgICBlcnJvcnMoKTogVmFsaWRhdGlvbkVycm9ycyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZXJyb3JIYXNoO1xyXG4gICAgfVxyXG59Il19

/***/ },
/* 12 */
/***/ function(module, exports) {

	/// <reference path="./validator.d.ts" />
	"use strict";
	var ValidationContext = (function () {
	    function ValidationContext(path, errorAccumulator, errorCallback) {
	        if (errorCallback === void 0) { errorCallback = null; }
	        this.path = path;
	        this.errorAccumulator = errorAccumulator;
	        this.errorCallback = errorCallback;
	    }
	    ValidationContext.prototype.reportError = function (message) {
	        if (this.errorCallback && !this.errorCallback(message))
	            return;
	        this.errorAccumulator
	            .report(this.path, message);
	    };
	    ValidationContext.prototype.property = function (propertyName, errorCallback) {
	        return this.nest(propertyName, errorCallback);
	    };
	    ValidationContext.prototype.index = function (index, errorCallback) {
	        return this.nest("[" + index + "]", errorCallback);
	    };
	    ValidationContext.prototype.nest = function (path, errorCallback) {
	        if (!path) {
	            throw new Error("path is undefined");
	        }
	        var fullPath = path;
	        if (this.path) {
	            fullPath = path[0] === "[" ? this.path + path : this.path + "." + path;
	        }
	        return new ValidationContext(fullPath, this.errorAccumulator, errorCallback);
	    };
	    return ValidationContext;
	}());
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = ValidationContext;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdGlvbi1jb250ZXh0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidmFsaWRhdGlvbi1jb250ZXh0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHlDQUF5Qzs7QUFJekM7SUFDSSwyQkFDVyxJQUFZLEVBQ1gsZ0JBQWtDLEVBQ2xDLGFBQXVEO1FBQS9ELDZCQUErRCxHQUEvRCxvQkFBK0Q7UUFGeEQsU0FBSSxHQUFKLElBQUksQ0FBUTtRQUNYLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDbEMsa0JBQWEsR0FBYixhQUFhLENBQTBDO0lBQ25FLENBQUM7SUFFRCx1Q0FBVyxHQUFYLFVBQVksT0FBZTtRQUN2QixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUNuRCxNQUFNLENBQUM7UUFFWCxJQUFJLENBQUMsZ0JBQWdCO2FBQ2hCLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFFRCxvQ0FBUSxHQUFSLFVBQVMsWUFBb0IsRUFBRSxhQUFpRDtRQUM1RSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsYUFBYSxDQUFDLENBQUM7SUFDbEQsQ0FBQztJQUVELGlDQUFLLEdBQUwsVUFBTSxLQUFhLEVBQUUsYUFBaUQ7UUFDbEUsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBSSxLQUFLLE1BQUcsRUFBRSxhQUFhLENBQUMsQ0FBQztJQUNsRCxDQUFDO0lBRU8sZ0NBQUksR0FBWixVQUFhLElBQVksRUFBRSxhQUFnRDtRQUN2RSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDUixNQUFNLElBQUksS0FBSyxDQUFDLG1CQUFtQixDQUFDLENBQUM7UUFDekMsQ0FBQztRQUVELElBQUksUUFBUSxHQUFHLElBQUksQ0FBQztRQUNwQixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUNaLFFBQVEsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBRyxHQUFHLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQztRQUMzRSxDQUFDO1FBRUQsTUFBTSxDQUFDLElBQUksaUJBQWlCLENBQ3hCLFFBQVEsRUFDUixJQUFJLENBQUMsZ0JBQWdCLEVBQ3JCLGFBQWEsQ0FDaEIsQ0FBQztJQUNOLENBQUM7SUFDTCx3QkFBQztBQUFELENBQUMsQUF2Q0QsSUF1Q0M7QUF2Q0Q7bUNBdUNDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi92YWxpZGF0b3IuZC50c1wiIC8+XHJcblxyXG5pbXBvcnQgRXJyb3JBY2N1bXVsYXRvciBmcm9tIFwiLi9lcnJvci1hY2N1bXVsYXRvclwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmFsaWRhdGlvbkNvbnRleHQgaW1wbGVtZW50cyBJVmFsaWRhdGlvbkNvbnRleHQge1xyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHVibGljIHBhdGg6IHN0cmluZyxcclxuICAgICAgICBwcml2YXRlIGVycm9yQWNjdW11bGF0b3I6IEVycm9yQWNjdW11bGF0b3IsXHJcbiAgICAgICAgcHJpdmF0ZSBlcnJvckNhbGxiYWNrOiAoZXJyb3JNZXNzYWdlOiBzdHJpbmcpID0+IGJvb2xlYW4gPSBudWxsKSB7XHJcbiAgICB9XHJcblxyXG4gICAgcmVwb3J0RXJyb3IobWVzc2FnZTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMuZXJyb3JDYWxsYmFjayAmJiAhdGhpcy5lcnJvckNhbGxiYWNrKG1lc3NhZ2UpKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcblxyXG4gICAgICAgIHRoaXMuZXJyb3JBY2N1bXVsYXRvclxyXG4gICAgICAgICAgICAucmVwb3J0KHRoaXMucGF0aCwgbWVzc2FnZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvcGVydHkocHJvcGVydHlOYW1lOiBzdHJpbmcsIGVycm9yQ2FsbGJhY2s/OiAoZXJyb3JNZXNzYWdlOiBzdHJpbmcpID0+IGJvb2xlYW4pOiBWYWxpZGF0aW9uQ29udGV4dCB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubmVzdChwcm9wZXJ0eU5hbWUsIGVycm9yQ2FsbGJhY2spO1xyXG4gICAgfVxyXG5cclxuICAgIGluZGV4KGluZGV4OiBudW1iZXIsIGVycm9yQ2FsbGJhY2s/OiAoZXJyb3JNZXNzYWdlOiBzdHJpbmcpID0+IGJvb2xlYW4pOiBWYWxpZGF0aW9uQ29udGV4dCB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubmVzdChgWyR7aW5kZXh9XWAsIGVycm9yQ2FsbGJhY2spO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgbmVzdChwYXRoOiBzdHJpbmcsIGVycm9yQ2FsbGJhY2s6IChlcnJvck1lc3NhZ2U6IHN0cmluZykgPT4gYm9vbGVhbik6IFZhbGlkYXRpb25Db250ZXh0IHtcclxuICAgICAgICBpZiAoIXBhdGgpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwicGF0aCBpcyB1bmRlZmluZWRcIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgZnVsbFBhdGggPSBwYXRoO1xyXG4gICAgICAgIGlmICh0aGlzLnBhdGgpIHtcclxuICAgICAgICAgICAgZnVsbFBhdGggPSBwYXRoWzBdID09PSBcIltcIiA/IHRoaXMucGF0aCArIHBhdGggOiB0aGlzLnBhdGggKyBcIi5cIiArIHBhdGg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gbmV3IFZhbGlkYXRpb25Db250ZXh0KFxyXG4gICAgICAgICAgICBmdWxsUGF0aCxcclxuICAgICAgICAgICAgdGhpcy5lcnJvckFjY3VtdWxhdG9yLFxyXG4gICAgICAgICAgICBlcnJvckNhbGxiYWNrXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufSJdfQ==

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(14));
	__export(__webpack_require__(16));
	__export(__webpack_require__(17));
	__export(__webpack_require__(18));
	__export(__webpack_require__(15));
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsaUJBQWMsd0JBQXdCLENBQUMsRUFBQTtBQUN2QyxpQkFBYyxnQkFBZ0IsQ0FBQyxFQUFBO0FBQy9CLGlCQUFjLGNBQWMsQ0FBQyxFQUFBO0FBQzdCLGlCQUFjLGVBQWUsQ0FBQyxFQUFBO0FBQzlCLGlCQUFjLGNBQWMsQ0FBQyxFQUFBIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0ICogZnJvbSBcIi4vcHJpbWl0aXZlLXR5cGUtcnVsZXNcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vb2JqZWN0LXJ1bGVzXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL2hhc2gtcnVsZXNcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vYXJyYXktcnVsZXNcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vcnVsZXMtYmFzZVwiOyJdfQ==

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	/// <reference path="../validator.d.ts" />
	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var rules_base_1 = __webpack_require__(15);
	var StringRules = (function (_super) {
	    __extends(StringRules, _super);
	    function StringRules() {
	        _super.apply(this, arguments);
	    }
	    StringRules.prototype.notEmpty = function (errorMessage) {
	        if (errorMessage === void 0) { errorMessage = "Value can not be empty"; }
	        return this.withRule(StringRules.notEmtpyRule(errorMessage));
	    };
	    StringRules.prototype.must = function (predicate, errorMessage) {
	        if (errorMessage === void 0) { errorMessage = "Value is invalid"; }
	        return this.withRule(rules_base_1.ChainableRuleRunner.mustRule(predicate, errorMessage));
	    };
	    StringRules.isStringRule = function (errorMessage, convert) {
	        return function (value, reportError) {
	            if (value === null || value === undefined)
	                return value;
	            if (typeof value !== "string" && !convert)
	                reportError(errorMessage);
	            return value.toString();
	        };
	    };
	    StringRules.notEmtpyRule = function (errorMessage) {
	        return function (value, reportError) {
	            if (!value || !value.trim())
	                reportError(errorMessage);
	            return value;
	        };
	    };
	    return StringRules;
	}(rules_base_1.ChainableRuleRunner));
	var NumberRules = (function (_super) {
	    __extends(NumberRules, _super);
	    function NumberRules() {
	        _super.apply(this, arguments);
	    }
	    NumberRules.prototype.must = function (predicate, errorMessage) {
	        if (errorMessage === void 0) { errorMessage = "Value is invalid"; }
	        return this.withRule(rules_base_1.ChainableRuleRunner.mustRule(predicate, errorMessage));
	    };
	    NumberRules.isNumberRule = function (errorMessage) {
	        return function (value, reportError) {
	            if (value === null || value === undefined)
	                return value;
	            if (typeof value !== "number") {
	                var result = parseFloat("" + value);
	                if (isNaN(result))
	                    reportError(errorMessage);
	                return result;
	            }
	            return value;
	        };
	    };
	    return NumberRules;
	}(rules_base_1.ChainableRuleRunner));
	function str(errorMessage, convert) {
	    if (errorMessage === void 0) { errorMessage = "Value is not a string."; }
	    if (convert === void 0) { convert = true; }
	    return new StringRules().withRule(StringRules.isStringRule(errorMessage, convert));
	}
	exports.str = str;
	function num(errorMessage) {
	    if (errorMessage === void 0) { errorMessage = "Value is not a valid number"; }
	    return new NumberRules().withRule(NumberRules.isNumberRule(errorMessage));
	}
	exports.num = num;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJpbWl0aXZlLXR5cGUtcnVsZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwcmltaXRpdmUtdHlwZS1ydWxlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSwwQ0FBMEM7Ozs7Ozs7QUFFMUMsMkJBQW9DLGNBQWMsQ0FBQyxDQUFBO0FBRW5EO0lBQTBCLCtCQUEyQjtJQUFyRDtRQUEwQiw4QkFBMkI7SUE4QnJELENBQUM7SUE1QkcsOEJBQVEsR0FBUixVQUFTLFlBQStDO1FBQS9DLDRCQUErQyxHQUEvQyx1Q0FBK0M7UUFDcEQsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO0lBQ2pFLENBQUM7SUFFRCwwQkFBSSxHQUFKLFVBQUssU0FBcUUsRUFBRSxZQUF5QztRQUF6Qyw0QkFBeUMsR0FBekMsaUNBQXlDO1FBQ2pILE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLGdDQUFtQixDQUFDLFFBQVEsQ0FBQyxTQUFTLEVBQUUsWUFBWSxDQUFDLENBQUMsQ0FBQztJQUNoRixDQUFDO0lBRU0sd0JBQVksR0FBbkIsVUFBb0IsWUFBb0IsRUFBRSxPQUFnQjtRQUN0RCxNQUFNLENBQUMsVUFBQyxLQUFVLEVBQUUsV0FBZ0M7WUFDaEQsRUFBRSxDQUFDLENBQUMsS0FBSyxLQUFLLElBQUksSUFBSSxLQUFLLEtBQUssU0FBUyxDQUFDO2dCQUN0QyxNQUFNLENBQUMsS0FBSyxDQUFDO1lBRWpCLEVBQUUsQ0FBQyxDQUFDLE9BQU8sS0FBSyxLQUFLLFFBQVEsSUFBSSxDQUFDLE9BQU8sQ0FBQztnQkFDdEMsV0FBVyxDQUFDLFlBQVksQ0FBQyxDQUFDO1lBRTlCLE1BQU0sQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDNUIsQ0FBQyxDQUFDO0lBQ04sQ0FBQztJQUVNLHdCQUFZLEdBQW5CLFVBQW9CLFlBQW9CO1FBQ3BDLE1BQU0sQ0FBQyxVQUFDLEtBQWEsRUFBRSxXQUFnQztZQUNuRCxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQztnQkFDeEIsV0FBVyxDQUFDLFlBQVksQ0FBQyxDQUFDO1lBRTlCLE1BQU0sQ0FBQyxLQUFLLENBQUM7UUFDakIsQ0FBQyxDQUFBO0lBQ0wsQ0FBQztJQUNMLGtCQUFDO0FBQUQsQ0FBQyxBQTlCRCxDQUEwQixnQ0FBbUIsR0E4QjVDO0FBRUQ7SUFBMEIsK0JBQTJCO0lBQXJEO1FBQTBCLDhCQUEyQjtJQXdCckQsQ0FBQztJQXRCRywwQkFBSSxHQUFKLFVBQUssU0FBcUUsRUFBRSxZQUF5QztRQUF6Qyw0QkFBeUMsR0FBekMsaUNBQXlDO1FBQ2pILE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLGdDQUFtQixDQUFDLFFBQVEsQ0FBQyxTQUFTLEVBQUUsWUFBWSxDQUFDLENBQUMsQ0FBQztJQUNoRixDQUFDO0lBR00sd0JBQVksR0FBbkIsVUFBb0IsWUFBb0I7UUFDcEMsTUFBTSxDQUFDLFVBQUMsS0FBVSxFQUFFLFdBQWdDO1lBQ2hELEVBQUUsQ0FBQyxDQUFDLEtBQUssS0FBSyxJQUFJLElBQUksS0FBSyxLQUFLLFNBQVMsQ0FBQztnQkFDdEMsTUFBTSxDQUFDLEtBQUssQ0FBQztZQUVqQixFQUFFLENBQUMsQ0FBQyxPQUFPLEtBQUssS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDO2dCQUM1QixJQUFNLE1BQU0sR0FBRyxVQUFVLENBQUMsRUFBRSxHQUFHLEtBQUssQ0FBQyxDQUFDO2dCQUV0QyxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7b0JBQ2QsV0FBVyxDQUFDLFlBQVksQ0FBQyxDQUFDO2dCQUU5QixNQUFNLENBQUMsTUFBTSxDQUFDO1lBQ2xCLENBQUM7WUFFRCxNQUFNLENBQUMsS0FBSyxDQUFDO1FBQ2pCLENBQUMsQ0FBQztJQUNOLENBQUM7SUFDTCxrQkFBQztBQUFELENBQUMsQUF4QkQsQ0FBMEIsZ0NBQW1CLEdBd0I1QztBQUVELGFBQW9CLFlBQStDLEVBQUUsT0FBdUI7SUFBeEUsNEJBQStDLEdBQS9DLHVDQUErQztJQUFFLHVCQUF1QixHQUF2QixjQUF1QjtJQUN4RixNQUFNLENBQUMsSUFBSSxXQUFXLEVBQUUsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxZQUFZLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQztBQUN2RixDQUFDO0FBRmUsV0FBRyxNQUVsQixDQUFBO0FBRUQsYUFBb0IsWUFBb0Q7SUFBcEQsNEJBQW9ELEdBQXBELDRDQUFvRDtJQUNwRSxNQUFNLENBQUMsSUFBSSxXQUFXLEVBQUUsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO0FBQzlFLENBQUM7QUFGZSxXQUFHLE1BRWxCLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vdmFsaWRhdG9yLmQudHNcIiAvPlxyXG5cclxuaW1wb3J0IHsgQ2hhaW5hYmxlUnVsZVJ1bm5lciB9IGZyb20gXCIuL3J1bGVzLWJhc2VcIjtcclxuXHJcbmNsYXNzIFN0cmluZ1J1bGVzIGV4dGVuZHMgQ2hhaW5hYmxlUnVsZVJ1bm5lcjxzdHJpbmc+IHtcclxuXHJcbiAgICBub3RFbXB0eShlcnJvck1lc3NhZ2U6IHN0cmluZyA9IFwiVmFsdWUgY2FuIG5vdCBiZSBlbXB0eVwiKTogdGhpcyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMud2l0aFJ1bGUoU3RyaW5nUnVsZXMubm90RW10cHlSdWxlKGVycm9yTWVzc2FnZSkpO1xyXG4gICAgfVxyXG5cclxuICAgIG11c3QocHJlZGljYXRlOiAodmFsdWU6IHN0cmluZywgZW50aXR5PzogYW55LCByb290RW50aXR5PzogYW55KSA9PiBib29sZWFuLCBlcnJvck1lc3NhZ2U6IHN0cmluZyA9IFwiVmFsdWUgaXMgaW52YWxpZFwiKTogdGhpcyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMud2l0aFJ1bGUoQ2hhaW5hYmxlUnVsZVJ1bm5lci5tdXN0UnVsZShwcmVkaWNhdGUsIGVycm9yTWVzc2FnZSkpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBpc1N0cmluZ1J1bGUoZXJyb3JNZXNzYWdlOiBzdHJpbmcsIGNvbnZlcnQ6IGJvb2xlYW4pOiBWYWxpZGF0ZUFuZFRyYW5zZm9ybUZ1bmM8YW55LCBzdHJpbmc+IHtcclxuICAgICAgICByZXR1cm4gKHZhbHVlOiBhbnksIHJlcG9ydEVycm9yOiBSZXBvcnRFcnJvckZ1bmN0aW9uKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh2YWx1ZSA9PT0gbnVsbCB8fCB2YWx1ZSA9PT0gdW5kZWZpbmVkKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xyXG5cclxuICAgICAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gXCJzdHJpbmdcIiAmJiAhY29udmVydClcclxuICAgICAgICAgICAgICAgIHJlcG9ydEVycm9yKGVycm9yTWVzc2FnZSk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gdmFsdWUudG9TdHJpbmcoKTtcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBub3RFbXRweVJ1bGUoZXJyb3JNZXNzYWdlOiBzdHJpbmcpOiBWYWxpZGF0ZUFuZFRyYW5zZm9ybUZ1bmM8c3RyaW5nLCBzdHJpbmc+IHtcclxuICAgICAgICByZXR1cm4gKHZhbHVlOiBzdHJpbmcsIHJlcG9ydEVycm9yOiBSZXBvcnRFcnJvckZ1bmN0aW9uKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICghdmFsdWUgfHwgIXZhbHVlLnRyaW0oKSlcclxuICAgICAgICAgICAgICAgIHJlcG9ydEVycm9yKGVycm9yTWVzc2FnZSk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5jbGFzcyBOdW1iZXJSdWxlcyBleHRlbmRzIENoYWluYWJsZVJ1bGVSdW5uZXI8bnVtYmVyPiB7XHJcblxyXG4gICAgbXVzdChwcmVkaWNhdGU6ICh2YWx1ZTogbnVtYmVyLCBlbnRpdHk/OiBhbnksIHJvb3RFbnRpdHk/OiBhbnkpID0+IGJvb2xlYW4sIGVycm9yTWVzc2FnZTogc3RyaW5nID0gXCJWYWx1ZSBpcyBpbnZhbGlkXCIpOiB0aGlzIHtcclxuICAgICAgICByZXR1cm4gdGhpcy53aXRoUnVsZShDaGFpbmFibGVSdWxlUnVubmVyLm11c3RSdWxlKHByZWRpY2F0ZSwgZXJyb3JNZXNzYWdlKSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHN0YXRpYyBpc051bWJlclJ1bGUoZXJyb3JNZXNzYWdlOiBzdHJpbmcpOiBWYWxpZGF0ZUFuZFRyYW5zZm9ybUZ1bmM8YW55LCBudW1iZXI+IHtcclxuICAgICAgICByZXR1cm4gKHZhbHVlOiBhbnksIHJlcG9ydEVycm9yOiBSZXBvcnRFcnJvckZ1bmN0aW9uKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh2YWx1ZSA9PT0gbnVsbCB8fCB2YWx1ZSA9PT0gdW5kZWZpbmVkKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xyXG5cclxuICAgICAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gXCJudW1iZXJcIikge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gcGFyc2VGbG9hdChcIlwiICsgdmFsdWUpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChpc05hTihyZXN1bHQpKVxyXG4gICAgICAgICAgICAgICAgICAgIHJlcG9ydEVycm9yKGVycm9yTWVzc2FnZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzdHIoZXJyb3JNZXNzYWdlOiBzdHJpbmcgPSBcIlZhbHVlIGlzIG5vdCBhIHN0cmluZy5cIiwgY29udmVydDogYm9vbGVhbiA9IHRydWUpOiBTdHJpbmdSdWxlcyB7XHJcbiAgICByZXR1cm4gbmV3IFN0cmluZ1J1bGVzKCkud2l0aFJ1bGUoU3RyaW5nUnVsZXMuaXNTdHJpbmdSdWxlKGVycm9yTWVzc2FnZSwgY29udmVydCkpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbnVtKGVycm9yTWVzc2FnZTogc3RyaW5nID0gXCJWYWx1ZSBpcyBub3QgYSB2YWxpZCBudW1iZXJcIik6IE51bWJlclJ1bGVzIHtcclxuICAgIHJldHVybiBuZXcgTnVtYmVyUnVsZXMoKS53aXRoUnVsZShOdW1iZXJSdWxlcy5pc051bWJlclJ1bGUoZXJyb3JNZXNzYWdlKSk7XHJcbn0iXX0=

/***/ },
/* 15 */
/***/ function(module, exports) {

	/// <reference path="../validator.d.ts" />
	"use strict";
	var ChainableRuleRunner = (function () {
	    function ChainableRuleRunner() {
	        this.rules = [];
	    }
	    ChainableRuleRunner.prototype.run = function (value, validationContext, entity, root) {
	        return this.rules
	            .reduce(function (currentValue, rule) { return rule(currentValue, function (err) { return validationContext.reportError(err); }, entity, root); }, value);
	    };
	    ChainableRuleRunner.prototype.withRule = function (rule) {
	        this.rules.push(rule);
	        return this;
	    };
	    ChainableRuleRunner.prototype.required = function (errorMessage) {
	        if (errorMessage === void 0) { errorMessage = "Value is required"; }
	        return this.withRule(ChainableRuleRunner.requiredRule(errorMessage));
	    };
	    ChainableRuleRunner.prototype.transform = function (selector, errorMessage) {
	        if (errorMessage === void 0) { errorMessage = "Conversion failed"; }
	        return this.withRule(ChainableRuleRunner.transformRule(selector, errorMessage));
	    };
	    ChainableRuleRunner.mustRule = function (predicate, errorMessage) {
	        return function (value, reportError, entity, rootEntity) {
	            if (!predicate(value, entity, rootEntity)) {
	                reportError(errorMessage);
	            }
	            return value;
	        };
	    };
	    ChainableRuleRunner.transformRule = function (selector, errorMessage) {
	        return function (value, reportError, entity, rootEntity) {
	            try {
	                var result = selector(value, entity, rootEntity);
	                if (result === null || result === undefined)
	                    reportError(errorMessage);
	                return result;
	            }
	            catch (e) {
	                reportError(errorMessage);
	            }
	        };
	    };
	    ChainableRuleRunner.requiredRule = function (errorMessage) {
	        return function (value, reportError) {
	            if (value === null || value === undefined) {
	                reportError(errorMessage);
	            }
	            return value;
	        };
	    };
	    return ChainableRuleRunner;
	}());
	exports.ChainableRuleRunner = ChainableRuleRunner;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicnVsZXMtYmFzZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInJ1bGVzLWJhc2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsMENBQTBDOztBQUsxQztJQUFBO1FBQ0ksVUFBSyxHQUEwQyxFQUFFLENBQUM7SUF1RHRELENBQUM7SUFyREcsaUNBQUcsR0FBSCxVQUFJLEtBQVUsRUFBRSxpQkFBb0MsRUFBRSxNQUFXLEVBQUUsSUFBUztRQUN4RSxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUs7YUFDWixNQUFNLENBQUMsVUFBQyxZQUFZLEVBQUUsSUFBSSxJQUFLLE9BQUEsSUFBSSxDQUFDLFlBQVksRUFBRSxVQUFBLEdBQUcsSUFBSSxPQUFBLGlCQUFpQixDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsRUFBbEMsQ0FBa0MsRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLEVBQTNFLENBQTJFLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDNUgsQ0FBQztJQUVELHNDQUFRLEdBQVIsVUFBUyxJQUF5QztRQUM5QyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN0QixNQUFNLENBQUMsSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFFRCxzQ0FBUSxHQUFSLFVBQVMsWUFBMEM7UUFBMUMsNEJBQTBDLEdBQTFDLGtDQUEwQztRQUMvQyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxtQkFBbUIsQ0FBQyxZQUFZLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztJQUN6RSxDQUFDO0lBRUQsdUNBQVMsR0FBVCxVQUFnQixRQUE4RCxFQUFFLFlBQTBDO1FBQTFDLDRCQUEwQyxHQUExQyxrQ0FBMEM7UUFDdEgsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsbUJBQW1CLENBQUMsYUFBYSxDQUFDLFFBQVEsRUFBRSxZQUFZLENBQUMsQ0FBQyxDQUFDO0lBQ3BGLENBQUM7SUFFTSw0QkFBUSxHQUFmLFVBQTJCLFNBQWtFLEVBQUUsWUFBb0I7UUFDL0csTUFBTSxDQUFDLFVBQUMsS0FBSyxFQUFFLFdBQWdDLEVBQUUsTUFBTSxFQUFFLFVBQVU7WUFDL0QsRUFBRSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLE1BQU0sRUFBRSxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3hDLFdBQVcsQ0FBQyxZQUFZLENBQUMsQ0FBQztZQUM5QixDQUFDO1lBRUQsTUFBTSxDQUFDLEtBQUssQ0FBQztRQUNqQixDQUFDLENBQUM7SUFDTixDQUFDO0lBRU0saUNBQWEsR0FBcEIsVUFBZ0MsUUFBOEQsRUFBRSxZQUFvQjtRQUNoSCxNQUFNLENBQUMsVUFBQyxLQUFLLEVBQUUsV0FBZ0MsRUFBRSxNQUFNLEVBQUUsVUFBVTtZQUMvRCxJQUFJLENBQUM7Z0JBQ0QsSUFBTSxNQUFNLEdBQUcsUUFBUSxDQUFDLEtBQUssRUFBRSxNQUFNLEVBQUUsVUFBVSxDQUFDLENBQUM7Z0JBRW5ELEVBQUUsQ0FBQyxDQUFDLE1BQU0sS0FBSyxJQUFJLElBQUksTUFBTSxLQUFLLFNBQVMsQ0FBQztvQkFDeEMsV0FBVyxDQUFDLFlBQVksQ0FBQyxDQUFDO2dCQUU5QixNQUFNLENBQUMsTUFBTSxDQUFDO1lBQ2xCLENBQ0E7WUFBQSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNQLFdBQVcsQ0FBQyxZQUFZLENBQUMsQ0FBQztZQUM5QixDQUFDO1FBQ0wsQ0FBQyxDQUFBO0lBQ0wsQ0FBQztJQUVNLGdDQUFZLEdBQW5CLFVBQStCLFlBQW9CO1FBQy9DLE1BQU0sQ0FBQyxVQUFDLEtBQUssRUFBRSxXQUFnQztZQUMzQyxFQUFFLENBQUMsQ0FBQyxLQUFLLEtBQUssSUFBSSxJQUFJLEtBQUssS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDO2dCQUN4QyxXQUFXLENBQUMsWUFBWSxDQUFDLENBQUM7WUFDOUIsQ0FBQztZQUVELE1BQU0sQ0FBQyxLQUFLLENBQUM7UUFDakIsQ0FBQyxDQUFBO0lBQ0wsQ0FBQztJQUNMLDBCQUFDO0FBQUQsQ0FBQyxBQXhERCxJQXdEQztBQXhEcUIsMkJBQW1CLHNCQXdEeEMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi92YWxpZGF0b3IuZC50c1wiIC8+XHJcblxyXG5pbXBvcnQgVmFsaWRhdGlvbkNvbnRleHQgZnJvbSBcIi4uL3ZhbGlkYXRpb24tY29udGV4dFwiO1xyXG5cclxuXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBDaGFpbmFibGVSdWxlUnVubmVyPFRPdXQ+IGltcGxlbWVudHMgSVZhbGlkYXRpb25SdWxlPGFueSwgVE91dD4ge1xyXG4gICAgcnVsZXM6IFZhbGlkYXRlQW5kVHJhbnNmb3JtRnVuYzxhbnksIFRPdXQ+W10gPSBbXTtcclxuXHJcbiAgICBydW4odmFsdWU6IGFueSwgdmFsaWRhdGlvbkNvbnRleHQ6IFZhbGlkYXRpb25Db250ZXh0LCBlbnRpdHk6IGFueSwgcm9vdDogYW55KTogVE91dCB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucnVsZXNcclxuICAgICAgICAgICAgLnJlZHVjZSgoY3VycmVudFZhbHVlLCBydWxlKSA9PiBydWxlKGN1cnJlbnRWYWx1ZSwgZXJyID0+IHZhbGlkYXRpb25Db250ZXh0LnJlcG9ydEVycm9yKGVyciksIGVudGl0eSwgcm9vdCksIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICB3aXRoUnVsZShydWxlOiBWYWxpZGF0ZUFuZFRyYW5zZm9ybUZ1bmM8YW55LCBUT3V0Pik6IHRoaXMge1xyXG4gICAgICAgIHRoaXMucnVsZXMucHVzaChydWxlKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICByZXF1aXJlZChlcnJvck1lc3NhZ2U6IHN0cmluZyA9IFwiVmFsdWUgaXMgcmVxdWlyZWRcIik6IHRoaXMge1xyXG4gICAgICAgIHJldHVybiB0aGlzLndpdGhSdWxlKENoYWluYWJsZVJ1bGVSdW5uZXIucmVxdWlyZWRSdWxlKGVycm9yTWVzc2FnZSkpO1xyXG4gICAgfVxyXG5cclxuICAgIHRyYW5zZm9ybTxUT3V0PihzZWxlY3RvcjogKHZhbHVlOiBhbnksIGVudGl0eT86IGFueSwgcm9vdEVudGl0eT86IGFueSkgPT4gVE91dCwgZXJyb3JNZXNzYWdlOiBzdHJpbmcgPSBcIkNvbnZlcnNpb24gZmFpbGVkXCIpOiB0aGlzIHtcclxuICAgICAgICByZXR1cm4gdGhpcy53aXRoUnVsZShDaGFpbmFibGVSdWxlUnVubmVyLnRyYW5zZm9ybVJ1bGUoc2VsZWN0b3IsIGVycm9yTWVzc2FnZSkpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBtdXN0UnVsZTxUSW4sIFRPdXQ+KHByZWRpY2F0ZTogKHZhbHVlOiBUSW4sIGVudGl0eT86IGFueSwgcm9vdEVudGl0eT86IGFueSkgPT4gYm9vbGVhbiwgZXJyb3JNZXNzYWdlOiBzdHJpbmcpOiBWYWxpZGF0ZUFuZFRyYW5zZm9ybUZ1bmM8VEluLCBUT3V0PiB7XHJcbiAgICAgICAgcmV0dXJuICh2YWx1ZSwgcmVwb3J0RXJyb3I6IFJlcG9ydEVycm9yRnVuY3Rpb24sIGVudGl0eSwgcm9vdEVudGl0eSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIXByZWRpY2F0ZSh2YWx1ZSwgZW50aXR5LCByb290RW50aXR5KSkge1xyXG4gICAgICAgICAgICAgICAgcmVwb3J0RXJyb3IoZXJyb3JNZXNzYWdlKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIHRyYW5zZm9ybVJ1bGU8VEluLCBUT3V0PihzZWxlY3RvcjogKHZhbHVlOiBUSW4sIGVudGl0eT86IGFueSwgcm9vdEVudGl0eT86IGFueSkgPT4gVE91dCwgZXJyb3JNZXNzYWdlOiBzdHJpbmcpOiBWYWxpZGF0ZUFuZFRyYW5zZm9ybUZ1bmM8VEluLCBUT3V0PiB7XHJcbiAgICAgICAgcmV0dXJuICh2YWx1ZSwgcmVwb3J0RXJyb3I6IFJlcG9ydEVycm9yRnVuY3Rpb24sIGVudGl0eSwgcm9vdEVudGl0eSkgPT4ge1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gc2VsZWN0b3IodmFsdWUsIGVudGl0eSwgcm9vdEVudGl0eSk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdCA9PT0gbnVsbCB8fCByZXN1bHQgPT09IHVuZGVmaW5lZClcclxuICAgICAgICAgICAgICAgICAgICByZXBvcnRFcnJvcihlcnJvck1lc3NhZ2UpO1xyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgICAgIHJlcG9ydEVycm9yKGVycm9yTWVzc2FnZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIHJlcXVpcmVkUnVsZTxUSW4sIFRPdXQ+KGVycm9yTWVzc2FnZTogc3RyaW5nKTogVmFsaWRhdGVBbmRUcmFuc2Zvcm1GdW5jPFRJbiwgVE91dD4ge1xyXG4gICAgICAgIHJldHVybiAodmFsdWUsIHJlcG9ydEVycm9yOiBSZXBvcnRFcnJvckZ1bmN0aW9uKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh2YWx1ZSA9PT0gbnVsbCB8fCB2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICByZXBvcnRFcnJvcihlcnJvck1lc3NhZ2UpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il19

/***/ },
/* 16 */
/***/ function(module, exports) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var ObjectValidationRuleBase = (function () {
	    function ObjectValidationRuleBase(struct, passNullObject, nullObjectErrorMessage) {
	        this.struct = struct;
	        this.passNullObject = passNullObject;
	        this.nullObjectErrorMessage = nullObjectErrorMessage;
	        this.mustError = "";
	        if (!struct)
	            throw new Error("object structure descriptor is required");
	        if (!passNullObject && !nullObjectErrorMessage)
	            throw new Error("Validation message for null object required");
	    }
	    ObjectValidationRuleBase.prototype.run = function (value, validationContext, entity, root) {
	        if (value === null || value === undefined) {
	            if (!this.passNullObject)
	                validationContext.reportError(this.nullObjectErrorMessage);
	            return value;
	        }
	        if (this.mustPredicate && !this.mustPredicate(value, entity, root)) {
	            validationContext.reportError(this.mustError);
	        }
	        return this.runCore(value, validationContext, entity, root);
	    };
	    ObjectValidationRuleBase.prototype.must = function (predicate, errorMessage) {
	        if (errorMessage === void 0) { errorMessage = "Object data is not valid."; }
	        if (!predicate)
	            throw new Error("Predicate is requried");
	        if (!errorMessage)
	            throw new Error("Error message is required");
	        this.mustPredicate = predicate;
	        this.mustError = errorMessage;
	        return this;
	    };
	    return ObjectValidationRuleBase;
	}());
	var ObjectValidationRule = (function (_super) {
	    __extends(ObjectValidationRule, _super);
	    function ObjectValidationRule(struct, passNullObject, nullObjectErrorMessage) {
	        _super.call(this, struct, passNullObject, nullObjectErrorMessage);
	    }
	    ObjectValidationRule.prototype.runCore = function (value, validationContext, entity, root) {
	        var result = {};
	        for (var property in this.struct) {
	            var rule = this.struct[property];
	            var inputValue = value[property];
	            var nestedContext = validationContext.property(property);
	            result[property] = rule.run(inputValue, nestedContext, value, root);
	        }
	        return result;
	    };
	    return ObjectValidationRule;
	}(ObjectValidationRuleBase));
	var ExpandableObjectValidationRule = (function (_super) {
	    __extends(ExpandableObjectValidationRule, _super);
	    function ExpandableObjectValidationRule(struct, passNullObject, nullObjectErrorMessage) {
	        _super.call(this, struct, passNullObject, nullObjectErrorMessage);
	    }
	    ExpandableObjectValidationRule.prototype.runCore = function (value, validationContext, entity, root) {
	        var result = {};
	        for (var property in value) {
	            var rule = this.struct[property];
	            if (rule) {
	                var inputValue = value[property];
	                var nestedContext = validationContext.property(property);
	                result[property] = rule.run(inputValue, nestedContext, value, root);
	            }
	            else {
	                result[property] = value[property];
	            }
	        }
	        return result;
	    };
	    return ExpandableObjectValidationRule;
	}(ObjectValidationRuleBase));
	/**
	 * Creates a rule which validates given object according to structure.
	 * Any extra properties would be omitted from the result.
	 */
	function obj(struct, nullObjectErrorMessage) {
	    if (nullObjectErrorMessage === void 0) { nullObjectErrorMessage = "Object required"; }
	    if (!struct) {
	        throw new Error("Object structure descriptor is required");
	    }
	    return new ObjectValidationRule(struct, false, nullObjectErrorMessage);
	}
	exports.obj = obj;
	/**
	 * Creates a rule which validates given object according to structure.
	 * Any extra properties would be omitted from the result.
	 * This validator doesn't fail on null value.
	 */
	function objOptional(struct) {
	    if (!struct) {
	        throw new Error("Object structure descriptor is required");
	    }
	    return new ObjectValidationRule(struct, true);
	}
	exports.objOptional = objOptional;
	/**
	 * Creates a rule which validates given object according to structure.
	 * Any extra properties would be preserved as is in result.
	 */
	function expandableObject(struct, nullObjectErrorMessage) {
	    if (nullObjectErrorMessage === void 0) { nullObjectErrorMessage = "Object required"; }
	    if (!struct) {
	        throw new Error("Object structure descriptor is required");
	    }
	    return new ExpandableObjectValidationRule(struct, false, nullObjectErrorMessage);
	}
	exports.expandableObject = expandableObject;
	/**
	 * Creates a rule which validates given object according to structure.
	 * Any extra properties would be preserved as is in result.
	 * This validator doesn't fail on null value.
	 */
	function optionalExpandableObject(struct) {
	    if (!struct) {
	        throw new Error("Object structure descriptor is required");
	    }
	    return new ExpandableObjectValidationRule(struct, true);
	}
	exports.optionalExpandableObject = optionalExpandableObject;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2JqZWN0LXJ1bGVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsib2JqZWN0LXJ1bGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQU9BO0lBSUksa0NBQ2MsTUFBK0IsRUFDL0IsY0FBdUIsRUFDdkIsc0JBQStCO1FBRi9CLFdBQU0sR0FBTixNQUFNLENBQXlCO1FBQy9CLG1CQUFjLEdBQWQsY0FBYyxDQUFTO1FBQ3ZCLDJCQUFzQixHQUF0QixzQkFBc0IsQ0FBUztRQUxyQyxjQUFTLEdBQUcsRUFBRSxDQUFDO1FBTW5CLEVBQUUsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDO1lBQ1IsTUFBTSxJQUFJLEtBQUssQ0FBQyx5Q0FBeUMsQ0FBQyxDQUFDO1FBQy9ELEVBQUUsQ0FBQyxDQUFDLENBQUMsY0FBYyxJQUFJLENBQUMsc0JBQXNCLENBQUM7WUFDM0MsTUFBTSxJQUFJLEtBQUssQ0FBQyw2Q0FBNkMsQ0FBQyxDQUFDO0lBQ3ZFLENBQUM7SUFFRCxzQ0FBRyxHQUFILFVBQUksS0FBVSxFQUFFLGlCQUFvQyxFQUFFLE1BQVcsRUFBRSxJQUFTO1FBQ3hFLEVBQUUsQ0FBQyxDQUFDLEtBQUssS0FBSyxJQUFJLElBQUksS0FBSyxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUM7WUFDeEMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDO2dCQUNyQixpQkFBaUIsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLHNCQUFzQixDQUFDLENBQUM7WUFFL0QsTUFBTSxDQUFZLEtBQUssQ0FBQztRQUM1QixDQUFDO1FBRUQsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDakUsaUJBQWlCLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNsRCxDQUFDO1FBRUQsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNoRSxDQUFDO0lBRUQsdUNBQUksR0FBSixVQUFLLFNBQTRELEVBQUUsWUFBa0Q7UUFBbEQsNEJBQWtELEdBQWxELDBDQUFrRDtRQUNqSCxFQUFFLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztZQUNYLE1BQU0sSUFBSSxLQUFLLENBQUMsdUJBQXVCLENBQUMsQ0FBQztRQUM3QyxFQUFFLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQztZQUNkLE1BQU0sSUFBSSxLQUFLLENBQUMsMkJBQTJCLENBQUMsQ0FBQztRQUVqRCxJQUFJLENBQUMsYUFBYSxHQUFHLFNBQVMsQ0FBQztRQUMvQixJQUFJLENBQUMsU0FBUyxHQUFHLFlBQVksQ0FBQztRQUU5QixNQUFNLENBQUMsSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFHTCwrQkFBQztBQUFELENBQUMsQUExQ0QsSUEwQ0M7QUFFRDtJQUE4Qyx3Q0FBbUM7SUFFN0UsOEJBQ0ksTUFBK0IsRUFDL0IsY0FBdUIsRUFDdkIsc0JBQStCO1FBRS9CLGtCQUFNLE1BQU0sRUFBRSxjQUFjLEVBQUUsc0JBQXNCLENBQUMsQ0FBQztJQUMxRCxDQUFDO0lBRUQsc0NBQU8sR0FBUCxVQUFRLEtBQVUsRUFBRSxpQkFBb0MsRUFBRSxNQUFXLEVBQUUsSUFBUztRQUM1RSxJQUFNLE1BQU0sR0FBRyxFQUFFLENBQUM7UUFFbEIsR0FBRyxDQUFDLENBQUMsSUFBSSxRQUFRLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFDL0IsSUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUNuQyxJQUFNLFVBQVUsR0FBRyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUM7WUFFbkMsSUFBTSxhQUFhLEdBQUcsaUJBQWlCLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBRTNELE1BQU0sQ0FBQyxRQUFRLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQVUsRUFBRSxhQUFhLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3hFLENBQUM7UUFFRCxNQUFNLENBQU8sTUFBTSxDQUFDO0lBQ3hCLENBQUM7SUFDTCwyQkFBQztBQUFELENBQUMsQUF4QkQsQ0FBOEMsd0JBQXdCLEdBd0JyRTtBQUVEO0lBQXdELGtEQUFtQztJQUV2Rix3Q0FDSSxNQUErQixFQUMvQixjQUF1QixFQUN2QixzQkFBK0I7UUFFL0Isa0JBQU0sTUFBTSxFQUFFLGNBQWMsRUFBRSxzQkFBc0IsQ0FBQyxDQUFDO0lBQzFELENBQUM7SUFFRCxnREFBTyxHQUFQLFVBQVEsS0FBVSxFQUFFLGlCQUFvQyxFQUFFLE1BQVcsRUFBRSxJQUFTO1FBQzVFLElBQU0sTUFBTSxHQUFHLEVBQUUsQ0FBQztRQUVsQixHQUFHLENBQUMsQ0FBQyxJQUFJLFFBQVEsSUFBSSxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQ3pCLElBQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7WUFFbkMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztnQkFDUCxJQUFNLFVBQVUsR0FBRyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQ25DLElBQU0sYUFBYSxHQUFHLGlCQUFpQixDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFDM0QsTUFBTSxDQUFDLFFBQVEsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBVSxFQUFFLGFBQWEsRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDeEUsQ0FBQztZQUNELElBQUksQ0FBQyxDQUFDO2dCQUNGLE1BQU0sQ0FBQyxRQUFRLENBQUMsR0FBRyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDdkMsQ0FBQztRQUNMLENBQUM7UUFFRCxNQUFNLENBQU8sTUFBTSxDQUFDO0lBQ3hCLENBQUM7SUFDTCxxQ0FBQztBQUFELENBQUMsQUE1QkQsQ0FBd0Qsd0JBQXdCLEdBNEIvRTtBQUdEOzs7R0FHRztBQUNILGFBQStCLE1BQStCLEVBQUUsc0JBQWtEO0lBQWxELHNDQUFrRCxHQUFsRCwwQ0FBa0Q7SUFDOUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1FBQ1YsTUFBTSxJQUFJLEtBQUssQ0FBQyx5Q0FBeUMsQ0FBQyxDQUFDO0lBQy9ELENBQUM7SUFDRCxNQUFNLENBQUMsSUFBSSxvQkFBb0IsQ0FBWSxNQUFNLEVBQUUsS0FBSyxFQUFFLHNCQUFzQixDQUFDLENBQUM7QUFDdEYsQ0FBQztBQUxlLFdBQUcsTUFLbEIsQ0FBQTtBQUVEOzs7O0dBSUc7QUFDSCxxQkFBdUMsTUFBK0I7SUFDbEUsRUFBRSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1FBQ1YsTUFBTSxJQUFJLEtBQUssQ0FBQyx5Q0FBeUMsQ0FBQyxDQUFDO0lBQy9ELENBQUM7SUFDRCxNQUFNLENBQUMsSUFBSSxvQkFBb0IsQ0FBWSxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFDN0QsQ0FBQztBQUxlLG1CQUFXLGNBSzFCLENBQUE7QUFFRDs7O0dBR0c7QUFDSCwwQkFBNEMsTUFBK0IsRUFBRSxzQkFBa0Q7SUFBbEQsc0NBQWtELEdBQWxELDBDQUFrRDtJQUMzSCxFQUFFLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFDVixNQUFNLElBQUksS0FBSyxDQUFDLHlDQUF5QyxDQUFDLENBQUM7SUFDL0QsQ0FBQztJQUNELE1BQU0sQ0FBQyxJQUFJLDhCQUE4QixDQUFZLE1BQU0sRUFBRSxLQUFLLEVBQUUsc0JBQXNCLENBQUMsQ0FBQztBQUNoRyxDQUFDO0FBTGUsd0JBQWdCLG1CQUsvQixDQUFBO0FBRUQ7Ozs7R0FJRztBQUNILGtDQUFvRCxNQUErQjtJQUMvRSxFQUFFLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFDVixNQUFNLElBQUksS0FBSyxDQUFDLHlDQUF5QyxDQUFDLENBQUM7SUFDL0QsQ0FBQztJQUVELE1BQU0sQ0FBQyxJQUFJLDhCQUE4QixDQUFZLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQztBQUN2RSxDQUFDO0FBTmUsZ0NBQXdCLDJCQU12QyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL3ZhbGlkYXRvci5kLnRzXCIgLz5cclxuaW1wb3J0IFZhbGlkYXRpb25Db250ZXh0IGZyb20gXCIuLi92YWxpZGF0aW9uLWNvbnRleHRcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVByb3BlcnR5VmFsaWRhdGlvbkhhc2gge1xyXG4gICAgW3Byb3BlcnR5OiBzdHJpbmddOiBJVmFsaWRhdGlvblJ1bGU8YW55LCBhbnk+O1xyXG59XHJcblxyXG5hYnN0cmFjdCBjbGFzcyBPYmplY3RWYWxpZGF0aW9uUnVsZUJhc2U8VEluLCBUT3V0PiBpbXBsZW1lbnRzIElWYWxpZGF0aW9uUnVsZTxUSW4sIFRPdXQ+IHtcclxuICAgIHByaXZhdGUgbXVzdFByZWRpY2F0ZTogKHZhbHVlOiBUSW4sIGVudGl0eTogYW55LCByb290OiBhbnkpID0+IGJvb2xlYW47XHJcbiAgICBwcml2YXRlIG11c3RFcnJvciA9IFwiXCI7XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHJvdGVjdGVkIHN0cnVjdDogSVByb3BlcnR5VmFsaWRhdGlvbkhhc2gsXHJcbiAgICAgICAgcHJvdGVjdGVkIHBhc3NOdWxsT2JqZWN0OiBib29sZWFuLFxyXG4gICAgICAgIHByb3RlY3RlZCBudWxsT2JqZWN0RXJyb3JNZXNzYWdlPzogc3RyaW5nKSB7XHJcbiAgICAgICAgaWYgKCFzdHJ1Y3QpXHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIm9iamVjdCBzdHJ1Y3R1cmUgZGVzY3JpcHRvciBpcyByZXF1aXJlZFwiKTtcclxuICAgICAgICBpZiAoIXBhc3NOdWxsT2JqZWN0ICYmICFudWxsT2JqZWN0RXJyb3JNZXNzYWdlKVxyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJWYWxpZGF0aW9uIG1lc3NhZ2UgZm9yIG51bGwgb2JqZWN0IHJlcXVpcmVkXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHJ1bih2YWx1ZTogVEluLCB2YWxpZGF0aW9uQ29udGV4dDogVmFsaWRhdGlvbkNvbnRleHQsIGVudGl0eTogYW55LCByb290OiBhbnkpOiBUT3V0IHtcclxuICAgICAgICBpZiAodmFsdWUgPT09IG51bGwgfHwgdmFsdWUgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMucGFzc051bGxPYmplY3QpXHJcbiAgICAgICAgICAgICAgICB2YWxpZGF0aW9uQ29udGV4dC5yZXBvcnRFcnJvcih0aGlzLm51bGxPYmplY3RFcnJvck1lc3NhZ2UpO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIDxUT3V0Pjxhbnk+dmFsdWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5tdXN0UHJlZGljYXRlICYmICF0aGlzLm11c3RQcmVkaWNhdGUodmFsdWUsIGVudGl0eSwgcm9vdCkpIHtcclxuICAgICAgICAgICAgdmFsaWRhdGlvbkNvbnRleHQucmVwb3J0RXJyb3IodGhpcy5tdXN0RXJyb3IpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMucnVuQ29yZSh2YWx1ZSwgdmFsaWRhdGlvbkNvbnRleHQsIGVudGl0eSwgcm9vdCk7XHJcbiAgICB9XHJcblxyXG4gICAgbXVzdChwcmVkaWNhdGU6ICh2YWx1ZTogVEluLCBlbnRpdHk/OiBhbnksIHJvb3Q/OiBhbnkpID0+IGJvb2xlYW4sIGVycm9yTWVzc2FnZTogc3RyaW5nID0gXCJPYmplY3QgZGF0YSBpcyBub3QgdmFsaWQuXCIpIHtcclxuICAgICAgICBpZiAoIXByZWRpY2F0ZSlcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiUHJlZGljYXRlIGlzIHJlcXVyaWVkXCIpO1xyXG4gICAgICAgIGlmICghZXJyb3JNZXNzYWdlKVxyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJFcnJvciBtZXNzYWdlIGlzIHJlcXVpcmVkXCIpO1xyXG5cclxuICAgICAgICB0aGlzLm11c3RQcmVkaWNhdGUgPSBwcmVkaWNhdGU7XHJcbiAgICAgICAgdGhpcy5tdXN0RXJyb3IgPSBlcnJvck1lc3NhZ2U7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIGFic3RyYWN0IHJ1bkNvcmUodmFsdWU6IFRJbiwgdmFsaWRhdGlvbkNvbnRleHQ6IFZhbGlkYXRpb25Db250ZXh0LCBlbnRpdHk6IGFueSwgcm9vdDogYW55KTogVE91dDtcclxufVxyXG5cclxuY2xhc3MgT2JqZWN0VmFsaWRhdGlvblJ1bGU8VEluLCBUT3V0PiBleHRlbmRzIE9iamVjdFZhbGlkYXRpb25SdWxlQmFzZTxUSW4sIFRPdXQ+IHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBzdHJ1Y3Q6IElQcm9wZXJ0eVZhbGlkYXRpb25IYXNoLFxyXG4gICAgICAgIHBhc3NOdWxsT2JqZWN0OiBib29sZWFuLFxyXG4gICAgICAgIG51bGxPYmplY3RFcnJvck1lc3NhZ2U/OiBzdHJpbmcpIHtcclxuXHJcbiAgICAgICAgc3VwZXIoc3RydWN0LCBwYXNzTnVsbE9iamVjdCwgbnVsbE9iamVjdEVycm9yTWVzc2FnZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcnVuQ29yZSh2YWx1ZTogVEluLCB2YWxpZGF0aW9uQ29udGV4dDogVmFsaWRhdGlvbkNvbnRleHQsIGVudGl0eTogYW55LCByb290OiBhbnkpOiBUT3V0IHtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSB7fTtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgcHJvcGVydHkgaW4gdGhpcy5zdHJ1Y3QpIHtcclxuICAgICAgICAgICAgY29uc3QgcnVsZSA9IHRoaXMuc3RydWN0W3Byb3BlcnR5XTtcclxuICAgICAgICAgICAgY29uc3QgaW5wdXRWYWx1ZSA9IHZhbHVlW3Byb3BlcnR5XTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IG5lc3RlZENvbnRleHQgPSB2YWxpZGF0aW9uQ29udGV4dC5wcm9wZXJ0eShwcm9wZXJ0eSk7XHJcblxyXG4gICAgICAgICAgICByZXN1bHRbcHJvcGVydHldID0gcnVsZS5ydW4oaW5wdXRWYWx1ZSwgbmVzdGVkQ29udGV4dCwgdmFsdWUsIHJvb3QpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIDxUT3V0PnJlc3VsdDtcclxuICAgIH1cclxufVxyXG5cclxuY2xhc3MgRXhwYW5kYWJsZU9iamVjdFZhbGlkYXRpb25SdWxlPFRJbiwgVE91dD4gZXh0ZW5kcyBPYmplY3RWYWxpZGF0aW9uUnVsZUJhc2U8VEluLCBUT3V0PiB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgc3RydWN0OiBJUHJvcGVydHlWYWxpZGF0aW9uSGFzaCxcclxuICAgICAgICBwYXNzTnVsbE9iamVjdDogYm9vbGVhbixcclxuICAgICAgICBudWxsT2JqZWN0RXJyb3JNZXNzYWdlPzogc3RyaW5nKSB7XHJcblxyXG4gICAgICAgIHN1cGVyKHN0cnVjdCwgcGFzc051bGxPYmplY3QsIG51bGxPYmplY3RFcnJvck1lc3NhZ2UpO1xyXG4gICAgfVxyXG5cclxuICAgIHJ1bkNvcmUodmFsdWU6IFRJbiwgdmFsaWRhdGlvbkNvbnRleHQ6IFZhbGlkYXRpb25Db250ZXh0LCBlbnRpdHk6IGFueSwgcm9vdDogYW55KTogVE91dCB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0ge307XHJcblxyXG4gICAgICAgIGZvciAobGV0IHByb3BlcnR5IGluIHZhbHVlKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJ1bGUgPSB0aGlzLnN0cnVjdFtwcm9wZXJ0eV07XHJcblxyXG4gICAgICAgICAgICBpZiAocnVsZSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgaW5wdXRWYWx1ZSA9IHZhbHVlW3Byb3BlcnR5XTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG5lc3RlZENvbnRleHQgPSB2YWxpZGF0aW9uQ29udGV4dC5wcm9wZXJ0eShwcm9wZXJ0eSk7XHJcbiAgICAgICAgICAgICAgICByZXN1bHRbcHJvcGVydHldID0gcnVsZS5ydW4oaW5wdXRWYWx1ZSwgbmVzdGVkQ29udGV4dCwgdmFsdWUsIHJvb3QpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0W3Byb3BlcnR5XSA9IHZhbHVlW3Byb3BlcnR5XTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIDxUT3V0PnJlc3VsdDtcclxuICAgIH1cclxufVxyXG5cclxuXHJcbi8qKlxyXG4gKiBDcmVhdGVzIGEgcnVsZSB3aGljaCB2YWxpZGF0ZXMgZ2l2ZW4gb2JqZWN0IGFjY29yZGluZyB0byBzdHJ1Y3R1cmUuXHJcbiAqIEFueSBleHRyYSBwcm9wZXJ0aWVzIHdvdWxkIGJlIG9taXR0ZWQgZnJvbSB0aGUgcmVzdWx0LlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIG9iajxUSW4sIFRPdXQ+KHN0cnVjdDogSVByb3BlcnR5VmFsaWRhdGlvbkhhc2gsIG51bGxPYmplY3RFcnJvck1lc3NhZ2U6IHN0cmluZyA9IFwiT2JqZWN0IHJlcXVpcmVkXCIpOiBPYmplY3RWYWxpZGF0aW9uUnVsZTxUSW4sIFRPdXQ+IHtcclxuICAgIGlmICghc3RydWN0KSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiT2JqZWN0IHN0cnVjdHVyZSBkZXNjcmlwdG9yIGlzIHJlcXVpcmVkXCIpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIG5ldyBPYmplY3RWYWxpZGF0aW9uUnVsZTxUSW4sIFRPdXQ+KHN0cnVjdCwgZmFsc2UsIG51bGxPYmplY3RFcnJvck1lc3NhZ2UpO1xyXG59XHJcblxyXG4vKipcclxuICogQ3JlYXRlcyBhIHJ1bGUgd2hpY2ggdmFsaWRhdGVzIGdpdmVuIG9iamVjdCBhY2NvcmRpbmcgdG8gc3RydWN0dXJlLlxyXG4gKiBBbnkgZXh0cmEgcHJvcGVydGllcyB3b3VsZCBiZSBvbWl0dGVkIGZyb20gdGhlIHJlc3VsdC5cclxuICogVGhpcyB2YWxpZGF0b3IgZG9lc24ndCBmYWlsIG9uIG51bGwgdmFsdWUuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gb2JqT3B0aW9uYWw8VEluLCBUT3V0PihzdHJ1Y3Q6IElQcm9wZXJ0eVZhbGlkYXRpb25IYXNoKTogT2JqZWN0VmFsaWRhdGlvblJ1bGU8VEluLCBUT3V0PiB7XHJcbiAgICBpZiAoIXN0cnVjdCkge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIk9iamVjdCBzdHJ1Y3R1cmUgZGVzY3JpcHRvciBpcyByZXF1aXJlZFwiKTtcclxuICAgIH1cclxuICAgIHJldHVybiBuZXcgT2JqZWN0VmFsaWRhdGlvblJ1bGU8VEluLCBUT3V0PihzdHJ1Y3QsIHRydWUpO1xyXG59XHJcblxyXG4vKipcclxuICogQ3JlYXRlcyBhIHJ1bGUgd2hpY2ggdmFsaWRhdGVzIGdpdmVuIG9iamVjdCBhY2NvcmRpbmcgdG8gc3RydWN0dXJlLlxyXG4gKiBBbnkgZXh0cmEgcHJvcGVydGllcyB3b3VsZCBiZSBwcmVzZXJ2ZWQgYXMgaXMgaW4gcmVzdWx0LlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGV4cGFuZGFibGVPYmplY3Q8VEluLCBUT3V0PihzdHJ1Y3Q6IElQcm9wZXJ0eVZhbGlkYXRpb25IYXNoLCBudWxsT2JqZWN0RXJyb3JNZXNzYWdlOiBzdHJpbmcgPSBcIk9iamVjdCByZXF1aXJlZFwiKTogRXhwYW5kYWJsZU9iamVjdFZhbGlkYXRpb25SdWxlPFRJbiwgVE91dD4ge1xyXG4gICAgaWYgKCFzdHJ1Y3QpIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJPYmplY3Qgc3RydWN0dXJlIGRlc2NyaXB0b3IgaXMgcmVxdWlyZWRcIik7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbmV3IEV4cGFuZGFibGVPYmplY3RWYWxpZGF0aW9uUnVsZTxUSW4sIFRPdXQ+KHN0cnVjdCwgZmFsc2UsIG51bGxPYmplY3RFcnJvck1lc3NhZ2UpO1xyXG59XHJcblxyXG4vKipcclxuICogQ3JlYXRlcyBhIHJ1bGUgd2hpY2ggdmFsaWRhdGVzIGdpdmVuIG9iamVjdCBhY2NvcmRpbmcgdG8gc3RydWN0dXJlLlxyXG4gKiBBbnkgZXh0cmEgcHJvcGVydGllcyB3b3VsZCBiZSBwcmVzZXJ2ZWQgYXMgaXMgaW4gcmVzdWx0LlxyXG4gKiBUaGlzIHZhbGlkYXRvciBkb2Vzbid0IGZhaWwgb24gbnVsbCB2YWx1ZS5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBvcHRpb25hbEV4cGFuZGFibGVPYmplY3Q8VEluLCBUT3V0PihzdHJ1Y3Q6IElQcm9wZXJ0eVZhbGlkYXRpb25IYXNoKTogRXhwYW5kYWJsZU9iamVjdFZhbGlkYXRpb25SdWxlPFRJbiwgVE91dD4ge1xyXG4gICAgaWYgKCFzdHJ1Y3QpIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJPYmplY3Qgc3RydWN0dXJlIGRlc2NyaXB0b3IgaXMgcmVxdWlyZWRcIik7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIG5ldyBFeHBhbmRhYmxlT2JqZWN0VmFsaWRhdGlvblJ1bGU8VEluLCBUT3V0PihzdHJ1Y3QsIHRydWUpO1xyXG59Il19

/***/ },
/* 17 */
/***/ function(module, exports) {

	/// <reference path="../validator.d.ts" />
	"use strict";
	var HashValidationRule = (function () {
	    function HashValidationRule(elementValidationRule, passNullObject, nullObjectErrorMessage) {
	        this.elementValidationRule = elementValidationRule;
	        this.passNullObject = passNullObject;
	        this.nullObjectErrorMessage = nullObjectErrorMessage;
	        this.skipInvalid = false;
	        if (!elementValidationRule)
	            throw new Error("Element validation rule required");
	        if (!passNullObject && !nullObjectErrorMessage)
	            throw new Error("Validation message for null object required");
	    }
	    HashValidationRule.prototype.run = function (value, validationContext, entity, root) {
	        var _this = this;
	        if (value === null || value === undefined) {
	            if (!this.passNullObject)
	                validationContext.reportError(this.nullObjectErrorMessage);
	            return value;
	        }
	        if (this.mustPredicate && !this.mustPredicate(value, entity, root)) {
	            validationContext.reportError(this.mustErrorMessage);
	            return value;
	        }
	        var result = {};
	        var _loop_1 = function(key) {
	            if (this_1.keyFilteringFunction && !this_1.keyFilteringFunction(key))
	                return "continue";
	            var valid = true;
	            var nestedValidationContext = validationContext.property(key, function () {
	                valid = false;
	                return !_this.skipInvalid;
	            });
	            var convertedValue = this_1.elementValidationRule.run(value[key], nestedValidationContext, value, root);
	            if (valid || !this_1.skipInvalid)
	                result[key] = convertedValue;
	        };
	        var this_1 = this;
	        for (var key in value) {
	            var state_1 = _loop_1(key);
	            if (state_1 === "continue") continue;
	        }
	        return result;
	    };
	    HashValidationRule.prototype.must = function (predicate, errorMessage) {
	        if (errorMessage === void 0) { errorMessage = "Value is invalid"; }
	        if (!predicate)
	            throw new Error("predicate is required");
	        if (!errorMessage)
	            throw new Error("Error message is required");
	        this.mustPredicate = predicate;
	        this.mustErrorMessage = errorMessage;
	        return this;
	    };
	    HashValidationRule.prototype.filterKeys = function (predicate) {
	        this.keyFilteringFunction = predicate;
	        return this;
	    };
	    HashValidationRule.prototype.keepOnlyValid = function (onlyValid) {
	        if (onlyValid === void 0) { onlyValid = true; }
	        this.skipInvalid = onlyValid;
	        return this;
	    };
	    return HashValidationRule;
	}());
	/**
	 * Validates object hash (an object each property of which has the same structure).
	 */
	function hash(elementValidationRule, nullValueErrorMessage) {
	    if (nullValueErrorMessage === void 0) { nullValueErrorMessage = "Object is required."; }
	    return new HashValidationRule(elementValidationRule, false, nullValueErrorMessage);
	}
	exports.hash = hash;
	/**
	 * Validates object hash (an object each property of which has the same structure).
	 */
	function hashOptional(elementValidationRule) {
	    return new HashValidationRule(elementValidationRule, true);
	}
	exports.hashOptional = hashOptional;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGFzaC1ydWxlcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImhhc2gtcnVsZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsMENBQTBDOztBQVExQztJQU9JLDRCQUNZLHFCQUErRCxFQUMvRCxjQUF1QixFQUN2QixzQkFBK0I7UUFGL0IsMEJBQXFCLEdBQXJCLHFCQUFxQixDQUEwQztRQUMvRCxtQkFBYyxHQUFkLGNBQWMsQ0FBUztRQUN2QiwyQkFBc0IsR0FBdEIsc0JBQXNCLENBQVM7UUFSbkMsZ0JBQVcsR0FBRyxLQUFLLENBQUM7UUFVeEIsRUFBRSxDQUFDLENBQUMsQ0FBQyxxQkFBcUIsQ0FBQztZQUN2QixNQUFNLElBQUksS0FBSyxDQUFDLGtDQUFrQyxDQUFDLENBQUM7UUFDeEQsRUFBRSxDQUFDLENBQUMsQ0FBQyxjQUFjLElBQUksQ0FBQyxzQkFBc0IsQ0FBQztZQUMzQyxNQUFNLElBQUksS0FBSyxDQUFDLDZDQUE2QyxDQUFDLENBQUM7SUFDdkUsQ0FBQztJQUVELGdDQUFHLEdBQUgsVUFBSSxLQUF3QixFQUFFLGlCQUFvQyxFQUFFLE1BQVcsRUFBRSxJQUFTO1FBQTFGLGlCQWdDQztRQS9CRyxFQUFFLENBQUMsQ0FBQyxLQUFLLEtBQUssSUFBSSxJQUFJLEtBQUssS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDO1lBQ3hDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQztnQkFDckIsaUJBQWlCLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO1lBRS9ELE1BQU0sQ0FBMEIsS0FBSyxDQUFDO1FBQzFDLENBQUM7UUFFRCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNqRSxpQkFBaUIsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUM7WUFFckQsTUFBTSxDQUEwQixLQUFLLENBQUM7UUFDMUMsQ0FBQztRQUVELElBQU0sTUFBTSxHQUFHLEVBQUUsQ0FBQztRQUVsQjtZQUNJLEVBQUUsQ0FBQyxDQUFDLE1BQUksQ0FBQyxvQkFBb0IsSUFBSSxDQUFDLE1BQUksQ0FBQyxvQkFBb0IsQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDN0Qsa0JBQVM7WUFFYixJQUFJLEtBQUssR0FBRyxJQUFJLENBQUM7WUFDakIsSUFBTSx1QkFBdUIsR0FBRyxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsR0FBRyxFQUFFO2dCQUM1RCxLQUFLLEdBQUcsS0FBSyxDQUFDO2dCQUNkLE1BQU0sQ0FBQyxDQUFDLEtBQUksQ0FBQyxXQUFXLENBQUM7WUFDN0IsQ0FBQyxDQUFDLENBQUM7WUFFSCxJQUFNLGNBQWMsR0FBRyxNQUFJLENBQUMscUJBQXFCLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBRSx1QkFBdUIsRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDeEcsRUFBRSxDQUFDLENBQUMsS0FBSyxJQUFJLENBQUMsTUFBSSxDQUFDLFdBQVcsQ0FBQztnQkFDM0IsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLGNBQWMsQ0FBQzs7O1FBWnJDLEdBQUcsQ0FBQyxDQUFDLElBQUksR0FBRyxJQUFJLEtBQUssQ0FBQzs7O1NBYXJCO1FBRUQsTUFBTSxDQUEwQixNQUFNLENBQUM7SUFDM0MsQ0FBQztJQUVELGlDQUFJLEdBQUosVUFBSyxTQUFnRixFQUFFLFlBQXlDO1FBQXpDLDRCQUF5QyxHQUF6QyxpQ0FBeUM7UUFDNUgsRUFBRSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7WUFDWCxNQUFNLElBQUksS0FBSyxDQUFDLHVCQUF1QixDQUFDLENBQUM7UUFDN0MsRUFBRSxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUM7WUFDZCxNQUFNLElBQUksS0FBSyxDQUFDLDJCQUEyQixDQUFDLENBQUM7UUFFakQsSUFBSSxDQUFDLGFBQWEsR0FBRyxTQUFTLENBQUM7UUFDL0IsSUFBSSxDQUFDLGdCQUFnQixHQUFHLFlBQVksQ0FBQztRQUVyQyxNQUFNLENBQUMsSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFFRCx1Q0FBVSxHQUFWLFVBQVcsU0FBZ0M7UUFDdkMsSUFBSSxDQUFDLG9CQUFvQixHQUFHLFNBQVMsQ0FBQztRQUV0QyxNQUFNLENBQUMsSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFFRCwwQ0FBYSxHQUFiLFVBQWMsU0FBeUI7UUFBekIseUJBQXlCLEdBQXpCLGdCQUF5QjtRQUNuQyxJQUFJLENBQUMsV0FBVyxHQUFHLFNBQVMsQ0FBQztRQUM3QixNQUFNLENBQUMsSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFDTCx5QkFBQztBQUFELENBQUMsQUExRUQsSUEwRUM7QUFHRDs7R0FFRztBQUNILGNBQThDLHFCQUErRCxFQUFFLHFCQUFxRDtJQUFyRCxxQ0FBcUQsR0FBckQsNkNBQXFEO0lBQ2hLLE1BQU0sQ0FBQyxJQUFJLGtCQUFrQixDQUEwQixxQkFBcUIsRUFBRSxLQUFLLEVBQUUscUJBQXFCLENBQUMsQ0FBQztBQUNoSCxDQUFDO0FBRmUsWUFBSSxPQUVuQixDQUFBO0FBRUQ7O0dBRUc7QUFDSCxzQkFBc0QscUJBQStEO0lBQ2pILE1BQU0sQ0FBQyxJQUFJLGtCQUFrQixDQUEwQixxQkFBcUIsRUFBRSxJQUFJLENBQUMsQ0FBQztBQUN4RixDQUFDO0FBRmUsb0JBQVksZUFFM0IsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi92YWxpZGF0b3IuZC50c1wiIC8+XHJcblxyXG5pbXBvcnQgVmFsaWRhdGlvbkNvbnRleHQgZnJvbSBcIi4uL3ZhbGlkYXRpb24tY29udGV4dFwiO1xyXG5cclxuaW50ZXJmYWNlIElIYXNoPFRFbGVtZW50PiB7XHJcbiAgICBba2V5OiBzdHJpbmddOiBURWxlbWVudDtcclxufVxyXG5cclxuY2xhc3MgSGFzaFZhbGlkYXRpb25SdWxlPFRJbkVsZW1lbnQsIFRPdXRFbGVtZW50PiBpbXBsZW1lbnRzIElWYWxpZGF0aW9uUnVsZTxJSGFzaDxUSW5FbGVtZW50PiwgSUhhc2g8VE91dEVsZW1lbnQ+PiB7XHJcbiAgICBwcml2YXRlIGtleUZpbHRlcmluZ0Z1bmN0aW9uOiAoa2V5OiBhbnkpID0+IGJvb2xlYW47XHJcbiAgICBwcml2YXRlIHNraXBJbnZhbGlkID0gZmFsc2U7XHJcblxyXG4gICAgcHJpdmF0ZSBtdXN0UHJlZGljYXRlOiAodmFsdWU6IElIYXNoPFRJbkVsZW1lbnQ+LCBlbnRpdHk/OiBhbnksIHJvb3RFbnRpdHk/OiBhbnkpID0+IGJvb2xlYW47XHJcbiAgICBwcml2YXRlIG11c3RFcnJvck1lc3NhZ2U6IHN0cmluZztcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwcml2YXRlIGVsZW1lbnRWYWxpZGF0aW9uUnVsZTogSVZhbGlkYXRpb25SdWxlPFRJbkVsZW1lbnQsIFRPdXRFbGVtZW50PixcclxuICAgICAgICBwcml2YXRlIHBhc3NOdWxsT2JqZWN0OiBib29sZWFuLFxyXG4gICAgICAgIHByaXZhdGUgbnVsbE9iamVjdEVycm9yTWVzc2FnZT86IHN0cmluZykge1xyXG5cclxuICAgICAgICBpZiAoIWVsZW1lbnRWYWxpZGF0aW9uUnVsZSlcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiRWxlbWVudCB2YWxpZGF0aW9uIHJ1bGUgcmVxdWlyZWRcIik7XHJcbiAgICAgICAgaWYgKCFwYXNzTnVsbE9iamVjdCAmJiAhbnVsbE9iamVjdEVycm9yTWVzc2FnZSlcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVmFsaWRhdGlvbiBtZXNzYWdlIGZvciBudWxsIG9iamVjdCByZXF1aXJlZFwiKTtcclxuICAgIH1cclxuXHJcbiAgICBydW4odmFsdWU6IElIYXNoPFRJbkVsZW1lbnQ+LCB2YWxpZGF0aW9uQ29udGV4dDogVmFsaWRhdGlvbkNvbnRleHQsIGVudGl0eTogYW55LCByb290OiBhbnkpOiBJSGFzaDxUT3V0RWxlbWVudD4ge1xyXG4gICAgICAgIGlmICh2YWx1ZSA9PT0gbnVsbCB8fCB2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5wYXNzTnVsbE9iamVjdClcclxuICAgICAgICAgICAgICAgIHZhbGlkYXRpb25Db250ZXh0LnJlcG9ydEVycm9yKHRoaXMubnVsbE9iamVjdEVycm9yTWVzc2FnZSk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gPElIYXNoPFRPdXRFbGVtZW50Pj48YW55PnZhbHVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMubXVzdFByZWRpY2F0ZSAmJiAhdGhpcy5tdXN0UHJlZGljYXRlKHZhbHVlLCBlbnRpdHksIHJvb3QpKSB7XHJcbiAgICAgICAgICAgIHZhbGlkYXRpb25Db250ZXh0LnJlcG9ydEVycm9yKHRoaXMubXVzdEVycm9yTWVzc2FnZSk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gPElIYXNoPFRPdXRFbGVtZW50Pj48YW55PnZhbHVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0ge307XHJcblxyXG4gICAgICAgIGZvciAobGV0IGtleSBpbiB2YWx1ZSkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5rZXlGaWx0ZXJpbmdGdW5jdGlvbiAmJiAhdGhpcy5rZXlGaWx0ZXJpbmdGdW5jdGlvbihrZXkpKVxyXG4gICAgICAgICAgICAgICAgY29udGludWU7XHJcblxyXG4gICAgICAgICAgICBsZXQgdmFsaWQgPSB0cnVlO1xyXG4gICAgICAgICAgICBjb25zdCBuZXN0ZWRWYWxpZGF0aW9uQ29udGV4dCA9IHZhbGlkYXRpb25Db250ZXh0LnByb3BlcnR5KGtleSwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdmFsaWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHJldHVybiAhdGhpcy5za2lwSW52YWxpZDtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBjb252ZXJ0ZWRWYWx1ZSA9IHRoaXMuZWxlbWVudFZhbGlkYXRpb25SdWxlLnJ1bih2YWx1ZVtrZXldLCBuZXN0ZWRWYWxpZGF0aW9uQ29udGV4dCwgdmFsdWUsIHJvb3QpO1xyXG4gICAgICAgICAgICBpZiAodmFsaWQgfHwgIXRoaXMuc2tpcEludmFsaWQpXHJcbiAgICAgICAgICAgICAgICByZXN1bHRba2V5XSA9IGNvbnZlcnRlZFZhbHVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIDxJSGFzaDxUT3V0RWxlbWVudD4+PGFueT5yZXN1bHQ7XHJcbiAgICB9XHJcblxyXG4gICAgbXVzdChwcmVkaWNhdGU6ICh2YWx1ZTogSUhhc2g8VEluRWxlbWVudD4sIGVudGl0eT86IGFueSwgcm9vdEVudGl0eT86IGFueSkgPT4gYm9vbGVhbiwgZXJyb3JNZXNzYWdlOiBzdHJpbmcgPSBcIlZhbHVlIGlzIGludmFsaWRcIik6IHRoaXMge1xyXG4gICAgICAgIGlmICghcHJlZGljYXRlKVxyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJwcmVkaWNhdGUgaXMgcmVxdWlyZWRcIik7XHJcbiAgICAgICAgaWYgKCFlcnJvck1lc3NhZ2UpXHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkVycm9yIG1lc3NhZ2UgaXMgcmVxdWlyZWRcIik7XHJcblxyXG4gICAgICAgIHRoaXMubXVzdFByZWRpY2F0ZSA9IHByZWRpY2F0ZTtcclxuICAgICAgICB0aGlzLm11c3RFcnJvck1lc3NhZ2UgPSBlcnJvck1lc3NhZ2U7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIGZpbHRlcktleXMocHJlZGljYXRlOiAoa2V5OiBhbnkpID0+IGJvb2xlYW4pOiB0aGlzIHtcclxuICAgICAgICB0aGlzLmtleUZpbHRlcmluZ0Z1bmN0aW9uID0gcHJlZGljYXRlO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBrZWVwT25seVZhbGlkKG9ubHlWYWxpZDogYm9vbGVhbiA9IHRydWUpOiB0aGlzIHtcclxuICAgICAgICB0aGlzLnNraXBJbnZhbGlkID0gb25seVZhbGlkO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuLyoqXHJcbiAqIFZhbGlkYXRlcyBvYmplY3QgaGFzaCAoYW4gb2JqZWN0IGVhY2ggcHJvcGVydHkgb2Ygd2hpY2ggaGFzIHRoZSBzYW1lIHN0cnVjdHVyZSkuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gaGFzaDxUSW5FbGVtZW50LCBUT3V0RWxlbWVudD4oZWxlbWVudFZhbGlkYXRpb25SdWxlOiBJVmFsaWRhdGlvblJ1bGU8VEluRWxlbWVudCwgVE91dEVsZW1lbnQ+LCBudWxsVmFsdWVFcnJvck1lc3NhZ2U6IHN0cmluZyA9IFwiT2JqZWN0IGlzIHJlcXVpcmVkLlwiKTogSGFzaFZhbGlkYXRpb25SdWxlPFRJbkVsZW1lbnQsIFRPdXRFbGVtZW50PiB7XHJcbiAgICByZXR1cm4gbmV3IEhhc2hWYWxpZGF0aW9uUnVsZTxUSW5FbGVtZW50LCBUT3V0RWxlbWVudD4oZWxlbWVudFZhbGlkYXRpb25SdWxlLCBmYWxzZSwgbnVsbFZhbHVlRXJyb3JNZXNzYWdlKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFZhbGlkYXRlcyBvYmplY3QgaGFzaCAoYW4gb2JqZWN0IGVhY2ggcHJvcGVydHkgb2Ygd2hpY2ggaGFzIHRoZSBzYW1lIHN0cnVjdHVyZSkuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gaGFzaE9wdGlvbmFsPFRJbkVsZW1lbnQsIFRPdXRFbGVtZW50PihlbGVtZW50VmFsaWRhdGlvblJ1bGU6IElWYWxpZGF0aW9uUnVsZTxUSW5FbGVtZW50LCBUT3V0RWxlbWVudD4pOiBIYXNoVmFsaWRhdGlvblJ1bGU8VEluRWxlbWVudCwgVE91dEVsZW1lbnQ+IHtcclxuICAgIHJldHVybiBuZXcgSGFzaFZhbGlkYXRpb25SdWxlPFRJbkVsZW1lbnQsIFRPdXRFbGVtZW50PihlbGVtZW50VmFsaWRhdGlvblJ1bGUsIHRydWUpO1xyXG59Il19

/***/ },
/* 18 */
/***/ function(module, exports) {

	/// <reference path="../validator.d.ts" />
	"use strict";
	var ArrayValidationRule = (function () {
	    function ArrayValidationRule(elementValidator, passNullOrEmptyArray, nullOrEmptyArrayErrorMessage) {
	        this.elementValidator = elementValidator;
	        this.passNullOrEmptyArray = passNullOrEmptyArray;
	        this.nullOrEmptyArrayErrorMessage = nullOrEmptyArrayErrorMessage;
	        this.keepOnlyValidElements = false;
	        if (!this.passNullOrEmptyArray && !this.nullOrEmptyArrayErrorMessage)
	            throw new Error("Null or empty array error message required is null array is not passed");
	    }
	    ArrayValidationRule.prototype.run = function (value, validationContext, entity, root) {
	        var _this = this;
	        if (value === null || value === undefined || value.length === 0) {
	            if (!this.passNullOrEmptyArray)
	                validationContext.reportError(this.nullOrEmptyArrayErrorMessage);
	            return value;
	        }
	        var result = [];
	        var _loop_1 = function(i) {
	            var elem = value[i];
	            if (this_1.filter && !this_1.filter(elem, value, root))
	                return "continue";
	            var valid = true;
	            var nestedValidationContext = validationContext.index(result.length, function () {
	                valid = false;
	                return !_this.keepOnlyValidElements;
	            });
	            var convertedValue = this_1.elementValidator.run(elem, nestedValidationContext, value, root);
	            if (valid || !this_1.keepOnlyValidElements)
	                result.push(convertedValue);
	        };
	        var this_1 = this;
	        for (var i = 0; i < value.length; i++) {
	            var state_1 = _loop_1(i);
	            if (state_1 === "continue") continue;
	        }
	        return result;
	    };
	    ArrayValidationRule.prototype.keepOnlyValid = function (onlyValid) {
	        if (onlyValid === void 0) { onlyValid = true; }
	        this.keepOnlyValidElements = onlyValid;
	        return this;
	    };
	    ArrayValidationRule.prototype.filterElements = function (predicate) {
	        if (!predicate)
	            throw new Error("predicate is required");
	        this.filter = predicate;
	        return this;
	    };
	    return ArrayValidationRule;
	}());
	function arr(elementValidationRule, nullValueErrorMessage) {
	    if (nullValueErrorMessage === void 0) { nullValueErrorMessage = "Value is required."; }
	    return new ArrayValidationRule(elementValidationRule, true, nullValueErrorMessage);
	}
	exports.arr = arr;
	function arrOptional(elementValidator) {
	    return new ArrayValidationRule(elementValidator, false);
	}
	exports.arrOptional = arrOptional;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXJyYXktcnVsZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhcnJheS1ydWxlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSwwQ0FBMEM7O0FBSTFDO0lBSUksNkJBQ1ksZ0JBQTBELEVBQzFELG9CQUE2QixFQUM3Qiw0QkFBcUM7UUFGckMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUEwQztRQUMxRCx5QkFBb0IsR0FBcEIsb0JBQW9CLENBQVM7UUFDN0IsaUNBQTRCLEdBQTVCLDRCQUE0QixDQUFTO1FBTHpDLDBCQUFxQixHQUFZLEtBQUssQ0FBQztRQU8zQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxvQkFBb0IsSUFBSSxDQUFDLElBQUksQ0FBQyw0QkFBNEIsQ0FBQztZQUNqRSxNQUFNLElBQUksS0FBSyxDQUFDLHdFQUF3RSxDQUFDLENBQUM7SUFDbEcsQ0FBQztJQUVELGlDQUFHLEdBQUgsVUFBSSxLQUFtQixFQUFFLGlCQUFvQyxFQUFFLE1BQVcsRUFBRSxJQUFTO1FBQXJGLGlCQThCQztRQTdCRyxFQUFFLENBQUMsQ0FBQyxLQUFLLEtBQUssSUFBSSxJQUFJLEtBQUssS0FBSyxTQUFTLElBQUksS0FBSyxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzlELEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDO2dCQUMzQixpQkFBaUIsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLDRCQUE0QixDQUFDLENBQUM7WUFFckUsTUFBTSxDQUFxQixLQUFLLENBQUM7UUFDckMsQ0FBQztRQUVELElBQU0sTUFBTSxHQUFHLEVBQUUsQ0FBQztRQUVsQjtZQUNJLElBQU0sSUFBSSxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUV0QixFQUFFLENBQUMsQ0FBQyxNQUFJLENBQUMsTUFBTSxJQUFJLENBQUMsTUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFDO2dCQUMvQyxrQkFBUztZQUViLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQztZQUVqQixJQUFNLHVCQUF1QixHQUFHLGlCQUFpQixDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFO2dCQUNuRSxLQUFLLEdBQUcsS0FBSyxDQUFDO2dCQUNkLE1BQU0sQ0FBQyxDQUFDLEtBQUksQ0FBQyxxQkFBcUIsQ0FBQztZQUN2QyxDQUFDLENBQUMsQ0FBQztZQUVILElBQU0sY0FBYyxHQUFHLE1BQUksQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLHVCQUF1QixFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQztZQUM3RixFQUFFLENBQUMsQ0FBQyxLQUFLLElBQUksQ0FBQyxNQUFJLENBQUMscUJBQXFCLENBQUM7Z0JBQ3JDLE1BQU0sQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7OztRQWZwQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFOzs7U0FpQnBDO1FBRUQsTUFBTSxDQUFDLE1BQU0sQ0FBQztJQUNsQixDQUFDO0lBRUQsMkNBQWEsR0FBYixVQUFjLFNBQXlCO1FBQXpCLHlCQUF5QixHQUF6QixnQkFBeUI7UUFDbkMsSUFBSSxDQUFDLHFCQUFxQixHQUFHLFNBQVMsQ0FBQztRQUN2QyxNQUFNLENBQUMsSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFFRCw0Q0FBYyxHQUFkLFVBQWUsU0FBa0U7UUFDN0UsRUFBRSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7WUFDWCxNQUFNLElBQUksS0FBSyxDQUFDLHVCQUF1QixDQUFDLENBQUM7UUFFN0MsSUFBSSxDQUFDLE1BQU0sR0FBRyxTQUFTLENBQUM7UUFFeEIsTUFBTSxDQUFDLElBQUksQ0FBQztJQUNoQixDQUFDO0lBQ0wsMEJBQUM7QUFBRCxDQUFDLEFBMURELElBMERDO0FBRUQsYUFBNkMscUJBQStELEVBQUUscUJBQW9EO0lBQXBELHFDQUFvRCxHQUFwRCw0Q0FBb0Q7SUFDOUosTUFBTSxDQUFDLElBQUksbUJBQW1CLENBQTBCLHFCQUFxQixFQUFFLElBQUksRUFBRSxxQkFBcUIsQ0FBQyxDQUFDO0FBQ2hILENBQUM7QUFGZSxXQUFHLE1BRWxCLENBQUE7QUFFRCxxQkFBcUQsZ0JBQTBEO0lBQzNHLE1BQU0sQ0FBQyxJQUFJLG1CQUFtQixDQUEwQixnQkFBZ0IsRUFBRSxLQUFLLENBQUMsQ0FBQztBQUNyRixDQUFDO0FBRmUsbUJBQVcsY0FFMUIsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi92YWxpZGF0b3IuZC50c1wiIC8+XHJcblxyXG5pbXBvcnQgVmFsaWRhdGlvbkNvbnRleHQgZnJvbSBcIi4uL3ZhbGlkYXRpb24tY29udGV4dFwiO1xyXG5cclxuY2xhc3MgQXJyYXlWYWxpZGF0aW9uUnVsZTxUSW5FbGVtZW50LCBUT3V0RWxlbWVudD4gaW1wbGVtZW50cyBJVmFsaWRhdGlvblJ1bGU8VEluRWxlbWVudFtdLCBUT3V0RWxlbWVudFtdPiB7XHJcbiAgICBwcml2YXRlIGZpbHRlcjogKGVsZW06IFRJbkVsZW1lbnQsIGVudGl0eT86IGFueSwgcm9vdD86IGFueSkgPT4gYm9vbGVhbjtcclxuICAgIHByaXZhdGUga2VlcE9ubHlWYWxpZEVsZW1lbnRzOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHJpdmF0ZSBlbGVtZW50VmFsaWRhdG9yOiBJVmFsaWRhdGlvblJ1bGU8VEluRWxlbWVudCwgVE91dEVsZW1lbnQ+LFxyXG4gICAgICAgIHByaXZhdGUgcGFzc051bGxPckVtcHR5QXJyYXk6IGJvb2xlYW4sXHJcbiAgICAgICAgcHJpdmF0ZSBudWxsT3JFbXB0eUFycmF5RXJyb3JNZXNzYWdlPzogc3RyaW5nKSB7XHJcblxyXG4gICAgICAgIGlmICghdGhpcy5wYXNzTnVsbE9yRW1wdHlBcnJheSAmJiAhdGhpcy5udWxsT3JFbXB0eUFycmF5RXJyb3JNZXNzYWdlKVxyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJOdWxsIG9yIGVtcHR5IGFycmF5IGVycm9yIG1lc3NhZ2UgcmVxdWlyZWQgaXMgbnVsbCBhcnJheSBpcyBub3QgcGFzc2VkXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHJ1bih2YWx1ZTogVEluRWxlbWVudFtdLCB2YWxpZGF0aW9uQ29udGV4dDogVmFsaWRhdGlvbkNvbnRleHQsIGVudGl0eTogYW55LCByb290OiBhbnkpOiBUT3V0RWxlbWVudFtdIHtcclxuICAgICAgICBpZiAodmFsdWUgPT09IG51bGwgfHwgdmFsdWUgPT09IHVuZGVmaW5lZCB8fCB2YWx1ZS5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLnBhc3NOdWxsT3JFbXB0eUFycmF5KVxyXG4gICAgICAgICAgICAgICAgdmFsaWRhdGlvbkNvbnRleHQucmVwb3J0RXJyb3IodGhpcy5udWxsT3JFbXB0eUFycmF5RXJyb3JNZXNzYWdlKTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiA8VE91dEVsZW1lbnRbXT48YW55PnZhbHVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gW107XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdmFsdWUubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgY29uc3QgZWxlbSA9IHZhbHVlW2ldO1xyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuZmlsdGVyICYmICF0aGlzLmZpbHRlcihlbGVtLCB2YWx1ZSwgcm9vdCkpXHJcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuXHJcbiAgICAgICAgICAgIGxldCB2YWxpZCA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBuZXN0ZWRWYWxpZGF0aW9uQ29udGV4dCA9IHZhbGlkYXRpb25Db250ZXh0LmluZGV4KHJlc3VsdC5sZW5ndGgsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHZhbGlkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gIXRoaXMua2VlcE9ubHlWYWxpZEVsZW1lbnRzO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGNvbnZlcnRlZFZhbHVlID0gdGhpcy5lbGVtZW50VmFsaWRhdG9yLnJ1bihlbGVtLCBuZXN0ZWRWYWxpZGF0aW9uQ29udGV4dCwgdmFsdWUsIHJvb3QpO1xyXG4gICAgICAgICAgICBpZiAodmFsaWQgfHwgIXRoaXMua2VlcE9ubHlWYWxpZEVsZW1lbnRzKVxyXG4gICAgICAgICAgICAgICAgcmVzdWx0LnB1c2goY29udmVydGVkVmFsdWUpO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcblxyXG4gICAga2VlcE9ubHlWYWxpZChvbmx5VmFsaWQ6IGJvb2xlYW4gPSB0cnVlKTogdGhpcyB7XHJcbiAgICAgICAgdGhpcy5rZWVwT25seVZhbGlkRWxlbWVudHMgPSBvbmx5VmFsaWQ7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgZmlsdGVyRWxlbWVudHMocHJlZGljYXRlOiAoZWxlbTogVEluRWxlbWVudCwgZW50aXR5PzogYW55LCByb290PzogYW55KSA9PiBib29sZWFuKTogdGhpcyB7XHJcbiAgICAgICAgaWYgKCFwcmVkaWNhdGUpXHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcInByZWRpY2F0ZSBpcyByZXF1aXJlZFwiKTtcclxuXHJcbiAgICAgICAgdGhpcy5maWx0ZXIgPSBwcmVkaWNhdGU7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYXJyPFRJbkVsZW1lbnQsIFRPdXRFbGVtZW50PihlbGVtZW50VmFsaWRhdGlvblJ1bGU6IElWYWxpZGF0aW9uUnVsZTxUSW5FbGVtZW50LCBUT3V0RWxlbWVudD4sIG51bGxWYWx1ZUVycm9yTWVzc2FnZTogc3RyaW5nID0gXCJWYWx1ZSBpcyByZXF1aXJlZC5cIik6IEFycmF5VmFsaWRhdGlvblJ1bGU8VEluRWxlbWVudCwgVE91dEVsZW1lbnQ+IHtcclxuICAgIHJldHVybiBuZXcgQXJyYXlWYWxpZGF0aW9uUnVsZTxUSW5FbGVtZW50LCBUT3V0RWxlbWVudD4oZWxlbWVudFZhbGlkYXRpb25SdWxlLCB0cnVlLCBudWxsVmFsdWVFcnJvck1lc3NhZ2UpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYXJyT3B0aW9uYWw8VEluRWxlbWVudCwgVE91dEVsZW1lbnQ+KGVsZW1lbnRWYWxpZGF0b3I6IElWYWxpZGF0aW9uUnVsZTxUSW5FbGVtZW50LCBUT3V0RWxlbWVudD4pOiBBcnJheVZhbGlkYXRpb25SdWxlPFRJbkVsZW1lbnQsIFRPdXRFbGVtZW50PiB7XHJcbiAgICByZXR1cm4gbmV3IEFycmF5VmFsaWRhdGlvblJ1bGU8VEluRWxlbWVudCwgVE91dEVsZW1lbnQ+KGVsZW1lbnRWYWxpZGF0b3IsIGZhbHNlKTtcclxufSJdfQ==

/***/ },
/* 19 */
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
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	/// <reference path="../../typings/index.d.ts" />
	"use strict";
	var moment = __webpack_require__(21);
	var uuid = __webpack_require__(22);
	var event_bus_1 = __webpack_require__(23);
	var product_validator_1 = __webpack_require__(25);
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
	                product = validationResult.entity;
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicHJvZHVjdC1zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGlEQUFpRDs7QUFFakQsSUFBWSxNQUFNLFdBQU0sUUFBUSxDQUFDLENBQUE7QUFDakMsSUFBWSxJQUFJLFdBQU0sV0FBVyxDQUFDLENBQUE7QUFFbEMsMEJBQXFDLGNBQWMsQ0FBQyxDQUFBO0FBRXBELGtDQUE2QixxQkFBcUIsQ0FBQyxDQUFBO0FBRW5EO0lBR0ksd0JBQW9CLE9BQWlDO1FBQWpDLFlBQU8sR0FBUCxPQUFPLENBQTBCO1FBRjdDLGNBQVMsR0FBRyxJQUFJLDJCQUFnQixFQUFFLENBQUM7UUFHdkMsRUFBRSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUM7WUFDVCxNQUFNLElBQUksS0FBSyxDQUFDLHNCQUFzQixDQUFDLENBQUM7SUFDaEQsQ0FBQztJQUVELDRCQUFHLEdBQUg7UUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsQ0FBQztJQUM5QixDQUFDO0lBRUQsNkJBQUksR0FBSixVQUFLLE9BQW9CO1FBQXpCLGlCQTJCQztRQTFCRyxFQUFFLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQztZQUNULE1BQU0sSUFBSSxLQUFLLENBQUMsc0JBQXNCLENBQUMsQ0FBQztRQUU1QyxFQUFFLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUM7WUFDWixPQUFPLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxFQUFFLEVBQUUsQ0FBQztRQUUzQixNQUFNLENBQUMsSUFBSSxPQUFPLENBQUMsVUFBQSxPQUFPO1lBRXRCLElBQU0sZ0JBQWdCLEdBQUcsS0FBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7WUFFMUQsRUFBRSxDQUFDLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFFLENBQUM7Z0JBQ3JCLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1lBQzlCLElBQUksQ0FBQyxDQUFDO2dCQUNGLE9BQU8sR0FBRyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUM7Z0JBRWxDLEtBQUksQ0FBQyxPQUFPO3FCQUNQLElBQUksQ0FBQyxPQUFPLENBQUM7cUJBQ2IsSUFBSSxDQUFDLGNBQU0sT0FBQSxLQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsRUFBcEIsQ0FBb0IsQ0FBQztxQkFDaEMsSUFBSSxDQUFDLFVBQUEsQ0FBQztvQkFDSCxvQkFBUSxDQUFDLElBQUksQ0FBQyxzQkFBVSxDQUFDLGNBQWMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7b0JBRS9DLE1BQU0sQ0FBQyxDQUFDLENBQUM7Z0JBQ2IsQ0FBQyxDQUFDO3FCQUNELElBQUksQ0FBQyxVQUFBLE1BQU0sSUFBSSxPQUFBLE9BQU8sQ0FBQyxNQUFNLENBQUMsRUFBZixDQUFlLENBQUMsQ0FBQztZQUN6QyxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsNEJBQUcsR0FBSCxVQUFJLFNBQWlCO1FBQ2pCLEVBQUUsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO1lBQ1gsTUFBTSxJQUFJLEtBQUssQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO1FBRTlDLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBRUQsMENBQWlCLEdBQWpCLFVBQWtCLFNBQWlCLEVBQUUsU0FBaUIsRUFBRSxJQUFvQztRQUE1RixpQkFxREM7UUFwREcsRUFBRSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7WUFDWCxNQUFNLElBQUksS0FBSyxDQUFDLHdCQUF3QixDQUFDLENBQUM7UUFDOUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7WUFDWCxNQUFNLElBQUksS0FBSyxDQUFDLHdCQUF3QixDQUFDLENBQUM7UUFDOUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7WUFDTixNQUFNLElBQUksS0FBSyxDQUFDLG1CQUFtQixDQUFDLENBQUM7UUFDekMsSUFBTSxHQUFHLEdBQUcsTUFBTSxDQUFDLEdBQUcsRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBRWxDLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQzthQUNyQixJQUFJLENBQUMsVUFBQSxPQUFPO1lBQ1QsRUFBRSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDO2dCQUNoQixPQUFPLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQztZQUV4QixJQUFNLE1BQU0sR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQztnQkFDcEM7b0JBQ0ksS0FBSyxFQUFFLElBQUk7b0JBQ1gsS0FBSyxFQUFFLElBQUk7b0JBQ1gsS0FBSyxFQUFFLElBQUk7aUJBQ2QsQ0FBQztZQUNOLE9BQU8sQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLEdBQUcsTUFBTSxDQUFDO1lBRW5DLEVBQUUsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQztnQkFDYixPQUFPLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQztZQUVyQixJQUFNLEdBQUcsR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQztnQkFDOUI7b0JBQ0ksR0FBRyxFQUFFLElBQUk7b0JBQ1QsU0FBUyxFQUFFLElBQUk7b0JBQ2YsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLO29CQUNqQixNQUFNLEVBQUUsRUFBRTtpQkFDYixDQUFDO1lBQ04sT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsR0FBRyxHQUFHLENBQUM7WUFFN0IsR0FBRyxDQUFDLEdBQUcsR0FBRyxPQUFPLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQzFDLEdBQUcsQ0FBQyxTQUFTLEdBQUcsR0FBRyxDQUFDO1lBQ3BCLEdBQUcsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztZQUV2QixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7aUJBQ25CLE9BQU8sQ0FBQyxVQUFBLElBQUk7Z0JBQ1QsSUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFFaEMsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQztvQkFDbkIsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUM7Z0JBRS9CLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUc7b0JBQ2YsU0FBUyxFQUFFLEdBQUc7b0JBQ2QsS0FBSyxFQUFFLEtBQUssQ0FBQyxLQUFLO2lCQUNyQixDQUFDO1lBQ04sQ0FBQyxDQUFDLENBQUM7WUFFUCxNQUFNLENBQUMsS0FBSSxDQUFDLE9BQU8sQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDLEVBQUUsRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQzVFLENBQUMsQ0FBQyxDQUFDO0lBQ1gsQ0FBQztJQUNMLHFCQUFDO0FBQUQsQ0FBQyxBQXRHRCxJQXNHQztBQXRHRDtnQ0FzR0MsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi90eXBpbmdzL2luZGV4LmQudHNcIiAvPlxyXG5cclxuaW1wb3J0ICogYXMgbW9tZW50IGZyb20gXCJtb21lbnRcIjtcclxuaW1wb3J0ICogYXMgdXVpZCBmcm9tIFwibm9kZS11dWlkXCI7XHJcblxyXG5pbXBvcnQgeyBldmVudEJ1cywgRXZlbnROYW1lcyB9IGZyb20gXCIuLi9ldmVudC1idXNcIjtcclxuXHJcbmltcG9ydCBQcm9kdWN0VmFsaWRhdG9yIGZyb20gXCIuL3Byb2R1Y3QtdmFsaWRhdG9yXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9kdWN0U2VydmljZSB7XHJcbiAgICBwcml2YXRlIHZhbGlkYXRvciA9IG5ldyBQcm9kdWN0VmFsaWRhdG9yKCk7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBzdG9yYWdlOiBQcm9kdWN0cy5JUHJvZHVjdFN0b3JhZ2UpIHtcclxuICAgICAgICBpZiAoIXN0b3JhZ2UpXHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcInN0b3JhZ2UgaXMgdW5kZWZpbmVkXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIGFsbCgpOiBQcm9taXNlPEFwaS5Qcm9kdWN0W10+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zdG9yYWdlLmFsbCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHNhdmUocHJvZHVjdDogQXBpLlByb2R1Y3QpOiBQcm9taXNlPEFwaS5WYWxpZGF0aW9uUmVzdWx0IHwgQXBpLlByb2R1Y3Q+IHtcclxuICAgICAgICBpZiAoIXByb2R1Y3QpXHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcInByb2R1Y3QgaXMgdW5kZWZpbmVkXCIpO1xyXG5cclxuICAgICAgICBpZiAoIXByb2R1Y3QuaWQpXHJcbiAgICAgICAgICAgIHByb2R1Y3QuaWQgPSB1dWlkLnYxKCk7XHJcblxyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHZhbGlkYXRpb25SZXN1bHQgPSB0aGlzLnZhbGlkYXRvci52YWxpZGF0ZShwcm9kdWN0KTtcclxuXHJcbiAgICAgICAgICAgIGlmICghdmFsaWRhdGlvblJlc3VsdC5vaylcclxuICAgICAgICAgICAgICAgIHJlc29sdmUodmFsaWRhdGlvblJlc3VsdCk7XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcHJvZHVjdCA9IHZhbGlkYXRpb25SZXN1bHQuZW50aXR5O1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuc3RvcmFnZVxyXG4gICAgICAgICAgICAgICAgICAgIC5zYXZlKHByb2R1Y3QpXHJcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oKCkgPT4gdGhpcy5vbmUocHJvZHVjdC5pZCkpXHJcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4ocCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50QnVzLmVtaXQoRXZlbnROYW1lcy5Qcm9kdWN0VXBkYXRlZCwgcC5pZCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcDtcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKGVudGl0eSA9PiByZXNvbHZlKGVudGl0eSkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25lKHByb2R1Y3RJZDogc3RyaW5nKTogUHJvbWlzZTxBcGkuUHJvZHVjdD4ge1xyXG4gICAgICAgIGlmICghcHJvZHVjdElkKVxyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJwcm9kdWN0SWQgaXMgdW5kZWZpbmVkXCIpO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5zdG9yYWdlLm9uZShwcm9kdWN0SWQpO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZVNjcmFwZWREYXRhKHByb2R1Y3RJZDogc3RyaW5nLCB3ZWJzaG9wSWQ6IHN0cmluZywgZGF0YTogU2NyYXBpbmcuV2ViU2hvcFNjcmFwaW5nUmVzdWx0KTogUHJvbWlzZTxBcGkuUHJvZHVjdD4ge1xyXG4gICAgICAgIGlmICghcHJvZHVjdElkKVxyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJwcm9kdWN0SWQgaXMgdW5kZWZpbmVkXCIpO1xyXG4gICAgICAgIGlmICghd2Vic2hvcElkKVxyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJ3ZWJTaG9wSWQgaXMgdW5kZWZpbmVkXCIpO1xyXG4gICAgICAgIGlmICghZGF0YSlcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiZGF0YSBpcyB1bmRlZmluZWRcIik7XHJcbiAgICAgICAgY29uc3Qgbm93ID0gbW9tZW50LnV0YygpLnRvRGF0ZSgpO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5vbmUocHJvZHVjdElkKVxyXG4gICAgICAgICAgICAudGhlbihwcm9kdWN0ID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICghcHJvZHVjdC52YWx1ZXMpXHJcbiAgICAgICAgICAgICAgICAgICAgcHJvZHVjdC52YWx1ZXMgPSB7fTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZXMgPSBwcm9kdWN0LnZhbHVlc1t3ZWJzaG9wSWRdIHx8XHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJpY2U6IG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlOiBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIHByb2R1Y3QudmFsdWVzW3dlYnNob3BJZF0gPSB2YWx1ZXM7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCFwcm9kdWN0LmxvZylcclxuICAgICAgICAgICAgICAgICAgICBwcm9kdWN0LmxvZyA9IHt9O1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IGxvZyA9IHByb2R1Y3QubG9nW3dlYnNob3BJZF0gfHxcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybDogbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2NyYXBlZEF0OiBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvcjogZGF0YS5lcnJvcixcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVzOiB7fVxyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICBwcm9kdWN0LmxvZ1t3ZWJzaG9wSWRdID0gbG9nO1xyXG5cclxuICAgICAgICAgICAgICAgIGxvZy51cmwgPSBwcm9kdWN0LnNjcmFwaW5nVXJsc1t3ZWJzaG9wSWRdO1xyXG4gICAgICAgICAgICAgICAgbG9nLnNjcmFwZWRBdCA9IG5vdztcclxuICAgICAgICAgICAgICAgIGxvZy5lcnJvciA9IGRhdGEuZXJyb3I7XHJcblxyXG4gICAgICAgICAgICAgICAgT2JqZWN0LmtleXMoZGF0YS52YWx1ZXMpXHJcbiAgICAgICAgICAgICAgICAgICAgLmZvckVhY2gobmFtZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gZGF0YS52YWx1ZXNbbmFtZV07XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodmFsdWUuaXNTdWNjZXNzZnVsKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVzW25hbWVdID0gdmFsdWUudmFsdWU7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2cudmFsdWVzW25hbWVdID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2NyYXBlZEF0OiBub3csXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcjogdmFsdWUuZXJyb3JcclxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5zdG9yYWdlLnNldFNjcmFwaW5nRGF0YShwcm9kdWN0LmlkLCB3ZWJzaG9wSWQsIHZhbHVlcywgbG9nKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcbn0iXX0=

/***/ },
/* 21 */
/***/ function(module, exports) {

	module.exports = require("moment");

/***/ },
/* 22 */
/***/ function(module, exports) {

	module.exports = require("node-uuid");

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	/// <reference path="../typings/index.d.ts"/>
	"use strict";
	var events_1 = __webpack_require__(24);
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
/* 24 */
/***/ function(module, exports) {

	module.exports = require("events");

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	/// <reference path="../../typings/index.d.ts" />
	"use strict";
	var v = __webpack_require__(10);
	var ProductValidator = (function () {
	    function ProductValidator() {
	        this.validator = v.obj({
	            id: v.str().required("Product ID is required"),
	            title: v.str()
	                .notEmpty("Product title is required")
	                .must(function (t) { return t.length < 1024; }, "Product title too long"),
	            scrapingUrls: v.hash(v.str()
	                .must(function (url) { return !url || (url.indexOf("http://") === 0 || url.indexOf("https://") === 0); }, "URL must starts from http:// or https:// "))
	                .must(function (urls) { return Object.keys(urls)
	                .map(function (shopId) { return urls[shopId]; })
	                .filter(function (url) { return url && url.trim().length > 0; })
	                .length > 0; }, "At least one scraping URL must be specified.")
	        });
	    }
	    ProductValidator.prototype.validate = function (product) {
	        if (!product)
	            throw new Error("product is undefined");
	        var result = v.validate(product, this.validator);
	        return {
	            ok: result.valid,
	            entity: result.value,
	            errors: result.errors
	        };
	    };
	    return ProductValidator;
	}());
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = ProductValidator;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC12YWxpZGF0b3IuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwcm9kdWN0LXZhbGlkYXRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxpREFBaUQ7O0FBRWpELElBQVksQ0FBQyxXQUFNLGlCQUFpQixDQUFDLENBQUE7QUFFckM7SUFBQTtRQUNXLGNBQVMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUEyQjtZQUMvQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLFFBQVEsQ0FBQyx3QkFBd0IsQ0FBQztZQUM5QyxLQUFLLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRTtpQkFDVCxRQUFRLENBQUMsMkJBQTJCLENBQUM7aUJBQ3JDLElBQUksQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxFQUFmLENBQWUsRUFBRSx3QkFBd0IsQ0FBQztZQUN6RCxZQUFZLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FDaEIsQ0FBQyxDQUFDLEdBQUcsRUFBRTtpQkFDRixJQUFJLENBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxJQUFJLEdBQUcsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQXZFLENBQXVFLEVBQUUsMkNBQTJDLENBQUMsQ0FBQztpQkFDdEksSUFBSSxDQUFDLFVBQUEsSUFBSSxJQUFJLE9BQUEsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7aUJBQzFCLEdBQUcsQ0FBQyxVQUFBLE1BQU0sSUFBSSxPQUFBLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBWixDQUFZLENBQUM7aUJBQzNCLE1BQU0sQ0FBQyxVQUFDLEdBQVcsSUFBSyxPQUFBLEdBQUcsSUFBSSxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBNUIsQ0FBNEIsQ0FBQztpQkFDckQsTUFBTSxHQUFHLENBQUMsRUFIRCxDQUdDLEVBQUUsOENBQThDLENBQUM7U0FDdkUsQ0FBQyxDQUFDO0lBZVAsQ0FBQztJQVpHLG1DQUFRLEdBQVIsVUFBUyxPQUFvQjtRQUN6QixFQUFFLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQztZQUNULE1BQU0sSUFBSSxLQUFLLENBQUMsc0JBQXNCLENBQUMsQ0FBQztRQUU1QyxJQUFNLE1BQU0sR0FBRyxDQUFDLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7UUFFbkQsTUFBTSxDQUFDO1lBQ0gsRUFBRSxFQUFFLE1BQU0sQ0FBQyxLQUFLO1lBQ2hCLE1BQU0sRUFBRSxNQUFNLENBQUMsS0FBSztZQUNwQixNQUFNLEVBQUUsTUFBTSxDQUFDLE1BQU07U0FDeEIsQ0FBQztJQUNOLENBQUM7SUFDTCx1QkFBQztBQUFELENBQUMsQUE1QkQsSUE0QkM7QUE1QkQ7a0NBNEJDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vdHlwaW5ncy9pbmRleC5kLnRzXCIgLz5cclxuXHJcbmltcG9ydCAqIGFzIHYgZnJvbSBcIi4uLy4uL3ZhbGlkYXRvclwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvZHVjdFZhbGlkYXRvciB7XHJcbiAgICBwdWJsaWMgdmFsaWRhdG9yID0gdi5vYmo8QXBpLlByb2R1Y3QsIEFwaS5Qcm9kdWN0Pih7XHJcbiAgICAgICAgaWQ6IHYuc3RyKCkucmVxdWlyZWQoXCJQcm9kdWN0IElEIGlzIHJlcXVpcmVkXCIpLFxyXG4gICAgICAgIHRpdGxlOiB2LnN0cigpXHJcbiAgICAgICAgICAgIC5ub3RFbXB0eShcIlByb2R1Y3QgdGl0bGUgaXMgcmVxdWlyZWRcIilcclxuICAgICAgICAgICAgLm11c3QodCA9PiB0Lmxlbmd0aCA8IDEwMjQsIFwiUHJvZHVjdCB0aXRsZSB0b28gbG9uZ1wiKSxcclxuICAgICAgICBzY3JhcGluZ1VybHM6IHYuaGFzaChcclxuICAgICAgICAgICAgdi5zdHIoKVxyXG4gICAgICAgICAgICAgICAgLm11c3QodXJsID0+ICF1cmwgfHwgKHVybC5pbmRleE9mKFwiaHR0cDovL1wiKSA9PT0gMCB8fCB1cmwuaW5kZXhPZihcImh0dHBzOi8vXCIpID09PSAwKSwgXCJVUkwgbXVzdCBzdGFydHMgZnJvbSBodHRwOi8vIG9yIGh0dHBzOi8vIFwiKSlcclxuICAgICAgICAgICAgLm11c3QodXJscyA9PiBPYmplY3Qua2V5cyh1cmxzKVxyXG4gICAgICAgICAgICAgICAgLm1hcChzaG9wSWQgPT4gdXJsc1tzaG9wSWRdKVxyXG4gICAgICAgICAgICAgICAgLmZpbHRlcigodXJsOiBzdHJpbmcpID0+IHVybCAmJiB1cmwudHJpbSgpLmxlbmd0aCA+IDApXHJcbiAgICAgICAgICAgICAgICAubGVuZ3RoID4gMCwgXCJBdCBsZWFzdCBvbmUgc2NyYXBpbmcgVVJMIG11c3QgYmUgc3BlY2lmaWVkLlwiKVxyXG4gICAgfSk7XHJcblxyXG5cclxuICAgIHZhbGlkYXRlKHByb2R1Y3Q6IEFwaS5Qcm9kdWN0KTogQXBpLkVudGl0eVZhbGlkYXRpb25SZXN1bHQ8QXBpLlByb2R1Y3Q+IHtcclxuICAgICAgICBpZiAoIXByb2R1Y3QpXHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcInByb2R1Y3QgaXMgdW5kZWZpbmVkXCIpO1xyXG5cclxuICAgICAgICBjb25zdCByZXN1bHQgPSB2LnZhbGlkYXRlKHByb2R1Y3QsIHRoaXMudmFsaWRhdG9yKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgb2s6IHJlc3VsdC52YWxpZCxcclxuICAgICAgICAgICAgZW50aXR5OiByZXN1bHQudmFsdWUsXHJcbiAgICAgICAgICAgIGVycm9yczogcmVzdWx0LmVycm9yc1xyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbn0iXX0=

/***/ },
/* 26 */
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
	    // {
	    //     id: "unhalfbricking",
	    //     title: "Unhalfbricking",
	    //     isBase: false,
	    //     scrapingSettings: {
	    //         title: [{
	    //             type: "string",
	    //             extract: "regex",
	    //             regex: "<font.*?>(.*?)<\\/font>"
	    //         }],
	    //         price: [{
	    //             type: "number",
	    //             extract: "regex",
	    //             regex: "\\(\\$([\\d\\.]*?)\\)"
	    //         }],
	    //         image: [{
	    //             type: "relativeUrl",
	    //             extract: "regex",
	    //             regex: '<img.*?src="(.*?images/games/.*?)".*?\\>'
	    //         }]
	    //     }
	    // },
	    {
	        id: "dungeoncrawl",
	        title: "Dungeon Crawl",
	        isBase: false,
	        scrapingSettings: {
	            title: [{
	                    type: "string",
	                    elementSelector: "h1[itemprop='name']"
	                }],
	            price: [{
	                    type: "number",
	                    elementSelector: "div.productprice.productpricetext[itemprop='price']"
	                }],
	            image: [{
	                    type: "relativeUrl",
	                    elementSelector: "meta[property='og:image'][content*='/assets/full']",
	                    attribute: "content"
	                }]
	        }
	    }
	];
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2ViLXNob3BzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsid2ViLXNob3BzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHdEQUF3RDs7QUFFM0MsZ0JBQVEsR0FDckI7SUFDSTtRQUNJLEVBQUUsRUFBRSxXQUFXO1FBQ2YsTUFBTSxFQUFFLElBQUk7UUFDWixLQUFLLEVBQUUsV0FBVztRQUNsQixnQkFBZ0IsRUFBRTtZQUNkLEtBQUssRUFBRSxDQUFDO29CQUNKLElBQUksRUFBRSxRQUFRO29CQUNkLGVBQWUsRUFBRSxxQkFBcUI7aUJBQ3pDLENBQUM7WUFDRixLQUFLLEVBQUUsQ0FBQztvQkFDSixJQUFJLEVBQUUsUUFBUTtvQkFDZCxlQUFlLEVBQUUsZUFBZTtpQkFDbkMsQ0FBQztZQUNGLEtBQUssRUFBRSxDQUFDO29CQUNKLElBQUksRUFBRSxRQUFRO29CQUNkLGVBQWUsRUFBRSxrQkFBa0I7b0JBQ25DLFNBQVMsRUFBRSxLQUFLO2lCQUNuQixDQUFDO1NBQ0w7S0FDSjtJQUNEO1FBQ0ksRUFBRSxFQUFFLGNBQWM7UUFDbEIsTUFBTSxFQUFFLEtBQUs7UUFDYixLQUFLLEVBQUUsZUFBZTtRQUN0QixnQkFBZ0IsRUFBRTtZQUNkLEtBQUssRUFBRSxDQUFDO29CQUNKLElBQUksRUFBRSxRQUFRO29CQUNkLGVBQWUsRUFBRSxxQkFBcUI7aUJBQ3pDLENBQUM7WUFDRixLQUFLLEVBQUUsQ0FBQztvQkFDSixJQUFJLEVBQUUsUUFBUTtvQkFDZCxlQUFlLEVBQUUsd0JBQXdCO29CQUN6QyxTQUFTLEVBQUUsU0FBUztpQkFDdkIsQ0FBQztZQUNGLEtBQUssRUFBRSxDQUFDO29CQUNKLElBQUksRUFBRSxRQUFRO29CQUNkLGVBQWUsRUFBRSx1QkFBdUI7b0JBQ3hDLFNBQVMsRUFBRSxLQUFLO2lCQUNuQixDQUFDO1NBQ0w7S0FDSjtJQUNEO1FBQ0ksRUFBRSxFQUFFLFVBQVU7UUFDZCxNQUFNLEVBQUUsS0FBSztRQUNiLEtBQUssRUFBRSxXQUFXO1FBQ2xCLGdCQUFnQixFQUFFO1lBQ2QsS0FBSyxFQUFFLENBQUM7b0JBQ0osSUFBSSxFQUFFLFFBQVE7b0JBQ2QsZUFBZSxFQUFFLHVCQUF1QjtvQkFDeEMsU0FBUyxFQUFFLFNBQVM7aUJBQ3ZCLENBQUM7WUFDRixLQUFLLEVBQUUsQ0FBQztvQkFDSixJQUFJLEVBQUUsUUFBUTtvQkFDZCxlQUFlLEVBQUUsZ0JBQWdCO2lCQUNwQyxDQUFDO1lBQ0YsS0FBSyxFQUFFLENBQUM7b0JBQ0osSUFBSSxFQUFFLFFBQVE7b0JBQ2QsZUFBZSxFQUFFLHdCQUF3QjtvQkFDekMsU0FBUyxFQUFFLFNBQVM7aUJBQ3ZCLENBQUM7U0FDTDtLQUNKO0lBQ0Q7UUFDSSxFQUFFLEVBQUUsV0FBVztRQUNmLE1BQU0sRUFBRSxLQUFLO1FBQ2IsS0FBSyxFQUFFLFlBQVk7UUFDbkIsZ0JBQWdCLEVBQUU7WUFDZCxLQUFLLEVBQUUsQ0FBQztvQkFDSixJQUFJLEVBQUUsUUFBUTtvQkFDZCxlQUFlLEVBQUUscUNBQXFDO2lCQUN6RCxDQUFDO1lBQ0YsS0FBSyxFQUFFLENBQUM7b0JBQ0osSUFBSSxFQUFFLFFBQVE7b0JBQ2QsZUFBZSxFQUFFLGlDQUFpQztvQkFDbEQsU0FBUyxFQUFFLFNBQVM7aUJBQ3ZCLENBQUM7WUFDRixLQUFLLEVBQUUsQ0FBQztvQkFDSixJQUFJLEVBQUUsUUFBUTtvQkFDZCxlQUFlLEVBQUUsK0JBQStCO29CQUNoRCxTQUFTLEVBQUUsS0FBSztpQkFDbkIsQ0FBQztTQUNMO0tBQ0o7SUFDRCxJQUFJO0lBQ0osNEJBQTRCO0lBQzVCLCtCQUErQjtJQUMvQixxQkFBcUI7SUFDckIsMEJBQTBCO0lBQzFCLG9CQUFvQjtJQUNwQiw4QkFBOEI7SUFDOUIsZ0NBQWdDO0lBQ2hDLCtDQUErQztJQUMvQyxjQUFjO0lBQ2Qsb0JBQW9CO0lBQ3BCLDhCQUE4QjtJQUM5QixnQ0FBZ0M7SUFDaEMsNkNBQTZDO0lBQzdDLGNBQWM7SUFDZCxvQkFBb0I7SUFDcEIsbUNBQW1DO0lBQ25DLGdDQUFnQztJQUNoQyxnRUFBZ0U7SUFDaEUsYUFBYTtJQUNiLFFBQVE7SUFDUixLQUFLO0lBQ0w7UUFDSSxFQUFFLEVBQUUsY0FBYztRQUNsQixLQUFLLEVBQUUsZUFBZTtRQUN0QixNQUFNLEVBQUUsS0FBSztRQUNiLGdCQUFnQixFQUFFO1lBQ2QsS0FBSyxFQUFFLENBQUM7b0JBQ0osSUFBSSxFQUFFLFFBQVE7b0JBQ2QsZUFBZSxFQUFFLHFCQUFxQjtpQkFDekMsQ0FBQztZQUNGLEtBQUssRUFBRSxDQUFDO29CQUNKLElBQUksRUFBRSxRQUFRO29CQUNkLGVBQWUsRUFBRSxxREFBcUQ7aUJBRXpFLENBQUM7WUFDRixLQUFLLEVBQUUsQ0FBQztvQkFDSixJQUFJLEVBQUUsYUFBYTtvQkFDbkIsZUFBZSxFQUFFLG9EQUFvRDtvQkFDckUsU0FBUyxFQUFFLFNBQVM7aUJBQ3ZCLENBQUM7U0FDTDtLQUNKO0NBQ0osQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi9zZXJ2ZXIvdHlwaW5ncy9pbmRleC5kLnRzXCIgLz5cclxuXHJcbmV4cG9ydCBjb25zdCB3ZWJTaG9wczogQXBpLldlYlNob3BbXSA9XHJcbltcclxuICAgIHtcclxuICAgICAgICBpZDogXCJnYW1lb2xvZ3lcIixcclxuICAgICAgICBpc0Jhc2U6IHRydWUsXHJcbiAgICAgICAgdGl0bGU6IFwiR2FtZW9sb2d5XCIsXHJcbiAgICAgICAgc2NyYXBpbmdTZXR0aW5nczoge1xyXG4gICAgICAgICAgICB0aXRsZTogW3tcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwic3RyaW5nXCIsXHJcbiAgICAgICAgICAgICAgICBlbGVtZW50U2VsZWN0b3I6IFwiaDFbaXRlbXByb3A9J25hbWUnXVwiXHJcbiAgICAgICAgICAgIH1dLFxyXG4gICAgICAgICAgICBwcmljZTogW3tcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwibnVtYmVyXCIsXHJcbiAgICAgICAgICAgICAgICBlbGVtZW50U2VsZWN0b3I6IFwiI1Byb2R1Y3RQcmljZVwiXHJcbiAgICAgICAgICAgIH1dLFxyXG4gICAgICAgICAgICBpbWFnZTogW3tcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwic3RyaW5nXCIsXHJcbiAgICAgICAgICAgICAgICBlbGVtZW50U2VsZWN0b3I6IFwiI1Byb2R1Y3RQaG90b0ltZ1wiLFxyXG4gICAgICAgICAgICAgICAgYXR0cmlidXRlOiBcInNyY1wiXHJcbiAgICAgICAgICAgIH1dXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDogXCJzcGllbGVkZWx1eGVcIixcclxuICAgICAgICBpc0Jhc2U6IGZhbHNlLFxyXG4gICAgICAgIHRpdGxlOiBcIlNwaWVsZS1EZWx1eGVcIixcclxuICAgICAgICBzY3JhcGluZ1NldHRpbmdzOiB7XHJcbiAgICAgICAgICAgIHRpdGxlOiBbe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJzdHJpbmdcIixcclxuICAgICAgICAgICAgICAgIGVsZW1lbnRTZWxlY3RvcjogXCJoMVtpdGVtcHJvcD0nbmFtZSddXCJcclxuICAgICAgICAgICAgfV0sXHJcbiAgICAgICAgICAgIHByaWNlOiBbe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJudW1iZXJcIixcclxuICAgICAgICAgICAgICAgIGVsZW1lbnRTZWxlY3RvcjogXCJzcGFuW2l0ZW1wcm9wPSdwcmljZSddXCIsXHJcbiAgICAgICAgICAgICAgICBhdHRyaWJ1dGU6IFwiY29udGVudFwiXHJcbiAgICAgICAgICAgIH1dLFxyXG4gICAgICAgICAgICBpbWFnZTogW3tcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwic3RyaW5nXCIsXHJcbiAgICAgICAgICAgICAgICBlbGVtZW50U2VsZWN0b3I6IFwiaW1nW2l0ZW1wcm9wPSdpbWFnZSddXCIsXHJcbiAgICAgICAgICAgICAgICBhdHRyaWJ1dGU6IFwic3JjXCJcclxuICAgICAgICAgICAgfV1cclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGlkOiBcImpvZWRvZGd5XCIsXHJcbiAgICAgICAgaXNCYXNlOiBmYWxzZSxcclxuICAgICAgICB0aXRsZTogXCJKb2UgRG9kZ3lcIixcclxuICAgICAgICBzY3JhcGluZ1NldHRpbmdzOiB7XHJcbiAgICAgICAgICAgIHRpdGxlOiBbe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJzdHJpbmdcIixcclxuICAgICAgICAgICAgICAgIGVsZW1lbnRTZWxlY3RvcjogXCJtZXRhW2l0ZW1wcm9wPSduYW1lJ11cIixcclxuICAgICAgICAgICAgICAgIGF0dHJpYnV0ZTogXCJjb250ZW50XCJcclxuICAgICAgICAgICAgfV0sXHJcbiAgICAgICAgICAgIHByaWNlOiBbe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJudW1iZXJcIixcclxuICAgICAgICAgICAgICAgIGVsZW1lbnRTZWxlY3RvcjogXCIjcHJvZHVjdFByaWNlc1wiXHJcbiAgICAgICAgICAgIH1dLFxyXG4gICAgICAgICAgICBpbWFnZTogW3tcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwic3RyaW5nXCIsXHJcbiAgICAgICAgICAgICAgICBlbGVtZW50U2VsZWN0b3I6IFwibWV0YVtpdGVtcHJvcD0naW1hZ2UnXVwiLFxyXG4gICAgICAgICAgICAgICAgYXR0cmlidXRlOiBcImNvbnRlbnRcIlxyXG4gICAgICAgICAgICB9XVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6IFwibWlnaHR5YXBlXCIsXHJcbiAgICAgICAgaXNCYXNlOiBmYWxzZSxcclxuICAgICAgICB0aXRsZTogXCJNaWdodHkgQXBlXCIsXHJcbiAgICAgICAgc2NyYXBpbmdTZXR0aW5nczoge1xyXG4gICAgICAgICAgICB0aXRsZTogW3tcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwic3RyaW5nXCIsXHJcbiAgICAgICAgICAgICAgICBlbGVtZW50U2VsZWN0b3I6IFwiI3Byb2R1Y3QtbWFpbiBzcGFuW2l0ZW1wcm9wPSduYW1lJ11cIlxyXG4gICAgICAgICAgICB9XSxcclxuICAgICAgICAgICAgcHJpY2U6IFt7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcIm51bWJlclwiLFxyXG4gICAgICAgICAgICAgICAgZWxlbWVudFNlbGVjdG9yOiBcIiNzdW1tYXJ5IG1ldGFbaXRlbXByb3A9J3ByaWNlJ11cIixcclxuICAgICAgICAgICAgICAgIGF0dHJpYnV0ZTogXCJjb250ZW50XCJcclxuICAgICAgICAgICAgfV0sXHJcbiAgICAgICAgICAgIGltYWdlOiBbe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJzdHJpbmdcIixcclxuICAgICAgICAgICAgICAgIGVsZW1lbnRTZWxlY3RvcjogXCIjcHJvZHVjdC1tYWluIC5tYWluLWltYWdlIGltZ1wiLFxyXG4gICAgICAgICAgICAgICAgYXR0cmlidXRlOiBcInNyY1wiXHJcbiAgICAgICAgICAgIH1dXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIC8vIHtcclxuICAgIC8vICAgICBpZDogXCJ1bmhhbGZicmlja2luZ1wiLFxyXG4gICAgLy8gICAgIHRpdGxlOiBcIlVuaGFsZmJyaWNraW5nXCIsXHJcbiAgICAvLyAgICAgaXNCYXNlOiBmYWxzZSxcclxuICAgIC8vICAgICBzY3JhcGluZ1NldHRpbmdzOiB7XHJcbiAgICAvLyAgICAgICAgIHRpdGxlOiBbe1xyXG4gICAgLy8gICAgICAgICAgICAgdHlwZTogXCJzdHJpbmdcIixcclxuICAgIC8vICAgICAgICAgICAgIGV4dHJhY3Q6IFwicmVnZXhcIixcclxuICAgIC8vICAgICAgICAgICAgIHJlZ2V4OiBcIjxmb250Lio/PiguKj8pPFxcXFwvZm9udD5cIlxyXG4gICAgLy8gICAgICAgICB9XSxcclxuICAgIC8vICAgICAgICAgcHJpY2U6IFt7XHJcbiAgICAvLyAgICAgICAgICAgICB0eXBlOiBcIm51bWJlclwiLFxyXG4gICAgLy8gICAgICAgICAgICAgZXh0cmFjdDogXCJyZWdleFwiLFxyXG4gICAgLy8gICAgICAgICAgICAgcmVnZXg6IFwiXFxcXChcXFxcJChbXFxcXGRcXFxcLl0qPylcXFxcKVwiXHJcbiAgICAvLyAgICAgICAgIH1dLFxyXG4gICAgLy8gICAgICAgICBpbWFnZTogW3tcclxuICAgIC8vICAgICAgICAgICAgIHR5cGU6IFwicmVsYXRpdmVVcmxcIixcclxuICAgIC8vICAgICAgICAgICAgIGV4dHJhY3Q6IFwicmVnZXhcIixcclxuICAgIC8vICAgICAgICAgICAgIHJlZ2V4OiAnPGltZy4qP3NyYz1cIiguKj9pbWFnZXMvZ2FtZXMvLio/KVwiLio/XFxcXD4nXHJcbiAgICAvLyAgICAgICAgIH1dXHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gfSxcclxuICAgIHtcclxuICAgICAgICBpZDogXCJkdW5nZW9uY3Jhd2xcIixcclxuICAgICAgICB0aXRsZTogXCJEdW5nZW9uIENyYXdsXCIsXHJcbiAgICAgICAgaXNCYXNlOiBmYWxzZSxcclxuICAgICAgICBzY3JhcGluZ1NldHRpbmdzOiB7XHJcbiAgICAgICAgICAgIHRpdGxlOiBbe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJzdHJpbmdcIixcclxuICAgICAgICAgICAgICAgIGVsZW1lbnRTZWxlY3RvcjogXCJoMVtpdGVtcHJvcD0nbmFtZSddXCJcclxuICAgICAgICAgICAgfV0sXHJcbiAgICAgICAgICAgIHByaWNlOiBbe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJudW1iZXJcIixcclxuICAgICAgICAgICAgICAgIGVsZW1lbnRTZWxlY3RvcjogXCJkaXYucHJvZHVjdHByaWNlLnByb2R1Y3RwcmljZXRleHRbaXRlbXByb3A9J3ByaWNlJ11cIlxyXG5cclxuICAgICAgICAgICAgfV0sXHJcbiAgICAgICAgICAgIGltYWdlOiBbe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJyZWxhdGl2ZVVybFwiLFxyXG4gICAgICAgICAgICAgICAgZWxlbWVudFNlbGVjdG9yOiBcIm1ldGFbcHJvcGVydHk9J29nOmltYWdlJ11bY29udGVudCo9Jy9hc3NldHMvZnVsbCddXCIsXHJcbiAgICAgICAgICAgICAgICBhdHRyaWJ1dGU6IFwiY29udGVudFwiXHJcbiAgICAgICAgICAgIH1dXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5dOyJdfQ==

/***/ },
/* 27 */
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
	            "dungeoncrawl": "http://www.dungeoncrawl.com.au/dixit"
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
	            "dungeoncrawl": "http://www.dungeoncrawl.com.au/king-of-tokyo"
	        }
	    },
	    {
	        id: "893ce29ee2414a8fa9378a633c3909d5",
	        title: "Talisman",
	        scrapingUrls: {
	            "gameology": "http://www.gameology.com.au/products/b175_talisman_b?variant=11511245893",
	            "spieledeluxe": "http://spieledeluxe.com/products/talisman-revised-4th-edition",
	            "joedodgy": "http://www.joedodgy.com.au/index.php?main_page=product_info&cPath=3_28_66&products_id=49",
	            "mightyape": "https://www.mightyape.com.au/product/Talisman-4th-edition/10515428",
	            "dungeoncrawl": "http://www.dungeoncrawl.com.au/talisman-revised-4th-edition"
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
	            "dungeoncrawl": "http://www.dungeoncrawl.com.au/takenoko"
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
	            "dungeoncrawl": "http://www.dungeoncrawl.com.au/tokaido"
	        }
	    },
	];
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwcm9kdWN0cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSx3REFBd0Q7O0FBRTNDLGdCQUFRLEdBQWtCO0lBQ25DO1FBQ0ksRUFBRSxFQUFFLGtDQUFrQztRQUN0QyxLQUFLLEVBQUUsT0FBTztRQUNkLFlBQVksRUFBRTtZQUNWLFdBQVcsRUFBRSx1RUFBdUU7WUFDcEYsY0FBYyxFQUFFLHFEQUFxRDtZQUNyRSxVQUFVLEVBQUUsOEZBQThGO1lBQzFHLFdBQVcsRUFBRSxxREFBcUQ7WUFDbEUsY0FBYyxFQUFFLHNDQUFzQztTQUN6RDtLQUNKO0lBQ0Q7UUFDSSxFQUFFLEVBQUUsa0NBQWtDO1FBQ3RDLEtBQUssRUFBRSxlQUFlO1FBQ3RCLFlBQVksRUFBRTtZQUNWLFdBQVcsRUFBRSx5RUFBeUU7WUFDdEYsY0FBYyxFQUFFLGdEQUFnRDtZQUNoRSxVQUFVLEVBQUUsOEZBQThGO1lBQzFHLFdBQVcsRUFBRSxnRUFBZ0U7WUFDN0UsY0FBYyxFQUFFLDhDQUE4QztTQUNqRTtLQUNKO0lBQ0Q7UUFDSSxFQUFFLEVBQUUsa0NBQWtDO1FBQ3RDLEtBQUssRUFBRSxVQUFVO1FBQ2pCLFlBQVksRUFBRTtZQUNWLFdBQVcsRUFBRSwwRUFBMEU7WUFDdkYsY0FBYyxFQUFFLCtEQUErRDtZQUMvRSxVQUFVLEVBQUUsMEZBQTBGO1lBQ3RHLFdBQVcsRUFBRSxvRUFBb0U7WUFDakYsY0FBYyxFQUFFLDZEQUE2RDtTQUNoRjtLQUNKO0lBQ0Q7UUFDSSxFQUFFLEVBQUUsa0NBQWtDO1FBQ3RDLEtBQUssRUFBRSxVQUFVO1FBQ2pCLFlBQVksRUFBRTtZQUNWLFdBQVcsRUFBRSwwRUFBMEU7WUFDdkYsY0FBYyxFQUFFLDZDQUE2QztZQUM3RCxVQUFVLEVBQUUsOEZBQThGO1lBQzFHLFdBQVcsRUFBRSx3REFBd0Q7WUFDckUsY0FBYyxFQUFFLHlDQUF5QztTQUM1RDtLQUNKO0lBQ0Q7UUFDSSxFQUFFLEVBQUUsa0NBQWtDO1FBQ3RDLEtBQUssRUFBRSxTQUFTO1FBQ2hCLFlBQVksRUFBRTtZQUNWLFdBQVcsRUFBRSxrRUFBa0U7WUFDL0UsY0FBYyxFQUFFLDBDQUEwQztZQUMxRCxVQUFVLEVBQUUsMEZBQTBGO1lBQ3RHLFdBQVcsRUFBRSx1REFBdUQ7WUFDcEUsY0FBYyxFQUFFLHdDQUF3QztTQUMzRDtLQUNKO0NBQ0osQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi9zZXJ2ZXIvdHlwaW5ncy9pbmRleC5kLnRzXCIgLz5cclxuXHJcbmV4cG9ydCBjb25zdCBwcm9kdWN0czogQXBpLlByb2R1Y3RbXSA9IFtcclxuICAgIHtcclxuICAgICAgICBpZDogXCJiZTgxNDY4ZjFjNzc0ZjRjOTZlMTFkM2UyYzJkZjY3ZVwiLFxyXG4gICAgICAgIHRpdGxlOiBcIkRJWElUXCIsXHJcbiAgICAgICAgc2NyYXBpbmdVcmxzOiB7XHJcbiAgICAgICAgICAgIFwiZ2FtZW9sb2d5XCI6IFwiaHR0cDovL3d3dy5nYW1lb2xvZ3kuY29tLmF1L3Byb2R1Y3RzL2IxNTdfZGl4aXRfYj92YXJpYW50PTExNTExMjQwOTAxXCIsXHJcbiAgICAgICAgICAgIFwic3BpZWxlZGVsdXhlXCI6IFwiaHR0cDovL3NwaWVsZWRlbHV4ZS5jb20vcHJvZHVjdHMvZGl4aXQtMjAxNC1lZGl0aW9uXCIsXHJcbiAgICAgICAgICAgIFwiam9lZG9kZ3lcIjogXCJodHRwOi8vd3d3LmpvZWRvZGd5LmNvbS5hdS9pbmRleC5waHA/bWFpbl9wYWdlPXByb2R1Y3RfaW5mbyZjUGF0aD0zXzM3M18zNzQmcHJvZHVjdHNfaWQ9MTAzOFwiLFxyXG4gICAgICAgICAgICBcIm1pZ2h0eWFwZVwiOiBcImh0dHBzOi8vd3d3Lm1pZ2h0eWFwZS5jb20uYXUvcHJvZHVjdC9EaXhpdC8xMDMzOTU3MVwiLFxyXG4gICAgICAgICAgICBcImR1bmdlb25jcmF3bFwiOiBcImh0dHA6Ly93d3cuZHVuZ2VvbmNyYXdsLmNvbS5hdS9kaXhpdFwiXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDogXCI0M2U1ZGMwNDM4OTA0N2M1ODAwNzlhZjI4Y2QwM2RjNFwiLFxyXG4gICAgICAgIHRpdGxlOiBcIktpbmcgb2YgVG9reW9cIixcclxuICAgICAgICBzY3JhcGluZ1VybHM6IHtcclxuICAgICAgICAgICAgXCJnYW1lb2xvZ3lcIjogXCJodHRwOi8vd3d3LmdhbWVvbG9neS5jb20uYXUvcHJvZHVjdHMvYjE0N19raW5ndG9rX2I/dmFyaWFudD0xMTUxMTIyODAzN1wiLFxyXG4gICAgICAgICAgICBcInNwaWVsZWRlbHV4ZVwiOiBcImh0dHA6Ly9zcGllbGVkZWx1eGUuY29tL3Byb2R1Y3RzL2tpbmctb2YtdG9reW9cIixcclxuICAgICAgICAgICAgXCJqb2Vkb2RneVwiOiBcImh0dHA6Ly93d3cuam9lZG9kZ3kuY29tLmF1L2luZGV4LnBocD9tYWluX3BhZ2U9cHJvZHVjdF9pbmZvJmNQYXRoPTNfNDM4XzQzOSZwcm9kdWN0c19pZD0xMDkyXCIsXHJcbiAgICAgICAgICAgIFwibWlnaHR5YXBlXCI6IFwiaHR0cHM6Ly93d3cubWlnaHR5YXBlLmNvbS5hdS9wcm9kdWN0L0tpbmctb2YtTmV3LVlvcmsvMjI4MzE0MDdcIixcclxuICAgICAgICAgICAgXCJkdW5nZW9uY3Jhd2xcIjogXCJodHRwOi8vd3d3LmR1bmdlb25jcmF3bC5jb20uYXUva2luZy1vZi10b2t5b1wiXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDogXCI4OTNjZTI5ZWUyNDE0YThmYTkzNzhhNjMzYzM5MDlkNVwiLFxyXG4gICAgICAgIHRpdGxlOiBcIlRhbGlzbWFuXCIsXHJcbiAgICAgICAgc2NyYXBpbmdVcmxzOiB7XHJcbiAgICAgICAgICAgIFwiZ2FtZW9sb2d5XCI6IFwiaHR0cDovL3d3dy5nYW1lb2xvZ3kuY29tLmF1L3Byb2R1Y3RzL2IxNzVfdGFsaXNtYW5fYj92YXJpYW50PTExNTExMjQ1ODkzXCIsXHJcbiAgICAgICAgICAgIFwic3BpZWxlZGVsdXhlXCI6IFwiaHR0cDovL3NwaWVsZWRlbHV4ZS5jb20vcHJvZHVjdHMvdGFsaXNtYW4tcmV2aXNlZC00dGgtZWRpdGlvblwiLFxyXG4gICAgICAgICAgICBcImpvZWRvZGd5XCI6IFwiaHR0cDovL3d3dy5qb2Vkb2RneS5jb20uYXUvaW5kZXgucGhwP21haW5fcGFnZT1wcm9kdWN0X2luZm8mY1BhdGg9M18yOF82NiZwcm9kdWN0c19pZD00OVwiLFxyXG4gICAgICAgICAgICBcIm1pZ2h0eWFwZVwiOiBcImh0dHBzOi8vd3d3Lm1pZ2h0eWFwZS5jb20uYXUvcHJvZHVjdC9UYWxpc21hbi00dGgtZWRpdGlvbi8xMDUxNTQyOFwiLFxyXG4gICAgICAgICAgICBcImR1bmdlb25jcmF3bFwiOiBcImh0dHA6Ly93d3cuZHVuZ2VvbmNyYXdsLmNvbS5hdS90YWxpc21hbi1yZXZpc2VkLTR0aC1lZGl0aW9uXCJcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGlkOiBcIjBjZGQzMTQwMTYyOTRiMzY5YzQ4YzEwNjk0OTI4YTQ2XCIsXHJcbiAgICAgICAgdGl0bGU6IFwiVGFrZW5va29cIixcclxuICAgICAgICBzY3JhcGluZ1VybHM6IHtcclxuICAgICAgICAgICAgXCJnYW1lb2xvZ3lcIjogXCJodHRwOi8vd3d3LmdhbWVvbG9neS5jb20uYXUvcHJvZHVjdHMvYjE3NF90YWtlbm9rb19iP3ZhcmlhbnQ9MTE1MTEyNDUxMjVcIixcclxuICAgICAgICAgICAgXCJzcGllbGVkZWx1eGVcIjogXCJodHRwOi8vc3BpZWxlZGVsdXhlLmNvbS9wcm9kdWN0cy90YWtlbm9rby0xXCIsXHJcbiAgICAgICAgICAgIFwiam9lZG9kZ3lcIjogXCJodHRwOi8vd3d3LmpvZWRvZGd5LmNvbS5hdS9pbmRleC5waHA/bWFpbl9wYWdlPXByb2R1Y3RfaW5mbyZjUGF0aD0zXzM3M18zNzYmcHJvZHVjdHNfaWQ9MTUzM1wiLFxyXG4gICAgICAgICAgICBcIm1pZ2h0eWFwZVwiOiBcImh0dHBzOi8vd3d3Lm1pZ2h0eWFwZS5jb20uYXUvcHJvZHVjdC9UYWtlbm9rby8xOTc1NjUxNVwiLFxyXG4gICAgICAgICAgICBcImR1bmdlb25jcmF3bFwiOiBcImh0dHA6Ly93d3cuZHVuZ2VvbmNyYXdsLmNvbS5hdS90YWtlbm9rb1wiXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDogXCJiMGM0NWNmNmEwMGU0ZWM0OTNiMjMwMGQxMmJlNmE4NFwiLFxyXG4gICAgICAgIHRpdGxlOiBcIlRva2FpZG9cIixcclxuICAgICAgICBzY3JhcGluZ1VybHM6IHtcclxuICAgICAgICAgICAgXCJnYW1lb2xvZ3lcIjogXCJodHRwOi8vd3d3LmdhbWVvbG9neS5jb20uYXUvcHJvZHVjdHMvdG9rYWlkbz92YXJpYW50PTE2ODEwNjkzODI5XCIsXHJcbiAgICAgICAgICAgIFwic3BpZWxlZGVsdXhlXCI6IFwiaHR0cDovL3NwaWVsZWRlbHV4ZS5jb20vcHJvZHVjdHMvdG9rYWlkb1wiLFxyXG4gICAgICAgICAgICBcImpvZWRvZGd5XCI6IFwiaHR0cDovL3d3dy5qb2Vkb2RneS5jb20uYXUvaW5kZXgucGhwP21haW5fcGFnZT1wcm9kdWN0X2luZm8mY1BhdGg9M18yNzYmcHJvZHVjdHNfaWQ9MTY0NFwiLFxyXG4gICAgICAgICAgICBcIm1pZ2h0eWFwZVwiOiBcImh0dHBzOi8vd3d3Lm1pZ2h0eWFwZS5jb20uYXUvcHJvZHVjdC9Ub2thaWRvLzIxODkwMzIxXCIsXHJcbiAgICAgICAgICAgIFwiZHVuZ2VvbmNyYXdsXCI6IFwiaHR0cDovL3d3dy5kdW5nZW9uY3Jhd2wuY29tLmF1L3Rva2FpZG9cIlxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbl07Il19

/***/ }
/******/ ]);
//# sourceMappingURL=import-test-data.js.map