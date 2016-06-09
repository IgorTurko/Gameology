/// <reference path="./typings/index.d.ts" />

import * as React from "react";
import * as ReactDOM from "react-dom";
import {Router, Route, browserHistory} from "react-router";

import Product = Api.Product;
import Shop = Api.WebShop;
import LayoutPage from "./components/pages/layout-page";
import MainPage from "./components/pages/main-page";
import ProductPage from "./components/pages/product-page";

import ProductRepository from "./data/product-repo";
import ShopRepository from "./data/shop-repo";
import LoginRepository from "./data/login-repo";

import {eventBus, Events} from "./event-bus";

interface IAppState {
    products: Product[];
    filteredProducts: Product[];
    shops: Shop[];
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
        filteredProducts: [],
        shops: [],
        isAuthenticated: true,
        isNetworkError: false,
        authenticationErrorMessage: null
    };

    constructor() {
        eventBus.addListener(Events.AuthorizationError, () => this.onAuthorizationError());
        eventBus.addListener(Events.NetworkError, () => this.onNetworkError());
        //eventBus.addListener(Events.DoLogin, (credentials) => this.onDoLogin(credentials));
        eventBus.addListener(Events.DoFiltering, (filter) => this.onDoFiltering(filter));
        eventBus.addListener(Events.SaveProduct, (product) => this.onSaveProduct(product))
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
                this.state.filteredProducts = products;
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

    private onDoFiltering(filter: string) {
        filter = filter.toLowerCase();
        this.state.filteredProducts = this.state.products.filter(x => {
            let title = x.title;
            if (title) {
                title = title.toLowerCase();
                return title.indexOf(filter) >= 0;
            }
            return false;
        });

        this.refreshState();
    }

    private onSaveProduct(product: Product) {
        this.productRepository.saveProduct(product)
            .then(() => console.log("saved"));
    }
}

//app.change(function (state) {
//        const emptyProduct: Product = {
//            title: '',
//            id: '',
//            scrapingUrls: {}
//        };
//    })
//    .start();


ReactDOM.render(
    <Router history={browserHistory}>
        <Route component={LayoutPage}>
            <Route path="/" component={MainPage} />
            <Route path="/product/:productId" component={ProductPage} />
        </Route>
    </Router>, document.getElementsByClassName("container")[0]);