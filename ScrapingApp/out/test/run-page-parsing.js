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
	module.exports = __webpack_require__(20);


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
	if (!Array.prototype.min) {
	    Array.prototype.min = function min(selector) {
	        var self = this;
	        if (!self.length) {
	            return null;
	        }
	        var minElement = self[0];
	        var minValue = selector(minElement);
	        for (var i = 1; i < self.length; i++) {
	            var element = self[i];
	            var value = selector(element);
	            if (value < minValue) {
	                minValue = value;
	                minElement = element;
	            }
	        }
	        return minElement;
	    };
	}
	if (!Array.prototype.max) {
	    Array.prototype.max = function min(selector) {
	        var self = this;
	        if (!self.length) {
	            return null;
	        }
	        var maxElement = self[0];
	        var maxValue = selector(maxElement);
	        for (var i = 1; i < self.length; i++) {
	            var element = self[i];
	            var value = selector(element);
	            if (value > maxValue) {
	                maxValue = value;
	                maxElement = element;
	            }
	        }
	        return maxElement;
	    };
	}
	if (!Object.entries) {
	    Object.entries = function (obj) { return Object.keys(obj)
	        .map(function (key) { return ([key, obj[key]]); }); };
	}


/***/ },
/* 2 */,
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/// <reference path="../typings/index.d.ts" />
	var mongo = __webpack_require__(4);
	var config_1 = __webpack_require__(5);
	var connectionString = config_1.default.mongoUrl;
	var db = new Promise(function (resolve, reject) {
	    if (process.env.OPENSHIFT_MONGODB_DB_PASSWORD) {
	        connectionString = process.env.OPENSHIFT_MONGODB_DB_USERNAME + ":" +
	            process.env.OPENSHIFT_MONGODB_DB_PASSWORD + "@" +
	            process.env.OPENSHIFT_MONGODB_DB_HOST + ':' +
	            process.env.OPENSHIFT_MONGODB_DB_PORT + '/' +
	            process.env.OPENSHIFT_APP_NAME;
	    }
	    mongo.MongoClient.connect('mongodb://' + connectionString, function (err, db) {
	        if (err) {
	            reject(err);
	        }
	        else {
	            console.info("Connected to Mongo server at " + connectionString);
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


/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	/// <reference path="../../typings/index.d.ts" />
	"use strict";
	var pojo_fluent_validator_1 = __webpack_require__(10);
	var utils_1 = __webpack_require__(11);
	var WebShopValidator = (function () {
	    function WebShopValidator() {
	        /** Only updateable fields is validated */
	        this.validator = pojo_fluent_validator_1.rules.obj({
	            deliveryPrice: pojo_fluent_validator_1.rules.num(false, { errorMessage: "Invalid price" })
	                .parseNumber({ errorMessage: "Price is not recognized as number" })
	                .must(function (price) { return !price || price > 0; }, { errorMessage: "Delivery price must be greater than zero" })
	        }).expandable();
	    }
	    WebShopValidator.prototype.validate = function (webShop) {
	        if (!webShop)
	            throw new Error("webShop is undefined");
	        return utils_1.validate(webShop, this.validator);
	    };
	    return WebShopValidator;
	}());
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = WebShopValidator;


/***/ },
/* 10 */
/***/ function(module, exports) {

	module.exports = require("pojo-fluent-validator");

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	/// <reference path="../typings/index.d.ts" />
	"use strict";
	var pojo_fluent_validator_1 = __webpack_require__(10);
	function validate(value) {
	    var validators = [];
	    for (var _i = 1; _i < arguments.length; _i++) {
	        validators[_i - 1] = arguments[_i];
	    }
	    if (!validators || !validators.length) {
	        throw new Error("At least one validator is required");
	    }
	    return new Promise(function (resolve, reject) {
	        pojo_fluent_validator_1.validate.apply(void 0, [value, function (errors, result) {
	            if (errors) {
	                reject(errors);
	            }
	            else {
	                resolve(result);
	            }
	            ;
	        }].concat(validators));
	    });
	}
	exports.validate = validate;


/***/ },
/* 12 */
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
	    MongoProductStorage.prototype.delete = function (productId) {
	        if (!productId)
	            throw new Error("Product ID is not defined.");
	        return this.db
	            .collection(db_1.default.Collections.products)
	            .then(function (c) { return c.deleteOne({ id: productId }); })
	            .then(function (c) { return true; });
	    };
	    MongoProductStorage.prototype.setScrapingData = function (productId, webShopId, values) {
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
	                _a
	            )
	        }, {
	            upsert: true
	        }); var _a; })
	            .then(function (r) { return _this.one(productId); });
	    };
	    MongoProductStorage.prototype.discardScrapingData = function (productId, shops) {
	        if (!shops || !shops.length) {
	            return;
	        }
	        var unset = shops.reduce(function (val, shopId) {
	            val[("log." + shopId)] = "";
	            val[("values." + shopId)] = "";
	            return val;
	        }, {});
	        return this.db
	            .collection(db_1.default.Collections.products)
	            .then(function (c) { return c.updateOne({ id: productId }, { $unset: unset }); });
	    };
	    return MongoProductStorage;
	}());
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = MongoProductStorage;


/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	/// <reference path="../../typings/index.d.ts" />
	"use strict";
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
	                .then(function () { return _this.writeProductAndDiscardScrapeData(product); })
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
	        return this.one(productId)
	            .then(function (product) {
	            return _this.storage.setScrapingData(product.id, webshopId, data);
	        });
	    };
	    ProductService.prototype.delete = function (productId) {
	        if (!productId)
	            throw new Error("Product ID is not defined.");
	        return this.storage.delete(productId);
	    };
	    /**
	     * Writes validated product to storage and removes values and logs for changed URL.
	     */
	    ProductService.prototype.writeProductAndDiscardScrapeData = function (product) {
	        var _this = this;
	        return this.one(product.id)
	            .then(function (origin) {
	            return _this.storage
	                .save(product)
	                .then(function () {
	                if (origin) {
	                    var shops = Object.entries(product.scrapingUrls)
	                        .filter(function (_a) {
	                        var shop = _a[0], url = _a[1];
	                        var originUrl = origin.scrapingUrls[shop];
	                        return url !== originUrl;
	                    })
	                        .map(function (_a) {
	                        var shop = _a[0], url = _a[1];
	                        return shop;
	                    });
	                    var removedShops = Object.keys(origin.scrapingUrls)
	                        .filter(function (shopId) { return !product.scrapingUrls[shopId]; });
	                    shops.push.apply(shops, removedShops);
	                    return _this.storage.discardScrapingData(product.id, shops);
	                }
	                else {
	                    return Promise.resolve();
	                }
	            })
	                .then(function () { return _this.storage.one(product.id); });
	        });
	    };
	    return ProductService;
	}());
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = ProductService;


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


/***/ },
/* 16 */
/***/ function(module, exports) {

	module.exports = require("events");

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	/// <reference path="../../typings/index.d.ts" />
	"use strict";
	var pojo_fluent_validator_1 = __webpack_require__(10);
	var utils_1 = __webpack_require__(11);
	var ProductValidator = (function () {
	    function ProductValidator() {
	        this.validator = pojo_fluent_validator_1.rules.obj({
	            id: pojo_fluent_validator_1.rules.str().notEmpty({ errorMessage: "Product ID is required" }),
	            title: pojo_fluent_validator_1.rules.str()
	                .notEmpty({ errorMessage: "Product title is required" })
	                .must(function (t) { return t.length < 1024; }, { errorMessage: "Product title too long" }),
	            scrapingUrls: pojo_fluent_validator_1.rules.hash(pojo_fluent_validator_1.rules.str().must(function (url) { return !url || (url.indexOf("http://") === 0 || url.indexOf("https://") === 0); }, { errorMessage: "URL must starts from http:// or https:// " }))
	                .filter(function (k, v) { return v && v.trim().length > 0; })
	                .before(function (urls) { return Object.keys(urls)
	                .map(function (shopId) { return urls[shopId]; })
	                .filter(function (url) { return url && url.trim().length > 0; })
	                .length > 0; }, { errorMessage: "At least one scraping URL must be specified." })
	        });
	    }
	    ProductValidator.prototype.validate = function (product) {
	        if (!product)
	            throw new Error("product is undefined");
	        return utils_1.validate(product, this.validator);
	    };
	    return ProductValidator;
	}());
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = ProductValidator;


/***/ },
/* 18 */,
/* 19 */,
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	/// <reference path="../../server/typings/index.d.ts" />
	"use strict";
	var db_1 = __webpack_require__(3);
	var mongo_product_storage_1 = __webpack_require__(12);
	var product_service_1 = __webpack_require__(13);
	var mongo_web_shop_storage_1 = __webpack_require__(7);
	var web_shop_service_1 = __webpack_require__(8);
	var scrape_service_1 = __webpack_require__(21);
	var db = new db_1.default();
	var webShopService = new web_shop_service_1.default(new mongo_web_shop_storage_1.default(db));
	var productService = new product_service_1.default(new mongo_product_storage_1.default(db));
	var scrapeService = new scrape_service_1.default(productService, webShopService);
	function outputProductScrapeResult(scrapeResult, product, shops) {
	    console.dir(scrapeResult);
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


/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var jsdom_scraper_1 = __webpack_require__(22);
	var event_bus_1 = __webpack_require__(15);
	var emptyScrapedValues = {
	    title: null,
	    price: null,
	    image: null
	};
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
	        return Promise.all([
	            this.webShops,
	            this.productService.one(productId)
	        ])
	            .then(function (_a) {
	            var shops = _a[0], product = _a[1];
	            return Promise.all(_this.scrapeProduct(product, shops));
	        })
	            .then(function (r) { return r.toHash(function (e) { return e.webShopId; }, function (e) { return e.scrapedValues; }); })
	            .then(function (hash) {
	            event_bus_1.eventBus.emit(event_bus_1.EventNames.ProductScraped, productId);
	            return hash;
	        });
	    };
	    ScrapeService.prototype.scrapeProduct = function (product, shops) {
	        var _this = this;
	        return Object.keys(product.scrapingUrls)
	            .map(function (webShopId) { return _this.scrapeProductFromShopAndSave(product, webShopId, shops)
	            .then(function (scrapedValues) { return ({ webShopId: webShopId, scrapedValues: scrapedValues }); }); });
	    };
	    ScrapeService.prototype.scrapeProductFromShopAndSave = function (product, webShopId, shops) {
	        var _this = this;
	        return this.scraper
	            .scrape(product.scrapingUrls[webShopId], shops[webShopId].scrapingSettings)
	            .then(function (scrapedValues) { return _this.productService
	            .updateScrapedData(product.id, webShopId, scrapedValues)
	            .then(function () { return scrapedValues; }); }, function (err) { return _this.productService
	            .updateScrapedData(product.id, webShopId, emptyScrapedValues)
	            .then(function () { return emptyScrapedValues; }); });
	    };
	    return ScrapeService;
	}());
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = ScrapeService;


/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	/// <reference path="../typings/index.d.ts" />
	"use strict";
	var jsdom = __webpack_require__(23);
	var createDebugger = __webpack_require__(24);
	var value_parser_1 = __webpack_require__(25);
	var log = {
	    error: createDebugger("gameology:jsdom:error"),
	    debug: createDebugger("gameology:jsdom:debug")
	};
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
	            title: null,
	            price: null,
	            image: null
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
	                    if (err) {
	                        log.error("Error occured on scraping URL " + url + ".\r\n" + JSON.stringify(err));
	                        reject(err);
	                        return;
	                    }
	                    if (!window || !window.document) {
	                        log.error("Error occured on scraping URL " + url + ". HTML data are not received.");
	                        reject(new Error("HTML is not received."));
	                        return;
	                    }
	                    var tags = window.document.getElementsByTagName("html");
	                    if (!tags || !tags.length) {
	                        log.debug("HTML element is missing in document.");
	                    }
	                    else {
	                        log.debug(tags[0].innerHTML);
	                    }
	                    Object.keys(values)
	                        .forEach(function (valueName) {
	                        var settings = values[valueName];
	                        result[valueName] = _this.scrapeValue(window.document, settings);
	                    });
	                    log.debug("Scraping data from " + url + " completed with values " + JSON.stringify(result));
	                    resolve(result);
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
	        for (var _i = 0, valueScrapingSettings_1 = valueScrapingSettings; _i < valueScrapingSettings_1.length; _i++) {
	            var scrapingSetting = valueScrapingSettings_1[_i];
	            try {
	                var rawValue = this.extractRawValueFromDocument(document, scrapingSetting);
	                var parsedValue = this.valueParser[scrapingSetting.type](rawValue, parsingContext);
	                return parsedValue;
	            }
	            catch (error) {
	                log.error("The error occured due parsing value. " + error);
	                if (scrapingSetting.failOnError)
	                    return null;
	            }
	        }
	        return null;
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
	    return JsdomScraper;
	}());
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = JsdomScraper;


/***/ },
/* 23 */
/***/ function(module, exports) {

	module.exports = require("jsdom");

/***/ },
/* 24 */
/***/ function(module, exports) {

	module.exports = require("debug");

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/// <reference path="../typings/index.d.ts"/>
	var path = __webpack_require__(26);
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


/***/ },
/* 26 */
/***/ function(module, exports) {

	module.exports = require("path");

/***/ }
/******/ ]);
//# sourceMappingURL=run-page-parsing.js.map