/// <reference path="./typings/index.d.ts" />

import * as React from "react";
import * as ReactDOM from "react-dom";
import * as redux from "redux";
import * as reactredux from "react-redux";

import { reduce as productListReduce } from "./product-list/reducer";


const store = redux.createStore(redux.combineReducers({
    products: productListReduce
}));

// ReactDOM.render(
//     <Router history={browserHistory}>
//         <Route component={LayoutPage}>
//             <Route path="/" component={MainPage} />
//             <Route path="/product/:productId" component={ProductPage} />
//         </Route>
//     </Router>, document.getElementsByClassName("container")[0]);