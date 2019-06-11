const compaines = [
    {name: "Company One", category: "Cars", start: 1981, end: 2003},
    {name: "Company Two", category: "Retail", start: 1985, end: 2003},
    {name: "Company Three", category: "Shoes", start: 1999, end: 2003},
    {name: "Company four", category: "Cars", start: 2000, end: 2003},
    {name: "Company five", category: "Retail", start: 1981, end: 2013},
    {name: "Company six", category: "Technology", start: 1981, end: 2003},
    {name: "Company seven", category: "Cars", start: 1981, end: 2013},
    {name: "Company eight", category: "Retail", start: 1991, end: 2013},
    {name: "Company nine", category: "Retail", start: 1980, end: 2013},
]

const ages = [33, 23, 12, 20, 19, 25, 29, 22, 24, 19, 17, 5, 16, 29, 30, 32, 40, 15, 31, 20]
//.methods
//forEach  --better way to loop through an array vs a standard for loop
//filter   --allows you to filter things out of the array
//map
//sort
//reduce

//using .foreEach
//for loop exp
//for(let i = 0; i < compaines.length; i++){
 //   console.log(compaines[i]);
//}
//Now doing the same thing using .forEach
//compaines.forEach(function(company){
//    console.log(company.category);//selecting just the category from each dictonary. Could also
//    select just the name, start, or end.
//});



//.filter
//.filter is used to select certain values from an array
//using .filter getting 21 and older from ages array
//standard for loop exp
//let canDrink = [];
//
//for(let i = 0; i < ages.length; i++){
//    if(ages[i] >= 21){
//        canDrink.push(ages[i]);
//    }
//}
//console.log(canDrink);
//now doing the same thing using .filter
//const canDrink = ages.filter(function(legal){
//    if(legal >= 21){
//        return true;
//    }
//});
//console.log(canDrink);
//Now we are agin going to do the same thing this time using the => function
const canDrink = ages.filter(legal => legal >= 21);

console.log(canDrink);

//more EXP's for .filter
//filter out retail companies
//js ES5 version first
//const retailComp = compaines.filter(function(company){
//    if(company.category === "Retail"){
//        return true;
//    }
//});
//console.log(retailComp);
//js ES6 version Now using =>      could put () around company but since we are only calling one perameter we don't need too. If we were calling index as well then we would want to use ()
const retailComp = compaines.filter(company => company.category === "Retail");

console.log(retailComp);
//.filter for companies that start in 80's
//js ES6 Version
const eighties = compaines.filter(startDate => (startDate.start >= 1980 && startDate.start < 1990));
console.log(eighties);
//.fitler ES6 version compaines that lasted for at least 10 years.
const lastedTenYears = compaines.filter(company => (company.end - company.start >= 10));
console.log(lastedTenYears);



//.map
//.map instead of just filtering thiings out we can create a new array from the current array.
//using .map to grap company names and put them in their own array
//ES5 way first
//const compNames = compaines.map(function(company) {
//    return company.name;
//});
//console.log(compNames);
// same as above using ES6 js => funcs
const compNames = compaines.map(company =>{
    return company.name;
});
console.log(compNames);
//creating an array with the start to end year
const testMap = compaines.map(company => 
    //ES6 js template string for a var I COULDN'T GET IT TO WORK
    //return '${company.name} [${company.start} - ${company.end}]';
    //So Instead I made it the only way I know how
    //don't need return or even the {}, I also removed the ; after the "]"
    company.name + " " + "[" + company.start + " - " + company.end + "]"
);
console.log(testMap);
//using ages array, squaring each number
//created a variable agesSquare = ages.map, using arrow function num is the parameter. then we used Math.sqrt(num) to get the square of each num in array
const agesSquare = ages.map(num => Math.sqrt(num));
console.log(agesSquare);
//times every age by 2 remeber .map create a new array
const ageTimesTwo = ages.map(num => num * 2);
console.log(ageTimesTwo);
//using map multiple times
const ageMap = ages
//first we are squaring all of the numbers
.map(age => Math.sqrt(age))
//then we are timesing the squared numbers by 2
.map(age => age * 2);
console.log(ageMap);

//.map I made up on my own 6/11/19 checking for how many companies sale cars
//using ternary operator (replaces if and else statement ? 1 : -1....? replaced if : replaced else) & => function
const carCompany = compaines.map(theifs => 
    theifs.category === "Cars" ? "Car Sales Person BOO" : "Anyone Else YEAH!");

    console.log(carCompany);

//.sort takes in a function just like .map & .filter & .forEach
//in this .sort EXP we are compairing 2 companies c1 & c2 start dates then it will sort the array by the start date
// const sortedCompanies = compaines.sort(function(c1,c2){
//     if(c1.start > c2.start){
//         return 1;
//     } else {
//         return -1;
//     }
// });

// console.log(sortedCompanies);
//faster way of doing the same as above, using .sort and comparing start dates ten sorting by start date.
//using ternary operator (replaces if and else statement ? 1 : -1....? replaced if : replaced else) & => function
const sortedCompanies = compaines.sort((a,b) => (a.start > b.start ? 1 : -1));
console.log(sortedCompanies);
// sort ages a- b for accending, b - a for decending
const agesSort = ages.sort((a,b) => a - b);
console.log(agesSort);
//I NEED MORE INFO ON .sort I don't understand how it does what it does, I get the result but, how it got it I am not sure.



//.reduce can be very complicated... This is just simply use cases.
//adding all the ages together from the ages array using a for loop frist
//let ageSum = 0;
//for(let i = 0; i < ages.length; i++){
//    ageSum += ages[i];
//};
//console.log(ageSum);
//now we are going to add the ages array together using .reduce
//const ageSum = ages.reduce(function(total, age){
//    return total + age;
//}, 0);
//console.log(ageSum);
//Same thing again adding the ages array together using .reduce but, this time with the => func BEST WAY TO DO IT!
const ageSum = ages.reduce((total, age) => total + age, 0);
console.log(ageSum);
// total years for all companies.
//const totalYears = compaines.reduce(function(total, company){
//    return total + (company.end - company.start);
//},0);
//console.log(totalYears);
//AGAIN total years for all companies using .reduce and =>
const totalYears = compaines.reduce((total, company) => total + (company.end - company.start),0);

console.log(totalYears);


const ranNums = [5,75,6,23,41,13,76,89,54,26,17,85,81,24,23,23,22,39,38,38,38,39];
//COMBINING METHODS
//using .map ranNums array * 2
const numsTimesTwo = ranNums
.map(num => num * 2)
//now we are going to use .filter to filter out all nums under 40.
.filter(num => num >= 40)
//.sort lowest to highest
.sort((a,b) => a - b)
//.reduce to add them all together, remeber with .reduce you take in to arguments then you have to set one to 0 or whatever number it calls for.
.reduce((total,num) => (total + num),0);
console.log(numsTimesTwo);

