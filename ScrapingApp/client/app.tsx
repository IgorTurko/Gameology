/// <reference path="./typings/index.d.ts" />

import * as React from "react";
import * as ReactDOM from "react-dom";

import SearchBox from "./search/search-box";

ReactDOM.render(<SearchBox value="John" placeholder= "Search products..." />, document.getElementById("main"));