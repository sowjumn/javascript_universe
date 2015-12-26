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
    console.log(nextPtr.value + '->');
    nextPtr = nextPtr.next;
  }
}

SinglyLinkedList.prototype.findMiddleElement = function() {
  var nextPtr = this.listHead;
  var doubleNextPtr = this.listHead;
  while (doubleNextPtr.next) {
    nextPtr = nextPtr.next;
    doubleNextPtr = doubleNextPtr.next.next;
  }
  console.log(nextPtr.value);
}

var myAwesomeList = new SinglyLinkedList();
myAwesomeList.addNodeToBegin('7');
myAwesomeList.addNodeToBegin('8');
myAwesomeList.addNodeToBegin('4');
myAwesomeList.addNodeToBegin('3');
myAwesomeList.addNodeToBegin('5');
myAwesomeList.addNodeToBegin('9');
myAwesomeList.addNodeToBegin('10');

myAwesomeList.printList();
myAwesomeList.findMiddleElement();