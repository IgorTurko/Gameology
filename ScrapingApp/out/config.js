/// <reference path="typings/index.d.ts"/>
"use strict";
var fs = require("fs");
var configContent = fs.readFileSync("./config.json", "utf8");
var configuration = JSON.parse(configContent);
module.exports = configuration;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc2VydmVyL2NvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQywwQ0FBMEM7O0FBRTNDLElBQU8sRUFBRSxXQUFXLElBQUksQ0FBQyxDQUFDO0FBRzFCLElBQUksYUFBYSxHQUFHLEVBQUUsQ0FBQyxZQUFZLENBQUMsZUFBZSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0FBQzdELElBQUksYUFBYSxHQUFrQixJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxDQUFDO0FBRTdELGlCQUFTLGFBQWEsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIu+7vy8vLyA8cmVmZXJlbmNlIHBhdGg9XCJ0eXBpbmdzL2luZGV4LmQudHNcIi8+XHJcblxyXG5pbXBvcnQgZnMgPSByZXF1aXJlKFwiZnNcIik7XHJcblxyXG5cclxubGV0IGNvbmZpZ0NvbnRlbnQgPSBmcy5yZWFkRmlsZVN5bmMoXCIuL2NvbmZpZy5qc29uXCIsIFwidXRmOFwiKTtcclxubGV0IGNvbmZpZ3VyYXRpb24gPSA8Q29uZmlndXJhdGlvbj5KU09OLnBhcnNlKGNvbmZpZ0NvbnRlbnQpO1xyXG5cclxuZXhwb3J0ID0gY29uZmlndXJhdGlvbjsiXX0=