const EveentEmitter = require("events");
const eventEmitter = new EveentEmitter();
const prompt = require("prompt");

eventEmitter.on('add' (number1 , number2) => {
    number1 + number2
});
eventEmitter.on('sub' (number1 , number2) =>  {
    number1 - number2
}
)
eventEmitter.on('multiply' (number1 , number2) =>  {number1 * number2})
eventEmitter.on('division' (number1 , number2) =>  { number1 / number2})
eventEmitter.on('mod' (number1 , number2) =>  {number1 % number2})

prompt.start();
prompt.get(["operation", "number1", "number2"], function (err, result) {
  switch (result) {
    case "add":
      console.log(eventEmitter.emit("add"));
      break;
    case "sub":
      console.log(eventEmitter.emit("sub"));
      break;
    case "multiply":
      console.log(eventEmitter.emit("multiply"));
      break;
    case "division":
      console.log(eventEmitter.emit("division"));
      break;
    case "mod":
      console.log(eventEmitter.emit("mod"));
      break;
  }
});
