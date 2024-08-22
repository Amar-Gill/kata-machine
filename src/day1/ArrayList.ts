export default class ArrayList<T> {
  public length: number;
  private a: Array<T | undefined>;

  constructor(capacity: number) {
    this.length = 0
    this.a = new Array(capacity).fill(undefined)
  }

  // O(N)
  prepend(item: T): void {
    if (this.a.length === this.length) {
      this.a = this.a.concat(new Array(this.length).fill(undefined))
    }

    const newArray = new Array(this.a.length);
    newArray[0] = item;

    for (let i = 0; i < this.length; i++) {
      newArray[i + 1] = this.a[i];
    }

    this.length++

    this.a = newArray;
  }

  // O(N)
  insertAt(item: T, idx: number): void {
    // if idx within length, new length is length+1
    // else new length is the given idx + 1
    // and we must grow array
    const newListLength = Math.max(this.length + 1, idx + 1);

    const newArray = new Array(newListLength).fill(undefined);

    for (let i = 0; i < newListLength; ++i) {
      if (i < idx) {
        newArray[i] = this.a.at(i) || undefined;
      } else if (idx === i) {
        newArray[i] = item;
      } else {
        newArray[i + 1] = this.a.at(i) || undefined
      }
    }

    this.a = newArray;
    this.length = newListLength;
  }

  // O(1) if within capacity (initial length)
  // otherwise O(N) if we need to grow the array because each el must be copied into new array
  append(item: T): void {
    if (this.a.length === this.length) {
      this.a = this.a.concat(new Array(this.length).fill(undefined))
    }

    this.a[this.length] = item;

    this.length++;
  }

  // O(N)
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

  // O(1)
  get(idx: number): T | undefined {
    if (idx > this.length) {
      return undefined;
    }

    return this.a.at(idx);
  }

  // O(N)
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
