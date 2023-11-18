const fibonacci = function(num) {
    let count1 = 1;
    let count2 = 0;
    let trash = 0;
    let result = 0;
    if(num < 0){
        return "OOPS"
    }
    for(let i = 0; i < Number(num) - 1; i++){
        trash = count1 + count2;
        count2 = count1;
        count1 = trash;
    }
    return count1;
};

// Do not edit below this line
module.exports = fibonacci;
