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
		var temp = {};

		for(var i=1;i<this.sizeof;i++){
			temp[i-1] = this.storage[i];
		}

		this.storage = temp;
		this.sizeof--;
		return result;
	}

};

Queue.prototype.size = function(){
	return this.sizeof;
};
