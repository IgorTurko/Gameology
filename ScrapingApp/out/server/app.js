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
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	/// <reference path="./typings/index.d.ts"/>
	"use strict";
	var webServer = __webpack_require__(3);
	var scrapeServer = __webpack_require__(32);
	var socket_server_1 = __webpack_require__(42);
	scrapeServer.run();
	var httpServer = webServer.run();
	socket_server_1.default(httpServer, scrapeServer.productService);


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	/// <reference path="./typings/index.d.ts"/>
	"use strict";
	var http = __webpack_require__(4);
	var express = __webpack_require__(5);
	var bodyparser = __webpack_require__(6);
	var cookieparser = __webpack_require__(7);
	var config_1 = __webpack_require__(8);
	var authentication_route_1 = __webpack_require__(10);
	var product_route_1 = __webpack_require__(20);
	var web_shop_route_1 = __webpack_require__(28);
	var app = express();
	app.use(cookieparser());
	app.use("/api", bodyparser.json());
	app.use("/api", authentication_route_1.default);
	app.use("/api/products", product_route_1.default);
	app.use("/api/shops", web_shop_route_1.default);
	app.use("/", express.static("./out/client"));
	app.use("/", function (req, res) {
	    res.sendfile("./out/client" + '/index.html');
	});
	var port = process.env.PORT || config_1.default.fallbackPort;
	function run() {
	    var server = http.createServer(app);
	    server.listen(port, function () {
	        console.info("Web server started at http://localhost:" + port + "/");
	    });
	    return server;
	}
	exports.run = run;


/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = require("http");

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = require("express");

/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = require("body-parser");

/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = require("cookie-parser");

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/// <reference path="typings/index.d.ts"/>
	var fs = __webpack_require__(9);
	var configContent = fs.readFileSync("./config.json", "utf8");
	var configuration = JSON.parse(configContent);
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = configuration;


/***/ },
/* 9 */
/***/ function(module, exports) {

	module.exports = require("fs");

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/// <reference path="../../typings/index.d.ts" />
	var express = __webpack_require__(5);
	var db_1 = __webpack_require__(11);
	var mongo_authentication_token_storage_1 = __webpack_require__(13);
	var authentication_token_provider_1 = __webpack_require__(14);
	var mongo_user_account_storage_1 = __webpack_require__(17);
	var user_account_service_1 = __webpack_require__(18);
	var authentication_middleware_1 = __webpack_require__(19);
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
	            ok: false,
	            error: error
	        };
	        res.json(result).end();
	    });
	});
	router.use("*", function (res, req, next) { return authenticationMiddleware.run(res, req, next); });
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = router;


/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/// <reference path="../typings/index.d.ts" />
	var mongo = __webpack_require__(12);
	var config_1 = __webpack_require__(8);
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


/***/ },
/* 12 */
/***/ function(module, exports) {

	module.exports = require("mongodb");

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	/// <reference path="../../typings/index.d.ts" />
	"use strict";
	var db_1 = __webpack_require__(11);
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


/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/// <reference path="../../typings/index.d.ts" />
	var uuid = __webpack_require__(15);
	var moment = __webpack_require__(16);
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


/***/ },
/* 15 */
/***/ function(module, exports) {

	module.exports = require("node-uuid");

/***/ },
/* 16 */
/***/ function(module, exports) {

	module.exports = require("moment");

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	/// <reference path="../../typings/index.d.ts"/>
	"use strict";
	var db_1 = __webpack_require__(11);
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


/***/ },
/* 18 */
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


/***/ },
/* 19 */
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


/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	/// <reference path="../../typings/index.d.ts"/>
	"use strict";
	var express = __webpack_require__(5);
	var db_1 = __webpack_require__(11);
	var mongo_product_storage_1 = __webpack_require__(21);
	var product_service_1 = __webpack_require__(22);
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
	router.delete("/:id", function (req, res) {
	    var productId = (req.params || {})["id"];
	    if (!productId) {
	        res.send(404, "Not found").end();
	        return;
	    }
	    productService.delete(productId)
	        .then(function () { return res.json(200, "OK").end(); })
	        .catch(function (err) { return res.send(500, err).end(); });
	});
	router.get("/", function (req, res) {
	    productService.all()
	        .then(function (products) { return res.json(products); })
	        .catch(function (err) { return res.send(500, err).end(); });
	});
	router.post("/", function (request, response) {
	    var product = request.body;
	    productService.save(product)
	        .then(function (product) {
	        var responseData = {
	            ok: true,
	            entity: product
	        };
	        response.json(responseData).end();
	    })
	        .catch(function (err) {
	        var responseData = {
	            ok: false,
	            errors: err
	        };
	        response.json(responseData).end();
	    });
	});
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = router;


/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	/// <reference path="../../typings/index.d.ts" />
	"use strict";
	var db_1 = __webpack_require__(11);
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
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	/// <reference path="../../typings/index.d.ts" />
	"use strict";
	var moment = __webpack_require__(16);
	var uuid = __webpack_require__(15);
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
	                values[name] = value.isSuccessful ? value.value : null;
	                log.values[name] = {
	                    scrapedAt: now,
	                    error: value.error
	                };
	            });
	            return _this.storage.setScrapingData(product.id, webshopId, values, log);
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


/***/ },
/* 24 */
/***/ function(module, exports) {

	module.exports = require("events");

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	/// <reference path="../../typings/index.d.ts" />
	"use strict";
	var pojo_fluent_validator_1 = __webpack_require__(26);
	var utils_1 = __webpack_require__(27);
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
/* 26 */
/***/ function(module, exports) {

	module.exports = require("pojo-fluent-validator");

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	/// <reference path="../typings/index.d.ts" />
	"use strict";
	var pojo_fluent_validator_1 = __webpack_require__(26);
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
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	/// <reference path="../../typings/index.d.ts" />
	"use strict";
	var express = __webpack_require__(5);
	var db_1 = __webpack_require__(11);
	var mongo_web_shop_storage_1 = __webpack_require__(29);
	var web_shop_service_1 = __webpack_require__(30);
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
	            deliveryPrice: s.deliveryPrice
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
	            .then(function (webShop) {
	            var responseData = {
	                ok: true,
	                entity: webShop
	            };
	            response.json(responseData).end();
	        })
	            .catch(function (err) {
	            var responseData = {
	                ok: false,
	                errors: err
	            };
	            response.json(responseData).end();
	        });
	    }
	});
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = router;


/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	/// <reference path="../../typings/index.d.ts" />
	"use strict";
	var db_1 = __webpack_require__(11);
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
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	/// <reference path="../../typings/index.d.ts" />
	"use strict";
	var web_shop_validator_1 = __webpack_require__(31);
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
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	/// <reference path="../../typings/index.d.ts" />
	"use strict";
	var pojo_fluent_validator_1 = __webpack_require__(26);
	var utils_1 = __webpack_require__(27);
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
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	/// <reference path="typings/index.d.ts"/>
	"use strict";
	var config_1 = __webpack_require__(8);
	var db_1 = __webpack_require__(11);
	var mongo_web_shop_storage_1 = __webpack_require__(29);
	var web_shop_service_1 = __webpack_require__(30);
	var mongo_product_storage_1 = __webpack_require__(21);
	var product_service_1 = __webpack_require__(22);
	var scrape_service_1 = __webpack_require__(33);
	var scrape_queue_service_1 = __webpack_require__(38);
	var scrape_scheduler_service_1 = __webpack_require__(40);
	var event_bus_1 = __webpack_require__(23);
	var db = new db_1.default();
	exports.productService = new product_service_1.default(new mongo_product_storage_1.default(db));
	var webShopService = new web_shop_service_1.default(new mongo_web_shop_storage_1.default(db));
	var scrapeService = new scrape_service_1.default(exports.productService, webShopService);
	var queue = new scrape_queue_service_1.default(scrapeService, config_1.default.scrapingThreads, config_1.default.delayBetweenShopScrapingMs);
	var scheduler = new scrape_scheduler_service_1.default(queue, exports.productService, config_1.default.schedules);
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


/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	/// <reference path="../../typings/index.d.ts" />
	"use strict";
	var jsdom_scraper_1 = __webpack_require__(34);
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


/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	/// <reference path="../typings/index.d.ts" />
	"use strict";
	var jsdom = __webpack_require__(35);
	var value_parser_1 = __webpack_require__(36);
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
	                    if ((err && err.length) || !window || !window.document) {
	                        result.isSuccessful = false;
	                        result.error = err || "Loading document failed.";
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


/***/ },
/* 35 */
/***/ function(module, exports) {

	module.exports = require("jsdom");

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/// <reference path="../typings/index.d.ts"/>
	var path = __webpack_require__(37);
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
/* 37 */
/***/ function(module, exports) {

	module.exports = require("path");

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	/// <reference path="../../typings/index.d.ts"/>
	"use strict";
	var async = __webpack_require__(39);
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


/***/ },
/* 39 */
/***/ function(module, exports) {

	module.exports = require("async");

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	/// <reference path="../../typings/index.d.ts" />
	"use strict";
	var schedule = __webpack_require__(41);
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


/***/ },
/* 41 */
/***/ function(module, exports) {

	module.exports = require("node-schedule");

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	/// <reference path="./typings/index.d.ts"/>
	"use strict";
	var io = __webpack_require__(43);
	var event_bus_1 = __webpack_require__(23);
	var PRODUCT_DATA_RECEIVED_FROM_SERVER = "product-data-received-from-server";
	function run(server, productService) {
	    var ioServer = io(server);
	    event_bus_1.eventBus.on(event_bus_1.EventNames.ProductScraped, function (productId) {
	        productService.one(productId)
	            .then(function (product) {
	            var connectedClients = ioServer.clients().connected;
	            if (connectedClients) {
	                Object.keys(connectedClients)
	                    .forEach(function (k) {
	                    var socket = connectedClients[k];
	                    if (socket && socket.connected) {
	                        socket.emit(PRODUCT_DATA_RECEIVED_FROM_SERVER, {
	                            type: PRODUCT_DATA_RECEIVED_FROM_SERVER,
	                            product: product
	                        });
	                    }
	                });
	            }
	        });
	    });
	}
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = run;


/***/ },
/* 43 */
/***/ function(module, exports) {

	module.exports = require("socket.io");

/***/ }
/******/ ]);
//# sourceMappingURL=app.js.map