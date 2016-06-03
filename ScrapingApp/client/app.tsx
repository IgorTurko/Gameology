/// <reference path="./typings/index.d.ts" />

import * as React from "react";
import * as ReactDOM from "react-dom";
import SearchBox from "./search/search-box";
import Grid from "./grid/all-products";

ReactDOM.render(<SearchBox value="" placeholder= "Search products..." />, document.getElementsByClassName("container")[0]);
ReactDOM.render(<Grid value="" />, document.getElementsByClassName("container")[0]);