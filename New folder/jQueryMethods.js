//7 common jQuery Methods we are going to go through in this course #210
//you can go through the jqery.com docs and it will show you all the methods they have and they give good examples.

//val() changes the value of the element. Works on elements that have a value attribute i.e. checkbox, input, dropdown menu, color input
//EXP reseting what is has been typed in our input to an empty string
//$("input").val("");
//using our drop down menu if we wanted to know what animal the user selects we could use .val 
//$("select").val();

//text() give you all the text from element or elements selected and returns them to you in a string you can also change the value of the text
//$("h1").text("Changed using .text");
//$("li").text("Cody is a good dog"); //changes text for all li's on page

//attr() retreves or change attributes like title, alt, src
//I am just changing the width of the img first
$("img").css("width", "500px");
//chagning the photo using attr selecting src
//$('img').attr('src', "https://images.unsplash.com/photo-1463149612395-6a0defd74a42?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1349&q=80");
//changing input type from text to color; we could also change it to a checkbox or other things
//$("input").attr("type", "color");
//multiple elements (img's) we want to select one
$($("img")[1]).attr("src", "https://images.unsplash.com/photo-1559678243-d356f0019aaa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80");


//html() give you all the html tags and data in them you can also change items
//$('ul').html("<li> one line item</li><li> two line item</li>"); we just changed the li's.

//ALL THREE OF THESE ARE JQUERY VERSION OF .classlist.add,.remove.toggle
//addClass()
$('h1').addClass("correct");
$('li').addClass("wrong");
$('select').addClass('done');
//removeClass()
$('li').removeClass('wrong');

//toggleClass() *with toggle if the element has the class it will remove it if it doesn't have the class toggle will add it.
$('#intro').toggleClass('done');
$("h1").toggleClass("correct");

//EVENTS
//click() event

//keypress() event
//prameter is callback function just like .addEventListener("click", function(){})
//in this exp we want to listen for a keypress but, only do something if the user hits enter.
    //enter the keypress below into chrome inspect to see how we get the code of the key that was pressed charCode, keyCode, which
    //you can look up the codes at javascript-char-codes-key-codes website.
    // $($("input")[1]).keypress(function(event){
    //     console.log(event);
    // });
    //13 is the keyCode for enter
    $($("input")[1]).keypress(function(event){
        if(event.which === 13){
            alert("You hit Enter");
        }
    });

    //on() event
    //on() is set up like .addeventlistenter but, with jQuery ("click", function(){}) or ("keypress", function(){})
    //in this EXP we have 3 h1's and when they click any one of them we want just that one to turn blue, to do this we need to us $(this)
$('h1').on('click', function(){
    $(this).css("color", 'blue');
});
//if we hover over one of our buttons it bolds the text
$('button').on('mouseenter', function(){
    $(this).css('font-weight', 'bold');
});
//when we stop hovering over one of our buttons the text won't be bold
$('button').on('mouseleave', function(){
    $(this).css('font-weight', "normal");
});
