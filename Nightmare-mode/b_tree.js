// B-tree structure: (m_order)



var Btree = function(m_order){
	this.m_order = m_order === undefined ? 4 : m_order ;
	this.storage = [];
};

Btree.prototype.insert = function(value){
	var newNode = Node();
	newNode.values[newNode.values.length] = value;
};

Btree.prototype.delete_node = function(){

};

Btree.prototype.contains = function(value){
	for(var i=0;i<this.storage.length;i++){
		for(var j=0;j<this.storage[i].values[j])
		if(this.storage[i].values)
	}

};

Btree.prototype.split_node = function(){

};

Btree.prototype.sort_node = function(){

};

// Create a node
var Node = function(value){
	var max_length = value === undefined ? 4 : value;
	this.values = [];
	this.left = null;
	this.right = null;

	// It needs an array to store node values;

	// it needs an array to store childrens;

 
}