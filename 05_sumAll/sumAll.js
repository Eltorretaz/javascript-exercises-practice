const sumAll = function(num1, num2) {
    result = 0;
    if(
    (num1 < 0 || num2 < 0)
    || 
    (typeof num1 === "string" || typeof num2 === "string")
    ||
    (typeof num1 === "object" || typeof num2 === "object")){
        return "ERROR"
    }else if(num1 > num2){
        for(let i = 0; i < num1; i++){
            result += num2
            num2++;
        }
    }else{
        for(let i = 0; i < num2; i++){
            result += num1
            num1++;
        }
    }
    return result;
};

// Do not edit below this line
module.exports = sumAll;
