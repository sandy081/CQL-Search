define([
        'jquery',
        'react',
        'react-dom',
        'lodash',
        'reflux'
       ],
function(
         $,
         React,
         ReactDOM,
         _,
         Reflux
        ) {
    
    var mixin= {
      
      componentWillMount: function() {
        this.actions= this.actions || {};
        this.actions= _.mapValues(this.actions, Reflux.createAction);  
      },
      
      componentDidMount: function() {
        this.$el= $(ReactDOM.findDOMNode(this));
        this._collectReferences();  
      },
      
      componentDidUpdate: function() {
        this._collectReferences();  
      },
      
      componentWillUnmount: function() {
        _.each(this.actions, function(action){
          action.emitter.removeAllListeners();  
        }); 
      },
      
      _collectReferences: function() {
        this.$ui= {};
        _.each(_.keys(this.refs), _.bind(function(key){
            this.$ui[key]= $(ReactDOM.findDOMNode(this.refs[key]));
        }, this));   
      }
        
    };
 
    var createClassFunc= React.createClass;
    
    React.createClass= function(spec) {
        spec= spec || {};
        spec.mixins= spec.mixins || [];
        spec.mixins.push(mixin);
        return createClassFunc(spec);  
    };
 
    return React; 
});