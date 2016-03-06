var $= require('jquery');
global.jQuery= $;
require('bootstrap');
var React= require('react');
var ReactDOM= require('react-dom');
var SearchContainer= require('web/components/SearchContainer.jsx');

$('body').append("<div data-id='searchContainer' class='container'/>");
ReactDOM.render(<SearchContainer/>, $("div[data-id='searchContainer']").get(0));