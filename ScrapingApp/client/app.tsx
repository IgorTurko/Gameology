/// <reference path="./typings/index.d.ts" />

import * as React from "react";
import * as ReactDOM from "react-dom";
import Product = Api.Product;
import Shop = Api.WebShop;
import LoginForm from "./login/login-form";
import SearchBox from "./search/search-box";
import ProductForm from "./product/product-form";
import ProductsGrid from "./grid/all-products";
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
        eventBus.addListener(Events.DoLogin, (credentials) => this.onDoLogin(credentials));
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

const app = new App();

app.change(function (state) {
        const emptyProduct: Product = {
            title: '',
            id: '',
            scrapingUrls: {}
        };
        ReactDOM.render(
            <div className="container">
                {
                    (() => {
                        if (!state.isAuthenticated) {
                            return <LoginForm errorMessage={state.authenticationErrorMessage} onLogin={(credentials) => eventBus.emit(Events.DoLogin, credentials) } />;
                        }
                    })()
                }
                <SearchBox onFiltering={(filter) => eventBus.emit(Events.DoFiltering, filter)} placeholder="Search products..."/>
                <ProductsGrid products={state.filteredProducts} shops={state.shops} />
                <ProductForm onSaveProduct={(product) => eventBus.emit(Events.SaveProduct, product) } shops={state.shops} product={emptyProduct} />
            </div>,
            document.getElementsByClassName("container")[0]);
    })
    .start();