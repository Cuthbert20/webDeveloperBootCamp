var age = Number(prompt('What is your age?'));
    //above we are using Number to convert the string that is returned to us
    // through prompt ie "38" would return as 38.
if(age < 0){
    console.log('ERROR');
}
    
    else if(age === 21){
        console.log("happy 21st birthday!!");
    }

    else if((age % 2) === 1){
        console.log("your age is odd!");
    }

    else if(age % Math.sqrt(age) === 0) {
        console.log("Perfect sqaure!");