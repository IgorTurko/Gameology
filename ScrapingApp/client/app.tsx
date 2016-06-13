/// <reference path="./typings/index.d.ts" />

import * as React from "react";
import * as ReactDOM from "react-dom";
import { createStore, applyMiddleware, combineReducers } from "redux";
import { Provider } from "react-redux";

import { eventBus, Events } from "./event-bus";

import * as ProductActions from "./product-list/actions";
import productListReducer from "./product-list/reducers/index";
import ProductMiddleware from "./product-list/middlewares/product-middleware";
import ProductListPart from "./product-list/containers/product-list-part";

import * as LoginActions from "./login/actions";
import loginReducer from "./login/reducers/index";
import LoginMiddleware from "./login/middleware/login-middleware";
import LoginPart from "./login/containers/login-part";

const productMiddleware = new ProductMiddleware();
const loginMiddleware = new LoginMiddleware();

const reducers = combineReducers({ 
    products: productListReducer,
    login: loginReducer 
});

const enhancer = applyMiddleware<AppState.App>(
    s => loginMiddleware.run(s), 
    s => productMiddleware.run(s)
);

const store = createStore(reducers, undefined, enhancer);

eventBus.addListener(Events.AuthorizationError, () => {
    const action: LoginActions.LoginRequiredAction = {
        type: LoginActions.LOGIN_REQUIRED
    };

    store.dispatch(action);
});

store.dispatch({
    type: ProductActions.PRODUCT_LOAD_REQUEST
} as ProductActions.LoadProductListRequestAction);

ReactDOM.render(
    <Provider store={ store }>
        <div>
            <LoginPart />
            <ProductListPart /> 
        </div>
    </Provider>,
    document.getElementsByClassName("container")[0]);