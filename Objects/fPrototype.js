function Person(name){
    this.name = name
}

Person.prototype.greet = function(){
    console.log(`Hello ${this.name}`)
}

let user1 = new Person("Nishanth")
let user2 = new Person("Ragul")



user1.greet()
user2.greet()