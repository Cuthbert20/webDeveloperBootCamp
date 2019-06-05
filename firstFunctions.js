//firstFunctions with js

//1. isEven

function isEven(num){
    return num % 2 === 0;
}
//factorial(4) 4 x 3 x 2 x 1
function factorial(num){
 //define a result variable
 var result = 1;
 //calculate factorial and store value in result
 for(var i = 2; i <= num; i++){
    //result *= i; is same as result = result * i; 
    result *= i;
 }
 //return a result variable
 return result;
}

//kebabToSnake()
//replace's  "-" with "_"
function kebabToSnake(str){

    var newStr = str.replace(/-/g ,"_");
    return newStr;
}



