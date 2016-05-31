/// <reference path="./typings/index.d.ts"/>
import http = require("http");
import express = require("express");

let server = express();

server.use("/", express.static("./public", {
    index: "index.html"
}));

server.listen(3000, () => {
    console.log("Web server started at http://localhost:3000/");
});