/// <reference path="typings/index.d.ts"/>
import * as fs from "fs";


let configContent = fs.readFileSync("./config.json", "utf8");
let configuration = <Configuration>JSON.parse(configContent);

export default configuration;