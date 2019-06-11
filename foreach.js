function myForEachFunc(arr, func){
    for(let i = 0; i < arr.length; i++){
        func(arr[i]);
    }
};
//called color array and an anonymous function inside the myForEachFunc
//in chrome inspect I created a array called color, then called the myForEachFunc(color, function(){});
