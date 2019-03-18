let path = require('path');
let HtmlWebPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './src/index.js',
    output:{
        filename:'bundle.js',
        path: path.resolve(__dirname, 'build')
    },
    resolve: {
        extensions: ['.jsx', '.js', '.json']//添加此配置后，import文件的时候可以免写指定文件后缀
    },
    module:{
        rules:[
            {test:/.jsx?$/,loader:'babel-loader'},//根据webpack版本的不同，使用的语法不同
        ]
    },
    plugins:[
        new HtmlWebPlugin({
            title:'aaa.html',
            template:'./index-t.html',//模版语法不需要任何配置回默认使用./node_modules/html-webpack-plugin/lib/loader.js!./index-t.html
        })
    ]
}