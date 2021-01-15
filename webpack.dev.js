const HtmlWebPackPlugin = require('html-webpack-plugin')
const path = require('path')
const webpack = require('webpack')



module.exports = {
    entry:'./src/index.js',
    module:{
        rules :{
            test:'/\.js$',
            exclude:/node_module/,
            loader:"babel-loader"
        },
        plugins:[
            new HtmlWebPackPlugin({
                template:"./views/index.html",
                filename:"./index.html",

            })

        ]

    }

  
}
