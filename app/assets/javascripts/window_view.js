var winX;
var winY;

$(document).mousemove( function(e) {
    winX = window.innerWidth/3.5;
    winY = window.innerHeight/4 + window.pageYOffset;
    $(".enlarge:hover span").css({"top": winY, "left": winX});
});
