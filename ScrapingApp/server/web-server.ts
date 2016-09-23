/// <reference path="./typings/index.d.ts"/>

import * as http  from "http";
import * as express  from "express";
import * as io from "socket.io";

import * as bodyparser from "body-parser";
import * as cookieparser from "cookie-parser";

import config from "./config";

import authenticationRouter from "./web/routes/authentication-route";
import productRoute from "./web/routes/product-route";
import webShopRoute from "./web/routes/web-shop-route";

let app = express();

app.use(cookieparser());
app.use("/api", bodyparser.json());

app.use("/api", authenticationRouter);
app.use("/api/products", productRoute);
app.use("/api/shops", webShopRoute);


app.use("/", express.static("./out/client"));

app.use("/", function (req, res) {
    res.sendfile("./out/client" + '/index.html');
});

const port = process.env.OPENSHIFT_NODEJS_PORT || 8081;
const ipAddress = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';

export function run(): http.Server {
    
    const server = http.createServer(app);
    
    server.listen(port, ipAddress, () => {
        console.info(`Web server started at ${ipAddress}:${port}/`);
    });

    return server;
}