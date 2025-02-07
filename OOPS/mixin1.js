class User{
    constructor(name){
        this.name = name;
    }
    username(){
        return `${this.name} from Parent`;
    }
}
class Member extends User{
    username1 (){
        return this.username();
    }
}
let user = new Member("Nishanth");

console.log(user.username1());


// let UserMixin = {
//     username() {
//         return "Nishanth from Parent";
//     }
// };

// class Member {
//     username1() {
//         return this.username();
//     }
// }
// Object.assign(Member.prototype, UserMixin);

// let user = new Member();
// console.log(user.username1()); 
