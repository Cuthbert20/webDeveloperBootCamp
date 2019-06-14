//learning how to use jquery, jquery style using .css
//selecting all divs and changing backgroundColor to purple
$("div").css("backgroundColor", "purple");
//select divs with class "highlight" and make them 200px wide
//NOTE I used "div.highlight" to show that if had class highlight on other items you use div. to select only div's with highlight class
$("div.highlight").css("width", "200px");
//select div with id "thrid" and give it a orange border
$("#third").css("border", "3px solid orange");
//select the first div only and change its font color to pink
$($("div")[0]).css("color", "pink");
//another way to do the above
//$("div:first-of-type").css("color", "pink");