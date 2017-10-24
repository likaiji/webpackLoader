// var htmlwebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: __dirname + "/src/app.js",
    output: {
        path: __dirname + "/dist",
        filename: "js/[name].bundle.js"
    },
    module: {
        loaders: [{
                test: /\.js$/,
                loader: 'babel-loader',
                query: {
                    presets: ['env']
                }
            },
            {
                test: /\.html$/,
                loader: 'html-loader'
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.less$/,
                loader: 'style-loader!css-loader!less-loader'
            },
            {
                test: /\.html$/,
                loader: 'html-loader'
            }
        ]
    },
    plugins: [
        new htmlwebpackPlugin({
            filename: "index.html", //指定生成的文件名
            template: "index.html", //默认执行根目录下的index.html
            inject: 'body', //指定生成的srcipt文件位置
        })
    ],
    devServer: {
        contentBase: './dist', //本地服务器加载的页面所在的目录
        historyApiFallback: true, //不跳转
        inline: true, //实时刷新
        port: '8080' //端口
    }
}