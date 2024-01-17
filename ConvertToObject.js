// ConvertToObject.js

// Function to convert input to a single object
function convertToObject(input) {
  const output = {};
  input.forEach((obj) => {
    const key = Object.keys(obj)[0];
    output[key] = obj[key];
  });
  return output;
}

module.exports = convertToObject;
