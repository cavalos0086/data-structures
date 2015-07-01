var _ = {};

var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
	var obj = {};
	obj.storage = {};
	obj.sizeof = 0;
	extend(obj, stackMethods);
	return obj;

};

var extend = function(to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
};

var stackMethods = {};


stackMethods.push = function(value){
	this.storage[this.sizeof] = value;
	this.sizeof++;
};

stackMethods.pop = function(){
	if(this.sizeof>0){
		var result = this.storage[this.sizeof-1];
		delete this.storage[this.sizeof-1];
		this.sizeof--;
		return result;
	}
};

stackMethods.size = function(){
	return this.sizeof;
};










