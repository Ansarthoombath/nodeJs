const calculator=require('./moduleExp')
const read=require('readline-sync');
const x=Number(read.question('Enter first letter: '));
const y=Number(read.question('Enter first letter: '));
console.log(calculator.add(x,y))
// console.log(calculator.subtract(20,10))
// console.log(calculator.mul(5,10))
// console.log(calculator.div(10,5))

// console.log(calculator)

