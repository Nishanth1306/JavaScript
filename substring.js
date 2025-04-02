let str1 = "abckjp";
let str2 = "ackjep";

let ans = '';

for(let i = 0;i<str1.length && i < str2.length;i++){
    if(str1.charAt(i) === str2.charAt(i)){
        ans += str1.charAt(i);
    }
    else{
        ans = '';
    }
}

console.log(ans);