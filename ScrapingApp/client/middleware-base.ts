/// <reference path="./typings/index.d.ts" />

import * as redux from "redux";

export default class MiddlewareBase<TState> {

    run(store: redux.IMiddlewareStore<TState>) {
        return (dispatch: redux.IDispatch) => (action: redux.IAction) => {            
            const handler = this[action.type];

            if (handler) {
                const state = store.getState();
                return handler.call(this, state, action, dispatch) || state;
            }

            return dispatch(action);
        };
    }
}