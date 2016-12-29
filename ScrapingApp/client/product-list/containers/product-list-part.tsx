/// <reference path="../../typings/index.d.ts" />

import * as React from "react";
import * as redux from "redux";

import { connect } from "../../redux-utils";
import { ProductGrid, ProductGridProps, ProductGridHandlers } from "../components/product-grid";
import NewProduct from "../components/new-product";
import { PerPage } from '../reducers';

import * as Actions from "../actions";
import * as ShopActions from "../../shop-editing/actions";


export default connect<AppState.App, ProductGridProps, ProductGridHandlers>(

    state => ({
        products: state.products.products,
        shops: state.products.shops,
        isLoading: state.products.isLoading,
        shopEditing: state.shopEditing,
        updatedProductId: state.products.updatedProductId,
        errors: state.products.errors,
        currentPage: state.products.page,
        totalPages: state.products.totalPages
    }),

    (dispatch) => ({

        onFilter: filter => dispatch(Actions.searchProducts(filter)),

        onPageChanged: page => dispatch(Actions.paginateProducts(page)),

        onProductPriceUpdated: (productId: string, shopId: string, price: string) => dispatch(Actions.productSavePrice(productId, shopId, price)),

        onShopDeliveryPriceUpdated: (shopId: string, deliveryPrice: string) => dispatch(ShopActions.updateShopDeliveryPrice(shopId, deliveryPrice))

    }))(ProductGrid);