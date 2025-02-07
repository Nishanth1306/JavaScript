class User{
    static name = "Nishanth";
    static salary = 60000;

    static set employeeSalary(salary){
        User.salary = salary;
    }

    static get employeeSalary(){
        return User.salary;
    }
}

console.log(User.employeeSalary);