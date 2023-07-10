/**
 * O(sqrt(N))
 */
export default function two_crystal_balls(breaks: boolean[]): number {
    const jump = Math.floor(Math.sqrt(breaks.length));

    let low = 0;
    let high = jump;

    // if breaks[high] = true
    // walk back to low
    // and perform linear search until true
    // else high = high + jump and low = low + jump

    while (high <= breaks.length) {
        if (breaks[high]) {
            for (let index = low; index < high; index++) {
                if (breaks[index]) {
                    return index;
                }
            }
        }
        low += jump;
        high += jump;
    }

    return -1;
}
