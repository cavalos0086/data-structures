var Queue = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var tailCounter = 0;
  var headCounter = 0;
  // Implement the methods below

  someInstance.enqueue = function(value){
	  tailCounter++;
	  storage[tailCounter] = value;
  };

  someInstance.dequeue = function(){
	var value;

	if (tailCounter - headCounter <= 0) {
		return;
	}

	headCounter++;
	value = storage[headCounter];
	return value;
  };

  someInstance.size = function(){
	  return tailCounter - headCounter;
  };

  return someInstance;
};
