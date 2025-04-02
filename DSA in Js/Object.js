let obj = {
    name : "Nishanth",
    age : 22,
    Language : "Java",
}

obj.age = 30;

// let value = [];

// value.push(Object.values(obj));

Object.entries(obj).forEach(([key, value]) => {
    console.log(`key : ${key} and  value : ${value}`);
});
