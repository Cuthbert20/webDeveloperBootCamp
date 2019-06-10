//var color = ["blue","yellow", "red", "purple"]

//color.forEach(function(tone){
//    console.log(tone);
//});

//color.forEach(function(tones){
//    console.log(tones);
//});
window.setTimeout(function() {
var toDos = ["Buy New Turtle"];

var input = prompt("What would you like to do?");

while(input !== "quit"){
    //handle input
    if(input === "list") {
        //calling fucntion listTodos that is defined at end of page
        listTodos();
    }else if(input === "new"){
        //ask for a new todo
        let newToDo = prompt('Enter new todo');
        //add to toDos array
        toDos.push(newToDo);
        console.log("Added ToDo");
    } else if (input === "delete"){
        //ask for index of todo to be deleted
        let deleteIndex = prompt("Enter index of todo to delete");
        //then delete that todo
        //splice() use to remove/delete an item from a array at any index selected
        //first arg is at what index do you want to start splicing ie deleteIndex
        //second arg is how many items you want to delete/splice so 1 only removes the one item, if we put 5 then it would remove 5 items starting with the index we provided in the first arg
        toDos.splice(deleteIndex, 1);
        console.log("Deleted ToDo #" + deleteIndex);
    }
    //ask again for new input
    input = prompt("What would you like to do?");
} 
console.log("Ok you Quit the App");

function listTodos(){
    console.log("*******")
    toDos.forEach(function(aToDo, index){
        console.log(index + ": " + aToDo);
    });
        console.log("*******")
}
}, 500);