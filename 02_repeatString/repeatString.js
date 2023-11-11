const repeatString = function(word, time) {
    words = ""
    if(time < 0){
        return "ERROR"
    }
    for(let i = 0; i < time; i++){
        words += word;
    }
    return words
};

module.exports = repeatString;
