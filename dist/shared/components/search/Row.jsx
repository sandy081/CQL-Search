var React= require('react');
var RowModel= require('./models/RowModel');

var Header= React.createClass({
   render: function() {
       return (
           <tr>
                {this.renderCollectionFromProperty(RowModel.propEntries)}
           </tr>
       );
   }
});

module.exports= Header;