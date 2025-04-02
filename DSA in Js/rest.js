function collectElements(...elements) {
    console.log(elements); 
}

let arr1 = [1, 2, 4, 5, 7, 8];
let arr2 = [10, 11, 12, 13, 14];

collectElements(...arr1, ...arr2); 
