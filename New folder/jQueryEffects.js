//jQuery .fadeOut effect/method
$("#fadeOut").on("click", function(){
    //second callBack function so that the elements that have fadeOut *in this case all div's* will .remove ie. the div elements will be gone
    //you can use chrome inspect to check.
    $('div').fadeOut(1000, function(){
        $(this).remove();
    });
    
});

//jQuery .fadeIn effect/method
$("#fadeIn").click(function(){
    $('li').fadeIn(1000);
});

//jQuery .fadeToggle effect/method
$("#fadeToggle").on("click", function(){
    $('li').fadeToggle(1000);
});

//other jQuery method/effects that can be used.
//slideDown
//slideUp
//slideToggle
$('#slideToggle').on("click", function(){
                        //for fun I am setting slideToggle to 1sec and adding a 2nd callback func that console.logs "slide finished" after slide
    $('div').slideToggle(1000, function(){
        //more common would be to use $(this).remove();
        console.log("slide finished");
    });
})