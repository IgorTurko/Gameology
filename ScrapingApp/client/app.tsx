/// <reference path="./typings/index.d.ts" />

import * as io from "socket.io-client";

import * as React from "react";
import * as ReactDOM from "react-dom";
import { createStore, applyMiddleware, combineReducers } from "redux";
import { Provider } from "react-redux";

import { eventBus, Events } from "./event-bus";

import * as ProductListActions from "./product-list/actions";
import productListReducer from "./product-list/reducers/index";
import ProductListMiddleware from "./product-list/middlewares/product-list-middleware";

import * as LoginActions from "./login/actions";
import loginReducer from "./login/reducers";
import LoginMiddleware from "./login/middleware/login-middleware";

import * as ProductDetailsActions from "./product-details/actions";
import productDetailsReducer from "./product-details/reducers";
import ProductDetailsMiddleware from "./product-details/middlewares/product-details-middleware"

import * as ShopActions from "./shop-editing/actions";
import shopReducers from "./shop-editing/reducers";
import ShopEditingMiddleware from "./shop-editing/middlewares";

import router from "./router"

const loginMiddleware = new LoginMiddleware();
const productListMiddleware = new ProductListMiddleware();
const productDetailsMiddleware = new ProductDetailsMiddleware();
const shopMiddleware = new ShopEditingMiddleware();

const reducers = combineReducers({
    products: productListReducer,
    login: loginReducer,
    currentProduct: productDetailsReducer,
    shopEditing: shopReducers
});

const enhancer = applyMiddleware<AppState.App>(
    s => loginMiddleware.run(s),
    s => productListMiddleware.run(s),
    s => productDetailsMiddleware.run(s),
    s => shopMiddleware.run(s)
);

const store = createStore(reducers, undefined, enhancer);

eventBus.addListener(Events.AuthorizationError, () => {
    const action: LoginActions.LoginRequiredAction = {
        type: LoginActions.LOGIN_REQUIRED
    };

    store.dispatch(action);
});

const loadProductsList = () => store.dispatch({ type: ProductListActions.PRODUCT_LOAD_REQUEST } as ProductListActions.LoadProductListRequestAction);
const loadProductDetails = (productId) => store.dispatch({ type: ProductDetailsActions.PRODUCT_LOAD_REQUEST, productId } as ProductDetailsActions.LoadProductDetailsRequestAction);

ReactDOM.render(
    <Provider store={ store }>
        {router(loadProductsList, (productId) => loadProductDetails(productId)) }
    </Provider>,
    document.getElementsByClassName("container")[0]);

const socket = io.connect(location.origin);

socket.on("Timeout", data => {
    console.log("Timeout", data);
});