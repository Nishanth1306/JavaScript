function* myGenerator() {
    try {
      console.log("Start");
      const result = yield 'Waiting for value...';
      console.log('Result:', result);
    } catch (err) {
      console.log('Caught an error inside the generator:', err);
    }
  }
  
  const gen = myGenerator();
  
  console.log(gen.next()); 
  //console.log(gen.throw(new Error('Something went wrong!'))); 

  