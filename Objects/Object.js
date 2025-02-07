let user = {
    name : "Nishanth",
    age: 22,
    language : "Java",
    mobile_number : 9342559603,

    laptop : {
        brand : "hp",
        ram : 16,
        rom : 512,
        processor : "AMD 5000",
    }
}
console.log(user.laptop.speed ? user.laptop.speed : undefined);


