var Queue = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;

  // Implement the methods below

  someInstance.enqueue = function(value){
    storage[size] = value;
    size++;
  };

  someInstance.dequeue = function(){
    var newObj = {};
    var popval = storage[0];

    delete storage[0];

    for(var i=1;i<size;i++){
      newObj[i-1] = storage[i];
    }
    storage = newObj;
    
    if(size > 0){
      size--;
    }

    return popval;

  };

  someInstance.size = function(){
    return size;
  };

  return someInstance;
};
