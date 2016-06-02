module.exports = {
    entry: './client/app.tsx',
    output: {
        filename: 'app.js',
        path: './public/assets'
    },
    devtool: 'source-map',
    resolve: {
        extensions: ['', '.webpack.js', '.web.js', '.ts', '.js', '.tsx']
    },
    externals: [{
            react: "var React",
            "react-dom": "var ReactDOM"
        }],
    module: {
        loaders: [
            { test: /\.tsx?$/, loader: 'ts-loader' }
        ]
    }
}