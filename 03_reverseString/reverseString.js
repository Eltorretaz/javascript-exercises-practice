const reverseString = function(word) {
    let string = "";
    let count = word.length;
    for(let i = 0; i < word.length; i++){
        count--;
        string += word[count];
    }
    return (string);
};

// Do not edit below this line
module.exports = reverseString;
