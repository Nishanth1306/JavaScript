class Parent {
    constructor(name) {
        this.name = name;
    }
}
class Child extends Parent {
    constructor(...args){
        super(...args);
    }
} 

const child = new Child("Nishanth");
console.log(child.name); 
