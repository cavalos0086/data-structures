

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

	return (this.nodeStorage[fromNode].edges[toNode] === toNode); // don't use includes

};

Graph.prototype.addEdge = function(fromNode, toNode){
	var from = this.nodeStorage[fromNode];
	var to = this.nodeStorage[toNode];
	from.edges[toNode] = toNode;
	to.edges[fromNode] = fromNode;
};

Graph.prototype.removeEdge = function(fromNode, toNode){
	delete this.nodeStorage[fromNode].edges[toNode];
	delete this.nodeStorage[toNode].edges[fromNode];
};

Graph.prototype.forEachNode = function(cb){
	for(var key in this.nodeStorage){
		cb.call(this, key);
	}
};

/*
 * 	All except forEachNode = constant;
	forEachNode = O(n).
 */

var GraphNode = function(value){
  var node = {};

  node.value = value;
  node.edges = {};

  return node;
};


