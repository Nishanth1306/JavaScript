let user = {
    name : "Nishanth",
    age : 22,
} 

console.log(user.hasOwnProperty('name'));
console.log(typeof(user));
let user1 = {
    name: "Saravanan",
    age : 25,
}

let user2 = Object.assign({}, user, user1 );

console.log(user2);