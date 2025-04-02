function greet(name, sayGoodbye) {
  console.log("Hello, " + name);
  sayGoodbye();
}

function sayGoodbye() {
  console.log("Goodbye");
}



greet("Nishanth", sayGoodbye);
