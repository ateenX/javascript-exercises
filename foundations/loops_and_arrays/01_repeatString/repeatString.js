const repeatString = function(word,num) {
    let string = "";
     if(num < 0){
            return 'ERROR';
        }
    for(i = 1;i <= num; i++){
       string += word;
    }
    return string;
};

repeatString('hey',-1); //Test 1 passed

repeatString('hello',10); //Test 2 passed

repeatString('hi',1); //Test 3 passed

repeatString('bye',0); // Test 4 passed

repeatString('goodbye',-1);

repeatString(" ", 10);

// Do not edit below this line
module.exports = repeatString;
