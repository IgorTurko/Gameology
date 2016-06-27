///<reference path="../../typings/index.d.ts"/>

import * as redux from "redux";

import * as RoutingActions from "../../routing/actions";
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
                    dispatch({
                        type: Actions.SAVE_SUCCESS
                    } as Actions.SaveProductSuccessAction);
                } else {
                    dispatch({
                        type: Actions.SAVE_ERROR,
                        errors: (<Api.IFailResponse>result).errors
                    } as Actions.SaveProductErrorAction)
                }
            })
    }

    [Actions.PRODUCT_LOAD_REQUEST](state, action, dispatch: redux.IDispatch) {
        Promise.all([
            action.productId == 'new' ? Promise.resolve({ title: '', id: '', scrapingUrls: {} } as Api.Product) : this.productRepository.getProductById(action.productId),
            state.currentProduct.shops.length > 0 ? Promise.resolve(state.currentProduct.shops) : this.shopRepository.getAllShops()
        ]).then(([product, shops]) => {
            dispatch({
                type: Actions.PRODUCT_LOADED,
                product: product,
                shops: shops
            } as Actions.ProductDetailsLoadedAction);
        }).catch(err => {
            dispatch({
                type: Actions.PRODUCT_LOADED,
                product: null,
                shops: []
            } as Actions.ProductDetailsLoadedAction);
        });
    }

    [Actions.PRODUCT_DELETE_REQUEST](state, action: Actions.ProductDeleteRequestAction, dispatch, store: redux.IMiddlewareStore<AppState.App>) {
        this.productRepository
            .deleteProduct(action.productId)
            .then(() => {
                const a = Actions.productDeleted(action.productId);
                store.dispatch(a);
                store.dispatch(RoutingActions.goToProductList());
            });
    }
}