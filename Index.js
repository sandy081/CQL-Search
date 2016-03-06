require("babel-register");
var http= require('http');
var IndexHtml= require('./IndexHtml.jsx');
var React= require('react');
var ReactDOMServer= require('react-dom/server'); 
var browserify = require('browserify');
var literalify = require('literalify');
var babelify = require('babelify');


http.createServer(function(req, res){
   if (req.url === "/") { 
    res.setHeader('Content-Type', 'text/html');   
    var indexElement= React.createElement(IndexHtml);
    var html= ReactDOMServer.renderToString(indexElement);
    res.end(html); 
   } else if (req.url === "/CqlSearchApp.js") {
        browserify({
            entries: ['./dist/web/CqlSearchApp.jsx'],
            paths: ['./dist/'],
            debug: true
        })
        .transform(babelify, {sourceMaps: false})
        .bundle()
        .pipe(res);
      
  // Return 404 for all other requests
  } else {
    res.statusCode = 404
    res.end()
  }
}).listen(3000, function(err){
    if (err) throw err;
    console.log("Listening on 3000...");
});