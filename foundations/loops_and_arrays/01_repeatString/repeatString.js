const repeatString = function(word,num) {
    let string = "";
    for(i = 1;i <= num; i++){
        if(num < 0){
            return 'ERROR'
        }
        else{
            string += word;
        }    
    }
    return string;
};

repeatString('hey',-1);
//Test 1 passed

// Do not edit below this line
module.exports = repeatString;
