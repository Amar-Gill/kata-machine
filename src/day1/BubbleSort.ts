export default function bubble_sort(arr: number[]): void {
    let L = arr.length;

    while (L > 0) {
        for (let index = 0; index < L; index++) {
            if (arr[index] > arr[index + 1]) {
                const left = arr[index];
                const right = arr[index + 1];
                arr[index] = right;
                arr[index + 1] = left;
            }
        }
        L -= 1;
    }
}
