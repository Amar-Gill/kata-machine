type Node<T> = {
  value: T,
  prev?: Node<T>
}

export default class Stack<T> {
  public length: number;
  private head?: Node<T>


  constructor() {
    this.head = undefined;
    this.length = 0;
  }

  // O(1)
  push(item: T): void {
    this.length++;

    const node: Node<T> = { value: item }

    if (this.head) {
      node.prev = this.head;
    }

    this.head = node;
  }

  // O(1)
  pop(): T | undefined {
    this.length = Math.max(0, this.length - 1);

    if (this.length === 0) {
      const head = this.head;

      this.head = undefined;

      return head?.value;
    }

    const head = this.head;

    this.head = head?.prev;

    return head?.value;
  }

  // O(1)
  peek(): T | undefined {
    return this.head?.value;
  }
}
