var $= require('jquery'); 
var React= require('react'); 
var ReactDOM= require('react-dom');
require('components/ReactMixin'); 
var Page= require('components/Page.jsx'); 

$('body').append("<div data-id='pageContainer'/>");
ReactDOM.render(<Page/>, $("div[data-id='pageContainer']").get(0));