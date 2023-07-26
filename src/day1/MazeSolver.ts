const dir = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
];

function walk(
    maze: string[],
    wall: string,
    curr: Point,
    end: Point,
    seen: boolean[][],
    path: Point[],
): boolean {
    // base case off map
    if (
        curr.x < 0 ||
        curr.x >= maze[0].length ||
        curr.y < 0 ||
        curr.y > maze.length
    ) {
        return false;
    }

    // base case are we on all
    if (maze[curr.y][curr.x] === wall) {
        return false;
    }

    // base case at end
    if (curr.x === end.x && curr.y === end.y) {
        path.push(end); // because we return before pushing into path
        return true;
    }

    // base case seen tile
    if (seen[curr.y][curr.x]) {
        return false;
    }

    // pre-recursion
    seen[curr.y][curr.x] = true;
    path.push(curr);

    // recursion
    for (let i = 0; i < dir.length; ++i) {
        const [x, y] = dir[i];
        const newCurr = {
            x: curr.x + x,
            y: curr.y + y,
        };

        if (walk(maze, wall, newCurr, end, seen, path)) {
            return true;
        }
    }

    // post-recursion
    path.pop();

    return false;
}

export default function solve(
    maze: string[],
    wall: string,
    start: Point,
    end: Point,
): Point[] {
    const seen: boolean[][] = [];
    const path: Point[] = [];

    for (let i = 0; i < maze.length; ++i) {
        seen.push(new Array(maze[0].length).fill(false));
    }

    walk(maze, wall, start, end, seen, path);

    return path;
}
