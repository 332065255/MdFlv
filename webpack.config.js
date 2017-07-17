var path=require('path');
module.exports={
    entry:{
        app: [path.resolve(__dirname, './index.js')],
    },
    output:{
        path: path.resolve(__dirname, './'),
        filename: 'bound.js',
        libraryTarget: "window",
    },
    module: {
        loaders: [

            /*
             * 你可以在这配置别的加载器，写法是一样的
             * */
            // {
            //     test: /\.(jsx|js)$/,
            //     loader: 'babel-loader',
            //     exclude: /node_modules/,
            //     query: {
            //         presets: ['es2015', 'react']
            //     }
            // },
            { test: /\.js?$/, loaders: ['babel-loader'] ,exclude: /node_modules/, }, 
        ]
     },
    devtool: 'eval-source-map',
}