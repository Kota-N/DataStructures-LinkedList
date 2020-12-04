function Node(value) {
  this.value = value;
  this.next = null;
}

class LinkedList {
  constructor(value) {
    this.head = new Node(value);
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newNode = new Node(value);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return newNode;
  }

  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return newNode;
  }

  printList() {
    const array = [];
    let currentNode = this.head;
    while (currentNode) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return array;
  }

  traverseToIndex(index) {
    if (index < 0 || index >= this.length) return null;

    let currentNode = this.head;
    for (let i = 0; i < index; i++) {
      currentNode = currentNode.next;
    }
    return currentNode;
  }

  insert(index, value) {
    if (index === 0) return this.prepend(value);
    if (index >= this.length) return this.append(value);

    const newNode = new Node(value);

    const leadingNode = this.traverseToIndex(index - 1);
    const follwingNode = leadingNode.next;

    leadingNode.next = newNode;
    newNode.next = follwingNode;

    this.length++;

    return newNode;
  }

  pop() {
    const newTail = this.traverseToIndex(this.length - 2);
    const poppedNode = newTail.next;

    newTail.next = null;
    this.tail = newTail;

    this.length--;

    return poppedNode.value;
  }

  remove(index) {
    if (index === 0) {
      const removedValue = this.head.value;
      this.head = this.head.next;
      this.length--;
      return removedValue;
    }

    const leadingNode = this.traverseToIndex(index - 1);
    const nodeToRemove = leadingNode.next;

    leadingNode.next = nodeToRemove.next;

    this.length--;

    return nodeToRemove.value;
  }
}

const test = new LinkedList('b');
test.append('c');
test.prepend('a');
test.insert(2, 45);
test.insert(2, 'wow');
test.remove(2);
console.log(test.printList());
