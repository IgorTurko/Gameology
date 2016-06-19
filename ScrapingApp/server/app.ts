/// <reference path="./typings/index.d.ts"/>

import * as webServer from "./web-server";
import * as scrapeServer from "./scrape-server";
import socketServer from "./socket-server";

scrapeServer.run();
const httpServer = webServer.run();
socketServer(httpServer, scrapeServer.productService);