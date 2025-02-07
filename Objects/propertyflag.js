let user = {
    name : "Nishanth",
}

Object.defineProperty(user, "name", {
    value : "Ragul",
    writable : true,
    enumerable : true,
    configurable : false
});

user.name = "Sanjai";

// console.log(user.name);

let a = Object.getOwnPropertyDescriptor(user, "name");

console.log(a);

