/// <reference path="../../typings/index.d.ts" />

import * as React from "react";
import * as redux from "redux";
import { connect } from "react-redux";

import * as Actions from "../actions";

import { ProductForm, ProductFormProps, ProductFormHandlers } from "../components/product-form";

function ProductDetailsPageComponent(props: ProductFormProps & ProductFormHandlers) {
    return (
        <ProductForm {...props} />
    );
}

export default connect(
    (state: AppState.App) => ({
        product: state.currentProduct.product,
        shops: state.currentProduct.shops,
        errors: state.currentProduct.errors,
        saved: state.currentProduct.saved
    } as ProductFormProps),

    (dispatch: redux.IDispatch) => ({
        onSaveProduct(product: Api.Product) {
            dispatch(Actions.saveProduct(product));
        },

        onDeleteProduct(productId: string) {
            dispatch(Actions.productDeleteRequest(productId));
        }
    } as ProductFormHandlers)

)(ProductDetailsPageComponent);