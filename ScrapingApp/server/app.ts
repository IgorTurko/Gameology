/// <reference path="./typings/index.d.ts"/>

import * as webServer from "./web-server";
import * as scrapeServer from "./scrape-server";

scrapeServer.run();
webServer.run();