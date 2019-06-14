var lis = document.querySelectorAll('li');

for(var i = 0; i < lis.length; i++){
    lis[i].addEventListener("mouseover", function(){
        //this refers to the item or element that the event was triggered on lis at index i lis[i].
        this.classList.add("selected");
    });
    lis[i].addEventListener("mouseout", function(){
            this.classList.remove("selected");
    });
    lis[i].addEventListener("click", function(){
        this.classList.toggle('done');
    });
}
