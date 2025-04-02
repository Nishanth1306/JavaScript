let n  = 89;

let sum = 0;
let num = n;

while(num > 0){
    sum += num%10;
    console.log(sum);
    num/=10;
    console.log(num);
}

console.log(sum);