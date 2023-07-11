type Node<T> = {
    value: T;
    prev?: Node<T>;
};

export default class Stack<T> {
    public length = 0;

    private h: Node<T> | undefined;

    push(item: T): void {
        this.length++;

        if (!this.h) {
            this.h = { value: item };
            return;
        }

        this.h = {
            value: item,
            prev: this.h,
        };
    }

    pop(): T | undefined {
        if (!this.h) {
            return undefined;
        }

        this.length--;

        if (this.length === 0) {
            const head = this.h;
            this.h = undefined;
            return head.value;
        }

        const node = this.h;

        this.h = this.h.prev;

        return node.value;
    }

    peek(): T | undefined {
        return this.h?.value;
    }
}
