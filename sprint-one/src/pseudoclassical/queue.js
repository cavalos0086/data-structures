var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.sizeof = 0;
  this.storage = {};
};

Queue.prototype.enqueue = function(value){
	this.storage[this.sizeof] = value;
	this.sizeof++;
};

Queue.prototype.dequeue = function(){
	if(this.sizeof > 0){
		var result = this.storage[0];
		var tempObj = {};
		for(var i = 1;i<this.sizeof;i++){
			tempObj[i-1] =  this.storage[i];
		}
		this.storage = tempObj;
		this.sizeof--;
		return result;
		
	}
};
Queue.prototype.size = function(){
	return this.sizeof;
};

