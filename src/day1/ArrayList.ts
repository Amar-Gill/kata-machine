export default class ArrayList<T> {
  public length: number;
  private a: Array<T | undefined>;

  constructor(length: number) {
    this.length = length;
    this.a = new Array(length).fill(undefined)
  }

  prepend(item: T): void { }

  insertAt(item: T, idx: number): void { }

  // O(1) if within capacity (initial length)
  // otherwise O(N) if we need to grow the array because each el must be copied into new array
  append(item: T): void {
    if (this.a.length === this.length) {
      this.a = this.a.concat(new Array(this.length).fill(undefined))
    }

    this.length++;

    this.a.push(item);

  }

  remove(item: T): T | undefined {
    return;
  }
  get(idx: number): T | undefined {
    return;
  }
  removeAt(idx: number): T | undefined {
    return;
  }
}