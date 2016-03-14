var React= require('react');
var ResultsModel= require('./models/ResultsModel');

var Results= React.createClass({
   
   render: function() {
       return (
           <div className="components-results">
                {this._renderMessage()}
                {this._renderResults()}
           </div>
       );
   },
   
   _renderMessage: function() {
       var message= this.getValue(ResultsModel.propMessage); 
       if (message) {
           return (
                <div className="message container" role="alert">
                    <div className="alert alert-success" role="alert">
                            <span>{message}</span>
                    </div>  
                </div>  
           );
       }
   },
   
   _renderResults: function() {
       if (this.getValue(ResultsModel.propRows).length === 0) {
           return null;
       }
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
       )
   }
   
});

module.exports= Results;