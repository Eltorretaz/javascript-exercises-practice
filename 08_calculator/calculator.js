const add = function(num1, num2) {
	const result = num1 + num2;
  return result; 
};

const subtract = function(num1, num2) {
	const result = num1 - num2;
  return result;
};

const sum = function(sum) {
  let result = 0;
  if(sum.length === 0){
    return Number(result);
  }else{
    for(let i = 0; i < sum.length; i++){
      result += sum[i];
    }
    return Number(result);
  }
};

const multiply = function(mul) {
  let result = 1;
    for(let i = 0; i < mul.length; i++){
      result = result * mul[i];
    }
    return Number(result);
};

const power = function(num1, num2) {
  let result = 1;
	for(let i = 0; i < num2; i++){
    result *= num1;
  }
  return result;
};

const factorial = function(num) {
	let result = 1;
  let count = 1;
  for(let i = 0; i < num; i++){
    result *= count;
    count++;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
