// dependencias

import  webpack from 'webpack';
import path from 'path';

//pths
const PATHS ={
    index:path.join(__dirname,'scr/index'),
    build:path.join(__dirname,'/dist'),
    base: path.join(__dirname,'scr')
}
//webpack config
export default {
 devtool: 'cheap-module-eval-source-map',
    entry:[
        'webpack-hot-middleware/client?reload=true',
        PATHS.index
    ],
    output:{
     path:PATHS.build,
     publicPath:'/',
     filename:'bundle.js'
    },
    plugin:[
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    ],
    module:{
     loader:[{
         test : /\.js?/,
         loader:['babel-loader'],
         include:PATHS.base
     },
         {
             test:/(\.css)$/,
            loader:['style-loader','css-loader']
         },
         {
             test:/\.svg(\?v=\d+\.\d+\.\d+)?$/,
             loader:'url-loader?limit=1000&nimetype=image/svg+xml'

         }]
    }
};