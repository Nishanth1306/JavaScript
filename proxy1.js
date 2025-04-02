let numbers = [0,100, 1, 2];
numbers = new Proxy(numbers, {
  get(target, prop) {
    if (prop in target) {
      return target[prop];
    } 
    else {
      return 0; 
    }
  }
});
numbers  = new Proxy(numbers,{
  set(target, prop, value){
    if(typeof value == 'number'){
      target[prop] = value;
      return true;
    }
    else{
      return false;
    }
  }
})
numbers.push("apple");
console.log(numbers)

