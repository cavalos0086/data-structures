var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.sizeof = 0;
  this.storage = {};
};

Stack.prototype.push = function(value){
	this.storage[this.sizeof] = value;
	this.sizeof++;
};

Stack.prototype.pop = function(){
	if(this.sizeof > 0){
		this.sizeof--;
		var result = this.storage[this.sizeof]
		delete this.storage[this.sizeof];
		return result;
	}
};

Stack.prototype.size = function(){
	return this.sizeof;
};

