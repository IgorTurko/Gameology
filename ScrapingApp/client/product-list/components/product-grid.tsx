/// <reference path="../../typings/index.d.ts" />

import * as React from "react";
import * as ReactDOM from "react-dom";
import {Link} from "react-router";

import { classNames, getScrollbarWidth } from "../../utils";

export interface ProductGridProps extends React.Props<any> {
    isLoading: boolean;
    products: Api.Product[];
    shops: Api.WebShop[];
    shopEditing: AppState.ShopEditing;
    updatedProductId: string;
}

export interface ProductGridHandlers {
    onShopDeliveryPriceUpdated: (shopId: string, deliveryPrice: string) => void;
}

interface PropsWithClassName extends React.Props<any> {
    className?: string;
}

interface CellProps extends PropsWithClassName {
    title?: string;
}

function Row(props: PropsWithClassName): JSX.Element {
    return (
        <div className={ classNames("grid-row", props.className) }>
            { props.children }
        </div>
    );
}

function Cell(props: CellProps): JSX.Element {
    return (
        <div className={ classNames("col-xs-2 grid-cell", props.className) }
            title={ props.title } >
            { props.children }
        </div>

    );
}

export class ProductGrid extends React.Component<ProductGridProps & ProductGridHandlers, {}> {
    private windowResizeHandler: () => void;

    constructor() {
        super();

        this.windowResizeHandler = () => this.onWindowResize();
    }

    onDeliveryPriceChanged(shopId: string, deliveryPrice: string) {
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
                    <Row className={ classNames("product-row", { "highlight": product.id == this.props.updatedProductId }) } key={product.id}>
                        <Cell className="product-cell product-title">
                            <Link to={`/product/${product.id}`}>{product.title}</Link>
                        </Cell>
                        {
                            this.props.shops.map((shop, index) => {
                                let values = (product.values || {})[shop.id];
                                let log = product.log[shop.id];

                                let hasError = log && (log.error || Object.entries(log.values).some(([_, l]) => l.error));

                                return (
                                    <Cell className={ classNames("product-cell", { "bg-danger": hasError }) }
                                        key={ `${product.id}::${index}` }
                                        title={ hasError ? "Error scraping product data. Please check product settings or contact developer." : (values && values.title) }>
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
            <div className="product-grid row">
                <div ref="header" className="product-grid-header">
                    { this.renderHeader() }
                    { this.renderDeliveryPrice() }
                </div>
                <div ref="rows" className="product-grid-rows">
                    { this.renderData() }
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

    private formatPrice(price: number): string {
        if (price == null || price === undefined || isNaN(price))
            return "";


        return `$${price.toFixed(2)}`;
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