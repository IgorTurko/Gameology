"use strict";
var express = require("express");
var bodyparser = require("body-parser");
var config_1 = require("./config");
var authentication_route_1 = require("./routes/authentication-route");
var server = express();
server.use("/api", bodyparser());
server.use("/api", authentication_route_1.default);
server.use("/", express.static("./public", {
    index: "index.html"
}));
var port = process.env.PORT || config_1.default.fallbackPort;
server.listen(port, function () {
    console.log("Web server started at http://localhost:" + port + "/");
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc2VydmVyL2FwcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBRUEsSUFBWSxPQUFPLFdBQU8sU0FBUyxDQUFDLENBQUE7QUFDcEMsSUFBWSxVQUFVLFdBQU0sYUFBYSxDQUFDLENBQUE7QUFFMUMsdUJBQW1CLFVBQVUsQ0FBQyxDQUFBO0FBQzlCLHFDQUFpQywrQkFBK0IsQ0FBQyxDQUFBO0FBRWpFLElBQUksTUFBTSxHQUFHLE9BQU8sRUFBRSxDQUFDO0FBRXZCLE1BQU0sQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLFVBQVUsRUFBRSxDQUFDLENBQUM7QUFDakMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsOEJBQW9CLENBQUMsQ0FBQztBQUd6QyxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxPQUFPLENBQUMsTUFBTSxDQUFDLFVBQVUsRUFBRTtJQUN2QyxLQUFLLEVBQUUsWUFBWTtDQUN0QixDQUFDLENBQUMsQ0FBQztBQUVKLElBQU0sSUFBSSxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxJQUFJLGdCQUFNLENBQUMsWUFBWSxDQUFDO0FBQ3JELE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFO0lBQ2hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsNENBQTBDLElBQUksTUFBRyxDQUFDLENBQUM7QUFDbkUsQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi90eXBpbmdzL2luZGV4LmQudHNcIi8+XHJcbmltcG9ydCAqIGFzIGh0dHAgIGZyb20gXCJodHRwXCI7XHJcbmltcG9ydCAqIGFzIGV4cHJlc3MgIGZyb20gXCJleHByZXNzXCI7XHJcbmltcG9ydCAqIGFzIGJvZHlwYXJzZXIgZnJvbSBcImJvZHktcGFyc2VyXCI7XHJcblxyXG5pbXBvcnQgY29uZmlnIGZyb20gXCIuL2NvbmZpZ1wiO1xyXG5pbXBvcnQgYXV0aGVudGljYXRpb25Sb3V0ZXIgZnJvbSBcIi4vcm91dGVzL2F1dGhlbnRpY2F0aW9uLXJvdXRlXCI7XHJcblxyXG5sZXQgc2VydmVyID0gZXhwcmVzcygpO1xyXG5cclxuc2VydmVyLnVzZShcIi9hcGlcIiwgYm9keXBhcnNlcigpKTtcclxuc2VydmVyLnVzZShcIi9hcGlcIiwgYXV0aGVudGljYXRpb25Sb3V0ZXIpO1xyXG5cclxuXHJcbnNlcnZlci51c2UoXCIvXCIsIGV4cHJlc3Muc3RhdGljKFwiLi9wdWJsaWNcIiwge1xyXG4gICAgaW5kZXg6IFwiaW5kZXguaHRtbFwiXHJcbn0pKTtcclxuXHJcbmNvbnN0IHBvcnQgPSBwcm9jZXNzLmVudi5QT1JUIHx8IGNvbmZpZy5mYWxsYmFja1BvcnQ7XHJcbnNlcnZlci5saXN0ZW4ocG9ydCwgKCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coYFdlYiBzZXJ2ZXIgc3RhcnRlZCBhdCBodHRwOi8vbG9jYWxob3N0OiR7cG9ydH0vYCk7XHJcbn0pOyJdfQ==