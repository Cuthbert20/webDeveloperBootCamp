const button = document.querySelector("button");
//creating a var boolean set to false cause the page is white to start
var isPurple = false;

//button.addEventListener("click", function(){
//    if(isPurple){
//        document.body.style.background = "white";
        //isPurple = false;
//    }else {
//        document.body.style.background = "purple";
       // isPurple = true;
//    }
    //instead of setting isPurple from false then true we can use isPurple = !isPurple after the if and else statments
//    isPurple = !isPurple;
//});

//a much easier way to do the same thing that we were doing above
button.addEventListener("click", function(){
    document.body.classList.toggle("purple");
});
