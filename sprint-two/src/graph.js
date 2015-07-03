

var Graph = function(){
	this.nodeStorage = [];
};

Graph.prototype.addNode = function(node){
	this.nodeStorage[this.nodeStorage.length] = GraphNode(node);

};

Graph.prototype.contains = function(node){
	for(var i = 0;i<this.nodeStorage.length;i++){
		if(this.nodeStorage[i].value === node){
			return true;
		}
	}
	return false;
};

Graph.prototype.removeNode = function(node){
	//find node with value
	//frmove node
	for(var i=0;i<this.nodeStorage.length;i++){
		if(this.nodeStorage[i].value === node){
			this.nodeStorage.splice(i, 1);
		}
	}
};

Graph.prototype.hasEdge = function(fromNode, toNode){
	for(var i=0;i<this.nodeStorage.length;i++){
		if(this.nodeStorage.edges.includes())
	}

};

Graph.prototype.addEdge = function(fromNode, toNode){
	var fromIndex;
	var toIndex;

	for(var i=0;i<this.nodeStorage.length;i++){
		if(this.nodeStorage[i].value === fromNode){
			fromIndex = i;
		} else if (this.nodeStorage[i].value === toNode){
			toIndex = i;
		}
	}
	var fromEdges = this.nodeStorage[fromIndex].edges[];
	var toEdges = this.nodeStorage[toIndex].edges[];

	fromEdges[fromEdges.length] = this.nodeStorage[toIndex].value;
	toEdges[toEdges.length] = this.nodeStorage[fromIndex].value;
};

Graph.prototype.removeEdge = function(fromNode, toNode){
};

Graph.prototype.forEachNode = function(cb){
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

var GraphNode = function(value){
  var node = {};

  node.value = value;
  node.edges = [];

  return node;
};


