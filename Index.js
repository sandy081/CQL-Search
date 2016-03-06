var express= require("express");
var React= require('react');

var app= express(); 

app.use(express.static('node_modules'));
app.use(express.static('dist'));
app.use(express.static('libs'));

app.get('/', function(req, res){
    res.setHeader('Content-Type', 'text/html');   
    res.sendFile("index.html", {root: "."});
});

app.listen(3000, function(err){    if (err) throw err;
    console.log("Listening on 3000...");
});