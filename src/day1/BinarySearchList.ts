/**
 * array must be sorted!
 * [low, high) <- inclusive of low, exclusive of high
 */
export default function bs_list(haystack: number[], needle: number): boolean {
    let low = 0;
    let high = haystack.length;

    while (low < high) {
        let mid = Math.floor(low + (high - low) / 2);

        const v = haystack[mid];

        if (v === needle) {
            return true;
        } else if (v > needle) {
            // midpoint value greater than target
            // exclude top half
            high = mid;
        } else {
            // midpoint value less than target
            // exclude bottom half
            low = mid + 1;
        }
    }

    return false;
}
