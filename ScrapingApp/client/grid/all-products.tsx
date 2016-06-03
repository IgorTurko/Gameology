/// <reference path="./../typings/index.d.ts" />
import * as React from "react";
import * as ReactDOM from "react-dom";
import Product = Api.Product;

interface GridProps extends React.Props<any> {
    data: Product[];
}

export default class AllProductsGrid extends React.Component<GridProps, {}> {
    render() {
        console.log(this.props.data);
        return (
            <div className="row">
                <div className="col-md-2">Product</div>
                <div className="col-md-2"></div>
                <div className="col-md-2"></div>
                <div className="col-md-2"></div>
                <div className="col-md-2"></div>
                <div className="col-md-2"></div>
            </div>);
    }
}