require("babel-register");
var express= require("express");
var React= require('react');
require('./dist/shared/components/ReactMixin'); 
require('./dist/shared/ComponentsInit');
var browserify= require('browserify');
var babelify = require('babelify');
var ProposalsRestService = require('./dist/server/proposals/ProposalsRestService');
var FlightsRestService = require('./dist/server/flights/rest/FlightsRestService');
var FlightsGrammarVisitorRestService = require('./dist/server/flights/rest/FlightsGrammarVisitorRestService');


var app= express(); 

app.use(express.static('dist'));
app.use(express.static('dist/web'));
app.use(express.static('node_modules'));

app.get('/', function(req, res){
    res.setHeader('Content-Type', 'text/html');   
    res.sendFile("index.html", {root: "."});
});

app.get('/proposals/flights', function(req, res){
    var proposalsRestService= new ProposalsRestService();
    proposalsRestService.serve(req, res);
});

app.get('/search/flights', function(req, res){
    var flightsRestService= new FlightsRestService();
    flightsRestService.serve(req, res);
});

app.get('/search/flights/tree', function(req, res){
    res.setHeader('Content-Type', 'text/json');
    var flightsGrammarVisitorRestService= new FlightsGrammarVisitorRestService();
    flightsGrammarVisitorRestService.serve(req, res);
});

app.get('/SearchApp.js', function(req, res){
    browserify("./SearchApp.jsx", {
            paths: ['./dist', './dist/web'],
            basedir: './dist/web',
            debug: true
         })
     .exclude("lodash")    
     .exclude("backbone")    
     .transform(babelify, {sourceMaps: true, presets: ['react']})
     .bundle()
     .pipe(res);;
});

app.listen(3000, function(err){    if (err) throw err;
    console.log("Listening on 3000...");
});