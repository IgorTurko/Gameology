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
	        return this.validator
	            .validate(webShop)
	            .then(function (webShop) { return _this.storage
	            .save(webShop)
	            .then(function () { return _this.one(webShop.id); }); });
	    };
	    WebShopService.prototype.put = function (webShop) {
	        var _this = this;
	        if (!webShop)
	            throw new Error("webShop is undefined");
	        return this.storage
	            .put(webShop)
	            .then(function () { return _this.one(webShop.id); })
	            .catch(function (err) {
	            throw {
	                "": "" + err
	            };
	        });
	    };
	    return WebShopService;
	}());
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = WebShopService;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2ViLXNob3Atc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIndlYi1zaG9wLXNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsaURBQWlEOztBQUVqRCxtQ0FBNkIsc0JBQXNCLENBQUMsQ0FBQTtBQUVwRDtJQUlJLHdCQUFvQixPQUFpQztRQUFqQyxZQUFPLEdBQVAsT0FBTyxDQUEwQjtRQUY3QyxjQUFTLEdBQUcsSUFBSSw0QkFBZ0IsRUFBRSxDQUFDO1FBR3ZDLEVBQUUsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDO1lBQ1QsTUFBTSxJQUFJLEtBQUssQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO0lBQ2hELENBQUM7SUFFRCw0QkFBRyxHQUFIO1FBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLENBQUM7SUFDOUIsQ0FBQztJQUVELDRCQUFHLEdBQUgsVUFBSSxTQUFpQjtRQUNqQixFQUFFLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztZQUNYLE1BQU0sSUFBSSxLQUFLLENBQUMsd0JBQXdCLENBQUMsQ0FBQztRQUM5QyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDdkMsQ0FBQztJQUVELDZCQUFJLEdBQUosVUFBSyxPQUFvQjtRQUF6QixpQkFTQztRQVJHLEVBQUUsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDO1lBQ1QsTUFBTSxJQUFJLEtBQUssQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO1FBRTVDLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUzthQUNoQixRQUFRLENBQUMsT0FBTyxDQUFDO2FBQ2pCLElBQUksQ0FBQyxVQUFBLE9BQU8sSUFBSSxPQUFBLEtBQUksQ0FBQyxPQUFPO2FBQ3hCLElBQUksQ0FBQyxPQUFPLENBQUM7YUFDYixJQUFJLENBQUMsY0FBTSxPQUFBLEtBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxFQUFwQixDQUFvQixDQUFDLEVBRnBCLENBRW9CLENBQUMsQ0FBQztJQUMvQyxDQUFDO0lBRUQsNEJBQUcsR0FBSCxVQUFJLE9BQW9CO1FBQXhCLGlCQVlDO1FBWEcsRUFBRSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUM7WUFDVCxNQUFNLElBQUksS0FBSyxDQUFDLHNCQUFzQixDQUFDLENBQUM7UUFFNUMsTUFBTSxDQUE0QixJQUFJLENBQUMsT0FBTzthQUN6QyxHQUFHLENBQUMsT0FBTyxDQUFDO2FBQ1osSUFBSSxDQUFDLGNBQU0sT0FBQSxLQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsRUFBcEIsQ0FBb0IsQ0FBQzthQUNoQyxLQUFLLENBQUMsVUFBQSxHQUFHO1lBQ04sTUFBTTtnQkFDRixFQUFFLEVBQUUsS0FBRyxHQUFLO2FBQ2YsQ0FBQztRQUNOLENBQUMsQ0FBQyxDQUFDO0lBQ1gsQ0FBQztJQUNMLHFCQUFDO0FBQUQsQ0FBQyxBQTNDRCxJQTJDQztBQTNDRDtnQ0EyQ0MsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi90eXBpbmdzL2luZGV4LmQudHNcIiAvPlxyXG5cclxuaW1wb3J0IFdlYlNob3BWYWxpZGF0b3IgZnJvbSBcIi4vd2ViLXNob3AtdmFsaWRhdG9yXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBXZWJTaG9wU2VydmljZSB7XHJcblxyXG4gICAgcHJpdmF0ZSB2YWxpZGF0b3IgPSBuZXcgV2ViU2hvcFZhbGlkYXRvcigpO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgc3RvcmFnZTogV2ViU2hvcHMuSVdlYlNob3BTdG9yYWdlKSB7XHJcbiAgICAgICAgaWYgKCFzdG9yYWdlKVxyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJzdG9yYWdlIGlzIHVuZGVmaW5lZFwiKTtcclxuICAgIH1cclxuXHJcbiAgICBhbGwoKTogUHJvbWlzZTxBcGkuV2ViU2hvcFtdPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RvcmFnZS5hbGwoKTtcclxuICAgIH1cclxuXHJcbiAgICBvbmUod2ViU2hvcElkOiBzdHJpbmcpOiBQcm9taXNlPEFwaS5XZWJTaG9wPiB7XHJcbiAgICAgICAgaWYgKCF3ZWJTaG9wSWQpXHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIndlYlNob3BJZCBpcyB1bmRlZmluZWRcIik7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RvcmFnZS5vbmUod2ViU2hvcElkKTtcclxuICAgIH1cclxuXHJcbiAgICBzYXZlKHdlYlNob3A6IEFwaS5XZWJTaG9wKTogUHJvbWlzZTxBcGkuV2ViU2hvcD4ge1xyXG4gICAgICAgIGlmICghd2ViU2hvcClcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwid2ViU2hvcCBpcyB1bmRlZmluZWRcIik7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLnZhbGlkYXRvclxyXG4gICAgICAgICAgICAudmFsaWRhdGUod2ViU2hvcClcclxuICAgICAgICAgICAgLnRoZW4od2ViU2hvcCA9PiB0aGlzLnN0b3JhZ2VcclxuICAgICAgICAgICAgICAgIC5zYXZlKHdlYlNob3ApXHJcbiAgICAgICAgICAgICAgICAudGhlbigoKSA9PiB0aGlzLm9uZSh3ZWJTaG9wLmlkKSkpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1dCh3ZWJTaG9wOiBBcGkuV2ViU2hvcCk6IFByb21pc2U8QXBpLldlYlNob3A+IHtcclxuICAgICAgICBpZiAoIXdlYlNob3ApXHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIndlYlNob3AgaXMgdW5kZWZpbmVkXCIpO1xyXG5cclxuICAgICAgICByZXR1cm4gPFByb21pc2U8QXBpLldlYlNob3A+Pjxhbnk+dGhpcy5zdG9yYWdlXHJcbiAgICAgICAgICAgIC5wdXQod2ViU2hvcClcclxuICAgICAgICAgICAgLnRoZW4oKCkgPT4gdGhpcy5vbmUod2ViU2hvcC5pZCkpXHJcbiAgICAgICAgICAgIC5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiXCI6IGAke2Vycn1gXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxufSJdfQ==

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	/// <reference path="../../typings/index.d.ts" />
	"use strict";
	var validator_1 = __webpack_require__(10);
	var WebShopValidator = (function () {
	    function WebShopValidator() {
	        /** Only updateable fields is validated */
	        this.validator = validator_1.rules.obj({
	            deliveryPrice: validator_1.rules.num(false, { errorMessage: "Invalid price" })
	                .parseNumber({ errorMessage: "Price is not recognized as number" })
	                .must(function (price) { return !price || price > 0; }, { errorMessage: "Delivery price must be greater than zero" })
	        }).expandable();
	    }
	    WebShopValidator.prototype.validate = function (webShop) {
	        if (!webShop)
	            throw new Error("webShop is undefined");
	        return validator_1.validateWithPromise(webShop, this.validator);
	    };
	    return WebShopValidator;
	}());
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = WebShopValidator;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2ViLXNob3AtdmFsaWRhdG9yLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsid2ViLXNob3AtdmFsaWRhdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGlEQUFpRDs7QUFFakQsMEJBQXVFLGlCQUFpQixDQUFDLENBQUE7QUFFekY7SUFBQTtRQUNJLDBDQUEwQztRQUNuQyxjQUFTLEdBQWdDLGlCQUFLLENBQUMsR0FBRyxDQUFjO1lBQ25FLGFBQWEsRUFBRSxpQkFBSyxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsRUFBRSxZQUFZLEVBQUUsZUFBZSxFQUFFLENBQUM7aUJBQzdELFdBQVcsQ0FBQyxFQUFFLFlBQVksRUFBRSxtQ0FBbUMsRUFBRSxDQUFDO2lCQUNsRSxJQUFJLENBQUMsVUFBQSxLQUFLLElBQUksT0FBQSxDQUFDLEtBQUssSUFBSSxLQUFLLEdBQUcsQ0FBQyxFQUFuQixDQUFtQixFQUFFLEVBQUUsWUFBWSxFQUFFLDBDQUEwQyxFQUFFLENBQUM7U0FDeEcsQ0FBQyxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBUXBCLENBQUM7SUFORyxtQ0FBUSxHQUFSLFVBQVMsT0FBb0I7UUFDekIsRUFBRSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUM7WUFDVCxNQUFNLElBQUksS0FBSyxDQUFDLHNCQUFzQixDQUFDLENBQUM7UUFFNUMsTUFBTSxDQUFDLCtCQUFRLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUM3QyxDQUFDO0lBQ0wsdUJBQUM7QUFBRCxDQUFDLEFBZEQsSUFjQztBQWREO2tDQWNDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vdHlwaW5ncy9pbmRleC5kLnRzXCIgLz5cclxuXHJcbmltcG9ydCB7IHZhbGlkYXRlV2l0aFByb21pc2UgYXMgdmFsaWRhdGUsIFZhbGlkYXRpb25SdWxlLCBydWxlcyB9IGZyb20gXCIuLi8uLi92YWxpZGF0b3JcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFdlYlNob3BWYWxpZGF0b3Ige1xyXG4gICAgLyoqIE9ubHkgdXBkYXRlYWJsZSBmaWVsZHMgaXMgdmFsaWRhdGVkICovXHJcbiAgICBwdWJsaWMgdmFsaWRhdG9yOiBWYWxpZGF0aW9uUnVsZTxBcGkuV2ViU2hvcD4gPSBydWxlcy5vYmo8QXBpLldlYlNob3A+KHtcclxuICAgICAgICBkZWxpdmVyeVByaWNlOiBydWxlcy5udW0oZmFsc2UsIHsgZXJyb3JNZXNzYWdlOiBcIkludmFsaWQgcHJpY2VcIiB9KVxyXG4gICAgICAgICAgICAucGFyc2VOdW1iZXIoeyBlcnJvck1lc3NhZ2U6IFwiUHJpY2UgaXMgbm90IHJlY29nbml6ZWQgYXMgbnVtYmVyXCIgfSlcclxuICAgICAgICAgICAgLm11c3QocHJpY2UgPT4gIXByaWNlIHx8IHByaWNlID4gMCwgeyBlcnJvck1lc3NhZ2U6IFwiRGVsaXZlcnkgcHJpY2UgbXVzdCBiZSBncmVhdGVyIHRoYW4gemVyb1wiIH0pXHJcbiAgICB9KS5leHBhbmRhYmxlKCk7XHJcblxyXG4gICAgdmFsaWRhdGUod2ViU2hvcDogQXBpLldlYlNob3ApOiBQcm9taXNlPEFwaS5XZWJTaG9wPiB7XHJcbiAgICAgICAgaWYgKCF3ZWJTaG9wKVxyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJ3ZWJTaG9wIGlzIHVuZGVmaW5lZFwiKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHZhbGlkYXRlKHdlYlNob3AsIHRoaXMudmFsaWRhdG9yKTtcclxuICAgIH1cclxufSJdfQ==

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var error_accumulator_1 = __webpack_require__(11);
	var validation_context_1 = __webpack_require__(12);
	var rules = __webpack_require__(13);
	exports.rules = rules;
	function validateWithCallback(value, done) {
	    var validators = [];
	    for (var _i = 2; _i < arguments.length; _i++) {
	        validators[_i - 2] = arguments[_i];
	    }
	    if (!done) {
	        throw new Error("Done callback is required.");
	    }
	    if (!validators || !validators.length) {
	        throw new Error("At least one validator is required");
	    }
	    var errorAccumulator = new error_accumulator_1.default();
	    var validationContext = new validation_context_1.default("", errorAccumulator);
	    var rule = rules.combineRules.apply(rules, validators);
	    var parsedValue = rule.runParse(value, value, value);
	    rule.runValidate(validationContext, function () {
	        if (errorAccumulator.valid()) {
	            var validationResult = {
	                valid: true,
	                convertedValue: parsedValue
	            };
	            done(validationResult);
	        }
	        else {
	            var validationResult = {
	                valid: false,
	                convertedValue: null,
	                errors: errorAccumulator.errors()
	            };
	            done(validationResult);
	        }
	    }, parsedValue, parsedValue, parsedValue);
	}
	exports.validateWithCallback = validateWithCallback;
	function validateWithPromise(value) {
	    var validators = [];
	    for (var _i = 1; _i < arguments.length; _i++) {
	        validators[_i - 1] = arguments[_i];
	    }
	    if (!validators || !validators.length) {
	        throw new Error("At least one validator is required");
	    }
	    return new Promise(function (resolve, reject) {
	        validateWithCallback.apply(void 0, [value, function (result) {
	            if (result.valid) {
	                resolve(result.convertedValue);
	            }
	            else {
	                reject(result.errors);
	            }
	        }].concat(validators));
	    });
	}
	exports.validateWithPromise = validateWithPromise;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0Esa0NBQTZCLHFCQUFxQixDQUFDLENBQUE7QUFDbkQsbUNBQThCLHNCQUFzQixDQUFDLENBQUE7QUFFckQsSUFBWSxLQUFLLFdBQU0sU0FBUyxDQUFDLENBQUE7QUFHeEIsYUFBSztBQUVkLDhCQUF3QyxLQUFVLEVBQUUsSUFBMkM7SUFBRSxvQkFBa0M7U0FBbEMsV0FBa0MsQ0FBbEMsc0JBQWtDLENBQWxDLElBQWtDO1FBQWxDLG1DQUFrQzs7SUFDL0gsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQ1IsTUFBTSxJQUFJLEtBQUssQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDO0lBQ2xELENBQUM7SUFDRCxFQUFFLENBQUMsQ0FBQyxDQUFDLFVBQVUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1FBQ3BDLE1BQU0sSUFBSSxLQUFLLENBQUMsb0NBQW9DLENBQUMsQ0FBQztJQUMxRCxDQUFDO0lBRUQsSUFBTSxnQkFBZ0IsR0FBRyxJQUFJLDJCQUFnQixFQUFFLENBQUM7SUFDaEQsSUFBTSxpQkFBaUIsR0FBRyxJQUFJLDRCQUFpQixDQUFDLEVBQUUsRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDO0lBRXRFLElBQU0sSUFBSSxHQUFHLEtBQUssQ0FBQyxZQUFZLE9BQWxCLEtBQUssRUFBaUIsVUFBVSxDQUFDLENBQUM7SUFFL0MsSUFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBRXZELElBQUksQ0FBQyxXQUFXLENBQ1osaUJBQWlCLEVBQ2pCO1FBQ0ksRUFBRSxDQUFDLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQzNCLElBQU0sZ0JBQWdCLEdBQXdCO2dCQUMxQyxLQUFLLEVBQUUsSUFBSTtnQkFDWCxjQUFjLEVBQUUsV0FBVzthQUM5QixDQUFDO1lBQ0YsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFDM0IsQ0FBQztRQUNELElBQUksQ0FBQyxDQUFDO1lBQ0YsSUFBTSxnQkFBZ0IsR0FBd0I7Z0JBQzFDLEtBQUssRUFBRSxLQUFLO2dCQUNaLGNBQWMsRUFBRSxJQUFJO2dCQUNwQixNQUFNLEVBQUUsZ0JBQWdCLENBQUMsTUFBTSxFQUFFO2FBQ3BDLENBQUM7WUFDRixJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUMzQixDQUFDO0lBQ0wsQ0FBQyxFQUNELFdBQVcsRUFDWCxXQUFXLEVBQ1gsV0FBVyxDQUFDLENBQUM7QUFDckIsQ0FBQztBQXJDZSw0QkFBb0IsdUJBcUNuQyxDQUFBO0FBRUQsNkJBQXVDLEtBQVU7SUFBRSxvQkFBa0M7U0FBbEMsV0FBa0MsQ0FBbEMsc0JBQWtDLENBQWxDLElBQWtDO1FBQWxDLG1DQUFrQzs7SUFDakYsRUFBRSxDQUFDLENBQUMsQ0FBQyxVQUFVLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUNwQyxNQUFNLElBQUksS0FBSyxDQUFDLG9DQUFvQyxDQUFDLENBQUM7SUFDMUQsQ0FBQztJQUVELE1BQU0sQ0FBQyxJQUFJLE9BQU8sQ0FBQyxVQUFDLE9BQU8sRUFBRSxNQUFNO1FBQy9CLG9CQUFvQixnQkFDaEIsS0FBSyxFQUNMLFVBQUEsTUFBTTtZQUNGLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO2dCQUNmLE9BQU8sQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLENBQUM7WUFDbkMsQ0FBQztZQUNELElBQUksQ0FBQyxDQUFDO2dCQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDMUIsQ0FBQztRQUNMLENBQUMsU0FDRSxVQUFVLEVBQUMsQ0FBQztJQUN2QixDQUFDLENBQUMsQ0FBQztBQUNQLENBQUM7QUFsQmUsMkJBQW1CLHNCQWtCbEMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFZhbGlkYXRpb25SdWxlLCBWYWxpZGF0aW9uUmVzdWx0IH0gZnJvbSBcIi4vZGVmaW5pdGlvbnNcIjtcclxuaW1wb3J0IEVycm9yQWNjdW11bGF0b3IgZnJvbSBcIi4vZXJyb3ItYWNjdW11bGF0b3JcIjtcclxuaW1wb3J0IFZhbGlkYXRpb25Db250ZXh0IGZyb20gXCIuL3ZhbGlkYXRpb24tY29udGV4dFwiO1xyXG5cclxuaW1wb3J0ICogYXMgcnVsZXMgZnJvbSBcIi4vcnVsZXNcIjtcclxuXHJcbmV4cG9ydCAqIGZyb20gXCIuL2RlZmluaXRpb25zXCI7XHJcbmV4cG9ydCB7IHJ1bGVzIH07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdmFsaWRhdGVXaXRoQ2FsbGJhY2s8VD4odmFsdWU6IGFueSwgZG9uZTogKHJlc3VsdDogVmFsaWRhdGlvblJlc3VsdDxUPikgPT4gdm9pZCwgLi4udmFsaWRhdG9yczogVmFsaWRhdGlvblJ1bGU8VD5bXSk6IHZvaWQge1xyXG4gICAgaWYgKCFkb25lKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiRG9uZSBjYWxsYmFjayBpcyByZXF1aXJlZC5cIik7XHJcbiAgICB9XHJcbiAgICBpZiAoIXZhbGlkYXRvcnMgfHwgIXZhbGlkYXRvcnMubGVuZ3RoKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQXQgbGVhc3Qgb25lIHZhbGlkYXRvciBpcyByZXF1aXJlZFwiKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBlcnJvckFjY3VtdWxhdG9yID0gbmV3IEVycm9yQWNjdW11bGF0b3IoKTtcclxuICAgIGNvbnN0IHZhbGlkYXRpb25Db250ZXh0ID0gbmV3IFZhbGlkYXRpb25Db250ZXh0KFwiXCIsIGVycm9yQWNjdW11bGF0b3IpO1xyXG5cclxuICAgIGNvbnN0IHJ1bGUgPSBydWxlcy5jb21iaW5lUnVsZXMoLi4udmFsaWRhdG9ycyk7XHJcblxyXG4gICAgY29uc3QgcGFyc2VkVmFsdWUgPSBydWxlLnJ1blBhcnNlKHZhbHVlLCB2YWx1ZSwgdmFsdWUpO1xyXG5cclxuICAgIHJ1bGUucnVuVmFsaWRhdGUoXHJcbiAgICAgICAgdmFsaWRhdGlvbkNvbnRleHQsXHJcbiAgICAgICAgKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZXJyb3JBY2N1bXVsYXRvci52YWxpZCgpKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB2YWxpZGF0aW9uUmVzdWx0OiBWYWxpZGF0aW9uUmVzdWx0PFQ+ID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbGlkOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnZlcnRlZFZhbHVlOiBwYXJzZWRWYWx1ZVxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIGRvbmUodmFsaWRhdGlvblJlc3VsdCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB2YWxpZGF0aW9uUmVzdWx0OiBWYWxpZGF0aW9uUmVzdWx0PFQ+ID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbGlkOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICBjb252ZXJ0ZWRWYWx1ZTogbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICBlcnJvcnM6IGVycm9yQWNjdW11bGF0b3IuZXJyb3JzKClcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICBkb25lKHZhbGlkYXRpb25SZXN1bHQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBwYXJzZWRWYWx1ZSxcclxuICAgICAgICBwYXJzZWRWYWx1ZSxcclxuICAgICAgICBwYXJzZWRWYWx1ZSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB2YWxpZGF0ZVdpdGhQcm9taXNlPFQ+KHZhbHVlOiBhbnksIC4uLnZhbGlkYXRvcnM6IFZhbGlkYXRpb25SdWxlPFQ+W10pOiBQcm9taXNlPFQ+IHtcclxuICAgIGlmICghdmFsaWRhdG9ycyB8fCAhdmFsaWRhdG9ycy5sZW5ndGgpIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJBdCBsZWFzdCBvbmUgdmFsaWRhdG9yIGlzIHJlcXVpcmVkXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgdmFsaWRhdGVXaXRoQ2FsbGJhY2soXHJcbiAgICAgICAgICAgIHZhbHVlLFxyXG4gICAgICAgICAgICByZXN1bHQgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdC52YWxpZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVzdWx0LmNvbnZlcnRlZFZhbHVlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChyZXN1bHQuZXJyb3JzKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgLi4udmFsaWRhdG9ycyk7XHJcbiAgICB9KTtcclxufSJdfQ==

/***/ },
/* 11 */
/***/ function(module, exports) {

	"use strict";
	var ErrorAccumulator = (function () {
	    function ErrorAccumulator() {
	        this.errorHash = {};
	        this.isValid = true;
	    }
	    ErrorAccumulator.prototype.report = function (path, errorMessage) {
	        if (!errorMessage) {
	            return;
	        }
	        var messages = this.errorHash[path] = (this.errorHash[path] || []);
	        messages.push(errorMessage);
	        this.isValid = false;
	    };
	    ErrorAccumulator.prototype.errors = function () {
	        return this.errorHash;
	    };
	    ErrorAccumulator.prototype.valid = function () {
	        return this.isValid;
	    };
	    return ErrorAccumulator;
	}());
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = ErrorAccumulator;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXJyb3ItYWNjdW11bGF0b3IuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJlcnJvci1hY2N1bXVsYXRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBRUE7SUFBQTtRQUNZLGNBQVMsR0FBd0IsRUFBRSxDQUFDO1FBQ3BDLFlBQU8sR0FBRyxJQUFJLENBQUM7SUFvQjNCLENBQUM7SUFsQkcsaUNBQU0sR0FBTixVQUFPLElBQVksRUFBRSxZQUFvQjtRQUNyQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7WUFDaEIsTUFBTSxDQUFDO1FBQ1gsQ0FBQztRQUVELElBQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO1FBQ3JFLFFBQVEsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7UUFFNUIsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7SUFDekIsQ0FBQztJQUVELGlDQUFNLEdBQU47UUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUMxQixDQUFDO0lBRUQsZ0NBQUssR0FBTDtRQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3hCLENBQUM7SUFDTCx1QkFBQztBQUFELENBQUMsQUF0QkQsSUFzQkM7QUF0QkQ7a0NBc0JDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBWYWxpZGF0aW9uRXJyb3JIYXNoIH0gZnJvbSBcIi4vZGVmaW5pdGlvbnNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVycm9yQWNjdW11bGF0b3Ige1xyXG4gICAgcHJpdmF0ZSBlcnJvckhhc2g6IFZhbGlkYXRpb25FcnJvckhhc2ggPSB7fTtcclxuICAgIHByaXZhdGUgaXNWYWxpZCA9IHRydWU7XHJcblxyXG4gICAgcmVwb3J0KHBhdGg6IHN0cmluZywgZXJyb3JNZXNzYWdlOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICBpZiAoIWVycm9yTWVzc2FnZSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBtZXNzYWdlcyA9IHRoaXMuZXJyb3JIYXNoW3BhdGhdID0gKHRoaXMuZXJyb3JIYXNoW3BhdGhdIHx8IFtdKTtcclxuICAgICAgICBtZXNzYWdlcy5wdXNoKGVycm9yTWVzc2FnZSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5pc1ZhbGlkID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgZXJyb3JzKCk6IFZhbGlkYXRpb25FcnJvckhhc2gge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmVycm9ySGFzaDtcclxuICAgIH1cclxuXHJcbiAgICB2YWxpZCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5pc1ZhbGlkO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var error_accumulator_1 = __webpack_require__(11);
	var ValidationContext = (function () {
	    function ValidationContext(path, errorAccumulator, errorCallback) {
	        if (errorCallback === void 0) { errorCallback = null; }
	        this.path = path;
	        this.errorAccumulator = errorAccumulator;
	        this.errorCallback = errorCallback;
	        this.errorBuffer = null;
	    }
	    ValidationContext.prototype.reportError = function (message) {
	        if (this.errorCallback && !this.errorCallback(message)) {
	            return;
	        }
	        (this.errorBuffer || this.errorAccumulator).report(this.path, message);
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
	        var result = new ValidationContext(fullPath, this.errorBuffer || this.errorAccumulator, errorCallback);
	        return result;
	    };
	    ValidationContext.prototype.bufferErrors = function () {
	        var result = new ValidationContext(this.path, this.errorAccumulator, this.errorCallback);
	        result.errorBuffer = new error_accumulator_1.default();
	        return result;
	    };
	    ValidationContext.prototype.flushErrors = function () {
	        var _this = this;
	        if (this.errorBuffer) {
	            var errors_1 = this.errorBuffer.errors();
	            Object.keys(errors_1)
	                .forEach(function (path) {
	                var messages = errors_1[path];
	                messages.forEach(function (message) { return _this.errorAccumulator.report(path, message); });
	            });
	        }
	        this.errorBuffer = null;
	    };
	    return ValidationContext;
	}());
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = ValidationContext;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdGlvbi1jb250ZXh0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidmFsaWRhdGlvbi1jb250ZXh0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFFQSxrQ0FBNkIscUJBQXFCLENBQUMsQ0FBQTtBQUVuRDtJQUdJLDJCQUNXLElBQVksRUFDWCxnQkFBa0MsRUFDbEMsYUFBdUQ7UUFBL0QsNkJBQStELEdBQS9ELG9CQUErRDtRQUZ4RCxTQUFJLEdBQUosSUFBSSxDQUFRO1FBQ1gscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUNsQyxrQkFBYSxHQUFiLGFBQWEsQ0FBMEM7UUFMM0QsZ0JBQVcsR0FBcUIsSUFBSSxDQUFDO0lBTTdDLENBQUM7SUFFRCx1Q0FBVyxHQUFYLFVBQVksT0FBZTtRQUN2QixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDckQsTUFBTSxDQUFDO1FBQ1gsQ0FBQztRQUVELENBQUMsSUFBSSxDQUFDLFdBQVcsSUFBSSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQztJQUMzRSxDQUFDO0lBRUQsb0NBQVEsR0FBUixVQUFTLFlBQW9CLEVBQUUsYUFBaUQ7UUFDNUUsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLGFBQWEsQ0FBQyxDQUFDO0lBQ2xELENBQUM7SUFFRCxpQ0FBSyxHQUFMLFVBQU0sS0FBYSxFQUFFLGFBQWlEO1FBQ2xFLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQUksS0FBSyxNQUFHLEVBQUUsYUFBYSxDQUFDLENBQUM7SUFDbEQsQ0FBQztJQUVPLGdDQUFJLEdBQVosVUFBYSxJQUFZLEVBQUUsYUFBZ0Q7UUFDdkUsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ1IsTUFBTSxJQUFJLEtBQUssQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1FBQ3pDLENBQUM7UUFFRCxJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUM7UUFDcEIsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDWixRQUFRLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsR0FBRyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUM7UUFDM0UsQ0FBQztRQUVELElBQU0sTUFBTSxHQUFHLElBQUksaUJBQWlCLENBQ2hDLFFBQVEsRUFDUixJQUFJLENBQUMsV0FBVyxJQUFJLElBQUksQ0FBQyxnQkFBZ0IsRUFDekMsYUFBYSxDQUNoQixDQUFDO1FBRUYsTUFBTSxDQUFDLE1BQU0sQ0FBQztJQUNsQixDQUFDO0lBRUQsd0NBQVksR0FBWjtRQUNJLElBQU0sTUFBTSxHQUFHLElBQUksaUJBQWlCLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQzNGLE1BQU0sQ0FBQyxXQUFXLEdBQUcsSUFBSSwyQkFBZ0IsRUFBRSxDQUFDO1FBRTVDLE1BQU0sQ0FBQyxNQUFNLENBQUM7SUFDbEIsQ0FBQztJQUVELHVDQUFXLEdBQVg7UUFBQSxpQkFXQztRQVZHLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO1lBQ25CLElBQU0sUUFBTSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxFQUFFLENBQUM7WUFDekMsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFNLENBQUM7aUJBQ2QsT0FBTyxDQUFDLFVBQUEsSUFBSTtnQkFDVCxJQUFNLFFBQVEsR0FBRyxRQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQzlCLFFBQVEsQ0FBQyxPQUFPLENBQUMsVUFBQSxPQUFPLElBQUksT0FBQSxLQUFJLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsRUFBM0MsQ0FBMkMsQ0FBQyxDQUFDO1lBQzdFLENBQUMsQ0FBQyxDQUFDO1FBQ1gsQ0FBQztRQUVELElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO0lBQzVCLENBQUM7SUFDTCx3QkFBQztBQUFELENBQUMsQUEvREQsSUErREM7QUEvREQ7bUNBK0RDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJVmFsaWRhdGlvbkNvbnRleHQgfSBmcm9tIFwiLi9kZWZpbml0aW9uc1wiO1xyXG5cclxuaW1wb3J0IEVycm9yQWNjdW11bGF0b3IgZnJvbSBcIi4vZXJyb3ItYWNjdW11bGF0b3JcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFZhbGlkYXRpb25Db250ZXh0IGltcGxlbWVudHMgSVZhbGlkYXRpb25Db250ZXh0IHtcclxuICAgIHByaXZhdGUgZXJyb3JCdWZmZXI6IEVycm9yQWNjdW11bGF0b3IgPSBudWxsO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHB1YmxpYyBwYXRoOiBzdHJpbmcsXHJcbiAgICAgICAgcHJpdmF0ZSBlcnJvckFjY3VtdWxhdG9yOiBFcnJvckFjY3VtdWxhdG9yLFxyXG4gICAgICAgIHByaXZhdGUgZXJyb3JDYWxsYmFjazogKGVycm9yTWVzc2FnZTogc3RyaW5nKSA9PiBib29sZWFuID0gbnVsbCkge1xyXG4gICAgfVxyXG5cclxuICAgIHJlcG9ydEVycm9yKG1lc3NhZ2U6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLmVycm9yQ2FsbGJhY2sgJiYgIXRoaXMuZXJyb3JDYWxsYmFjayhtZXNzYWdlKSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAodGhpcy5lcnJvckJ1ZmZlciB8fCB0aGlzLmVycm9yQWNjdW11bGF0b3IpLnJlcG9ydCh0aGlzLnBhdGgsIG1lc3NhZ2UpO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3BlcnR5KHByb3BlcnR5TmFtZTogc3RyaW5nLCBlcnJvckNhbGxiYWNrPzogKGVycm9yTWVzc2FnZTogc3RyaW5nKSA9PiBib29sZWFuKTogVmFsaWRhdGlvbkNvbnRleHQge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm5lc3QocHJvcGVydHlOYW1lLCBlcnJvckNhbGxiYWNrKTtcclxuICAgIH1cclxuXHJcbiAgICBpbmRleChpbmRleDogbnVtYmVyLCBlcnJvckNhbGxiYWNrPzogKGVycm9yTWVzc2FnZTogc3RyaW5nKSA9PiBib29sZWFuKTogVmFsaWRhdGlvbkNvbnRleHQge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm5lc3QoYFske2luZGV4fV1gLCBlcnJvckNhbGxiYWNrKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG5lc3QocGF0aDogc3RyaW5nLCBlcnJvckNhbGxiYWNrOiAoZXJyb3JNZXNzYWdlOiBzdHJpbmcpID0+IGJvb2xlYW4pOiBWYWxpZGF0aW9uQ29udGV4dCB7XHJcbiAgICAgICAgaWYgKCFwYXRoKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcInBhdGggaXMgdW5kZWZpbmVkXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IGZ1bGxQYXRoID0gcGF0aDtcclxuICAgICAgICBpZiAodGhpcy5wYXRoKSB7XHJcbiAgICAgICAgICAgIGZ1bGxQYXRoID0gcGF0aFswXSA9PT0gXCJbXCIgPyB0aGlzLnBhdGggKyBwYXRoIDogdGhpcy5wYXRoICsgXCIuXCIgKyBwYXRoO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IFZhbGlkYXRpb25Db250ZXh0KFxyXG4gICAgICAgICAgICBmdWxsUGF0aCxcclxuICAgICAgICAgICAgdGhpcy5lcnJvckJ1ZmZlciB8fCB0aGlzLmVycm9yQWNjdW11bGF0b3IsXHJcbiAgICAgICAgICAgIGVycm9yQ2FsbGJhY2tcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG5cclxuICAgIGJ1ZmZlckVycm9ycygpIHtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgVmFsaWRhdGlvbkNvbnRleHQodGhpcy5wYXRoLCB0aGlzLmVycm9yQWNjdW11bGF0b3IsIHRoaXMuZXJyb3JDYWxsYmFjayk7XHJcbiAgICAgICAgcmVzdWx0LmVycm9yQnVmZmVyID0gbmV3IEVycm9yQWNjdW11bGF0b3IoKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxuXHJcbiAgICBmbHVzaEVycm9ycygpIHtcclxuICAgICAgICBpZiAodGhpcy5lcnJvckJ1ZmZlcikge1xyXG4gICAgICAgICAgICBjb25zdCBlcnJvcnMgPSB0aGlzLmVycm9yQnVmZmVyLmVycm9ycygpO1xyXG4gICAgICAgICAgICBPYmplY3Qua2V5cyhlcnJvcnMpXHJcbiAgICAgICAgICAgICAgICAuZm9yRWFjaChwYXRoID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBtZXNzYWdlcyA9IGVycm9yc1twYXRoXTtcclxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlcy5mb3JFYWNoKG1lc3NhZ2UgPT4gdGhpcy5lcnJvckFjY3VtdWxhdG9yLnJlcG9ydChwYXRoLCBtZXNzYWdlKSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuZXJyb3JCdWZmZXIgPSBudWxsO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==

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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsaUJBQWMsd0JBQXdCLENBQUMsRUFBQTtBQUN2QyxpQkFBYyxnQkFBZ0IsQ0FBQyxFQUFBO0FBQy9CLGlCQUFjLGNBQWMsQ0FBQyxFQUFBO0FBQzdCLGlCQUFjLGVBQWUsQ0FBQyxFQUFBO0FBQzlCLGlCQUFjLGNBQWMsQ0FBQyxFQUFBIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0ICogZnJvbSBcIi4vcHJpbWl0aXZlLXR5cGUtcnVsZXNcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vb2JqZWN0LXJ1bGVzXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL2hhc2gtcnVsZXNcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vYXJyYXktcnVsZXNcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vcnVsZXMtYmFzZVwiO1xyXG4iXX0=

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

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
	    StringRules.prototype.clone = function () {
	        return new StringRules();
	    };
	    /**
	     * Checks if value has string type. Undefined value is passed as correct.
	     * This rule is applied automatically, don't add call this method manually.
	     */
	    StringRules.prototype.isString = function (options) {
	        options = rules_base_1.ensureRuleOptions(options, {
	            errorMessage: "Value must be a string.",
	            stopOnFailure: true
	        });
	        return this.checkAndConvert(function (done, value) {
	            if (value && typeof value !== "string") {
	                done(options.errorMessage);
	            }
	            else {
	                done();
	            }
	        }, null, true, options.stopOnFailure);
	    };
	    StringRules.prototype.parseString = function (options) {
	        options = rules_base_1.ensureRuleOptions(options, {
	            errorMessage: "Value must be a string.",
	            stopOnFailure: true
	        });
	        return this.parse(function (v) {
	            if (!v) {
	                return "";
	            }
	            return "" + v;
	        }, options);
	    };
	    StringRules.prototype.notEmpty = function (options) {
	        options = rules_base_1.ensureRuleOptions(options, {
	            errorMessage: "Value can not be empty.",
	            stopOnFailure: true
	        });
	        return this.checkAndConvert(function (done, parsedValue) {
	            if (!parsedValue || parsedValue.trim().length === 0) {
	                done(options.errorMessage);
	            }
	            else {
	                done();
	            }
	        }, null, false, options.stopOnFailure);
	    };
	    StringRules.prototype.maxLength = function (maxLength, options) {
	        if (maxLength <= 0) {
	            throw new Error("Max length must be greater than zero.");
	        }
	        options = rules_base_1.ensureRuleOptions(options, {
	            errorMessage: "Value is too long.",
	            stopOnFailure: false
	        });
	        return this.checkAndConvert(function (done, value) {
	            if (value && value.length > maxLength) {
	                done(options.errorMessage);
	            }
	            else {
	                done();
	            }
	        }, null, false, options.stopOnFailure);
	    };
	    StringRules.prototype.minLength = function (minLength, options) {
	        if (minLength <= 0) {
	            throw new Error("Min length must be greater than zero.");
	        }
	        options = rules_base_1.ensureRuleOptions(options, {
	            errorMessage: "Value is too short.",
	            stopOnFailure: false
	        });
	        return this.checkAndConvert(function (done, value) {
	            if (value && value.length < minLength) {
	                done(options.errorMessage);
	            }
	            else {
	                done();
	            }
	        }, null, false, options.stopOnFailure);
	    };
	    return StringRules;
	}(rules_base_1.SequentialRuleSet));
	exports.StringRules = StringRules;
	var NumberRules = (function (_super) {
	    __extends(NumberRules, _super);
	    function NumberRules() {
	        _super.apply(this, arguments);
	    }
	    NumberRules.prototype.clone = function () {
	        return new NumberRules();
	    };
	    /**
	     * Checks if value is number. Null or undefined values are passed as correct.
	     * This rule is applied automatically, don't call it.
	     */
	    NumberRules.prototype.isNumber = function (options) {
	        options = rules_base_1.ensureRuleOptions(options, {
	            errorMessage: "Value is not valid number.",
	            stopOnFailure: true
	        });
	        return this.checkAndConvert(function (done, value) {
	            if (value === null || value === undefined || value === "") {
	                done();
	                return;
	            }
	            if (typeof value !== "number") {
	                done(options.errorMessage);
	                return;
	            }
	            done();
	        }, null, true, options.stopOnFailure);
	    };
	    /**
	     * Parses number.
	     */
	    NumberRules.prototype.parseNumber = function (options) {
	        options = rules_base_1.ensureRuleOptions(options, {
	            errorMessage: "Value is not valid number.",
	            stopOnFailure: false
	        });
	        var failResult = new Object();
	        return this.checkAndConvert(function (done, convertedValue, obj, root) {
	            if (convertedValue == failResult) {
	                done(options.errorMessage);
	            }
	            else {
	                done();
	            }
	        }, function (inputValue, validatingObject, rootObject) {
	            if (inputValue === null || inputValue === undefined || inputValue === "") {
	                return inputValue;
	            }
	            var converted = parseFloat(inputValue);
	            if (converted === null || converted === undefined || isNaN(converted)) {
	                return failResult;
	            }
	            return converted;
	        }, false, options.stopOnFailure);
	    };
	    return NumberRules;
	}(rules_base_1.SequentialRuleSet));
	exports.NumberRules = NumberRules;
	function str(convert, options) {
	    if (convert === void 0) { convert = true; }
	    options = rules_base_1.ensureRuleOptions(options, {
	        errorMessage: "Value is not a string.",
	        stopOnFailure: true
	    });
	    if (convert) {
	        return new StringRules().parseString(options);
	    }
	    else {
	        return new StringRules().isString(options);
	    }
	}
	exports.str = str;
	function num(convert, options) {
	    if (convert === void 0) { convert = true; }
	    options = rules_base_1.ensureRuleOptions(options, {
	        errorMessage: "Value is not a valid number.",
	        stopOnFailure: true
	    });
	    if (convert) {
	        return new NumberRules().parseNumber(options);
	    }
	    else {
	        return new NumberRules().isNumber(options);
	    }
	}
	exports.num = num;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJpbWl0aXZlLXR5cGUtcnVsZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwcmltaXRpdmUtdHlwZS1ydWxlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFDQSwyQkFBcUQsY0FBYyxDQUFDLENBQUE7QUFFcEU7SUFBaUMsK0JBQXlCO0lBQTFEO1FBQWlDLDhCQUF5QjtJQWtIMUQsQ0FBQztJQWhIYSwyQkFBSyxHQUFmO1FBQ0ksTUFBTSxDQUFPLElBQUksV0FBVyxFQUFFLENBQUM7SUFDbkMsQ0FBQztJQUVEOzs7T0FHRztJQUNILDhCQUFRLEdBQVIsVUFBUyxPQUFxQjtRQUMxQixPQUFPLEdBQUcsOEJBQWlCLENBQUMsT0FBTyxFQUFFO1lBQ2pDLFlBQVksRUFBRSx5QkFBeUI7WUFDdkMsYUFBYSxFQUFFLElBQUk7U0FDdEIsQ0FBQyxDQUFDO1FBRUgsTUFBTSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQ3ZCLFVBQUMsSUFBSSxFQUFFLEtBQUs7WUFDUixFQUFFLENBQUMsQ0FBQyxLQUFLLElBQUksT0FBTyxLQUFLLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQztnQkFDckMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQztZQUMvQixDQUFDO1lBQ0QsSUFBSSxDQUFDLENBQUM7Z0JBQ0YsSUFBSSxFQUFFLENBQUM7WUFDWCxDQUFDO1FBQ0wsQ0FBQyxFQUNELElBQUksRUFDSixJQUFJLEVBQ0osT0FBTyxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQy9CLENBQUM7SUFFRCxpQ0FBVyxHQUFYLFVBQVksT0FBcUI7UUFDN0IsT0FBTyxHQUFHLDhCQUFpQixDQUFDLE9BQU8sRUFBRTtZQUNqQyxZQUFZLEVBQUUseUJBQXlCO1lBQ3ZDLGFBQWEsRUFBRSxJQUFJO1NBQ3RCLENBQUMsQ0FBQTtRQUVGLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUNiLFVBQUEsQ0FBQztZQUNHLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FB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Q0FBQyxJQUFJLFdBQVcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUMvQyxDQUFDO0FBQ0wsQ0FBQztBQVplLFdBQUcsTUFZbEIsQ0FBQTtBQUVELGFBQW9CLE9BQXVCLEVBQUUsT0FBcUI7SUFBOUMsdUJBQXVCLEdBQXZCLGNBQXVCO0lBQ3ZDLE9BQU8sR0FBRyw4QkFBaUIsQ0FBQyxPQUFPLEVBQUU7UUFDakMsWUFBWSxFQUFFLDhCQUE4QjtRQUM1QyxhQUFhLEVBQUUsSUFBSTtLQUN0QixDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1FBQ1YsTUFBTSxDQUFDLElBQUksV0FBVyxFQUFFLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ2xELENBQUM7SUFDRCxJQUFJLENBQUMsQ0FBQztRQUNGLE1BQU0sQ0FBQyxJQUFJLFdBQVcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUMvQyxDQUFDO0FBQ0wsQ0FBQztBQVplLFdBQUcsTUFZbEIsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJ1bGVPcHRpb25zIH0gZnJvbSBcIi4uL2RlZmluaXRpb25zXCI7XHJcbmltcG9ydCB7IFNlcXVlbnRpYWxSdWxlU2V0LCBlbnN1cmVSdWxlT3B0aW9ucyB9IGZyb20gXCIuL3J1bGVzLWJhc2VcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBTdHJpbmdSdWxlcyBleHRlbmRzIFNlcXVlbnRpYWxSdWxlU2V0PHN0cmluZz4ge1xyXG5cclxuICAgIHByb3RlY3RlZCBjbG9uZSgpOiB0aGlzIHtcclxuICAgICAgICByZXR1cm4gPHRoaXM+bmV3IFN0cmluZ1J1bGVzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIFxyXG4gICAgICogQ2hlY2tzIGlmIHZhbHVlIGhhcyBzdHJpbmcgdHlwZS4gVW5kZWZpbmVkIHZhbHVlIGlzIHBhc3NlZCBhcyBjb3JyZWN0LiBcclxuICAgICAqIFRoaXMgcnVsZSBpcyBhcHBsaWVkIGF1dG9tYXRpY2FsbHksIGRvbid0IGFkZCBjYWxsIHRoaXMgbWV0aG9kIG1hbnVhbGx5LlxyXG4gICAgICovXHJcbiAgICBpc1N0cmluZyhvcHRpb25zPzogUnVsZU9wdGlvbnMpOiB0aGlzIHtcclxuICAgICAgICBvcHRpb25zID0gZW5zdXJlUnVsZU9wdGlvbnMob3B0aW9ucywge1xyXG4gICAgICAgICAgICBlcnJvck1lc3NhZ2U6IFwiVmFsdWUgbXVzdCBiZSBhIHN0cmluZy5cIixcclxuICAgICAgICAgICAgc3RvcE9uRmFpbHVyZTogdHJ1ZVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5jaGVja0FuZENvbnZlcnQoXHJcbiAgICAgICAgICAgIChkb25lLCB2YWx1ZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlICYmIHR5cGVvZiB2YWx1ZSAhPT0gXCJzdHJpbmdcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIGRvbmUob3B0aW9ucy5lcnJvck1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZG9uZSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBudWxsLFxyXG4gICAgICAgICAgICB0cnVlLFxyXG4gICAgICAgICAgICBvcHRpb25zLnN0b3BPbkZhaWx1cmUpO1xyXG4gICAgfVxyXG5cclxuICAgIHBhcnNlU3RyaW5nKG9wdGlvbnM/OiBSdWxlT3B0aW9ucyk6IHRoaXMge1xyXG4gICAgICAgIG9wdGlvbnMgPSBlbnN1cmVSdWxlT3B0aW9ucyhvcHRpb25zLCB7XHJcbiAgICAgICAgICAgIGVycm9yTWVzc2FnZTogXCJWYWx1ZSBtdXN0IGJlIGEgc3RyaW5nLlwiLFxyXG4gICAgICAgICAgICBzdG9wT25GYWlsdXJlOiB0cnVlXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMucGFyc2UoXHJcbiAgICAgICAgICAgIHYgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKCF2KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiXCI7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiXCIgKyB2O1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBvcHRpb25zKTtcclxuICAgIH1cclxuXHJcbiAgICBub3RFbXB0eShvcHRpb25zPzogUnVsZU9wdGlvbnMpOiB0aGlzIHtcclxuXHJcbiAgICAgICAgb3B0aW9ucyA9IGVuc3VyZVJ1bGVPcHRpb25zKG9wdGlvbnMsIHtcclxuICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiBcIlZhbHVlIGNhbiBub3QgYmUgZW1wdHkuXCIsXHJcbiAgICAgICAgICAgIHN0b3BPbkZhaWx1cmU6IHRydWVcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY2hlY2tBbmRDb252ZXJ0KFxyXG4gICAgICAgICAgICAoZG9uZSwgcGFyc2VkVmFsdWUpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICghcGFyc2VkVmFsdWUgfHwgcGFyc2VkVmFsdWUudHJpbSgpLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGRvbmUob3B0aW9ucy5lcnJvck1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZG9uZSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBudWxsLFxyXG4gICAgICAgICAgICBmYWxzZSxcclxuICAgICAgICAgICAgb3B0aW9ucy5zdG9wT25GYWlsdXJlKTtcclxuICAgIH1cclxuXHJcbiAgICBtYXhMZW5ndGgobWF4TGVuZ3RoOiBudW1iZXIsIG9wdGlvbnM/OiBSdWxlT3B0aW9ucyk6IHRoaXMge1xyXG4gICAgICAgIGlmIChtYXhMZW5ndGggPD0gMCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJNYXggbGVuZ3RoIG11c3QgYmUgZ3JlYXRlciB0aGFuIHplcm8uXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBvcHRpb25zID0gZW5zdXJlUnVsZU9wdGlvbnMob3B0aW9ucywge1xyXG4gICAgICAgICAgICBlcnJvck1lc3NhZ2U6IFwiVmFsdWUgaXMgdG9vIGxvbmcuXCIsXHJcbiAgICAgICAgICAgIHN0b3BPbkZhaWx1cmU6IGZhbHNlXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLmNoZWNrQW5kQ29udmVydChcclxuICAgICAgICAgICAgKGRvbmUsIHZhbHVlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAodmFsdWUgJiYgdmFsdWUubGVuZ3RoID4gbWF4TGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZG9uZShvcHRpb25zLmVycm9yTWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBkb25lKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIG51bGwsXHJcbiAgICAgICAgICAgIGZhbHNlLFxyXG4gICAgICAgICAgICBvcHRpb25zLnN0b3BPbkZhaWx1cmUpO1xyXG4gICAgfVxyXG5cclxuICAgIG1pbkxlbmd0aChtaW5MZW5ndGg6IG51bWJlciwgb3B0aW9ucz86IFJ1bGVPcHRpb25zKTogdGhpcyB7XHJcbiAgICAgICAgaWYgKG1pbkxlbmd0aCA8PSAwKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIk1pbiBsZW5ndGggbXVzdCBiZSBncmVhdGVyIHRoYW4gemVyby5cIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBvcHRpb25zID0gZW5zdXJlUnVsZU9wdGlvbnMob3B0aW9ucywge1xyXG4gICAgICAgICAgICBlcnJvck1lc3NhZ2U6IFwiVmFsdWUgaXMgdG9vIHNob3J0LlwiLFxyXG4gICAgICAgICAgICBzdG9wT25GYWlsdXJlOiBmYWxzZVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5jaGVja0FuZENvbnZlcnQoXHJcbiAgICAgICAgICAgIChkb25lLCB2YWx1ZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlICYmIHZhbHVlLmxlbmd0aCA8IG1pbkxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGRvbmUob3B0aW9ucy5lcnJvck1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZG9uZSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBudWxsLFxyXG4gICAgICAgICAgICBmYWxzZSxcclxuICAgICAgICAgICAgb3B0aW9ucy5zdG9wT25GYWlsdXJlKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIE51bWJlclJ1bGVzIGV4dGVuZHMgU2VxdWVudGlhbFJ1bGVTZXQ8bnVtYmVyPiB7XHJcblxyXG4gICAgcHJvdGVjdGVkIGNsb25lKCk6IE51bWJlclJ1bGVzIHtcclxuICAgICAgICByZXR1cm4gbmV3IE51bWJlclJ1bGVzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIFxyXG4gICAgICogQ2hlY2tzIGlmIHZhbHVlIGlzIG51bWJlci4gTnVsbCBvciB1bmRlZmluZWQgdmFsdWVzIGFyZSBwYXNzZWQgYXMgY29ycmVjdC4gXHJcbiAgICAgKiBUaGlzIHJ1bGUgaXMgYXBwbGllZCBhdXRvbWF0aWNhbGx5LCBkb24ndCBjYWxsIGl0LiBcclxuICAgICAqL1xyXG4gICAgaXNOdW1iZXIob3B0aW9ucz86IFJ1bGVPcHRpb25zKTogdGhpcyB7XHJcbiAgICAgICAgb3B0aW9ucyA9IGVuc3VyZVJ1bGVPcHRpb25zKG9wdGlvbnMsIHtcclxuICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiBcIlZhbHVlIGlzIG5vdCB2YWxpZCBudW1iZXIuXCIsXHJcbiAgICAgICAgICAgIHN0b3BPbkZhaWx1cmU6IHRydWVcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY2hlY2tBbmRDb252ZXJ0KFxyXG4gICAgICAgICAgICAoZG9uZSwgdmFsdWUpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICh2YWx1ZSA9PT0gbnVsbCB8fCB2YWx1ZSA9PT0gdW5kZWZpbmVkIHx8IDxhbnk+dmFsdWUgPT09IFwiXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICBkb25lKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdmFsdWUgIT09IFwibnVtYmVyXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICBkb25lKG9wdGlvbnMuZXJyb3JNZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgZG9uZSgpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBudWxsLFxyXG4gICAgICAgICAgICB0cnVlLFxyXG4gICAgICAgICAgICBvcHRpb25zLnN0b3BPbkZhaWx1cmUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUGFyc2VzIG51bWJlci5cclxuICAgICAqL1xyXG4gICAgcGFyc2VOdW1iZXIob3B0aW9ucz86IFJ1bGVPcHRpb25zKTogdGhpcyB7XHJcbiAgICAgICAgb3B0aW9ucyA9IGVuc3VyZVJ1bGVPcHRpb25zKG9wdGlvbnMsIHtcclxuICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiBcIlZhbHVlIGlzIG5vdCB2YWxpZCBudW1iZXIuXCIsXHJcbiAgICAgICAgICAgIHN0b3BPbkZhaWx1cmU6IGZhbHNlXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGNvbnN0IGZhaWxSZXN1bHQgPSBuZXcgT2JqZWN0KCk7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLmNoZWNrQW5kQ29udmVydChcclxuICAgICAgICAgICAgKGRvbmUsIGNvbnZlcnRlZFZhbHVlLCBvYmosIHJvb3QpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChjb252ZXJ0ZWRWYWx1ZSA9PSBmYWlsUmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZG9uZShvcHRpb25zLmVycm9yTWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBkb25lKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIChpbnB1dFZhbHVlLCB2YWxpZGF0aW5nT2JqZWN0LCByb290T2JqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoaW5wdXRWYWx1ZSA9PT0gbnVsbCB8fCBpbnB1dFZhbHVlID09PSB1bmRlZmluZWQgfHwgaW5wdXRWYWx1ZSA9PT0gXCJcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBpbnB1dFZhbHVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IGNvbnZlcnRlZCA9IHBhcnNlRmxvYXQoaW5wdXRWYWx1ZSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoY29udmVydGVkID09PSBudWxsIHx8IGNvbnZlcnRlZCA9PT0gdW5kZWZpbmVkIHx8IGlzTmFOKGNvbnZlcnRlZCkpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gPG51bWJlcj48YW55PmZhaWxSZXN1bHQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGNvbnZlcnRlZDtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZmFsc2UsXHJcbiAgICAgICAgICAgIG9wdGlvbnMuc3RvcE9uRmFpbHVyZSk7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc3RyKGNvbnZlcnQ6IGJvb2xlYW4gPSB0cnVlLCBvcHRpb25zPzogUnVsZU9wdGlvbnMpOiBTdHJpbmdSdWxlcyB7XHJcbiAgICBvcHRpb25zID0gZW5zdXJlUnVsZU9wdGlvbnMob3B0aW9ucywge1xyXG4gICAgICAgIGVycm9yTWVzc2FnZTogXCJWYWx1ZSBpcyBub3QgYSBzdHJpbmcuXCIsXHJcbiAgICAgICAgc3RvcE9uRmFpbHVyZTogdHJ1ZVxyXG4gICAgfSk7XHJcblxyXG4gICAgaWYgKGNvbnZlcnQpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFN0cmluZ1J1bGVzKCkucGFyc2VTdHJpbmcob3B0aW9ucyk7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICByZXR1cm4gbmV3IFN0cmluZ1J1bGVzKCkuaXNTdHJpbmcob3B0aW9ucyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBudW0oY29udmVydDogYm9vbGVhbiA9IHRydWUsIG9wdGlvbnM/OiBSdWxlT3B0aW9ucyk6IE51bWJlclJ1bGVzIHtcclxuICAgIG9wdGlvbnMgPSBlbnN1cmVSdWxlT3B0aW9ucyhvcHRpb25zLCB7XHJcbiAgICAgICAgZXJyb3JNZXNzYWdlOiBcIlZhbHVlIGlzIG5vdCBhIHZhbGlkIG51bWJlci5cIixcclxuICAgICAgICBzdG9wT25GYWlsdXJlOiB0cnVlXHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAoY29udmVydCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgTnVtYmVyUnVsZXMoKS5wYXJzZU51bWJlcihvcHRpb25zKTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIHJldHVybiBuZXcgTnVtYmVyUnVsZXMoKS5pc051bWJlcihvcHRpb25zKTtcclxuICAgIH1cclxufVxyXG4iXX0=

/***/ },
/* 15 */
/***/ function(module, exports) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	function ensureRuleOptions(options, defaultRuleOptions) {
	    options = options || defaultRuleOptions;
	    if (!options) {
	        throw new Error("Options is required");
	    }
	    if (defaultRuleOptions.stopOnFailure === null || defaultRuleOptions.stopOnFailure === undefined) {
	        defaultRuleOptions.stopOnFailure = false;
	    }
	    if (options.stopOnFailure === null || options.stopOnFailure === undefined) {
	        options.stopOnFailure = defaultRuleOptions.stopOnFailure;
	    }
	    var result = {
	        errorMessage: options.errorMessage || defaultRuleOptions.errorMessage,
	        stopOnFailure: options.stopOnFailure
	    };
	    if (!result.errorMessage) {
	        throw new Error("Error message is required.");
	    }
	    return result;
	}
	exports.ensureRuleOptions = ensureRuleOptions;
	/**
	 * Combines rules array into single rule which runs all rules.
	 * Parsing stage is run for all rules one by one using previous rule result as input for next rule.
	 * Validation stage is run for all rules sequentially but stops if rule with stopOnFailure = true is failed.
	 */
	function combineRules() {
	    var rules = [];
	    for (var _i = 0; _i < arguments.length; _i++) {
	        rules[_i - 0] = arguments[_i];
	    }
	    rules = rules || [];
	    return {
	        stopOnFailure: false,
	        /** Runs parsing on all rules. */
	        runParse: function (inputValue, validatingObject, rootObject) {
	            return rules.reduce(function (currentValue, rule) { return rule.runParse(currentValue, validatingObject, rootObject); }, inputValue);
	        },
	        /** Runs all chained rules. */
	        runValidate: function (context, doneCallback, parsedValue, validatingObject, rootObject) {
	            if (!context) {
	                throw new Error("context is required.");
	            }
	            if (!doneCallback) {
	                throw new Error("done callback is required.");
	            }
	            var allRulesValid = true;
	            var rulesToRun = rules.slice();
	            var runRule = function () {
	                var rule = rulesToRun.shift();
	                if (rule) {
	                    rule.runValidate(context, function (success) {
	                        if (!success && rule.stopOnFailure) {
	                            doneCallback(false);
	                            return;
	                        }
	                        allRulesValid = allRulesValid && success;
	                        // Runs next rule recursively
	                        runRule();
	                    }, parsedValue, validatingObject, rootObject);
	                }
	                else {
	                    doneCallback(allRulesValid);
	                }
	            };
	            runRule();
	        }
	    };
	}
	exports.combineRules = combineRules;
	/**
	 * Base class which can contain a set of rules which runs sequentially,
	 * accumulates errors.
	 * Each next rule validates conversion result of previous rule if successful or last successful value or input.
	 */
	var SequentialRuleSet = (function () {
	    function SequentialRuleSet() {
	        this.rules = [];
	        this.stopOnFailure = false;
	    }
	    /** Runs parsing on all rules. */
	    SequentialRuleSet.prototype.runParse = function (inputValue, validatingObject, rootObject) {
	        return combineRules.apply(void 0, this.rules).runParse(inputValue, validatingObject, rootObject);
	    };
	    /** Runs all chained rules. */
	    SequentialRuleSet.prototype.runValidate = function (context, doneCallback, parsedValue, validatingObject, rootObject) {
	        if (!context) {
	            throw new Error("context is required.");
	        }
	        if (!doneCallback) {
	            throw new Error("done callback is required.");
	        }
	        combineRules.apply(void 0, this.rules).runValidate(context, doneCallback, parsedValue, validatingObject, rootObject);
	    };
	    /**
	     * Adds a rule which uses custom functions for validation and converting.
	     * If parsing function is not provided value is passed to validation function without conversion.
	     */
	    SequentialRuleSet.prototype.checkAndConvert = function (validationFn, parseFn, putRuleFirst, stopOnFailure) {
	        if (putRuleFirst === void 0) { putRuleFirst = false; }
	        if (stopOnFailure === void 0) { stopOnFailure = false; }
	        if (!validationFn) {
	            throw new Error("Validation function is required.");
	        }
	        parseFn = (parseFn || (function (input) { return input; }));
	        return this.withRule({
	            stopOnFailure: stopOnFailure,
	            runParse: parseFn,
	            runValidate: function (context, done, inputValue, validatingObject, rootObject) {
	                validationFn(function (errorMessage) {
	                    if (errorMessage) {
	                        context.reportError(errorMessage);
	                        done(false);
	                    }
	                    else {
	                        done(true);
	                    }
	                }, inputValue, validatingObject, rootObject);
	            }
	        }, putRuleFirst);
	    };
	    /** Fails if input value is null or undefined. */
	    SequentialRuleSet.prototype.required = function (options) {
	        options = ensureRuleOptions(options, { errorMessage: "Value is required.", stopOnFailure: true });
	        return this.checkAndConvert(function (done, input) {
	            if (input === null || input === undefined) {
	                done(options.errorMessage);
	            }
	            else {
	                done();
	            }
	        }, null, true, options.stopOnFailure);
	    };
	    /**
	     * Parses input value.
	     * Parse rules runs first.
	     * If transformation function returns null or undefined or throws an error fails with specified error message.
	     */
	    SequentialRuleSet.prototype.parse = function (convertFn, options) {
	        if (!convertFn) {
	            throw new Error("Transformation function is required.");
	        }
	        options = ensureRuleOptions(options, {
	            errorMessage: "Conversion failed.",
	            stopOnFailure: true
	        });
	        var failResult = new Object();
	        return this.checkAndConvert(function (done, convertedValue, obj, root) {
	            if (convertedValue == failResult) {
	                done(options.errorMessage);
	            }
	            else {
	                done();
	            }
	        }, function (inputValue, validatingObject, rootObject) {
	            try {
	                var converted = convertFn(inputValue, validatingObject, rootObject);
	                if (converted === null || converted === undefined) {
	                    return failResult;
	                }
	                return converted;
	            }
	            catch (e) {
	                return failResult;
	            }
	        }, false, options.stopOnFailure);
	    };
	    SequentialRuleSet.prototype.must = function (predicate, options) {
	        if (!predicate) {
	            throw new Error("Predicate is required.");
	        }
	        options = ensureRuleOptions(options, {
	            errorMessage: "Value is not valid.",
	            stopOnFailure: false
	        });
	        return this.checkAndConvert(function (done, input, obj, root) {
	            if (!predicate(input, obj, root)) {
	                done(options.errorMessage);
	            }
	            else {
	                done();
	            }
	        }, null, false, options.stopOnFailure);
	    };
	    SequentialRuleSet.prototype.withRule = function (rule, putRuleFirst) {
	        if (putRuleFirst === void 0) { putRuleFirst = false; }
	        if (!rule) {
	            throw new Error("rule is required");
	        }
	        var copy = this.clone();
	        copy.stopOnFailure = this.stopOnFailure;
	        if (putRuleFirst) {
	            copy.rules = [rule].concat(this.rules);
	        }
	        else {
	            copy.rules = this.rules.concat([rule]);
	        }
	        return copy;
	    };
	    return SequentialRuleSet;
	}());
	exports.SequentialRuleSet = SequentialRuleSet;
	/**
	 * Encapsulates rule enclosed in set of rules run before and after the rule.
	 *
	 * Parsing only run for main rule. All other rules uses main rule parsing result as input.
	 *
	 * The main rule is run only if all rules run before has been run successfuly.
	 * The rules to run after would be only run if main rule run successfuly.
	 *
	 * Enclosing rule would be run successfuly only if all rules (before, main and after) has run successfuly.
	 */
	var EnclosingValidationRuleBase = (function () {
	    function EnclosingValidationRuleBase(rule) {
	        this.rule = rule;
	        this.rulesBefore = [];
	        this.rulesAfter = [];
	        this.stopOnFailure = false;
	        if (!rule) {
	            throw new Error("Validation rule is required.");
	        }
	    }
	    EnclosingValidationRuleBase.prototype.runParse = function (inputValue, validatingObject, rootObject) {
	        return combineRules(this.rule).runParse(inputValue, validatingObject, rootObject);
	    };
	    EnclosingValidationRuleBase.prototype.runValidate = function (context, doneCallback, obj, validatingObject, rootObject) {
	        var all = (this.rulesBefore || []).concat([
	            this.rule
	        ], (this.rulesAfter || []));
	        combineRules.apply(void 0, all).runValidate(context, doneCallback, obj, validatingObject, rootObject);
	    };
	    EnclosingValidationRuleBase.prototype.stopOnFail = function (stopOnFailure) {
	        if (stopOnFailure === void 0) { stopOnFailure = true; }
	        var copy = this.clone();
	        copy.stopOnFailure = stopOnFailure;
	        return copy;
	    };
	    /** Disables null object. */
	    EnclosingValidationRuleBase.prototype.required = function (options) {
	        options = ensureRuleOptions(options, {
	            errorMessage: "Object is required.",
	            stopOnFailure: true
	        });
	        var result = this.copy();
	        result.rulesBefore = [any(function (v) { return v !== null && v !== undefined; }, options)].concat(result.rulesBefore);
	        return result;
	    };
	    /** Adds a rule which is run before validation. */
	    EnclosingValidationRuleBase.prototype.runBefore = function (rule) {
	        if (!rule) {
	            throw new Error("rule is required");
	        }
	        var result = this.copy();
	        result.rulesBefore = this.rulesBefore.concat([rule]);
	        return result;
	    };
	    /** Adds a rule which is run after validation. */
	    EnclosingValidationRuleBase.prototype.runAfter = function (rule) {
	        if (!rule) {
	            throw new Error("rule is required");
	        }
	        var result = this.copy();
	        result.rulesAfter = this.rulesAfter.concat([rule]);
	        return result;
	    };
	    EnclosingValidationRuleBase.prototype.before = function (predicate, options) {
	        if (!predicate) {
	            throw new Error("Predicate is required.");
	        }
	        return this.runBefore(any(predicate, options));
	    };
	    EnclosingValidationRuleBase.prototype.after = function (predicate, options) {
	        if (!predicate) {
	            throw new Error("Predicate is required.");
	        }
	        return this.runAfter(any(predicate, options));
	    };
	    EnclosingValidationRuleBase.prototype.withMainRule = function (rule) {
	        if (!rule) {
	            throw new Error("Rule is required.");
	        }
	        var result = this.copy();
	        result.rule = rule;
	        return result;
	    };
	    EnclosingValidationRuleBase.prototype.copy = function () {
	        var result = this.clone();
	        result.rulesBefore = this.rulesBefore.slice();
	        result.rulesAfter = this.rulesAfter.slice();
	        result.stopOnFailure = this.stopOnFailure;
	        return result;
	    };
	    return EnclosingValidationRuleBase;
	}());
	exports.EnclosingValidationRuleBase = EnclosingValidationRuleBase;
	var EmptyRule = (function () {
	    function EmptyRule() {
	        this.stopOnFailure = false;
	    }
	    EmptyRule.prototype.runParse = function (inputValue, validatingObject, rootObject) {
	        return inputValue;
	    };
	    /** Runs all chained rules. */
	    EmptyRule.prototype.runValidate = function (context, doneCallback, parsedValue, validatingObject, rootObject) {
	        doneCallback(true);
	    };
	    return EmptyRule;
	}());
	exports.EmptyRule = EmptyRule;
	var AnyRules = (function (_super) {
	    __extends(AnyRules, _super);
	    function AnyRules(stopOnFailure) {
	        _super.call(this);
	        this.stopOnFailure = stopOnFailure;
	    }
	    AnyRules.prototype.clone = function () {
	        return new AnyRules(this.stopOnFailure);
	    };
	    return AnyRules;
	}(SequentialRuleSet));
	exports.AnyRules = AnyRules;
	/** Validates any value using given predicate. */
	function any(predicate, options) {
	    options = ensureRuleOptions(options, {
	        stopOnFailure: false
	    });
	    predicate = predicate || (function (v) { return true; });
	    return new AnyRules(options.stopOnFailure).must(predicate, options);
	}
	exports.any = any;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicnVsZXMtYmFzZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInJ1bGVzLWJhc2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBRUEsMkJBQWtDLE9BQW9CLEVBQUUsa0JBQStCO0lBQ25GLE9BQU8sR0FBRyxPQUFPLElBQUksa0JBQWtCLENBQUM7SUFDeEMsRUFBRSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1FBQ1gsTUFBTSxJQUFJLEtBQUssQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO0lBQzNDLENBQUM7SUFFRCxFQUFFLENBQUMsQ0FBQyxrQkFBa0IsQ0FBQyxhQUFhLEtBQUssSUFBSSxJQUFJLGtCQUFrQixDQUFDLGFBQWEsS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDO1FBQzlGLGtCQUFrQixDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7SUFDN0MsQ0FBQztJQUVELEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxhQUFhLEtBQUssSUFBSSxJQUFJLE9BQU8sQ0FBQyxhQUFhLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQztRQUN4RSxPQUFPLENBQUMsYUFBYSxHQUFHLGtCQUFrQixDQUFDLGFBQWEsQ0FBQztJQUM3RCxDQUFDO0lBRUQsSUFBTSxNQUFNLEdBQWdCO1FBQ3hCLFlBQVksRUFBRSxPQUFPLENBQUMsWUFBWSxJQUFJLGtCQUFrQixDQUFDLFlBQVk7UUFDckUsYUFBYSxFQUFFLE9BQU8sQ0FBQyxhQUFhO0tBQ3ZDLENBQUM7SUFFRixFQUFFLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO1FBQ3ZCLE1BQU0sSUFBSSxLQUFLLENBQUMsNEJBQTRCLENBQUMsQ0FBQztJQUNsRCxDQUFDO0lBRUQsTUFBTSxDQUFDLE1BQU0sQ0FBQztBQUNsQixDQUFDO0FBeEJlLHlCQUFpQixvQkF3QmhDLENBQUE7QUFFRDs7OztHQUlHO0FBQ0g7SUFBZ0MsZUFBNkI7U0FBN0IsV0FBNkIsQ0FB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RSxnQkFBc0IsRUFBRSxVQUFnQjtRQUM5RCxNQUFNLENBQUksVUFBVSxDQUFDO0lBQ3pCLENBQUM7SUFFRCw4QkFBOEI7SUFDOUIsK0JBQVcsR0FBWCxVQUFZLE9BQTJCLEVBQ25DLFlBQXdDLEVBQ3hDLFdBQWdCLEVBQ2hCLGdCQUFzQixFQUN0QixVQUFnQjtRQUNoQixZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDdkIsQ0FBQztJQUNMLGdCQUFDO0FBQUQsQ0FBQyxBQWhCRCxJQWdCQztBQWhCWSxpQkFBUyxZQWdCckIsQ0FBQTtBQUVEO0lBQWlDLDRCQUFvQjtJQUNqRCxrQkFBWSxhQUFzQjtRQUM5QixpQkFBTyxDQUFDO1FBQ1IsSUFBSSxDQUFDLGFBQWEsR0FBRyxhQUFhLENBQUM7SUFDdkMsQ0FBQztJQUVTLHdCQUFLLEdBQWY7UUFDSSxNQUFNLENBQUMsSUFBSSxRQUFRLENBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFDTCxlQUFDO0FBQUQsQ0FBQyxBQVRELENBQWlDLGlCQUFpQixHQVNqRDtBQVRZLGdCQUFRLFdBU3BCLENBQUE7QUFFRCxpREFBaUQ7QUFDakQsYUFBdUIsU0FBaUUsRUFBRSxPQUFxQjtJQUMzRyxPQUFPLEdBQUcsaUJBQWlCLENBQUMsT0FBTyxFQUFFO1FBQ2pDLGFBQWEsRUFBRSxLQUFLO0tBQ3ZCLENBQUMsQ0FBQztJQUVILFNBQVMsR0FBRyxTQUFTLElBQUksQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLElBQUksRUFBSixDQUFJLENBQUMsQ0FBQztJQUNyQyxNQUFNLENBQUMsSUFBSSxRQUFRLENBQUksT0FBTyxDQUFDLGFBQWEsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsT0FBTyxDQUFDLENBQUM7QUFDM0UsQ0FBQztBQVBlLFdBQUcsTUFPbEIsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFZhbGlkYXRpb25SdWxlLCBJVmFsaWRhdGlvbkNvbnRleHQsIFJ1bGVPcHRpb25zIH0gZnJvbSBcIi4uL2RlZmluaXRpb25zXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZW5zdXJlUnVsZU9wdGlvbnMob3B0aW9uczogUnVsZU9wdGlvbnMsIGRlZmF1bHRSdWxlT3B0aW9uczogUnVsZU9wdGlvbnMpOiBSdWxlT3B0aW9ucyB7XHJcbiAgICBvcHRpb25zID0gb3B0aW9ucyB8fCBkZWZhdWx0UnVsZU9wdGlvbnM7XHJcbiAgICBpZiAoIW9wdGlvbnMpIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJPcHRpb25zIGlzIHJlcXVpcmVkXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChkZWZhdWx0UnVsZU9wdGlvbnMuc3RvcE9uRmFpbHVyZSA9PT0gbnVsbCB8fCBkZWZhdWx0UnVsZU9wdGlvbnMuc3RvcE9uRmFpbHVyZSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgZGVmYXVsdFJ1bGVPcHRpb25zLnN0b3BPbkZhaWx1cmUgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAob3B0aW9ucy5zdG9wT25GYWlsdXJlID09PSBudWxsIHx8IG9wdGlvbnMuc3RvcE9uRmFpbHVyZSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgb3B0aW9ucy5zdG9wT25GYWlsdXJlID0gZGVmYXVsdFJ1bGVPcHRpb25zLnN0b3BPbkZhaWx1cmU7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgcmVzdWx0OiBSdWxlT3B0aW9ucyA9IHtcclxuICAgICAgICBlcnJvck1lc3NhZ2U6IG9wdGlvbnMuZXJyb3JNZXNzYWdlIHx8IGRlZmF1bHRSdWxlT3B0aW9ucy5lcnJvck1lc3NhZ2UsXHJcbiAgICAgICAgc3RvcE9uRmFpbHVyZTogb3B0aW9ucy5zdG9wT25GYWlsdXJlXHJcbiAgICB9O1xyXG5cclxuICAgIGlmICghcmVzdWx0LmVycm9yTWVzc2FnZSkge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkVycm9yIG1lc3NhZ2UgaXMgcmVxdWlyZWQuXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbi8qKiBcclxuICogQ29tYmluZXMgcnVsZXMgYXJyYXkgaW50byBzaW5nbGUgcnVsZSB3aGljaCBydW5zIGFsbCBydWxlcy5cclxuICogUGFyc2luZyBzdGFnZSBpcyBydW4gZm9yIGFsbCBydWxlcyBvbmUgYnkgb25lIHVzaW5nIHByZXZpb3VzIHJ1bGUgcmVzdWx0IGFzIGlucHV0IGZvciBuZXh0IHJ1bGUuXHJcbiAqIFZhbGlkYXRpb24gc3RhZ2UgaXMgcnVuIGZvciBhbGwgcnVsZXMgc2VxdWVudGlhbGx5IGJ1dCBzdG9wcyBpZiBydWxlIHdpdGggc3RvcE9uRmFpbHVyZSA9IHRydWUgaXMgZmFpbGVkLiAgXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gY29tYmluZVJ1bGVzPFQ+KC4uLnJ1bGVzOiBWYWxpZGF0aW9uUnVsZTxUPltdKTogVmFsaWRhdGlvblJ1bGU8VD4ge1xyXG4gICAgcnVsZXMgPSBydWxlcyB8fCBbXTtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHN0b3BPbkZhaWx1cmU6IGZhbHNlLFxyXG4gICAgICAgIC8qKiBSdW5zIHBhcnNpbmcgb24gYWxsIHJ1bGVzLiAqL1xyXG4gICAgICAgIHJ1blBhcnNlKGlucHV0VmFsdWU6IGFueSwgdmFsaWRhdGluZ09iamVjdD86IGFueSwgcm9vdE9iamVjdD86IGFueSk6IFQge1xyXG4gICAgICAgICAgICByZXR1cm4gcnVsZXMucmVkdWNlKChjdXJyZW50VmFsdWUsIHJ1bGUpID0+IHJ1bGUucnVuUGFyc2UoY3VycmVudFZhbHVlLCB2YWxpZGF0aW5nT2JqZWN0LCByb290T2JqZWN0KSwgaW5wdXRWYWx1ZSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICAvKiogUnVucyBhbGwgY2hhaW5lZCBydWxlcy4gKi9cclxuICAgICAgICBydW5WYWxpZGF0ZShjb250ZXh0OiBJVmFsaWRhdGlvbkNvbnRleHQsXHJcbiAgICAgICAgICAgIGRvbmVDYWxsYmFjazogKHN1Y2Nlc3M6IGJvb2xlYW4pID0+IHZvaWQsXHJcbiAgICAgICAgICAgIHBhcnNlZFZhbHVlOiBhbnksXHJcbiAgICAgICAgICAgIHZhbGlkYXRpbmdPYmplY3Q/OiBhbnksXHJcbiAgICAgICAgICAgIHJvb3RPYmplY3Q/OiBhbnkpOiB2b2lkIHtcclxuICAgICAgICAgICAgaWYgKCFjb250ZXh0KSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJjb250ZXh0IGlzIHJlcXVpcmVkLlwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoIWRvbmVDYWxsYmFjaykge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiZG9uZSBjYWxsYmFjayBpcyByZXF1aXJlZC5cIik7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGxldCBhbGxSdWxlc1ZhbGlkID0gdHJ1ZTtcclxuICAgICAgICAgICAgY29uc3QgcnVsZXNUb1J1biA9IFsuLi5ydWxlc107XHJcblxyXG4gICAgICAgICAgICBjb25zdCBydW5SdWxlID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcnVsZSA9IHJ1bGVzVG9SdW4uc2hpZnQoKTtcclxuICAgICAgICAgICAgICAgIGlmIChydWxlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcnVsZS5ydW5WYWxpZGF0ZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGV4dCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgKHN1Y2Nlc3MpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghc3VjY2VzcyAmJiBydWxlLnN0b3BPbkZhaWx1cmUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb25lQ2FsbGJhY2soZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGxSdWxlc1ZhbGlkID0gYWxsUnVsZXNWYWxpZCAmJiBzdWNjZXNzO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFJ1bnMgbmV4dCBydWxlIHJlY3Vyc2l2ZWx5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBydW5SdWxlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcnNlZFZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW5nT2JqZWN0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByb290T2JqZWN0KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGRvbmVDYWxsYmFjayhhbGxSdWxlc1ZhbGlkKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIHJ1blJ1bGUoKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59XHJcblxyXG4vKipcclxuICogQmFzZSBjbGFzcyB3aGljaCBjYW4gY29udGFpbiBhIHNldCBvZiBydWxlcyB3aGljaCBydW5zIHNlcXVlbnRpYWxseSwgXHJcbiAqIGFjY3VtdWxhdGVzIGVycm9ycy4gXHJcbiAqIEVhY2ggbmV4dCBydWxlIHZhbGlkYXRlcyBjb252ZXJzaW9uIHJlc3VsdCBvZiBwcmV2aW91cyBydWxlIGlmIHN1Y2Nlc3NmdWwgb3IgbGFzdCBzdWNjZXNzZnVsIHZhbHVlIG9yIGlucHV0LiBcclxuICovXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBTZXF1ZW50aWFsUnVsZVNldDxUPiBpbXBsZW1lbnRzIFZhbGlkYXRpb25SdWxlPFQ+IHtcclxuICAgIHByaXZhdGUgcnVsZXM6IFZhbGlkYXRpb25SdWxlPFQ+W10gPSBbXTtcclxuXHJcbiAgICBzdG9wT25GYWlsdXJlID0gZmFsc2U7XHJcblxyXG4gICAgLyoqIFJ1bnMgcGFyc2luZyBvbiBhbGwgcnVsZXMuICovXHJcbiAgICBydW5QYXJzZShpbnB1dFZhbHVlOiBhbnksIHZhbGlkYXRpbmdPYmplY3Q/OiBhbnksIHJvb3RPYmplY3Q/OiBhbnkpOiBUIHtcclxuICAgICAgICByZXR1cm4gY29tYmluZVJ1bGVzKC4uLnRoaXMucnVsZXMpLnJ1blBhcnNlKGlucHV0VmFsdWUsIHZhbGlkYXRpbmdPYmplY3QsIHJvb3RPYmplY3QpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKiBSdW5zIGFsbCBjaGFpbmVkIHJ1bGVzLiAqL1xyXG4gICAgcnVuVmFsaWRhdGUoXHJcbiAgICAgICAgY29udGV4dDogSVZhbGlkYXRpb25Db250ZXh0LFxyXG4gICAgICAgIGRvbmVDYWxsYmFjazogKHN1Y2Nlc3M6IGJvb2xlYW4pID0+IHZvaWQsXHJcbiAgICAgICAgcGFyc2VkVmFsdWU6IGFueSxcclxuICAgICAgICB2YWxpZGF0aW5nT2JqZWN0PzogYW55LFxyXG4gICAgICAgIHJvb3RPYmplY3Q/OiBhbnkpOiB2b2lkIHtcclxuXHJcbiAgICAgICAgaWYgKCFjb250ZXh0KSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcImNvbnRleHQgaXMgcmVxdWlyZWQuXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIWRvbmVDYWxsYmFjaykge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJkb25lIGNhbGxiYWNrIGlzIHJlcXVpcmVkLlwiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbWJpbmVSdWxlcyguLi50aGlzLnJ1bGVzKS5ydW5WYWxpZGF0ZShcclxuICAgICAgICAgICAgY29udGV4dCxcclxuICAgICAgICAgICAgZG9uZUNhbGxiYWNrLFxyXG4gICAgICAgICAgICBwYXJzZWRWYWx1ZSxcclxuICAgICAgICAgICAgdmFsaWRhdGluZ09iamVjdCxcclxuICAgICAgICAgICAgcm9vdE9iamVjdFxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIFxyXG4gICAgICogQWRkcyBhIHJ1bGUgd2hpY2ggdXNlcyBjdXN0b20gZnVuY3Rpb25zIGZvciB2YWxpZGF0aW9uIGFuZCBjb252ZXJ0aW5nLiBcclxuICAgICAqIElmIHBhcnNpbmcgZnVuY3Rpb24gaXMgbm90IHByb3ZpZGVkIHZhbHVlIGlzIHBhc3NlZCB0byB2YWxpZGF0aW9uIGZ1bmN0aW9uIHdpdGhvdXQgY29udmVyc2lvbi4gXHJcbiAgICAgKi9cclxuICAgIGNoZWNrQW5kQ29udmVydChcclxuICAgICAgICB2YWxpZGF0aW9uRm46IChkb25lQ2FsbGJhY2s6IChlcnJvck1lc3NhZ2U/OiBzdHJpbmcpID0+IHZvaWQsIHBhcnNlZFZhbHVlOiBULCB2YWxpZGF0aW5nT2JqZWN0PzogYW55LCByb290T2JqZWN0PzogYW55KSA9PiB2b2lkLFxyXG4gICAgICAgIHBhcnNlRm4/OiAoaW5wdXRWYWx1ZTogYW55LCB2YWxpZGF0aW5nT2JqZWN0PzogYW55LCByb290T2JqZWN0PzogYW55KSA9PiBULFxyXG4gICAgICAgIHB1dFJ1bGVGaXJzdDogYm9vbGVhbiA9IGZhbHNlLFxyXG4gICAgICAgIHN0b3BPbkZhaWx1cmUgPSBmYWxzZSkge1xyXG5cclxuICAgICAgICBpZiAoIXZhbGlkYXRpb25Gbikge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJWYWxpZGF0aW9uIGZ1bmN0aW9uIGlzIHJlcXVpcmVkLlwiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHBhcnNlRm4gPSAocGFyc2VGbiB8fCAoaW5wdXQgPT4gaW5wdXQpKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMud2l0aFJ1bGUoXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHN0b3BPbkZhaWx1cmU6IHN0b3BPbkZhaWx1cmUsXHJcblxyXG4gICAgICAgICAgICAgICAgcnVuUGFyc2U6IHBhcnNlRm4sXHJcblxyXG4gICAgICAgICAgICAgICAgcnVuVmFsaWRhdGUoXHJcbiAgICAgICAgICAgICAgICAgICAgY29udGV4dDogSVZhbGlkYXRpb25Db250ZXh0LFxyXG4gICAgICAgICAgICAgICAgICAgIGRvbmU6IChzdWNjZXNzOiBib29sZWFuKSA9PiB2b2lkLFxyXG4gICAgICAgICAgICAgICAgICAgIGlucHV0VmFsdWU6IGFueSxcclxuICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW5nT2JqZWN0PzogYW55LFxyXG4gICAgICAgICAgICAgICAgICAgIHJvb3RPYmplY3Q/OiBhbnkpOiB2b2lkIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvbkZuKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAoZXJyb3JNZXNzYWdlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXJyb3JNZXNzYWdlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGV4dC5yZXBvcnRFcnJvcihlcnJvck1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvbmUoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9uZSh0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRWYWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGluZ09iamVjdCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcm9vdE9iamVjdCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHB1dFJ1bGVGaXJzdCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIEZhaWxzIGlmIGlucHV0IHZhbHVlIGlzIG51bGwgb3IgdW5kZWZpbmVkLiAqL1xyXG4gICAgcmVxdWlyZWQob3B0aW9ucz86IFJ1bGVPcHRpb25zKTogdGhpcyB7XHJcbiAgICAgICAgb3B0aW9ucyA9IGVuc3VyZVJ1bGVPcHRpb25zKG9wdGlvbnMsIHsgZXJyb3JNZXNzYWdlOiBcIlZhbHVlIGlzIHJlcXVpcmVkLlwiLCBzdG9wT25GYWlsdXJlOiB0cnVlIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5jaGVja0FuZENvbnZlcnQoXHJcbiAgICAgICAgICAgIChkb25lLCBpbnB1dCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGlucHV0ID09PSBudWxsIHx8IGlucHV0ID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBkb25lKG9wdGlvbnMuZXJyb3JNZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGRvbmUoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgbnVsbCxcclxuICAgICAgICAgICAgdHJ1ZSxcclxuICAgICAgICAgICAgb3B0aW9ucy5zdG9wT25GYWlsdXJlKTtcclxuICAgIH1cclxuXHJcbiAgICAvKiogXHJcbiAgICAgKiBQYXJzZXMgaW5wdXQgdmFsdWUuXHJcbiAgICAgKiBQYXJzZSBydWxlcyBydW5zIGZpcnN0LlxyXG4gICAgICogSWYgdHJhbnNmb3JtYXRpb24gZnVuY3Rpb24gcmV0dXJucyBudWxsIG9yIHVuZGVmaW5lZCBvciB0aHJvd3MgYW4gZXJyb3IgZmFpbHMgd2l0aCBzcGVjaWZpZWQgZXJyb3IgbWVzc2FnZS5cclxuICAgICAqL1xyXG4gICAgcGFyc2UoY29udmVydEZuOiAoaW5wdXRWYWx1ZTogYW55LCB2YWxpZGF0aW5nT2JqZWN0PzogYW55LCByb290T2JqZWN0PzogYW55KSA9PiBULCBvcHRpb25zPzogUnVsZU9wdGlvbnMpOiB0aGlzIHtcclxuICAgICAgICBpZiAoIWNvbnZlcnRGbikge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJUcmFuc2Zvcm1hdGlvbiBmdW5jdGlvbiBpcyByZXF1aXJlZC5cIilcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIG9wdGlvbnMgPSBlbnN1cmVSdWxlT3B0aW9ucyhvcHRpb25zLCB7XHJcbiAgICAgICAgICAgIGVycm9yTWVzc2FnZTogXCJDb252ZXJzaW9uIGZhaWxlZC5cIixcclxuICAgICAgICAgICAgc3RvcE9uRmFpbHVyZTogdHJ1ZVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIGNvbnN0IGZhaWxSZXN1bHQgPSBuZXcgT2JqZWN0KCk7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLmNoZWNrQW5kQ29udmVydChcclxuICAgICAgICAgICAgKGRvbmUsIGNvbnZlcnRlZFZhbHVlLCBvYmosIHJvb3QpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChjb252ZXJ0ZWRWYWx1ZSA9PSBmYWlsUmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZG9uZShvcHRpb25zLmVycm9yTWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBkb25lKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIChpbnB1dFZhbHVlLCB2YWxpZGF0aW5nT2JqZWN0LCByb290T2JqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbnZlcnRlZCA9IGNvbnZlcnRGbihpbnB1dFZhbHVlLCB2YWxpZGF0aW5nT2JqZWN0LCByb290T2JqZWN0KTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoY29udmVydGVkID09PSBudWxsIHx8IGNvbnZlcnRlZCA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8VD48YW55PmZhaWxSZXN1bHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gY29udmVydGVkO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gPFQ+PGFueT5mYWlsUmVzdWx0O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBmYWxzZSxcclxuICAgICAgICAgICAgb3B0aW9ucy5zdG9wT25GYWlsdXJlKTtcclxuICAgIH1cclxuXHJcbiAgICBtdXN0KHByZWRpY2F0ZTogKHZhbHVlOiBULCB2YWxpZGF0aW5nT2JqZWN0PzogYW55LCByb290T2JqZWN0PzogYW55KSA9PiBib29sZWFuLCBvcHRpb25zPzogUnVsZU9wdGlvbnMpOiB0aGlzIHtcclxuICAgICAgICBpZiAoIXByZWRpY2F0ZSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJQcmVkaWNhdGUgaXMgcmVxdWlyZWQuXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgb3B0aW9ucyA9IGVuc3VyZVJ1bGVPcHRpb25zKG9wdGlvbnMsIHtcclxuICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiBcIlZhbHVlIGlzIG5vdCB2YWxpZC5cIixcclxuICAgICAgICAgICAgc3RvcE9uRmFpbHVyZTogZmFsc2VcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY2hlY2tBbmRDb252ZXJ0KFxyXG4gICAgICAgICAgICAoZG9uZSwgaW5wdXQsIG9iaiwgcm9vdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFwcmVkaWNhdGUoaW5wdXQsIG9iaiwgcm9vdCkpIHtcclxuICAgICAgICAgICAgICAgICAgICBkb25lKG9wdGlvbnMuZXJyb3JNZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGRvbmUoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgbnVsbCxcclxuICAgICAgICAgICAgZmFsc2UsXHJcbiAgICAgICAgICAgIG9wdGlvbnMuc3RvcE9uRmFpbHVyZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIHdpdGhSdWxlKHJ1bGU6IFZhbGlkYXRpb25SdWxlPFQ+LCBwdXRSdWxlRmlyc3Q6IGJvb2xlYW4gPSBmYWxzZSk6IHRoaXMge1xyXG4gICAgICAgIGlmICghcnVsZSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJydWxlIGlzIHJlcXVpcmVkXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgY29weSA9IHRoaXMuY2xvbmUoKTtcclxuXHJcbiAgICAgICAgY29weS5zdG9wT25GYWlsdXJlID0gdGhpcy5zdG9wT25GYWlsdXJlO1xyXG5cclxuICAgICAgICBpZiAocHV0UnVsZUZpcnN0KSB7XHJcbiAgICAgICAgICAgIGNvcHkucnVsZXMgPSBbcnVsZSwgLi4udGhpcy5ydWxlc107XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBjb3B5LnJ1bGVzID0gWy4uLnRoaXMucnVsZXMsIHJ1bGVdO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIDx0aGlzPmNvcHk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIGFic3RyYWN0IGNsb25lKCk6IFNlcXVlbnRpYWxSdWxlU2V0PFQ+O1xyXG59XHJcblxyXG4vKiogXHJcbiAqIEVuY2Fwc3VsYXRlcyBydWxlIGVuY2xvc2VkIGluIHNldCBvZiBydWxlcyBydW4gYmVmb3JlIGFuZCBhZnRlciB0aGUgcnVsZS5cclxuICogXHJcbiAqIFBhcnNpbmcgb25seSBydW4gZm9yIG1haW4gcnVsZS4gQWxsIG90aGVyIHJ1bGVzIHVzZXMgbWFpbiBydWxlIHBhcnNpbmcgcmVzdWx0IGFzIGlucHV0LlxyXG4gKiBcclxuICogVGhlIG1haW4gcnVsZSBpcyBydW4gb25seSBpZiBhbGwgcnVsZXMgcnVuIGJlZm9yZSBoYXMgYmVlbiBydW4gc3VjY2Vzc2Z1bHkuXHJcbiAqIFRoZSBydWxlcyB0byBydW4gYWZ0ZXIgd291bGQgYmUgb25seSBydW4gaWYgbWFpbiBydWxlIHJ1biBzdWNjZXNzZnVseS5cclxuICogXHJcbiAqIEVuY2xvc2luZyBydWxlIHdvdWxkIGJlIHJ1biBzdWNjZXNzZnVseSBvbmx5IGlmIGFsbCBydWxlcyAoYmVmb3JlLCBtYWluIGFuZCBhZnRlcikgaGFzIHJ1biBzdWNjZXNzZnVseS4gIFxyXG4gKi9cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEVuY2xvc2luZ1ZhbGlkYXRpb25SdWxlQmFzZTxUPiBpbXBsZW1lbnRzIFZhbGlkYXRpb25SdWxlPFQ+IHtcclxuICAgIHByaXZhdGUgcnVsZXNCZWZvcmU6IFZhbGlkYXRpb25SdWxlPFQ+W10gPSBbXTtcclxuICAgIHByaXZhdGUgcnVsZXNBZnRlcjogVmFsaWRhdGlvblJ1bGU8VD5bXSA9IFtdO1xyXG5cclxuICAgIHN0b3BPbkZhaWx1cmUgPSBmYWxzZTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgcnVsZTogVmFsaWRhdGlvblJ1bGU8VD4pIHtcclxuICAgICAgICBpZiAoIXJ1bGUpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVmFsaWRhdGlvbiBydWxlIGlzIHJlcXVpcmVkLlwiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcnVuUGFyc2UoaW5wdXRWYWx1ZTogYW55LCB2YWxpZGF0aW5nT2JqZWN0PzogYW55LCByb290T2JqZWN0PzogYW55KTogVCB7XHJcbiAgICAgICAgcmV0dXJuIGNvbWJpbmVSdWxlcyh0aGlzLnJ1bGUpLnJ1blBhcnNlKGlucHV0VmFsdWUsIHZhbGlkYXRpbmdPYmplY3QsIHJvb3RPYmplY3QpO1xyXG4gICAgfVxyXG5cclxuICAgIHJ1blZhbGlkYXRlKFxyXG4gICAgICAgIGNvbnRleHQ6IElWYWxpZGF0aW9uQ29udGV4dCxcclxuICAgICAgICBkb25lQ2FsbGJhY2s6IChzdWNjZXNzOiBib29sZWFuKSA9PiB2b2lkLFxyXG4gICAgICAgIG9iajogYW55LFxyXG4gICAgICAgIHZhbGlkYXRpbmdPYmplY3Q/OiBhbnksXHJcbiAgICAgICAgcm9vdE9iamVjdD86IGFueSk6IHZvaWQge1xyXG5cclxuICAgICAgICBjb25zdCBhbGwgPSBbXHJcbiAgICAgICAgICAgIC4uLih0aGlzLnJ1bGVzQmVmb3JlIHx8IFtdKSxcclxuICAgICAgICAgICAgdGhpcy5ydWxlLFxyXG4gICAgICAgICAgICAuLi4odGhpcy5ydWxlc0FmdGVyIHx8IFtdKVxyXG4gICAgICAgIF07XHJcblxyXG4gICAgICAgIGNvbWJpbmVSdWxlcyguLi5hbGwpLnJ1blZhbGlkYXRlKFxyXG4gICAgICAgICAgICBjb250ZXh0LFxyXG4gICAgICAgICAgICBkb25lQ2FsbGJhY2ssXHJcbiAgICAgICAgICAgIG9iaixcclxuICAgICAgICAgICAgdmFsaWRhdGluZ09iamVjdCxcclxuICAgICAgICAgICAgcm9vdE9iamVjdCk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHN0b3BPbkZhaWwoc3RvcE9uRmFpbHVyZTogYm9vbGVhbiA9IHRydWUpOiB0aGlzIHtcclxuICAgICAgICBjb25zdCBjb3B5ID0gdGhpcy5jbG9uZSgpO1xyXG5cclxuICAgICAgICBjb3B5LnN0b3BPbkZhaWx1cmUgPSBzdG9wT25GYWlsdXJlO1xyXG5cclxuICAgICAgICByZXR1cm4gPHRoaXM+Y29weTtcclxuICAgIH1cclxuXHJcbiAgICAvKiogRGlzYWJsZXMgbnVsbCBvYmplY3QuICovXHJcbiAgICByZXF1aXJlZChvcHRpb25zPzogUnVsZU9wdGlvbnMpOiB0aGlzIHtcclxuXHJcbiAgICAgICAgb3B0aW9ucyA9IGVuc3VyZVJ1bGVPcHRpb25zKG9wdGlvbnMsIHtcclxuICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiBcIk9iamVjdCBpcyByZXF1aXJlZC5cIixcclxuICAgICAgICAgICAgc3RvcE9uRmFpbHVyZTogdHJ1ZVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBjb25zdCByZXN1bHQgPSB0aGlzLmNvcHkoKTtcclxuXHJcbiAgICAgICAgcmVzdWx0LnJ1bGVzQmVmb3JlID0gW2FueTxUPih2ID0+IHYgIT09IG51bGwgJiYgdiAhPT0gdW5kZWZpbmVkLCBvcHRpb25zKSwgLi4ucmVzdWx0LnJ1bGVzQmVmb3JlXTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxuXHJcbiAgICAvKiogQWRkcyBhIHJ1bGUgd2hpY2ggaXMgcnVuIGJlZm9yZSB2YWxpZGF0aW9uLiAqL1xyXG4gICAgcnVuQmVmb3JlKHJ1bGU6IFZhbGlkYXRpb25SdWxlPFQ+KTogdGhpcyB7XHJcbiAgICAgICAgaWYgKCFydWxlKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcInJ1bGUgaXMgcmVxdWlyZWRcIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCByZXN1bHQgPSB0aGlzLmNvcHkoKTtcclxuICAgICAgICByZXN1bHQucnVsZXNCZWZvcmUgPSBbLi4udGhpcy5ydWxlc0JlZm9yZSwgcnVsZV07XHJcblxyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIEFkZHMgYSBydWxlIHdoaWNoIGlzIHJ1biBhZnRlciB2YWxpZGF0aW9uLiAqL1xyXG4gICAgcnVuQWZ0ZXIocnVsZTogVmFsaWRhdGlvblJ1bGU8VD4pOiB0aGlzIHtcclxuICAgICAgICBpZiAoIXJ1bGUpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwicnVsZSBpcyByZXF1aXJlZFwiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMuY29weSgpO1xyXG4gICAgICAgIHJlc3VsdC5ydWxlc0FmdGVyID0gWy4uLnRoaXMucnVsZXNBZnRlciwgcnVsZV07XHJcblxyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGJlZm9yZShwcmVkaWNhdGU6IChvYmo6IFQsIHZhbGlkYXRpbmdPYmplY3Q/OiBhbnksIHJvb3RPYmplY3Q/OiBhbnkpID0+IGJvb2xlYW4sIG9wdGlvbnM/OiBSdWxlT3B0aW9ucyk6IHRoaXMge1xyXG4gICAgICAgIGlmICghcHJlZGljYXRlKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlByZWRpY2F0ZSBpcyByZXF1aXJlZC5cIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5ydW5CZWZvcmUoYW55PFQ+KHByZWRpY2F0ZSwgb3B0aW9ucykpO1xyXG4gICAgfVxyXG5cclxuICAgIGFmdGVyKHByZWRpY2F0ZTogKG9iajogVCwgdmFsaWRhdGluZ09iamVjdD86IGFueSwgcm9vdE9iamVjdD86IGFueSkgPT4gYm9vbGVhbiwgb3B0aW9ucz86IFJ1bGVPcHRpb25zKTogdGhpcyB7XHJcbiAgICAgICAgaWYgKCFwcmVkaWNhdGUpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiUHJlZGljYXRlIGlzIHJlcXVpcmVkLlwiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLnJ1bkFmdGVyKGFueTxUPihwcmVkaWNhdGUsIG9wdGlvbnMpKTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgd2l0aE1haW5SdWxlKHJ1bGU6IFZhbGlkYXRpb25SdWxlPFQ+KTogdGhpcyB7XHJcbiAgICAgICAgaWYgKCFydWxlKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlJ1bGUgaXMgcmVxdWlyZWQuXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy5jb3B5KCk7XHJcbiAgICAgICAgcmVzdWx0LnJ1bGUgPSBydWxlO1xyXG5cclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBhYnN0cmFjdCBjbG9uZSgpOiB0aGlzO1xyXG5cclxuICAgIHByaXZhdGUgY29weSgpOiB0aGlzIHtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSB0aGlzLmNsb25lKCk7XHJcblxyXG4gICAgICAgIHJlc3VsdC5ydWxlc0JlZm9yZSA9IFsuLi50aGlzLnJ1bGVzQmVmb3JlXTtcclxuICAgICAgICByZXN1bHQucnVsZXNBZnRlciA9IFsuLi50aGlzLnJ1bGVzQWZ0ZXJdO1xyXG4gICAgICAgIHJlc3VsdC5zdG9wT25GYWlsdXJlID0gdGhpcy5zdG9wT25GYWlsdXJlO1xyXG5cclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgRW1wdHlSdWxlPFQ+IGltcGxlbWVudHMgVmFsaWRhdGlvblJ1bGU8VD4ge1xyXG5cclxuICAgIHN0b3BPbkZhaWx1cmUgPSBmYWxzZTtcclxuXHJcbiAgICBydW5QYXJzZShpbnB1dFZhbHVlOiBhbnksIHZhbGlkYXRpbmdPYmplY3Q/OiBhbnksIHJvb3RPYmplY3Q/OiBhbnkpOiBUIHtcclxuICAgICAgICByZXR1cm4gPFQ+aW5wdXRWYWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICAvKiogUnVucyBhbGwgY2hhaW5lZCBydWxlcy4gKi9cclxuICAgIHJ1blZhbGlkYXRlKGNvbnRleHQ6IElWYWxpZGF0aW9uQ29udGV4dCxcclxuICAgICAgICBkb25lQ2FsbGJhY2s6IChzdWNjZXNzOiBib29sZWFuKSA9PiB2b2lkLFxyXG4gICAgICAgIHBhcnNlZFZhbHVlOiBhbnksXHJcbiAgICAgICAgdmFsaWRhdGluZ09iamVjdD86IGFueSxcclxuICAgICAgICByb290T2JqZWN0PzogYW55KTogdm9pZCB7XHJcbiAgICAgICAgZG9uZUNhbGxiYWNrKHRydWUpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQW55UnVsZXM8VD4gZXh0ZW5kcyBTZXF1ZW50aWFsUnVsZVNldDxUPiB7XHJcbiAgICBjb25zdHJ1Y3RvcihzdG9wT25GYWlsdXJlOiBib29sZWFuKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLnN0b3BPbkZhaWx1cmUgPSBzdG9wT25GYWlsdXJlO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBjbG9uZSgpOiBBbnlSdWxlczxUPiB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBBbnlSdWxlczxUPih0aGlzLnN0b3BPbkZhaWx1cmUpO1xyXG4gICAgfVxyXG59XHJcblxyXG4vKiogVmFsaWRhdGVzIGFueSB2YWx1ZSB1c2luZyBnaXZlbiBwcmVkaWNhdGUuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBhbnk8VD4ocHJlZGljYXRlPzogKHZhbHVlOiBULCBlbnRpdHk/OiBhbnksIHJvb3RFbnRpdHk/OiBhbnkpID0+IGJvb2xlYW4sIG9wdGlvbnM/OiBSdWxlT3B0aW9ucyk6IEFueVJ1bGVzPFQ+IHtcclxuICAgIG9wdGlvbnMgPSBlbnN1cmVSdWxlT3B0aW9ucyhvcHRpb25zLCB7XHJcbiAgICAgICAgc3RvcE9uRmFpbHVyZTogZmFsc2VcclxuICAgIH0pO1xyXG5cclxuICAgIHByZWRpY2F0ZSA9IHByZWRpY2F0ZSB8fCAodiA9PiB0cnVlKTtcclxuICAgIHJldHVybiBuZXcgQW55UnVsZXM8VD4ob3B0aW9ucy5zdG9wT25GYWlsdXJlKS5tdXN0KHByZWRpY2F0ZSwgb3B0aW9ucyk7XHJcbn0iXX0=

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var rules_base_1 = __webpack_require__(15);
	var ObjectValidationRuleCore = (function () {
	    function ObjectValidationRuleCore(properties, expandable, stopOnFailure) {
	        this.properties = properties;
	        this.expandable = expandable;
	        this.stopOnFailure = stopOnFailure;
	        if (!properties) {
	            throw new Error("Properties is required.");
	        }
	    }
	    ObjectValidationRuleCore.prototype.runParse = function (obj, validatingObject, rootObject) {
	        if (obj === null || obj === undefined) {
	            return obj;
	        }
	        var result = {};
	        for (var property in this.properties) {
	            var validator = this.properties[property];
	            var sourceValue = obj[property];
	            var parsedValue = validator.runParse(sourceValue, obj, rootObject);
	            result[property] = parsedValue;
	        }
	        if (this.expandable) {
	            for (var property in obj) {
	                if (!this.properties[property]) {
	                    result[property] = obj[property];
	                }
	            }
	        }
	        return result;
	    };
	    ObjectValidationRuleCore.prototype.runValidate = function (context, doneCallback, obj, validatingObject, rootObject) {
	        if (obj === null || obj === undefined) {
	            doneCallback(true);
	            return;
	        }
	        var propertyRules = [];
	        for (var property in this.properties) {
	            var validator = this.properties[property];
	            propertyRules.push({
	                property: property,
	                validator: validator
	            });
	        }
	        var allValid = true;
	        var run = function () {
	            var rule = propertyRules.shift();
	            if (rule) {
	                var propertyContext = context.property(rule.property);
	                var propertyValue = obj[rule.property];
	                rule.validator.runValidate(propertyContext, function (success) {
	                    allValid = allValid && success;
	                    run();
	                }, propertyValue, obj, rootObject);
	            }
	            else {
	                doneCallback(allValid);
	            }
	        };
	        run();
	    };
	    return ObjectValidationRuleCore;
	}());
	var ObjectValidationRule = (function (_super) {
	    __extends(ObjectValidationRule, _super);
	    function ObjectValidationRule(properties, isExpandable, stopsOnMainRuleFailure) {
	        _super.call(this, new ObjectValidationRuleCore(properties, isExpandable, stopsOnMainRuleFailure));
	        this.properties = properties;
	        this.isExpandable = isExpandable;
	        this.stopsOnMainRuleFailure = stopsOnMainRuleFailure;
	    }
	    ObjectValidationRule.prototype.clone = function () {
	        return new ObjectValidationRule(this.properties, this.isExpandable, this.stopsOnMainRuleFailure);
	    };
	    ObjectValidationRule.prototype.expandable = function () {
	        this.isExpandable = true;
	        return this.makeCopy();
	    };
	    ObjectValidationRule.prototype.makeCopy = function () {
	        return this.withMainRule(new ObjectValidationRule(this.properties, this.isExpandable, this.stopsOnMainRuleFailure));
	    };
	    return ObjectValidationRule;
	}(rules_base_1.EnclosingValidationRuleBase));
	exports.ObjectValidationRule = ObjectValidationRule;
	function obj(properties, stopOnFailure) {
	    if (stopOnFailure === void 0) { stopOnFailure = true; }
	    return new ObjectValidationRule(properties, false, stopOnFailure);
	}
	exports.obj = obj;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2JqZWN0LXJ1bGVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsib2JqZWN0LXJ1bGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUNBLDJCQUE2QyxjQUFjLENBQUMsQ0FBQTtBQVU1RDtJQUVJLGtDQUNZLFVBQW1DLEVBQ25DLFVBQW1CLEVBQ3BCLGFBQXNCO1FBRnJCLGVBQVUsR0FBVixVQUFVLENBQXlCO1FBQ25DLGVBQVUsR0FBVixVQUFVLENBQVM7UUFDcEIsa0JBQWEsR0FBYixhQUFhLENBQVM7UUFFN0IsRUFBRSxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO1lBQ2QsTUFBTSxJQUFJLEtBQUssQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO1FBQy9DLENBQUM7SUFDTCxDQUFDO0lBRUQsMkNBQVEsR0FBUixVQUFTLEdBQVEsRUFBRSxnQkFBc0IsRUFBRSxVQUFnQjtRQUN2RCxFQUFFLENBQUMsQ0FBQyxHQUFHLEtBQUssSUFBSSxJQUFJLEdBQUcsS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDO1lBQ3BDLE1BQU0sQ0FBQyxHQUFHLENBQUM7UUFDZixDQUFDO1FBRUQsSUFBTSxNQUFNLEdBQU0sRUFBRSxDQUFDO1FBRXJCLEdBQUcsQ0FBQyxDQUFDLElBQUksUUFBUSxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO1lBRW5DLElBQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDNUMsSUFBTSxXQUFXLEdBQUcsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBRWxDLElBQU0sV0FBVyxHQUFHLFNBQVMsQ0FBQyxRQUFRLENBQUMsV0FBVyxFQUFFLEdBQUcsRUFBRSxVQUFVLENBQUMsQ0FBQztZQUNyRSxNQUFNLENBQUMsUUFBUSxDQUFDLEdBQUcsV0FBVyxDQUFDO1FBQ25DLENBQUM7UUFFRCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENB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Q3BCLElBQUksQ0FBQyxVQUFVLEVBQ2YsSUFBSSxDQUFDLFlBQVksRUFDakIsSUFBSSxDQUFDLHNCQUFzQixDQUFDLENBQUMsQ0FBQztJQUMxQyxDQUFDO0lBQ0wsMkJBQUM7QUFBRCxDQUFDLEFBMUJELENBQTZELHdDQUEyQixHQTBCdkY7QUExQlksNEJBQW9CLHVCQTBCaEMsQ0FBQTtBQUVELGFBQXVCLFVBQW1DLEVBQUUsYUFBb0I7SUFBcEIsNkJBQW9CLEdBQXBCLG9CQUFvQjtJQUM1RSxNQUFNLENBQUMsSUFBSSxvQkFBb0IsQ0FBSSxVQUFVLEVBQUUsS0FBSyxFQUFFLGFBQWEsQ0FBQyxDQUFDO0FBQ3pFLENBQUM7QUFGZSxXQUFHLE1BRWxCLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBWYWxpZGF0aW9uUnVsZSwgSVZhbGlkYXRpb25Db250ZXh0IH0gZnJvbSBcIi4uL2RlZmluaXRpb25zXCI7XHJcbmltcG9ydCB7IEVuY2xvc2luZ1ZhbGlkYXRpb25SdWxlQmFzZSAgfSBmcm9tIFwiLi9ydWxlcy1iYXNlXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElQcm9wZXJ0eVZhbGlkYXRpb25IYXNoIHtcclxuICAgIFtwcm9wZXJ0eTogc3RyaW5nXTogVmFsaWRhdGlvblJ1bGU8YW55PjtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJT2JqZWN0IHtcclxuICAgIFtwcm9wZXJ0eTogc3RyaW5nXTogYW55O1xyXG59XHJcblxyXG5jbGFzcyBPYmplY3RWYWxpZGF0aW9uUnVsZUNvcmU8VCBleHRlbmRzIElPYmplY3Q+IGltcGxlbWVudHMgVmFsaWRhdGlvblJ1bGU8VD4ge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHByaXZhdGUgcHJvcGVydGllczogSVByb3BlcnR5VmFsaWRhdGlvbkhhc2gsXHJcbiAgICAgICAgcHJpdmF0ZSBleHBhbmRhYmxlOiBib29sZWFuLFxyXG4gICAgICAgIHB1YmxpYyBzdG9wT25GYWlsdXJlOiBib29sZWFuKSB7XHJcblxyXG4gICAgICAgIGlmICghcHJvcGVydGllcykge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJQcm9wZXJ0aWVzIGlzIHJlcXVpcmVkLlwiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcnVuUGFyc2Uob2JqOiBhbnksIHZhbGlkYXRpbmdPYmplY3Q/OiBhbnksIHJvb3RPYmplY3Q/OiBhbnkpOiBUIHtcclxuICAgICAgICBpZiAob2JqID09PSBudWxsIHx8IG9iaiA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBvYmo7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCByZXN1bHQgPSA8VD57fTtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgcHJvcGVydHkgaW4gdGhpcy5wcm9wZXJ0aWVzKSB7XHJcblxyXG4gICAgICAgICAgICBjb25zdCB2YWxpZGF0b3IgPSB0aGlzLnByb3BlcnRpZXNbcHJvcGVydHldO1xyXG4gICAgICAgICAgICBjb25zdCBzb3VyY2VWYWx1ZSA9IG9ialtwcm9wZXJ0eV07XHJcblxyXG4gICAgICAgICAgICBjb25zdCBwYXJzZWRWYWx1ZSA9IHZhbGlkYXRvci5ydW5QYXJzZShzb3VyY2VWYWx1ZSwgb2JqLCByb290T2JqZWN0KTtcclxuICAgICAgICAgICAgcmVzdWx0W3Byb3BlcnR5XSA9IHBhcnNlZFZhbHVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuZXhwYW5kYWJsZSkge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBwcm9wZXJ0eSBpbiBvYmopIHtcclxuICAgICAgICAgICAgICAgIGlmICghdGhpcy5wcm9wZXJ0aWVzW3Byb3BlcnR5XSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdFtwcm9wZXJ0eV0gPSBvYmpbcHJvcGVydHldO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG5cclxuICAgIHJ1blZhbGlkYXRlKFxyXG4gICAgICAgIGNvbnRleHQ6IElWYWxpZGF0aW9uQ29udGV4dCxcclxuICAgICAgICBkb25lQ2FsbGJhY2s6IChzdWNjZXNzOiBib29sZWFuKSA9PiB2b2lkLFxyXG4gICAgICAgIG9iajogYW55LFxyXG4gICAgICAgIHZhbGlkYXRpbmdPYmplY3Q/OiBhbnksXHJcbiAgICAgICAgcm9vdE9iamVjdD86IGFueSk6IHZvaWQge1xyXG5cclxuICAgICAgICBpZiAob2JqID09PSBudWxsIHx8IG9iaiA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIGRvbmVDYWxsYmFjayh0cnVlKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgcHJvcGVydHlSdWxlczogQXJyYXk8eyBwcm9wZXJ0eTogc3RyaW5nOyB2YWxpZGF0b3I6IFZhbGlkYXRpb25SdWxlPGFueT47IH0+ID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgcHJvcGVydHkgaW4gdGhpcy5wcm9wZXJ0aWVzKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHZhbGlkYXRvciA9IHRoaXMucHJvcGVydGllc1twcm9wZXJ0eV07XHJcbiAgICAgICAgICAgIHByb3BlcnR5UnVsZXMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICBwcm9wZXJ0eSxcclxuICAgICAgICAgICAgICAgIHZhbGlkYXRvclxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBhbGxWYWxpZCA9IHRydWU7XHJcbiAgICAgICAgY29uc3QgcnVuID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBydWxlID0gcHJvcGVydHlSdWxlcy5zaGlmdCgpO1xyXG4gICAgICAgICAgICBpZiAocnVsZSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcHJvcGVydHlDb250ZXh0ID0gY29udGV4dC5wcm9wZXJ0eShydWxlLnByb3BlcnR5KTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHByb3BlcnR5VmFsdWUgPSBvYmpbcnVsZS5wcm9wZXJ0eV07XHJcbiAgICAgICAgICAgICAgICBydWxlLnZhbGlkYXRvci5ydW5WYWxpZGF0ZShcclxuICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0eUNvbnRleHQsXHJcbiAgICAgICAgICAgICAgICAgICAgKHN1Y2Nlc3MpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxsVmFsaWQgPSBhbGxWYWxpZCAmJiBzdWNjZXNzO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgcnVuKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0eVZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgIG9iaixcclxuICAgICAgICAgICAgICAgICAgICByb290T2JqZWN0XHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgZG9uZUNhbGxiYWNrKGFsbFZhbGlkKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHJ1bigpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgT2JqZWN0VmFsaWRhdGlvblJ1bGU8VCBleHRlbmRzIElPYmplY3Q+IGV4dGVuZHMgRW5jbG9zaW5nVmFsaWRhdGlvblJ1bGVCYXNlPFQ+IHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwcml2YXRlIHByb3BlcnRpZXM6IElQcm9wZXJ0eVZhbGlkYXRpb25IYXNoLFxyXG4gICAgICAgIHByaXZhdGUgaXNFeHBhbmRhYmxlOiBib29sZWFuLFxyXG4gICAgICAgIHByaXZhdGUgc3RvcHNPbk1haW5SdWxlRmFpbHVyZTogYm9vbGVhbikge1xyXG4gICAgICAgIHN1cGVyKG5ldyBPYmplY3RWYWxpZGF0aW9uUnVsZUNvcmU8VD4ocHJvcGVydGllcywgaXNFeHBhbmRhYmxlLCBzdG9wc09uTWFpblJ1bGVGYWlsdXJlKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIGNsb25lKCk6IHRoaXMge1xyXG4gICAgICAgIHJldHVybiA8dGhpcz5uZXcgT2JqZWN0VmFsaWRhdGlvblJ1bGU8VD4odGhpcy5wcm9wZXJ0aWVzLCB0aGlzLmlzRXhwYW5kYWJsZSwgdGhpcy5zdG9wc09uTWFpblJ1bGVGYWlsdXJlKTtcclxuICAgIH1cclxuXHJcbiAgICBleHBhbmRhYmxlKCk6IHRoaXMge1xyXG4gICAgICAgIHRoaXMuaXNFeHBhbmRhYmxlID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMubWFrZUNvcHkoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG1ha2VDb3B5KCk6IHRoaXMge1xyXG4gICAgICAgIHJldHVybiB0aGlzLndpdGhNYWluUnVsZShcclxuICAgICAgICAgICAgbmV3IE9iamVjdFZhbGlkYXRpb25SdWxlPFQ+KFxyXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wZXJ0aWVzLFxyXG4gICAgICAgICAgICAgICAgdGhpcy5pc0V4cGFuZGFibGUsXHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0b3BzT25NYWluUnVsZUZhaWx1cmUpKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIG9iajxUPihwcm9wZXJ0aWVzOiBJUHJvcGVydHlWYWxpZGF0aW9uSGFzaCwgc3RvcE9uRmFpbHVyZSA9IHRydWUpOiBPYmplY3RWYWxpZGF0aW9uUnVsZTxUPiB7XHJcbiAgICByZXR1cm4gbmV3IE9iamVjdFZhbGlkYXRpb25SdWxlPFQ+KHByb3BlcnRpZXMsIGZhbHNlLCBzdG9wT25GYWlsdXJlKTtcclxufSJdfQ==

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var rules_base_1 = __webpack_require__(15);
	var HashValidationRuleCore = (function () {
	    function HashValidationRuleCore(elementValidationRule, skipInvalidElements, filterHashFn, stopOnFailure) {
	        this.elementValidationRule = elementValidationRule;
	        this.skipInvalidElements = skipInvalidElements;
	        this.filterHashFn = filterHashFn;
	        this.stopOnFailure = stopOnFailure;
	        if (!elementValidationRule) {
	            throw new Error("Element validation rule required");
	        }
	    }
	    HashValidationRuleCore.prototype.runParse = function (hash, validatingObject, rootObject) {
	        if (hash === null || hash === undefined) {
	            return hash;
	        }
	        var result = {};
	        for (var key in hash) {
	            var inputValue = hash[key];
	            var parsedValue = this.elementValidationRule.runParse(inputValue, hash, rootObject);
	            if (!this.filterHashFn || this.filterHashFn(key, parsedValue, inputValue)) {
	                result[key] = parsedValue;
	            }
	        }
	        return result;
	    };
	    HashValidationRuleCore.prototype.runValidate = function (context, doneCallback, hash, validatingObject, rootObject) {
	        var _this = this;
	        var hashKeys = [];
	        for (var key in hash) {
	            hashKeys.push(key);
	        }
	        var valid = true;
	        var run = function () {
	            if (hashKeys.length) {
	                var key_1 = hashKeys.shift();
	                var inputValue = hash[key_1];
	                var keyContext_1 = context.property("" + key_1).bufferErrors();
	                _this.elementValidationRule.runValidate(keyContext_1, function (success) {
	                    if (_this.skipInvalidElements) {
	                        if (!success) {
	                            delete hash[key_1];
	                        }
	                    }
	                    else {
	                        valid = valid && success;
	                        keyContext_1.flushErrors();
	                    }
	                    run();
	                }, inputValue, hash, rootObject);
	            }
	            else {
	                doneCallback(valid);
	            }
	        };
	        run();
	    };
	    return HashValidationRuleCore;
	}());
	var HashValidationRule = (function (_super) {
	    __extends(HashValidationRule, _super);
	    function HashValidationRule(elementValidationRule, skipInvalidElementsProp, filterHashFn, stopOnMainRuleFailure) {
	        _super.call(this, new HashValidationRuleCore(elementValidationRule, skipInvalidElementsProp, filterHashFn, stopOnMainRuleFailure));
	        this.elementValidationRule = elementValidationRule;
	        this.skipInvalidElementsProp = skipInvalidElementsProp;
	        this.filterHashFn = filterHashFn;
	        this.stopOnMainRuleFailure = stopOnMainRuleFailure;
	    }
	    HashValidationRule.prototype.clone = function () {
	        return new HashValidationRule(this.elementValidationRule, this.skipInvalidElementsProp, this.filterHashFn, this.stopOnMainRuleFailure);
	    };
	    /**
	     * Don't fail on invalid element. Instead don't include invalid elements in result hash.
	     * Note new rule never fails instead return empty hash.
	     */
	    HashValidationRule.prototype.skipInvalidElements = function (skipInvalidElements) {
	        if (skipInvalidElements === void 0) { skipInvalidElements = true; }
	        this.skipInvalidElementsProp = skipInvalidElements;
	        return this.makeCopy();
	    };
	    /** Filter result hash by applying predicate to each hash item and include only items passed the test. */
	    HashValidationRule.prototype.filter = function (predicate) {
	        if (!predicate) {
	            throw new Error("Predicate is required.");
	        }
	        this.filterHashFn = predicate;
	        return this.makeCopy();
	    };
	    HashValidationRule.prototype.makeCopy = function () {
	        return this.withMainRule(new HashValidationRule(this.elementValidationRule, this.skipInvalidElementsProp, this.filterHashFn, this.stopOnMainRuleFailure));
	    };
	    return HashValidationRule;
	}(rules_base_1.EnclosingValidationRuleBase));
	exports.HashValidationRule = HashValidationRule;
	/**
	 * Validates a map of objects with the same structure.
	 */
	function hash(elementValidationRule, stopOnFailure) {
	    if (stopOnFailure === void 0) { stopOnFailure = true; }
	    if (!elementValidationRule) {
	        throw new Error("Element validation rule is required.");
	    }
	    return new HashValidationRule(elementValidationRule, false, null, stopOnFailure);
	}
	exports.hash = hash;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGFzaC1ydWxlcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImhhc2gtcnVsZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQ0EsMkJBQTRDLGNBQWMsQ0FBQyxDQUFBO0FBTTNEO0lBRUksZ0NBQ1kscUJBQStDLEVBQy9DLG1CQUE0QixFQUM1QixZQUF3RSxFQUN6RSxhQUFhO1FBSFosMEJBQXFCLEdBQXJCLHFCQUFxQixDQUEwQjtRQUMvQyx3QkFBbUIsR0FBbkIsbUJBQW1CLENBQVM7UUFDNUIsaUJBQVksR0FBWixZQUFZLENBQTREO1FBQ3pFLGtCQUFhLEdBQWIsYUFBYSxDQUFBO1FBRXBCLEVBQUUsQ0FBQyxDQUFDLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDO1lBQ3pCLE1BQU0sSUFBSSxLQUFLLENBQUMsa0NBQWtDLENBQUMsQ0FBQztRQUN4RCxDQUFDO0lBQ0wsQ0FBQztJQUVELHlDQUFRLEdBQVIsVUFBUyxJQUFTLEVBQUUsZ0JBQXNCLEVBQUUsVUFBZ0I7UUFDeEQsRUFBRSxDQUFDLENBQUMsSUFBSSxLQUFLLElBQUksSUFBSSxJQUFJLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQztZQUN0QyxNQUFNLENBQUMsSUFBSSxDQUFDO1FBQ2hCLENBQUM7UUFFRCxJQUFNLE1BQU0sR0FBb0IsRUFBRSxDQUFDO1FBRW5DLEdBQUcsQ0FBQyxDQUFDLElBQUksR0FBRyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDbkIsSUFBTSxVQUFVLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQzdCLElBQU0sV0FBVyxHQUFHLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxRQUFRLENBQUMsVUFBVSxFQUFFLElBQUksRUFBRSxVQUFVLENBQUMsQ0FBQztZQUN0RixFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLEVBQUUsV0FBVyxFQUFFLFVBQVUsQ0FBQyxD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RDtRQUN4RCxFQUFFLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7WUFDYixNQUFNLElBQUksS0FBSyxDQUFDLHdCQUF3QixDQUFDLENBQUM7UUFDOUMsQ0FBQztRQUVELElBQUksQ0FBQyxZQUFZLEdBQUcsU0FBUyxDQUFDO1FBRTlCLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDM0IsQ0FBQztJQUVPLHFDQUFRLEdBQWhCO1FBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQ3BCLElBQUksa0JBQWtCLENBQ2xCLElBQUksQ0FBQyxxQkFBcUIsRUFDMUIsSUFBSSxDQUFDLHVCQUF1QixFQUM1QixJQUFJLENBQUMsWUFBWSxFQUNqQixJQUFJLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDO0lBQ3pDLENBQUM7SUFDTCx5QkFBQztBQUFELENBQUMsQUFoREQsQ0FBa0Qsd0NBQTJCLEdBZ0Q1RTtBQWhEWSwwQkFBa0IscUJBZ0Q5QixDQUFBO0FBR0Q7O0dBRUc7QUFDSCxjQUErQixxQkFBK0MsRUFBRSxhQUFvQjtJQUFwQiw2QkFBb0IsR0FBcEIsb0JBQW9CO0lBQ2hHLEVBQUUsQ0FBQyxDQUFDLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDO1FBQ3pCLE1BQU0sSUFBSSxLQUFLLENBQUMsc0NBQXNDLENBQUMsQ0FBQztJQUM1RCxDQUFDO0lBRUQsTUFBTSxDQUFDLElBQUksa0JBQWtCLENBQVcscUJBQXFCLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxhQUFhLENBQUMsQ0FBQztBQUMvRixDQUFDO0FBTmUsWUFBSSxPQU1uQixDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVmFsaWRhdGlvblJ1bGUsIElWYWxpZGF0aW9uQ29udGV4dCB9IGZyb20gXCIuLi9kZWZpbml0aW9uc1wiO1xyXG5pbXBvcnQgeyBFbmNsb3NpbmdWYWxpZGF0aW9uUnVsZUJhc2UgfSBmcm9tIFwiLi9ydWxlcy1iYXNlXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElIYXNoPFRFbGVtZW50PiB7XHJcbiAgICBba2V5OiBzdHJpbmddOiBURWxlbWVudDtcclxufVxyXG5cclxuY2xhc3MgSGFzaFZhbGlkYXRpb25SdWxlQ29yZTxURWxlbWVudD4gaW1wbGVtZW50cyBWYWxpZGF0aW9uUnVsZTxJSGFzaDxURWxlbWVudD4+IHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwcml2YXRlIGVsZW1lbnRWYWxpZGF0aW9uUnVsZTogVmFsaWRhdGlvblJ1bGU8VEVsZW1lbnQ+LFxyXG4gICAgICAgIHByaXZhdGUgc2tpcEludmFsaWRFbGVtZW50czogYm9vbGVhbixcclxuICAgICAgICBwcml2YXRlIGZpbHRlckhhc2hGbjogKGtleTogc3RyaW5nLCB2YWx1ZT86IFRFbGVtZW50LCByYXdWYWx1ZT86IGFueSkgPT4gYm9vbGVhbixcclxuICAgICAgICBwdWJsaWMgc3RvcE9uRmFpbHVyZSkge1xyXG5cclxuICAgICAgICBpZiAoIWVsZW1lbnRWYWxpZGF0aW9uUnVsZSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJFbGVtZW50IHZhbGlkYXRpb24gcnVsZSByZXF1aXJlZFwiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcnVuUGFyc2UoaGFzaDogYW55LCB2YWxpZGF0aW5nT2JqZWN0PzogYW55LCByb290T2JqZWN0PzogYW55KTogSUhhc2g8VEVsZW1lbnQ+IHtcclxuICAgICAgICBpZiAoaGFzaCA9PT0gbnVsbCB8fCBoYXNoID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGhhc2g7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCByZXN1bHQ6IElIYXNoPFRFbGVtZW50PiA9IHt9O1xyXG5cclxuICAgICAgICBmb3IgKGxldCBrZXkgaW4gaGFzaCkge1xyXG4gICAgICAgICAgICBjb25zdCBpbnB1dFZhbHVlID0gaGFzaFtrZXldO1xyXG4gICAgICAgICAgICBjb25zdCBwYXJzZWRWYWx1ZSA9IHRoaXMuZWxlbWVudFZhbGlkYXRpb25SdWxlLnJ1blBhcnNlKGlucHV0VmFsdWUsIGhhc2gsIHJvb3RPYmplY3QpO1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuZmlsdGVySGFzaEZuIHx8IHRoaXMuZmlsdGVySGFzaEZuKGtleSwgcGFyc2VkVmFsdWUsIGlucHV0VmFsdWUpKSB7XHJcbiAgICAgICAgICAgICAgICByZXN1bHRba2V5XSA9IHBhcnNlZFZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG5cclxuICAgIHJ1blZhbGlkYXRlKFxyXG4gICAgICAgIGNvbnRleHQ6IElWYWxpZGF0aW9uQ29udGV4dCxcclxuICAgICAgICBkb25lQ2FsbGJhY2s6IChzdWNjZXNzOiBib29sZWFuKSA9PiB2b2lkLFxyXG4gICAgICAgIGhhc2g6IGFueSxcclxuICAgICAgICB2YWxpZGF0aW5nT2JqZWN0PzogYW55LFxyXG4gICAgICAgIHJvb3RPYmplY3Q/OiBhbnkpOiB2b2lkIHtcclxuXHJcbiAgICAgICAgY29uc3QgaGFzaEtleXM6IHN0cmluZ1tdID0gW107XHJcbiAgICAgICAgZm9yIChsZXQga2V5IGluIGhhc2gpIHtcclxuICAgICAgICAgICAgaGFzaEtleXMucHVzaChrZXkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IHZhbGlkID0gdHJ1ZTtcclxuICAgICAgICBjb25zdCBydW4gPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChoYXNoS2V5cy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGtleSA9IGhhc2hLZXlzLnNoaWZ0KCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBpbnB1dFZhbHVlID0gaGFzaFtrZXldO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IGtleUNvbnRleHQgPSBjb250ZXh0LnByb3BlcnR5KGAke2tleX1gKS5idWZmZXJFcnJvcnMoKTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLmVsZW1lbnRWYWxpZGF0aW9uUnVsZS5ydW5WYWxpZGF0ZShcclxuICAgICAgICAgICAgICAgICAgICBrZXlDb250ZXh0LFxyXG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3MgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5za2lwSW52YWxpZEVsZW1lbnRzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXN1Y2Nlc3MpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxldGUgaGFzaFtrZXldO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWQgPSB2YWxpZCAmJiBzdWNjZXNzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5Q29udGV4dC5mbHVzaEVycm9ycygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBydW4oKTtcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIGlucHV0VmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgaGFzaCxcclxuICAgICAgICAgICAgICAgICAgICByb290T2JqZWN0KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGRvbmVDYWxsYmFjayh2YWxpZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBydW4oKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEhhc2hWYWxpZGF0aW9uUnVsZTxURWxlbWVudD4gZXh0ZW5kcyBFbmNsb3NpbmdWYWxpZGF0aW9uUnVsZUJhc2U8SUhhc2g8VEVsZW1lbnQ+PiB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHJpdmF0ZSBlbGVtZW50VmFsaWRhdGlvblJ1bGU6IFZhbGlkYXRpb25SdWxlPFRFbGVtZW50PixcclxuICAgICAgICBwcml2YXRlIHNraXBJbnZhbGlkRWxlbWVudHNQcm9wOiBib29sZWFuLFxyXG4gICAgICAgIHByaXZhdGUgZmlsdGVySGFzaEZuOiAoa2V5OiBzdHJpbmcsIHZhbHVlPzogVEVsZW1lbnQpID0+IGJvb2xlYW4sXHJcbiAgICAgICAgcHJpdmF0ZSBzdG9wT25NYWluUnVsZUZhaWx1cmUpIHtcclxuXHJcbiAgICAgICAgc3VwZXIobmV3IEhhc2hWYWxpZGF0aW9uUnVsZUNvcmU8VEVsZW1lbnQ+KGVsZW1lbnRWYWxpZGF0aW9uUnVsZSwgc2tpcEludmFsaWRFbGVtZW50c1Byb3AsIGZpbHRlckhhc2hGbiwgc3RvcE9uTWFpblJ1bGVGYWlsdXJlKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIGNsb25lKCk6IHRoaXMge1xyXG4gICAgICAgIHJldHVybiA8dGhpcz5uZXcgSGFzaFZhbGlkYXRpb25SdWxlPFRFbGVtZW50PihcclxuICAgICAgICAgICAgdGhpcy5lbGVtZW50VmFsaWRhdGlvblJ1bGUsXHJcbiAgICAgICAgICAgIHRoaXMuc2tpcEludmFsaWRFbGVtZW50c1Byb3AsXHJcbiAgICAgICAgICAgIHRoaXMuZmlsdGVySGFzaEZuLFxyXG4gICAgICAgICAgICB0aGlzLnN0b3BPbk1haW5SdWxlRmFpbHVyZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBEb24ndCBmYWlsIG9uIGludmFsaWQgZWxlbWVudC4gSW5zdGVhZCBkb24ndCBpbmNsdWRlIGludmFsaWQgZWxlbWVudHMgaW4gcmVzdWx0IGhhc2guXHJcbiAgICAgKiBOb3RlIG5ldyBydWxlIG5ldmVyIGZhaWxzIGluc3RlYWQgcmV0dXJuIGVtcHR5IGhhc2guXHJcbiAgICAgKi9cclxuICAgIHNraXBJbnZhbGlkRWxlbWVudHMoc2tpcEludmFsaWRFbGVtZW50cyA9IHRydWUpOiB0aGlzIHtcclxuICAgICAgICB0aGlzLnNraXBJbnZhbGlkRWxlbWVudHNQcm9wID0gc2tpcEludmFsaWRFbGVtZW50cztcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMubWFrZUNvcHkoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKiogRmlsdGVyIHJlc3VsdCBoYXNoIGJ5IGFwcGx5aW5nIHByZWRpY2F0ZSB0byBlYWNoIGhhc2ggaXRlbSBhbmQgaW5jbHVkZSBvbmx5IGl0ZW1zIHBhc3NlZCB0aGUgdGVzdC4gKi9cclxuICAgIGZpbHRlcihwcmVkaWNhdGU6IChrZXk6IHN0cmluZywgdmFsdWU/OiBURWxlbWVudCkgPT4gYm9vbGVhbik6IHRoaXMge1xyXG4gICAgICAgIGlmICghcHJlZGljYXRlKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlByZWRpY2F0ZSBpcyByZXF1aXJlZC5cIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmZpbHRlckhhc2hGbiA9IHByZWRpY2F0ZTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMubWFrZUNvcHkoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG1ha2VDb3B5KCk6IHRoaXMge1xyXG4gICAgICAgIHJldHVybiB0aGlzLndpdGhNYWluUnVsZShcclxuICAgICAgICAgICAgbmV3IEhhc2hWYWxpZGF0aW9uUnVsZTxURWxlbWVudD4oXHJcbiAgICAgICAgICAgICAgICB0aGlzLmVsZW1lbnRWYWxpZGF0aW9uUnVsZSxcclxuICAgICAgICAgICAgICAgIHRoaXMuc2tpcEludmFsaWRFbGVtZW50c1Byb3AsXHJcbiAgICAgICAgICAgICAgICB0aGlzLmZpbHRlckhhc2hGbixcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RvcE9uTWFpblJ1bGVGYWlsdXJlKSk7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG4vKipcclxuICogVmFsaWRhdGVzIGEgbWFwIG9mIG9iamVjdHMgd2l0aCB0aGUgc2FtZSBzdHJ1Y3R1cmUuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gaGFzaDxURWxlbWVudD4oZWxlbWVudFZhbGlkYXRpb25SdWxlOiBWYWxpZGF0aW9uUnVsZTxURWxlbWVudD4sIHN0b3BPbkZhaWx1cmUgPSB0cnVlKTogSGFzaFZhbGlkYXRpb25SdWxlPFRFbGVtZW50PiB7XHJcbiAgICBpZiAoIWVsZW1lbnRWYWxpZGF0aW9uUnVsZSkge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkVsZW1lbnQgdmFsaWRhdGlvbiBydWxlIGlzIHJlcXVpcmVkLlwiKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gbmV3IEhhc2hWYWxpZGF0aW9uUnVsZTxURWxlbWVudD4oZWxlbWVudFZhbGlkYXRpb25SdWxlLCBmYWxzZSwgbnVsbCwgc3RvcE9uRmFpbHVyZSk7XHJcbn1cclxuXHJcbiJdfQ==

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var rules_base_1 = __webpack_require__(15);
	var ArrayValidationRuleCore = (function () {
	    function ArrayValidationRuleCore(elementValidationRule, skipInvalidElements, filterElementFn, stopOnFailure) {
	        this.elementValidationRule = elementValidationRule;
	        this.skipInvalidElements = skipInvalidElements;
	        this.filterElementFn = filterElementFn;
	        this.stopOnFailure = stopOnFailure;
	        if (!elementValidationRule) {
	            throw new Error("Element validator is required.");
	        }
	    }
	    ArrayValidationRuleCore.prototype.runParse = function (array, validatingObject, rootObject) {
	        var _this = this;
	        if (array === null || array === undefined) {
	            return array;
	        }
	        // We don't filter array elements here because we need to keep source indexes in validation context errors.
	        return array.map(function (e) { return _this.elementValidationRule.runParse(e, array, rootObject); });
	    };
	    ArrayValidationRuleCore.prototype.runValidate = function (context, doneCallback, array, validatingObject, rootObject) {
	        var _this = this;
	        if (array === null || array === undefined) {
	            doneCallback(true);
	            return;
	        }
	        var srcIndex = 0;
	        var srcLength = array.length;
	        var index = 0;
	        var valid = true;
	        var run = function () {
	            if (srcIndex < srcLength) {
	                var element = array[index];
	                if (_this.filterElementFn && !_this.filterElementFn(element, srcIndex)) {
	                    array.splice(index, 1);
	                    srcIndex++;
	                    run();
	                }
	                else {
	                    var elementContext_1 = context.index(srcIndex).bufferErrors();
	                    _this.elementValidationRule.runValidate(elementContext_1, function (success) {
	                        if (_this.skipInvalidElements) {
	                            if (!success) {
	                                array.splice(index, 1);
	                            }
	                            else {
	                                index++;
	                            }
	                        }
	                        else {
	                            elementContext_1.flushErrors();
	                            valid = valid && success;
	                            index++;
	                        }
	                        srcIndex++;
	                        run();
	                    }, element, array, rootObject);
	                }
	            }
	            else {
	                doneCallback(valid);
	            }
	        };
	        run();
	    };
	    return ArrayValidationRuleCore;
	}());
	exports.ArrayValidationRuleCore = ArrayValidationRuleCore;
	var ArrayValidationRule = (function (_super) {
	    __extends(ArrayValidationRule, _super);
	    function ArrayValidationRule(elementValidationRule, skipInvalidElementsProp, filterElementFn, stopOnMainRuleFailure) {
	        _super.call(this, new ArrayValidationRuleCore(elementValidationRule, skipInvalidElementsProp, filterElementFn, stopOnMainRuleFailure));
	        this.elementValidationRule = elementValidationRule;
	        this.skipInvalidElementsProp = skipInvalidElementsProp;
	        this.filterElementFn = filterElementFn;
	        this.stopOnMainRuleFailure = stopOnMainRuleFailure;
	    }
	    ArrayValidationRule.prototype.clone = function () {
	        return new ArrayValidationRule(this.elementValidationRule, this.skipInvalidElementsProp, this.filterElementFn, this.stopOnMainRuleFailure);
	    };
	    /**
	     * Don't fail on invalid element. Instead don't include invalid elements in result array.
	     * Note new rule never fails instead it returns empty array.
	     */
	    ArrayValidationRule.prototype.skipInvalidElements = function (skipInvalidElements) {
	        if (skipInvalidElements === void 0) { skipInvalidElements = true; }
	        this.skipInvalidElementsProp = skipInvalidElements;
	        return this.makeCopy();
	    };
	    /** Filter result array by applying predicate to each hash item and include only items passed the test. */
	    ArrayValidationRule.prototype.filter = function (predicate) {
	        if (!predicate) {
	            throw new Error("Predicate is required.");
	        }
	        this.filterElementFn = predicate;
	        return this.makeCopy();
	    };
	    ArrayValidationRule.prototype.makeCopy = function () {
	        return this.withMainRule(new ArrayValidationRule(this.elementValidationRule, this.skipInvalidElementsProp, this.filterElementFn, this.stopOnMainRuleFailure));
	    };
	    return ArrayValidationRule;
	}(rules_base_1.EnclosingValidationRuleBase));
	exports.ArrayValidationRule = ArrayValidationRule;
	/** Validates an array of the elements with the same structure. */
	function arr(elementValidationRule, stopOnFailure) {
	    if (stopOnFailure === void 0) { stopOnFailure = true; }
	    if (!elementValidationRule) {
	        throw new Error("Element validation rule is required.");
	    }
	    return new ArrayValidationRule(elementValidationRule, false, null, stopOnFailure);
	}
	exports.arr = arr;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXJyYXktcnVsZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhcnJheS1ydWxlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFDQSwyQkFBNEMsY0FBYyxDQUFDLENBQUE7QUFHM0Q7SUFFSSxpQ0FDWSxxQkFBK0MsRUFDL0MsbUJBQTRCLEVBQzVCLGVBQStELEVBQ2hFLGFBQXNCO1FBSHJCLDBCQUFxQixHQUFyQixxQkFBcUIsQ0FBMEI7UUFDL0Msd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFTO1FBQzVCLG9CQUFlLEdBQWYsZUFBZSxDQUFnRDtRQUNoRSxrQkFBYSxHQUFiLGFBQWEsQ0FBUztRQUU3QixFQUFFLENBQUMsQ0FBQyxDQUFDLHFCQUFxQixDQUFDLENBQUMsQ0FBQztZQUN6QixNQUFNLElBQUksS0FBSyxDQUFDLGdDQUFnQyxDQUFDLENBQUM7UUFDdEQsQ0FBQztJQUNMLENBQUM7SUFFRCwwQ0FBUSxHQUFSLFVBQVMsS0FBWSxFQUFFLGdCQUFzQixFQUFFLFVBQWdCO1FBQS9ELGlCQU1DO1FBTEcsRUFBRSxDQUFDLENBQUMsS0FBSyxLQUFLLElBQUksSUFBSSxLQUFLLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQztZQUN4QyxNQUFNLENBQUMsS0FBSyxDQUFDO1FBQ2pCLENBQUM7UUFDRCwyR0FBMkc7UUFDM0csTUFBTSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxLQUFJLENBQUMscUJBQXFCLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxLQUFLLEVBQUUsVUFBVSxDQUFDLEVBQXpELENBQXlELENBQUMsQ0FBQztJQUNyRixDQUFDO0lBRUQsNkNBQVcsR0FBWCxVQUNJLE9BQTJCLEVBQzNCLFlBQXdDLEVBQ3hDLEtBQVksRUFDWixnQkFBc0IsRUFDdEIsVUFBZ0I7UUFMcEIsaUJBZ0VDO1FBekRHLEVBQUUsQ0FBQyxDQUFDLEtBQUssS0FBSyxJQUFJLElBQUksS0FBSyxLQUFLLFNB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Q29udGVudCI6WyJpbXBvcnQgeyBWYWxpZGF0aW9uUnVsZSwgSVZhbGlkYXRpb25Db250ZXh0IH0gZnJvbSBcIi4uL2RlZmluaXRpb25zXCI7XHJcbmltcG9ydCB7IEVuY2xvc2luZ1ZhbGlkYXRpb25SdWxlQmFzZSB9IGZyb20gXCIuL3J1bGVzLWJhc2VcIjtcclxuXHJcblxyXG5leHBvcnQgY2xhc3MgQXJyYXlWYWxpZGF0aW9uUnVsZUNvcmU8VEVsZW1lbnQ+IGltcGxlbWVudHMgVmFsaWRhdGlvblJ1bGU8VEVsZW1lbnRbXT4ge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHByaXZhdGUgZWxlbWVudFZhbGlkYXRpb25SdWxlOiBWYWxpZGF0aW9uUnVsZTxURWxlbWVudD4sXHJcbiAgICAgICAgcHJpdmF0ZSBza2lwSW52YWxpZEVsZW1lbnRzOiBib29sZWFuLFxyXG4gICAgICAgIHByaXZhdGUgZmlsdGVyRWxlbWVudEZuOiAoZWxlbWVudDogVEVsZW1lbnQsIGluZGV4PzogbnVtYmVyKSA9PiBib29sZWFuLFxyXG4gICAgICAgIHB1YmxpYyBzdG9wT25GYWlsdXJlOiBib29sZWFuKSB7XHJcblxyXG4gICAgICAgIGlmICghZWxlbWVudFZhbGlkYXRpb25SdWxlKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkVsZW1lbnQgdmFsaWRhdG9yIGlzIHJlcXVpcmVkLlwiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcnVuUGFyc2UoYXJyYXk6IGFueVtdLCB2YWxpZGF0aW5nT2JqZWN0PzogYW55LCByb290T2JqZWN0PzogYW55KTogVEVsZW1lbnRbXSB7XHJcbiAgICAgICAgaWYgKGFycmF5ID09PSBudWxsIHx8IGFycmF5ID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGFycmF5O1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBXZSBkb24ndCBmaWx0ZXIgYXJyYXkgZWxlbWVudHMgaGVyZSBiZWNhdXNlIHdlIG5lZWQgdG8ga2VlcCBzb3VyY2UgaW5kZXhlcyBpbiB2YWxpZGF0aW9uIGNvbnRleHQgZXJyb3JzLlxyXG4gICAgICAgIHJldHVybiBhcnJheS5tYXAoZSA9PiB0aGlzLmVsZW1lbnRWYWxpZGF0aW9uUnVsZS5ydW5QYXJzZShlLCBhcnJheSwgcm9vdE9iamVjdCkpO1xyXG4gICAgfVxyXG5cclxuICAgIHJ1blZhbGlkYXRlKFxyXG4gICAgICAgIGNvbnRleHQ6IElWYWxpZGF0aW9uQ29udGV4dCxcclxuICAgICAgICBkb25lQ2FsbGJhY2s6IChzdWNjZXNzOiBib29sZWFuKSA9PiB2b2lkLFxyXG4gICAgICAgIGFycmF5OiBhbnlbXSxcclxuICAgICAgICB2YWxpZGF0aW5nT2JqZWN0PzogYW55LFxyXG4gICAgICAgIHJvb3RPYmplY3Q/OiBhbnkpOiB2b2lkIHtcclxuXHJcbiAgICAgICAgaWYgKGFycmF5ID09PSBudWxsIHx8IGFycmF5ID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgZG9uZUNhbGxiYWNrKHRydWUpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgc3JjSW5kZXggPSAwO1xyXG4gICAgICAgIGxldCBzcmNMZW5ndGggPSBhcnJheS5sZW5ndGg7XHJcbiAgICAgICAgbGV0IGluZGV4ID0gMDtcclxuXHJcbiAgICAgICAgbGV0IHZhbGlkID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgY29uc3QgcnVuID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoc3JjSW5kZXggPCBzcmNMZW5ndGgpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gYXJyYXlbaW5kZXhdO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmZpbHRlckVsZW1lbnRGbiAmJiAhdGhpcy5maWx0ZXJFbGVtZW50Rm4oZWxlbWVudCwgc3JjSW5kZXgpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYXJyYXkuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICAgICAgICAgICAgICBzcmNJbmRleCsrO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBydW4oKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGVsZW1lbnRDb250ZXh0ID0gY29udGV4dC5pbmRleChzcmNJbmRleCkuYnVmZmVyRXJyb3JzKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZWxlbWVudFZhbGlkYXRpb25SdWxlLnJ1blZhbGlkYXRlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50Q29udGV4dCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2VzcyA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5za2lwSW52YWxpZEVsZW1lbnRzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFzdWNjZXNzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFycmF5LnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmRleCsrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnRDb250ZXh0LmZsdXNoRXJyb3JzKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkID0gdmFsaWQgJiYgc3VjY2VzcztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmRleCsrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyY0luZGV4Kys7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBydW4oKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXJyYXksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvb3RPYmplY3QpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgZG9uZUNhbGxiYWNrKHZhbGlkKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcnVuKCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBBcnJheVZhbGlkYXRpb25SdWxlPFRFbGVtZW50PiBleHRlbmRzIEVuY2xvc2luZ1ZhbGlkYXRpb25SdWxlQmFzZTxURWxlbWVudFtdPiB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHJpdmF0ZSBlbGVtZW50VmFsaWRhdGlvblJ1bGU6IFZhbGlkYXRpb25SdWxlPFRFbGVtZW50PixcclxuICAgICAgICBwcml2YXRlIHNraXBJbnZhbGlkRWxlbWVudHNQcm9wOiBib29sZWFuLFxyXG4gICAgICAgIHByaXZhdGUgZmlsdGVyRWxlbWVudEZuOiAoZWxlbWVudDogVEVsZW1lbnQsIGluZGV4PzogbnVtYmVyKSA9PiBib29sZWFuLFxyXG4gICAgICAgIHByaXZhdGUgc3RvcE9uTWFpblJ1bGVGYWlsdXJlKSB7XHJcblxyXG4gICAgICAgIHN1cGVyKG5ldyBBcnJheVZhbGlkYXRpb25SdWxlQ29yZTxURWxlbWVudD4oXHJcbiAgICAgICAgICAgIGVsZW1lbnRWYWxpZGF0aW9uUnVsZSxcclxuICAgICAgICAgICAgc2tpcEludmFsaWRFbGVtZW50c1Byb3AsXHJcbiAgICAgICAgICAgIGZpbHRlckVsZW1lbnRGbixcclxuICAgICAgICAgICAgc3RvcE9uTWFpblJ1bGVGYWlsdXJlKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIGNsb25lKCk6IHRoaXMge1xyXG4gICAgICAgIHJldHVybiA8dGhpcz5uZXcgQXJyYXlWYWxpZGF0aW9uUnVsZTxURWxlbWVudD4oXHJcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudFZhbGlkYXRpb25SdWxlLFxyXG4gICAgICAgICAgICB0aGlzLnNraXBJbnZhbGlkRWxlbWVudHNQcm9wLFxyXG4gICAgICAgICAgICB0aGlzLmZpbHRlckVsZW1lbnRGbixcclxuICAgICAgICAgICAgdGhpcy5zdG9wT25NYWluUnVsZUZhaWx1cmUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogRG9uJ3QgZmFpbCBvbiBpbnZhbGlkIGVsZW1lbnQuIEluc3RlYWQgZG9uJ3QgaW5jbHVkZSBpbnZhbGlkIGVsZW1lbnRzIGluIHJlc3VsdCBhcnJheS5cclxuICAgICAqIE5vdGUgbmV3IHJ1bGUgbmV2ZXIgZmFpbHMgaW5zdGVhZCBpdCByZXR1cm5zIGVtcHR5IGFycmF5LlxyXG4gICAgICovXHJcbiAgICBza2lwSW52YWxpZEVsZW1lbnRzKHNraXBJbnZhbGlkRWxlbWVudHMgPSB0cnVlKTogdGhpcyB7XHJcbiAgICAgICAgdGhpcy5za2lwSW52YWxpZEVsZW1lbnRzUHJvcCA9IHNraXBJbnZhbGlkRWxlbWVudHM7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLm1ha2VDb3B5KCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIEZpbHRlciByZXN1bHQgYXJyYXkgYnkgYXBwbHlpbmcgcHJlZGljYXRlIHRvIGVhY2ggaGFzaCBpdGVtIGFuZCBpbmNsdWRlIG9ubHkgaXRlbXMgcGFzc2VkIHRoZSB0ZXN0LiAqL1xyXG4gICAgZmlsdGVyKHByZWRpY2F0ZTogKGVsZW1lbnQ6IFRFbGVtZW50LCBpbmRleD86IG51bWJlcikgPT4gYm9vbGVhbik6IHRoaXMge1xyXG4gICAgICAgIGlmICghcHJlZGljYXRlKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlByZWRpY2F0ZSBpcyByZXF1aXJlZC5cIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmZpbHRlckVsZW1lbnRGbiA9IHByZWRpY2F0ZTtcclxuICAgICAgICByZXR1cm4gdGhpcy5tYWtlQ29weSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgbWFrZUNvcHkoKTogdGhpcyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMud2l0aE1haW5SdWxlKG5ldyBBcnJheVZhbGlkYXRpb25SdWxlPFRFbGVtZW50PihcclxuICAgICAgICAgICAgdGhpcy5lbGVtZW50VmFsaWRhdGlvblJ1bGUsXHJcbiAgICAgICAgICAgIHRoaXMuc2tpcEludmFsaWRFbGVtZW50c1Byb3AsXHJcbiAgICAgICAgICAgIHRoaXMuZmlsdGVyRWxlbWVudEZuLFxyXG4gICAgICAgICAgICB0aGlzLnN0b3BPbk1haW5SdWxlRmFpbHVyZSkpO1xyXG4gICAgfVxyXG59XHJcblxyXG4vKiogVmFsaWRhdGVzIGFuIGFycmF5IG9mIHRoZSBlbGVtZW50cyB3aXRoIHRoZSBzYW1lIHN0cnVjdHVyZS4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGFycjxURWxlbWVudD4oZWxlbWVudFZhbGlkYXRpb25SdWxlOiBWYWxpZGF0aW9uUnVsZTxURWxlbWVudD4sIHN0b3BPbkZhaWx1cmUgPSB0cnVlKTogQXJyYXlWYWxpZGF0aW9uUnVsZTxURWxlbWVudD4ge1xyXG4gICAgaWYgKCFlbGVtZW50VmFsaWRhdGlvblJ1bGUpIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJFbGVtZW50IHZhbGlkYXRpb24gcnVsZSBpcyByZXF1aXJlZC5cIik7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIG5ldyBBcnJheVZhbGlkYXRpb25SdWxlPFRFbGVtZW50PihcclxuICAgICAgICBlbGVtZW50VmFsaWRhdGlvblJ1bGUsXHJcbiAgICAgICAgZmFsc2UsXHJcbiAgICAgICAgbnVsbCxcclxuICAgICAgICBzdG9wT25GYWlsdXJlKTtcclxufVxyXG4iXX0=

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
	    MongoProductStorage.prototype.findByTitle = function (title) {
	        if (!title)
	            return Promise.reject("Title is empty");
	        return this.db
	            .collection(db_1.default.Collections.products)
	            .then(function (c) { return c.find({ title: title }, { _id: 0 }); })
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9uZ28tcHJvZHVjdC1zdG9yYWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibW9uZ28tcHJvZHVjdC1zdG9yYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGlEQUFpRDs7QUFFakQsbUJBQXFCLHNCQUFzQixDQUFDLENBQUE7QUFFNUM7SUFDSSw2QkFBb0IsRUFBWTtRQUFaLE9BQUUsR0FBRixFQUFFLENBQVU7UUFDNUIsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7WUFDSixNQUFNLElBQUksS0FBSyxDQUFDLGVBQWUsQ0FBQyxDQUFDO0lBQ3pDLENBQUM7SUFFRCxpQ0FBRyxHQUFIO1FBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFO2FBQ1QsVUFBVSxDQUFDLFlBQVEsQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDO2FBQ3pDLElBQUksQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQXRCLENBQXNCLENBQUM7YUFDakMsSUFBSSxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxDQUFDLE9BQU8sRUFBRSxFQUFYLENBQVcsQ0FBQyxDQUFDO0lBQ2hDLENBQUM7SUFFRCxpQ0FBRyxHQUFILFVBQUksRUFBVTtRQUNWLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO1lBQ0osTUFBTSxJQUFJLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBRXZDLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRTthQUNULFVBQVUsQ0FBQyxZQUFRLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQzthQUN6QyxJQUFJLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQTlCLENBQThC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SSxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsS0FBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsRUFBbkIsQ0FBbUIsQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUFDTCwwQkFBQztBQUFELENBQUMsQUFsRkQsSUFrRkM7QUFsRkQ7cUNBa0ZDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vdHlwaW5ncy9pbmRleC5kLnRzXCIgLz5cclxuXHJcbmltcG9ydCBEYXRhYmFzZSBmcm9tIFwiLi4vLi4vZGF0YS1hY2Nlc3MvZGJcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1vbmdvUHJvZHVjdFN0b3JhZ2UgaW1wbGVtZW50cyBQcm9kdWN0cy5JUHJvZHVjdFN0b3JhZ2Uge1xyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBkYjogRGF0YWJhc2UpIHtcclxuICAgICAgICBpZiAoIWRiKVxyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJkYiBpcyBtaXNzaW5nXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIGFsbCgpOiBQcm9taXNlPEFwaS5Qcm9kdWN0W10+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5kYlxyXG4gICAgICAgICAgICAuY29sbGVjdGlvbihEYXRhYmFzZS5Db2xsZWN0aW9ucy5wcm9kdWN0cylcclxuICAgICAgICAgICAgLnRoZW4oYyA9PiBjLmZpbmQoe30sIHsgX2lkOiAwIH0pKVxyXG4gICAgICAgICAgICAudGhlbihjID0+IGMudG9BcnJheSgpKTtcclxuICAgIH1cclxuXHJcbiAgICBvbmUoaWQ6IHN0cmluZyk6IFByb21pc2U8QXBpLlByb2R1Y3Q+IHtcclxuICAgICAgICBpZiAoIWlkKVxyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJpZCBpcyB1bmRlZmluZWRcIik7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLmRiXHJcbiAgICAgICAgICAgIC5jb2xsZWN0aW9uKERhdGFiYXNlLkNvbGxlY3Rpb25zLnByb2R1Y3RzKVxyXG4gICAgICAgICAgICAudGhlbihjID0+IGMuZmluZCh7IGlkOiBpZCB9LCB7IF9pZDogMCB9KSlcclxuICAgICAgICAgICAgLnRoZW4oYyA9PiBjLmxpbWl0KDEpKVxyXG4gICAgICAgICAgICAudGhlbihjID0+IGMubmV4dCgpKTtcclxuICAgIH1cclxuXHJcbiAgICBmaW5kQnlUaXRsZSh0aXRsZTogc3RyaW5nKTogUHJvbWlzZTxBcGkuUHJvZHVjdD4ge1xyXG4gICAgICAgIGlmICghdGl0bGUpXHJcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChcIlRpdGxlIGlzIGVtcHR5XCIpO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5kYlxyXG4gICAgICAgICAgICAuY29sbGVjdGlvbihEYXRhYmFzZS5Db2xsZWN0aW9ucy5wcm9kdWN0cylcclxuICAgICAgICAgICAgLnRoZW4oYyA9PiBjLmZpbmQoeyB0aXRsZSB9LCB7IF9pZDogMCB9KSlcclxuICAgICAgICAgICAgLnRoZW4oYyA9PiBjLmxpbWl0KDEpKVxyXG4gICAgICAgICAgICAudGhlbihjID0+IGMubmV4dCgpKTtcclxuICAgIH1cclxuXHJcbiAgICBzYXZlKHByb2R1Y3Q6IEFwaS5Qcm9kdWN0KTogUHJvbWlzZTxBcGkuUHJvZHVjdD4ge1xyXG4gICAgICAgIGlmICghcHJvZHVjdClcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwicHJvZHVjdCBpcyB1bmRlZmluZWRcIik7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLmRiXHJcbiAgICAgICAgICAgIC5jb2xsZWN0aW9uKERhdGFiYXNlLkNvbGxlY3Rpb25zLnByb2R1Y3RzKVxyXG4gICAgICAgICAgICAudGhlbihjID0+IGMudXBkYXRlT25lKHtcclxuICAgICAgICAgICAgICAgIGlkOiBwcm9kdWN0LmlkXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgJHNldDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZDogcHJvZHVjdC5pZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IHByb2R1Y3QudGl0bGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjcmFwaW5nVXJsczogcHJvZHVjdC5zY3JhcGluZ1VybHNcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHVwc2VydDogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgfSkpXHJcbiAgICAgICAgICAgIC50aGVuKCgpID0+IHByb2R1Y3QpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldFNjcmFwaW5nRGF0YShwcm9kdWN0SWQ6IHN0cmluZywgd2ViU2hvcElkOiBzdHJpbmcsIHZhbHVlczogQXBpLlNjcmFwZWRWYWx1ZXMsIGxvZzogQXBpLlNjcmFwZUxvZyk6IFByb21pc2U8QXBpLlByb2R1Y3Q+IHtcclxuICAgICAgICBpZiAoIXByb2R1Y3RJZClcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwicHJvZHVjdElkIGlzIHVuZGVmaW5lZFwiKTtcclxuICAgICAgICBpZiAoIXdlYlNob3BJZClcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwid2ViU2hvcElkIGlzIHVuZGVmaW5lZFwiKTtcclxuICAgICAgICBpZiAoIXZhbHVlcylcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwidmFsdWVzIGlzIHVuZGVmaW5lZFwiKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZGJcclxuICAgICAgICAgICAgLmNvbGxlY3Rpb24oRGF0YWJhc2UuQ29sbGVjdGlvbnMucHJvZHVjdHMpXHJcbiAgICAgICAgICAgIC50aGVuKGMgPT4gYy51cGRhdGVPbmUoXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWQ6IHByb2R1Y3RJZFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAkc2V0OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtgdmFsdWVzLiR7d2ViU2hvcElkfWBdOiB2YWx1ZXMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtgbG9nLiR7d2ViU2hvcElkfWBdOiBsb2dcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHVwc2VydDogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgfSkpXHJcbiAgICAgICAgICAgIC50aGVuKHIgPT4gdGhpcy5vbmUocHJvZHVjdElkKSk7XHJcbiAgICB9XHJcbn0iXX0=

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
	        return this.validator
	            .validate(product)
	            .then(function (product) {
	            return _this.storage
	                .findByTitle(product.title)
	                .then(function (found) {
	                if (found && found.id !== product.id) {
	                    throw {
	                        "title": ["Product with such title already exists"]
	                    };
	                }
	            })
	                .then(function () { return _this.storage.save(product); })
	                .then(function () { return _this.one(product.id); })
	                .then(function (product) {
	                event_bus_1.eventBus.emit(event_bus_1.EventNames.ProductUpdated, product.id);
	                return product;
	            });
	        });
	    };
	    ProductService.prototype.one = function (productId) {
	        if (!productId)
	            throw new Error("productId is undefined");
	        return this.storage.one(productId);
	    };
	    ProductService.prototype.findByTitle = function (title) {
	        return this.storage.findByTitle(title);
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicHJvZHVjdC1zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGlEQUFpRDs7QUFFakQsSUFBWSxNQUFNLFdBQU0sUUFBUSxDQUFDLENBQUE7QUFDakMsSUFBWSxJQUFJLFdBQU0sV0FBVyxDQUFDLENBQUE7QUFFbEMsMEJBQXFDLGNBQWMsQ0FBQyxDQUFBO0FBRXBELGtDQUE2QixxQkFBcUIsQ0FBQyxDQUFBO0FBRW5EO0lBR0ksd0JBQW9CLE9BQWlDO1FBQWpDLFlBQU8sR0FBUCxPQUFPLENBQTBCO1FBRjdDLGNBQVMsR0FBRyxJQUFJLDJCQUFnQixFQUFFLENBQUM7UUFHdkMsRUFBRSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUM7WUFDVCxNQUFNLElBQUksS0FBSyxDQUFDLHNCQUFzQixDQUFDLENBQUM7SUFDaEQsQ0FBQztJQUVELDRCQUFHLEdBQUg7UUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsQ0FBQztJQUM5QixDQUFDO0lBRUQsNkJBQUksR0FBSixVQUFLLE9BQW9CO1FBQXpCLGlCQTBCQztRQXpCRyxFQUFFLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQztZQUNULE1BQU0sSUFBSSxLQUFLLENBQUMsc0JBQXNCLENBQUMsQ0FBQztRQUU1QyxFQUFFLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUM7WUFDWixPQUFPLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxFQUFFLEVBQUUsQ0FBQztRQUUzQixNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVM7YUFDaEIsUUFBUSxDQUFDLE9BQU8sQ0FBQzthQUNqQixJQUFJLENBQUMsVUFBQSxPQUFPO1lBQ1QsTUFBTSxDQUFDLEtBQUksQ0FBQyxPQUFPO2lCQUNkLFdBQVcsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDO2lCQUMxQixJQUFJLENBQUMsVUFBQSxLQUFL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QUcsT0FBTyxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUMxQyxHQUFHLENBQUMsU0FBUyxHQUFHLEdBQUcsQ0FBQztZQUNwQixHQUFHLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7WUFFdkIsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO2lCQUNuQixPQUFPLENBQUMsVUFBQSxJQUFJO2dCQUNULElBQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBRWhDLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUM7b0JBQ25CLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDO2dCQUUvQixHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHO29CQUNmLFNBQVMsRUFBRSxHQUFHO29CQUNkLEtBQUssRUFBRSxLQUFLLENBQUMsS0FBSztpQkFDckIsQ0FBQztZQUNOLENBQUMsQ0FBQyxDQUFDO1lBRVAsTUFBTSxDQUFDLEtBQUksQ0FBQyxPQUFPLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQyxFQUFFLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxHQUFHLENBQUMsQ0FBQztRQUM1RSxDQUFDLENBQUMsQ0FBQztJQUNYLENBQUM7SUFDTCxxQkFBQztBQUFELENBQUMsQUF6R0QsSUF5R0M7QUF6R0Q7Z0NBeUdDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vdHlwaW5ncy9pbmRleC5kLnRzXCIgLz5cclxuXHJcbmltcG9ydCAqIGFzIG1vbWVudCBmcm9tIFwibW9tZW50XCI7XHJcbmltcG9ydCAqIGFzIHV1aWQgZnJvbSBcIm5vZGUtdXVpZFwiO1xyXG5cclxuaW1wb3J0IHsgZXZlbnRCdXMsIEV2ZW50TmFtZXMgfSBmcm9tIFwiLi4vZXZlbnQtYnVzXCI7XHJcblxyXG5pbXBvcnQgUHJvZHVjdFZhbGlkYXRvciBmcm9tIFwiLi9wcm9kdWN0LXZhbGlkYXRvclwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvZHVjdFNlcnZpY2Uge1xyXG4gICAgcHJpdmF0ZSB2YWxpZGF0b3IgPSBuZXcgUHJvZHVjdFZhbGlkYXRvcigpO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgc3RvcmFnZTogUHJvZHVjdHMuSVByb2R1Y3RTdG9yYWdlKSB7XHJcbiAgICAgICAgaWYgKCFzdG9yYWdlKVxyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJzdG9yYWdlIGlzIHVuZGVmaW5lZFwiKTtcclxuICAgIH1cclxuXHJcbiAgICBhbGwoKTogUHJvbWlzZTxBcGkuUHJvZHVjdFtdPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RvcmFnZS5hbGwoKTtcclxuICAgIH1cclxuXHJcbiAgICBzYXZlKHByb2R1Y3Q6IEFwaS5Qcm9kdWN0KTogUHJvbWlzZTxBcGkuUHJvZHVjdD4ge1xyXG4gICAgICAgIGlmICghcHJvZHVjdClcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwicHJvZHVjdCBpcyB1bmRlZmluZWRcIik7XHJcblxyXG4gICAgICAgIGlmICghcHJvZHVjdC5pZClcclxuICAgICAgICAgICAgcHJvZHVjdC5pZCA9IHV1aWQudjEoKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMudmFsaWRhdG9yXHJcbiAgICAgICAgICAgIC52YWxpZGF0ZShwcm9kdWN0KVxyXG4gICAgICAgICAgICAudGhlbihwcm9kdWN0ID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnN0b3JhZ2VcclxuICAgICAgICAgICAgICAgICAgICAuZmluZEJ5VGl0bGUocHJvZHVjdC50aXRsZSlcclxuICAgICAgICAgICAgICAgICAgICAudGhlbihmb3VuZCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChmb3VuZCAmJiBmb3VuZC5pZCAhPT0gcHJvZHVjdC5pZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidGl0bGVcIjogW1wiUHJvZHVjdCB3aXRoIHN1Y2ggdGl0bGUgYWxyZWFkeSBleGlzdHNcIl1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKCgpID0+IHRoaXMuc3RvcmFnZS5zYXZlKHByb2R1Y3QpKVxyXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKCgpID0+IHRoaXMub25lKHByb2R1Y3QuaWQpKVxyXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKHByb2R1Y3QgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBldmVudEJ1cy5lbWl0KEV2ZW50TmFtZXMuUHJvZHVjdFVwZGF0ZWQsIHByb2R1Y3QuaWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcHJvZHVjdDtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7ICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBvbmUocHJvZHVjdElkOiBzdHJpbmcpOiBQcm9taXNlPEFwaS5Qcm9kdWN0PiB7XHJcbiAgICAgICAgaWYgKCFwcm9kdWN0SWQpXHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcInByb2R1Y3RJZCBpcyB1bmRlZmluZWRcIik7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLnN0b3JhZ2Uub25lKHByb2R1Y3RJZCk7XHJcbiAgICB9XHJcblxyXG4gICAgZmluZEJ5VGl0bGUodGl0bGU6IHN0cmluZyk6IFByb21pc2U8QXBpLlByb2R1Y3Q+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zdG9yYWdlLmZpbmRCeVRpdGxlKHRpdGxlKTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVTY3JhcGVkRGF0YShwcm9kdWN0SWQ6IHN0cmluZywgd2Vic2hvcElkOiBzdHJpbmcsIGRhdGE6IFNjcmFwaW5nLldlYlNob3BTY3JhcGluZ1Jlc3VsdCk6IFByb21pc2U8QXBpLlByb2R1Y3Q+IHtcclxuICAgICAgICBpZiAoIXByb2R1Y3RJZClcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwicHJvZHVjdElkIGlzIHVuZGVmaW5lZFwiKTtcclxuICAgICAgICBpZiAoIXdlYnNob3BJZClcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwid2ViU2hvcElkIGlzIHVuZGVmaW5lZFwiKTtcclxuICAgICAgICBpZiAoIWRhdGEpXHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcImRhdGEgaXMgdW5kZWZpbmVkXCIpO1xyXG4gICAgICAgIGNvbnN0IG5vdyA9IG1vbWVudC51dGMoKS50b0RhdGUoKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMub25lKHByb2R1Y3RJZClcclxuICAgICAgICAgICAgLnRoZW4ocHJvZHVjdCA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXByb2R1Y3QudmFsdWVzKVxyXG4gICAgICAgICAgICAgICAgICAgIHByb2R1Y3QudmFsdWVzID0ge307XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgdmFsdWVzID0gcHJvZHVjdC52YWx1ZXNbd2Vic2hvcElkXSB8fFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByaWNlOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbWFnZTogbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICBwcm9kdWN0LnZhbHVlc1t3ZWJzaG9wSWRdID0gdmFsdWVzO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICghcHJvZHVjdC5sb2cpXHJcbiAgICAgICAgICAgICAgICAgICAgcHJvZHVjdC5sb2cgPSB7fTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBsb2cgPSBwcm9kdWN0LmxvZ1t3ZWJzaG9wSWRdIHx8XHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB1cmw6IG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjcmFwZWRBdDogbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3I6IGRhdGEuZXJyb3IsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlczoge31cclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgcHJvZHVjdC5sb2dbd2Vic2hvcElkXSA9IGxvZztcclxuXHJcbiAgICAgICAgICAgICAgICBsb2cudXJsID0gcHJvZHVjdC5zY3JhcGluZ1VybHNbd2Vic2hvcElkXTtcclxuICAgICAgICAgICAgICAgIGxvZy5zY3JhcGVkQXQgPSBub3c7XHJcbiAgICAgICAgICAgICAgICBsb2cuZXJyb3IgPSBkYXRhLmVycm9yO1xyXG5cclxuICAgICAgICAgICAgICAgIE9iamVjdC5rZXlzKGRhdGEudmFsdWVzKVxyXG4gICAgICAgICAgICAgICAgICAgIC5mb3JFYWNoKG5hbWUgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZSA9IGRhdGEudmFsdWVzW25hbWVdO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZhbHVlLmlzU3VjY2Vzc2Z1bClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlc1tuYW1lXSA9IHZhbHVlLnZhbHVlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgbG9nLnZhbHVlc1tuYW1lXSA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjcmFwZWRBdDogbm93LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3I6IHZhbHVlLmVycm9yXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuc3RvcmFnZS5zZXRTY3JhcGluZ0RhdGEocHJvZHVjdC5pZCwgd2Vic2hvcElkLCB2YWx1ZXMsIGxvZyk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG59Il19

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
	var validator_1 = __webpack_require__(10);
	var ProductValidator = (function () {
	    function ProductValidator() {
	        this.validator = validator_1.rules.obj({
	            id: validator_1.rules.str().notEmpty({ errorMessage: "Product ID is required" }),
	            title: validator_1.rules.str()
	                .notEmpty({ errorMessage: "Product title is required" })
	                .must(function (t) { return t.length < 1024; }, { errorMessage: "Product title too long" }),
	            scrapingUrls: validator_1.rules.hash(validator_1.rules.str().must(function (url) { return !url || (url.indexOf("http://") === 0 || url.indexOf("https://") === 0); }, { errorMessage: "URL must starts from http:// or https:// " }))
	                .before(function (urls) { return Object.keys(urls)
	                .map(function (shopId) { return urls[shopId]; })
	                .filter(function (url) { return url && url.trim().length > 0; })
	                .length > 0; }, { errorMessage: "At least one scraping URL must be specified." })
	        });
	    }
	    ProductValidator.prototype.validate = function (product) {
	        if (!product)
	            throw new Error("product is undefined");
	        return validator_1.validateWithPromise(product, this.validator);
	    };
	    return ProductValidator;
	}());
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = ProductValidator;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC12YWxpZGF0b3IuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwcm9kdWN0LXZhbGlkYXRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxpREFBaUQ7O0FBRWpELDBCQUF1RSxpQkFBaUIsQ0FBQyxDQUFBO0FBRXpGO0lBQUE7UUFDVyxjQUFTLEdBQUcsaUJBQUssQ0FBQyxHQUFHLENBQWM7WUFDdEMsRUFBRSxFQUFFLGlCQUFLLENBQUMsR0FBRyxFQUFFLENBQUMsUUFBUSxDQUFDLEVBQUUsWUFBWSxFQUFFLHdCQUF3QixFQUFFLENBQUM7WUFDcEUsS0FBSyxFQUFFLGlCQUFLLENBQUMsR0FBRyxFQUFFO2lCQUNiLFFBQVEsQ0FBQyxFQUFFLFlBQVksRUFBRSwyQkFBMkIsRUFBRSxDQUFDO2lCQUN2RCxJQUFJLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLENBQUMsTUFBTSxHQUFHLElBQUksRUFBZixDQUFlLEVBQUUsRUFBRSxZQUFZLEVBQUUsd0JBQXdCLEVBQUUsQ0FBQztZQUMzRSxZQUFZLEVBQUUsaUJBQUssQ0FBQyxJQUFJLENBQ3BCLGlCQUFLLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsSUFBSSxHQUFHLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUF2RSxDQUF1RSxFQUFFLEVBQUUsWUFBWSxFQUFFLDJDQUEyQyxFQUFFLENBQUMsQ0FBQztpQkFDL0osTUFBTSxDQUFDLFVBQUEsSUFBSSxJQUFJLE9BQUEsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7aUJBQzVCLEdBQUcsQ0FBQyxVQUFBLE1BQU0sSUFBSSxPQUFBLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBWixDQUFZLENBQUM7aUJBQzNCLE1BQU0sQ0FBQyxVQUFDLEdBQVcsSUFBSyxPQUFBLEdBQUcsSUFBSSxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBNUIsQ0FBNEIsQ0FBQztpQkFDckQsTUFBTSxHQUFHLENBQUMsRUFIQyxDQUdELEVBQ2YsRUFBRSxZQUFZLEVBQUUsOENBQThDLEVBQUUsQ0FBQztTQUN4RSxDQUFDLENBQUM7SUFTUCxDQUFDO0lBTkcsbUNBQVEsR0FBUixVQUFTLE9BQW9CO1FBQ3pCLEVBQUUsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDO1lBQ1QsTUFBTSxJQUFJLEtBQUssQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO1FBRTVDLE1BQU0sQ0FBQywrQkFBUSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDN0MsQ0FBQztJQUNMLHVCQUFDO0FBQUQsQ0FBQyxBQXRCRCxJQXNCQztBQXRCRDtrQ0FzQkMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi90eXBpbmdzL2luZGV4LmQudHNcIiAvPlxyXG5cclxuaW1wb3J0IHsgdmFsaWRhdGVXaXRoUHJvbWlzZSBhcyB2YWxpZGF0ZSwgVmFsaWRhdGlvblJ1bGUsIHJ1bGVzIH0gZnJvbSBcIi4uLy4uL3ZhbGlkYXRvclwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvZHVjdFZhbGlkYXRvciB7XHJcbiAgICBwdWJsaWMgdmFsaWRhdG9yID0gcnVsZXMub2JqPEFwaS5Qcm9kdWN0Pih7XHJcbiAgICAgICAgaWQ6IHJ1bGVzLnN0cigpLm5vdEVtcHR5KHsgZXJyb3JNZXNzYWdlOiBcIlByb2R1Y3QgSUQgaXMgcmVxdWlyZWRcIiB9KSxcclxuICAgICAgICB0aXRsZTogcnVsZXMuc3RyKClcclxuICAgICAgICAgICAgLm5vdEVtcHR5KHsgZXJyb3JNZXNzYWdlOiBcIlByb2R1Y3QgdGl0bGUgaXMgcmVxdWlyZWRcIiB9KVxyXG4gICAgICAgICAgICAubXVzdCh0ID0+IHQubGVuZ3RoIDwgMTAyNCwgeyBlcnJvck1lc3NhZ2U6IFwiUHJvZHVjdCB0aXRsZSB0b28gbG9uZ1wiIH0pLFxyXG4gICAgICAgIHNjcmFwaW5nVXJsczogcnVsZXMuaGFzaChcclxuICAgICAgICAgICAgcnVsZXMuc3RyKCkubXVzdCh1cmwgPT4gIXVybCB8fCAodXJsLmluZGV4T2YoXCJodHRwOi8vXCIpID09PSAwIHx8IHVybC5pbmRleE9mKFwiaHR0cHM6Ly9cIikgPT09IDApLCB7IGVycm9yTWVzc2FnZTogXCJVUkwgbXVzdCBzdGFydHMgZnJvbSBodHRwOi8vIG9yIGh0dHBzOi8vIFwiIH0pKVxyXG4gICAgICAgICAgICAuYmVmb3JlKHVybHMgPT4gT2JqZWN0LmtleXModXJscylcclxuICAgICAgICAgICAgICAgIC5tYXAoc2hvcElkID0+IHVybHNbc2hvcElkXSlcclxuICAgICAgICAgICAgICAgIC5maWx0ZXIoKHVybDogc3RyaW5nKSA9PiB1cmwgJiYgdXJsLnRyaW0oKS5sZW5ndGggPiAwKVxyXG4gICAgICAgICAgICAgICAgLmxlbmd0aCA+IDAsXHJcbiAgICAgICAgICAgIHsgZXJyb3JNZXNzYWdlOiBcIkF0IGxlYXN0IG9uZSBzY3JhcGluZyBVUkwgbXVzdCBiZSBzcGVjaWZpZWQuXCIgfSlcclxuICAgIH0pO1xyXG5cclxuXHJcbiAgICB2YWxpZGF0ZShwcm9kdWN0OiBBcGkuUHJvZHVjdCk6IFByb21pc2U8QXBpLlByb2R1Y3Q+IHtcclxuICAgICAgICBpZiAoIXByb2R1Y3QpXHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcInByb2R1Y3QgaXMgdW5kZWZpbmVkXCIpO1xyXG5cclxuICAgICAgICByZXR1cm4gdmFsaWRhdGUocHJvZHVjdCwgdGhpcy52YWxpZGF0b3IpO1xyXG4gICAgfVxyXG59Il19

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