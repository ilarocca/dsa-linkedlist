class _Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(item) {
    this.head = new _Node(item, this.head);
  }

  insertLast(item) {
    // if no head, insert item as head
    if (this.head === null) {
      this.insertFirst(item);
    } else {
      let tempNode = this.head;
      while (tempNode.next !== null) {
        tempNode = tempNode.next;
      }
      tempNode.next = new _Node(item, null);
    }
  }

  find(item) {
    let currNode = this.head;
    // if no head (no items avail), return null
    if (!this.head) {
      return null;
    }
    while (currNode.value !== item) {
      // no result found, return null
      if (currNode.next === null) {
        return null;
      } else {
        currNode = currNode.next;
      }
    }
    return currNode;
  }

  remove(item) {
    if (!this.head) {
      return null;
    }
    if (this.head.value === item) {
      this.head = this.head.next;
      return;
    }
    let currNode = this.head;
    let previousNode = this.head;

    while (currNode !== null && currNode.value !== item) {
      previousNode = currNode;
      currNode = currNode.next;
    }
    if (currNode === null) {
      console.log("Item not found");
      return;
    }
    previousNode.next = currNode.next;
  }

  insertBefore(newItem, nextItem) {
    // no items
    if (!this.head) {
      return null;
    }

    // try to insert before the first item, insertFirst
    if (this.head.value === nextItem) {
      this.insertFirst(newItem);
    }

    let currNode = this.head;
    let previousNode = this.head;
    // loop through until currNode === nextItem or null
    while (currNode !== null && currNode.value !== nextItem) {
      previousNode = currNode;
      currNode = currNode.next;
    }
    // if null, return not found
    if (currNode === null) {
      console.log("Item not found");
      return;
    }
    // if found, create newNode with value: newItem, next: currNode
    let newNode = new _Node(newItem, currNode);
    previousNode.next = newNode;
  }

  insertAfter(newItem, prevItem) {
    //make currNode === prevItem
    let currNode = this.find(prevItem);
    // after becomes that prevItem's next
    let afterNode = currNode.next;
    currNode.next = new _Node(newItem, afterNode);
  }

  insertAt(newItem, index) {
    let currIndex = 0;
    let currNode = this.head;

    while (currIndex !== index - 1) {
      currNode = currNode.next;
      currIndex++;
    }
    currNode.next = new _Node(newItem, currNode.next);
  }
}
function display(list) {
  let current = list.head;
  while (current) {
    console.log(current.value);
    current = current.next;
  }
}

function size(list) {
  let count = 0;
  let current = list.head;
  while (current) {
    current = current.next;
    count++;
  }
  console.log(count);
}

function isEmpty(list) {
  if (list.head !== null) {
    return false;
  } else {
    return true;
  }
}

function findPrevious(list, prevItem) {
  let count = 0;
  let index = 0;
  let current = list.head;
  // find prevItem index
  while (current.value !== prevItem) {
    current = current.next;
    index++;
  }
  // reset current, to loop again
  current = list.head;
  // change current until count matches index - 1 (prev)
  while (count < index - 1) {
    current = current.next;
    count++;
  }
  return current.value;
}

function findLast(list) {
  let current = list.head;
  while (current.next !== null) {
    current = current.next;
  }
  return current.value;
}

// Reverse a List
function reverseList(list) {
  let nextNode = list.head.next;
  let nextNextNode;
  let currentNode = list.head;
  currentNode.next = null;
  while (nextNode !== null) {
    nextNextNode = nextNode.next;
    nextNode.next = currentNode;
    currentNode = nextNode;
    nextNode = nextNextNode;
  }
  list.head = currentNode;
}

//Find Third From Last
function findThirdLast(list) {
  let current = list.head;
  let index = 0;
  let count = 0;
  while (current.next !== null) {
    current = current.next;
    index++;
  }

  if (index < 3) {
    console.log("List is under three items");
  } else {
    current = list.head;
    while (count < index - 2) {
      current = current.next;
      count++;
    }
    return current.value;
  }
}

// Find Middle of List
function middleOfList(list) {
  let current = list.head;
  let index = 0;
  let count = 0;
  while (current.next !== null) {
    current = current.next;
    index++;
  }

  index = index / 2;

  if (index < 3) {
    console.log("List is under three items");
  } else {
    current = list.head;
    while (count < index) {
      current = current.next;
      count++;
    }
    return current.value;
  }
}

function cycleList(list) {
  let slowNode = list.head;
  let fastNode = list.head;

  while (fastNode && fastNode.next) {
    slowNode = slowNode.next;
    fastNode = fastNode.next.next;
    if (slowNode === fastNode) {
      console.log("List contains a loop");
      return true;
    }
  }
  console.log("No loop!");
}

// function sortedList(list) {
//   let current = list.head;
//   let tempNode = list.head.next;
//   let result;

//   while (current !== null) {
//     if (current < tempNode) {
//       if (list.head < current) {
//         list.head.next = current;
//         current = tempNode;
//         tempNode = tempNode.next;
//       }
//       list.head = current;
//       current = tempNode;
//       tempNode = tempNode.next;
//     } else {
//       list.head.next = tempNode;
//       list.head.next.next = current;
//     }
//   }
// }

function main() {
  let SLL = new LinkedList();

  // SLL.insertFirst("Apollo");
  // SLL.insertFirst("Boomer");
  // SLL.insertFirst("Helo");
  // SLL.insertFirst("Husker");
  // SLL.insertFirst("Starbuck");

  // SLL.insertFirst("Tauhida");
  // SLL.remove("Husker");
  // SLL.insertBefore("Athena", "Boomer");
  // SLL.insertAfter("Hotdog", "Helo");
  // SLL.insertAt("Kat", 3);
  // SLL.remove("Tauhida");

  // display(SLL);
  // size(SLL);
  // console.log(isEmpty(SLL));
  // console.log(findPrevious(SLL, "Helo"));
  // console.log(findLast(SLL));
  // // reverseList(SLL);
  // console.log(findThirdLast(SLL));
  // console.log(middleOfList(SLL));
  // cycleList(SLL);

  SLL.insertFirst(1);
  SLL.insertFirst(2);
  SLL.insertFirst(4);
  SLL.insertFirst(8);
  SLL.insertFirst(3);
  display(SLL);
}

main();
// ~~~~ Myster Program: O(n ^ 2) ~~~~~
