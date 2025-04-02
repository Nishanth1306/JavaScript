let map = new Map();

let arr = [1,2,3,4,5,1,2,4];

for(let num of arr){
    map.set(num, (map.get(num) || 0) +1 );


}
map.forEach((value, key) =>{
    console.log(`Key :${key}, value : ${value}`);
})