require("babel-register");
var React= require('react');
var ReactDOM= require('react-dom');
var $= require('jquery');
var CqlSearchInput= require('web/components/CqlSearchInput.jsx');

$('body').append("<div/>");
ReactDOM.render(<CqlSearchInput/>, $('div').get(0));