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
// InsertAt
// forEach

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
    if (!this.head) {
      return;
    }

    if (index === 0) {
      this.head = this.head.next;
      return;
    }

    let node = this.head;
    let count = 0;

    while (node) {
      if (count === index - 1) {
        if (!node || !node.next) {
          return;
        }
        node.next = node.next.next;
      }
      count++;
      node = node.next;
    }

    return null;
  }

  insertAt(data, index) {
    if (!this.head) {
      this.head = new Node(data);
      return;
    }

    if (index === 0) {
      this.head = new Node(data, this.head);
      return;
    }

    let previous = this.getAt(index - 1) || this.getLast();

    // if (!previous) {
    //   this.getLast().next = new Node(data);
    //   return
    // }

    previous.next = new Node(data, previous.next);
  }

  forEach(fn) {
    let node = this.head;

    while (node) {
      fn(node);
      node = node.next;
    }
  }
}

module.exports = { Node, LinkedList };
