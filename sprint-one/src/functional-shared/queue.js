var Queue = function(){
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj = {};
  obj.storage = {};
  obj.sizeof = 0;
  extend(obj, queueMethods);
  return obj;
};

var extend = function(to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
};

var queueMethods = {};

queueMethods.enqueue = function(value){
	this.storage[this.sizeof] = value;
	this.sizeof++;
}

queueMethods.dequeue = function(){
	var result = this.storage[0];
	if(this.sizeof > 0){
		var temp = {};
		
		for(var i =1;i<this.sizeof;i++){
			temp[i-1] = this.storage[i];
		}

		this.storage = temp;
		this.sizeof--;
	}
	
	return result;
}

queueMethods.size = function(){
	return this.sizeof;
}



