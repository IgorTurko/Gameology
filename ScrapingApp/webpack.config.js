module.exports = {
    entry: './client/app.ts',
    output: {
        filename: 'bundle.js',
        path: './public/assets'
    },
    devtool: 'source-map',
    resolve: {
        extensions: ['', '.webpack.js', '.web.js', '.ts', '.js']
    },
    module: {
        loaders: [
            { test: /\.ts$/, loader: 'ts-loader' }
        ]
    }
}