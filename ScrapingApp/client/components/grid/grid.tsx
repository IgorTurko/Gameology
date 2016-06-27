/// <reference path="../../typings/index.d.ts" />

import * as React from "react";
import * as ReactDOM from "react-dom";

import { classNames, getScrollbarWidth } from "../../utils";

import { Header  } from "./header";
import { Rows } from "./rows";


export class Grid extends React.Component<{}, {}> {

    private windowResizeHandler: () => void;

    constructor() {
        super();

        this.windowResizeHandler = () => this.onWindowResize();
    }

    render() {
        return (
            <div className="product-grid row">
                <div ref="header" className="product-grid-header">
                    { this.contentOf(Header) }
                </div>
                <div ref="rows" className="product-grid-rows">
                    { this.contentOf(Rows) }
                </div>
            </div>
        );
    }

    componentDidMount() {
        window.removeEventListener("resize", this.windowResizeHandler);
        window.addEventListener("resize", this.windowResizeHandler);
        this.onWindowResize();

        this.alignHeaderWithRows();
    }

    componentDidUpdate() {
        this.alignHeaderWithRows();
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.windowResizeHandler);
    }

    private contentOf(elementType: Function) {
        const children = React.Children
            .toArray(this.props.children)
            .filter((e: any) => e.type === elementType)
            .flattern((e: any) => React.Children.toArray(e.props.children));

        return children;
    }

    private alignHeaderWithRows() {
        if (this.refs["header"]) {
            const scrollbarWidth = getScrollbarWidth();
            const headerElement = ReactDOM.findDOMNode(this.refs["header"]) as HTMLElement;
            if (headerElement) {
                headerElement.style.marginRight = `${scrollbarWidth}px`;
            }
        }
    }

    private onWindowResize() {
        const element = ReactDOM.findDOMNode(this) as HTMLElement;
        if (element) {
            const top = element.offsetTop;
            const maxHeight = window.innerHeight - top - 10;

            element.style.maxHeight = `${maxHeight}px`;
        }
    }
}