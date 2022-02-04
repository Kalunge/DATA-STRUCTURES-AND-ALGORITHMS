// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

// A Node
// Insert First
// size
// GetFirst
// GetLast
// Clear
// RemoveFirst

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor(head = null) {
    this.head = head;
  }

  insertFirst(data) {
    this.head = new Node(data, this.head);
  }

 
}

module.exports = { Node, LinkedList };
