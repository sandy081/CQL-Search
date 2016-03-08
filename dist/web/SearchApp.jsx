var $= require('jquery'); 
var React= require('react'); 
var ReactDOM= require('react-dom');
require('components/ReactMixin'); 
var SearchPage= require('components/SearchPage.jsx'); 

$('body').append("<div data-id='searchPageContainer'/>");
ReactDOM.render(<SearchPage/>, $("div[data-id='searchPageContainer']").get(0));