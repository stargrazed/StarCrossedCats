var mouseX;
var mouseY;
var winX;
var winY;

$(document).mousemove( function(e) {
    mouseX = e.pageX;
    mouseY = e.pageY;
    winY = 20 + window.pageYOffset;
    if(window.innerWidth - 600 < 600)
        winX = 50;
    else
        winX = 750 + window.pageXOffset;

    $(".enlarge:hover span").css({"top": winY, "left": winX});
});
