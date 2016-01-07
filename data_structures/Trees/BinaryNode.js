function BinaryNode(value,left,right,parent) {
  this.value = value;
  this.left = left || null;
  this.right = right  || null;
  this.parent = parent || null;
}

BinaryNode.prototype.getVal = function() {
  return this.value;
};

BinaryNode.prototype.setLeft = function(nod) {
  this.left = nod || null;
}

BinaryNode.prototype.getLeft = function() {
  return this.left;
};

BinaryNode.prototype.hasLeft = function() {
  return !!this.left;
}

BinaryNode.prototype.setRight = function(nod) {
  this.right = nod || null;
}

BinaryNode.prototype.getRight = function() {
  return this.right;
};

BinaryNode.prototype.hasRight = function() {
  return !!this.right;
}

BinaryNode.prototype.getParent = function() {
  return this.parent;
}

BinaryNode.prototype.getDegree = function() {
  var degree = 0;
  if (this.hasLeft()) {
    degree += 1;
  }
  if (this.hasRight()) {
    degree += 1;
  }
  return degree;
}

module.exports = BinaryNode;