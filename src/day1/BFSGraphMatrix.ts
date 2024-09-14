export default function bfs(
    graph: WeightedAdjacencyMatrix,
    source: number,
    needle: number,
): number[] | null {
    const seen: boolean[] = new Array(graph.length).fill(false);
    const prev: number[] = new Array(graph.length).fill(-1);

    seen[source] = true;

    const q: number[] = [source]; // TODO use actual Queue DS

    while (q.length) {
        const curr = q.shift() as number;

        if (curr === needle) {
            break;
        }

        const adjacencies = graph[curr];
        for (let i = 0; i < adjacencies.length; i++) {
            if (adjacencies[i] === 0) {
                continue;
            }

            if (seen[i]) {
                continue;
            }

            seen[i] = true;
            prev[i] = curr;
            q.push(i);
        }
    }

    if (prev[needle] === -1) {
        return null;
    }

    // build it backwards
    let curr = needle;
    const out: number[] = [];

    while (prev[curr] !== -1) {
        out.push(curr);
        curr = prev[curr];
    }

    return [source].concat(out.reverse());
}

