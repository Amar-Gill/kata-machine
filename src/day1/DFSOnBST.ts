// Run time O(h) -- h = height of tree
// worst case O(n) and best case is O(log(n)) -- because splitting search space in half each iteration
// so O(h) is between O(n) and O(logn)
export default function dfs(
    head: BinaryNode<number> | null,
    needle: number,
): boolean {
    if (!head) {
        return false;
    }

    if (head.value === needle) {
        return true;
    }

    if (head.value < needle) {
        return dfs(head.right, needle);
    }

    return dfs(head.left, needle);
}
