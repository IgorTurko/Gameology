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
	            var nestedValidationContext = validationContext.index(i, function () {
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


/***/ },
/* 33 */
/***/ function(module, exports) {

	module.exports = require("path");

/***/ }
/******/ ]);
//# sourceMappingURL=run-page-parsing.js.map