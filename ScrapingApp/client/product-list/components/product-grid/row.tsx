/// <reference path="../../../typings/index.d.ts" />

import * as React from "react";
import * as ReactDOM from "react-dom";

import { classNames, getScrollbarWidth } from "../../../utils";

export interface RowProps {
    className?: string;
    children?: any;
}

export function Row(props: RowProps): JSX.Element {
    return (
        <div className={ classNames("grid-row", props.className) }>
            { props.children }
        </div>
    );
}
