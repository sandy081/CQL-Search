require("babel-register");

var express= require("express");
var React= require('react');
var browserify= require('browserify');
var babelify = require('babelify');

var app= express(); 

app.use(express.static('dist/web'));
app.use(express.static('node_modules'));

app.get('/', function(req, res){
    res.setHeader('Content-Type', 'text/html');   
    res.sendFile("index.html", {root: "."});
});

app.get('/SearchModule.js', function(req, res){
    browserify({
            entries: ['./dist/web/SearchApp.jsx'],
             paths: ['./dist/', './dist/web'],
             debug: true
         })
     .exclude("lodash")    
     .transform(babelify, {sourceMaps: false})
     .bundle()
     .pipe(res);;
});

app.listen(3000, function(err){    if (err) throw err;
    console.log("Listening on 3000...");
});