/// <reference path="../../typings/index.d.ts" />

import * as React from "react";
import * as redux from "redux";
import { connect } from "react-redux";

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
    onShopSave: (shop: Api.WebShop) => void;
}

function ProductListPageComponent(props: ProductListPageProps & ProductListPageHandlers) {
    return (
        <div className="container">
            <SearchBox placeholder="Search products.." onFiltering={ filter => props.onFilter(filter) } />
            <NewProduct />
            <ProductGrid products={ props.products }
                shops={ props.shops }
                isLoading={ props.isLoading }
                shopEditing={ props.shopEditing }
                updatedProductId = { props.updatedProductId }
                onShopDeliveryPriceUpdated={(shopId, deliveryPrice) => props.onShopSave({
                    id: shopId,
                    deliveryPrice: deliveryPrice,
                    isBase: null,
                    scrapingSettings: null,
                    title: null
                }) } />
        </div>
    );
}

const ProductListPart = connect(

    (state: AppState.App) => ({
        products: state.products.filteredProducts,
        shops: state.products.shops,
        isLoading: state.products.isLoading,
        shopEditing: state.shopEditing,
        updatedProductId: state.products.updatedProductId
    } as ProductListPageProps),

    (dispatch) => ({
        onFilter: filter => dispatch({
            type: Actions.PRODUCT_SEARCH,
            filter: filter
        } as Actions.ProductListSearchAction),

        onShopSave: shop => dispatch(ShopActions.shopSave(shop))
    }))(ProductListPageComponent);

export default ProductListPart;