const removeFromArray = function(arr, ...manyMoreArgs) {
    borrador = manyMoreArgs;
    for(let i = 0; i < manyMoreArgs.length; i++){
        arr.splice(arr.indexOf(borrador[i]));
    }
    return arr
};

// Do not edit below this line
module.exports = removeFromArray;
