let obj1 = { 
    name: "Alice", 
    age: 25,
    laptop : {
        brand :"Hp",
        rom: 512,
        ram: 32
    }
};
let obj2 = structuredClone(obj1);

obj2.name = "Bob";

console.log(obj1); 
console.log(obj2); 
