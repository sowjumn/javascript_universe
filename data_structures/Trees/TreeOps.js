var BinaryTree = require('./BinaryTree');

BinaryTree.prototype.depth = function(currRoot) {
  if (currRoot) {
    return Math.max(this.depth(currRoot.getLeft()), this.depth(currRoot.getRight())) + 1;
  } else {
    return -1;
  }
}

BinaryTree.prototype.levelOrderTraversal = function() {
  var myQueue = [];
  var currRoot = this.root;
  myQueue.push(currRoot);

  while (currRoot = myQueue.shift()) {
    if (currRoot.hasLeft()) {
      myQueue.push(currRoot.getLeft());
    } 

    if (currRoot.hasRight()) {
      myQueue.push(currRoot.getRight());
    }
    
    console.log(currRoot.getVal());
  }
}

BinaryTree.prototype.iterativeDepth = function() {
  var currRoot = this.root;
  var myQueue = [];
  var depth = -1;
  var nodesInCurrentLevel = 1;
  var nodesInNextLevel = 0;

  myQueue.push(currRoot);

  while (currRoot = myQueue.shift()) {
    nodesInCurrentLevel -= 1;
    nodesInNextLevel += currRoot.getDegree();

    process.stdout.write(String(currRoot.getVal()));

    if (currRoot.hasLeft()) {
      myQueue.push(currRoot.getLeft());
    }

    if (currRoot.hasRight()) {
      myQueue.push(currRoot.getRight());
    }

    if (nodesInCurrentLevel === 0) {
      nodesInCurrentLevel = nodesInNextLevel;
      nodesInNextLevel = 0;
      process.stdout.write('\n');
      depth += 1;
    }
  }

  console.log(depth);
}

BinaryTree.prototype.isBSTUtil = function(myNode, min, max) {
  if (!myNode) {
    return true;
  }

  if ((myNode.getVal() < min) || (myNode.getVal() > max)) {
    return false;
  }

  return this.isBSTUtil(myNode.getLeft(), min, myNode.getVal()-1) &&
    this.isBSTUtil(myNode.getRight(), myNode.getVal()+1, max);
}

BinaryTree.prototype.isBST = function() {
 return this.isBSTUtil(this.root, Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER)
}

var myBTree = new BinaryTree();
myBTree.buildCompleteTree([4,3,6,1,2,5,7]);
// console.log(myBTree.depth(myBTree.root));

// myBTree.levelOrderTraversal();
//myBTree.iterativeDepth();
console.log(myBTree.isBST());