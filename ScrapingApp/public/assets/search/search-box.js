"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/// <reference path="./../typings/index.d.ts" />
var React = require("react");
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
//# sourceMappingURL=search-box.js.map