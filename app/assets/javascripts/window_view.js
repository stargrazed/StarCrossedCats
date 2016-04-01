var mouseX;
var mouseY;

$(document).mousemove( function(e) {
    mouseX = e.pageX;
    mouseY = e.pageY;
    $(".enlarge:hover span").css({"top": mouseY, "left": mouseX});
});
