const leapYears = function(year) {
    string = `${year}`

    if(Number.isInteger(year / 4) === false){
        return false
    }else if(string[string.length - 1] == 0 && string[string.length - 1] == 0){
        if(Number.isInteger((Number(string[string.length - 3]) / 2)) === false){
            return false
        }
    }
    return true
};

// Do not edit below this line
module.exports = leapYears;
