/// <reference path="./typings/index.d.ts" />

import * as React from "react";
import * as ReactDOM from "react-dom";
import LoginForm from "./login/login-form";
import SearchBox from "./search/search-box";
import ProductsGrid from "./grid/all-products";
import ProductRepository from "./data/product-repo";
import ShopRepository from "./data/shop-repo";
import LoginRepository from "./data/login-repo";
import {eventBus, Events} from "./event-bus";

interface IAppState {
    products: Api.Product[];
    shops: Api.WebShop[];
    isAuthenticated: boolean;
    isNetworkError: boolean;
    authenticationErrorMessage: string;
}

type StateChangeCallback = (state: IAppState) => void;

class App {
    private callbacks: StateChangeCallback[] = [];
    private productRepository = new ProductRepository();
    private shopRepository = new ShopRepository();
    private loginRepository = new LoginRepository();

    private state: IAppState = {
        products: [],
        shops: [],
        isAuthenticated: true,
        isNetworkError: false,
        authenticationErrorMessage: null
    };

    constructor() {
        eventBus.addListener(Events.AuthorizationError, () => this.onAuthorizationError());
        eventBus.addListener(Events.NetworkError, () => this.onNetworkError());
        eventBus.addListener(Events.DoLogin, (credentials) => this.onDoLogin(credentials));
    }

    change(callback: StateChangeCallback): App {
        this.callbacks.push(callback);

        return this;
    }

    start() {
        Promise
            .all([this.productRepository.getAllProducts(), this.shopRepository.getAllShops()])
            .then(([products, shops]) => {
                this.state.products = products;
                this.state.shops = shops;
                this.refreshState();
            })
    }

    private refreshState() {
        this.callbacks.forEach((callback) => {
            callback(this.state);
        });
    }

    private onAuthorizationError() {
        this.state.isAuthenticated = false;

        this.refreshState();
    }

    private onNetworkError() {
        this.state.isNetworkError = true;

        this.refreshState();
    }

    private onDoLogin(credentials: Api.AuthenticationCredentials) {
        this.loginRepository.login(credentials)
            .then(() => {
                this.state.isAuthenticated = true;
                this.state.authenticationErrorMessage = null;
                this.start();    
            })
            .catch((error) => {
                this.state.authenticationErrorMessage = error;
            })
    }
}

const app = new App();
app.change(function (state) {
        ReactDOM.render(
            <div className="container">
                {
                    (() => {
                        if (!state.isAuthenticated) {
                            return <LoginForm errorMessage={state.authenticationErrorMessage} onLogin={(credentials) => eventBus.emit(Events.DoLogin, credentials) } />;
                        }
                    })()
                }
                <SearchBox value="" placeholder="Search products..."/>
                <ProductsGrid products={state.products} shops={state.shops} />
            </div>,
            document.getElementsByClassName("container")[0]);
    })
    .start();