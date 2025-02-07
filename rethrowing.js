new Promise((resolve, reject) => {

    throw new Error("Error");
    //console.log("Whoops!");
  
  }).catch(function(error) {
  
    console.log("The error is handled, continue normally");
  
  }).try(() => 
    console.log("Next successful handler runs"));