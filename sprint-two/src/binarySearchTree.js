var BinarySearchTree = function(value){
	this.value = value;
	this.left = null;
	this.right = null;
};

BinarySearchTree.prototype.insert = function(val){
	if(val < this.value){
		if(this.left === null){
			this.left = new BinarySearchTree(val);
		} else {
			this.left.insert(val);
		}
	} else {
		if(this.right === null){
			this.right = new BinarySearchTree(val);
		} else {
			this.right.insert(val);
		}
	}
};

BinarySearchTree.prototype.contains = function(val){
	if(this.value === val){
		return true;
	} else if(this.value > val && this.left !== null){
		var truthy = this.left.contains(val);
	} else if(this.value < val && this.right !== null){
		var truthy = this.right.contains(val);
	}

	return !!(truthy);
};

BinarySearchTree.prototype.depthFirstLog = function(func){
	// start at the root
	// go left
		// recursion root = this.left

	// go right

	func.call(this, this.value)

	if(this.left !== null){
		this.left.depthFirstLog(func);
	}
	if (this.right !== null){
		this.right.depthFirstLog(func);
	}

};


/*
 * Complexity: What is the time complexity of the above functions?
 */