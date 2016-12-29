
/// <reference path="../../typings/index.d.ts" />

import * as redux from "redux";

import * as Actions from "../actions";

import { PerPage } from './index';

export default function filterProductList(state: AppState.Products, action: Actions.ProductListFilterAction): AppState.Products {
    const search = action.search === undefined ? state.search : action.search;
    const page = action.page === undefined ? state.page : action.page;
    return Object.assign({}, state, {
        search,
        page
    });
}
