const compaines = [
    {name: "Company One", category: "Finance", start: 1981, end: 2003},
    {name: "Company Two", category: "Ships", start: 1981, end: 2003},
    {name: "Company Three", category: "Shoes", start: 1981, end: 2003},
    {name: "Company four", category: "Cars", start: 1981, end: 2003},
    {name: "Company five", category: "Retail", start: 1981, end: 2003},
    {name: "Company six", category: "Technology", start: 1981, end: 2003},
    {name: "Company seven", category: "Auto", start: 1981, end: 2003},
    {name: "Company eight", category: "Sales", start: 1981, end: 2003},
    {name: "Company nine", category: "Retail", start: 1981, end: 2003},
]

const ages = [33, 23, 12, 20, 19, 25, 29, 22, 24, 19, 17, 16, 29, 30, 32, 40, 15]
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

//using .filter
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
const canDrink = ages.filter(function(legal){
    if(legal >= 21){
        return true;
    }
});
console.log(canDrink);