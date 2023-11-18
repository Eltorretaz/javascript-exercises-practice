const removeFromArray = function(arr, ...anyMoreItems) {
    for(let i = 0; i < anyMoreItems.length; i++){
        index = arr.indexOf(anyMoreItems[i]);
        if(index === -1){
            
        }else{
            arr.splice(index, 1);
        }
        
    }
return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
