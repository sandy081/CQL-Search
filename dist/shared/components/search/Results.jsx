var React= require('react');
var ResultsModel= require('./models/ResultsModel');

var Results= React.createClass({
   
   render: function() {
       return (
           <table className={this.getValue(ResultsModel.propCssClassNames)}>
                <thead>
                    <tr>
                        {this.renderCollectionFromProperty(ResultsModel.propHeaders)}
                    </tr>
                </thead>
                <tbody>
                        {this.renderCollectionFromProperty(ResultsModel.propRows)}
                </tbody>
           </table>
       );
   }
});

module.exports= Results;