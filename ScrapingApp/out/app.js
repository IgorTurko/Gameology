/// <reference path="./typings/index.d.ts"/>
var http = require("http");
var express = require("express");
var server = express();
server.use("/", express.static("./public", {
    index: "index.html"
}));
server.listen(3000, function () {
    console.log("Web server started at http://localhost:3000/");
});
//# sourceMappingURL=app.js.map