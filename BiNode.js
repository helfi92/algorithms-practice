/*

  data structure called BiNode, which has pointers to 2 other nodes
  The data structure can be used to represent both a binary tree
  (where node1 is the left node and node2 is the right node) or a
  doubly linkedlist (where node1 is the previous node and node 2
  is the next node).

  Implement a method to convert a binary search tree (implemented with BiNode)
  into a doubly linkedlist. The values should be kept in order and the
  operation should be performed in place (that is, on the original data
  structure)


*/

function BiNode(value) {
  this.nodeValue = value;
  this.leftNode = null;
  this.rightNode = null;
}

function DoublyNode(value) {
  this.nodeValue = value;
  this.previous = null;
  this.next = null;
}

var newTree = null;
var queue = [];
var current = null,
    previous = null;

function convertBinaryToDoublyLinkedList(r) {
  //  We do BFS using a queue and a while loop
  queue.push(r);
  while(queue.length > 0) {
    current = queue.shift();

    if(!!current.leftNode) {
      queue.push(current.leftNode);
    }
    if(!!current.rightNode) {
      queue.push(current.rightNode);
    }

    //  Clean old
    delete current.leftNode;
    delete current.rightNode;

    //  Update with new doubly linkedlist property names
    current.next = queue[0];
    current.previous = previous;

    previous = current;
  }
  //  Return the converted list
  return r;
}

var root = new BiNode(5);
var child = new BiNode(2);
var childtwo = new BiNode(7);

root.leftNode = child;
child.rightNode = childtwo;

convertBinaryToDoublyLinkedList(root);
