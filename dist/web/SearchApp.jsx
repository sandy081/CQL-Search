var $= require('jquery'); 
require('bootstrap'); 
var React= require('react'); 
var ReactDOM= require('react-dom');
require('./../shared/components/ReactMixin'); 
var Page= require('./components/Page.jsx'); 

$('body').append("<div data-id='pageContainer'/>");
ReactDOM.render(<Page/>, $("div[data-id='pageContainer']").get(0));