var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj = Object.create(stackMethods);
  obj.sizeof = 0;
  obj.storage = {};
  return obj;
};

var stackMethods = {};

stackMethods.push = function(value){
	this.storage[this.sizeof] = value;
	this.sizeof++;
};

stackMethods.pop = function(){
	var result = this.storage[this.sizeof-1];
	if(this.sizeof > 0){
		delete this.storage[this.sizeof-1];
		this.sizeof--;
	}
	return result;

};

stackMethods.size = function(){
	return this.sizeof;
};

