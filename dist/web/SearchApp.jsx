var $= require('jquery'); 
var Bootstrap= require('bootstrap'); 
var React= require('react'); 
require('./../shared/components/ReactMixin');
require('./../shared/ComponentsInit'); 
var ReactDOM= require('react-dom');
var Page= require('./components/Page.jsx'); 
var PageModel= require('./components/models/PageModel');


$('body').append("<div data-id='pageContainer'/>");
ReactDOM.render(<Page model={new PageModel()}/>, $("div[data-id='pageContainer']").get(0));