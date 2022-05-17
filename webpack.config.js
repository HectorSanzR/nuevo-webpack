const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");


module.exports = {
 
    mode: 'development',
    module: {
        rules: [
            
            {
                test: /\.css$/,
                exclude: '/styles.css$/',
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader'
                    }
                ]
            },
            {
                test: /styles.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            },
 
            {
            test: /\.html$/i,
            loader: 'html-loader',
            options: {
                sources: false,
            },
            
             },
            {
                test: /\.(png|jpe?g|gif)$/,
                loader: 'file-loader'
            }
      ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: './src/index.html',
            filename: './index.html',
            inject: 'body'
        }),

        new MiniCssExtractPlugin ({
            filename: '[name].css',
            ignoreOrder: false

        }),


        new CopyPlugin({
            patterns: [
                {from:'src/assets/', to:'assests/'},
              
            ],
          }),
    ]
 
}

