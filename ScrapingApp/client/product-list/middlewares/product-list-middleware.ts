/// <reference path="../../typings/index.d.ts" />

import * as redux from "redux";

import MiddlewareBase from "../../middleware-base";

import ProductRepository from "../../data/product-repo";
import ShopRepository from "../../data/shop-repo";
import * as Actions from "../actions";
import * as LoginActions from "../../login/actions";
import * as ProductDetailsActions from "../../product-details/actions";
import * as RoutingActions from "../../routing/actions";

export default class ProductListMiddleware extends MiddlewareBase<AppState.App> {
    private productRepo = new ProductRepository();
    private shopRepo = new ShopRepository();

    [Actions.PRODUCT_LOAD_REQUEST](state: AppState.App, action, dispatch: redux.IDispatch) {
        Promise.all([
            this.productRepo.getAllProducts(state.products.search, state.products.page),
            this.shopRepo.getAllShops()
        ]).then(([products, shops]) => {

            const action: Actions.ProductListLoadedAction = {
                type: Actions.PRODUCTS_LOADED,
                products: products.items,
                totalPages: products.totalPages || 1,
                shops: shops,
                currentPage: products.currentPage || 1
            };

            dispatch(action);
        }).catch(err => {

            const action: Actions.ProductListLoadedAction = {
                type: Actions.PRODUCTS_LOADED,
                products: [],
                totalPages: 1,
                shops: [],
                currentPage: 1
            };

            dispatch(action);
        });
    }

    [Actions.PRODUCT_SEARCH](state, action, dispatch, store: redux.IMiddlewareStore<AppState.App>) {
        store.dispatch(RoutingActions.goToProductList());
        dispatch(Actions.filterProducts(action.search));
        store.dispatch(Actions.reloadProductList());
    }

    [Actions.PRODUCT_PAGINATE](state, action, dispatch, store: redux.IMiddlewareStore<AppState.App>) {
        dispatch(Actions.filterProducts(undefined, action.page));
        store.dispatch(Actions.reloadProductList());
    }

    [Actions.PRODUCT_SAVE_PRICE](state, action, dispatch, store: redux.IMiddlewareStore<AppState.App>) {
        this.productRepo.saveProductPrice(action.productId, action.shopId, action.price).then(res => {
            if (res.ok) {
                store.dispatch(Actions.productSavePriceSuccess(action.productId, action.shopId, action.price));
            }
            else {
                const response = <Api.IFailResponse>res;
                const errorMessage = (response.errors[""] || [])[0];
                store.dispatch(Actions.productSavePriceError(action.productId, { price: errorMessage }));
            }
        });
    }

    [LoginActions.LOGIN_SUCCESS](state, action, dispatch: redux.IDispatch, store: redux.IMiddlewareStore<AppState.App>) {
        const reloadProductList = Actions.reloadProductList();
        store.dispatch(reloadProductList);
    }

    [ProductDetailsActions.PRODUCT_DELETED](state, action, dispatch, store: redux.IMiddlewareStore<AppState.App>) {
        store.dispatch(Actions.reloadProductList());
    }
}