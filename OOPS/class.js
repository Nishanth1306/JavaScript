class User{
    // name = "Nishanth"
    // age = 22
    print(){
        console.log("Hii "+this.name)
    }
}

let user1 = new User();

let user2 = new User()
user2.name = "Jasmine";
user1.name = "Nishanth Sharma"
user1.print()
user2.print()