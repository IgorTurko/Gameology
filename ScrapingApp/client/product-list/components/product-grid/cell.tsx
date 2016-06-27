/// <reference path="../../../typings/index.d.ts" />

import * as React from "react";
import * as ReactDOM from "react-dom";

import { classNames, getScrollbarWidth } from "../../../utils";

export interface CellProps {
    title?: string;
    className?: string;
    children?: any;
}

export function Cell(props: CellProps): JSX.Element {
    return (
        <div className={ classNames("col-xs-2 grid-cell", props.className) }
            title={ props.title } >
            { props.children }
        </div>

    );
}