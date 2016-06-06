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
                <div className="col-md-1">Product</div>
                {
                    this.props
                        .shops
                        .map(shop => (<div className="col-md-2">{ shop.title }</div>))
                }
                <div className="col-md-1 product-action">Actions</div>
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
                    this.props.shops.map(shop => {
                        var p = product.values[shop.id];
                        return (<div className="col-md-2">
                            <div className="product-url">{product.scrapingUrls[shop.id]}</div>
                            <img className="product-img" src={p != null ? p.image : ''} alt="no image" />
                            <div className="product-price">{p != null ? p.price : ''}</div>
                        </div>)})
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