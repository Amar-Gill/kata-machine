export function test_list(list: List<number>): void {
  list.append(5);
  list.append(7);
  list.append(9);

  expect(list.get(2)).toEqual(9);
  expect(list.removeAt(1)).toEqual(7);
  expect(list.length).toEqual(2);
  expect(list.get(2)).toBeUndefined(); // new test

  list.append(11);
  expect(list.removeAt(1)).toEqual(9);
  expect(list.remove(9)).toEqual(undefined);
  expect(list.removeAt(0)).toEqual(5);
  expect(list.removeAt(0)).toEqual(11);
  expect(list.length).toEqual(0);

  list.prepend(5);
  list.prepend(7);
  list.prepend(9);

  expect(list.get(2)).toEqual(5);
  expect(list.get(0)).toEqual(9);
  expect(list.remove(9)).toEqual(9);
  expect(list.length).toEqual(2);
  expect(list.get(0)).toEqual(7);

  // new tests
  list.insertAt(8, 2);
  expect(list.get(0)).toEqual(7);
  expect(list.get(1)).toEqual(5);
  expect(list.get(2)).toEqual(8);
  expect(list.length).toEqual(3);

  list.insertAt(69, 10);
  expect(list.get(0)).toEqual(7);
  expect(list.get(1)).toEqual(5);
  expect(list.get(2)).toEqual(8);
  expect(list.get(10)).toEqual(69);
  expect(list.length).toEqual(11);

  list.insertAt(42, 3);
  expect(list.get(0)).toEqual(7);
  expect(list.get(1)).toEqual(5);
  expect(list.get(2)).toEqual(8);
  expect(list.get(3)).toEqual(42);
  expect(list.get(11)).toEqual(69);
  expect(list.length).toEqual(12);
}
