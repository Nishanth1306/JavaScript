
function print(n){
    if(n === 1){
        console.log(1);
    }
    else{
        console.log(n);
        print(n-1);
    }
}

print(5)