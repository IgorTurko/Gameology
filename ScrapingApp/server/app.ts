﻿/// <reference path="./typings/index.d.ts"/>
import * as http  from "http";
import * as express  from "express";
import * as bodyparser from "body-parser";

import config from "./config";
import authenticationRouter from "./routes/authentication-route";

let server = express();

server.use("/api", bodyparser());
server.use("/api", authenticationRouter);


server.use("/", express.static("./public", {
    index: "index.html"
}));

const port = process.env.PORT || config.fallbackPort;
server.listen(port, () => {
    console.log(`Web server started at http://localhost:${port}/`);
});