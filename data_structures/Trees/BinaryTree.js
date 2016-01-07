var BinaryNode = require('./BinaryNode');

function BinaryTree(root) {
  this.root = root;
}

BinaryTree.prototype.buildCompleteTree = function(arr) {
  var i;
  var tempNode = null;
  var currentRoot = null;

  arr = arr.map(Number);
  this.root = new BinaryNode(arr[0]);
  currentRoot = this.root;

  for (i = 1; i < arr.length; i++) {
    tempNode = new BinaryNode(arr[i]);
    while (currentRoot) {
      if (currentRoot.hasLeft() && currentRoot.hasRight()) {
        // case where the current root has both left and right children
        currentRoot = currentRoot.getLeft();
      } else if (currentRoot.hasLeft()) {
        // insert the new node as the right child
        currentRoot.setRight(tempNode);
        break;
      } else {
        // case where the current root doesnot have both children insert the node as the left child
        currentRoot.setLeft(tempNode);
        break;
      }
    }
  }

  currentRoot = null;
  tempNode = null;
}

BinaryTree.prototype.preOrderTraversal = function(myRoot) {
  if (myRoot) {
    console.log(myRoot.getVal());
    this.preOrderTraversal(myRoot.getLeft());
    this.preOrderTraversal(myRoot.getRight());
  }
}

BinaryTree.prototype.inOrderTraversal = function(myRoot) {
  if (myRoot) {
    this.inOrderTraversal(myRoot.getLeft());
    console.log(myRoot.getVal());
    this.inOrderTraversal(myRoot.getRight());
  }
}

BinaryTree.prototype.postOrderTraversal = function(myRoot) {
  if (myRoot) {
    this.postOrderTraversal(myRoot.getLeft());
    this.postOrderTraversal(myRoot.getRight());
    console.log(myRoot.getVal());
  }
}

module.exports = BinaryTree;

// var myBTree = new BinaryTree();
// myBTree.buildCompleteTree([1,2,3,4]);
// myBTree.preOrderTraversal(myBTree.root);
// myBTree.inOrderTraversal(myBTree.root);
// myBTree.postOrderTraversal(myBTree.root);
