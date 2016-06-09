/// <reference path="./typings/index.d.ts"/>

import * as http  from "http";
import * as express  from "express";

import * as bodyparser from "body-parser";
import * as cookieparser from "cookie-parser";

import config from "./config";

import authenticationRouter from "./web/routes/authentication-route";
import productRoute from "./web/routes/product-route";
import webShopRoute from "./web/routes/web-shop-route";

let server = express();

server.use(cookieparser());
server.use("/api", bodyparser.json());

server.use("/api", authenticationRouter);
server.use("/api/products", productRoute);
server.use("/api/shops", webShopRoute);


server.use("/", express.static("./out/client", {
    index: "index.html"
}));

const port = process.env.PORT || config.fallbackPort;

export function run() {

    server.listen(port, () => {
        console.info(`Web server started at http://localhost:${port}/`);
    });
}