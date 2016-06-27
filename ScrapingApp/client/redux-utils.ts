/// <reference path="./typings/index.d.ts" />

import * as redux from "redux";
import { connect as reduxconnect } from "react-redux";

export function connect<TState, TProps, TActions>(
    mapState: (state: TState) => TProps,
    mapHandlers: (dispatch: redux.IDispatch) => TActions) {
    return reduxconnect(mapState, mapHandlers);
}