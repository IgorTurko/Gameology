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

	/// <reference path="./typings/index.d.ts" />
	"use strict";
	var React = __webpack_require__(1);
	var ReactDOM = __webpack_require__(2);
	var search_box_1 = __webpack_require__(3);
	var all_products_1 = __webpack_require__(4);
	var product_repo_1 = __webpack_require__(5);
	var shop_repo_1 = __webpack_require__(6);
	new shop_repo_1.default().getAllShops()
	    .then(function (shops) {
	    new product_repo_1.default().getAllProducts()
	        .then(function (products) {
	        ReactDOM.render(React.createElement("div", {className: "container"}, React.createElement(search_box_1.default, {value: "", placeholder: "Search products..."}), React.createElement(all_products_1.default, {products: products, shops: shops})), document.getElementsByClassName("container")[0]);
	    });
	});


/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = React;

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = ReactDOM;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	/// <reference path="./../typings/index.d.ts" />
	var React = __webpack_require__(1);
	var SearchBox = (function (_super) {
	    __extends(SearchBox, _super);
	    function SearchBox() {
	        _super.apply(this, arguments);
	    }
	    SearchBox.prototype.handlerTextChange = function () {
	        console.log('as');
	    };
	    ;
	    SearchBox.prototype.render = function () {
	        return (React.createElement("div", {className: "input-group"}, React.createElement("input", {type: "text", value: this.props.value, className: "form-control", placeholder: this.props.placeholder, onChange: this.handlerTextChange}), React.createElement("span", {className: "input-group-btn"}, React.createElement("button", {className: "btn btn-default", type: "button"}, "Search"))));
	    };
	    return SearchBox;
	}(React.Component));
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = SearchBox;


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	/// <reference path="./../typings/index.d.ts" />
	var React = __webpack_require__(1);
	var ProductsGrid = (function (_super) {
	    __extends(ProductsGrid, _super);
	    function ProductsGrid() {
	        _super.apply(this, arguments);
	    }
	    ProductsGrid.prototype.getHeader = function () {
	        return (React.createElement("div", {className: "row"}, React.createElement("div", {className: "col-md-1"}, "Product"), this.props
	            .shops
	            .map(function (shop) { return (React.createElement("div", {className: "col-md-2"}, shop.title)); }), React.createElement("div", {className: "col-md-1 product-action"}, "Actions")));
	    };
	    ;
	    ProductsGrid.prototype.getEmptyRow = function () {
	        return React.createElement("div", {className: "col-md-12"}, "No products");
	    };
	    ;
	    ProductsGrid.prototype.getData = function () {
	        var _this = this;
	        return this.props.products.map(function (product) {
	            return (React.createElement("div", {className: "row"}, React.createElement("div", {className: "col-md-2"}, product.title), _this.props.shops.map(function (shop) {
	                var p = product.values[shop.id];
	                return (React.createElement("div", {className: "col-md-2"}, React.createElement("div", {className: "product-url"}, product.scrapingUrls[shop.id]), React.createElement("img", {className: "product-img", src: p != null ? p.image : '', alt: "no image"}), React.createElement("div", {className: "product-price"}, p != null ? p.price : '')));
	            })));
	        });
	    };
	    ;
	    ProductsGrid.prototype.render = function () {
	        if (this.props.products == null || this.props.products.length == 0) {
	            return React.createElement("div", null, this.getHeader(), this.getEmptyRow());
	        }
	        return React.createElement("div", null, this.getHeader(), this.getData());
	    };
	    return ProductsGrid;
	}(React.Component));
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = ProductsGrid;


/***/ },
/* 5 */
/***/ function(module, exports) {

	"use strict";
	var ProductRepository = (function () {
	    function ProductRepository() {
	    }
	    ProductRepository.prototype.getAllProducts = function () {
	        return fetch('/api/products')
	            .then(function (response) { return response.json(); })
	            .then(function (json) { return json; }, function (err) { return console.log('error'); });
	    };
	    ;
	    return ProductRepository;
	}());
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = ProductRepository;


/***/ },
/* 6 */
/***/ function(module, exports) {

	"use strict";
	var ShopRepository = (function () {
	    function ShopRepository() {
	    }
	    ShopRepository.prototype.getAllShops = function () {
	        return fetch('/api/shops')
	            .then(function (response) { return response.json(); })
	            .then(function (json) { return json; }, function (err) { return console.log('error'); });
	    };
	    ;
	    return ShopRepository;
	}());
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = ShopRepository;


/***/ }
/******/ ]);
//# sourceMappingURL=app.js.map