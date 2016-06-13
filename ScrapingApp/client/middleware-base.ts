/// <reference path="./typings/index.d.ts" />

import * as redux from "redux";

export default class MiddlewareBase<TState> {
    
    run(store: redux.IMiddlewareStore<TState>) {
        return (dispatch: redux.IDispatch) => (action: redux.IAction) => {            
            const handler = this[action.type];

            if (handler) {
                handler.call(this, action, dispatch);
            }

            return dispatch(action);
        };
    }
}