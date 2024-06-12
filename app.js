// app.js

import { add, subtract, multiply, divide } from './math.js';

const a = 10;
const b = 5;

console.log(`Add: ${a} + ${b} = ${add(a, b)}`);
console.log(`Subtract: ${a} - ${b} = ${subtract(a, b)}`);
console.log(`Multiply: ${a} * ${b} = ${multiply(a, b)}`);
console.log(`Divide: ${a} / ${b} = ${divide(a, b)}`);
