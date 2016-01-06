// Binary Search Tree is defined as follows:
// All elements in the left subtree of a node n are less than the contents of n and 
// all elements in the right subtree of a node n are greater than or equal to the contents of n
// If a binary search tree is traversed in inorder and the contents are printed the contents are printed in ascending order
// This is called Binary tree sort.
var BinaryTree = require('./BinaryTree');
var BinaryNode = require('./BinaryNode');

BinaryTree.prototype.buildSearchTree = function(arr) {
  var tempNode = null;
  var currentRoot = null;
  var parent = null;
  var i;

  this.root = new BinaryNode(arr[0]);

  for (i = 1; i < arr.length; i++) {
    tempNode = new BinaryNode(arr[i]);
    currentRoot = this.root;

    while (currentRoot) {
      parent = currentRoot;
      if (arr[i] < currentRoot.getVal()) {
        currentRoot = currentRoot.getLeft();
      } else {
        currentRoot = currentRoot.getRight();
      }
    }

    if (arr[i] < parent.getVal()) {
      parent.setLeft(tempNode);
    } else {
      parent.setRight(tempNode);
    }
  }
}

var bst = new BinaryTree();
bst.buildSearchTree([8,4,5,2,6]);
bst.inOrderTraversal(bst.root);