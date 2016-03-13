var React= require('react');
var EntryModel= require('./models/EntryModel');

var Entry= React.createClass({
   
   render: function() {
    var iconUrl= this.getValue(EntryModel.propIconUrl);
       return (
           <td>
                <div>
                    {this._getIconElement()}
                    <span>{this.getValue(EntryModel.propValue)}</span>
                </div>
           </td>
       );
   },
   
   _getIconElement: function() {
        if (this.getValue(EntryModel.propIconUrl)) {
            return <img src={this.getValue(EntryModel.propIconUrl)} className="entry-item-icon" />; 
        }
        
        if (this.getValue(EntryModel.propIconClass)) {
            return <span className={React.className([this.getValue(EntryModel.propIconClass), "entry-item-icon"])} />;
        }
        
        return null;
    },
   
});

module.exports= Entry;