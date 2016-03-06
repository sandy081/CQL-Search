var React= require('React');

var IndexHtml= React.createClass({
   
    render: function() {
        return (<html>
                    <body>
                        <script type="text/javascript" src="CqlSearchApp.js" />
                        <script link="text/css" rel="stylesheet" href="dist/web/css/CqlSearchApp.css" />
                    </body>
                </html>
        );
    }
        
});

module.exports= IndexHtml;