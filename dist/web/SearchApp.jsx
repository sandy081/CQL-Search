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
    require(['jsx!web/components/SearchPage'], function(SearchPage){        
        $('body').append("<div data-id='searchPageContainer'/>");
        ReactDOM.render(<SearchPage/>, $("div[data-id='searchPageContainer']").get(0));
    });
});