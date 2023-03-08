const operation = require("./module/operation");
const a = +process.argv[2];
const b = +process.argv[3];
const output = operation.multiply(a,b);
console.log(output);
