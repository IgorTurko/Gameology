/// <reference path="../../typings/index.d.ts" />

import * as redux from "redux";

import { debounce } from "../../utils";

import MiddlewareBase from "../../middleware-base";

import ShopRepository from "../../data/shop-repo";
import * as Actions from "../actions";
import * as ProductActions from "../../product-list/actions";

export default class ShopEditingMiddleware extends MiddlewareBase<AppState.App> {
    private shopRepo = new ShopRepository();
    private debouncer = debounce(1000);

    [Actions.SHOP_SAVE](state, action: Actions.ShopSaveAction, dispatch, store: redux.IMiddlewareStore<AppState.App>) {
        this.debouncer(() => {
            this.shopRepo
                .saveShop(action.shop)
                .then(res => {
                    if (res.ok) {
                        const response = <Api.ISuccessResponse<Api.WebShop>>res;
                        store.dispatch(ProductActions.reloadProductList());
                        store.dispatch(Actions.shopSaveSuccess(action.shop.id));
                    }
                    else {
                        const response = <Api.IFailResponse>res;
                        const errorMessage = (response.errors["deliveryPrice"] || [])[0];
                        store.dispatch(Actions.shopSaveError(action.shop.id, errorMessage));
                    }
                });
        });
    }

    [ProductActions.PRODUCTS_LOADED](state, action: ProductActions.ProductListLoadedAction, dispatch: redux.IDispatch, store: redux.IMiddlewareStore<AppState.App>) {
        store.dispatch(Actions.shopsLoaded(action.shops));
    }
}