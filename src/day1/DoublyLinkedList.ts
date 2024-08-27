type Node<T> = {
    value: T;
    prev?: Node<T>;
    next?: Node<T>;
};

export default class DoublyLinkedList<T> {
    public length: number;
    private head?: Node<T>;
    private tail?: Node<T>;

    constructor() {
        this.length = 0;
        this.head = undefined;
        this.tail = undefined;
    }

    prepend(item: T): void {
        const newNode: Node<T> = { value: item };
        this.length++;

        if (!this.head) {
            this.head = this.tail = newNode;
            return;
        }

        newNode.next = this.head;

        this.head.prev = newNode;
        this.head = newNode;
    }

    insertAt(item: T, idx: number): void {
        if (idx > this.length) {
            throw Error("Oh no");
        } else if (idx === this.length) {
            this.append(item);
            return;
        } else if (idx === 0) {
            this.prepend(item);
            return;
        }

        let curr = this.head;

        for (let i = 0; curr && i < idx; i++) {
            curr = curr.next;
        }

        this.length++;

        const node: Node<T> = { value: item };

        node.next = curr;
        node.prev = curr.prev;
        curr.prev = node;
        if (curr?.prev) {
            curr.prev.next = curr;
        }
    }

    append(item: T): void {}
    remove(item: T): T | undefined {}
    get(idx: number): T | undefined {}
    removeAt(idx: number): T | undefined {}
}
