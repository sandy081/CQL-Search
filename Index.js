require("babel-register");
var express= require("express");
var express= require("express");
var IndexHtml= require('./IndexHtml.jsx');
var React= require('react');
var ReactDOMServer= require('react-dom/server'); 
var browserify = require('browserify');
var babelify = require('babelify');

var app= express(); 

app.use(express.static('node_modules'));
app.use(express.static('dist'));

app.get('/', function(req, res){
    res.setHeader('Content-Type', 'text/html');   
    var indexElement= React.createElement(IndexHtml);
    var html= ReactDOMServer.renderToString(indexElement);
    res.send(html);
});

app.get('/searchApp', function(req, res){
     browserify({
            entries: ['./dist/web/SearchApp.jsx'],
            paths: ['./dist/'],
            debug: true
        })
    .transform(babelify, {sourceMaps: false})
    .bundle()
    .pipe(res);
});

app.listen(3000, function(err){    if (err) throw err;
    console.log("Listening on 3000...");
});