class User{
    #name = "Nishanth";
    #salary = 100000;

    get employeeSalary(){
        return this.#calculateSalary();
    }
    #calculateSalary(){
        this.#salary = this.#salary + 1500;
        return this.#salary;
    }
}
let user = new User();

console.log(user.employeeSalary);

