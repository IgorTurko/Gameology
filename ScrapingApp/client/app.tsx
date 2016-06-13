/// <reference path="./typings/index.d.ts" />

import * as React from "react";
import * as ReactDOM from "react-dom";
import { createStore, applyMiddleware, combineReducers } from "redux";
import { Provider } from "react-redux";

import { reduce as productListReduce } from "./product-list/reducer";

import ProductMiddleware from "./product-list/middlewares/product";
import ProductList from "./product-list/containers/product-list";

const productMiddleware = new ProductMiddleware();

const reducers = combineReducers({ products: productListReduce });

const storeFactory = applyMiddleware<AppState.App>(
         s => productMiddleware.run(s)
         )(createStore);

const store = storeFactory(reducers);

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