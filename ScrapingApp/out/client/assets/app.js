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

	/// <reference path="./typings/index.d.ts" />
	"use strict";
	var React = __webpack_require__(3);
	var ReactDOM = __webpack_require__(4);
	var redux_1 = __webpack_require__(5);
	var react_redux_1 = __webpack_require__(6);
	var event_bus_1 = __webpack_require__(7);
	var ProductListActions = __webpack_require__(16);
	var index_1 = __webpack_require__(17);
	var product_list_middleware_1 = __webpack_require__(21);
	var LoginActions = __webpack_require__(26);
	var index_2 = __webpack_require__(27);
	var login_middleware_1 = __webpack_require__(32);
	var ProductDetailsActions = __webpack_require__(34);
	var index_3 = __webpack_require__(35);
	var product_details_middleware_1 = __webpack_require__(39);
	var router_1 = __webpack_require__(40);
	var loginMiddleware = new login_middleware_1.default();
	var productListMiddleware = new product_list_middleware_1.default();
	var productDetailsMiddleware = new product_details_middleware_1.default();
	var reducers = redux_1.combineReducers({
	    products: index_1.default,
	    login: index_2.default,
	    currentProduct: index_3.default
	});
	var enhancer = redux_1.applyMiddleware(function (s) { return loginMiddleware.run(s); }, function (s) { return productListMiddleware.run(s); }, function (s) { return productDetailsMiddleware.run(s); });
	var store = redux_1.createStore(reducers, undefined, enhancer);
	event_bus_1.eventBus.addListener(event_bus_1.Events.AuthorizationError, function () {
	    var action = {
	        type: LoginActions.LOGIN_REQUIRED
	    };
	    store.dispatch(action);
	});
	var loadProducts = function () { return store.dispatch({ type: ProductListActions.PRODUCT_LOAD_REQUEST }); };
	var loadProductDetails = function (productId) { return store.dispatch({ type: ProductDetailsActions.PRODUCT_LOAD_REQUEST, productId: productId }); };
	ReactDOM.render(React.createElement(react_redux_1.Provider, {store: store}, router_1.default(loadProducts, function (productId) { return loadProductDetails(productId); })), document.getElementsByClassName("container")[0]);


/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = React;

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = ReactDOM;

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = Redux;

/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = ReactRedux;

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	/// <reference path="./typings/index.d.ts" />
	"use strict";
	var fbemitter_1 = __webpack_require__(8);
	var Events = (function () {
	    function Events() {
	    }
	    Events.AuthorizationError = "authorization-error";
	    Events.NetworkError = "network-error";
	    Events.DoLogin = "do-login";
	    Events.DoFiltering = "do-filtering";
	    Events.SaveProduct = "save-product";
	    return Events;
	}());
	exports.Events = Events;
	var eventBus = new fbemitter_1.EventEmitter();
	exports.eventBus = eventBus;


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2014-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */
	
	var fbemitter = {
	  EventEmitter: __webpack_require__(9)
	};
	
	module.exports = fbemitter;


/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2014-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule BaseEventEmitter
	 * @typechecks
	 */
	
	'use strict';
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var EmitterSubscription = __webpack_require__(11);
	var EventSubscriptionVendor = __webpack_require__(13);
	
	var emptyFunction = __webpack_require__(15);
	var invariant = __webpack_require__(14);
	
	/**
	 * @class BaseEventEmitter
	 * @description
	 * An EventEmitter is responsible for managing a set of listeners and publishing
	 * events to them when it is told that such events happened. In addition to the
	 * data for the given event it also sends a event control object which allows
	 * the listeners/handlers to prevent the default behavior of the given event.
	 *
	 * The emitter is designed to be generic enough to support all the different
	 * contexts in which one might want to emit events. It is a simple multicast
	 * mechanism on top of which extra functionality can be composed. For example, a
	 * more advanced emitter may use an EventHolder and EventFactory.
	 */
	
	var BaseEventEmitter = (function () {
	  /**
	   * @constructor
	   */
	
	  function BaseEventEmitter() {
	    _classCallCheck(this, BaseEventEmitter);
	
	    this._subscriber = new EventSubscriptionVendor();
	    this._currentSubscription = null;
	  }
	
	  /**
	   * Adds a listener to be invoked when events of the specified type are
	   * emitted. An optional calling context may be provided. The data arguments
	   * emitted will be passed to the listener function.
	   *
	   * TODO: Annotate the listener arg's type. This is tricky because listeners
	   *       can be invoked with varargs.
	   *
	   * @param {string} eventType - Name of the event to listen to
	   * @param {function} listener - Function to invoke when the specified event is
	   *   emitted
	   * @param {*} context - Optional context object to use when invoking the
	   *   listener
	   */
	
	  BaseEventEmitter.prototype.addListener = function addListener(eventType, listener, context) {
	    return this._subscriber.addSubscription(eventType, new EmitterSubscription(this._subscriber, listener, context));
	  };
	
	  /**
	   * Similar to addListener, except that the listener is removed after it is
	   * invoked once.
	   *
	   * @param {string} eventType - Name of the event to listen to
	   * @param {function} listener - Function to invoke only once when the
	   *   specified event is emitted
	   * @param {*} context - Optional context object to use when invoking the
	   *   listener
	   */
	
	  BaseEventEmitter.prototype.once = function once(eventType, listener, context) {
	    var emitter = this;
	    return this.addListener(eventType, function () {
	      emitter.removeCurrentListener();
	      listener.apply(context, arguments);
	    });
	  };
	
	  /**
	   * Removes all of the registered listeners, including those registered as
	   * listener maps.
	   *
	   * @param {?string} eventType - Optional name of the event whose registered
	   *   listeners to remove
	   */
	
	  BaseEventEmitter.prototype.removeAllListeners = function removeAllListeners(eventType) {
	    this._subscriber.removeAllSubscriptions(eventType);
	  };
	
	  /**
	   * Provides an API that can be called during an eventing cycle to remove the
	   * last listener that was invoked. This allows a developer to provide an event
	   * object that can remove the listener (or listener map) during the
	   * invocation.
	   *
	   * If it is called when not inside of an emitting cycle it will throw.
	   *
	   * @throws {Error} When called not during an eventing cycle
	   *
	   * @example
	   *   var subscription = emitter.addListenerMap({
	   *     someEvent: function(data, event) {
	   *       console.log(data);
	   *       emitter.removeCurrentListener();
	   *     }
	   *   });
	   *
	   *   emitter.emit('someEvent', 'abc'); // logs 'abc'
	   *   emitter.emit('someEvent', 'def'); // does not log anything
	   */
	
	  BaseEventEmitter.prototype.removeCurrentListener = function removeCurrentListener() {
	    !!!this._currentSubscription ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Not in an emitting cycle; there is no current subscription') : invariant(false) : undefined;
	    this._subscriber.removeSubscription(this._currentSubscription);
	  };
	
	  /**
	   * Returns an array of listeners that are currently registered for the given
	   * event.
	   *
	   * @param {string} eventType - Name of the event to query
	   * @return {array}
	   */
	
	  BaseEventEmitter.prototype.listeners = function listeners(eventType) /* TODO: Array<EventSubscription> */{
	    var subscriptions = this._subscriber.getSubscriptionsForType(eventType);
	    return subscriptions ? subscriptions.filter(emptyFunction.thatReturnsTrue).map(function (subscription) {
	      return subscription.listener;
	    }) : [];
	  };
	
	  /**
	   * Emits an event of the given type with the given data. All handlers of that
	   * particular type will be notified.
	   *
	   * @param {string} eventType - Name of the event to emit
	   * @param {*} Arbitrary arguments to be passed to each registered listener
	   *
	   * @example
	   *   emitter.addListener('someEvent', function(message) {
	   *     console.log(message);
	   *   });
	   *
	   *   emitter.emit('someEvent', 'abc'); // logs 'abc'
	   */
	
	  BaseEventEmitter.prototype.emit = function emit(eventType) {
	    var subscriptions = this._subscriber.getSubscriptionsForType(eventType);
	    if (subscriptions) {
	      var keys = Object.keys(subscriptions);
	      for (var ii = 0; ii < keys.length; ii++) {
	        var key = keys[ii];
	        var subscription = subscriptions[key];
	        // The subscription may have been removed during this event loop.
	        if (subscription) {
	          this._currentSubscription = subscription;
	          this.__emitToSubscription.apply(this, [subscription].concat(Array.prototype.slice.call(arguments)));
	        }
	      }
	      this._currentSubscription = null;
	    }
	  };
	
	  /**
	   * Provides a hook to override how the emitter emits an event to a specific
	   * subscription. This allows you to set up logging and error boundaries
	   * specific to your environment.
	   *
	   * @param {EmitterSubscription} subscription
	   * @param {string} eventType
	   * @param {*} Arbitrary arguments to be passed to each registered listener
	   */
	
	  BaseEventEmitter.prototype.__emitToSubscription = function __emitToSubscription(subscription, eventType) {
	    var args = Array.prototype.slice.call(arguments, 2);
	    subscription.listener.apply(subscription.context, args);
	  };
	
	  return BaseEventEmitter;
	})();
	
	module.exports = BaseEventEmitter;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(10)))

/***/ },
/* 10 */
/***/ function(module, exports) {

	// shim for using process in browser
	
	var process = module.exports = {};
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;
	
	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}
	
	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = setTimeout(cleanUpNextTick);
	    draining = true;
	
	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    clearTimeout(timeout);
	}
	
	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        setTimeout(drainQueue, 0);
	    }
	};
	
	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};
	
	function noop() {}
	
	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;
	
	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};
	
	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2014-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 * 
	 * @providesModule EmitterSubscription
	 * @typechecks
	 */
	
	'use strict';
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var EventSubscription = __webpack_require__(12);
	
	/**
	 * EmitterSubscription represents a subscription with listener and context data.
	 */
	
	var EmitterSubscription = (function (_EventSubscription) {
	  _inherits(EmitterSubscription, _EventSubscription);
	
	  /**
	   * @param {EventSubscriptionVendor} subscriber - The subscriber that controls
	   *   this subscription
	   * @param {function} listener - Function to invoke when the specified event is
	   *   emitted
	   * @param {*} context - Optional context object to use when invoking the
	   *   listener
	   */
	
	  function EmitterSubscription(subscriber, listener, context) {
	    _classCallCheck(this, EmitterSubscription);
	
	    _EventSubscription.call(this, subscriber);
	    this.listener = listener;
	    this.context = context;
	  }
	
	  return EmitterSubscription;
	})(EventSubscription);
	
	module.exports = EmitterSubscription;

/***/ },
/* 12 */
/***/ function(module, exports) {

	/**
	 * Copyright (c) 2014-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule EventSubscription
	 * @typechecks
	 */
	
	'use strict';
	
	/**
	 * EventSubscription represents a subscription to a particular event. It can
	 * remove its own subscription.
	 */
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var EventSubscription = (function () {
	
	  /**
	   * @param {EventSubscriptionVendor} subscriber the subscriber that controls
	   *   this subscription.
	   */
	
	  function EventSubscription(subscriber) {
	    _classCallCheck(this, EventSubscription);
	
	    this.subscriber = subscriber;
	  }
	
	  /**
	   * Removes this subscription from the subscriber that controls it.
	   */
	
	  EventSubscription.prototype.remove = function remove() {
	    if (this.subscriber) {
	      this.subscriber.removeSubscription(this);
	      this.subscriber = null;
	    }
	  };
	
	  return EventSubscription;
	})();
	
	module.exports = EventSubscription;

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2014-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 * 
	 * @providesModule EventSubscriptionVendor
	 * @typechecks
	 */
	
	'use strict';
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var invariant = __webpack_require__(14);
	
	/**
	 * EventSubscriptionVendor stores a set of EventSubscriptions that are
	 * subscribed to a particular event type.
	 */
	
	var EventSubscriptionVendor = (function () {
	  function EventSubscriptionVendor() {
	    _classCallCheck(this, EventSubscriptionVendor);
	
	    this._subscriptionsForType = {};
	    this._currentSubscription = null;
	  }
	
	  /**
	   * Adds a subscription keyed by an event type.
	   *
	   * @param {string} eventType
	   * @param {EventSubscription} subscription
	   */
	
	  EventSubscriptionVendor.prototype.addSubscription = function addSubscription(eventType, subscription) {
	    !(subscription.subscriber === this) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'The subscriber of the subscription is incorrectly set.') : invariant(false) : undefined;
	    if (!this._subscriptionsForType[eventType]) {
	      this._subscriptionsForType[eventType] = [];
	    }
	    var key = this._subscriptionsForType[eventType].length;
	    this._subscriptionsForType[eventType].push(subscription);
	    subscription.eventType = eventType;
	    subscription.key = key;
	    return subscription;
	  };
	
	  /**
	   * Removes a bulk set of the subscriptions.
	   *
	   * @param {?string} eventType - Optional name of the event type whose
	   *   registered supscriptions to remove, if null remove all subscriptions.
	   */
	
	  EventSubscriptionVendor.prototype.removeAllSubscriptions = function removeAllSubscriptions(eventType) {
	    if (eventType === undefined) {
	      this._subscriptionsForType = {};
	    } else {
	      delete this._subscriptionsForType[eventType];
	    }
	  };
	
	  /**
	   * Removes a specific subscription. Instead of calling this function, call
	   * `subscription.remove()` directly.
	   *
	   * @param {object} subscription
	   */
	
	  EventSubscriptionVendor.prototype.removeSubscription = function removeSubscription(subscription) {
	    var eventType = subscription.eventType;
	    var key = subscription.key;
	
	    var subscriptionsForType = this._subscriptionsForType[eventType];
	    if (subscriptionsForType) {
	      delete subscriptionsForType[key];
	    }
	  };
	
	  /**
	   * Returns the array of subscriptions that are currently registered for the
	   * given event type.
	   *
	   * Note: This array can be potentially sparse as subscriptions are deleted
	   * from it when they are removed.
	   *
	   * TODO: This returns a nullable array. wat?
	   *
	   * @param {string} eventType
	   * @return {?array}
	   */
	
	  EventSubscriptionVendor.prototype.getSubscriptionsForType = function getSubscriptionsForType(eventType) {
	    return this._subscriptionsForType[eventType];
	  };
	
	  return EventSubscriptionVendor;
	})();
	
	module.exports = EventSubscriptionVendor;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(10)))

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */
	
	'use strict';
	
	/**
	 * Use invariant() to assert state which your program assumes to be true.
	 *
	 * Provide sprintf-style format (only %s is supported) and arguments
	 * to provide information about what broke and what you were
	 * expecting.
	 *
	 * The invariant message will be stripped in production, but the invariant
	 * will remain to ensure logic does not differ in production.
	 */
	
	function invariant(condition, format, a, b, c, d, e, f) {
	  if (process.env.NODE_ENV !== 'production') {
	    if (format === undefined) {
	      throw new Error('invariant requires an error message argument');
	    }
	  }
	
	  if (!condition) {
	    var error;
	    if (format === undefined) {
	      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
	    } else {
	      var args = [a, b, c, d, e, f];
	      var argIndex = 0;
	      error = new Error(format.replace(/%s/g, function () {
	        return args[argIndex++];
	      }));
	      error.name = 'Invariant Violation';
	    }
	
	    error.framesToPop = 1; // we don't care about invariant's own frame
	    throw error;
	  }
	}
	
	module.exports = invariant;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(10)))

/***/ },
/* 15 */
/***/ function(module, exports) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */
	
	"use strict";
	
	function makeEmptyFunction(arg) {
	  return function () {
	    return arg;
	  };
	}
	
	/**
	 * This function accepts and discards inputs; it has no side effects. This is
	 * primarily useful idiomatically for overridable function endpoints which
	 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
	 */
	function emptyFunction() {}
	
	emptyFunction.thatReturns = makeEmptyFunction;
	emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
	emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
	emptyFunction.thatReturnsNull = makeEmptyFunction(null);
	emptyFunction.thatReturnsThis = function () {
	  return this;
	};
	emptyFunction.thatReturnsArgument = function (arg) {
	  return arg;
	};
	
	module.exports = emptyFunction;

/***/ },
/* 16 */
/***/ function(module, exports) {

	/// <reference path="../typings/index.d.ts" />
	"use strict";
	exports.PRODUCT_SEARCH = "product-list-search";
	exports.PRODUCTS_LOADED = "product-list-loaded";
	exports.PRODUCT_LOAD_REQUEST = "load-product-list-request";


/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	/// <reference path="../../typings/index.d.ts" />
	"use strict";
	var product_list_loaded_1 = __webpack_require__(18);
	var search_product_list_1 = __webpack_require__(19);
	var load_product_list_request_1 = __webpack_require__(20);
	var Actions = __webpack_require__(16);
	var productInitialState = {
	    isLoading: false,
	    products: [],
	    shops: [],
	    filteredProducts: [],
	    search: ""
	};
	var actionMap = (_a = {},
	    _a[Actions.PRODUCT_SEARCH] = search_product_list_1.default,
	    _a[Actions.PRODUCTS_LOADED] = product_list_loaded_1.default,
	    _a[Actions.PRODUCT_LOAD_REQUEST] = load_product_list_request_1.default,
	    _a
	);
	function reduce(state, action) {
	    if (state === void 0) { state = productInitialState; }
	    var reducer = actionMap[action.type];
	    if (!reducer)
	        return state;
	    return reducer(state, action);
	}
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = reduce;
	var _a;


/***/ },
/* 18 */
/***/ function(module, exports) {

	/// <reference path="../../typings/index.d.ts" />
	"use strict";
	function productListLoaded(state, action) {
	    return Object.assign({}, state, {
	        isLoading: false,
	        products: action.products,
	        search: "",
	        filteredProducts: action.products,
	        shops: action.shops
	    });
	}
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = productListLoaded;


/***/ },
/* 19 */
/***/ function(module, exports) {

	/// <reference path="../../typings/index.d.ts" />
	"use strict";
	function searchProductList(state, action) {
	    return Object.assign({}, state, {
	        filteredProducts: state.products
	            .filter(function (p) { return !action.filter || p.title.toLowerCase().indexOf(action.filter.toLowerCase()) !== -1; })
	    });
	}
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = searchProductList;


/***/ },
/* 20 */
/***/ function(module, exports) {

	/// <reference path="../../typings/index.d.ts" />
	"use strict";
	function productListLoadRequest(state, action) {
	    return Object.assign({}, state, {
	        isLoading: true
	    });
	}
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = productListLoadRequest;


/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	/// <reference path="../../typings/index.d.ts" />
	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var middleware_base_1 = __webpack_require__(22);
	var product_repo_1 = __webpack_require__(23);
	var shop_repo_1 = __webpack_require__(25);
	var Actions = __webpack_require__(16);
	var LoginActions = __webpack_require__(26);
	var ProductListMiddleware = (function (_super) {
	    __extends(ProductListMiddleware, _super);
	    function ProductListMiddleware() {
	        _super.apply(this, arguments);
	        this.productRepo = new product_repo_1.default();
	        this.shopRepo = new shop_repo_1.default();
	    }
	    ProductListMiddleware.prototype[Actions.PRODUCT_LOAD_REQUEST] = function (state, action, dispatch) {
	        Promise.all([
	            this.productRepo.getAllProducts(),
	            this.shopRepo.getAllShops()
	        ]).then(function (_a) {
	            var products = _a[0], shops = _a[1];
	            var action = {
	                type: Actions.PRODUCTS_LOADED,
	                products: products,
	                shops: shops
	            };
	            dispatch(action);
	        }).catch(function (err) {
	            var action = {
	                type: Actions.PRODUCTS_LOADED,
	                products: [],
	                shops: []
	            };
	            dispatch(action);
	        });
	    };
	    ProductListMiddleware.prototype[LoginActions.LOGIN_SUCCESS] = function (state, action, dispatch, store) {
	        var reloadProductList = {
	            type: Actions.PRODUCT_LOAD_REQUEST
	        };
	        store.dispatch(reloadProductList);
	    };
	    return ProductListMiddleware;
	}(middleware_base_1.default));
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = ProductListMiddleware;


/***/ },
/* 22 */
/***/ function(module, exports) {

	/// <reference path="./typings/index.d.ts" />
	"use strict";
	var MiddlewareBase = (function () {
	    function MiddlewareBase() {
	    }
	    MiddlewareBase.prototype.run = function (store) {
	        var _this = this;
	        return function (dispatch) { return function (action) {
	            var handler = _this[action.type];
	            if (handler) {
	                var state = store.getState();
	                handler.call(_this, state, action, dispatch, store);
	            }
	            return dispatch(action);
	        }; };
	    };
	    return MiddlewareBase;
	}());
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = MiddlewareBase;


/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	/// <reference path="../typings/index.d.ts"/>
	"use strict";
	var http_client_1 = __webpack_require__(24);
	var ProductRepository = (function () {
	    function ProductRepository() {
	        this.httpClient = new http_client_1.default();
	    }
	    ProductRepository.prototype.getAllProducts = function () {
	        return this.httpClient.get('/api/products');
	    };
	    ;
	    ProductRepository.prototype.getProductById = function (id) {
	        return this.httpClient.get("/api/products/" + id);
	    };
	    ;
	    ProductRepository.prototype.saveProduct = function (product) {
	        return this.httpClient.post("/api/products", product);
	    };
	    ;
	    return ProductRepository;
	}());
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = ProductRepository;


/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/// <reference path="../typings/index.d.ts"/>
	var event_bus_1 = __webpack_require__(7);
	var HttpClient = (function () {
	    function HttpClient() {
	    }
	    HttpClient.prototype.get = function (url) {
	        return this.fetch(url);
	    };
	    ;
	    HttpClient.prototype.post = function (url, body) {
	        return this.fetch(url, body);
	    };
	    ;
	    HttpClient.prototype.fetch = function (url, body) {
	        var options = {
	            credentials: 'same-origin'
	        };
	        if (body) {
	            options.body = JSON.stringify(body);
	            options.method = 'POST';
	            options.headers = { "Content-Type": "application/json" };
	        }
	        return new Promise(function (resolve, reject) {
	            fetch(url, options).then(function (response) {
	                if (response.status >= 200 && response.status < 300) {
	                    response.json().then(function (data) { return resolve(data); });
	                    return;
	                }
	                if (response.status == 401) {
	                    event_bus_1.eventBus.emit(event_bus_1.Events.AuthorizationError);
	                }
	                else {
	                    event_bus_1.eventBus.emit(event_bus_1.Events.NetworkError);
	                }
	                reject();
	            }, function (error) {
	                event_bus_1.eventBus.emit(event_bus_1.Events.NetworkError);
	                reject();
	            });
	        });
	    };
	    return HttpClient;
	}());
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = HttpClient;


/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var http_client_1 = __webpack_require__(24);
	var ShopRepository = (function () {
	    function ShopRepository() {
	        this.httpClient = new http_client_1.default();
	    }
	    ShopRepository.prototype.getAllShops = function () {
	        return this.httpClient.get('/api/shops');
	    };
	    ;
	    return ShopRepository;
	}());
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = ShopRepository;


/***/ },
/* 26 */
/***/ function(module, exports) {

	/// <reference path="../typings/index.d.ts" />
	"use strict";
	exports.LOGIN_REQUIRED = "login-required";
	exports.LOGIN_ON_SERVER = "login-on-server";
	exports.LOGIN_ERROR = "login-error";
	exports.LOGIN_SUCCESS = "login-success";


/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Actions = __webpack_require__(26);
	var login_required_1 = __webpack_require__(28);
	var login_on_server_1 = __webpack_require__(29);
	var login_error_1 = __webpack_require__(30);
	var login_success_1 = __webpack_require__(31);
	var loginInitialState = {
	    isLoginRequired: false,
	    isLogging: false,
	    error: ""
	};
	var actionMap = (_a = {},
	    _a[Actions.LOGIN_REQUIRED] = login_required_1.default,
	    _a[Actions.LOGIN_ON_SERVER] = login_on_server_1.default,
	    _a[Actions.LOGIN_ERROR] = login_error_1.default,
	    _a[Actions.LOGIN_SUCCESS] = login_success_1.default,
	    _a
	);
	function reduce(state, action) {
	    if (state === void 0) { state = loginInitialState; }
	    var reducer = actionMap[action.type];
	    if (!reducer)
	        return state;
	    return reducer(state, action);
	}
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = reduce;
	var _a;


/***/ },
/* 28 */
/***/ function(module, exports) {

	"use strict";
	function loginRequired(state, action) {
	    return Object.assign({}, state, {
	        isLogging: false,
	        isLoginRequired: true,
	        credentials: {},
	        error: ""
	    });
	}
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = loginRequired;


/***/ },
/* 29 */
/***/ function(module, exports) {

	/// <reference path="../../typings/index.d.ts" />
	"use strict";
	function loginOnServer(state, action) {
	    return Object.assign({}, state, {
	        isLogging: true
	    });
	}
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = loginOnServer;


/***/ },
/* 30 */
/***/ function(module, exports) {

	/// <reference path="../../typings/index.d.ts" />
	"use strict";
	function loginError(state, action) {
	    return Object.assign({}, state, {
	        isLogging: false,
	        error: action.errorMessage
	    });
	}
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = loginError;


/***/ },
/* 31 */
/***/ function(module, exports) {

	"use strict";
	function loginSuccess(state, action) {
	    return Object.assign({}, state, {
	        isLogging: false,
	        isLoginRequired: false,
	        credentials: null,
	        error: null
	    });
	}
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = loginSuccess;


/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var login_repo_1 = __webpack_require__(33);
	var middleware_base_1 = __webpack_require__(22);
	var Actions = __webpack_require__(26);
	var LoginMiddleware = (function (_super) {
	    __extends(LoginMiddleware, _super);
	    function LoginMiddleware() {
	        _super.apply(this, arguments);
	        this.loginRepo = new login_repo_1.default();
	    }
	    LoginMiddleware.prototype[Actions.LOGIN_ON_SERVER] = function (state, action, dispatch) {
	        this.loginRepo
	            .login(action.credentials)
	            .then(function (r) {
	            if (r.ok) {
	                var action_1 = {
	                    type: Actions.LOGIN_SUCCESS
	                };
	                dispatch(action_1);
	            }
	            else {
	                var action_2 = {
	                    type: Actions.LOGIN_ERROR,
	                    errorMessage: r.error
	                };
	                dispatch(action_2);
	            }
	        });
	    };
	    return LoginMiddleware;
	}(middleware_base_1.default));
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = LoginMiddleware;


/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var http_client_1 = __webpack_require__(24);
	var LoginRepository = (function () {
	    function LoginRepository() {
	        this.httpClient = new http_client_1.default();
	    }
	    LoginRepository.prototype.login = function (credentials) {
	        return this.httpClient.post('/api/login', credentials);
	    };
	    ;
	    return LoginRepository;
	}());
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = LoginRepository;


/***/ },
/* 34 */
/***/ function(module, exports) {

	/// <reference path="../typings/index.d.ts" />
	"use strict";
	exports.SAVE_PRODUCT = "save-product";
	exports.PRODUCT_LOAD_REQUEST = "load-product";
	exports.SAVE_ERROR = "save-error";
	exports.SAVE_SUCCESS = "save-success";
	exports.PRODUCT_LOADED = "product-details-loaded";


/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	///<reference path="../../typings/index.d.ts" />
	"use strict";
	var Actions = __webpack_require__(34);
	var save_product_1 = __webpack_require__(36);
	var product_details_loaded_1 = __webpack_require__(37);
	var load_product_details_request_1 = __webpack_require__(38);
	var productInitialState = {
	    product: {
	        id: '',
	        title: '',
	        scrapingUrls: {}
	    },
	    shops: []
	};
	var actionMap = (_a = {},
	    _a[Actions.SAVE_PRODUCT] = save_product_1.default,
	    _a[Actions.PRODUCT_LOADED] = product_details_loaded_1.default,
	    _a[Actions.PRODUCT_LOAD_REQUEST] = load_product_details_request_1.default,
	    _a
	);
	function reduce(state, action) {
	    if (state === void 0) { state = productInitialState; }
	    var reducer = actionMap[action.type];
	    if (!reducer)
	        return state;
	    return reducer(state, action);
	}
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = reduce;
	var _a;


/***/ },
/* 36 */
/***/ function(module, exports) {

	///<reference path="../../typings/index.d.ts" />
	"use strict";
	function saveProduct(state, action) {
	    return Object.assign({}, state, {
	        product: state.product
	    });
	}
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = saveProduct;


/***/ },
/* 37 */
/***/ function(module, exports) {

	/// <reference path="../../typings/index.d.ts" />
	"use strict";
	function productDetailsLoaded(state, action) {
	    return Object.assign({}, state, {
	        product: action.product,
	        shops: action.shops
	    });
	}
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = productDetailsLoaded;


/***/ },
/* 38 */
/***/ function(module, exports) {

	/// <reference path="../../typings/index.d.ts" />
	"use strict";
	function selectProduct(state, action) {
	    return Object.assign({}, state, {
	        product: state.product
	    });
	}
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = selectProduct;


/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	///<reference path="../../typings/index.d.ts"/>
	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var product_repo_1 = __webpack_require__(23);
	var shop_repo_1 = __webpack_require__(25);
	var middleware_base_1 = __webpack_require__(22);
	var Actions = __webpack_require__(34);
	var ProductDetailsMiddleware = (function (_super) {
	    __extends(ProductDetailsMiddleware, _super);
	    function ProductDetailsMiddleware() {
	        _super.apply(this, arguments);
	        this.productRepository = new product_repo_1.default();
	        this.shopRepository = new shop_repo_1.default();
	    }
	    ProductDetailsMiddleware.prototype[Actions.SAVE_PRODUCT] = function (state, action, dispatch) {
	        this.productRepository
	            .saveProduct(action.product)
	            .then(function (result) {
	            if (result.ok) {
	                var action_1 = {
	                    type: Actions.SAVE_SUCCESS
	                };
	                dispatch(action_1);
	            }
	            else {
	                var action_2 = {
	                    type: Actions.SAVE_ERROR,
	                    error: result
	                };
	                dispatch(action_2);
	            }
	        });
	    };
	    ProductDetailsMiddleware.prototype[Actions.PRODUCT_LOAD_REQUEST] = function (state, action, dispatch) {
	        Promise.all([
	            this.productRepository.getProductById(action.productId),
	            this.shopRepository.getAllShops()
	        ]).then(function (_a) {
	            var product = _a[0], shops = _a[1];
	            var action = {
	                type: Actions.PRODUCT_LOADED,
	                product: product,
	                shops: shops
	            };
	            dispatch(action);
	        }).catch(function (err) {
	            var action = {
	                type: Actions.PRODUCT_LOADED,
	                product: null,
	                shops: []
	            };
	            dispatch(action);
	        });
	    };
	    return ProductDetailsMiddleware;
	}(middleware_base_1.default));
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = ProductDetailsMiddleware;


/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	///<reference path="./typings/index.d.ts"/>
	"use strict";
	var React = __webpack_require__(3);
	var react_router_1 = __webpack_require__(41);
	var login_part_1 = __webpack_require__(42);
	var product_list_part_1 = __webpack_require__(45);
	var product_details_part_1 = __webpack_require__(48);
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = function (loadProducts, loadProduct) { return (React.createElement(react_router_1.Router, {history: react_router_1.browserHistory}, React.createElement(react_router_1.Route, {component: login_part_1.default}, React.createElement(react_router_1.Route, {path: "/", component: product_list_part_1.default, onEnter: function () { return loadProducts(); }}), React.createElement(react_router_1.Route, {path: "/product/:productId", component: product_details_part_1.default, onEnter: function (_a) {
	    var params = _a.params;
	    return loadProduct(params["productId"]);
	}})))); };


/***/ },
/* 41 */
/***/ function(module, exports) {

	module.exports = ReactRouter;

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	/// <reference path="../../typings/index.d.ts" />
	"use strict";
	var __assign = (this && this.__assign) || Object.assign || function(t) {
	    for (var s, i = 1, n = arguments.length; i < n; i++) {
	        s = arguments[i];
	        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
	            t[p] = s[p];
	    }
	    return t;
	};
	var React = __webpack_require__(3);
	var react_redux_1 = __webpack_require__(6);
	var Actions = __webpack_require__(26);
	var header_1 = __webpack_require__(43);
	function loginPart(props) {
	    return (React.createElement("div", null, React.createElement(header_1.Header, __assign({}, props)), props.children));
	}
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = react_redux_1.connect(function (state) { return ({
	    isLoggedIn: !state.login.isLoginRequired,
	    errorMessage: state.login.error
	}); }, function (dispatch) { return ({
	    onLogin: function (credentials) {
	        var action = {
	            type: Actions.LOGIN_ON_SERVER,
	            credentials: credentials
	        };
	        dispatch(action);
	    }
	}); })(loginPart);


/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	///<reference path="../../typings/index.d.ts" />
	"use strict";
	var React = __webpack_require__(3);
	var login_form_1 = __webpack_require__(44);
	function Header(props) {
	    return (React.createElement("nav", {className: "navbar navbar-default navbar-fixed-top"}, React.createElement("div", {className: "container"}, React.createElement("div", {className: "navbar-left"}, React.createElement("h3", null, "Gameology")), React.createElement("div", {className: "navbar-right"}, props.isLoggedIn
	        ? (React.createElement("div", {className: "navbar-text"}, "You are logged in"))
	        : (React.createElement(login_form_1.LoginForm, {errorMessage: props.errorMessage, onLogin: function (c) { return props.onLogin(c); }}))))));
	}
	exports.Header = Header;


/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	///<reference path="../../typings/index.d.ts" />
	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(3);
	/** Login form here is presentation of login credentials and error message */
	var LoginForm = (function (_super) {
	    __extends(LoginForm, _super);
	    function LoginForm() {
	        _super.apply(this, arguments);
	    }
	    LoginForm.prototype.onFormSubmit = function (e) {
	        e.preventDefault();
	        var credentials = {
	            login: e.target["login"].value,
	            password: e.target["password"].value
	        };
	        if (this.props.onLogin) {
	            this.props.onLogin(credentials);
	        }
	    };
	    LoginForm.prototype.render = function () {
	        var _this = this;
	        return (React.createElement("form", {className: "navbar-form", onSubmit: function (e) { return _this.onFormSubmit(e); }}, React.createElement("div", {className: "form-group"}, React.createElement("label", {className: "sr-only", for: "login"}, "Login"), React.createElement("input", {type: "text", className: "form-control", name: "login", id: "login", placeholder: "Login"})), React.createElement("div", {className: "form-group"}, React.createElement("label", {className: "sr-only", for: "password"}, "Password"), React.createElement("input", {type: "password", className: "form-control", name: "password", id: "password", placeholder: "Password"})), React.createElement("button", {type: "submit", className: "btn btn-default"}, "Log in"), (function () {
	            if (_this.props.errorMessage)
	                return (React.createElement("div", {className: "help-block"}, React.createElement("div", {className: "alert alert-danger", role: "alert"}, _this.props.errorMessage)));
	        })()));
	    };
	    return LoginForm;
	}(React.Component));
	exports.LoginForm = LoginForm;


/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	/// <reference path="../../typings/index.d.ts" />
	"use strict";
	var React = __webpack_require__(3);
	var react_redux_1 = __webpack_require__(6);
	var search_box_1 = __webpack_require__(46);
	var product_grid_1 = __webpack_require__(47);
	var Actions = __webpack_require__(16);
	function ProductListPageComponent(props) {
	    return (React.createElement("div", {className: "container"}, React.createElement(search_box_1.default, {placeholder: "Search products..", onFiltering: function (filter) { return props.onFilter(filter); }}), React.createElement(product_grid_1.default, {products: props.products, shops: props.shops, isLoading: props.isLoading})));
	}
	var ProductListPart = react_redux_1.connect(function (state) { return ({
	    products: state.products.filteredProducts,
	    shops: state.products.shops,
	    isLoading: state.products.isLoading
	}); }, function (dispatch) { return ({
	    onFilter: function (filter) { return dispatch({
	        type: Actions.PRODUCT_SEARCH,
	        filter: filter
	    }); }
	}); })(ProductListPageComponent);
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = ProductListPart;


/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	/// <reference path="./../../typings/index.d.ts" />
	var React = __webpack_require__(3);
	var SearchBox = (function (_super) {
	    __extends(SearchBox, _super);
	    function SearchBox() {
	        _super.apply(this, arguments);
	    }
	    SearchBox.prototype.onFormSubmit = function (e) {
	        e.preventDefault();
	        var filter = e.target["filter"].value;
	        if (this.props.onFiltering) {
	            this.props.onFiltering(filter);
	        }
	    };
	    SearchBox.prototype.render = function () {
	        var _this = this;
	        return (React.createElement("form", {onSubmit: function (e) { return _this.onFormSubmit(e); }}, React.createElement("div", {className: "search-box input-group"}, React.createElement("input", {name: "filter", type: "text", className: "form-control", placeholder: this.props.placeholder}), React.createElement("span", {className: "input-group-btn"}, React.createElement("button", {className: "btn btn-default", type: "submit"}, "Search")))));
	    };
	    return SearchBox;
	}(React.Component));
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = SearchBox;


/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	/// <reference path="../../typings/index.d.ts" />
	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(3);
	var react_router_1 = __webpack_require__(41);
	var ProductsGrid = (function (_super) {
	    __extends(ProductsGrid, _super);
	    function ProductsGrid() {
	        _super.apply(this, arguments);
	    }
	    ProductsGrid.prototype.renderHeader = function () {
	        return (React.createElement("div", {className: "row"}, React.createElement("div", {className: "col-md-2 product-cell header"}, "Product"), this.props.shops.map(function (shop) { return (React.createElement("div", {key: shop.id, className: "col-md-2 product-cell header"}, shop.title)); })));
	    };
	    ProductsGrid.prototype.renderEmptyRow = function () {
	        return React.createElement("div", {className: "col-md-12"}, "No products");
	    };
	    ProductsGrid.prototype.renderData = function () {
	        var _this = this;
	        return this.props.products.map(function (product) {
	            return (React.createElement("div", {className: "row", key: product.id}, React.createElement("div", {className: "col-md-2 product-cell"}, React.createElement(react_router_1.Link, {to: "/product/" + product.id}, product.title)), _this.props.shops.map(function (shop, index) {
	                var values = (product.values || {})[shop.id];
	                return (React.createElement("div", {className: "col-md-2 product-cell", key: product.id + "::" + index}, values ? _this.renderProductDetails(values, product.scrapingUrls[shop.id], shop) : null));
	            })));
	        });
	    };
	    ProductsGrid.prototype.renderLoadingIndicator = function () {
	        return (React.createElement("div", {className: "row"}, "Loading..."));
	    };
	    ProductsGrid.prototype.renderProductDetails = function (values, productUrl, shop) {
	        return (React.createElement("div", null, React.createElement("div", {className: "product-url"}, React.createElement("a", {href: productUrl, target: "_blank"}, values.title)), React.createElement("img", {className: "product-img", src: values.image}), React.createElement("div", {className: "product-price"}, shop.deliveryPrice
	            ? this.formatPrice(values.price + shop.deliveryPrice)
	            : this.formatPrice(values.price)), React.createElement("div", {className: "product-price delivery"}, shop.deliveryPrice
	            ? this.formatPrice(values.price) + " + " + this.formatPrice(shop.deliveryPrice)
	            : '')));
	    };
	    ProductsGrid.prototype.render = function () {
	        if (this.props.isLoading) {
	            return (React.createElement("div", {className: "product-grid"}, this.renderLoadingIndicator()));
	        }
	        if (this.props.products == null || this.props.products.length == 0) {
	            return (React.createElement("div", {className: "product-grid"}, this.props.shops != null && this.props.shops.length ? this.renderHeader() : null, this.renderEmptyRow()));
	        }
	        return (React.createElement("div", {className: "product-grid"}, this.renderHeader(), this.renderData()));
	    };
	    ProductsGrid.prototype.formatPrice = function (price) {
	        if (price == null || price === undefined || isNaN(price))
	            return "";
	        return "$" + price.toFixed(2);
	    };
	    return ProductsGrid;
	}(React.Component));
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = ProductsGrid;


/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	/// <reference path="../../typings/index.d.ts" />
	"use strict";
	var React = __webpack_require__(3);
	var react_redux_1 = __webpack_require__(6);
	var Actions = __webpack_require__(34);
	var product_form_1 = __webpack_require__(49);
	function ProductDetailsPageComponent(props) {
	    return (React.createElement(product_form_1.ProductForm, {product: props.product, shops: props.shops, onSaveProduct: function (product) { return props.onSaveProduct(product); }}));
	}
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = react_redux_1.connect(function (state) { return ({
	    product: state.currentProduct.product,
	    shops: state.currentProduct.shops
	}); }, function (dispatch) { return ({
	    onSaveProduct: function (product) {
	        var action = {
	            type: Actions.SAVE_PRODUCT,
	            product: product
	        };
	        dispatch(action);
	    }
	}); })(ProductDetailsPageComponent);


/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	/// <reference path="../../typings/index.d.ts" />
	var React = __webpack_require__(3);
	var ProductForm = (function (_super) {
	    __extends(ProductForm, _super);
	    function ProductForm(props) {
	        _super.call(this, props);
	        this.state = {
	            id: '',
	            title: '',
	            scrapingUrls: {}
	        };
	    }
	    ProductForm.prototype.componentWillReceiveProps = function (nextProps) {
	        this.setState(nextProps.product);
	    };
	    ProductForm.prototype.handleTitleChange = function (e) {
	        this.setState(function (s) {
	            s.title = e.target.value;
	            return s;
	        });
	    };
	    ProductForm.prototype.handleUrlChange = function (e) {
	        var scrapingUrls = this.state.scrapingUrls;
	        scrapingUrls[e.target.name] = e.target.value;
	        this.setState(function (s) {
	            s.scrapingUrls = scrapingUrls;
	            return s;
	        });
	    };
	    ProductForm.prototype.onFormSubmit = function (e) {
	        e.preventDefault();
	        if (this.props.onSaveProduct) {
	            this.props.onSaveProduct(this.state);
	        }
	    };
	    ProductForm.prototype.render = function () {
	        var _this = this;
	        return (React.createElement("form", {onSubmit: function (e) { return _this.onFormSubmit(e); }, className: "form-horizontal product-form"}, React.createElement("div", {className: "form-group"}, React.createElement("label", {for: "title", className: "col-md-2 control-label"}, "Product"), React.createElement("div", {className: "col-md-10"}, React.createElement("input", {type: "text", className: "form-control", id: "title", name: "title", value: this.state.title, placeholder: "Product", onChange: function (e) { return _this.handleTitleChange(e); }}))), this.props.shops.map(function (shop) { return (React.createElement("div", {className: "form-group", key: shop.id}, React.createElement("label", {for: shop.id, className: "col-md-2 control-label"}, "Url for ", shop.title), React.createElement("div", {className: "col-md-10"}, React.createElement("input", {type: "text", className: "form-control", value: _this.state.scrapingUrls[shop.id], id: shop.id, name: shop.id, onChange: function (e) { return _this.handleUrlChange(e); }})))); }), React.createElement("div", {className: "form-group"}, React.createElement("div", {className: "col-sm-offset-2 col-sm-10"}, React.createElement("button", {type: "button", className: "btn btn-default"}, "< Back"), React.createElement("button", {type: "submit", className: "btn btn-default"}, "Save")))));
	    };
	    return ProductForm;
	}(React.Component));
	exports.ProductForm = ProductForm;


/***/ }
/******/ ]);
//# sourceMappingURL=app.js.map