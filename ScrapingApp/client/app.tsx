/// <reference path="./typings/index.d.ts" />

import * as React from "react";
import * as ReactDOM from "react-dom";
import * as redux from "redux";
import { Provider } from "react-redux";

import { reduce as productListReduce } from "./product-list/reducer";

import ProductList from "./product-list/containers/product-list";

const store = redux.createStore(redux.combineReducers({
    products: productListReduce
}));

ReactDOM.render(
    <Provider store={ store }>
        <ProductList />
    </Provider>,
    document.getElementsByClassName("container")[0]);

// ReactDOM.render(
//     <Router history={browserHistory}>
//         <Route component={LayoutPage}>
//             <Route path="/" component={MainPage} />
//             <Route path="/product/:productId" component={ProductPage} />
//         </Route>
//     </Router>, document.getElementsByClassName("container")[0]);