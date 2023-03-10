const EveentEmitter = require("events");
const eventEmitter = new EveentEmitter();
const prompt = require("prompt");

eventEmitter.on("add", (number1, number2) => {
  const a = parseInt(number1) + parseInt(number2);
  console.log("Result is :", a);
});
eventEmitter.on("sub", (number1, number2) => {
  const a = parseInt(number1) - parseInt(number2);
  console.log("Result is :", a);
});
eventEmitter.on("multiply", (number1, number2) => {
  const a = parseInt(number1) * parseInt(number2);
  console.log("Result is :", a);
});
eventEmitter.on("division", (number1, number2) => {
  const a = parseInt(number1) / parseInt(number2);
  console.log("Result is :", a);
});
eventEmitter.on("mod", (number1, number2) => {
  const a = parseInt(number1) % parseInt(number2);
  console.log("Result is :", a);
});

prompt.start();
prompt.get(["operation", "number1", "number2"], function (err, result) {
  switch (result.operation) {
    case "add":
      eventEmitter.emit("add", result.number1, result.number2);
      break;
    case "sub":
      eventEmitter.emit("sub", result.number1, result.number2);

      break;
    case "multiply":
      eventEmitter.emit("multiply", result.number1, result.number2);

      break;
    case "division":
      eventEmitter.emit("division", result.number1, result.number2);

      break;
    case "mod":
      eventEmitter.emit("mod", result.number1, result.number2);
      break;
      default :
      console.log("Choose right operation");
      break;
  }
});
