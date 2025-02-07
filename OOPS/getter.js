class User{
    // set username(name){
    //     this.name = name;
    // }
    #name = "Nishanth"
    print(){
        console.log("Hiii "+this.#name);
    }
    set username(name){
        this.name = name;
    }
    get username(){
        return this.name;
    }
    
}
let user1 = new User();
user1.name = "Sharma";

user1.print()


