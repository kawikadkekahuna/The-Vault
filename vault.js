//'use strict';
module.exports = function() {

return{


getValue: function(key){
if(!this.key){
return null;
}else{
return this.key;
}
},

setValue: function(key, value){
this.key = value;


}


};


};