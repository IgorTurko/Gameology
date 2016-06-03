/// <reference path="./typings/index.d.ts" />

import * as React from "react";
import * as ReactDOM from "react-dom";
import SearchBox from "./search/search-box";
import Grid from "./grid/all-products";

ReactDOM.render(
    <div className="container">
        <SearchBox value="" placeholder= "Search products..." />
        <Grid value="" />
    </div>, document.getElementsByClassName("container")[0]);