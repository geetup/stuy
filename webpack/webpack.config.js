const path = require('path');
const webpack = require('webpack');
const HtmlPlugin = require('html-webpack-plugin');
const entry = require('./webpack_config/entry_webpack.js');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
module .exports = {
    mode: 'development',
    entry:entry,
    output: {                   //输出的对象
        path: path.resolve(__dirname, 'dist'),//输出的文件夹名称
        filename: '[name].js',               //输出的文件格式
        publicPath: "http://localhost:8089/"
    },
    module:{
        rules: [
            {
                test:/\.css$/,
                //use:['style-loader','css-loader']打包这两个文件
                use:ExtractTextPlugin.extract({
                    fallback:"style-loader",//
                    use:[
                        {
                            loader:"css-loader"
                        },
                        {
                            loader:"sass-loader"
                        }],
                    fallback :"style-loader"
                })
            },
            {
                test:/\.(png|jpg|gif)$/i,//插入背景图片的准备格式
                use:[{                    //是use使用的制定的loader和loader配置参数
                    loader:'url-loader',//url-lodaer配置参数
                    options: {
                            limit:500,   //小于500k的图片的打成64位格式写入css中
                            outputPath:'imges/'//输出的图片文件夹的名称
                    }
                }]
            },
            {
                test:/\.(htm|html)$/i, //是插入图片用img的对象的格式
                loader:'html-withimg-loader',//配置参数
            },
            {
                test:/\.scss/,
                use: [
                    {
                        loader:'style-loader'
                    },
                    {
                     },
                    {
                        loader:'sass-loader'
                    }
                ]
            },
            {
                test :/\.css$/,
                use:ExtractTextPlugin.extract [{
                    fallback:"style-loader",
                    use:[{
                        loader:"css-loader",
                        options:{importloader:1}

                    },'postcss-loader']
                }]
            },
            {
                test :/\.(jsx|js)$/,
                use:{
                    loader:'babel-loader',
                    options:{
                        presets:[
                            "es2015","react"
                        ]
                    }
                },
                exclude:/node_modules/
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlPlugin({
            minify :{              //html文件打包
                filename:'index.html',
                chunks:['index'],
                removeAttributeQuotes:true//去掉属性的双引号
            },
            hash:true,
            template:'./src/index.html'//要打包的html版本的路径和文件名称cd
        }),
        new ExtractTextPlugin("css/index.css"),  //css的分离处理
        new webpack.BannerPlugin('整不明白'),
    ] ,
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'),//输出的服务的
        host: 'localhost',                       //哈吸  是为啦开发中js有缓存效果，所以加入hash，这样可以有效的避免缓存js
        compress: true,                         //hot热更新
        port: 8089,                              //端口号
        open: true,                            //重置环境自动刷新页面
        hot: true                              //hot热更新
    }
};


