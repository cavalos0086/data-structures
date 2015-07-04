// B-tree structure: (m_order)
// 


var Btree = function(m_order){
	this.m_order = m_order === undefined ? 4 : m_order ;
	this.storage = [];

};

Btree.prototype.insert = function(value){
	var newNodeElement = new NodeElement(value);
	if(this.storage.length === 0){
		this.storage.push(newNodeElement);
	}else{
		for(var i =0;i<this.storage.length;i++){
			
		}
	}
	
	
	// this.storage.push(newNodeElement);
};

Btree.prototype.delete_node = function(){

};

Btree.prototype.contains = function(value){
	console.log(this.storage);
	for(var i=0;i<this.storage.length;i++){
		if(this.storage[i].value === value){
			return true;
		}
	}
	return false;
};

Btree.prototype.split_node = function(){

};

Btree.prototype.sort_node = function(){

};

Btree.prototype.retrieve = function(){

}

// Node constructor
var NodeElement = function(val){

	var obj = {};
	obj.value = val;
	obj.left = null;
	obj.right = null;

	return obj;
 
}
