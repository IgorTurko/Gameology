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

	/// <reference path="../../server/typings/index.d.ts" />
	"use strict";
	var db_1 = __webpack_require__(1);
	var mongo_product_storage_1 = __webpack_require__(9);
	var product_service_1 = __webpack_require__(10);
	var mongo_web_shop_storage_1 = __webpack_require__(5);
	var web_shop_service_1 = __webpack_require__(6);
	var jsdom_scraper_1 = __webpack_require__(15);
	var scrape_service_1 = __webpack_require__(18);
	var db = new db_1.default();
	var webShopService = new web_shop_service_1.default(new mongo_web_shop_storage_1.default(db));
	var productService = new product_service_1.default(new mongo_product_storage_1.default(db), webShopService);
	var jsdomScraper = new jsdom_scraper_1.default();
	var scrapeService = new scrape_service_1.default(productService, webShopService);
	webShopService.all()
	    .then(function (shops) {
	    productService.all()
	        .then(function (products) {
	        products.forEach(function (product) {
	            scrapeService.scrapeProductData(product.id)
	                .then(function (productScrapeResultHash) {
	                Object.keys(productScrapeResultHash)
	                    .forEach(function (shopId) {
	                    var shop = shops.filter(function (s) { return s.id === shopId; })[0];
	                    var result = productScrapeResultHash[shopId];
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
	            });
	        });
	    });
	});
	/*
	webShopService.all()
	    .then(shops => {
	
	        return productService.all()
	            .then(products => {
	                products.forEach(productToScrape => {
	                    console.log(`Scraping data for product ${productToScrape.title}`);
	                    console.log();
	
	                    Object.keys(productToScrape.scrapingUrls)
	                        .forEach(shopId => {
	                            const shop = shops.filter(s => s.id === shopId)[0];
	                            const url = productToScrape.scrapingUrls[shopId];
	
	                            jsdomScraper.scrape(url, shop.scrapingSettings)
	                                .then(result => {
	
	                                    const scrapedData = productService.productScrapedDataFromScrapingResult(result);
	
	                                    return productService.updateScrapedData(productToScrape.id, shop.id, scrapedData)
	                                        .then(() => {
	
	                                            console
	                                                .log(`Scrapping of ${productToScrape.title} successful for shop ${shop.title}`);
	
	                                            const out = {};
	                                            Object.keys(result.values)
	                                                .forEach(k => {
	                                                    const v = result.values[k];
	                                                    if (v.isSuccessful) {
	                                                        out[k] = v.value;
	                                                    } else {
	                                                        out[k] = {
	                                                            error: v.error
	                                                        };
	                                                    }
	                                                });
	
	                                            console.dir(out);
	                                        });
	                                })
	                                .catch((result: Scraping.ScrapingResult) => {
	
	                                    const scrapedData = productService.productScrapedDataFromScrapingResult(result);
	
	                                    return productService.updateScrapedData(productToScrape.id, shop.id, scrapedData)
	                                        .then(() => {
	
	                                            console.error(`Scrapping of ${productToScrape.title} failed for shop ${shop.title}`);
	                                            if (result.error) {
	                                                console.error(result.error);
	                                            } else {
	                                                const out = Object.keys(result.values)
	                                                    .map(prop => ({
	                                                        prop: prop,
	                                                        value: result.values[prop]
	                                                    }))
	                                                    .reduce((hash, a) => {
	                                                        if (a.value.isSuccessful)
	                                                            hash[a.prop] = a.value.value;
	                                                        else
	                                                            hash[a.prop] = a.value.error;
	                                                        return hash;
	                                                    },
	                                                    {});
	
	                                                console.dir(out);
	                                            }
	                                        });
	                                });
	                        });
	                });
	            });
	    });
	
	*/ 


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/// <reference path="../typings/index.d.ts" />
	var mongo = __webpack_require__(2);
	var config_1 = __webpack_require__(3);
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


/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = require("mongodb");

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/// <reference path="typings/index.d.ts"/>
	var fs = __webpack_require__(4);
	var configContent = fs.readFileSync("./config.json", "utf8");
	var configuration = JSON.parse(configContent);
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = configuration;


/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = require("fs");

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	/// <reference path="../../typings/index.d.ts" />
	"use strict";
	var db_1 = __webpack_require__(1);
	var MongoWebShopStorage = (function () {
	    function MongoWebShopStorage(db) {
	        this.db = db;
	        if (!db)
	            throw new Error("db is undefined");
	    }
	    MongoWebShopStorage.prototype.all = function () {
	        return this.db
	            .collection(db_1.default.Collections.webshops)
	            .then(function (c) { return c.find(); })
	            .then(function (c) { return c.toArray(); });
	    };
	    MongoWebShopStorage.prototype.one = function (id) {
	        if (!id)
	            throw new Error("id is undefined");
	        return this.db
	            .collection(db_1.default.Collections.webshops)
	            .then(function (c) { return c.find({ id: id }); })
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


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	/// <reference path="../../typings/index.d.ts" />
	"use strict";
	var web_shop_validator_1 = __webpack_require__(7);
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


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	/// <reference path="../../typings/index.d.ts" />
	"use strict";
	var validator = __webpack_require__(8);
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


/***/ },
/* 8 */
/***/ function(module, exports) {

	module.exports = require("node-validator");

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	/// <reference path="../../typings/index.d.ts" />
	"use strict";
	var db_1 = __webpack_require__(1);
	var MongoProductStorage = (function () {
	    function MongoProductStorage(db) {
	        this.db = db;
	        if (!db)
	            throw new Error("db is missing");
	    }
	    MongoProductStorage.prototype.all = function () {
	        return this.db
	            .collection(db_1.default.Collections.products)
	            .then(function (c) { return c.find(); })
	            .then(function (c) { return c.toArray(); });
	    };
	    MongoProductStorage.prototype.one = function (id) {
	        if (!id)
	            throw new Error("id is undefined");
	        return this.db
	            .collection(db_1.default.Collections.products)
	            .then(function (c) { return c.find({
	            id: id
	        }); })
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
	    MongoProductStorage.prototype.setScrapingData = function (productId, webShopId, scrapingData) {
	        return this.db
	            .collection(db_1.default.Collections.products)
	            .then(function (c) { return c.updateOne({
	            id: productId
	        }, {
	            $set: (_a = {},
	                _a["scrapedData." + webShopId] = scrapingData,
	                _a
	            )
	        }, {
	            upsert: true
	        }); var _a; })
	            .then(function () { return scrapingData; });
	    };
	    return MongoProductStorage;
	}());
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = MongoProductStorage;


/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	/// <reference path="../../typings/index.d.ts" />
	"use strict";
	var product_validator_1 = __webpack_require__(11);
	var moment = __webpack_require__(12);
	var ProductService = (function () {
	    function ProductService(storage, webShopService) {
	        this.storage = storage;
	        this.webShopService = webShopService;
	        this.validator = new product_validator_1.default();
	        if (!storage)
	            throw new Error("storage is undefined");
	        if (!webShopService)
	            throw new Error("webShopService is undefined");
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
	        return Promise.all([this.one(productId), this.webShopService.one(webshopId)])
	            .then(function (_a) {
	            var product = _a[0], webshop = _a[1];
	            data.scrapedAt = moment().toDate();
	            data.url = product.scrapingUrls[webshopId];
	            return _this.storage.setScrapingData(productId, webshopId, data);
	        });
	    };
	    ProductService.prototype.productScrapedDataFromScrapingResult = function (scrapingResult) {
	        var result = {
	            url: null,
	            scrapedAt: null,
	            error: null,
	            values: {
	                title: null,
	                price: null,
	                image: null
	            },
	            errors: {}
	        };
	        result.error = scrapingResult.error;
	        result = Object.keys(scrapingResult.values)
	            .map(function (name) { return ({ name: name, value: scrapingResult.values[name] }); })
	            .reduce(function (hash, a) {
	            if (a.value.isSuccessful)
	                hash.values[a.name] = a.value.value;
	            else
	                hash.errors[a.name] = a.value.error;
	            return hash;
	        }, result);
	        return result;
	    };
	    return ProductService;
	}());
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = ProductService;


/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	/// <reference path="../../typings/index.d.ts" />
	"use strict";
	var validator = __webpack_require__(8);
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


/***/ },
/* 12 */
/***/ function(module, exports) {

	module.exports = require("moment");

/***/ },
/* 13 */,
/* 14 */,
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/// <reference path="../typings/index.d.ts" />
	var jsdom = __webpack_require__(16);
	var value_parser_1 = __webpack_require__(17);
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
	        return new Promise(function (resolve, reject) {
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
	                        reject(result);
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
	                        if (result.isSuccessful)
	                            resolve(result);
	                        else
	                            reject(result);
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
	                if (scrapingSetting.failOnError === true)
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


/***/ },
/* 16 */
/***/ function(module, exports) {

	module.exports = require("jsdom");

/***/ },
/* 17 */
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


/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	/// <reference path="../typings/index.d.ts" />
	"use strict";
	var jsdom_scraper_1 = __webpack_require__(15);
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
	            .then(function (shops) { return shops.reduce(function (hash, shop) {
	            hash[shop.id] = shop;
	            return hash;
	        }, {}); });
	    }
	    ScrapeService.prototype.scrapeProductData = function (productId) {
	        var _this = this;
	        if (!productId)
	            throw new Error("productId is undefined");
	        return this.webShops.then(function (shops) {
	            return _this.productService.one(productId)
	                .then(function (product) { return Promise.all(_this.scrapeProduct(product, shops))
	                .then(function (results) { return results.reduce(function (hash, r) {
	                hash[r.webShopId] = r.scrapingResult;
	                return hash;
	            }, {}); }); });
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
	            .updateScrapedData(product.id, webShopId, _this.productService.productScrapedDataFromScrapingResult(result))
	            .then(function () { return result; }); });
	    };
	    return ScrapeService;
	}());
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = ScrapeService;


/***/ }
/******/ ]);
//# sourceMappingURL=run-page-parsing.js.map