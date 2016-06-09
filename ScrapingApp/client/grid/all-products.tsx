/// <reference path="./../typings/index.d.ts" />
import * as React from "react";
import * as ReactDOM from "react-dom";
import Product = Api.Product;
import Shop = Api.WebShop;

interface GridProps extends React.Props<any> {
    products: Product[];
    shops: Shop[];
}

export default class ProductsGrid extends React.Component<GridProps, {}> {
    getHeader() {
        return (
            <div className="row">
                <div className="col-md-2 product-cell">Product</div>
                {
                    this.props.shops.map(shop => (
                        <div key={shop.id} className="col-md-2 product-cell">{ shop.title }</div>
                    ))
                }
            </div>);
    };

    getEmptyRow() {
        return <div className="col-md-12">No products</div>;
    };

    getData() {
        return this.props.products.map(product => {
            return (
            <div className="row" key={product.id}>
                <div className="col-md-2 product-cell">{product.title}</div>
                {
                    this.props.shops.map((shop, index) => {
                        var p = product.values[shop.id];
                        return (
                            <div className="col-md-2 product-cell" key={product.id + index}>
                                {
                                    (() => {
                                        if (p) {
                                            return (
                                                <div>
                                            <div className="product-url">
                                                <a href={product.scrapingUrls[shop.id]}>{p.title}</a>
                                            </div>
                                            <img className="product-img" src={p != null ? p.image : ''} />
                                            <div className="product-price">{p != null ? p.price : ''}</div>
                                            </div>);
                                        }
                                    })()
                                }
                                </div>)})
                }
            </div>);
        });
    };

    render() {
        if (this.props.products == null || this.props.products.length == 0) {
            return <div className="product-grid">{this.getHeader() }{this.getEmptyRow() }</div>;
        }

        return <div className="product-grid">{this.getHeader()}{this.getData()}</div>;
    }
}