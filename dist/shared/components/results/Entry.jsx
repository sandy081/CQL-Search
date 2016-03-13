var React= require('react');
var EntryModel= require('./models/EntryModel');

var Entry= React.createClass({
   render: function() {
       return (
           <td>{this.getValue(EntryModel.propValue)}</td>
       );
   }
});

module.exports= Entry;