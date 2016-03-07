require([
        'jquery',
        'react',
        'bootstrap',
        'react-dom',
        'web/components/ReactMixin'
       ],
function(
         $,
         React,
         Bootstrap,
         ReactDOM,
         ReactMixin
        ) {
    require(['jsx!web/components/SearchContainer'], function(SearchContainer){        
        $('body').append("<div data-id='searchContainer' class='container'/>");
        ReactDOM.render(<SearchContainer/>, $("div[data-id='searchContainer']").get(0));
    });
});