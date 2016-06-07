/// <reference path="./typings/index.d.ts" />

import * as React from "react";
import * as ReactDOM from "react-dom";
import SearchBox from "./search/search-box";
import ProductsGrid from "./grid/all-products";
import ProductRepository from "./data/product-repo";
import ShopRepository from "./data/shop-repo";
import {eventBus, Events} from "./event-bus";

interface IAppState {
    products: Api.Product[];
    shops: Api.WebShop[];
}

type StateChangeCallback = (state: IAppState) => void;

class App {
    private callbacks: StateChangeCallback[] = [];
    private productRepository = new ProductRepository();
    private shopRepository = new ShopRepository();

    constructor() {
        eventBus.addListener(Events.AuthorizationRequired, () => this.onAuthorizationRequired());
    }

    change(callback: StateChangeCallback): App {
        this.callbacks.push(callback);

        return this;
    }

    start() {
        Promise
            .all([this.productRepository.getAllProducts(), this.shopRepository.getAllShops()])
            .then(([products, shops]) => {
                const state: IAppState = {
                    products: products,
                    shops: shops
                };

                this.callbacks.forEach((callback) => {
                    callback(state);
                });
            })
    }

    private onAuthorizationRequired() {
        console.log("hi");
    }
}

const app = new App();
app.change(function (state) {
        ReactDOM.render(
            <div className="container">
                <SearchBox value="" placeholder="Search products..."/>
                <ProductsGrid products={state.products} shops={state.shops} />
            </div>,
            document.getElementsByClassName("container")[0]);
    })
    .start();