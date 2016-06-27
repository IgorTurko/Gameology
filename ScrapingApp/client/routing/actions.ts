/// <reference path="../typings/index.d.ts" />

import * as redux from "redux";

export const GO_TO_PRODUCT_LIST = "go-to-product-list";

export interface GoToProductListAction extends redux.IAction { }

export function goToProductList(): redux.IAction {
    const result: GoToProductListAction = {
        type: GO_TO_PRODUCT_LIST
    };

    return result;
}