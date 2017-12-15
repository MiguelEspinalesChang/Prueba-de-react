//dependencias
import express from 'express';
import webpack from 'webpack';
import path from 'path';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware-';
import  open from 'open';

// webpack configuracion

import webpackConfig from '../../webpack.config.dev';

// server port
const port = 3000;

//Express app
const app = express();

//webpack compiler

const webpackCompiler = webpack(webpackConfig);

// webpack Middlware

app.use(WebpackDevMiddlware(webpackCompiler));
app.use(WebpackHotMiddlware(webpackCompiler));

// sending all traffic to react

app.get('*',(req,res)=>{
    res.sendFile(path.join(__dirname,'../public/index.html'))
});

// listen port

app.listen(port,err =>{
    if (!err){
        open('http://localhost:${port}');
    }
});