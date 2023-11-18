const convertToCelsius = function(temp) {
  let c = Math.round(((temp - 32) * 5 / 9) * 10) / 10;
  return c;
};

const convertToFahrenheit = function(temp) {
  let f = Math.round(((temp * 1.8)+ 32) * 10) / 10;
  return f;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
