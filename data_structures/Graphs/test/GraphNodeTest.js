var GraphNode = require('../GraphNode');
var expect = require('chai').expect;
var assert = require('assert');

describe('GraphNode', function() {
  describe('#getValue', function() {
    it('should return undefined when no value is stored in the node', function() {
      var myGraphNode = new GraphNode();
      assert.equal("undefined", typeof myGraphNode.getValue());
    });

    it('should return the value stored in the node', function() {
      var myGraphNode = new GraphNode(2);
      assert.equal(2, myGraphNode.getValue());
    });
  });

  describe('#getNext', function() {
    it('should return null when there is no next node to refer', function() {
      var myGraphNode = new GraphNode();
      expect(myGraphNode.getNext()).to.be.null;
    });

    it('should return the reference to next node', function() {
      var myNextGraphNode = new GraphNode(4);
      var myGraphNode = new GraphNode(2,myNextGraphNode);
      expect(myGraphNode.getNext()).to.equal(myNextGraphNode);
    });
  });

  describe('#setValue', function() {
    it('should set the value of the node', function() {
      var myGraphNode = new GraphNode();
      expect(typeof myGraphNode.getValue()).to.equal('undefined');
      myGraphNode.setValue(2);
      expect(myGraphNode.getValue()).to.equal(2);
    });
  });

  describe('#setNext', function() {
    it('should set the reference to the next node', function() {
      var myNextGraphNode = new GraphNode();
      var myGraphNode = new GraphNode();
      myGraphNode.setNext(myNextGraphNode);
      expect(myGraphNode.getNext()).to.equal(myNextGraphNode);
    });
  });

  describe('#hasNext', function() {
    it('should return true if the node has a next node', function() {
      var myNextGraphNode = new GraphNode();
      var myGraphNode = new GraphNode();
      myGraphNode.setNext(myNextGraphNode);
      expect(myGraphNode.hasNext()).to.equal(true);
    });

    it('should return false if the node doesnot have a next node', function() {
      var myGraphNode = new GraphNode();
      expect(myGraphNode.hasNext()).to.equal(false);
    });
  });
});