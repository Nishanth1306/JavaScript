let greet = () => {
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve("Success");
        }, 3000);
    })
}
greet().then((message)=>{
    console.log(`${message}`);
})
.catch((message)=>{
    console.log(`${message}`);
})