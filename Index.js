require("babel-register");
var express= require("express");
var React= require('react');
require('./dist/shared/components/ReactMixin'); 
var browserify= require('browserify');
var babelify = require('babelify');
var ProposalsRestService = require('./dist/server/proposals/ProposalsRestService');
var FlightsRestService = require('./dist/server/flights/rest/FlightsRestService');
var FlightsGrammarVisitorRestService = require('./dist/server/flights/rest/FlightsGrammarVisitorRestService');

var ComponentsFactory= require('./dist/shared/components/ComponentsFactory');
var ResultsModel= require('./dist/shared/components/search/models/ResultsModel');
var Results= require('./dist/shared/components/search//Results.jsx');
var HeaderModel= require('./dist/shared/components/search/models/HeaderModel');
var Header= require('./dist/shared/components/search/Header.jsx');
var RowModel= require('./dist/shared/components/search/models/RowModel');
var Row= require('./dist/shared/components/search/Row.jsx');
var EntryModel= require('./dist/shared/components/search/models/EntryModel');
var Entry= require('./dist/shared/components/search/Entry');

ComponentsFactory.registerComponent(ResultsModel, Results);
ComponentsFactory.registerComponent(HeaderModel, Header);
ComponentsFactory.registerComponent(RowModel, Row);
ComponentsFactory.registerComponent(EntryModel, Entry);

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

app.listen(3002, function(err){    if (err) throw err;
    console.log("Listening on 3000...");
});