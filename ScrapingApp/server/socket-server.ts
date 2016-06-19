/// <reference path="./typings/index.d.ts"/>

import * as http  from "http";
import * as io from "socket.io";

import ProductService from "./services/products/product-service";
import { eventBus, EventNames } from "./services/event-bus";
import * as ProductActions from "../client/product-list/actions";

export default function run(server: http.Server, productService: ProductService) {
    const ioServer = io(server);

    eventBus.on(EventNames.ProductScraped, (productId: string) => {
        productService.one(productId)
            .then(product => {
                const connectedClients = ioServer.clients().connected;

                if (connectedClients) {
                    Object.keys(connectedClients)
                        .forEach(k => {
                            const socket = connectedClients[k];
                            if (socket && socket.connected) {
                                console.log("Socket event emitted");
                                socket.emit(
                                    ProductActions.PRODUCT_DATA_RECEIVED_FROM_SERVER,
                                    ProductActions.productDataReceivedFromServer(product));
                            }
                        });
                }
            });
    });
}