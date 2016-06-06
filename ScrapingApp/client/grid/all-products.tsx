/// <reference path="./../typings/index.d.ts" />
import * as React from "react";
import * as ReactDOM from "react-dom";
import Product = Api.Product;

interface GridProps extends React.Props<any> {
    data: Product[];
    shops: string[];
}

export default class AllProductsGrid extends React.Component<GridProps, {}> {
    getHeader() {
        return (
            <div className="row">
                <div className="col-md-2">Product</div>
                {
                    this.props.shops.map(function (shop) {
                        <div className="col-md-2">shop.toUpperCase()</div>
                    })
                }
            </div>);
    };

    getEmptyRow() {
        return <div className="col-md-12">No products</div>;
    };

    getData() {
        return this.props.data.map((product: Product) => {
            return (<div className="row">
                <div className="col-md-2">{product.title}</div>
                {
                    this.props.shops.map(function (shop) {
                        <div className="col-md-2">
                            <div>{product.scrapingUrls[shop]}</div>
                            <div>{product.values[shop].image}</div>
                            <div>{product.values[shop].price}</div>
                        </div>
                    })
                }
            </div>);
        });
    };

    render() {
        if (this.props.data == null || this.props.data.length == 0) {
            return <div>{this.getHeader() }{this.getEmptyRow() }</div>;
        }

        return <div>{this.getHeader() }{this.getData() }</div>;
    }
}