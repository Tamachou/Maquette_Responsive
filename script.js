document.addEventListener("DOMContentLoaded", function (){

var index = 1;
show(index);
    //  var name = document.getElementsByClassName("slider");
    //  var size = name.length;
    // var dot = document.getElementsByClassName("dot");


    function show(n)
{
    var dot = document.getElementsByClassName("dot");
    var i;
    var name = document.getElementsByClassName("slider");
    var size = name.length;
    if(n > size) {
        index = 1;
    }
    if(n < 1) {
        index = size;
    }
    for (i = 0; i < size; i++){
        name[i].style.display = "none";
    }

    name[index -1].style.display = "block";

    for (i = 0; i < size; i++) {
        dot[i].classList.remove("on");
    }

    dot[index-1].classList.add('on');




}

    function further(n){
        show(index += n);
    }

    // for(var i = 0; i < size; i++){
    //     dot[i].addEventListener("click", function(){
    //         show(index = n);
    //     });
    // }


    var prev = document.getElementsByClassName("prev")[0];

    prev.addEventListener("click", function() {
        further(-1);
    });

    var next = document.getElementsByClassName("next")[0];

    next.addEventListener("click", function() {
        further(1);
    });

});

