/// <reference path="./typings/index.d.ts"/>
import * as http  from "http";
import * as express  from "express";

import config from "./config";

let server = express();

server.use("/", express.static("./public", {
    index: "index.html"
}));

const port = process.env.PORT || config.fallbackPort;
server.listen(port, () => {
    console.log(`Web server started at http://localhost:${port}/`);
});