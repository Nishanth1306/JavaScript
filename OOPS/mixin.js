class Parent {
    constructor(name) {
        this.name = name;
    }
    setName(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
}
class Child {
    constructor(name) {
        Parent.call(this, name); 
    }
}
Object.assign(Child.prototype, Parent.prototype);

let child = new Child("Nishanth ");
console.log(child.getName());
