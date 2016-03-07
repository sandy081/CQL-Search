define([
        'jquery',
        'react',
        'bootstrap',
        'react-dom',
        'web/components/ReactMixin',
        'jsx!web/components/SearchContainer'
       ],
function(
         $,
         React,
         Bootstrap,
         ReactDOM,
         ReactMixin,
         SearchContainer
        ) {
    $('body').append("<div data-id='searchContainer' class='container'/>");
    ReactDOM.render(<SearchContainer/>, $("div[data-id='searchContainer']").get(0));
});