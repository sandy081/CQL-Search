define([
        'jquery',
        'react',
        'bootstrap',
        'react-dom',
        'jsx!web/components/SearchContainer'
       ],
function(
         $,
         React,
         Bootstrap,
         ReactDOM,
         SearchContainer
        ) {
    $('body').append("<div data-id='searchContainer' class='container'/>");
    ReactDOM.render(<SearchContainer/>, $("div[data-id='searchContainer']").get(0));
});