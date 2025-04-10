let promise1 = Promise.resolve(3);


const promise2 = new Promise((resolve, reject) =>
  setTimeout(resolve, 100, 'foo'),
);
const promises = [promise1, promise2];

Promise.allSettled(promises).then((results) =>
  results.forEach((result) => console.log(result.status)),
);

