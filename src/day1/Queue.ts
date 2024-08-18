type Node<T> = {
  value: T,
  next?: Node<T>
}

export default class Queue<T> {
  public length: number;
  private head?: Node<T>
  private tail?: Node<T>


  constructor() {
    this.head = this.tail = undefined;
    this.length = 0;
  }

  // O(1)
  enqueue(item: T): void {
    this.length++

    const node = { value: item }

    if (this.tail) {
      this.tail.next = node;
    } else {
      this.head = node;
    }

    this.tail = node;
  }

  // O(1)
  deque(): T | undefined {
    const head = this.head;

    if (this.head) {
      this.head = this.head.next;
      this.length--
    }

    if (this.length === 0) {
      this.tail = undefined;
    }

    // free memory
    if (head) {
      head.next = undefined;
    }

    return head?.value;
  }

  // O(1)
  peek(): T | undefined {
    return this.head?.value;
  }
}
