/// <reference path="../../typings/index.d.ts" />

import * as React from "react";
import * as redux from "redux";
import { connect } from "react-redux";

import * as Actions from "../actions";

import { ProductForm, ProductFormProps, ProductFormHandlers } from "../components/product-form";

function ProductDetailsPageComponent(props: ProductFormProps & ProductFormHandlers) {
    return (
        <ProductForm product={props.product} shops={props.shops} onSaveProduct={product => props.onSaveProduct(product)} />
    );
}

export default connect(
    (state: AppState.App): ProductFormProps => ({
        shops: state.products.shops,
        product: state.products[1]
    }),

    (dispatch: redux.IDispatch): ProductFormHandlers => ({
        onSaveProduct(product: Api.Product) {
            const action: Actions.SaveProductAction = {
                type: Actions.SAVE_PRODUCT,
                product: product
            };

            dispatch(action);
        }
    })

)(ProductDetailsPageComponent);