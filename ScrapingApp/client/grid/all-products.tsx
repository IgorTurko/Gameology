/// <reference path="./../typings/index.d.ts" />
import * as React from "react";
import * as ReactDOM from "react-dom";

interface GridProps extends React.Props<any> {
    products: Api.Product[];
    shops: Api.WebShop[];
}

export default class ProductsGrid extends React.Component<GridProps, {}> {
    getHeader() {
        return (
            <div className="row">
                <div className="col-md-2">Product</div>
                {
                    this.props
                        .shops
                        .map(shop => (<div className="col-md-2">{ shop.title }</div>))
                }
            </div>);
    };

    getEmptyRow() {
        return <div className="col-md-12">No products</div>;
    };

    getData() {
        return this.props.products.map(product => {
            return (<div className="row">
                <div className="col-md-2">{product.title}</div>
                {
                    this.props.shops.map(shop => (
                        <div className="col-md-2">
                            <div>{product.scrapingUrls[shop.id]}</div>
                            <div>{product.values[shop.id].image}</div>
                            <div>{product.values[shop.id].price}</div>
                        </div>
                    ))
                }
            </div>);
        });
    };

    render() {
        if (this.props.products == null || this.props.products.length == 0) {
            return <div>{this.getHeader() }{this.getEmptyRow() }</div>;
        }

        return <div>{this.getHeader()}{this.getData()}</div>;
    }
}