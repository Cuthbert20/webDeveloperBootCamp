var todos = ["buy turtle food"];

let input = prompt("What would you like to do?");

//show "list"


while(input !== "quit"){
    //handle input
    if(input === "list") {
        console.log(todos);
        //set for "new"
    } else if(input === "new") {
        //ask for new todo
        let newTodo = prompt("Add a new Todo");
        //add new todo to array
        todos.push(newTodo);
    
    }
    //ask again for new input
    input = prompt("What would you like to do?");
}
//allow to "quit"
console.log("ok you quit the silly little app")