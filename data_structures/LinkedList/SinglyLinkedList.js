var SinglyListNode = require('./SinglyListNode');

function SinglyLinkedList() {
  this.listHead = null;
}

SinglyLinkedList.prototype.addNodeToBegin = function(val) {
  var newTempNode = new SinglyListNode(val);
  newTempNode.next = this.listHead;
  this.listHead = newTempNode;
}

SinglyLinkedList.prototype.printList = function() {
  var nextPtr = this.listHead;
  while (nextPtr) {
    console.log(nextPtr.value);
    nextPtr = nextPtr.next;
  }
}

var myAwesomeList = new SinglyLinkedList();
myAwesomeList.addNodeToBegin('S');
myAwesomeList.addNodeToBegin('M');
myAwesomeList.addNodeToBegin('N');

myAwesomeList.printList();