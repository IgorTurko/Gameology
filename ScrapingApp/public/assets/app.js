/// <reference path="./typings/index.d.ts" />
"use strict";
var React = require("react");
var ReactDOM = require("react-dom");
var search_box_1 = require("./search/search-box");
ReactDOM.render(React.createElement(search_box_1.default, {value: "", placeholder: "Search products..."}), document.getElementsByClassName("container")[0]);
ReactDOM.render(React.createElement(Grid, null), document.getElementsByClassName("container")[0]);
//# sourceMappingURL=app.js.map