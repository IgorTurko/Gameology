var path = require("path");
var fs = require("fs");

var nodeModules = {};

fs.readdirSync("node_modules")
  .filter(function (x) {
    return [".bin"].indexOf(x) === -1;
})
  .forEach(function (mod) {
    nodeModules[mod] = "commonjs " + mod;
});


module.exports = [{
        entry: "./client/app.tsx",
        output: {
            filename: "app.js",
            path: "./out/client/assets"
        },
        devtool: "source-map",
        resolve: {
            extensions: ["", ".webpack.js", ".web.js", ".ts", ".js", ".tsx"]
        },
        externals: [{
                react: "var React",
                "react-dom": "var ReactDOM"
            }],
        module: {
            loaders: [
                { test: /\.tsx?$/, loader: "ts-loader" }
            ]
        },
        ts: {
            compilerOptions: {
                noEmit: false
            }
        }
    },
    // Server
    {
        entry: "./server/app.ts",
        output: {
            filename: "app.js",
            path: "./out/server/"
        },
        devtool: "source-map",
        target: "node",
        resolve: {
            extensions: ["", ".webpack.js", ".web.js", ".ts", ".js", ".tsx"]
        },
        externals: nodeModules,
        module: {
            loaders: [
                {
                    test: /\.tsx?$/, 
                    loader: "ts-loader"
                }
            ]
        },
        ts: {
            compilerOptions: {
                noEmit: false
            }
        }
    }];