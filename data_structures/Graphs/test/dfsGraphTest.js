var dfsGraph = require('../dfsGraph');
var Graph = require('../Graph');
var expect = require('chai').expect;
var assert = require('assert');

describe('depth first search', function() {
  it('should traverse the graph in depth first search', function() {
    var myGraph = new Graph();
    myGraph.init(['A B','B C','C D','B H','H E','C E','E G','E F']);
    dfsGraph(myGraph);
  });
});