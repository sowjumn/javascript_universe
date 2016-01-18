function GraphNode(value, next) {
  this.value = value;
  this.next = next || null;
}

GraphNode.prototype.getValue = function() {
  return this.value;
};

GraphNode.prototype.getNext = function() {
  return this.next;
};

GraphNode.prototype.setValue = function(value) {
  this.value = value;
};

GraphNode.prototype.setNext = function(next) {
  this.next = next;
}

GraphNode.prototype.hasNext = function() {
  return !!(this.next !== null);
}


module.exports = GraphNode;