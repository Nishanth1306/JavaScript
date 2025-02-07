class User{
    #name;
    #salary;

    constructor(name , salary){
        this.#name = name;
        this.#salary = salary;
    }
    get employeeName(){
        return this.#name;
    }
    get employeeSalary(){
        return this.#calculateSalary();
    }
    #calculateSalary(){
        this.#salary = this.#salary + 1500;
        return this.#salary;
    }
}
let user = new User("Nishanth" , 60000);

console.log(user.employeeName);

