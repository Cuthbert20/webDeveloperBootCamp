printReverse([1,2,3,4]);
printReverse(["a","b","c"]);
//print array in reverse
function printReverse(agg){
    var reversed = agg.reverse();
    reversed.forEach(function(e,i){
        console.log(e + " index #" + i)
    })
};

//let letters = ["a","b","c","d"];
//var reversed = letters.reverse();
//reversed.forEach(function(e, i){
//    console.log(e);
//});

//isUniform() functions takes array as an argument and returns true if all elements in array are identical
console.log(isUniform([1,1,1,1]));
console.log(isUniform([2,1,1,1]));
console.log(isUniform(["a","b","p"]));
console.log(isUniform(["b","b","b"]));

function isUniform(arg){
    var first = arg[0];
    //we star var i at 1 because we comparing i to first so no need to compair index 0 to index 0, better to start at 1.
    for(var i = 1; i < arg.length; i++){
        if(arg[i] !== first){
            return false;
        }
    }
    return true;
};
//sumArray() function add all the numbers from an array and return the sum
sumArray([1,2,3]);
sumArray([10,3,10,4]);
sumArray([-5,100]);

function sumArray(agg){
    let sum = 0;
        agg.forEach(function(element){
            sum += element;
        });
        //I could used return sum; so we would get the sum returned in stead of just printing/console.log the sum.
        //return sum;
        console.log(sum + " sum of array");
};
//max() function that finds the max number in an array
console.log(max([1,2,3]));
console.log(max([10,3,10,4]));
console.log(max([-5,100]));

function max(arr){
    return Math.max(...arr);
    
}
maxTwo([1,2,3,4]);
maxTwo([7,8,9,2]);
maxTwo([3,4,5,6]);
//using .forEach to find the max number in the array
function maxTwo(arr){
    //need a place to store the largest value/num
    let largest = 0;
    //forEach to loop through array
    arr.forEach(function(element){
        //if largest is < element, largest becomes that element, then it loops through the whole arry and as largest changes it will end up being the largest num in array.
        if(largest < element)
        largest = element;
    });
    console.log(largest);
};
//third way to find max using for loop, also we will be returning the value instead of console.log()
function maxThree(arr){
    let max = arr[0];
    for(let i = 1; i < arr.length; i++){
        if(arr[i] > max){
            max = arr[i];
        }
    }
    return max;
}
