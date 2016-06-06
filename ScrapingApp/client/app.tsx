/// <reference path="./typings/index.d.ts" />

import * as React from "react";
import * as ReactDOM from "react-dom";
import SearchBox from "./search/search-box";
import Grid from "./grid/all-products";
import ProductRepo from "./data/product-repo";

var allProducts = new ProductRepo().getAllProducts().then(function(data) {
    ReactDOM.render(
        <div className="container">
            <SearchBox value="" placeholder= "Search products..." />
            <Grid data={data} shops="" />
        </div>, document.getElementsByClassName("container")[0]); 
});