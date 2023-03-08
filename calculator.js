const calculate = require("./module/operation");
const operation = process.argv[2];
const a = +process.argv[3];
const b = +process.argv[4];

if(operation === "addition"){
    console.log(calculate.addition(a,b));
} else 
if(operation === "subtraction"){
    console.log(calculate.subtraction(a,b));
} else 
if(operation === "multiply"){
    console.log(calculate.multiply(a,b));
}else 
if(operation === "division"){
    console.log(calculate.division(a,b));
}else 
if(operation === "modulus"){
    console.log(calculate.modulus(a,b));
}
