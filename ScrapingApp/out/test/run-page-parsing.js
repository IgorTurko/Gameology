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
	module.exports = __webpack_require__(28);


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
/* 2 */,
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2ViLXNob3AtdmFsaWRhdG9yLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsid2ViLXNob3AtdmFsaWRhdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGlEQUFpRDs7QUFFakQsSUFBWSxDQUFDLFdBQU0saUJBQWlCLENBQUMsQ0FBQTtBQUVyQztJQUFBO1FBQ0ksMENBQTBDO1FBQ25DLGNBQVMsR0FBZ0QsQ0FBQyxDQUFDLGdCQUFnQixDQUEyQjtZQUN6RyxhQUFhLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRTtpQkFDakIsSUFBSSxDQUFDLFVBQUEsS0FBSyxJQUFJLE9BQUEsS0FBSyxHQUFHLENBQUMsRUFBVCxDQUFTLEVBQUUsMENBQTBDLENBQUM7U0FDNUUsQ0FBQyxDQUFDO0lBYVAsQ0FBQztJQVhHLG1DQUFRLEdBQVIsVUFBUyxPQUFvQjtRQUN6QixFQUFFLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQztZQUNULE1BQU0sSUFBSSxLQUFLLENBQUMsc0JBQXNCLENBQUMsQ0FBQztRQUU1QyxJQUFNLE1BQU0sR0FBRyxDQUFDLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDbkQsTUFBTSxDQUFDO1lBQ0gsRUFBRSxFQUFFLE1BQU0sQ0FBQyxLQUFLO1lBQ2hCLE1BQU0sRUFBRSxNQUFNLENBQUMsS0FBSztZQUNwQixNQUFNLEVBQUUsTUFBTSxDQUFDLE1BQU07U0FDeEIsQ0FBQztJQUNOLENBQUM7SUFDTCx1QkFBQztBQUFELENBQUMsQUFsQkQsSUFrQkM7QUFsQkQ7a0NBa0JDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vdHlwaW5ncy9pbmRleC5kLnRzXCIgLz5cclxuXHJcbmltcG9ydCAqIGFzIHYgZnJvbSBcIi4uLy4uL3ZhbGlkYXRvclwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgV2ViU2hvcFZhbGlkYXRvciB7XHJcbiAgICAvKiogT25seSB1cGRhdGVhYmxlIGZpZWxkcyBpcyB2YWxpZGF0ZWQgKi9cclxuICAgIHB1YmxpYyB2YWxpZGF0b3I6IHYuSVZhbGlkYXRpb25SdWxlPEFwaS5XZWJTaG9wLCBBcGkuV2ViU2hvcD4gPSB2LmV4cGFuZGFibGVPYmplY3Q8QXBpLldlYlNob3AsIEFwaS5XZWJTaG9wPih7XHJcbiAgICAgICAgZGVsaXZlcnlQcmljZTogdi5udW0oKVxyXG4gICAgICAgICAgICAubXVzdChwcmljZSA9PiBwcmljZSA+IDAsIFwiRGVsaXZlcnkgcHJpY2UgbXVzdCBiZSBncmVhdGVyIHRoYW4gemVyb1wiKVxyXG4gICAgfSk7XHJcblxyXG4gICAgdmFsaWRhdGUod2ViU2hvcDogQXBpLldlYlNob3ApOiBBcGkuRW50aXR5VmFsaWRhdGlvblJlc3VsdDxBcGkuV2ViU2hvcD4ge1xyXG4gICAgICAgIGlmICghd2ViU2hvcClcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwid2ViU2hvcCBpcyB1bmRlZmluZWRcIik7XHJcblxyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHYudmFsaWRhdGUod2ViU2hvcCwgdGhpcy52YWxpZGF0b3IpO1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIG9rOiByZXN1bHQudmFsaWQsXHJcbiAgICAgICAgICAgIGVudGl0eTogcmVzdWx0LnZhbHVlLFxyXG4gICAgICAgICAgICBlcnJvcnM6IHJlc3VsdC5lcnJvcnNcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG59Il19

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	var error_accumulator_1 = __webpack_require__(11);
	var validation_context_1 = __webpack_require__(12);
	__export(__webpack_require__(13));
	function validate(value) {
	    var validators = [];
	    for (var _i = 1; _i < arguments.length; _i++) {
	        validators[_i - 1] = arguments[_i];
	    }
	    if (!validators || !validators.length) {
	        throw new Error("At least one validator is required");
	    }
	    var errorAccumulator = new error_accumulator_1.default();
	    var validationContext = new validation_context_1.default("", errorAccumulator);
	    var result = validators.reduce(function (val, validator) { return validator.run(val, validationContext, val, val) || value; }, value);
	    var errors = errorAccumulator.errors();
	    if (Object.keys(errors).length) {
	        return {
	            valid: false,
	            value: null,
	            errors: errors
	        };
	    }
	    return {
	        valid: true,
	        value: result
	    };
	}
	exports.validate = validate;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0Esa0NBQTZCLHFCQUFxQixDQUFDLENBQUE7QUFDbkQsbUNBQThCLHNCQUFzQixDQUFDLENBQUE7QUFHckQsaUJBQWMsU0FBUyxDQUFDLEVBQUE7QUFFeEIsa0JBQW9DLEtBQVU7SUFBRSxvQkFBMkM7U0FBM0MsV0FBMkMsQ0FBM0Msc0JBQTJDLENBQTNDLElBQTJDO1FBQTNDLG1DQUEyQzs7SUFDdkYsRUFBRSxDQUFDLENBQUMsQ0FBQyxVQUFVLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUNwQyxNQUFNLElBQUksS0FBSyxDQUFDLG9DQUFvQyxDQUFDLENBQUM7SUFDMUQsQ0FBQztJQUVELElBQU0sZ0JBQWdCLEdBQUcsSUFBSSwyQkFBZ0IsRUFBRSxDQUFDO0lBQ2hELElBQU0saUJBQWlCLEdBQUcsSUFBSSw0QkFBaUIsQ0FBQyxFQUFFLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQztJQUV0RSxJQUFNLE1BQU0sR0FBYyxVQUFVLENBQUMsTUFBTSxDQUFDLFVBQUMsR0FBRyxFQUFFLFNBQVMsSUFBSyxPQUFVLFNBQVMsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLGlCQUFpQixFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsSUFBSSxLQUFLLEVBQWxFLENBQWtFLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFFM0ksSUFBTSxNQUFNLEdBQUcsZ0JBQWdCLENBQUMsTUFBTSxFQUFFLENBQUM7SUFFekMsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1FBQzdCLE1BQU0sQ0FBQztZQUNILEtBQUssRUFBRSxLQUFLO1lBQ1osS0FBSyxFQUFFLElBQUk7WUFDWCxNQUFNLEVBQUUsTUFBTTtTQUNqQixDQUFDO0lBQ04sQ0FBQztJQUVELE1BQU0sQ0FBQztRQUNILEtBQUssRUFBRSxJQUFJO1FBQ1gsS0FBSyxFQUFFLE1BQU07S0FDaEIsQ0FBQztBQUNOLENBQUM7QUF4QmUsZ0JBQVEsV0F3QnZCLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJVmFsaWRhdGlvblJ1bGUsIFZhbGlkYXRpb25SZXN1bHQgfSBmcm9tIFwiLi9kZWZpbml0aW9uc1wiO1xyXG5pbXBvcnQgRXJyb3JBY2N1bXVsYXRvciBmcm9tIFwiLi9lcnJvci1hY2N1bXVsYXRvclwiO1xyXG5pbXBvcnQgVmFsaWRhdGlvbkNvbnRleHQgZnJvbSBcIi4vdmFsaWRhdGlvbi1jb250ZXh0XCI7XHJcblxyXG5leHBvcnQgKiBmcm9tIFwiLi9kZWZpbml0aW9uc1wiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9ydWxlc1wiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHZhbGlkYXRlPFRJbiwgVE91dD4odmFsdWU6IFRJbiwgLi4udmFsaWRhdG9yczogSVZhbGlkYXRpb25SdWxlPFRJbiwgVE91dD5bXSk6IFZhbGlkYXRpb25SZXN1bHQ8VE91dD4ge1xyXG4gICAgaWYgKCF2YWxpZGF0b3JzIHx8ICF2YWxpZGF0b3JzLmxlbmd0aCkge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkF0IGxlYXN0IG9uZSB2YWxpZGF0b3IgaXMgcmVxdWlyZWRcIik7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZXJyb3JBY2N1bXVsYXRvciA9IG5ldyBFcnJvckFjY3VtdWxhdG9yKCk7XHJcbiAgICBjb25zdCB2YWxpZGF0aW9uQ29udGV4dCA9IG5ldyBWYWxpZGF0aW9uQ29udGV4dChcIlwiLCBlcnJvckFjY3VtdWxhdG9yKTtcclxuXHJcbiAgICBjb25zdCByZXN1bHQgPSA8VE91dD48YW55PnZhbGlkYXRvcnMucmVkdWNlKCh2YWwsIHZhbGlkYXRvcikgPT4gPFRJbj48YW55PnZhbGlkYXRvci5ydW4odmFsLCB2YWxpZGF0aW9uQ29udGV4dCwgdmFsLCB2YWwpIHx8IHZhbHVlLCB2YWx1ZSk7XHJcblxyXG4gICAgY29uc3QgZXJyb3JzID0gZXJyb3JBY2N1bXVsYXRvci5lcnJvcnMoKTtcclxuXHJcbiAgICBpZiAoT2JqZWN0LmtleXMoZXJyb3JzKS5sZW5ndGgpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICB2YWxpZDogZmFsc2UsXHJcbiAgICAgICAgICAgIHZhbHVlOiBudWxsLFxyXG4gICAgICAgICAgICBlcnJvcnM6IGVycm9yc1xyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB2YWxpZDogdHJ1ZSxcclxuICAgICAgICB2YWx1ZTogcmVzdWx0XHJcbiAgICB9O1xyXG59XHJcbiJdfQ==

/***/ },
/* 11 */
/***/ function(module, exports) {

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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXJyb3ItYWNjdW11bGF0b3IuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJlcnJvci1hY2N1bXVsYXRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBRUE7SUFBQTtRQUNZLGNBQVMsR0FBcUIsRUFBRSxDQUFDO0lBZTdDLENBQUM7SUFiRyxpQ0FBTSxHQUFOLFVBQU8sSUFBWSxFQUFFLFlBQW9CO1FBQ3JDLEVBQUUsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztZQUNoQixNQUFNLENBQUM7UUFDWCxDQUFDO1FBRUQsSUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7UUFFckUsUUFBUSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUNoQyxDQUFDO0lBRUQsaUNBQU0sR0FBTjtRQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQzFCLENBQUM7SUFDTCx1QkFBQztBQUFELENBQUMsQUFoQkQsSUFnQkM7QUFoQkQ7a0NBZ0JDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBWYWxpZGF0aW9uRXJyb3JzIH0gZnJvbSBcIi4vZGVmaW5pdGlvbnNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVycm9yQWNjdW11bGF0b3Ige1xyXG4gICAgcHJpdmF0ZSBlcnJvckhhc2g6IFZhbGlkYXRpb25FcnJvcnMgPSB7fTtcclxuXHJcbiAgICByZXBvcnQocGF0aDogc3RyaW5nLCBlcnJvck1lc3NhZ2U6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgICAgIGlmICghZXJyb3JNZXNzYWdlKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IG1lc3NhZ2VzID0gdGhpcy5lcnJvckhhc2hbcGF0aF0gPSAodGhpcy5lcnJvckhhc2hbcGF0aF0gfHwgW10pO1xyXG5cclxuICAgICAgICBtZXNzYWdlcy5wdXNoKGVycm9yTWVzc2FnZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZXJyb3JzKCk6IFZhbGlkYXRpb25FcnJvcnMge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmVycm9ySGFzaDtcclxuICAgIH1cclxufVxyXG4iXX0=

/***/ },
/* 12 */
/***/ function(module, exports) {

	"use strict";
	var ValidationContext = (function () {
	    function ValidationContext(path, errorAccumulator, errorCallback) {
	        if (errorCallback === void 0) { errorCallback = null; }
	        this.path = path;
	        this.errorAccumulator = errorAccumulator;
	        this.errorCallback = errorCallback;
	    }
	    ValidationContext.prototype.reportError = function (message) {
	        if (this.errorCallback && !this.errorCallback(message)) {
	            return;
	        }
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdGlvbi1jb250ZXh0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidmFsaWRhdGlvbi1jb250ZXh0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFJQTtJQUNJLDJCQUNXLElBQVksRUFDWCxnQkFBa0MsRUFDbEMsYUFBdUQ7UUFBL0QsNkJBQStELEdBQS9ELG9CQUErRDtRQUZ4RCxTQUFJLEdBQUosSUFBSSxDQUFRO1FBQ1gscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUNsQyxrQkFBYSxHQUFiLGFBQWEsQ0FBMEM7SUFDbkUsQ0FBQztJQUVELHVDQUFXLEdBQVgsVUFBWSxPQUFlO1FBQ3ZCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNyRCxNQUFNLENBQUM7UUFDWCxDQUFDO1FBRUQsSUFBSSxDQUFDLGdCQUFnQjthQUNoQixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQztJQUNwQyxDQUFDO0lBRUQsb0NBQVEsR0FBUixVQUFTLFlBQW9CLEVBQUUsYUFBaUQ7UUFDNUUsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLGFBQWEsQ0FBQyxDQUFDO0lBQ2xELENBQUM7SUFFRCxpQ0FBSyxHQUFMLFVBQU0sS0FBYSxFQUFFLGFBQWlEO1FBQ2xFLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQUksS0FBSyxNQUFHLEVBQUUsYUFBYSxDQUFDLENBQUM7SUFDbEQsQ0FBQztJQUVPLGdDQUFJLEdBQVosVUFBYSxJQUFZLEVBQUUsYUFBZ0Q7UUFDdkUsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ1IsTUFBTSxJQUFJLEtBQUssQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1FBQ3pDLENBQUM7UUFFRCxJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUM7UUFDcEIsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDWixRQUFRLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsR0FBRyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUM7UUFDM0UsQ0FBQztRQUVELE1BQU0sQ0FBQyxJQUFJLGlCQUFpQixDQUN4QixRQUFRLEVBQ1IsSUFBSSxDQUFDLGdCQUFnQixFQUNyQixhQUFhLENBQ2hCLENBQUM7SUFDTixDQUFDO0lBQ0wsd0JBQUM7QUFBRCxDQUFDLEFBeENELElBd0NDO0FBeENEO21DQXdDQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSVZhbGlkYXRpb25Db250ZXh0IH0gZnJvbSBcIi4vZGVmaW5pdGlvbnNcIjtcclxuXHJcbmltcG9ydCBFcnJvckFjY3VtdWxhdG9yIGZyb20gXCIuL2Vycm9yLWFjY3VtdWxhdG9yXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBWYWxpZGF0aW9uQ29udGV4dCBpbXBsZW1lbnRzIElWYWxpZGF0aW9uQ29udGV4dCB7XHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwdWJsaWMgcGF0aDogc3RyaW5nLFxyXG4gICAgICAgIHByaXZhdGUgZXJyb3JBY2N1bXVsYXRvcjogRXJyb3JBY2N1bXVsYXRvcixcclxuICAgICAgICBwcml2YXRlIGVycm9yQ2FsbGJhY2s6IChlcnJvck1lc3NhZ2U6IHN0cmluZykgPT4gYm9vbGVhbiA9IG51bGwpIHtcclxuICAgIH1cclxuXHJcbiAgICByZXBvcnRFcnJvcihtZXNzYWdlOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy5lcnJvckNhbGxiYWNrICYmICF0aGlzLmVycm9yQ2FsbGJhY2sobWVzc2FnZSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5lcnJvckFjY3VtdWxhdG9yXHJcbiAgICAgICAgICAgIC5yZXBvcnQodGhpcy5wYXRoLCBtZXNzYWdlKTtcclxuICAgIH1cclxuXHJcbiAgICBwcm9wZXJ0eShwcm9wZXJ0eU5hbWU6IHN0cmluZywgZXJyb3JDYWxsYmFjaz86IChlcnJvck1lc3NhZ2U6IHN0cmluZykgPT4gYm9vbGVhbik6IFZhbGlkYXRpb25Db250ZXh0IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5uZXN0KHByb3BlcnR5TmFtZSwgZXJyb3JDYWxsYmFjayk7XHJcbiAgICB9XHJcblxyXG4gICAgaW5kZXgoaW5kZXg6IG51bWJlciwgZXJyb3JDYWxsYmFjaz86IChlcnJvck1lc3NhZ2U6IHN0cmluZykgPT4gYm9vbGVhbik6IFZhbGlkYXRpb25Db250ZXh0IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5uZXN0KGBbJHtpbmRleH1dYCwgZXJyb3JDYWxsYmFjayk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBuZXN0KHBhdGg6IHN0cmluZywgZXJyb3JDYWxsYmFjazogKGVycm9yTWVzc2FnZTogc3RyaW5nKSA9PiBib29sZWFuKTogVmFsaWRhdGlvbkNvbnRleHQge1xyXG4gICAgICAgIGlmICghcGF0aCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJwYXRoIGlzIHVuZGVmaW5lZFwiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBmdWxsUGF0aCA9IHBhdGg7XHJcbiAgICAgICAgaWYgKHRoaXMucGF0aCkge1xyXG4gICAgICAgICAgICBmdWxsUGF0aCA9IHBhdGhbMF0gPT09IFwiW1wiID8gdGhpcy5wYXRoICsgcGF0aCA6IHRoaXMucGF0aCArIFwiLlwiICsgcGF0aDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBuZXcgVmFsaWRhdGlvbkNvbnRleHQoXHJcbiAgICAgICAgICAgIGZ1bGxQYXRoLFxyXG4gICAgICAgICAgICB0aGlzLmVycm9yQWNjdW11bGF0b3IsXHJcbiAgICAgICAgICAgIGVycm9yQ2FsbGJhY2tcclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==

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
	    StringRules.prototype.notEmpty = function (errorMessage) {
	        if (errorMessage === void 0) { errorMessage = "Value can not be empty"; }
	        return this.withRule(StringRules.notEmtpyRule(errorMessage));
	    };
	    StringRules.isStringRule = function (errorMessage, convert) {
	        return function (value, reportError) {
	            if (value === null || value === undefined) {
	                return value;
	            }
	            if (typeof value !== "string" && !convert) {
	                reportError(errorMessage);
	            }
	            return value.toString();
	        };
	    };
	    StringRules.notEmtpyRule = function (errorMessage) {
	        return function (value, reportError) {
	            if (!value || !value.trim()) {
	                reportError(errorMessage);
	            }
	            return value;
	        };
	    };
	    return StringRules;
	}(rules_base_1.ChainableRuleRunner));
	exports.StringRules = StringRules;
	var NumberRules = (function (_super) {
	    __extends(NumberRules, _super);
	    function NumberRules() {
	        _super.apply(this, arguments);
	    }
	    NumberRules.isNumberRule = function (errorMessage) {
	        return function (value, reportError) {
	            if (value === null || value === undefined) {
	                return value;
	            }
	            if (typeof value !== "number") {
	                var result = parseFloat("" + value);
	                if (isNaN(result)) {
	                    reportError(errorMessage);
	                }
	                return result;
	            }
	            return value;
	        };
	    };
	    return NumberRules;
	}(rules_base_1.ChainableRuleRunner));
	exports.NumberRules = NumberRules;
	var AnyRules = (function (_super) {
	    __extends(AnyRules, _super);
	    function AnyRules() {
	        _super.apply(this, arguments);
	    }
	    return AnyRules;
	}(rules_base_1.ChainableRuleRunner));
	exports.AnyRules = AnyRules;
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
	function any(predicate, errorMessage) {
	    if (errorMessage === void 0) { errorMessage = "Value is invalid"; }
	    predicate = predicate || (function (v) { return true; });
	    return new AnyRules().must(predicate, errorMessage);
	}
	exports.any = any;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJpbWl0aXZlLXR5cGUtcnVsZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwcmltaXRpdmUtdHlwZS1ydWxlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFDQSwyQkFBb0MsY0FBYyxDQUFDLENBQUE7QUFFbkQ7SUFBaUMsK0JBQTJCO0lBQTVEO1FBQWlDLDhCQUEyQjtJQTZCNUQsQ0FBQztJQTNCRyw4QkFBUSxHQUFSLFVBQVMsWUFBK0M7UUFBL0MsNEJBQStDLEdBQS9DLHVDQUErQztRQUNwRCxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7SUFDakUsQ0FBQztJQUVNLHdCQUFZLEdBQW5CLFVBQW9CLFlBQW9CLEVBQUUsT0FBZ0I7UUFDdEQsTUFBTSxDQUFDLFVBQUMsS0FBVSxFQUFFLFdBQWdDO1lBQ2hELEVBQUUsQ0FBQyxDQUFDLEtBQUssS0FBSyxJQUFJLElBQUksS0FBSyxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3hDLE1BQU0sQ0FBQyxLQUFLLENBQUM7WUFDakIsQ0FBQztZQUVELEVBQUUsQ0FBQyxDQUFDLE9BQU8sS0FBSyxLQUFLLFFBQVEsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7Z0JBQ3hDLFdBQVcsQ0FBQyxZQUFZLENBQUMsQ0FBQztZQUM5QixDQUFDO1lBRUQsTUFBTSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUM1QixDQUFDLENBQUM7SUFDTixDQUFDO0lBRU0sd0JBQVksR0FBbkIsVUFBb0IsWUFBb0I7UUFDcEMsTUFBTSxDQUFDLFVBQUMsS0FBYSxFQUFFLFdBQWdDO1lBQ25ELEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztnQkFDMUIsV0FBVyxDQUFDLFlBQVksQ0FBQyxDQUFDO1lBQzlCLENBQUM7WUFFRCxNQUFNLENBQUMsS0FBSyxDQUFDO1FBQ2pCLENBQUMsQ0FBQztJQUNOLENBQUM7SUFDTCxrQkFBQztBQUFELENBQUMsQUE3QkQsQ0FBaUMsZ0NBQW1CLEdBNkJuRDtBQTdCWSxtQkFBVyxjQTZCdkIsQ0FBQTtBQUVEO0lBQWlDLCtCQUEyQjtJQUE1RDtRQUFpQyw4QkFBMkI7SUFxQjVELENBQUM7SUFuQlUsd0JBQVksR0FBbkIsVUFBb0IsWUFBb0I7UUFDcEMsTUFBTSxDQUFDLFVBQUMsS0FBVSxFQUFFLFdBQWdDO1lBQ2hELEVBQUUsQ0FBQyxDQUFDLEtBQUssS0FBSyxJQUFJLElBQUksS0FBSyxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3hDLE1BQU0sQ0FBQyxLQUFLLENBQUM7WUFDakIsQ0FBQztZQUVELEVBQUUsQ0FBQyxDQUFDLE9BQU8sS0FBSyxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUM7Z0JBQzVCLElBQU0sTUFBTSxHQUFHLFVBQVUsQ0FBQyxFQUFFLEdBQUcsS0FBSyxDQUFDLENBQUM7Z0JBRXRDLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ2hCLFdBQVcsQ0FBQyxZQUFZLENBQUMsQ0FBQztnQkFDOUIsQ0FBQztnQkFFRCxNQUFNLENBQUMsTUFBTSxDQUFDO1lBQ2xCLENBQUM7WUFFRCxNQUFNLENBQUMsS0FBSyxDQUFDO1FBQ2pCLENBQUMsQ0FBQztJQUNOLENBQUM7SUFDTCxrQkFBQztBQUFELENBQUMsQUFyQkQsQ0FBaUMsZ0NBQW1CLEdBcUJuRDtBQXJCWSxtQkFBVyxjQXFCdkIsQ0FBQTtBQUVEO0lBQWlDLDRCQUFzQjtJQUF2RDtRQUFpQyw4QkFBc0I7SUFDdkQsQ0FBQztJQUFELGVBQUM7QUFBRCxDQUFDLEFBREQsQ0FBaUMsZ0NBQW1CLEdBQ25EO0FBRFksZ0JBQVEsV0FDcEIsQ0FBQTtBQUVELGFBQW9CLFlBQStDLEVBQUUsT0FBdUI7SUFBeEUsNEJBQStDLEdBQS9DLHVDQUErQztJQUFFLHVCQUF1QixHQUF2QixjQUF1QjtJQUN4RixNQUFNLENBQUMsSUFBSSxXQUFXLEVBQUUsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxZQUFZLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQztBQUN2RixDQUFDO0FBRmUsV0FBRyxNQUVsQixDQUFBO0FBRUQsYUFBb0IsWUFBb0Q7SUFBcEQsNEJBQW9ELEdBQXBELDRDQUFvRDtJQUNwRSxNQUFNLENBQUMsSUFBSSxXQUFXLEVBQUUsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO0FBQzlFLENBQUM7QUFGZSxXQUFHLE1BRWxCLENBQUE7QUFFRCxhQUF1QixTQUFpRSxFQUFFLFlBQXlDO0lBQXpDLDRCQUF5QyxHQUF6QyxpQ0FBeUM7SUFDL0gsU0FBUyxHQUFHLFNBQVMsSUFBSSxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsSUFBSSxFQUFKLENBQUksQ0FBQyxDQUFDO0lBQ3JDLE1BQU0sQ0FBQyxJQUFJLFFBQVEsRUFBSyxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsWUFBWSxDQUFDLENBQUM7QUFDM0QsQ0FBQztBQUhlLFdBQUcsTUFHbEIsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFZhbGlkYXRlQW5kVHJhbnNmb3JtRnVuYywgUmVwb3J0RXJyb3JGdW5jdGlvbiB9IGZyb20gXCIuLi9kZWZpbml0aW9uc1wiO1xyXG5pbXBvcnQgeyBDaGFpbmFibGVSdWxlUnVubmVyIH0gZnJvbSBcIi4vcnVsZXMtYmFzZVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFN0cmluZ1J1bGVzIGV4dGVuZHMgQ2hhaW5hYmxlUnVsZVJ1bm5lcjxzdHJpbmc+IHtcclxuXHJcbiAgICBub3RFbXB0eShlcnJvck1lc3NhZ2U6IHN0cmluZyA9IFwiVmFsdWUgY2FuIG5vdCBiZSBlbXB0eVwiKTogdGhpcyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMud2l0aFJ1bGUoU3RyaW5nUnVsZXMubm90RW10cHlSdWxlKGVycm9yTWVzc2FnZSkpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBpc1N0cmluZ1J1bGUoZXJyb3JNZXNzYWdlOiBzdHJpbmcsIGNvbnZlcnQ6IGJvb2xlYW4pOiBWYWxpZGF0ZUFuZFRyYW5zZm9ybUZ1bmM8YW55LCBzdHJpbmc+IHtcclxuICAgICAgICByZXR1cm4gKHZhbHVlOiBhbnksIHJlcG9ydEVycm9yOiBSZXBvcnRFcnJvckZ1bmN0aW9uKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh2YWx1ZSA9PT0gbnVsbCB8fCB2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdmFsdWUgIT09IFwic3RyaW5nXCIgJiYgIWNvbnZlcnQpIHtcclxuICAgICAgICAgICAgICAgIHJlcG9ydEVycm9yKGVycm9yTWVzc2FnZSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZS50b1N0cmluZygpO1xyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIG5vdEVtdHB5UnVsZShlcnJvck1lc3NhZ2U6IHN0cmluZyk6IFZhbGlkYXRlQW5kVHJhbnNmb3JtRnVuYzxzdHJpbmcsIHN0cmluZz4ge1xyXG4gICAgICAgIHJldHVybiAodmFsdWU6IHN0cmluZywgcmVwb3J0RXJyb3I6IFJlcG9ydEVycm9yRnVuY3Rpb24pID0+IHtcclxuICAgICAgICAgICAgaWYgKCF2YWx1ZSB8fCAhdmFsdWUudHJpbSgpKSB7XHJcbiAgICAgICAgICAgICAgICByZXBvcnRFcnJvcihlcnJvck1lc3NhZ2UpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIE51bWJlclJ1bGVzIGV4dGVuZHMgQ2hhaW5hYmxlUnVsZVJ1bm5lcjxudW1iZXI+IHtcclxuXHJcbiAgICBzdGF0aWMgaXNOdW1iZXJSdWxlKGVycm9yTWVzc2FnZTogc3RyaW5nKTogVmFsaWRhdGVBbmRUcmFuc2Zvcm1GdW5jPGFueSwgbnVtYmVyPiB7XHJcbiAgICAgICAgcmV0dXJuICh2YWx1ZTogYW55LCByZXBvcnRFcnJvcjogUmVwb3J0RXJyb3JGdW5jdGlvbikgPT4ge1xyXG4gICAgICAgICAgICBpZiAodmFsdWUgPT09IG51bGwgfHwgdmFsdWUgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAodHlwZW9mIHZhbHVlICE9PSBcIm51bWJlclwiKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSBwYXJzZUZsb2F0KFwiXCIgKyB2YWx1ZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGlzTmFOKHJlc3VsdCkpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXBvcnRFcnJvcihlcnJvck1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQW55UnVsZXM8VD4gZXh0ZW5kcyBDaGFpbmFibGVSdWxlUnVubmVyPFQ+IHtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHN0cihlcnJvck1lc3NhZ2U6IHN0cmluZyA9IFwiVmFsdWUgaXMgbm90IGEgc3RyaW5nLlwiLCBjb252ZXJ0OiBib29sZWFuID0gdHJ1ZSk6IFN0cmluZ1J1bGVzIHtcclxuICAgIHJldHVybiBuZXcgU3RyaW5nUnVsZXMoKS53aXRoUnVsZShTdHJpbmdSdWxlcy5pc1N0cmluZ1J1bGUoZXJyb3JNZXNzYWdlLCBjb252ZXJ0KSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBudW0oZXJyb3JNZXNzYWdlOiBzdHJpbmcgPSBcIlZhbHVlIGlzIG5vdCBhIHZhbGlkIG51bWJlclwiKTogTnVtYmVyUnVsZXMge1xyXG4gICAgcmV0dXJuIG5ldyBOdW1iZXJSdWxlcygpLndpdGhSdWxlKE51bWJlclJ1bGVzLmlzTnVtYmVyUnVsZShlcnJvck1lc3NhZ2UpKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGFueTxUPihwcmVkaWNhdGU/OiAodmFsdWU6IFQsIGVudGl0eT86IGFueSwgcm9vdEVudGl0eT86IGFueSkgPT4gYm9vbGVhbiwgZXJyb3JNZXNzYWdlOiBzdHJpbmcgPSBcIlZhbHVlIGlzIGludmFsaWRcIik6IEFueVJ1bGVzPFQ+IHtcclxuICAgIHByZWRpY2F0ZSA9IHByZWRpY2F0ZSB8fCAodiA9PiB0cnVlKTtcclxuICAgIHJldHVybiBuZXcgQW55UnVsZXM8VD4oKS5tdXN0KHByZWRpY2F0ZSwgZXJyb3JNZXNzYWdlKTtcclxufVxyXG4iXX0=

/***/ },
/* 15 */
/***/ function(module, exports) {

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
	    ChainableRuleRunner.prototype.must = function (predicate, errorMessage) {
	        if (errorMessage === void 0) { errorMessage = "Value is invalid"; }
	        return this.withRule(ChainableRuleRunner.mustRule(predicate, errorMessage));
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
	                if (result === null || result === undefined) {
	                    reportError(errorMessage);
	                }
	                return result;
	            }
	            catch (e) {
	                reportError(errorMessage);
	            }
	            ;
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicnVsZXMtYmFzZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInJ1bGVzLWJhc2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUlBO0lBQUE7UUFDSSxVQUFLLEdBQTBDLEVBQUUsQ0FBQztJQTREdEQsQ0FBQztJQTFERyxpQ0FBRyxHQUFILFVBQUksS0FBVSxFQUFFLGlCQUFvQyxFQUFFLE1BQVcsRUFBRSxJQUFTO1FBQ3hFLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSzthQUNaLE1BQU0sQ0FBQyxVQUFDLFlBQVksRUFBRSxJQUFJLElBQUssT0FBQSxJQUFJLENBQUMsWUFBWSxFQUFFLFVBQUEsR0FBRyxJQUFJLE9BQUEsaUJBQWlCLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxFQUFsQyxDQUFrQyxFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUMsRUFBM0UsQ0FBMkUsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUM1SCxDQUFDO0lBRUQsc0NBQVEsR0FBUixVQUFTLElBQXlDO1FBQzlDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3RCLE1BQU0sQ0FBQyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUVELHNDQUFRLEdBQVIsVUFBUyxZQUEwQztRQUExQyw0QkFBMEMsR0FBMUMsa0NBQTBDO1FBQy9DLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLG1CQUFtQixDQUFDLFlBQVksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO0lBQ3pFLENBQUM7SUFFRCx1Q0FBUyxHQUFULFVBQWdCLFFBQThELEVBQUUsWUFBMEM7UUFBMUMsNEJBQTBDLEdBQTFDLGtDQUEwQztRQUN0SCxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxtQkFBbUIsQ0FBQyxhQUFhLENBQUMsUUFBUSxFQUFFLFlBQVksQ0FBQyxDQUFDLENBQUM7SUFDcEYsQ0FBQztJQUVELGtDQUFJLEdBQUosVUFBSyxTQUFrRSxFQUFFLFlBQXlDO1FBQXpDLDRCQUF5QyxHQUF6QyxpQ0FBeUM7UUFDOUcsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsbUJBQW1CLENBQUMsUUFBUSxDQUFDLFNBQVMsRUFBRSxZQUFZLENBQUMsQ0FBQyxDQUFDO0lBQ2hGLENBQUM7SUFFTSw0QkFBUSxHQUFmLFVBQTJCLFNBQWtFLEVBQUUsWUFBb0I7UUFDL0csTUFBTSxDQUFDLFVBQUMsS0FBVSxFQUFFLFdBQWdDLEVBQUUsTUFBVyxFQUFFLFVBQWU7WUFDOUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLE1BQU0sRUFBRSxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3hDLFdBQVcsQ0FBQyxZQUFZLENBQUMsQ0FBQztZQUM5QixDQUFDO1lBRUQsTUFBTSxDQUFDLEtBQUssQ0FBQztRQUNqQixDQUFDLENBQUM7SUFDTixDQUFDO0lBRU0saUNBQWEsR0FBcEIsVUFBZ0MsUUFBOEQsRUFBRSxZQUFvQjtRQUNoSCxNQUFNLENBQUMsVUFBQyxLQUFVLEVBQUUsV0FBZ0MsRUFBRSxNQUFXLEVBQUUsVUFBZTtZQUM5RSxJQUFJLENBQUM7Z0JBQ0QsSUFBTSxNQUFNLEdBQUcsUUFBUSxDQUFDLEtBQUssRUFBRSxNQUFNLEVBQUUsVUFBVSxDQUFDLENBQUM7Z0JBRW5ELEVBQUUsQ0FBQyxDQUFDLE1BQU0sS0FBSyxJQUFJLElBQUksTUFBTSxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUM7b0JBQzFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsQ0FBQztnQkFDOUIsQ0FBQztnQkFFRCxNQUFNLENBQUMsTUFBTSxDQUFDO1lBQ2xCLENBQ0E7WUFBQSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNQLFdBQVcsQ0FBQyxZQUFZLENBQUMsQ0FBQztZQUM5QixDQUFDO1lBQUEsQ0FBQztRQUNOLENBQUMsQ0FBQztJQUNOLENBQUM7SUFFTSxnQ0FBWSxHQUFuQixVQUErQixZQUFvQjtRQUMvQyxNQUFNLENBQUMsVUFBQyxLQUFVLEVBQUUsV0FBZ0M7WUFDaEQsRUFBRSxDQUFDLENBQUMsS0FBSyxLQUFLLElBQUksSUFBSSxLQUFLLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQztnQkFDeEMsV0FBVyxDQUFDLFlBQVksQ0FBQyxDQUFDO1lBQzlCLENBQUM7WUFFRCxNQUFNLENBQUMsS0FBSyxDQUFDO1FBQ2pCLENBQUMsQ0FBQztJQUNOLENBQUM7SUFDTCwwQkFBQztBQUFELENBQUMsQUE3REQsSUE2REM7QUE3RHFCLDJCQUFtQixzQkE2RHhDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJVmFsaWRhdGlvblJ1bGUsIFZhbGlkYXRlQW5kVHJhbnNmb3JtRnVuYywgUmVwb3J0RXJyb3JGdW5jdGlvbiB9IGZyb20gXCIuLi9kZWZpbml0aW9uc1wiO1xyXG5pbXBvcnQgVmFsaWRhdGlvbkNvbnRleHQgZnJvbSBcIi4uL3ZhbGlkYXRpb24tY29udGV4dFwiO1xyXG5cclxuXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBDaGFpbmFibGVSdWxlUnVubmVyPFRPdXQ+IGltcGxlbWVudHMgSVZhbGlkYXRpb25SdWxlPGFueSwgVE91dD4ge1xyXG4gICAgcnVsZXM6IFZhbGlkYXRlQW5kVHJhbnNmb3JtRnVuYzxhbnksIFRPdXQ+W10gPSBbXTtcclxuXHJcbiAgICBydW4odmFsdWU6IGFueSwgdmFsaWRhdGlvbkNvbnRleHQ6IFZhbGlkYXRpb25Db250ZXh0LCBlbnRpdHk6IGFueSwgcm9vdDogYW55KTogVE91dCB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucnVsZXNcclxuICAgICAgICAgICAgLnJlZHVjZSgoY3VycmVudFZhbHVlLCBydWxlKSA9PiBydWxlKGN1cnJlbnRWYWx1ZSwgZXJyID0+IHZhbGlkYXRpb25Db250ZXh0LnJlcG9ydEVycm9yKGVyciksIGVudGl0eSwgcm9vdCksIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICB3aXRoUnVsZShydWxlOiBWYWxpZGF0ZUFuZFRyYW5zZm9ybUZ1bmM8YW55LCBUT3V0Pik6IHRoaXMge1xyXG4gICAgICAgIHRoaXMucnVsZXMucHVzaChydWxlKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICByZXF1aXJlZChlcnJvck1lc3NhZ2U6IHN0cmluZyA9IFwiVmFsdWUgaXMgcmVxdWlyZWRcIik6IHRoaXMge1xyXG4gICAgICAgIHJldHVybiB0aGlzLndpdGhSdWxlKENoYWluYWJsZVJ1bGVSdW5uZXIucmVxdWlyZWRSdWxlKGVycm9yTWVzc2FnZSkpO1xyXG4gICAgfVxyXG5cclxuICAgIHRyYW5zZm9ybTxUT3V0PihzZWxlY3RvcjogKHZhbHVlOiBhbnksIGVudGl0eT86IGFueSwgcm9vdEVudGl0eT86IGFueSkgPT4gVE91dCwgZXJyb3JNZXNzYWdlOiBzdHJpbmcgPSBcIkNvbnZlcnNpb24gZmFpbGVkXCIpOiB0aGlzIHtcclxuICAgICAgICByZXR1cm4gdGhpcy53aXRoUnVsZShDaGFpbmFibGVSdWxlUnVubmVyLnRyYW5zZm9ybVJ1bGUoc2VsZWN0b3IsIGVycm9yTWVzc2FnZSkpO1xyXG4gICAgfVxyXG5cclxuICAgIG11c3QocHJlZGljYXRlOiAodmFsdWU6IGFueSwgZW50aXR5PzogYW55LCByb290RW50aXR5PzogYW55KSA9PiBib29sZWFuLCBlcnJvck1lc3NhZ2U6IHN0cmluZyA9IFwiVmFsdWUgaXMgaW52YWxpZFwiKTogdGhpcyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMud2l0aFJ1bGUoQ2hhaW5hYmxlUnVsZVJ1bm5lci5tdXN0UnVsZShwcmVkaWNhdGUsIGVycm9yTWVzc2FnZSkpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBtdXN0UnVsZTxUSW4sIFRPdXQ+KHByZWRpY2F0ZTogKHZhbHVlOiBUSW4sIGVudGl0eT86IGFueSwgcm9vdEVudGl0eT86IGFueSkgPT4gYm9vbGVhbiwgZXJyb3JNZXNzYWdlOiBzdHJpbmcpOiBWYWxpZGF0ZUFuZFRyYW5zZm9ybUZ1bmM8VEluLCBUT3V0PiB7XHJcbiAgICAgICAgcmV0dXJuICh2YWx1ZTogVEluLCByZXBvcnRFcnJvcjogUmVwb3J0RXJyb3JGdW5jdGlvbiwgZW50aXR5OiBhbnksIHJvb3RFbnRpdHk6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIXByZWRpY2F0ZSh2YWx1ZSwgZW50aXR5LCByb290RW50aXR5KSkge1xyXG4gICAgICAgICAgICAgICAgcmVwb3J0RXJyb3IoZXJyb3JNZXNzYWdlKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIHRyYW5zZm9ybVJ1bGU8VEluLCBUT3V0PihzZWxlY3RvcjogKHZhbHVlOiBUSW4sIGVudGl0eT86IGFueSwgcm9vdEVudGl0eT86IGFueSkgPT4gVE91dCwgZXJyb3JNZXNzYWdlOiBzdHJpbmcpOiBWYWxpZGF0ZUFuZFRyYW5zZm9ybUZ1bmM8VEluLCBUT3V0PiB7XHJcbiAgICAgICAgcmV0dXJuICh2YWx1ZTogVEluLCByZXBvcnRFcnJvcjogUmVwb3J0RXJyb3JGdW5jdGlvbiwgZW50aXR5OiBhbnksIHJvb3RFbnRpdHk6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gc2VsZWN0b3IodmFsdWUsIGVudGl0eSwgcm9vdEVudGl0eSk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdCA9PT0gbnVsbCB8fCByZXN1bHQgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlcG9ydEVycm9yKGVycm9yTWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAgICAgcmVwb3J0RXJyb3IoZXJyb3JNZXNzYWdlKTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyByZXF1aXJlZFJ1bGU8VEluLCBUT3V0PihlcnJvck1lc3NhZ2U6IHN0cmluZyk6IFZhbGlkYXRlQW5kVHJhbnNmb3JtRnVuYzxUSW4sIFRPdXQ+IHtcclxuICAgICAgICByZXR1cm4gKHZhbHVlOiBUSW4sIHJlcG9ydEVycm9yOiBSZXBvcnRFcnJvckZ1bmN0aW9uKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh2YWx1ZSA9PT0gbnVsbCB8fCB2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICByZXBvcnRFcnJvcihlcnJvck1lc3NhZ2UpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxufVxyXG4iXX0=

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
	        if (!struct) {
	            throw new Error("object structure descriptor is required");
	        }
	        if (!passNullObject && !nullObjectErrorMessage) {
	            throw new Error("Validation message for null object required");
	        }
	    }
	    ObjectValidationRuleBase.prototype.run = function (value, validationContext, entity, root) {
	        if (value === null || value === undefined) {
	            if (!this.passNullObject) {
	                validationContext.reportError(this.nullObjectErrorMessage);
	            }
	            return value;
	        }
	        if (this.mustPredicate && !this.mustPredicate(value, entity, root)) {
	            validationContext.reportError(this.mustError);
	        }
	        return this.runCore(value, validationContext, entity, root);
	    };
	    ObjectValidationRuleBase.prototype.must = function (predicate, errorMessage) {
	        if (errorMessage === void 0) { errorMessage = "Object data is not valid."; }
	        if (!predicate) {
	            throw new Error("Predicate is requried");
	        }
	        if (!errorMessage) {
	            throw new Error("Error message is required");
	        }
	        this.mustPredicate = predicate;
	        this.mustError = errorMessage;
	        return this;
	    };
	    return ObjectValidationRuleBase;
	}());
	exports.ObjectValidationRuleBase = ObjectValidationRuleBase;
	var ObjectValidationRule = (function (_super) {
	    __extends(ObjectValidationRule, _super);
	    function ObjectValidationRule(struct, passNullObject, nullObjectErrorMessage) {
	        _super.call(this, struct, passNullObject, nullObjectErrorMessage);
	    }
	    ObjectValidationRule.prototype.runCore = function (value, validationContext, entity, root) {
	        var result = {};
	        for (var property in this.struct) {
	            if (this.struct.hasOwnProperty(property)) {
	                var rule = this.struct[property];
	                var inputValue = value[property];
	                var nestedContext = validationContext.property(property);
	                result[property] = rule.run(inputValue, nestedContext, value, root);
	            }
	        }
	        return result;
	    };
	    return ObjectValidationRule;
	}(ObjectValidationRuleBase));
	exports.ObjectValidationRule = ObjectValidationRule;
	var ExpandableObjectValidationRule = (function (_super) {
	    __extends(ExpandableObjectValidationRule, _super);
	    function ExpandableObjectValidationRule(struct, passNullObject, nullObjectErrorMessage) {
	        _super.call(this, struct, passNullObject, nullObjectErrorMessage);
	    }
	    ExpandableObjectValidationRule.prototype.runCore = function (value, validationContext, entity, root) {
	        var result = {};
	        for (var property in value) {
	            if (value.hasOwnProperty(property)) {
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
	        }
	        return result;
	    };
	    return ExpandableObjectValidationRule;
	}(ObjectValidationRuleBase));
	exports.ExpandableObjectValidationRule = ExpandableObjectValidationRule;
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2JqZWN0LXJ1bGVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsib2JqZWN0LXJ1bGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQVdBO0lBSUksa0NBQ2MsTUFBK0IsRUFDL0IsY0FBdUIsRUFDdkIsc0JBQStCO1FBRi9CLFdBQU0sR0FBTixNQUFNLENBQXlCO1FBQy9CLG1CQUFjLEdBQWQsY0FBYyxDQUFTO1FBQ3ZCLDJCQUFzQixHQUF0QixzQkFBc0IsQ0FBUztRQUxyQyxjQUFTLEdBQUcsRUFBRSxDQUFDO1FBTW5CLEVBQUUsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztZQUNWLE1BQU0sSUFBSSxLQUFLLENBQUMseUNBQXlDLENBQUMsQ0FBQztRQUMvRCxDQUFDO1FBQ0QsRUFBRSxDQUFDLENBQUMsQ0FBQyxjQUFjLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDLENBQUM7WUFDN0MsTUFBTSxJQUFJLEtBQUssQ0FBQyw2Q0FBNkMsQ0FBQyxDQUFDO1FBQ25FLENBQUM7SUFDTCxDQUFDO0lBRUQsc0NBQUcsR0FBSCxVQUFJLEtBQVUsRUFBRSxpQkFBb0MsRUFBRSxNQUFXLEVBQUUsSUFBUztRQUN4RSxFQUFFLENBQUMsQ0FBQyxLQUFLLEtBQUssSUFBSSxJQUFJLEtBQUssS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDO1lBQ3hDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3ZCLGlCQUFpQixDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsc0JBQXNCLENBQUMsQ0FBQztZQUMvRCxDQUFDO1lBRUQsTUFBTSxDQUFZLEtBQUssQ0FBQztRQUM1QixDQUFDO1FBRUQsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDakUsaUJBQWlCLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNsRCxDQUFDO1FBRUQsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNoRSxDQUFDO0lBRUQsdUNBQUksR0FBSixVQUFLLFNBQTRELEVBQUUsWUFBa0Q7UUFBbEQsNEJBQWtELEdBQWxELDBDQUFrRDtRQUNqSCxFQUFFLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7WUFDYixNQUFNLElBQUksS0FBSyxDQUFDLHVCQUF1QixDQUFDLENBQUM7UUFDN0MsQ0FBQztRQUNELEVBQUUsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztZQUNoQixNQUFNLElBQUksS0FBSyxDQUFDLDJCQUEyQixDQUFDLENBQUM7UUFDakQsQ0FBQztRQUVELElBQUksQ0FBQyxhQUFhLEdBQUcsU0FBUyxDQUFDO1FBQy9CLElBQUksQ0FBQyxTQUFTLEdBQUcsWUFBWSxDQUFDO1FBRTlCLE1BQU0sQ0FBQyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUdMLCtCQUFDO0FBQUQsQ0FBQyxBQS9DRCxJQStDQztBQS9DcUIsZ0NBQXdCLDJCQStDN0MsQ0FBQTtBQUVEO0lBQXFFLHdDQUFtQztJQUVwRyw4QkFDSSxNQUErQixFQUMvQixjQUF1QixFQUN2QixzQkFBK0I7UUFFL0Isa0JBQU0sTUFBTSxFQUFFLGNBQWMsRUFBRSxzQkFBc0IsQ0FBQyxDQUFDO0lBQzFELENBQUM7SUFFRCxzQ0FBTyxHQUFQLFVBQVEsS0FBVSxFQUFFLGlCQUFvQyxFQUFFLE1BQVcsRUFBRSxJQUFTO1FBQzVFLElBQU0sTUFBTSxHQUFZLEVBQUUsQ0FBQztRQUUzQixHQUFHLENBQUMsQ0FBQyxJQUFJLFFBQVEsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztZQUMvQixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3ZDLElBQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQ25DLElBQU0sVUFBVSxHQUFHLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFFbkMsSUFBTSxhQUFhLEdBQUcsaUJBQWlCLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUUzRCxNQUFNLENBQUMsUUFBUSxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUUsYUFBYSxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQztZQUN4RSxDQUFDO1FBQ0wsQ0FBQztRQUVELE1BQU0sQ0FBTyxNQUFNLENBQUM7SUFDeEIsQ0FBQztJQUNMLDJCQUFDO0FBQUQsQ0FBQyxBQTFCRCxDQUFxRSx3QkFBd0IsR0EwQjVGO0FBMUJZLDRCQUFvQix1QkEwQmhDLENBQUE7QUFFRDtJQUErRSxrREFBbUM7SUFFOUcsd0NBQ0ksTUFBK0IsRUFDL0IsY0FBdUIsRUFDdkIsc0JBQStCO1FBRS9CLGtCQUFNLE1BQU0sRUFBRSxjQUFjLEVBQUUsc0JBQXNCLENBQUMsQ0FBQztJQUMxRCxDQUFDO0lBRUQsZ0RBQU8sR0FBUCxVQUFRLEtBQVUsRUFBRSxpQkFBb0MsRUFBRSxNQUFXLEVBQUUsSUFBUztRQUM1RSxJQUFNLE1BQU0sR0FBWSxFQUFFLENBQUM7UUFFM0IsR0FBRyxDQUFDLENBQUMsSUFBSSxRQUFRLElBQUksS0FBSyxDQUFDLENBQUMsQ0FBQztZQUN6QixFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFFakMsSUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFFbkMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztvQkFDUCxJQUFNLFVBQVUsR0FBRyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUM7b0JBQ25DLElBQU0sYUFBYSxHQUFHLGlCQUFpQixDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQztvQkFDM0QsTUFBTSxDQUFDLFFBQVEsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBVSxFQUFFLGFBQWEsRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUM7Z0JBQ3hFLENBQUM7Z0JBQ0QsSUFBSSxDQUFDLENBQUM7b0JBQ0YsTUFBTSxDQUFDLFFBQVEsQ0FBQyxHQUFHLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFDdkMsQ0FBQztZQUNMLENBQUM7UUFDTCxDQUFDO1FBRUQsTUFBTSxDQUFPLE1BQU0sQ0FBQztJQUN4QixDQUFDO0lBQ0wscUNBQUM7QUFBRCxDQUFDLEFBL0JELENBQStFLHdCQUF3QixHQStCdEc7QUEvQlksc0NBQThCLGlDQStCMUMsQ0FBQTtBQUVEOzs7R0FHRztBQUNILGFBQStCLE1BQStCLEVBQUUsc0JBQWtEO0lBQWxELHNDQUFrRCxHQUFsRCwwQ0FBa0Q7SUFDOUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1FBQ1YsTUFBTSxJQUFJLEtBQUssQ0FBQyx5Q0FBeUMsQ0FBQyxDQUFDO0lBQy9ELENBQUM7SUFDRCxNQUFNLENBQUMsSUFBSSxvQkFBb0IsQ0FBWSxNQUFNLEVBQUUsS0FBSyxFQUFFLHNCQUFzQixDQUFDLENBQUM7QUFDdEYsQ0FBQztBQUxlLFdBQUcsTUFLbEIsQ0FBQTtBQUVEOzs7O0dBSUc7QUFDSCxxQkFBdUMsTUFBK0I7SUFDbEUsRUFBRSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1FBQ1YsTUFBTSxJQUFJLEtBQUssQ0FBQyx5Q0FBeUMsQ0FBQyxDQUFDO0lBQy9ELENBQUM7SUFDRCxNQUFNLENBQUMsSUFBSSxvQkFBb0IsQ0FBWSxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFDN0QsQ0FBQztBQUxlLG1CQUFXLGNBSzFCLENBQUE7QUFFRDs7O0dBR0c7QUFDSCwwQkFBNEMsTUFBK0IsRUFBRSxzQkFBa0Q7SUFBbEQsc0NBQWtELEdBQWxELDBDQUFrRDtJQUMzSCxFQUFFLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFDVixNQUFNLElBQUksS0FBSyxDQUFDLHlDQUF5QyxDQUFDLENBQUM7SUFDL0QsQ0FBQztJQUNELE1BQU0sQ0FBQyxJQUFJLDhCQUE4QixDQUFZLE1BQU0sRUFBRSxLQUFLLEVBQUUsc0JBQXNCLENBQUMsQ0FBQztBQUNoRyxDQUFDO0FBTGUsd0JBQWdCLG1CQUsvQixDQUFBO0FBRUQ7Ozs7R0FJRztBQUNILGtDQUFvRCxNQUErQjtJQUMvRSxFQUFFLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFDVixNQUFNLElBQUksS0FBSyxDQUFDLHlDQUF5QyxDQUFDLENBQUM7SUFDL0QsQ0FBQztJQUVELE1BQU0sQ0FBQyxJQUFJLDhCQUE4QixDQUFZLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQztBQUN2RSxDQUFDO0FBTmUsZ0NBQXdCLDJCQU12QyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSVZhbGlkYXRpb25SdWxlIH0gZnJvbSBcIi4uL2RlZmluaXRpb25zXCI7XHJcbmltcG9ydCBWYWxpZGF0aW9uQ29udGV4dCBmcm9tIFwiLi4vdmFsaWRhdGlvbi1jb250ZXh0XCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElQcm9wZXJ0eVZhbGlkYXRpb25IYXNoIHtcclxuICAgIFtwcm9wZXJ0eTogc3RyaW5nXTogSVZhbGlkYXRpb25SdWxlPGFueSwgYW55PjtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJT2JqZWN0IHtcclxuICAgIFtwcm9wZXJ0eTogc3RyaW5nXTogYW55O1xyXG59XHJcblxyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgT2JqZWN0VmFsaWRhdGlvblJ1bGVCYXNlPFRJbiwgVE91dD4gaW1wbGVtZW50cyBJVmFsaWRhdGlvblJ1bGU8VEluLCBUT3V0PiB7XHJcbiAgICBwcml2YXRlIG11c3RQcmVkaWNhdGU6ICh2YWx1ZTogVEluLCBlbnRpdHk6IGFueSwgcm9vdDogYW55KSA9PiBib29sZWFuO1xyXG4gICAgcHJpdmF0ZSBtdXN0RXJyb3IgPSBcIlwiO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHByb3RlY3RlZCBzdHJ1Y3Q6IElQcm9wZXJ0eVZhbGlkYXRpb25IYXNoLFxyXG4gICAgICAgIHByb3RlY3RlZCBwYXNzTnVsbE9iamVjdDogYm9vbGVhbixcclxuICAgICAgICBwcm90ZWN0ZWQgbnVsbE9iamVjdEVycm9yTWVzc2FnZT86IHN0cmluZykge1xyXG4gICAgICAgIGlmICghc3RydWN0KSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIm9iamVjdCBzdHJ1Y3R1cmUgZGVzY3JpcHRvciBpcyByZXF1aXJlZFwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFwYXNzTnVsbE9iamVjdCAmJiAhbnVsbE9iamVjdEVycm9yTWVzc2FnZSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJWYWxpZGF0aW9uIG1lc3NhZ2UgZm9yIG51bGwgb2JqZWN0IHJlcXVpcmVkXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBydW4odmFsdWU6IFRJbiwgdmFsaWRhdGlvbkNvbnRleHQ6IFZhbGlkYXRpb25Db250ZXh0LCBlbnRpdHk6IGFueSwgcm9vdDogYW55KTogVE91dCB7XHJcbiAgICAgICAgaWYgKHZhbHVlID09PSBudWxsIHx8IHZhbHVlID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLnBhc3NOdWxsT2JqZWN0KSB7XHJcbiAgICAgICAgICAgICAgICB2YWxpZGF0aW9uQ29udGV4dC5yZXBvcnRFcnJvcih0aGlzLm51bGxPYmplY3RFcnJvck1lc3NhZ2UpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gPFRPdXQ+PGFueT52YWx1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLm11c3RQcmVkaWNhdGUgJiYgIXRoaXMubXVzdFByZWRpY2F0ZSh2YWx1ZSwgZW50aXR5LCByb290KSkge1xyXG4gICAgICAgICAgICB2YWxpZGF0aW9uQ29udGV4dC5yZXBvcnRFcnJvcih0aGlzLm11c3RFcnJvcik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5ydW5Db3JlKHZhbHVlLCB2YWxpZGF0aW9uQ29udGV4dCwgZW50aXR5LCByb290KTtcclxuICAgIH1cclxuXHJcbiAgICBtdXN0KHByZWRpY2F0ZTogKHZhbHVlOiBUSW4sIGVudGl0eT86IGFueSwgcm9vdD86IGFueSkgPT4gYm9vbGVhbiwgZXJyb3JNZXNzYWdlOiBzdHJpbmcgPSBcIk9iamVjdCBkYXRhIGlzIG5vdCB2YWxpZC5cIik6IHRoaXMge1xyXG4gICAgICAgIGlmICghcHJlZGljYXRlKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlByZWRpY2F0ZSBpcyByZXF1cmllZFwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFlcnJvck1lc3NhZ2UpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiRXJyb3IgbWVzc2FnZSBpcyByZXF1aXJlZFwiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMubXVzdFByZWRpY2F0ZSA9IHByZWRpY2F0ZTtcclxuICAgICAgICB0aGlzLm11c3RFcnJvciA9IGVycm9yTWVzc2FnZTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgYWJzdHJhY3QgcnVuQ29yZSh2YWx1ZTogVEluLCB2YWxpZGF0aW9uQ29udGV4dDogVmFsaWRhdGlvbkNvbnRleHQsIGVudGl0eTogYW55LCByb290OiBhbnkpOiBUT3V0O1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgT2JqZWN0VmFsaWRhdGlvblJ1bGU8VEluIGV4dGVuZHMgSU9iamVjdCwgVE91dD4gZXh0ZW5kcyBPYmplY3RWYWxpZGF0aW9uUnVsZUJhc2U8VEluLCBUT3V0PiB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgc3RydWN0OiBJUHJvcGVydHlWYWxpZGF0aW9uSGFzaCxcclxuICAgICAgICBwYXNzTnVsbE9iamVjdDogYm9vbGVhbixcclxuICAgICAgICBudWxsT2JqZWN0RXJyb3JNZXNzYWdlPzogc3RyaW5nKSB7XHJcblxyXG4gICAgICAgIHN1cGVyKHN0cnVjdCwgcGFzc051bGxPYmplY3QsIG51bGxPYmplY3RFcnJvck1lc3NhZ2UpO1xyXG4gICAgfVxyXG5cclxuICAgIHJ1bkNvcmUodmFsdWU6IFRJbiwgdmFsaWRhdGlvbkNvbnRleHQ6IFZhbGlkYXRpb25Db250ZXh0LCBlbnRpdHk6IGFueSwgcm9vdDogYW55KTogVE91dCB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0OiBJT2JqZWN0ID0ge307XHJcblxyXG4gICAgICAgIGZvciAobGV0IHByb3BlcnR5IGluIHRoaXMuc3RydWN0KSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnN0cnVjdC5oYXNPd25Qcm9wZXJ0eShwcm9wZXJ0eSkpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJ1bGUgPSB0aGlzLnN0cnVjdFtwcm9wZXJ0eV07XHJcbiAgICAgICAgICAgICAgICBjb25zdCBpbnB1dFZhbHVlID0gdmFsdWVbcHJvcGVydHldO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IG5lc3RlZENvbnRleHQgPSB2YWxpZGF0aW9uQ29udGV4dC5wcm9wZXJ0eShwcm9wZXJ0eSk7XHJcblxyXG4gICAgICAgICAgICAgICAgcmVzdWx0W3Byb3BlcnR5XSA9IHJ1bGUucnVuKGlucHV0VmFsdWUsIG5lc3RlZENvbnRleHQsIHZhbHVlLCByb290KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIDxUT3V0PnJlc3VsdDtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEV4cGFuZGFibGVPYmplY3RWYWxpZGF0aW9uUnVsZTxUSW4gZXh0ZW5kcyBJT2JqZWN0LCBUT3V0PiBleHRlbmRzIE9iamVjdFZhbGlkYXRpb25SdWxlQmFzZTxUSW4sIFRPdXQ+IHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBzdHJ1Y3Q6IElQcm9wZXJ0eVZhbGlkYXRpb25IYXNoLFxyXG4gICAgICAgIHBhc3NOdWxsT2JqZWN0OiBib29sZWFuLFxyXG4gICAgICAgIG51bGxPYmplY3RFcnJvck1lc3NhZ2U/OiBzdHJpbmcpIHtcclxuXHJcbiAgICAgICAgc3VwZXIoc3RydWN0LCBwYXNzTnVsbE9iamVjdCwgbnVsbE9iamVjdEVycm9yTWVzc2FnZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcnVuQ29yZSh2YWx1ZTogVEluLCB2YWxpZGF0aW9uQ29udGV4dDogVmFsaWRhdGlvbkNvbnRleHQsIGVudGl0eTogYW55LCByb290OiBhbnkpOiBUT3V0IHtcclxuICAgICAgICBjb25zdCByZXN1bHQ6IElPYmplY3QgPSB7fTtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgcHJvcGVydHkgaW4gdmFsdWUpIHtcclxuICAgICAgICAgICAgaWYgKHZhbHVlLmhhc093blByb3BlcnR5KHByb3BlcnR5KSkge1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IHJ1bGUgPSB0aGlzLnN0cnVjdFtwcm9wZXJ0eV07XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHJ1bGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBpbnB1dFZhbHVlID0gdmFsdWVbcHJvcGVydHldO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG5lc3RlZENvbnRleHQgPSB2YWxpZGF0aW9uQ29udGV4dC5wcm9wZXJ0eShwcm9wZXJ0eSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0W3Byb3BlcnR5XSA9IHJ1bGUucnVuKGlucHV0VmFsdWUsIG5lc3RlZENvbnRleHQsIHZhbHVlLCByb290KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdFtwcm9wZXJ0eV0gPSB2YWx1ZVtwcm9wZXJ0eV07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiA8VE91dD5yZXN1bHQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDcmVhdGVzIGEgcnVsZSB3aGljaCB2YWxpZGF0ZXMgZ2l2ZW4gb2JqZWN0IGFjY29yZGluZyB0byBzdHJ1Y3R1cmUuXHJcbiAqIEFueSBleHRyYSBwcm9wZXJ0aWVzIHdvdWxkIGJlIG9taXR0ZWQgZnJvbSB0aGUgcmVzdWx0LlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIG9iajxUSW4sIFRPdXQ+KHN0cnVjdDogSVByb3BlcnR5VmFsaWRhdGlvbkhhc2gsIG51bGxPYmplY3RFcnJvck1lc3NhZ2U6IHN0cmluZyA9IFwiT2JqZWN0IHJlcXVpcmVkXCIpOiBPYmplY3RWYWxpZGF0aW9uUnVsZTxUSW4sIFRPdXQ+IHtcclxuICAgIGlmICghc3RydWN0KSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiT2JqZWN0IHN0cnVjdHVyZSBkZXNjcmlwdG9yIGlzIHJlcXVpcmVkXCIpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIG5ldyBPYmplY3RWYWxpZGF0aW9uUnVsZTxUSW4sIFRPdXQ+KHN0cnVjdCwgZmFsc2UsIG51bGxPYmplY3RFcnJvck1lc3NhZ2UpO1xyXG59XHJcblxyXG4vKipcclxuICogQ3JlYXRlcyBhIHJ1bGUgd2hpY2ggdmFsaWRhdGVzIGdpdmVuIG9iamVjdCBhY2NvcmRpbmcgdG8gc3RydWN0dXJlLlxyXG4gKiBBbnkgZXh0cmEgcHJvcGVydGllcyB3b3VsZCBiZSBvbWl0dGVkIGZyb20gdGhlIHJlc3VsdC5cclxuICogVGhpcyB2YWxpZGF0b3IgZG9lc24ndCBmYWlsIG9uIG51bGwgdmFsdWUuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gb2JqT3B0aW9uYWw8VEluLCBUT3V0PihzdHJ1Y3Q6IElQcm9wZXJ0eVZhbGlkYXRpb25IYXNoKTogT2JqZWN0VmFsaWRhdGlvblJ1bGU8VEluLCBUT3V0PiB7XHJcbiAgICBpZiAoIXN0cnVjdCkge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIk9iamVjdCBzdHJ1Y3R1cmUgZGVzY3JpcHRvciBpcyByZXF1aXJlZFwiKTtcclxuICAgIH1cclxuICAgIHJldHVybiBuZXcgT2JqZWN0VmFsaWRhdGlvblJ1bGU8VEluLCBUT3V0PihzdHJ1Y3QsIHRydWUpO1xyXG59XHJcblxyXG4vKipcclxuICogQ3JlYXRlcyBhIHJ1bGUgd2hpY2ggdmFsaWRhdGVzIGdpdmVuIG9iamVjdCBhY2NvcmRpbmcgdG8gc3RydWN0dXJlLlxyXG4gKiBBbnkgZXh0cmEgcHJvcGVydGllcyB3b3VsZCBiZSBwcmVzZXJ2ZWQgYXMgaXMgaW4gcmVzdWx0LlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGV4cGFuZGFibGVPYmplY3Q8VEluLCBUT3V0PihzdHJ1Y3Q6IElQcm9wZXJ0eVZhbGlkYXRpb25IYXNoLCBudWxsT2JqZWN0RXJyb3JNZXNzYWdlOiBzdHJpbmcgPSBcIk9iamVjdCByZXF1aXJlZFwiKTogRXhwYW5kYWJsZU9iamVjdFZhbGlkYXRpb25SdWxlPFRJbiwgVE91dD4ge1xyXG4gICAgaWYgKCFzdHJ1Y3QpIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJPYmplY3Qgc3RydWN0dXJlIGRlc2NyaXB0b3IgaXMgcmVxdWlyZWRcIik7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbmV3IEV4cGFuZGFibGVPYmplY3RWYWxpZGF0aW9uUnVsZTxUSW4sIFRPdXQ+KHN0cnVjdCwgZmFsc2UsIG51bGxPYmplY3RFcnJvck1lc3NhZ2UpO1xyXG59XHJcblxyXG4vKipcclxuICogQ3JlYXRlcyBhIHJ1bGUgd2hpY2ggdmFsaWRhdGVzIGdpdmVuIG9iamVjdCBhY2NvcmRpbmcgdG8gc3RydWN0dXJlLlxyXG4gKiBBbnkgZXh0cmEgcHJvcGVydGllcyB3b3VsZCBiZSBwcmVzZXJ2ZWQgYXMgaXMgaW4gcmVzdWx0LlxyXG4gKiBUaGlzIHZhbGlkYXRvciBkb2Vzbid0IGZhaWwgb24gbnVsbCB2YWx1ZS5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBvcHRpb25hbEV4cGFuZGFibGVPYmplY3Q8VEluLCBUT3V0PihzdHJ1Y3Q6IElQcm9wZXJ0eVZhbGlkYXRpb25IYXNoKTogRXhwYW5kYWJsZU9iamVjdFZhbGlkYXRpb25SdWxlPFRJbiwgVE91dD4ge1xyXG4gICAgaWYgKCFzdHJ1Y3QpIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJPYmplY3Qgc3RydWN0dXJlIGRlc2NyaXB0b3IgaXMgcmVxdWlyZWRcIik7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIG5ldyBFeHBhbmRhYmxlT2JqZWN0VmFsaWRhdGlvblJ1bGU8VEluLCBUT3V0PihzdHJ1Y3QsIHRydWUpO1xyXG59XHJcbiJdfQ==

/***/ },
/* 17 */
/***/ function(module, exports) {

	"use strict";
	var HashValidationRule = (function () {
	    function HashValidationRule(elementValidationRule, passNullObject, nullObjectErrorMessage) {
	        this.elementValidationRule = elementValidationRule;
	        this.passNullObject = passNullObject;
	        this.nullObjectErrorMessage = nullObjectErrorMessage;
	        this.skipInvalid = false;
	        if (!elementValidationRule) {
	            throw new Error("Element validation rule required");
	        }
	        if (!passNullObject && !nullObjectErrorMessage) {
	            throw new Error("Validation message for null object required");
	        }
	    }
	    HashValidationRule.prototype.run = function (value, validationContext, entity, root) {
	        var _this = this;
	        if (value === null || value === undefined) {
	            if (!this.passNullObject) {
	                validationContext.reportError(this.nullObjectErrorMessage);
	            }
	            return value;
	        }
	        if (this.mustPredicate && !this.mustPredicate(value, entity, root)) {
	            validationContext.reportError(this.mustErrorMessage);
	            return value;
	        }
	        var result = {};
	        var _loop_1 = function(key) {
	            if (this_1.keyFilteringFunction && !this_1.keyFilteringFunction(key)) {
	                return "continue";
	            }
	            var valid = true;
	            var nestedValidationContext = validationContext.property(key, function () {
	                valid = false;
	                return !_this.skipInvalid;
	            });
	            var convertedValue = this_1.elementValidationRule.run(value[key], nestedValidationContext, value, root);
	            if (valid || !this_1.skipInvalid) {
	                result[key] = convertedValue;
	            }
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
	        if (!predicate) {
	            throw new Error("predicate is required");
	        }
	        if (!errorMessage) {
	            throw new Error("Error message is required");
	        }
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
	exports.HashValidationRule = HashValidationRule;
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGFzaC1ydWxlcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImhhc2gtcnVsZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQVFBO0lBT0ksNEJBQ1kscUJBQStELEVBQy9ELGNBQXVCLEVBQ3ZCLHNCQUErQjtRQUYvQiwwQkFBcUIsR0FBckIscUJBQXFCLENBQTBDO1FBQy9ELG1CQUFjLEdBQWQsY0FBYyxDQUFTO1FBQ3ZCLDJCQUFzQixHQUF0QixzQkFBc0IsQ0FBUztRQVJuQyxnQkFBVyxHQUFHLEtBQUssQ0FBQztRQVV4QixFQUFFLENBQUMsQ0FBQyxDQUFDLHFCQUFxQixDQUFDLENBQUMsQ0FBQztZQUN6QixNQUFNLElBQUksS0FBSyxDQUFDLGtDQUFrQyxDQUFDLENBQUM7UUFDeEQsQ0FBQztRQUNELEVBQUUsQ0FBQyxDQUFDLENBQUMsY0FBYyxJQUFJLENBQUMsc0JBQXNCLENBQUMsQ0FBQyxDQUFDO1lBQzdDLE1BQU0sSUFBSSxLQUFLLENBQUMsNkNBQTZDLENBQUMsQ0FBQztRQUNuRSxDQUFDO0lBQ0wsQ0FBQztJQUVELGdDQUFHLEdBQUgsVUFBSSxLQUF3QixFQUFFLGlCQUFvQyxFQUFFLE1BQVcsRUFBRSxJQUFTO1FBQTFGLGlCQW1DQztRQWxDRyxFQUFFLENBQUMsQ0FBQyxLQUFLLEtBQUssSUFBSSxJQUFJLEtBQUssS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDO1lBQ3hDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3ZCLGlCQUFpQixDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsc0JBQXNCLENBQUMsQ0FBQztZQUMvRCxDQUFDO1lBRUQsTUFBTSxDQUEwQixLQUFLLENBQUM7UUFDMUMsQ0FBQztRQUVELEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2pFLGlCQUFpQixDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztZQUVyRCxNQUFNLENBQTBCLEtBQUssQ0FBQztRQUMxQyxDQUFDO1FBRUQsSUFBTSxNQUFNLEdBQXVCLEVBQUUsQ0FBQztRQUV0QztZQUNJLEVBQUUsQ0FBQyxDQUFDLE1BQUksQ0FBQyxvQkFBb0IsSUFBSSxDQUFDLE1BQUksQ0FBQyxvQkFBb0IsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQy9ELGtCQUFTO1lBQ2IsQ0FBQztZQUVELElBQUksS0FBSyxHQUFHLElBQUksQ0FBQztZQUNqQixJQUFNLHVCQUF1QixHQUFHLGlCQUFpQixDQUFDLFFBQVEsQ0FBQyxHQUFHLEVBQUU7Z0JBQzVELEtBQUssR0FBRyxLQUFLLENBQUM7Z0JBQ2QsTUFBTSxDQUFDLENBQUMsS0FBSSxDQUFDLFdBQVcsQ0FBQztZQUM3QixDQUFDLENBQUMsQ0FBQztZQUVILElBQU0sY0FBYyxHQUFHLE1BQUksQ0FBQyxxQkFBcUIsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFLHVCQUF1QixFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQztZQUN4RyxFQUFFLENBQUMsQ0FBQyxLQUFLLElBQUksQ0FBQyxNQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztnQkFDN0IsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLGNBQWMsQ0FBQztZQUNqQyxDQUFDOzs7UUFkTCxHQUFHLENBQUMsQ0FBQyxJQUFJLEdBQUcsSUFBSSxLQUFLLENBQUM7OztTQWVyQjtRQUVELE1BQU0sQ0FBMEIsTUFBTSxDQUFDO0lBQzNDLENBQUM7SUFFRCxpQ0FBSSxHQUFKLFVBQUssU0FBZ0YsRUFBRSxZQUF5QztRQUF6Qyw0QkFBeUMsR0FBekMsaUNBQXlDO1FBQzVILEVBQUUsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztZQUNiLE1BQU0sSUFBSSxLQUFLLENBQUMsdUJBQXVCLENBQUMsQ0FBQztRQUM3QyxDQUFDO1FBQ0QsRUFBRSxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO1lBQ2hCLE1BQU0sSUFBSSxLQUFLLENBQUMsMkJBQTJCLENBQUMsQ0FBQztRQUNqRCxDQUFDO1FBRUQsSUFBSSxDQUFDLGFBQWEsR0FBRyxTQUFTLENBQUM7UUFDL0IsSUFBSSxDQUFDLGdCQUFnQixHQUFHLFlBQVksQ0FBQztRQUVyQyxNQUFNLENBQUMsSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFFRCx1Q0FBVSxHQUFWLFVBQVcsU0FBZ0M7UUFDdkMsSUFBSSxDQUFDLG9CQUFvQixHQUFHLFNBQVMsQ0FBQztRQUV0QyxNQUFNLENBQUMsSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFFRCwwQ0FBYSxHQUFiLFVBQWMsU0FBeUI7UUFBekIseUJBQXlCLEdBQXpCLGdCQUF5QjtRQUNuQyxJQUFJLENBQUMsV0FBVyxHQUFHLFNBQVMsQ0FBQztRQUM3QixNQUFNLENBQUMsSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFDTCx5QkFBQztBQUFELENBQUMsQUFqRkQsSUFpRkM7QUFqRlksMEJBQWtCLHFCQWlGOUIsQ0FBQTtBQUdEOztHQUVHO0FBQ0gsY0FBOEMscUJBQStELEVBQUUscUJBQXFEO0lBQXJELHFDQUFxRCxHQUFyRCw2Q0FBcUQ7SUFDaEssTUFBTSxDQUFDLElBQUksa0JBQWtCLENBQTBCLHFCQUFxQixFQUFFLEtBQUssRUFBRSxxQkFBcUIsQ0FBQyxDQUFDO0FBQ2hILENBQUM7QUFGZSxZQUFJLE9BRW5CLENBQUE7QUFFRDs7R0FFRztBQUNILHNCQUFzRCxxQkFBK0Q7SUFDakgsTUFBTSxDQUFDLElBQUksa0JBQWtCLENBQTBCLHFCQUFxQixFQUFFLElBQUksQ0FBQyxDQUFDO0FBQ3hGLENBQUM7QUFGZSxvQkFBWSxlQUUzQixDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSVZhbGlkYXRpb25SdWxlIH0gZnJvbSBcIi4uL2RlZmluaXRpb25zXCI7XHJcblxyXG5pbXBvcnQgVmFsaWRhdGlvbkNvbnRleHQgZnJvbSBcIi4uL3ZhbGlkYXRpb24tY29udGV4dFwiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJSGFzaDxURWxlbWVudD4ge1xyXG4gICAgW2tleTogc3RyaW5nXTogVEVsZW1lbnQ7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBIYXNoVmFsaWRhdGlvblJ1bGU8VEluRWxlbWVudCwgVE91dEVsZW1lbnQ+IGltcGxlbWVudHMgSVZhbGlkYXRpb25SdWxlPElIYXNoPFRJbkVsZW1lbnQ+LCBJSGFzaDxUT3V0RWxlbWVudD4+IHtcclxuICAgIHByaXZhdGUga2V5RmlsdGVyaW5nRnVuY3Rpb246IChrZXk6IGFueSkgPT4gYm9vbGVhbjtcclxuICAgIHByaXZhdGUgc2tpcEludmFsaWQgPSBmYWxzZTtcclxuXHJcbiAgICBwcml2YXRlIG11c3RQcmVkaWNhdGU6ICh2YWx1ZTogSUhhc2g8VEluRWxlbWVudD4sIGVudGl0eT86IGFueSwgcm9vdEVudGl0eT86IGFueSkgPT4gYm9vbGVhbjtcclxuICAgIHByaXZhdGUgbXVzdEVycm9yTWVzc2FnZTogc3RyaW5nO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHByaXZhdGUgZWxlbWVudFZhbGlkYXRpb25SdWxlOiBJVmFsaWRhdGlvblJ1bGU8VEluRWxlbWVudCwgVE91dEVsZW1lbnQ+LFxyXG4gICAgICAgIHByaXZhdGUgcGFzc051bGxPYmplY3Q6IGJvb2xlYW4sXHJcbiAgICAgICAgcHJpdmF0ZSBudWxsT2JqZWN0RXJyb3JNZXNzYWdlPzogc3RyaW5nKSB7XHJcblxyXG4gICAgICAgIGlmICghZWxlbWVudFZhbGlkYXRpb25SdWxlKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkVsZW1lbnQgdmFsaWRhdGlvbiBydWxlIHJlcXVpcmVkXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIXBhc3NOdWxsT2JqZWN0ICYmICFudWxsT2JqZWN0RXJyb3JNZXNzYWdlKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlZhbGlkYXRpb24gbWVzc2FnZSBmb3IgbnVsbCBvYmplY3QgcmVxdWlyZWRcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJ1bih2YWx1ZTogSUhhc2g8VEluRWxlbWVudD4sIHZhbGlkYXRpb25Db250ZXh0OiBWYWxpZGF0aW9uQ29udGV4dCwgZW50aXR5OiBhbnksIHJvb3Q6IGFueSk6IElIYXNoPFRPdXRFbGVtZW50PiB7XHJcbiAgICAgICAgaWYgKHZhbHVlID09PSBudWxsIHx8IHZhbHVlID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLnBhc3NOdWxsT2JqZWN0KSB7XHJcbiAgICAgICAgICAgICAgICB2YWxpZGF0aW9uQ29udGV4dC5yZXBvcnRFcnJvcih0aGlzLm51bGxPYmplY3RFcnJvck1lc3NhZ2UpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gPElIYXNoPFRPdXRFbGVtZW50Pj48YW55PnZhbHVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMubXVzdFByZWRpY2F0ZSAmJiAhdGhpcy5tdXN0UHJlZGljYXRlKHZhbHVlLCBlbnRpdHksIHJvb3QpKSB7XHJcbiAgICAgICAgICAgIHZhbGlkYXRpb25Db250ZXh0LnJlcG9ydEVycm9yKHRoaXMubXVzdEVycm9yTWVzc2FnZSk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gPElIYXNoPFRPdXRFbGVtZW50Pj48YW55PnZhbHVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgcmVzdWx0OiBJSGFzaDxUT3V0RWxlbWVudD4gPSB7fTtcclxuXHJcbiAgICAgICAgZm9yIChsZXQga2V5IGluIHZhbHVlKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmtleUZpbHRlcmluZ0Z1bmN0aW9uICYmICF0aGlzLmtleUZpbHRlcmluZ0Z1bmN0aW9uKGtleSkpIHtcclxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBsZXQgdmFsaWQgPSB0cnVlO1xyXG4gICAgICAgICAgICBjb25zdCBuZXN0ZWRWYWxpZGF0aW9uQ29udGV4dCA9IHZhbGlkYXRpb25Db250ZXh0LnByb3BlcnR5KGtleSwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdmFsaWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHJldHVybiAhdGhpcy5za2lwSW52YWxpZDtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBjb252ZXJ0ZWRWYWx1ZSA9IHRoaXMuZWxlbWVudFZhbGlkYXRpb25SdWxlLnJ1bih2YWx1ZVtrZXldLCBuZXN0ZWRWYWxpZGF0aW9uQ29udGV4dCwgdmFsdWUsIHJvb3QpO1xyXG4gICAgICAgICAgICBpZiAodmFsaWQgfHwgIXRoaXMuc2tpcEludmFsaWQpIHtcclxuICAgICAgICAgICAgICAgIHJlc3VsdFtrZXldID0gY29udmVydGVkVmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiA8SUhhc2g8VE91dEVsZW1lbnQ+Pjxhbnk+cmVzdWx0O1xyXG4gICAgfVxyXG5cclxuICAgIG11c3QocHJlZGljYXRlOiAodmFsdWU6IElIYXNoPFRJbkVsZW1lbnQ+LCBlbnRpdHk/OiBhbnksIHJvb3RFbnRpdHk/OiBhbnkpID0+IGJvb2xlYW4sIGVycm9yTWVzc2FnZTogc3RyaW5nID0gXCJWYWx1ZSBpcyBpbnZhbGlkXCIpOiB0aGlzIHtcclxuICAgICAgICBpZiAoIXByZWRpY2F0ZSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJwcmVkaWNhdGUgaXMgcmVxdWlyZWRcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghZXJyb3JNZXNzYWdlKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkVycm9yIG1lc3NhZ2UgaXMgcmVxdWlyZWRcIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLm11c3RQcmVkaWNhdGUgPSBwcmVkaWNhdGU7XHJcbiAgICAgICAgdGhpcy5tdXN0RXJyb3JNZXNzYWdlID0gZXJyb3JNZXNzYWdlO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBmaWx0ZXJLZXlzKHByZWRpY2F0ZTogKGtleTogYW55KSA9PiBib29sZWFuKTogdGhpcyB7XHJcbiAgICAgICAgdGhpcy5rZXlGaWx0ZXJpbmdGdW5jdGlvbiA9IHByZWRpY2F0ZTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAga2VlcE9ubHlWYWxpZChvbmx5VmFsaWQ6IGJvb2xlYW4gPSB0cnVlKTogdGhpcyB7XHJcbiAgICAgICAgdGhpcy5za2lwSW52YWxpZCA9IG9ubHlWYWxpZDtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxufVxyXG5cclxuXHJcbi8qKlxyXG4gKiBWYWxpZGF0ZXMgb2JqZWN0IGhhc2ggKGFuIG9iamVjdCBlYWNoIHByb3BlcnR5IG9mIHdoaWNoIGhhcyB0aGUgc2FtZSBzdHJ1Y3R1cmUpLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGhhc2g8VEluRWxlbWVudCwgVE91dEVsZW1lbnQ+KGVsZW1lbnRWYWxpZGF0aW9uUnVsZTogSVZhbGlkYXRpb25SdWxlPFRJbkVsZW1lbnQsIFRPdXRFbGVtZW50PiwgbnVsbFZhbHVlRXJyb3JNZXNzYWdlOiBzdHJpbmcgPSBcIk9iamVjdCBpcyByZXF1aXJlZC5cIik6IEhhc2hWYWxpZGF0aW9uUnVsZTxUSW5FbGVtZW50LCBUT3V0RWxlbWVudD4ge1xyXG4gICAgcmV0dXJuIG5ldyBIYXNoVmFsaWRhdGlvblJ1bGU8VEluRWxlbWVudCwgVE91dEVsZW1lbnQ+KGVsZW1lbnRWYWxpZGF0aW9uUnVsZSwgZmFsc2UsIG51bGxWYWx1ZUVycm9yTWVzc2FnZSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBWYWxpZGF0ZXMgb2JqZWN0IGhhc2ggKGFuIG9iamVjdCBlYWNoIHByb3BlcnR5IG9mIHdoaWNoIGhhcyB0aGUgc2FtZSBzdHJ1Y3R1cmUpLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGhhc2hPcHRpb25hbDxUSW5FbGVtZW50LCBUT3V0RWxlbWVudD4oZWxlbWVudFZhbGlkYXRpb25SdWxlOiBJVmFsaWRhdGlvblJ1bGU8VEluRWxlbWVudCwgVE91dEVsZW1lbnQ+KTogSGFzaFZhbGlkYXRpb25SdWxlPFRJbkVsZW1lbnQsIFRPdXRFbGVtZW50PiB7XHJcbiAgICByZXR1cm4gbmV3IEhhc2hWYWxpZGF0aW9uUnVsZTxUSW5FbGVtZW50LCBUT3V0RWxlbWVudD4oZWxlbWVudFZhbGlkYXRpb25SdWxlLCB0cnVlKTtcclxufVxyXG4iXX0=

/***/ },
/* 18 */
/***/ function(module, exports) {

	"use strict";
	var ArrayValidationRule = (function () {
	    function ArrayValidationRule(elementValidator, passNullOrEmptyArray, nullOrEmptyArrayErrorMessage) {
	        this.elementValidator = elementValidator;
	        this.passNullOrEmptyArray = passNullOrEmptyArray;
	        this.nullOrEmptyArrayErrorMessage = nullOrEmptyArrayErrorMessage;
	        this.keepOnlyValidElements = false;
	        if (!this.passNullOrEmptyArray && !this.nullOrEmptyArrayErrorMessage) {
	            throw new Error("Null or empty array error message required is null array is not passed");
	        }
	    }
	    ArrayValidationRule.prototype.run = function (value, validationContext, entity, root) {
	        var _this = this;
	        if (value === null || value === undefined || value.length === 0) {
	            if (!this.passNullOrEmptyArray) {
	                validationContext.reportError(this.nullOrEmptyArrayErrorMessage);
	            }
	            return value;
	        }
	        var result = [];
	        var _loop_1 = function(i) {
	            var elem = value[i];
	            if (this_1.filter && !this_1.filter(elem, value, root)) {
	                return "continue";
	            }
	            var valid = true;
	            var nestedValidationContext = validationContext.index(i, function () {
	                valid = false;
	                return !_this.keepOnlyValidElements;
	            });
	            var convertedValue = this_1.elementValidator.run(elem, nestedValidationContext, value, root);
	            if (valid || !this_1.keepOnlyValidElements) {
	                result.push(convertedValue);
	            }
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
	        if (!predicate) {
	            throw new Error("predicate is required");
	        }
	        this.filter = predicate;
	        return this;
	    };
	    return ArrayValidationRule;
	}());
	exports.ArrayValidationRule = ArrayValidationRule;
	function arr(elementValidationRule, nullValueErrorMessage) {
	    if (nullValueErrorMessage === void 0) { nullValueErrorMessage = "Value is required."; }
	    return new ArrayValidationRule(elementValidationRule, true, nullValueErrorMessage);
	}
	exports.arr = arr;
	function arrOptional(elementValidator) {
	    return new ArrayValidationRule(elementValidator, false);
	}
	exports.arrOptional = arrOptional;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXJyYXktcnVsZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhcnJheS1ydWxlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBSUE7SUFJSSw2QkFDWSxnQkFBMEQsRUFDMUQsb0JBQTZCLEVBQzdCLDRCQUFxQztRQUZyQyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQTBDO1FBQzFELHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBUztRQUM3QixpQ0FBNEIsR0FBNUIsNEJBQTRCLENBQVM7UUFMekMsMEJBQXFCLEdBQVksS0FBSyxDQUFDO1FBTzNDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLG9CQUFvQixJQUFJLENBQUMsSUFBSSxDQUFDLDRCQUE0QixDQUFDLENBQUMsQ0FBQztZQUNuRSxNQUFNLElBQUksS0FBSyxDQUFDLHdFQUF3RSxDQUFDLENBQUM7UUFDOUYsQ0FBQztJQUNMLENBQUM7SUFFRCxpQ0FBRyxHQUFILFVBQUksS0FBbUIsRUFBRSxpQkFBb0MsRUFBRSxNQUFXLEVBQUUsSUFBUztRQUFyRixpQkFpQ0M7UUFoQ0csRUFBRSxDQUFDLENBQUMsS0FBSyxLQUFLLElBQUksSUFBSSxLQUFLLEtBQUssU0FBUyxJQUFJLEtBQUssQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM5RCxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLENBQUM7Z0JBQzdCLGlCQUFpQixDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsNEJBQTRCLENBQUMsQ0FBQztZQUNyRSxDQUFDO1lBRUQsTUFBTSxDQUFxQixLQUFLLENBQUM7UUFDckMsQ0FBQztRQUVELElBQU0sTUFBTSxHQUFrQixFQUFFLENBQUM7UUFFakM7WUFDSSxJQUFNLElBQUksR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFFdEIsRUFBRSxDQUFDLENBQUMsTUFBSSxDQUFDLE1BQU0sSUFBSSxDQUFDLE1BQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ2pELGtCQUFTO1lBQ2IsQ0FBQztZQUVELElBQUksS0FBSyxHQUFHLElBQUksQ0FBQztZQUVqQixJQUFNLHVCQUF1QixHQUFHLGlCQUFpQixDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUU7Z0JBQ3ZELEtBQUssR0FBRyxLQUFLLENBQUM7Z0JBQ2QsTUFBTSxDQUFDLENBQUMsS0FBSSxDQUFDLHFCQUFxQixDQUFDO1lBQ3ZDLENBQUMsQ0FBQyxDQUFDO1lBRUgsSUFBTSxjQUFjLEdBQUcsTUFBSSxDQUFDLGdCQUFnQixDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsdUJBQXVCLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFDO1lBQzdGLEVBQUUsQ0FBQyxDQUFDLEtBQUssSUFBSSxDQUFDLE1BQUksQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLENBQUM7Z0JBQ3ZDLE1BQU0sQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7WUFDaEMsQ0FBQzs7O1FBakJMLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUU7OztTQW1CcEM7UUFFRCxNQUFNLENBQUMsTUFBTSxDQUFDO0lBQ2xCLENBQUM7SUFFRCwyQ0FBYSxHQUFiLFVBQWMsU0FBeUI7UUFBekIseUJBQXlCLEdBQXpCLGdCQUF5QjtRQUNuQyxJQUFJLENBQUMscUJBQXFCLEdBQUcsU0FBUyxDQUFDO1FBQ3ZDLE1BQU0sQ0FBQyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUVELDRDQUFjLEdBQWQsVUFBZSxTQUFrRTtRQUM3RSxFQUFFLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7WUFDYixNQUFNLElBQUksS0FBSyxDQUFDLHVCQUF1QixDQUFDLENBQUM7UUFDN0MsQ0FBQztRQUVELElBQUksQ0FBQyxNQUFNLEdBQUcsU0FBUyxDQUFDO1FBRXhCLE1BQU0sQ0FBQyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUNMLDBCQUFDO0FBQUQsQ0FBQyxBQS9ERCxJQStEQztBQS9EWSwyQkFBbUIsc0JBK0QvQixDQUFBO0FBRUQsYUFBNkMscUJBQStELEVBQUUscUJBQW9EO0lBQXBELHFDQUFvRCxHQUFwRCw0Q0FBb0Q7SUFDOUosTUFBTSxDQUFDLElBQUksbUJBQW1CLENBQTBCLHFCQUFxQixFQUFFLElBQUksRUFBRSxxQkFBcUIsQ0FBQyxDQUFDO0FBQ2hILENBQUM7QUFGZSxXQUFHLE1BRWxCLENBQUE7QUFFRCxxQkFBcUQsZ0JBQTBEO0lBQzNHLE1BQU0sQ0FBQyxJQUFJLG1CQUFtQixDQUEwQixnQkFBZ0IsRUFBRSxLQUFLLENBQUMsQ0FBQztBQUNyRixDQUFDO0FBRmUsbUJBQVcsY0FFMUIsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElWYWxpZGF0aW9uUnVsZSB9IGZyb20gXCIuLi9kZWZpbml0aW9uc1wiO1xyXG5cclxuaW1wb3J0IFZhbGlkYXRpb25Db250ZXh0IGZyb20gXCIuLi92YWxpZGF0aW9uLWNvbnRleHRcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBBcnJheVZhbGlkYXRpb25SdWxlPFRJbkVsZW1lbnQsIFRPdXRFbGVtZW50PiBpbXBsZW1lbnRzIElWYWxpZGF0aW9uUnVsZTxUSW5FbGVtZW50W10sIFRPdXRFbGVtZW50W10+IHtcclxuICAgIHByaXZhdGUgZmlsdGVyOiAoZWxlbTogVEluRWxlbWVudCwgZW50aXR5PzogYW55LCByb290PzogYW55KSA9PiBib29sZWFuO1xyXG4gICAgcHJpdmF0ZSBrZWVwT25seVZhbGlkRWxlbWVudHM6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwcml2YXRlIGVsZW1lbnRWYWxpZGF0b3I6IElWYWxpZGF0aW9uUnVsZTxUSW5FbGVtZW50LCBUT3V0RWxlbWVudD4sXHJcbiAgICAgICAgcHJpdmF0ZSBwYXNzTnVsbE9yRW1wdHlBcnJheTogYm9vbGVhbixcclxuICAgICAgICBwcml2YXRlIG51bGxPckVtcHR5QXJyYXlFcnJvck1lc3NhZ2U/OiBzdHJpbmcpIHtcclxuXHJcbiAgICAgICAgaWYgKCF0aGlzLnBhc3NOdWxsT3JFbXB0eUFycmF5ICYmICF0aGlzLm51bGxPckVtcHR5QXJyYXlFcnJvck1lc3NhZ2UpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTnVsbCBvciBlbXB0eSBhcnJheSBlcnJvciBtZXNzYWdlIHJlcXVpcmVkIGlzIG51bGwgYXJyYXkgaXMgbm90IHBhc3NlZFwiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcnVuKHZhbHVlOiBUSW5FbGVtZW50W10sIHZhbGlkYXRpb25Db250ZXh0OiBWYWxpZGF0aW9uQ29udGV4dCwgZW50aXR5OiBhbnksIHJvb3Q6IGFueSk6IFRPdXRFbGVtZW50W10ge1xyXG4gICAgICAgIGlmICh2YWx1ZSA9PT0gbnVsbCB8fCB2YWx1ZSA9PT0gdW5kZWZpbmVkIHx8IHZhbHVlLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMucGFzc051bGxPckVtcHR5QXJyYXkpIHtcclxuICAgICAgICAgICAgICAgIHZhbGlkYXRpb25Db250ZXh0LnJlcG9ydEVycm9yKHRoaXMubnVsbE9yRW1wdHlBcnJheUVycm9yTWVzc2FnZSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiA8VE91dEVsZW1lbnRbXT48YW55PnZhbHVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgcmVzdWx0OiBUT3V0RWxlbWVudFtdID0gW107XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdmFsdWUubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgY29uc3QgZWxlbSA9IHZhbHVlW2ldO1xyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuZmlsdGVyICYmICF0aGlzLmZpbHRlcihlbGVtLCB2YWx1ZSwgcm9vdCkpIHtcclxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBsZXQgdmFsaWQgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgbmVzdGVkVmFsaWRhdGlvbkNvbnRleHQgPSB2YWxpZGF0aW9uQ29udGV4dC5pbmRleChpLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB2YWxpZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuICF0aGlzLmtlZXBPbmx5VmFsaWRFbGVtZW50cztcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBjb252ZXJ0ZWRWYWx1ZSA9IHRoaXMuZWxlbWVudFZhbGlkYXRvci5ydW4oZWxlbSwgbmVzdGVkVmFsaWRhdGlvbkNvbnRleHQsIHZhbHVlLCByb290KTtcclxuICAgICAgICAgICAgaWYgKHZhbGlkIHx8ICF0aGlzLmtlZXBPbmx5VmFsaWRFbGVtZW50cykge1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0LnB1c2goY29udmVydGVkVmFsdWUpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxuXHJcbiAgICBrZWVwT25seVZhbGlkKG9ubHlWYWxpZDogYm9vbGVhbiA9IHRydWUpOiB0aGlzIHtcclxuICAgICAgICB0aGlzLmtlZXBPbmx5VmFsaWRFbGVtZW50cyA9IG9ubHlWYWxpZDtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBmaWx0ZXJFbGVtZW50cyhwcmVkaWNhdGU6IChlbGVtOiBUSW5FbGVtZW50LCBlbnRpdHk/OiBhbnksIHJvb3Q/OiBhbnkpID0+IGJvb2xlYW4pOiB0aGlzIHtcclxuICAgICAgICBpZiAoIXByZWRpY2F0ZSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJwcmVkaWNhdGUgaXMgcmVxdWlyZWRcIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmZpbHRlciA9IHByZWRpY2F0ZTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhcnI8VEluRWxlbWVudCwgVE91dEVsZW1lbnQ+KGVsZW1lbnRWYWxpZGF0aW9uUnVsZTogSVZhbGlkYXRpb25SdWxlPFRJbkVsZW1lbnQsIFRPdXRFbGVtZW50PiwgbnVsbFZhbHVlRXJyb3JNZXNzYWdlOiBzdHJpbmcgPSBcIlZhbHVlIGlzIHJlcXVpcmVkLlwiKTogQXJyYXlWYWxpZGF0aW9uUnVsZTxUSW5FbGVtZW50LCBUT3V0RWxlbWVudD4ge1xyXG4gICAgcmV0dXJuIG5ldyBBcnJheVZhbGlkYXRpb25SdWxlPFRJbkVsZW1lbnQsIFRPdXRFbGVtZW50PihlbGVtZW50VmFsaWRhdGlvblJ1bGUsIHRydWUsIG51bGxWYWx1ZUVycm9yTWVzc2FnZSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhcnJPcHRpb25hbDxUSW5FbGVtZW50LCBUT3V0RWxlbWVudD4oZWxlbWVudFZhbGlkYXRvcjogSVZhbGlkYXRpb25SdWxlPFRJbkVsZW1lbnQsIFRPdXRFbGVtZW50Pik6IEFycmF5VmFsaWRhdGlvblJ1bGU8VEluRWxlbWVudCwgVE91dEVsZW1lbnQ+IHtcclxuICAgIHJldHVybiBuZXcgQXJyYXlWYWxpZGF0aW9uUnVsZTxUSW5FbGVtZW50LCBUT3V0RWxlbWVudD4oZWxlbWVudFZhbGlkYXRvciwgZmFsc2UpO1xyXG59XHJcbiJdfQ==

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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicHJvZHVjdC1zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGlEQUFpRDs7QUFFakQsSUFBWSxNQUFNLFdBQU0sUUFBUSxDQUFDLENBQUE7QUFDakMsSUFBWSxJQUFJLFdBQU0sV0FBVyxDQUFDLENBQUE7QUFFbEMsMEJBQXFDLGNBQWMsQ0FBQyxDQUFBO0FBRXBELGtDQUE2QixxQkFBcUIsQ0FBQyxDQUFBO0FBRW5EO0lBR0ksd0JBQW9CLE9BQWlDO1FBQWpDLFlBQU8sR0FBUCxPQUFPLENBQTBCO1FBRjdDLGNBQVMsR0FBRyxJQUFJLDJCQUFnQixFQUFFLENBQUM7UUFHdkMsRUFBRSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUM7WUFDVCxNQUFNLElBQUksS0FBSyxDQUFDLHNCQUFzQixDQUFDLENBQUM7SUFDaEQsQ0FBQztJQUVELDRCQUFHLEdBQUg7UUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsQ0FBQztJQUM5QixDQUFDO0lBRUQsNkJBQUksR0FBSixVQUFLLE9BQW9CO1FBQXpCLGlCQTJCQztRQTFCRyxFQUFFLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQztZQUNULE1BQU0sSUFBSSxLQUFLLENBQUMsc0JBQXNCLENBQUMsQ0FBQztRQUU1QyxFQUFFLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUM7WUFDWixPQUFPLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxFQUFFLEVBQUUsQ0FBQztRQUUzQixNQUFNLENBQUMsSUFBSSxPQUFPLENBQUMsVUFBQSxPQUFPO1lBRXRCLElBQU0sZ0JBQWdCLEdBQUcsS0FBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7WUFFMUQsRUFBRSxDQUFDLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFFLENBQUM7Z0JBQ3JCLE9BQU8sQ0FBQyxn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QUFDLElBQUksQ0FBQyxNQUFNLENBQUM7aUJBQ25CLE9BQU8sQ0FBQyxVQUFBLElBQUk7Z0JBQ1QsSUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFFaEMsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQztvQkFDbkIsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUM7Z0JBRS9CLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUc7b0JBQ2YsU0FBUyxFQUFFLEdBQUc7b0JBQ2QsS0FBSyxFQUFFLEtBQUssQ0FBQyxLQUFLO2lCQUNyQixDQUFDO1lBQ04sQ0FBQyxDQUFDLENBQUM7WUFFUCxNQUFNLENBQUMsS0FBSSxDQUFDLE9BQU8sQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDLEVBQUUsRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQzVFLENBQUMsQ0FBQyxDQUFDO0lBQ1gsQ0FBQztJQUNMLHFCQUFDO0FBQUQsQ0FBQyxBQXRHRCxJQXNHQztBQXRHRDtnQ0FzR0MsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi90eXBpbmdzL2luZGV4LmQudHNcIiAvPlxyXG5cclxuaW1wb3J0ICogYXMgbW9tZW50IGZyb20gXCJtb21lbnRcIjtcclxuaW1wb3J0ICogYXMgdXVpZCBmcm9tIFwibm9kZS11dWlkXCI7XHJcblxyXG5pbXBvcnQgeyBldmVudEJ1cywgRXZlbnROYW1lcyB9IGZyb20gXCIuLi9ldmVudC1idXNcIjtcclxuXHJcbmltcG9ydCBQcm9kdWN0VmFsaWRhdG9yIGZyb20gXCIuL3Byb2R1Y3QtdmFsaWRhdG9yXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9kdWN0U2VydmljZSB7XHJcbiAgICBwcml2YXRlIHZhbGlkYXRvciA9IG5ldyBQcm9kdWN0VmFsaWRhdG9yKCk7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBzdG9yYWdlOiBQcm9kdWN0cy5JUHJvZHVjdFN0b3JhZ2UpIHtcclxuICAgICAgICBpZiAoIXN0b3JhZ2UpXHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcInN0b3JhZ2UgaXMgdW5kZWZpbmVkXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIGFsbCgpOiBQcm9taXNlPEFwaS5Qcm9kdWN0W10+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zdG9yYWdlLmFsbCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHNhdmUocHJvZHVjdDogQXBpLlByb2R1Y3QpOiBQcm9taXNlPEFwaS5WYWxpZGF0aW9uUmVzdWx0IHwgQXBpLlByb2R1Y3Q+IHtcclxuICAgICAgICBpZiAoIXByb2R1Y3QpXHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcInByb2R1Y3QgaXMgdW5kZWZpbmVkXCIpO1xyXG5cclxuICAgICAgICBpZiAoIXByb2R1Y3QuaWQpXHJcbiAgICAgICAgICAgIHByb2R1Y3QuaWQgPSB1dWlkLnYxKCk7XHJcblxyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHZhbGlkYXRpb25SZXN1bHQgPSB0aGlzLnZhbGlkYXRvci52YWxpZGF0ZShwcm9kdWN0KTtcclxuXHJcbiAgICAgICAgICAgIGlmICghdmFsaWRhdGlvblJlc3VsdC5vaylcclxuICAgICAgICAgICAgICAgIHJlc29sdmUodmFsaWRhdGlvblJlc3VsdCk7XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcHJvZHVjdCA9IHZhbGlkYXRpb25SZXN1bHQuZW50aXR5O1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuc3RvcmFnZVxyXG4gICAgICAgICAgICAgICAgICAgIC5zYXZlKHByb2R1Y3QpXHJcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oKCkgPT4gdGhpcy5vbmUocHJvZHVjdC5pZCkpXHJcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4ocCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50QnVzLmVtaXQoRXZlbnROYW1lcy5Qcm9kdWN0VXBkYXRlZCwgcC5pZCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcDtcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKGVudGl0eSA9PiByZXNvbHZlKGVudGl0eSkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25lKHByb2R1Y3RJZDogc3RyaW5nKTogUHJvbWlzZTxBcGkuUHJvZHVjdD4ge1xyXG4gICAgICAgIGlmICghcHJvZHVjdElkKVxyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJwcm9kdWN0SWQgaXMgdW5kZWZpbmVkXCIpO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5zdG9yYWdlLm9uZShwcm9kdWN0SWQpO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZVNjcmFwZWREYXRhKHByb2R1Y3RJZDogc3RyaW5nLCB3ZWJzaG9wSWQ6IHN0cmluZywgZGF0YTogU2NyYXBpbmcuV2ViU2hvcFNjcmFwaW5nUmVzdWx0KTogUHJvbWlzZTxBcGkuUHJvZHVjdD4ge1xyXG4gICAgICAgIGlmICghcHJvZHVjdElkKVxyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJwcm9kdWN0SWQgaXMgdW5kZWZpbmVkXCIpO1xyXG4gICAgICAgIGlmICghd2Vic2hvcElkKVxyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJ3ZWJTaG9wSWQgaXMgdW5kZWZpbmVkXCIpO1xyXG4gICAgICAgIGlmICghZGF0YSlcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiZGF0YSBpcyB1bmRlZmluZWRcIik7XHJcbiAgICAgICAgY29uc3Qgbm93ID0gbW9tZW50LnV0YygpLnRvRGF0ZSgpO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5vbmUocHJvZHVjdElkKVxyXG4gICAgICAgICAgICAudGhlbihwcm9kdWN0ID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICghcHJvZHVjdC52YWx1ZXMpXHJcbiAgICAgICAgICAgICAgICAgICAgcHJvZHVjdC52YWx1ZXMgPSB7fTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZXMgPSBwcm9kdWN0LnZhbHVlc1t3ZWJzaG9wSWRdIHx8XHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJpY2U6IG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlOiBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIHByb2R1Y3QudmFsdWVzW3dlYnNob3BJZF0gPSB2YWx1ZXM7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCFwcm9kdWN0LmxvZylcclxuICAgICAgICAgICAgICAgICAgICBwcm9kdWN0LmxvZyA9IHt9O1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IGxvZyA9IHByb2R1Y3QubG9nW3dlYnNob3BJZF0gfHxcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybDogbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2NyYXBlZEF0OiBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvcjogZGF0YS5lcnJvcixcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVzOiB7fVxyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICBwcm9kdWN0LmxvZ1t3ZWJzaG9wSWRdID0gbG9nO1xyXG5cclxuICAgICAgICAgICAgICAgIGxvZy51cmwgPSBwcm9kdWN0LnNjcmFwaW5nVXJsc1t3ZWJzaG9wSWRdO1xyXG4gICAgICAgICAgICAgICAgbG9nLnNjcmFwZWRBdCA9IG5vdztcclxuICAgICAgICAgICAgICAgIGxvZy5lcnJvciA9IGRhdGEuZXJyb3I7XHJcblxyXG4gICAgICAgICAgICAgICAgT2JqZWN0LmtleXMoZGF0YS52YWx1ZXMpXHJcbiAgICAgICAgICAgICAgICAgICAgLmZvckVhY2gobmFtZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gZGF0YS52YWx1ZXNbbmFtZV07XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodmFsdWUuaXNTdWNjZXNzZnVsKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVzW25hbWVdID0gdmFsdWUudmFsdWU7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2cudmFsdWVzW25hbWVdID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2NyYXBlZEF0OiBub3csXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcjogdmFsdWUuZXJyb3JcclxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5zdG9yYWdlLnNldFNjcmFwaW5nRGF0YShwcm9kdWN0LmlkLCB3ZWJzaG9wSWQsIHZhbHVlcywgbG9nKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcbn0iXX0=

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
/* 26 */,
/* 27 */,
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	/// <reference path="../../server/typings/index.d.ts" />
	"use strict";
	var db_1 = __webpack_require__(3);
	var mongo_product_storage_1 = __webpack_require__(19);
	var product_service_1 = __webpack_require__(20);
	var mongo_web_shop_storage_1 = __webpack_require__(7);
	var web_shop_service_1 = __webpack_require__(8);
	var scrape_service_1 = __webpack_require__(29);
	var db = new db_1.default();
	var webShopService = new web_shop_service_1.default(new mongo_web_shop_storage_1.default(db));
	var productService = new product_service_1.default(new mongo_product_storage_1.default(db));
	var scrapeService = new scrape_service_1.default(productService, webShopService);
	function outputProductScrapeResult(scrapeResult, product, shops) {
	    Object.keys(scrapeResult)
	        .forEach(function (shopId) {
	        var shop = shops.filter(function (s) { return s.id === shopId; })[0];
	        var result = scrapeResult[shopId];
	        console.log("Scrapping of " + product.title + " successful for shop " + shop.title);
	        var out = {};
	        Object.keys(result.values)
	            .forEach(function (k) {
	            var v = result.values[k];
	            if (v.isSuccessful) {
	                out[k] = v.value;
	            }
	            else {
	                out[k] = {
	                    error: v.error
	                };
	            }
	        });
	        console.dir(out);
	    });
	}
	webShopService.all()
	    .then(function (shops) {
	    return productService.all()
	        .then(function (products) {
	        var productScrapePromises = products.map(function (product) {
	            return scrapeService.scrapeProductData(product.id)
	                .then(function (productScrapeResultHash) { return outputProductScrapeResult(productScrapeResultHash, product, shops); });
	        });
	        return Promise.all(productScrapePromises);
	    });
	})
	    .then(function () {
	    console.info("Scraping completed successfully");
	    process.exit();
	})
	    .catch(function (err) {
	    console.error("Scraping failed");
	    console.error(err);
	    process.exit();
	});
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicnVuLXBhZ2UtcGFyc2luZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInJ1bi1wYWdlLXBhcnNpbmcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsd0RBQXdEOztBQUV4RCxtQkFBcUIsNkJBQTZCLENBQUMsQ0FBQTtBQUVuRCxzQ0FBZ0Msc0RBQXNELENBQUMsQ0FBQTtBQUN2RixnQ0FBMkIsZ0RBQWdELENBQUMsQ0FBQTtBQUU1RSx1Q0FBZ0MsdURBQXVELENBQUMsQ0FBQTtBQUN4RixpQ0FBMkIsaURBQWlELENBQUMsQ0FBQTtBQUk3RSwrQkFBMEIsK0NBQStDLENBQUMsQ0FBQTtBQUUxRSxJQUFNLEVBQUUsR0FBRyxJQUFJLFlBQVEsRUFBRSxDQUFDO0FBRTFCLElBQU0sY0FBYyxHQUFHLElBQUksMEJBQWMsQ0FBQyxJQUFJLGdDQUFtQixDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDdkUsSUFBTSxjQUFjLEdBQUcsSUFBSSx5QkFBYyxDQUFDLElBQUksK0JBQW1CLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUV2RSxJQUFNLGFBQWEsR0FBRyxJQUFJLHdCQUFhLENBQUMsY0FBYyxFQUFFLGNBQWMsQ0FBQyxDQUFDO0FBRXhFLG1DQUFtQyxZQUEwQyxFQUFFLE9BQW9CLEVBQUUsS0FBb0I7SUFDckgsTUFBTSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUM7U0FDcEIsT0FBTyxDQUFDLFVBQUEsTUFBTTtRQUNYLElBQU0sSUFBSSxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLENBQUMsRUFBRSxLQUFLLE1BQU0sRUFBZixDQUFlLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNuRCxJQUFNLE1BQU0sR0FBRyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUM7UUFFcEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQkFBZ0IsT0FBTyxDQUFDLEtBQUssNkJBQXdCLElBQUksQ0FBQyxLQUFPLENBQUMsQ0FBQztRQUUvRSxJQUFNLEdBQUcsR0FBRyxFQUFFLENBQUM7UUFDZixNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUM7YUFDckIsT0FBTyxDQUFDLFVBQUEsQ0FBQztZQUNOLElBQU0sQ0FBQyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDM0IsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7Z0JBQ2pCLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDO1lBQ3JCLENBQUM7WUFBQyxJQUFJLENBQUMsQ0FBQztnQkFDSixHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUc7b0JBQ0wsS0FBSyxFQUFFLENBQUMsQ0FBQyxLQUFLO2lCQUNqQixDQUFDO1lBQ04sQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFDO1FBRVAsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNyQixDQUFDLENBQUMsQ0FBQztBQUVYLENBQUM7QUFFRCxjQUFjLENBQUMsR0FBRyxFQUFFO0tBQ2YsSUFBSSxDQUFDLFVBQUEsS0FBSztJQUNQLE1BQU0sQ0FBQyxjQUFjLENBQUMsR0FBRyxFQUFFO1NBQ3RCLElBQUksQ0FBQyxVQUFBLFFBQVE7UUFDVixJQUFNLHFCQUFxQixHQUFHLFFBQVEsQ0FBQyxHQUFHLENBQUMsVUFBQSxPQUFPO1lBQzlDLE1BQU0sQ0FBQyxhQUFhLENBQUMsaUJBQWlCLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQztpQkFDN0MsSUFBSSxDQUFDLFVBQUEsdUJBQXVCLElBQUksT0FBQSx5QkFBeUIsQ0FBQyx1QkFBdUIsRUFBRSxPQUFPLEVBQUUsS0FBSyxDQUFDLEVBQWxFLENBQWtFLENBQUMsQ0FBQztRQUM3RyxDQUFDLENBQUMsQ0FBQztRQUVILE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLHFCQUFxQixDQUFDLENBQUM7SUFDOUMsQ0FBQyxDQUFDLENBQUM7QUFDWCxDQUFDLENBQUM7S0FDRCxJQUFJLENBQUM7SUFDRixPQUFPLENBQUMsSUFBSSxDQUFDLGlDQUFpQyxDQUFDLENBQUM7SUFDaEQsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO0FBQ25CLENBQUMsQ0FBQztLQUNELEtBQUssQ0FBQyxVQUFBLEdBQUc7SUFDTixPQUFPLENBQUMsS0FBSyxDQUFDLGlCQUFpQixDQUFDLENBQUM7SUFDakMsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNuQixPQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7QUFDbkIsQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vc2VydmVyL3R5cGluZ3MvaW5kZXguZC50c1wiIC8+XHJcblxyXG5pbXBvcnQgRGF0YWJhc2UgZnJvbSBcIi4uLy4uL3NlcnZlci9kYXRhLWFjY2Vzcy9kYlwiO1xyXG5cclxuaW1wb3J0IE1vbmdvUHJvZHVjdFN0b3JhZ2UgZnJvbSBcIi4uLy4uL3NlcnZlci9zZXJ2aWNlcy9wcm9kdWN0cy9tb25nby1wcm9kdWN0LXN0b3JhZ2VcIjtcclxuaW1wb3J0IFByb2R1Y3RTZXJ2aWNlIGZyb20gXCIuLi8uLi9zZXJ2ZXIvc2VydmljZXMvcHJvZHVjdHMvcHJvZHVjdC1zZXJ2aWNlXCI7XHJcblxyXG5pbXBvcnQgTW9uZ29XZWJTaG9wU3RvcmFnZSBmcm9tIFwiLi4vLi4vc2VydmVyL3NlcnZpY2VzL3dlYi1zaG9wL21vbmdvLXdlYi1zaG9wLXN0b3JhZ2VcIjtcclxuaW1wb3J0IFdlYlNob3BTZXJ2aWNlIGZyb20gXCIuLi8uLi9zZXJ2ZXIvc2VydmljZXMvd2ViLXNob3Avd2ViLXNob3Atc2VydmljZVwiO1xyXG5cclxuaW1wb3J0IEpzZG9tU2NyYXBlciBmcm9tIFwiLi4vLi4vc2VydmVyL3NjcmFwZXJzL2pzZG9tLXNjcmFwZXJcIjtcclxuXHJcbmltcG9ydCBTY3JhcGVTZXJ2aWNlIGZyb20gXCIuLi8uLi9zZXJ2ZXIvc2VydmljZXMvc2NyYXBpbmcvc2NyYXBlLXNlcnZpY2VcIjtcclxuXHJcbmNvbnN0IGRiID0gbmV3IERhdGFiYXNlKCk7XHJcblxyXG5jb25zdCB3ZWJTaG9wU2VydmljZSA9IG5ldyBXZWJTaG9wU2VydmljZShuZXcgTW9uZ29XZWJTaG9wU3RvcmFnZShkYikpO1xyXG5jb25zdCBwcm9kdWN0U2VydmljZSA9IG5ldyBQcm9kdWN0U2VydmljZShuZXcgTW9uZ29Qcm9kdWN0U3RvcmFnZShkYikpO1xyXG5cclxuY29uc3Qgc2NyYXBlU2VydmljZSA9IG5ldyBTY3JhcGVTZXJ2aWNlKHByb2R1Y3RTZXJ2aWNlLCB3ZWJTaG9wU2VydmljZSk7XHJcblxyXG5mdW5jdGlvbiBvdXRwdXRQcm9kdWN0U2NyYXBlUmVzdWx0KHNjcmFwZVJlc3VsdDogU2NyYXBpbmcuUHJvZHVjdFNjcmFwZVJlc3VsdCwgcHJvZHVjdDogQXBpLlByb2R1Y3QsIHNob3BzOiBBcGkuV2ViU2hvcFtdKSB7XHJcbiAgICBPYmplY3Qua2V5cyhzY3JhcGVSZXN1bHQpXHJcbiAgICAgICAgLmZvckVhY2goc2hvcElkID0+IHtcclxuICAgICAgICAgICAgY29uc3Qgc2hvcCA9IHNob3BzLmZpbHRlcihzID0+IHMuaWQgPT09IHNob3BJZClbMF07XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHNjcmFwZVJlc3VsdFtzaG9wSWRdO1xyXG5cclxuICAgICAgICAgICAgY29uc29sZS5sb2coYFNjcmFwcGluZyBvZiAke3Byb2R1Y3QudGl0bGV9IHN1Y2Nlc3NmdWwgZm9yIHNob3AgJHtzaG9wLnRpdGxlfWApO1xyXG5cclxuICAgICAgICAgICAgY29uc3Qgb3V0ID0ge307XHJcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKHJlc3VsdC52YWx1ZXMpXHJcbiAgICAgICAgICAgICAgICAuZm9yRWFjaChrID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB2ID0gcmVzdWx0LnZhbHVlc1trXTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodi5pc1N1Y2Nlc3NmdWwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3V0W2tdID0gdi52YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvdXRba10gPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcjogdi5lcnJvclxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgY29uc29sZS5kaXIob3V0KTtcclxuICAgICAgICB9KTtcclxuXHJcbn1cclxuXHJcbndlYlNob3BTZXJ2aWNlLmFsbCgpXHJcbiAgICAudGhlbihzaG9wcyA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHByb2R1Y3RTZXJ2aWNlLmFsbCgpXHJcbiAgICAgICAgICAgIC50aGVuKHByb2R1Y3RzID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHByb2R1Y3RTY3JhcGVQcm9taXNlcyA9IHByb2R1Y3RzLm1hcChwcm9kdWN0ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gc2NyYXBlU2VydmljZS5zY3JhcGVQcm9kdWN0RGF0YShwcm9kdWN0LmlkKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAudGhlbihwcm9kdWN0U2NyYXBlUmVzdWx0SGFzaCA9PiBvdXRwdXRQcm9kdWN0U2NyYXBlUmVzdWx0KHByb2R1Y3RTY3JhcGVSZXN1bHRIYXNoLCBwcm9kdWN0LCBzaG9wcykpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsKHByb2R1Y3RTY3JhcGVQcm9taXNlcyk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfSlcclxuICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICBjb25zb2xlLmluZm8oXCJTY3JhcGluZyBjb21wbGV0ZWQgc3VjY2Vzc2Z1bGx5XCIpO1xyXG4gICAgICAgIHByb2Nlc3MuZXhpdCgpO1xyXG4gICAgfSlcclxuICAgIC5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJTY3JhcGluZyBmYWlsZWRcIik7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgICAgIHByb2Nlc3MuZXhpdCgpO1xyXG4gICAgfSk7Il19

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	/// <reference path="../../typings/index.d.ts" />
	"use strict";
	var jsdom_scraper_1 = __webpack_require__(30);
	var event_bus_1 = __webpack_require__(23);
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

	/// <reference path="../typings/index.d.ts" />
	"use strict";
	var jsdom = __webpack_require__(31);
	var value_parser_1 = __webpack_require__(32);
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianNkb20tc2NyYXBlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImpzZG9tLXNjcmFwZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsOENBQThDOztBQUU5QyxJQUFZLEtBQUssV0FBTSxPQUFPLENBQUMsQ0FBQTtBQUMvQiw2QkFBNEIsZ0JBQWdCLENBQUMsQ0FBQTtBQUU3QztJQUFBO1FBQ1ksZ0JBQVcsR0FBRyxJQUFJLHNCQUFlLEVBQUUsQ0FBQztJQXlJaEQsQ0FBQztJQXZJRyw2QkFBTSxHQUFOLFVBQU8sR0FBVyxFQUFFLE1BQTRCO1FBQWhELGlCQThDQztRQTdDRyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQztZQUNMLE1BQU0sSUFBSSxLQUFLLENBQUMsa0JBQWtCLENBQUMsQ0FBQztRQUN4QyxFQUFFLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQztZQUNSLE1BQU0sSUFBSSxLQUFLLENBQUMsc0JBQXNCLENBQUMsQ0FBQztRQUM1QyxFQUFFLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsTUFBTSxDQUFDO1lBQzVCLE1BQU0sSUFBSSxLQUFLLENBQUMsc0JBQXNCLENBQUMsQ0FBQztRQUU1QyxJQUFNLE1BQU0sR0FBbUM7WUFDM0MsWUFBWSxFQUFFLEtBQUs7WUFDbkIsS0FBSyxFQUFFLElBQUk7WUFDWCxNQUFNLEVBQUUsRUFBRTtTQUNiLENBQUM7UUFDRixtSEFBbUg7UUFDbkgsTUFBTSxDQUFDLElBQUksT0FBTyxDQUFDLFVBQUEsT0FBTztZQUN0QixLQUFLLENBQUMsR0FBRyxDQUFDO2dCQUNOLEdBQUcsRUFBRSxHQUFHO2dCQUNSLFNBQVMsRUFBRSxnSEFBZ0g7Z0JBQzNILFFBQVEsRUFBRTtvQkFDTixzQkFBc0IsRUFBRSxLQUFLO29CQUM3Qix3QkFBd0IsRUFBRSxLQUFLO2lCQUNsQztnQkFDRCxJQUFJLEVBQUUsVUFBQyxHQUFHLEVBQUUsTUFBTTtvQkFDZCxF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LENBQUM7d0JBQ3JCLE1BQU0sSUFBSSxLQUFLLENBQUMsZUFBZSxDQUFDLENBQUM7b0JBRXJDLElBQU0sSUFBSSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUMsU0FBUyxDQUFDO29CQUV0RCxJQUFNLEtBQUssR0FBRyxJQUFJLE1BQU0sQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDO29CQUVyRCxJQUFNLE9BQU8sR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO29CQUNqQyxFQUFFLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUM7d0JBQ2hCLE1BQU0sSUFBSSxLQUFLLENBQUMsa0JBQWtCLENBQUMsQ0FBQztvQkFFeEMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDdEIsQ0FBQztnQkFBQSxDQUFDO1lBQ047Z0JBQ0ksTUFBTSxJQUFJLEtBQUssQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO1FBQ2xELENBQUM7SUFDTCxDQUFDO0lBRU8sK0NBQXdCLEdBQWhDO1FBQ0ksTUFBTSxDQUFDO1lBQ0gsS0FBSyxFQUFFLElBQUk7WUFDWCxZQUFZLEVBQUUsSUFBSTtZQUNsQixLQUFLLEVBQUUsSUFBSTtZQUNYLFFBQVEsRUFBRSxJQUFJO1NBQ2pCLENBQUM7SUFDTixDQUFDO0lBQ0wsbUJBQUM7QUFBRCxDQUFDLEFBMUlELElBMElDO0FBMUlEOzhCQTBJQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL3R5cGluZ3MvaW5kZXguZC50c1wiIC8+XHJcblxyXG5pbXBvcnQgKiBhcyBqc2RvbSBmcm9tIFwianNkb21cIjtcclxuaW1wb3J0IFZhbHVlUGFyc2VySGFzaCBmcm9tIFwiLi92YWx1ZS1wYXJzZXJcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEpzZG9tU2NyYXBlciBpbXBsZW1lbnRzIFNjcmFwaW5nLklTY3JhcGVyIHtcclxuICAgIHByaXZhdGUgdmFsdWVQYXJzZXIgPSBuZXcgVmFsdWVQYXJzZXJIYXNoKCk7XHJcblxyXG4gICAgc2NyYXBlKHVybDogc3RyaW5nLCB2YWx1ZXM6IEFwaS5TY3JhcGluZ1NldHRpbmdzKTogUHJvbWlzZTxTY3JhcGluZy5XZWJTaG9wU2NyYXBpbmdSZXN1bHQ+IHtcclxuICAgICAgICBpZiAoIXVybClcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwidXJsIGlzIHVuZGVmaW5lZFwiKTtcclxuICAgICAgICBpZiAoIXZhbHVlcylcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwidmFsdWVzIGlzIHVuZGVmaW5lZC5cIik7XHJcbiAgICAgICAgaWYgKCFPYmplY3Qua2V5cyh2YWx1ZXMpLmxlbmd0aClcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTm8gdmFsdWVzIHRvIGV4dHJhY3RcIik7XHJcblxyXG4gICAgICAgIGNvbnN0IHJlc3VsdDogU2NyYXBpbmcuV2ViU2hvcFNjcmFwaW5nUmVzdWx0ID0ge1xyXG4gICAgICAgICAgICBpc1N1Y2Nlc3NmdWw6IGZhbHNlLFxyXG4gICAgICAgICAgICBlcnJvcjogbnVsbCxcclxuICAgICAgICAgICAgdmFsdWVzOiB7fVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgLy8gXCJNb3ppbGxhLzUuMCAoV2luZG93cyBOVCAxMC4wOyBXT1c2NCkgQXBwbGVXZWJLaXQvNTM3LjM2IChLSFRNTCwgbGlrZSBHZWNrbykgQ2hyb21lLzUwLjAuMjY2MS4xMDIgU2FmYXJpLzUzNy4zNlwiXHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xyXG4gICAgICAgICAgICBqc2RvbS5lbnYoe1xyXG4gICAgICAgICAgICAgICAgdXJsOiB1cmwsXHJcbiAgICAgICAgICAgICAgICB1c2VyQWdlbnQ6IFwiTW96aWxsYS81LjAgKFdpbmRvd3MgTlQgMTAuMDsgV09XNjQpIEFwcGxlV2ViS2l0LzUzNy4zNiAoS0hUTUwsIGxpa2UgR2Vja28pIENocm9tZS81MC4wLjI2NjEuMTAyIFNhZmFyaS81MzcuMzZcIixcclxuICAgICAgICAgICAgICAgIGZlYXR1cmVzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgRmV0Y2hFeHRlcm5hbFJlc291cmNlczogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgUHJvY2Vzc0V4dGVybmFsUmVzb3VyY2VzOiBmYWxzZVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGRvbmU6IChlcnIsIHdpbmRvdykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChlcnIgJiYgZXJyLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQuaXNTdWNjZXNzZnVsID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdC5lcnJvciA9IGVycjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVzdWx0KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBPYmplY3Qua2V5cyh2YWx1ZXMpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZm9yRWFjaCh2YWx1ZU5hbWUgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHNldHRpbmdzID0gdmFsdWVzW3ZhbHVlTmFtZV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0LnZhbHVlc1t2YWx1ZU5hbWVdID0gdGhpcy5zY3JhcGVWYWx1ZSh3aW5kb3cuZG9jdW1lbnQsIHNldHRpbmdzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0LmlzU3VjY2Vzc2Z1bCA9IE9iamVjdC5rZXlzKHJlc3VsdC52YWx1ZXMpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAubWFwKHZhbHVlTmFtZSA9PiByZXN1bHQudmFsdWVzW3ZhbHVlTmFtZV0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZXZlcnkodiA9PiB2LmlzU3VjY2Vzc2Z1bCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3VsdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHNjcmFwZVZhbHVlKGRvY3VtZW50OiBEb2N1bWVudCwgdmFsdWVTY3JhcGluZ1NldHRpbmdzOiBBcGkuVmFsdWVTY3JhcGluZ1NldHRpbmdzW10pOiBTY3JhcGluZy5WYWx1ZVNjcmFwaW5nUmVzdWx0IHtcclxuICAgICAgICBpZiAoIWRvY3VtZW50KVxyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJkb2N1bWVudCBpcyB1bmRlZmluZWRcIik7XHJcbiAgICAgICAgaWYgKCF2YWx1ZVNjcmFwaW5nU2V0dGluZ3MpXHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcInZhbHVlU2NyYXBpbmdTZXR0aW5ncyBpcyB1bmRlZmluZWRcIik7XHJcblxyXG4gICAgICAgIGNvbnN0IHBhcnNpbmdDb250ZXh0OiBTY3JhcGluZy5QYXJzZXJDb250ZXh0ID0ge1xyXG4gICAgICAgICAgICBsb2NhdGlvbjogZG9jdW1lbnQubG9jYXRpb25cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBjb25zdCByZXN1bHQgPSB0aGlzLmVtcHR5VmFsdWVTY3JhcGluZ1Jlc3VsdCgpO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBzY3JhcGluZ1NldHRpbmcgb2YgdmFsdWVTY3JhcGluZ1NldHRpbmdzKSB7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCByYXdWYWx1ZSA9IHRoaXMuZXh0cmFjdFJhd1ZhbHVlRnJvbURvY3VtZW50KGRvY3VtZW50LCBzY3JhcGluZ1NldHRpbmcpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcGFyc2VkVmFsdWUgPSB0aGlzLnZhbHVlUGFyc2VyW3NjcmFwaW5nU2V0dGluZy50eXBlXShyYXdWYWx1ZSwgcGFyc2luZ0NvbnRleHQpO1xyXG5cclxuICAgICAgICAgICAgICAgIHJlc3VsdC5pc1N1Y2Nlc3NmdWwgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0LmVycm9yID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIHJlc3VsdC5zZXR0aW5ncyA9IHNjcmFwaW5nU2V0dGluZztcclxuICAgICAgICAgICAgICAgIHJlc3VsdC52YWx1ZSA9IHBhcnNlZFZhbHVlO1xyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICByZXN1bHQuaXNTdWNjZXNzZnVsID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICByZXN1bHQuZXJyb3IgPSBlcnJvcjtcclxuICAgICAgICAgICAgICAgIHJlc3VsdC5zZXR0aW5ncyA9IHNjcmFwaW5nU2V0dGluZztcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoc2NyYXBpbmdTZXR0aW5nLmZhaWxPbkVycm9yKVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBleHRyYWN0UmF3VmFsdWVGcm9tRG9jdW1lbnQoZG9jdW1lbnQ6IERvY3VtZW50LCB2YWx1ZVNjcmFwaW5nU2V0dGluZzogQXBpLlZhbHVlU2NyYXBpbmdTZXR0aW5ncyk6IHN0cmluZyB7XHJcbiAgICAgICAgY29uc3QgZXh0cmFjdE1ldGhvZCA9IHZhbHVlU2NyYXBpbmdTZXR0aW5nLmV4dHJhY3QgfHwgXCJxdWVyeXNlbGVjdG9yXCI7XHJcblxyXG4gICAgICAgIHN3aXRjaCAoZXh0cmFjdE1ldGhvZCkge1xyXG4gICAgICAgICAgICBjYXNlIFwicXVlcnlzZWxlY3RvclwiOlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHF1ZXJ5U2VsZWN0b3JTZXR0aW5ncyA9IHZhbHVlU2NyYXBpbmdTZXR0aW5nIGFzIEFwaS5RdWVyeVNlbGVjdG9yRXh0cmFjdFNldHRpbmdzO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoIXF1ZXJ5U2VsZWN0b3JTZXR0aW5ncy5lbGVtZW50U2VsZWN0b3IpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgZWxlbWVudFNlbGVjdG9yIGlzIG1pc3NpbmdgKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHF1ZXJ5U2VsZWN0b3JTZXR0aW5ncy5lbGVtZW50U2VsZWN0b3IpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChlbGVtZW50cy5sZW5ndGggPT09IDApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRWxlbWVudCB3aXRoIHNlbGVjdG9yICR7cXVlcnlTZWxlY3RvclNldHRpbmdzLmVsZW1lbnRTZWxlY3Rvcn0gaXMgbWlzc2luZ2ApO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChlbGVtZW50cy5sZW5ndGggPiAxKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZXJlIGFyZSBtb3JlIHRoYW4gb25lIGVsZW1lbnQgd2l0aCBzZWxlY3RvciAke3F1ZXJ5U2VsZWN0b3JTZXR0aW5ncy5lbGVtZW50U2VsZWN0b3J9YCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChxdWVyeVNlbGVjdG9yU2V0dGluZ3MuYXR0cmlidXRlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZWxlbWVudHNbMF0uZ2V0QXR0cmlidXRlKHF1ZXJ5U2VsZWN0b3JTZXR0aW5ncy5hdHRyaWJ1dGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnRzWzBdLnRleHRDb250ZW50O1xyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgY2FzZSBcInJlZ2V4XCI6XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVnZXhTZXR0aW5ncyA9IHZhbHVlU2NyYXBpbmdTZXR0aW5nIGFzIEFwaS5SZWdleEV4dHJhY3RTZXR0aW5ncztcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIXJlZ2V4U2V0dGluZ3MucmVnZXgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcInJlZ2V4IG1pc3NpbmdcIik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRleHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaHRtbFwiKS5pbm5lckhUTUw7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlZ2V4ID0gbmV3IFJlZ0V4cChyZWdleFNldHRpbmdzLnJlZ2V4LCBcImdtaVwiKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbWF0Y2hlcyA9IHJlZ2V4LmV4ZWModGV4dCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFtYXRjaGVzLmxlbmd0aClcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTm8gdmFsdWUgbWF0Y2hlc1wiKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG1hdGNoZXNbMV07XHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVW5rbm93biBleHRyYWN0IG1ldGhvZFwiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBlbXB0eVZhbHVlU2NyYXBpbmdSZXN1bHQoKTogU2NyYXBpbmcuVmFsdWVTY3JhcGluZ1Jlc3VsdCB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgdmFsdWU6IG51bGwsXHJcbiAgICAgICAgICAgIGlzU3VjY2Vzc2Z1bDogdHJ1ZSxcclxuICAgICAgICAgICAgZXJyb3I6IG51bGwsXHJcbiAgICAgICAgICAgIHNldHRpbmdzOiBudWxsXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxufSJdfQ==

/***/ },
/* 31 */
/***/ function(module, exports) {

	module.exports = require("jsdom");

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/// <reference path="../typings/index.d.ts"/>
	var path = __webpack_require__(33);
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
/* 33 */
/***/ function(module, exports) {

	module.exports = require("path");

/***/ }
/******/ ]);
//# sourceMappingURL=run-page-parsing.js.map