// Main.js

const convertToArray = require('./ConvertToArray');
const convertToObject = require('./ConvertToObject');

// Scenario 1
const input1 = { a: 1, b: 2, c: 3 };
const output1 = convertToArray(input1);
console.log('Scenario 1 - Output as array of objects:', output1);

// Scenario 2
const input2 = [{ a: 1 }, { b: 2 }, { c: 3 }];
const output2 = convertToObject(input2);
console.log('Scenario 2 - Output as single object:', output2);
