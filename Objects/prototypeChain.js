let person = {
    name : "Nishanth",
    greet : function(){
        console.log("Hiii , Good Morning")
    }
}
let user = Object.create(person);
console.log(user.name);
user.greet();
//this is Prototypal Chaining



