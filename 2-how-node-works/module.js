// console.log(arguments);
// console.log(require('module').wrapper);

//module.exports
const C = require('./test-module1');
const calc1 = new C();
console.log(calc1.add(2, 5));

//exports
const calc2 = require('./test-module2');
console.log(calc2);
const { add, multiply, divide } = calc2;
console.log(multiply(3, 9));

//cashing

require('./test-module3')();
require('./test-module3')();
require('./test-module3')();