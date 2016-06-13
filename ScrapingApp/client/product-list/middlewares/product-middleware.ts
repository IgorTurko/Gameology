/// <reference path="../../typings/index.d.ts" />

import * as redux from "redux";

import MiddlewareBase from "../../middleware-base";

import ProductRepository from "../../data/product-repo";
import ShopRepository from "../../data/shop-repo";
import * as Actions from "../actions";

export default class ProductMiddleware extends MiddlewareBase<AppState.App> {
    private productRepo = new ProductRepository();
    private shopRepo = new ShopRepository();
    
    [Actions.PRODUCT_LOAD_REQUEST](state: AppState.App, action: Actions.LoadProductListRequestAction, dispatch: redux.IDispatch) {
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