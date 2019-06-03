console.log("Print all numbers between -10 and 19")

var num = -10;

while(num < 20){
    console.log(num);
num++;
}

console.log("Print all even numbers between 10 and 40")

var numOne = 10;

while(numOne <= 40){
    if(numOne % 2 === 0){
        console.log(numOne);
    }
    numOne++;
}

console.log("Print all the odd numbers between 300 and 333")

var odd = 300;

while(odd <= 333){
    if(odd % 2 !== 0){
        console.log(odd);
    }
    odd++;
}

console.log("Print all numbers divisible by 5 AND 3 between 5 and 50")

var me = 5;

while(me <= 50){
    if((me % 5 === 0) && (me % 3 ===0)){
        console.log(me);
    }
    me+=1;
}