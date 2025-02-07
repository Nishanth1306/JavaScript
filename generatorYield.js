function* gen() { 
    let result = yield "2 + 2 = ?";
    result = yield "1 + 2 = ?";
  }
  let generator = gen();
  let question = generator.next().value;
  console.log(question);

  question = generator.next().value;
  console.log(question);


