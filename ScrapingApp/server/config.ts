/// <reference path="typings/index.d.ts"/>

import fs = require("fs");


let configContent = fs.readFileSync("./config.json", "utf8");
let configuration = <Configuration>JSON.parse(configContent);

export = configuration;