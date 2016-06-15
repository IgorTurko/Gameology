///<reference path="../../typings/index.d.ts"/>

import * as redux from "redux";

import ProductRepository from "../../data/product-repo";
import ShopRepository from "../../data/shop-repo";
import MiddlewareBase from "../../middleware-base";
import * as Actions from "../actions";

export default class ProductDetailsMiddleware extends MiddlewareBase<AppState.App> {
    private productRepository = new ProductRepository();
    private shopRepository = new ShopRepository();

    [Actions.SAVE_PRODUCT](state: AppState.App, action: Actions.SaveProductAction, dispatch: redux.IDispatch) {
        this.productRepository
            .saveProduct(action.product)
            .then(result => {
                if (result.ok) {
                    const action: Actions.SaveProductSuccessAction = {
                        type: Actions.SAVE_SUCCESS
                    }

                    dispatch(action);
                } else {
                    const action: Actions.SaveProductErrorAction = {
                        type: Actions.SAVE_ERROR,
                        error: <Api.IFailResponse>result
                    };

                    dispatch(action)
                }
            })
    }

    [Actions.SELECT_PRODUCT](state, action, dispatch: redux.IDispatch) {
        Promise.all([
            this.productRepository.getProductById(11),
            this.shopRepository.getAllShops()
        ]).then(([product, shops]) => {

            const action: Actions.ProductDetailsLoadedAction = {
                type: Actions.PRODUCT_LOADED,
                product: product,
                shops: shops
            };

            dispatch(action);
        }).catch(err => {

            const action: Actions.ProductDetailsLoadedAction = {
                type: Actions.PRODUCT_LOADED,
                product: null,
                shops: []
            };

            dispatch(action);
        });
    }
}