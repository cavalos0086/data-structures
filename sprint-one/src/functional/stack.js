var Stack = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var numOfValues = 0;

  // Implement the methods below
  someInstance.push = function(value){
	  numOfValues++;
	  storage[numOfValues] = value;
  };

  someInstance.pop = function(){
	if(numOfValues <= 0) {
		return;
	}

	var value = storage[numOfValues];
	numOfValues--;
	return value;
  };

  someInstance.size = function(){
	  return numOfValues;
  };

  return someInstance;
};
