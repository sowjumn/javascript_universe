var BinaryNode = require('../BinaryNode');
var expect = require('chai').expect;
var assert = require('assert');

describe('BinaryNode', function() {
  describe('#getVal', function() {
    it('should return undefined when no value is passed', function() {
      var newNode = new BinaryNode();
      assert.equal("undefined", typeof newNode.getVal());
    });

    it('should return the correct value', function() {
      var newNode = new BinaryNode("first");
      assert.equal("first", newNode.getVal());
    });
  });

  describe('#getLeft', function() {
    it('should return null when no left node is initialized', function() {
      var newNode = new BinaryNode("first");
      //assert.equal(null, newNode.getLeft());
      expect(newNode.getLeft()).to.be.null;
    });

    it('should return the reference to the left node', function() {
      var leftNode = new BinaryNode("second");
      var newNode = new BinaryNode("first",leftNode);
      expect(newNode.getLeft()).to.equal(leftNode);
    });
  });
});