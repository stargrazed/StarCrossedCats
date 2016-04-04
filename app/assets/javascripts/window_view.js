var winX;
var winY;

$(document).mousemove( function(e) {
    winX = window.innerWidth/3;
    winY = window.innerHeight/6 + window.pageYOffset;
    $(".enlarge:hover span").css({"top": winY, "left": winX});
});
