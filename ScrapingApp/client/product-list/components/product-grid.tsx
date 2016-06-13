/// <reference path="../../typings/index.d.ts" />

import * as React from "react";
import * as ReactDOM from "react-dom";

interface GridProps extends React.Props<any> {
    isLoading: boolean;
    products: Api.Product[];
    shops: Api.WebShop[];
}

export default class ProductsGrid extends React.Component<GridProps, {}> {
    renderHeader() {
        return (
            <div className="row">
                <div className="col-md-2 product-cell header">Product</div>
                {
                    this.props.shops.map(shop => (
                        <div key={shop.id} className="col-md-2 product-cell header">{ shop.title }</div>
                    ))
                }
            </div>);
    }

    renderEmptyRow() {
        return <div className="col-md-12">No products</div>;
    }

    renderData() {
        return this.props.products.map(product => {
            return (
                <div className="row" key={product.id}>
                    <div className="col-md-2 product-cell">{product.title}</div>
                    {
                        this.props.shops.map((shop, index) => {
                            let values = (product.values || {})[shop.id];
                            return (
                                <div className="col-md-2 product-cell" key={ `${product.id}::${index}` }>
                                    {
                                        values ? this.renderProductDetails(values, product.scrapingUrls[shop.id]) : null
                                    }
                                </div>)
                        })
                    }
                </div>);
        });
    }

    renderLoadingIndicator() {
        return (
            <div className="row">
                Loading...
            </div>

        );
    }

    renderProductDetails(values: Api.ScrapedValues, productUrl: string) {
        return (
            <div>
                <div className="product-url">
                    <a href={ productUrl } target="_blank">{values.title}</a>
                </div>
                <img className="product-img" src={ values.image } />
                <div className="product-price">{ values.price ? `$${values.price.toFixed(2)}` : ''}</div>
            </div>
        );
    }

    render() {
        if (this.props.products == null || this.props.products.length == 0) {
            return (
                <div className="product-grid">
                    { this.renderEmptyRow() }
                </div>);
        }

        if (this.props.isLoading) {
            return (
                <div className="product-grid">
                    { this.renderHeader() }
                    { this.renderLoadingIndicator() }
                </div>
            );
        }

        return (
            <div className="product-grid">
                { this.renderHeader() }
                { this.renderData() }
            </div>
        );
    }
}