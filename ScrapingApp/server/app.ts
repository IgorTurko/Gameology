/// <reference path="./typings/index.d.ts"/>
import http = require("http");
import express = require("express");

import config = require("./config");

let server = express();

server.use("/", express.static("./public", {
    index: "index.html"
}));

const port = process.env.PORT || config.fallbackPort;
server.listen(port, () => {
    console.log(`Web server started at http://localhost:${port}/`);
});