/// <reference path="../../typings/index.d.ts" />

import * as React from "react";
import * as ReactDOM from "react-dom";

import { classNames, getScrollbarWidth } from "../../utils";

export interface RowsProps {
    children?: any;
}

export function Rows(props: RowsProps): JSX.Element {
    return (
        <div>
            { props.children }
        </div>
    );
}
