const palindromes = function (string) {
    let reverse = "";
    let word = string.replace(/\s+/g, '');
    word = word.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
    let count = 0; 

    for(let i = word.length - 1; i >= 0; i--){
        reverse += word[i];
    }
    for(let j = 0; j < reverse.length; j++){
        if(reverse[j].toLocaleLowerCase() === word[j].toLocaleLowerCase()){
            count += 1;
        }
    }
    if(count == reverse .length){
        return true
    }else
    return false;
};

// Do not edit below this line
module.exports = palindromes;
