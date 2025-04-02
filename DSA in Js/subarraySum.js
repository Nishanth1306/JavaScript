function findSubarrayWithSum(matrix, target) {
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            let sum = 0;
            let subarray = [];
            for (let k = j; k < matrix[i].length; k++) {
                sum += matrix[i][k];
                subarray.push(matrix[i][k]);
                if (sum === target) {
                    return subarray;
                }
            }
        }
    }
    return null;
}

let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
const target = 15;
console.log(findSubarrayWithSum(matrix, target)); 