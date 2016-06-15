/// <reference path="../../typings/index.d.ts" />

import * as redux from "redux";

import MiddlewareBase from "../../middleware-base";

import ProductRepository from "../../data/product-repo";
import ShopRepository from "../../data/shop-repo";
import * as Actions from "../actions";
import * as LoginActions from "../../login/actions";

export default class ProductListMiddleware extends MiddlewareBase<AppState.App> {
    private productRepo = new ProductRepository();
    private shopRepo = new ShopRepository();

    [Actions.PRODUCT_LOAD_REQUEST](state, action, dispatch: redux.IDispatch) {
        Promise.all([
            this.productRepo.getAllProducts(),
            this.shopRepo.getAllShops()
        ]).then(([products, shops]) => {

            const action: Actions.ProductListLoadedAction = {
                type: Actions.PRODUCTS_LOADED,
                products: products,
                shops: shops
            };

            dispatch(action);
        }).catch(err => {

            const action: Actions.ProductListLoadedAction = {
                type: Actions.PRODUCTS_LOADED,
                products: [],
                shops: []
            };

            dispatch(action);
        });
    }

    [LoginActions.LOGIN_SUCCESS](state, action, dispatch: redux.IDispatch, store: redux.IMiddlewareStore<AppState.App>) {
        const reloadProductList: Actions.LoadProductListRequestAction = {
            type: Actions.PRODUCT_LOAD_REQUEST
        };

        store.dispatch(reloadProductList);
    }
}