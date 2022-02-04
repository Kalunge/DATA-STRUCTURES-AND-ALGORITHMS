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
// RemoveLast
// InsertLast
// GetAt
// Remove At

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

  size() {
    let node = this.head;
    let count = 0;

    while (node) {
      count++;
      node = node.next;
    }

    return count;
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    let node = this.head;

    while (node) {
      if (!node.next) {
        return node;
      }

      node = node.next;
    }

    return null;
  }

  clear() {
    this.head = null;
  }

  removeFirst() {
    this.head = this.head.next;
  }

  removeLast() {
    if (!this.head) {
      return null;
    }

    if (!this.head.next) {
      this.head = null;
      return;
    }

    let node = this.head;

    while (node) {
      if (!node.next.next) {
        node.next = null;
        return;
      }

      node = node.next;
    }
  }

  insertLast(data) {
    let last = this.getLast();

    if (last) {
      last.next = new Node(data);
    } else {
      this.head = new Node(data);
    }
  }

  getAt(index) {
    let count = 0;
    let node = this.head;

    while (node) {
      if (count === index) {
        return node;
      }
      count++;
      node = node.next;
    }
    return null;
  }

  removeAt(index) {
    
  }
}

module.exports = { Node, LinkedList };
