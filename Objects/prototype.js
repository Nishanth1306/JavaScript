let user = {
    name : "Nishanth",
    age : 22,
    contact_Number : 9342559603,
    city : "Coimbatore",

    greet : function(){
        console.log("Hiii "+this.name);
    }
} 

console.log(user.__proto__)

console.log(user.prototype)