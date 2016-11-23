/// <reference path="../../../typings/index.d.ts" />

import * as React from "react";
import * as ReactDOM from "react-dom";
import { Link } from "react-router";

import { IIf } from "../../../components/iif";
import { Grid, Rows, Header } from "../../../components/grid";

import { Row } from "./row";
import { Cell } from "./cell";
import { formatPrice } from "../../../libs/parser";


import { classNames } from "../../../utils";

export interface ProductGridProps extends React.Props<any> {
    isLoading: boolean;
    products: Api.Product[];
    shops: Api.WebShop[];
    shopEditing: AppState.ShopEditing;
    updatedProductId: string;
    errors: {
        [name: string]: string;
    }
}

export interface ProductGridHandlers {
    onShopDeliveryPriceUpdated: (shopId: string, deliveryPrice: string) => void;
    onProductPriceUpdated: (productId: string, shopId: string, price: string) => void;
}

export class ProductGrid extends React.Component<ProductGridProps & ProductGridHandlers, {}> {

    onDeliveryPriceChanged(shopId: string, deliveryPrice: string) {
        if (this.props.onShopDeliveryPriceUpdated) {
            this.props.onShopDeliveryPriceUpdated(shopId, deliveryPrice);
        }
    }

    onProductPriceChanged(e: React.FormEvent, productId: string, shopId: string, price: string) {
        if (this.props.onProductPriceUpdated) {
             this.props.onProductPriceUpdated(productId, shopId, price);
        }
    }

    renderHeader(className?: string) {
        return (
            <Row className={classNames("header-row", className)}>
                <Cell className="header-cell">Product</Cell>
                {
                    this.props.shops.map(shop => (
                        <Cell key={shop.id} className="header">
                            {shop.title}
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
                        <Cell key={`$dp::${shop.id}`}
                            className={classNames("delivery-price-cell", { "has-error": this.props.shopEditing[shop.id] && this.props.shopEditing[shop.id].errorMessage })}>
                            <input type="text"
                                name={shop.id}
                                className="form-control"
                                value={this.props.shopEditing[shop.id] ? (this.props.shopEditing[shop.id].deliveryPrice || "") : ""}
                                onChange={e => this.onDeliveryPriceChanged(shop.id, e.target["value"])} />
                            <p className={classNames("help-block", { "hidden": !this.props.shopEditing[shop.id] || !this.props.shopEditing[shop.id].errorMessage })}>
                                {this.props.shopEditing[shop.id] ? this.props.shopEditing[shop.id].errorMessage : ""}
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
                let isGameologyCheapest = true;

                if (product.values) {

                    const [minShopId, minValues] = Object.entries(product.values)
                        .min(([shopId, values]) => {

                            const shop = this.props.shops.filter(s => s.id === shopId)[0];
                            const deliveryPrice = (shop && shop.deliveryPrice) ? shop.deliveryPrice : 999999;
                            const price = (values && values.price) ? values.price : 999999;
                            return deliveryPrice + price;
                        });

                    isGameologyCheapest = minShopId === "gameology";
                }

                return (
                    <Row className={classNames("product-row", { "highlight": product.id == this.props.updatedProductId, "cheapest": isGameologyCheapest })} key={product.id}>
                        <Cell className="product-cell product-title">
                            <Link to={`/product/${product.id}`}>
                                {product.title}
                            </Link>
                        </Cell>
                        {
                            this.props.shops.map((shop, index) => {
                                let values = (product.values || {})[shop.id];
                                

                                return (
                                    <Cell className={ classNames("product-cell", { "has-error": this.props.errors["price"] }) }
                                        key={`${product.id}::${index}`}
                                        title={values && values.title}>
                                        {
                                            values ? this.renderProductDetails(product, shop, values, product.scrapingUrls[shop.id], shop.id == 'dungeoncrawl') : null
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

    renderManualPrice(product: Api.Product, shop: Api.WebShop, values: Api.ScrapedValues) {
        const price = values.manualPrice || values.price || 0;

        return (
            <div className="product-price">
                <input type="text"
                    name={shop.id}
                    className="form-control"
                    value={ `${price}` }
                    onChange={e => this.onProductPriceChanged(e, product.id, shop.id, e.target["value"])} />
            </div>
        );
    }

    renderProductDetails(product: Api.Product, shop: Api.WebShop, values: Api.ScrapedValues, productUrl: string, allowManualPrice: boolean = false) {
        const price = values.manualPrice || values.price || 0;

        return (
            <div>
                <div className="product-url">
                    <a href={productUrl} target="_blank">
                        {values.title}
                    </a>
                </div>
                <img className="product-img" src={values.image} />
                <div className="product-price">
                    {
                        shop.deliveryPrice
                            ? formatPrice(+price + shop.deliveryPrice)
                            : formatPrice(price)
                    }
                </div>
                <div className="product-price delivery">
                    {
                        shop.deliveryPrice
                            ? `${formatPrice(price)} + ${formatPrice(shop.deliveryPrice)}`
                            : ''
                    }
                </div>
                <IIf condition={() => allowManualPrice}>
                    {this.renderManualPrice(product, shop, values)}
                </IIf>
            </div>
        );
    }

    render() {
        if (this.props.isLoading) {
            return (
                <Grid>
                    <Header>
                    </Header>               
                    <Rows>
                        {this.renderLoadingIndicator()}
                    </Rows>
                </Grid>
            );
        }

        if (this.props.products == null || this.props.products.length == 0) {
            return (
                <Grid>
                    <Header>
                        {this.props.shops != null && this.props.shops.length ? this.renderHeader() : null}
                    </Header>
                    <Rows>
                        {this.renderEmptyRow()}
                    </Rows>
                </Grid>
            );
        }

        return (
            <Grid>
                <Header>
                    {this.renderHeader()}
                    {this.renderDeliveryPrice()}
                </Header>
                <Rows>
                    {this.renderData()}
                </Rows>
            </Grid>
        );
    }
}