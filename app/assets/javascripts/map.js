function createCircle(x, y) {
    var svg, circle;
    svg = document.getElementById("test");

    circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    circle.setAttribute('cx', x);
    circle.setAttribute('cy', y);
    circle.setAttribute('r', 50);

    svg.appendChild(circle);
}


function test(x,y, star_index){
  var arr = [x,y];
  star_index[0] = arr;
  star_index[1] = arr;
  return;
}

function Click(id) {
    if (id > 0) {
        document.getElementById("line" + id).style.visibility = 'visible';
    }
    document.getElementById("circle"+id).onclick = ""; //do nothing now
/*
    if (id + 1 < points.length) {
        newClick = function() { dotClick(id + 1); }
        document.getElementById("circle" + (id + 1)).onclick = newClick;
        document.getElementById("text" + (id + 1)).onclick = newClick;
    }
    else {
        for (i = 0; i < points.length; i++) { //hide everything
            document.getElementById("circle" + i).style.visibility = 'hidden';
            document.getElementById("line" + i).style.visibility = 'hidden';
        }
        document.getElementById("image").style.visibility = 'visible'; //show png or message
    }
    */
}
