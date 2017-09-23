var htmlwebpackPlugin = require('html-webpack-plugin')

module.exports = {
    // entry: __dirname + "/src/script/main.js",
    entry: {
        main: __dirname + "/src/script/main.js",
        a: __dirname + "/src/script/a.js",
        b: __dirname + "/src/script/b.js",
        c: __dirname + "/src/script/c.js"
    },
    output: {
        path: __dirname + "/dist",
        filename: "js/[name]-[chunkhash].js",
        publicPath: "http://likaiji.com"
    },
    plugins: [
        new htmlwebpackPlugin({
            filename: "a.html", //指定生成的文件名
            template: "index.html", //默认执行根目录下的index.html
            inject: false, //不指定生成的srcipt文件位置
            title: "webpack is a.html", // 传递参数
            excludeChunks: ['b', 'c'] // 排除b c这两个Chunks
        }),
        new htmlwebpackPlugin({
            filename: "b.html", //指定生成的文件名
            template: "index.html", //默认执行根目录下的index.html
            inject: false, //不指定生成的srcipt文件位置
            title: "webpack is b.html", // 传递参数
            excludeChunks: ['a', 'c'] // 排除a c这两个Chunks
        }),
        new htmlwebpackPlugin({
            filename: "c.html", //指定生成的文件名
            template: "index.html", //默认执行根目录下的index.html
            inject: false, //不指定生成的srcipt文件位置
            title: "webpack is c.html", // 传递参数
            excludeChunks: ['a', 'b'] // 排除a b这两个Chunks
        })
    ]
}