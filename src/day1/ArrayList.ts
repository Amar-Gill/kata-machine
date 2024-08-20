export default class ArrayList<T> {
  public length: number;
  private a: Array<T | undefined>;

  constructor(capacity: number) {
    this.length = 0
    this.a = new Array(capacity).fill(undefined)
  }

  prepend(item: T): void { }

  insertAt(item: T, idx: number): void { }

  // O(1) if within capacity (initial length)
  // otherwise O(N) if we need to grow the array because each el must be copied into new array
  append(item: T): void {
    if (this.a.length === this.length) {
      this.a = this.a.concat(new Array(this.length).fill(undefined))
    }

    this.a[this.length] = item;

    this.length++;
  }

  remove(item: T): T | undefined {
    let removedElement: T | undefined;
    let idx = -1;

    // iterate through array and find the item and it's index
    for (let i = 0; i < this.length; i++) {
      if (this.a[i] === item) {
        removedElement = this.a[i]
        idx = i;
        break;
      }
    }

    // if element was found, we must shift the rest of the array elements
    // that's why we initialize idx to -1 so we can use it in condition
    if (idx >= 0) {
      // set el at idx to undefined and shift elements
      for (let i = idx; i < this.length; i++) {
        if (i === idx) {
          this.a[i] = undefined;
          continue;
        }
        this.a[i - 1] = this.a[i]
      }

      // release last el
      this.a[this.length - 1] = undefined;

      this.length--
    }

    return removedElement;
  }

  get(idx: number): T | undefined {
    if (idx > this.length) {
      return undefined;
    }

    return this.a.at(idx);
  }

  removeAt(idx: number): T | undefined {
    if (idx > this.length) {
      return undefined;
    }

    const el = this.a.at(idx);

    for (let i = 0; i < this.length; i++) {
      // up to and including idx array can remain unchanged
      if (i <= idx) {
        continue;
      }
      // shift back everything after idx
      this.a[i - 1] = this.a[i]
    }

    // release last el
    this.a[this.length - 1] = undefined;


    this.length--

    return el;
  }
}
