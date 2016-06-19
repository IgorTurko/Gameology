/// <reference path="./typings/index.d.ts"/>

import * as http  from "http";
import * as io from "socket.io";

import ProductService from "./services/products/product-service";
import { eventBus, EventNames } from "./services/event-bus";

const PRODUCT_DATA_RECEIVED_FROM_SERVER = "product-data-received-from-server";

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
                                    PRODUCT_DATA_RECEIVED_FROM_SERVER,
                                    {
                                        type: PRODUCT_DATA_RECEIVED_FROM_SERVER,
                                        product: product
                                    });
                            }
                        });
                }
            });
    });
}