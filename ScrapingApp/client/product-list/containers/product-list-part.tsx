/// <reference path="../../typings/index.d.ts" />

import * as React from "react";
import * as redux from "redux";

import { connect } from "../../redux-utils";
import { ProductGrid, ProductGridProps, ProductGridHandlers } from "../components/product-grid";
import NewProduct from "../components/new-product";

import * as Actions from "../actions";
import * as ShopActions from "../../shop-editing/actions";


export default connect<AppState.App, ProductGridProps, ProductGridHandlers>(

    state => ({
        products: state.products.filteredProducts,
        shops: state.products.shops,
        isLoading: state.products.isLoading,
        shopEditing: state.shopEditing,
        updatedProductId: state.products.updatedProductId
    }),

    (dispatch) => ({

        onFilter: filter => dispatch(Actions.searchProducts(filter)),

        onShopDeliveryPriceUpdated: (shopId: string, deliveryPrice: string) => dispatch(ShopActions.updateShopDeliveryPrice(shopId, deliveryPrice))

    }))(ProductGrid);