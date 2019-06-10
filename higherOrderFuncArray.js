const compaines = [
    {name: "Company One", category: "Finance", start: 1981, end: 2003},
    {name: "Company Two", category: "Retail", start: 1981, end: 2003},
    {name: "Company Three", category: "Shoes", start: 1999, end: 2003},
    {name: "Company four", category: "Cars", start: 2000, end: 2003},
    {name: "Company five", category: "Retail", start: 1981, end: 2013},
    {name: "Company six", category: "Technology", start: 1981, end: 2003},
    {name: "Company seven", category: "Auto", start: 1981, end: 2013},
    {name: "Company eight", category: "Retail", start: 1991, end: 2013},
    {name: "Company nine", category: "Retail", start: 1981, end: 2013},
]

const ages = [33, 23, 12, 20, 19, 25, 29, 22, 24, 19, 17, 16, 29, 30, 32, 40, 15, 31, 20]
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