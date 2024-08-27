type Node<T> = {
    value: T;
    prev?: Node<T>;
    next?: Node<T>;
};

export default class DoublyLinkedList<T> {
    public length: number;
    private head?: Node<T>;

    constructor() {
        this.length = 0;
        this.head = undefined;
    }

    prepend(item: T): void {
        const newNode: Node<T> = { value: item };
        this.length++;

        if (!this.head) {
            this.head = newNode;
            return;
        }

        newNode.next = this.head;

        this.head.prev = newNode;
        this.head = newNode;
    }

    insertAt(item: T, idx: number): void {}
    append(item: T): void {}
    remove(item: T): T | undefined {}
    get(idx: number): T | undefined {}
    removeAt(idx: number): T | undefined {}
}
