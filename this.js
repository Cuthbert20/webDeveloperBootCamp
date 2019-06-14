//creating an empty object
const comments = {};
//add array to object
comments.data = ["Nice", "You Suck", "Hang in there Man", "You can do it!"];
//function outside of the object
//function print(arr){
//    arr.forEach(el => {
//        console.log(el);
//    });
//};

comments.print = function(){
    //using keyword this. This is very important! NEED TO KNOW. this. refers to the object comments then we are diving deeper with comments.data
    //...so instead of using comments.data we are using this.data
    this.data.forEach(el => {
        console.log(el);
    });
};//run comments.print() and it will print out the array in comments.data