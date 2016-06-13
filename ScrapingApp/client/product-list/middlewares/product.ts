/// <reference path="../../typings/index.d.ts" />

import * as redux from "redux";
import {} from "react-redux";

import ProductRepository from "../../data/product-repo";
import ShopRepository from "../../data/shop-repo";
import * as Actions from "../actions";

export default class ProductMiddleware {
    private productRepo = new ProductRepository();
    private shopRepo = new ShopRepository();

    run(store: redux.IMiddlewareStore<AppState.App>) {
        return (dispatch: redux.IDispatch) => (action: redux.IAction) => {
            switch (action.type) {
                case Actions.LOAD_REQUEST:
                    this.reloadProducts(dispatch);
                    break;
            }
            return dispatch(action);
        };
    }

    reloadProducts(dispatch: redux.IDispatch) {
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
        });
    }
}