/// <reference path="./typings/index.d.ts" />

import * as React from "react";
import * as ReactDOM from "react-dom";
import SearchBox from "./search/search-box";
import ProductsGrid from "./grid/all-products";
import ProductRepository from "./data/product-repo";
import ShopRepository from "./data/shop-repo";

new ShopRepository().getAllShops().then(shops => {
    new ProductRepository().getAllProducts().then(products => {
        ReactDOM.render(
            <div className="container">
                <SearchBox value="" placeholder= "Search products..." />
                <ProductsGrid data={products} shops="{shops}" />
            </div>, document.getElementsByClassName("container")[0]);
    });
});