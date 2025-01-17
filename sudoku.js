console.log(validSolution([
    [5, 3, 4, 6, 7, 8, 9, 1, 2],
    [6, 7, 2, 1, 9, 5, 3, 4, 8],
    [1, 9, 8, 3, 4, 2, 5, 6, 7],
    [8, 5, 9, 7, 6, 1, 4, 2, 3],
    [4, 2, 6, 8, 5, 3, 7, 9, 1],
    [7, 1, 3, 9, 2, 4, 8, 5, 6],
    [9, 6, 1, 5, 3, 7, 2, 8, 4],
    [2, 8, 7, 4, 1, 9, 6, 3, 5],
    [3, 4, 5, 2, 8, 6, 1, 7, 9]
])); // => true

console.log(validSolution([
    [5, 3, 4, 6, 7, 8, 9, 1, 2],
    [6, 7, 2, 1, 9, 0, 3, 4, 8],
    [1, 0, 0, 3, 4, 2, 5, 6, 0],
    [8, 5, 9, 7, 6, 1, 0, 2, 0],
    [4, 2, 6, 8, 5, 3, 7, 9, 1],
    [7, 1, 3, 9, 2, 4, 8, 5, 6],
    [9, 0, 1, 5, 3, 7, 2, 1, 4],
    [2, 8, 7, 4, 1, 9, 6, 3, 5],
    [3, 0, 0, 4, 8, 1, 1, 7, 9]
])); // => false


function validSolution(grid) {
    const MIN = 1, MAX = 9;

    // check rows

    for (let i = 0; i < grid.length; i++) {
        for (let val = MIN; val <= MAX; val++) {
            if (!grid[i].includes(val)) {
                return false;
            }
        }
    }

    // check columns

    for (let j = 0; j < grid.length; j++) {
        let arr = [];

        for (let i = 0; i < grid[j].length; i++) {
            arr.push(grid[i][j]);
        }

        for (let val = MIN; val <= MAX; val++) {
            if (!arr.includes(val)) {
                return false;
            }
        }
    }

    // check blocks

    for (let block = 1; block <= 9; block++) {
        let minI = Math.floor((block - 1) / 3) * 3;
        let minJ = (block - 1) % 3 * 3;
        let arr = [];

        for (let i = minI; i < minI + 3; i++) {
            for (let j = minJ; j < minJ + 3; j++) {
                arr.push(grid[i][j]);
            }
        }

        for (let val = MIN; val <= MAX; val++) {
            if (!arr.includes(val)) {
                return false;
            }
        }
    }

    return true;
}