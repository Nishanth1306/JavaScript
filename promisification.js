

// let p = new Promise(greet =() => {
//     console.log("Hii Good Morning");
// });
// console.log(p);
let greet = () =>{
    return new Promise ((resolve, reject)=> {
        console.log("Hii Good Morning");
        reject();
        
    })
}

greet().then(()=>{
    console.log("resolved");
})
.catch(()=>{
    console.error("Error");
})