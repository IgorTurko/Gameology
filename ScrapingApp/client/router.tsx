///<reference path="./typings/index.d.ts"/>

import * as React from "react";
import {Router, Route, browserHistory} from "react-router";

import LoginPart from "./login/containers/login-part";
import ProductListPart from "./product-list/containers/product-list-part";
import ProductDetailsPart from "./product-details/containers/product-details-part"

export default (
    <Router history={browserHistory} onUpdate={function() { console.log("changed"); }}>
        <Route component={LoginPart}>
            <Route path="/" component={ProductListPart}></Route>
            <Route path="/product/:productId" component={ProductDetailsPart}></Route>
        </Route>
    </Router>
);