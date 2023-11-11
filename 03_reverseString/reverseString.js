const reverseString = function(word) {
    let reverse = "";
    let count = word.length - 1; 
    for(let i = 0; i < word.length; i++){
        reverse += word[count];
        count--;
    }
    return reverse;
};

// Do not edit below this line
module.exports = reverseString;
