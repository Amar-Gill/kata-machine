// must be sorted array
// typically do low inclusive and high exclusive so [Low, High) or [left, right)
// therefore loop condition is left < right and not left <= right
// O(logN)
export default function bs_list(haystack: number[], needle: number): boolean {
  let left = 0;
  let right = haystack.length;

  while (left < right) {
    const midpoint = Math.floor(left + (right - left) / 2);

    if (haystack[midpoint] === needle) {
      return true;
    } else if (haystack[midpoint] < needle) {
      left = midpoint + 1;
    } else {
      right = midpoint;
    }
  }

  return false;
}
