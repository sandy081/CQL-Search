require("babel-register");
var express= require('express');
var Index= require('./web/Index.jsx');
var React= require('react');
var ReactDOMServer= require('react-dom/server'); 
var App= express();

App.get('/', function(req, res){
   var indexComponent= React.createElement(Index);
   var html= ReactDOMServer.renderToString(indexComponent);
   res.send(html); 
});

App.listen(3000, function(){
   console.log('Example app listening on port 3000!'); 
});