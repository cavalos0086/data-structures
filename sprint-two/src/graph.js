

var Graph = function(){
	this.nodeStorage = {};
};

Graph.prototype.addNode = function(node){
	this.nodeStorage[node] = GraphNode(node);

};

Graph.prototype.contains = function(node){
	return (this.nodeStorage[node] !== undefined);
};

Graph.prototype.removeNode = function(node){
	if(this.nodeStorage[node] !== undefined){
		delete this.nodeStorage[node];
	}
};

Graph.prototype.hasEdge = function(fromNode, toNode){

	if(this.nodeStorage[fromNode].edges.includes(toNode)){ // don't use includes
		return true;
	} else {
		return false;
	}
};

Graph.prototype.addEdge = function(fromNode, toNode){
	var from = this.nodeStorage[fromNode];
	var to = this.nodeStorage[toNode];
	from.edges[from.edges.length] = toNode;
	to.edges[to.edges.length] = fromNode;
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


