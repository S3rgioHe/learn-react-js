const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    devtool: 'eval-source-map',
    entry: path.resolve(__dirname, 'src', 'index'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'build.js',
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    devServer: {
        static: path.resolve(__dirname, 'public'),
    },
    plugins: [
        new HtmlWebPackPlugin({ template: path.resolve(__dirname, 'public', 'index.html') })
    ],
    module: {
        rules: [
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                use: 'babel-loader',
            }
        ],
    }
};
