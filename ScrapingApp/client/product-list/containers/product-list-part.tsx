/// <reference path="../../typings/index.d.ts" />

import * as React from "react";
import * as redux from "redux";

import { connect } from "../../redux-utils";
import SearchBox from "../components/search-box";
import ProductGrid from "../components/product-grid";
import NewProduct from "../components/new-product";

import * as Actions from "../actions";
import * as ShopActions from "../../shop-editing/actions";

interface ProductListPageProps {
    products: Api.Product[];
    shops: Api.WebShop[];
    isLoading: boolean;
    shopEditing: AppState.ShopEditing;
    updatedProductId: string;
}

interface ProductListPageHandlers {
    onFilter: (filter: string) => void;
    onShopDeliveryPriceUpdated: (shopId: string, deliveryPrice: string) => void;
}

function ProductListPart(props: ProductListPageProps & ProductListPageHandlers) {
    return (
        <div className="container">
            <SearchBox placeholder="Search products.." onFiltering={ filter => props.onFilter(filter) } />
            <NewProduct />
            <ProductGrid {...props} />
        </div>
    );
}

export default connect<AppState.App, ProductListPageProps, ProductListPageHandlers>(

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

    }))(ProductListPart);