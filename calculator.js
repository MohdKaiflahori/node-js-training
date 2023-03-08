const calculate = require("./module/operation");
const operation = process.argv[2];
const a = +process.argv[3];
const b = +process.argv[4];

switch (operation) {
  case "addition":
    console.log(calculate.addition(a, b));
    break;
  case "subtraction":
    console.log(calculate.subtraction(a, b));
    break;
  case "multiply":
    console.log(calculate.multiply(a, b));
    break;
  case "division":
    console.log(calculate.division(a, b));
    break;
  case "modulus":
    console.log(calculate.modulus(a, b));
    break;
    default : console.log("Choose a right operation ");
    break;
}
