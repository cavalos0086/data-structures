var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);

  if(this._storage[i] === undefined){
  	this._storage[i] = [v];
  } else {
  	this._storage[i].push(v);
  }

 //  if(Array.isArray(this._storage[i]) {

 //  } else {

	// this._storage[i][0] = v;
 //  }
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  //return this._storage[i];
  if(this._storage[i].length > 1){
  	for(var j=0;j<this._storage[i].length;j++){
  		console.log(this._storage[i][j])
  		if(this._storage[i][j] === k){
  			console.log(k);
  			return this._storage[i][j];
  		}
  	}
  } else {
  	return this._storage[i][0];
  }
//  return null;
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  // this._storage[i] = null;

  if(this._storage[i].length > 1){
  	for(var j=0;j<this._storage[i].length;j++){
  		if(this._storage[i][j] === i){
  			this._storage[i][j] = null;
  		}
  	} 
  } else {
  	this._storage[i][0] = null;
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
