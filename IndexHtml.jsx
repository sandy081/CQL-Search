var React= require('React');

var IndexHtml= React.createClass({
   
    render: function() {
        return (<html>
                    <body>
                        <script type="text/javascript" src="searchApp" />
                        <link type="text/css" rel="stylesheet" href="web/SearchApp.css" />
                    </body>
                </html>
        );
    }
        
});

module.exports= IndexHtml;