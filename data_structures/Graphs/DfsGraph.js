var Graph = require('./Graph');

function dfsGraph(G) {
  var visited = {};
  dfsTraversal(G);

  function dfs(myG, u) {
    var adjVertex = null;
    visited[u] = true;
    console.log(u);

    adjVertex = myG.adjList[u]
    while (adjVertex) {
      if (!visited[adjVertex.getValue()]) {
        dfs(myG, adjVertex.getValue());
      }
      adjVertex = adjVertex.getNext();
    }
  }

  function dfsTraversal(myGraph) {
    var graphVertices = myGraph.getVertices();
    var i;
    
    for(i = 0; i < graphVertices.length; i++) {
      visited[graphVertices[i]] = false;
    }

    for(i = 0; i < graphVertices.length; i++) {
      if (!visited[graphVertices[i]]) {
        dfs(myGraph, graphVertices[i]);
      } 
    }
  }
}

var myGraph = new Graph();
myGraph.init(['A B','B C','C D','B H','H E','C E','E G','E F']);
dfsGraph(myGraph);

module.exports = dfsGraph