var Backbone= require("backbone");

var _PROP_NAME_= "name";

var DateModel= Backbone.Model.extend({
    
    isBefore: function(name) {
        switch(this.get(_PROP_NAME_)) {
            case "today":
                return false;
            case "tomorrow":
                return name === "today";
            case "\"2 days\"":
                return name === "today" || name === "tomorrow";
            case "\"3 days\"":
                return name === "today" || name === "tomorrow" || name === "\"2 days\"";
            case "\"1 week\"":
                return name === "today" || name === "tomorrow" || name === "\"2 days\"" || name === "\"3 days\"";
        }
        return false;
    }
    
    
}, {
    propName: _PROP_NAME_    
});

module.exports= DateModel;