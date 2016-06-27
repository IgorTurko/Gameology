/// <reference path="../../typings/index.d.ts" />

import * as redux from "redux";
import { browserHistory } from "react-router";

import MiddlewareBase from "../../middleware-base";
import * as Actions from "../actions";

export default class RoutingMiddleware extends MiddlewareBase<AppState.App> {
    [Actions.GO_TO_PRODUCT_LIST]() {
        this.navigate("/");
    }

    private navigate(url: string) {
        browserHistory.push(url);
    }
}