/// <reference path="./../../typings/index.d.ts" />
import * as React from "react";
import * as ReactDOM from "react-dom";

import LoginForm from "../login/login-form";
import SearchBox from "../search/search-box";
import ProductsGrid from "../grid/all-products";

import ProductRepository from "../../data/product-repo";
import ShopRepository from "../../data/shop-repo";

import Product = Api.Product;
import Shop = Api.WebShop;

interface IMainPageState {
    products: Product[];
    filter: string;
    shops: Shop[];
};

export default class MainPage extends React.Component<{}, IMainPageState> {
    private productRepository = new ProductRepository();
    private shopRepository = new ShopRepository();

    constructor() {
        super();
        this.state = {
            products: [],
            filter: "",
            shops:[]
        }
    }

    componentWillMount() {
        Promise
            .all([this.productRepository.getAllProducts(), this.shopRepository.getAllShops()])
            .then(([products, shops]) => {
                this.setState(state => {
                    state.products = products;
                    state.shops = shops;
                    return state;
                });
            })
    }

    setFilter(filter) {
        this.setState(state => {
            state.filter = filter;
            return state;
        });
    }

    getFilteredProducts() {
        let filter = this.state.filter.toLowerCase();
        return this.state.products.filter(x => {
            let title = x.title;
            if (title) {
                title = title.toLowerCase();
                return title.indexOf(filter) >= 0;
            }
            return false;
        });
    }

    render() {
        return (
                <div className="container">
                    <SearchBox onFiltering={(filter) => this.setFilter(filter) } placeholder="Search products..."/>
                    <ProductsGrid products={this.getFilteredProducts()} shops={this.state.shops} />
                </div>);
    }
}
//{
                    //    (() => {
                    //        if (!state.isAuthenticated) {
                    //            return <LoginForm errorMessage={state.authenticationErrorMessage} onLogin={(credentials) => eventBus.emit(Events.DoLogin, credentials) } />;
                    //        }
                    //    })()
                    //}
//                    <ProductForm onSaveProduct={(product) => eventBus.emit(Events.SaveProduct, product) } shops={state.shops} product={emptyProduct} />