/// <reference path="../../typings/index.d.ts" />

import * as React from "react";
import * as ReactDOM from "react-dom";
import {Link} from "react-router"

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
                    <div className="col-md-2 product-cell">
                        <Link to={`/product/${product.id}`}>{product.title}</Link>
                    </div>
                    {
                        this.props.shops.map((shop, index) => {
                            let values = (product.values || {})[shop.id];
                            return (
                                <div className="col-md-2 product-cell" key={ `${product.id}::${index}` }>
                                    {
                                        values ? this.renderProductDetails(values, product.scrapingUrls[shop.id], shop) : null
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

    renderProductDetails(values: Api.ScrapedValues, productUrl: string, shop: Api.WebShop) {
        return (
            <div>
                <div className="product-url">
                    <a href={ productUrl } target="_blank">{values.title}</a>
                </div>
                <img className="product-img" src={ values.image } />
                <div className="product-price">
                    {
                        shop.deliveryPrice 
                        ? this.formatPrice(values.price + shop.deliveryPrice)
                        : this.formatPrice(values.price)
                    }
                </div>
                <div className="product-price delivery">
                    {
                        shop.deliveryPrice 
                        ? `${this.formatPrice(values.price)} + ${this.formatPrice(shop.deliveryPrice)}`
                        : ''
                    }
                </div>
            </div>
        );
    }

    render() {
        if (this.props.isLoading) {
            return (
                <div className="product-grid">
                    { this.renderLoadingIndicator() }
                </div>
            );
        }

        if (this.props.products == null || this.props.products.length == 0) {
            return (
                <div className="product-grid">
                    {
                        this.props.shops != null && this.props.shops.length ? this.renderHeader() : null
                    }
                    { this.renderEmptyRow() }
                </div>);
        }

        return (
            <div className="product-grid">
                { this.renderHeader() }
                { this.renderData() }
            </div>
        );
    }

    private formatPrice(price: number): string {
        if (price == null || price === undefined || isNaN(price))
            return "";


        return `$${price.toFixed(2)}`;
    }
}