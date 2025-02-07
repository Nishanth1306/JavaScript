//"Use Strict"
var name = "x"
let user = {
    name :"Nishanth",
    age: 22,

    greet : function() {
        console.log(this);
    }

}
user.greet();

