function User(name, age, tech){
    this.name = name,
    this.age = age,
    this.tech = tech
};

let user1 = new User();
user1.name = "Nishanth";


const name = user1.name ? user1.name : undefined;
console.log(name);


