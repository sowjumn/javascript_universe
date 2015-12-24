function SinglyListNode(value, next) {
  this.value = value;
  this.next = next || null;
}

SinglyListNode.prototype.getVal = function() {
  return this.value;
}

SinglyListNode.prototype.getNext = function() {
  return this.next;
}

module.exports = SinglyListNode;