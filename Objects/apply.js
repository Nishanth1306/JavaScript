let user = {
    firstname: "Nishanth",
    lastname: "Sharma",

    printFullname: function(city) {
        console.log(this.firstname + " " + this.lastname +" "+this.city);
    }
};

let user1 = {
    firstname: "Alice",
    lastname: "Bob",
};


user.printFullname.apply(user1,[Coimbatore]);
