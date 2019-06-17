//Check off Specific todos by clicking
$('ul').on("click", "li", function(){
    $(this).toggleClass("completed");
});
//click on X to delete Todo
$('ul').on("click", "span", function(event){
    //click on span remove the li that the span is located in using parent() to remove the whole line
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    })
    //stops over events from happening ie in this instance the toggleClass("completed"); doesn't run
    event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
    if(event.which === 13){
        //grabbing new todo text from input and assigning it to a var
        var todoText = $(this).val();
        $(this).val("");
        //create a new li and add it to the ul
        //needed to use single quotes ' cause double quotes would have interfered
        $('ul').append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>");
    }
});
