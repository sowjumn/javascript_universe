var GraphNode = require('./GraphNode');

function Graph() {
  this.numVertices = 0;
  this.numEdges = 0;
  this.vertices = [];

  // holds an array of pointers to the head nodes
  this.adjList = {};
}

//addEdge adds an edge to the graph
Graph.prototype.addEdge = function(edge) {
  var tempVertices = edge.split(' ');
  var tempGraphNode;
  var firstHeadPtr;
  
  // add second vertex in first vertex adj list
  firstHeadPtr = this.adjList[tempVertices[0]];
  tempGraphNode = new GraphNode(tempVertices[1], firstHeadPtr);
  this.adjList[tempVertices[0]] = tempGraphNode;

  // add first vertex in second vertex adj list
  firstHeadPtr = this.adjList[tempVertices[1]];
  tempGraphNode = new GraphNode(tempVertices[0], firstHeadPtr);
  this.adjList[tempVertices[1]] = tempGraphNode;

  tempGraphNode = null;
  firstHeadPtr = null;
}

Graph.prototype.init = function(arrEdges) {
  var i = 0;
  var tempEdge;

  for(i = 0; i < arrEdges.length; i++) {
    tempEdge = arrEdges[i];
    this.addEdge(tempEdge);
  }
}

Graph.prototype.getVertices = function() {
  return Object.keys(this.adjList).sort();
}


module.exports = Graph;