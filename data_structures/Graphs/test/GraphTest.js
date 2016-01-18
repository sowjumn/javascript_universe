var Graph = require('../Graph');
var expect = require('chai').expect;
var assert = require('assert');

describe('Graph', function() {
  describe('#init', function() {
    it('should initialize the graph with given data', function() {
      var myGraph = new Graph();
      //Initialize the undirectedgraph with edges
      myGraph.init(['A B','A D','A C','B C','C D']);
      expect(myGraph.getVertices()).to.eql(['A','B','C','D']);
    });
  });
});