const webpack = require('webpack');
const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');





module.exports = {
    entry: {
        vendor: "./src/config/index.js"
    },
    mode: "development",
    module: {
        rules: [


            // Bable Loader
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },

            // File Loader
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [{
                    loader: 'file-loader',
                    options: {
                       name : 'images/[name].[ext]'

                    },
                }, ],

            },


            // Fonts Loader
            {
                test: /\.(woff|woff2|ttf|otf|eot|svg)$/i,
                use: [{
                    loader: 'file-loader',
                    options: {                  
                        name: 'fonts/[name].[ext]'

                    },
                }, ],

            },


            // Html Loader
            {
                test: /\.html$/i,
                loader: 'html-loader',
            },


            // Sass Loader
            {
                test: /\.scss$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    'style-loader',
                    // Translates CSS into CommonJS
                    'css-loader',
                    // Compiles Sass to CSS
                    'sass-loader',
                ],
            },

            // SVG inline loader
            {
                test: /\.svg$/,
                loader: 'svg-inline-loader'
            }



        ],


    },

    // Server Configuration
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 9000
    },
    plugins: [

        new webpack.ProgressPlugin(),
        new HtmlWebpackPlugin({ template: './src/index.html' }),
        new CleanWebpackPlugin()

    ],
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist")
    },
}