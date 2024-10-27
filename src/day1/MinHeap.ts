export default class MinHeap {
    public length: number;
    private data: number[];

    constructor() {
        this.length = 0;
        this.data = [];
    }

    insert(value: number): void {
        // 1. Add new value to end of tree
        this.data[this.length] = value;
        // 2. Bubble up the new value to correct position
        this.heapifyUp(this.length);
        this.length++;
    }

    // AKA poll / pop
    delete(): number {
        if (this.length === 0) {
            return -1;
        }

        // 1. Save reference to min value at top of heap
        const out = this.data[0];
        this.length--;

        if (this.length === 0) {
            this.data = [];
            return out;
        }

        // 2. Move max value at end of tree to root of tree
        this.data[0] = this.data[this.length];
        // 3. Bubble down the value to the correct position
        this.heapifyDown(0);

        // 4. Return the reference to min value that was saved
        return out;
    }

    private heapifyDown(idx: number): void {
        if (idx >= this.length) {
            return;
        }

        const lIdx = this.leftChild(idx);
        const rIdx = this.rightChild(idx);

        // because we fill in tree levels from left to right
        if (lIdx >= this.length) {
            return;
        }

        const lV = this.data[lIdx];
        const rV = this.data[rIdx];
        const v = this.data[idx];

        // If left value >= right value and the target value is greater than right value
        // Swap right value with target value
        // Then bubble down the right node (which is now the target value)
        if (lV >= rV && v >= rV) {
            this.data[idx] = rV;
            this.data[rIdx] = v;
            this.heapifyDown(rIdx);
            // Else if right value >= left value and the target value is greater than left value
            // Swap left value with target value
            // Then bubble down the left node (which is now the target value)
        } else if (rV >= lV && v >= lV) {
            this.data[idx] = lV;
            this.data[lIdx] = v;
            this.heapifyDown(lIdx);
        }
    }

    private heapifyUp(idx: number): void {
        if (idx === 0) {
            return;
        }

        // get reference to target node and parent node
        const pIdx = this.parent(idx);
        const parentV = this.data[pIdx];
        const v = this.data[idx];

        // if parent node > target node, swap the nodes
        // then recursively bubble up from the parent node (which has been updated to target value)
        if (parentV > v) {
            this.data[idx] = parentV;
            this.data[pIdx] = v;
            this.heapifyUp(pIdx);
        }
    }

    private parent(idx: number): number {
        return Math.floor((idx - 1) / 2);
    }

    private leftChild(idx: number): number {
        return idx * 2 + 1;
    }

    private rightChild(idx: number): number {
        return idx * 2 + 2;
    }
}
