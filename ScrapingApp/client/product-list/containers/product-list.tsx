/// <reference path="../../typings/index.d.ts" />

import * as React from "react";
import * as redux from "redux";
import { connect } from "react-redux";

import SearchBox from "../components/search-box";
import ProductGrid from "../components/product-grid";

import * as Actions from "../actions";

interface ProductListPageProps {
    products: Api.Product[];
    shops: Api.WebShop[];
    isLoading: boolean;
}

interface ProductListPageHandlers {
    onFilter: (filter: string) => void;
}

function ProductListPageComponent(props: ProductListPageProps & ProductListPageHandlers) {
    return (
        <div className="container">
            <SearchBox placeholder="Search products.." onFiltering={ filter => props.onFilter(filter) } />
            <ProductGrid products={ props.products } shops={ props.shops } isLoading={ props.isLoading } />
        </div>
    );
}

const ProductListPage = connect(

    (state: AppState.App) => ({
        products: state.products.filteredProducts,
        shops: state.products.shops,
        isLoading: state.products.isLoading
    } as ProductListPageProps),

    (dispatch) => ({
        onFilter: filter => dispatch({
            type: Actions.SEARCH,
            filter: filter
        } as Actions.ProductListSearchAction)
    } as ProductListPageHandlers)

)(ProductListPageComponent);

export default ProductListPage;