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


/***/ }
/******/ ]);
//# sourceMappingURL=import-test-data.js.map