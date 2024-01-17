// ConvertToArray.js

// Function to convert input to an array of objects
function convertToArray(input) {
  return Object.keys(input).map((key) => ({ [key]: input[key] }));
}

module.exports = convertToArray;
