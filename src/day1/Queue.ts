interface Node<T> {
    value: T;
    next?: Node<T>;
}

export default class Queue<T> {
    public length = 0;

    private h: Node<T> | undefined;
    private t: Node<T> | undefined;

    enqueue(item: T): void {
        const newNode: Node<T> = {
            value: item,
        };

        this.length++;

        if (this.t) {
            this.t.next = newNode;
            this.t = newNode;
            return;
        }

        this.h = this.t = newNode;
    }

    deque(): T | undefined {
        if (!this.h) {
            return undefined;
        }

        this.length--;

        const headNode = this.h;
        this.h = this.h.next;

        if (this.length === 0) {
            this.t = undefined;
        }

        return headNode.value;
    }

    peek(): T | undefined {
        return this.h?.value;
    }
}
