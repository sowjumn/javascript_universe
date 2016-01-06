
function BinaryNode(value,left,right) {
  this.value = value;
  this.left = left || null;
  this.right = right  || null;
}

BinaryNode.prototype.getVal = function() {
  return this.value;
};

BinaryNode.prototype.getLeft = function() {
  return this.left;
};

BinaryNode.prototype.getRight = function() {
  return this.right;
};

module.exports = BinaryNode;