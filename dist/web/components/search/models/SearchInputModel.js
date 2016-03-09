var Backbone= require("backbone");

var _PROP_ARIA_OWNS_= "ARIA_OWNS";

var SearchInputModel= Backbone.Model.extend({
}, {
    propAriaOwns: _PROP_ARIA_OWNS_
});

module.exports= SearchInputModel;