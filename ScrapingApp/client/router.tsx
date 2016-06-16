///<reference path="./typings/index.d.ts"/>

import * as React from "react";
import {Router, Route, browserHistory} from "react-router";
import { IStore } from "redux";

import LoginPart from "./login/containers/login-part";
import ProductListPart from "./product-list/containers/product-list-part";
import ProductDetailsPart from "./product-details/containers/product-details-part"

export default (loadProducts: () => void, loadProduct: (productId: string) => void ) => (
    <Router history={browserHistory}>
        <Route component={LoginPart}>
            <Route path="/" component={ProductListPart} onEnter={() => loadProducts() }></Route>
            <Route path="/product/:productId" component={ProductDetailsPart} onEnter={({params}) => loadProduct(params["productId"]) }></Route>
        </Route>
    </Router>
);