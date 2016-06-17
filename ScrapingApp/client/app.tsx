/// <reference path="./typings/index.d.ts" />

import * as React from "react";
import * as ReactDOM from "react-dom";
import { createStore, applyMiddleware, combineReducers } from "redux";
import { Provider } from "react-redux";

import { eventBus, Events } from "./event-bus";

import * as ProductListActions from "./product-list/actions";
import productListReducer from "./product-list/reducers/index";
import ProductListMiddleware from "./product-list/middlewares/product-list-middleware";

import * as LoginActions from "./login/actions";
import loginReducer from "./login/reducers/index";
import LoginMiddleware from "./login/middleware/login-middleware";

import * as ProductDetailsActions from "./product-details/actions";
import productDetailsReducer from "./product-details/reducers/index"; 
import ProductDetailsMiddleware from "./product-details/middlewares/product-details-middleware"

import router from "./router"

const loginMiddleware = new LoginMiddleware();
const productListMiddleware = new ProductListMiddleware();
const productDetailsMiddleware = new ProductDetailsMiddleware();

const reducers = combineReducers({ 
    products: productListReducer,
    login: loginReducer,
    currentProduct: productDetailsReducer
});

const enhancer = applyMiddleware<AppState.App>(
    s => loginMiddleware.run(s), 
    s => productListMiddleware.run(s),
    s => productDetailsMiddleware.run(s)
);

const store = createStore(reducers, undefined, enhancer);

eventBus.addListener(Events.AuthorizationError, () => {
    const action: LoginActions.LoginRequiredAction = {
        type: LoginActions.LOGIN_REQUIRED
    };

    store.dispatch(action);
});

const loadProductsList = () => store.dispatch({type: ProductListActions.PRODUCT_LOAD_REQUEST} as ProductListActions.LoadProductListRequestAction);
const loadProductDetails = (productId) => store.dispatch({ type: ProductDetailsActions.PRODUCT_LOAD_REQUEST, productId } as ProductDetailsActions.LoadProductDetailsRequestAction);

ReactDOM.render(
    <Provider store={ store }>
        {router(loadProductsList, (productId) => loadProductDetails(productId))}
    </Provider>,
    document.getElementsByClassName("container")[0]);