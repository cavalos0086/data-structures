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
	i8;pb ik6p$ vU^9p09p i8v0o EO4 holh8 Lhyvg8U,f7o057u8L, vf78IOo0Tf7v;8. õT5f;8.Op7o6T 78o'.; ¶986oT y 6;9h v.hy789o86vfT789o9;6T¶•5ø;[.9vf78.y6Thij5o0'[8677986906976 ÷h8Òi•oÁ§÷§Áfvo/ vhoø¶•ø07yo0 hyju87mif (this.right !== null){
		this.right.depthFirstLog(func);
	}

};


/*
 * Complexity: What is the time complexity of the above functions?
 */