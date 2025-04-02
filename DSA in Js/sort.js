// let arr = [1,5,3,6,4,97,41,6];

// arr.sort((a,b) => b - a);

// console.log(arr);
let arr1 = [1, 2, 3, 4, 5,1,5];
let arr2 = new Set(arr1);
let arr = Array.from(arr2);
let target = 6;
let ans = [];
let numMap = new Map();

for (let i = 0; i < arr.length; i++) {
    let rem = target - arr[i];
    if (numMap.has(rem)) {
        ans.push([rem, arr[i]]);
    }
    numMap.set(arr[i], i);
}
console.log(...new Set(ans));

