var movieDB = [{watched: true, name: "Mad Max Fury Road", Rating: "5 Stars"},
                {watched: true, name: "Rocket Man", Rating: "4 Stars"},
                {watched: false, name: "Godzilla", Rating: "3 Stars"},
                {watched: true, name: "John Wick 3", Rating: "4.5 Stars"}];

function buildString(movie){
    let result = "You have ";
        if(movie.watched){
            result += "watched "
        } else {
            result += "not seen "};
    result += "\"" + movie.name + "\" -";
    result += movie.Rating;
    return result;
};
//run function inside console.log so that it will print out the result from buildString
movieDB.forEach(function(movie){
    console.log(buildString(movie));
});
const posts = {name: "stu", add: function(x,y){return x + y;}, age: 36}
//posts.add(105,55); entered into chrome inspect