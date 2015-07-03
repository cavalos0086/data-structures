var Tree = function(value){
  var newTree = Object.create(treeMethods);
  newTree.value = value;

  // your code here
  newTree.children = [];  // fix me

  return newTree;
};





var treeMethods = {};

treeMethods.addChild = function(value){
	var newTree = Tree(value);
	this.children[this.children.length] = newTree;


};

treeMethods.contains = function(target){
	if(this.value === target){
		return true;
	}

	if(this.children.length > 0){
		for(var i = 0;i<this.children.length; i++){
			var truthy = this.children[i].contains(target);
			if(truthy){return true;}
		}
	}
	return false;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */

