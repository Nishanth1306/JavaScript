
let user = {
    firstname : "Nishanth",
    lastname : "Sharma",

    printFullname : function(){
        console.log(this.firstname+" "+this.lastname);
    }
}
let user1 = {
    firstname : "Alice",
    lastname : "Bob",
}
user.printFullname.call(user1);


