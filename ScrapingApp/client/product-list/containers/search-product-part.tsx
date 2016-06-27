/// <reference path="../../typings/index.d.ts" />

import * as React from "react";
import * as redux from "redux";

import { connect } from "../../redux-utils";
import { SearchBox, SearchBoxProps, SearchBoxHandlers } from "../components/search-box";
import * as Actions from "../actions";

export default connect<AppState.App, SearchBoxProps, SearchBoxHandlers>(
    state => ({
        placeholder: "Search products..."
    }),

    dispatch => ({
        onFiltering(filter) {
            dispatch(Actions.searchProducts(filter));
        }
    })
)(SearchBox); 
