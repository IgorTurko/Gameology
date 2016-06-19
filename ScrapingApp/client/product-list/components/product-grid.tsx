/// <reference path="../../typings/index.d.ts" />

import * as React from "react";
import * as ReactDOM from "react-dom";
import {Link} from "react-router"

import { classNames } from "../../utils";

interface GridProps extends React.Props<any> {
    isLoading: boolean;
    products: Api.Product[];
    shops: Api.WebShop[];
    shopEditing: AppState.ShopEditing;
}

export interface GridHandlers {
    onShopDeliveryPriceUpdated: (shopId: string, deliveryPrice: number) => void;
}

interface PropsWithClassName extends React.Props<any> {
    className?: string;
}

function Row(props: PropsWithClassName): JSX.Element {
    return (
        <div className={ classNames("grid-row", props.className) }>
            { props.children }
        </div>
    );
}

function Cell(props: PropsWithClassName): JSX.Element {
    return (
        <div className={ classNames("col-md-2 grid-cell", props.className) }>
            { props.children }
        </div>

    );
}

export default class ProductsGrid extends React.Component<GridProps & GridHandlers, {}> {

    onDeliveryPriceChanged(shopId: string, deliveryPrice: any) {
        if (this.props.onShopDeliveryPriceUpdated) {
            this.props.onShopDeliveryPriceUpdated(shopId, deliveryPrice);
        }
    }

    renderHeader(className?: string) {
        return (
            <Row className={ classNames("header-row", className) }>
                <Cell className="header-cell">Product</Cell>
                {
                    this.props.shops.map(shop => (
                        <Cell key={shop.id} className="header">
                            { shop.title }
                        </Cell>
                    ))
                }
            </Row>);
    }

    renderDeliveryPrice() {
        return (
            <Row className="delivery-price-row">
                <Cell className="delivery-price-cell">
                    Delivery price
                </Cell>
                {
                    this.props.shops.map(shop => (
                        <Cell key={ `$dp::${shop.id}` }
                            className= { classNames("delivery-price-cell", { "has-error": this.props.shopEditing[shop.id].errorMessage }) }>
                            <input type="text"
                                name={shop.id}
                                className="form-control"
                                value={ this.props.shopEditing[shop.id].deliveryPrice || "" }
                                onChange={ e => this.onDeliveryPriceChanged(shop.id, e.target["value"]) } />
                            <p className={ classNames("help-block", { "hidden": !this.props.shopEditing[shop.id].errorMessage }) }>
                                { this.props.shopEditing[shop.id].errorMessage }
                            </p>
                        </Cell>
                    ))
                }
            </Row>);
    }

    renderEmptyRow() {
        return <div className="col-md-12">No products</div>;
    }

    renderData() {

        return (
            this.props.products.map(product => {
                return (
                    <Row className="product-row" key={product.id}>
                        <Cell className="product-cell product-title">
                            <Link to={`/product/${product.id}`}>{product.title}</Link>
                        </Cell>
                        {
                            this.props.shops.map((shop, index) => {
                                let values = (product.values || {})[shop.id];
                                return (
                                    <Cell className="product-cell" key={ `${product.id}::${index}` }>
                                        {
                                            values ? this.renderProductDetails(values, product.scrapingUrls[shop.id], shop) : null
                                        }
                                    </Cell>)
                            })
                        }
                    </Row>);
            }));
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
                    { this.props.shops != null && this.props.shops.length ? this.renderHeader() : null }
                    { this.renderEmptyRow() }
                </div>);
        }

        return (
            <div className="product-grid">
                { this.renderHeader() }
                { this.renderHeader("fixed") }
                { this.renderDeliveryPrice() }
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