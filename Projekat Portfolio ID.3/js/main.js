let mybutton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
} else {
    mybutton.style.display = "none";
}
}
function topFunction() {
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

$(function(){
    $(window).on("scroll", function(){
        if($(document).scrollTop() > 500) {
            $("header").addClass("active1");
        }else{
            $("header").removeClass("active1");
        }
    });
});