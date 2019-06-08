




var ages = [21,19,34,54,12,10,20,67,88,21,22,24,24,24,21,27,29,30,31,33,21,18];
//slowest way to create a array from our ages array to see who is over 21 using a for loop
//creating an empty array to contain the ages that are >= 21
//let canDrink = []
//creating let i, to iterate through ages array as long as is less then the length of ages it will continue to loop and we add one to i after every loop with i++
//for(let i = 0; i < ages.length; i++){
    //if ages at index i is >= 21 then we are going to use push "canDrink.push" ages at that indes ie. canDrink.push(ages[i])
//    if(ages[i] >= 21){
//        canDrink.push(ages[i]);

//    }
//then we print out our array
//}
//console.log(canDrink);
//below is a better way using .filter method but, the arrow function is the best way to go.

//we can do all of this using arrow functions!!!! SWEET!!!!!!!!!!! in One Line!!
//const canDrink = ages.filter(function(ageOf){
//    if(ageOf >= 21){
//        return true;
//    }
//})
//
//console.log(canDrink);

//using arrow functions
const canDrink = ages.filter(age => age >= 21);

console.log(canDrink);