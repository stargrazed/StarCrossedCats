function createCircle(x, y) {
    var area, circle;
    area = document.getElementById("test");

    circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    circle.setAttribute('cx', x);
    circle.setAttribute('cy', y);
    circle.setAttribute('r', 20);

    area.appendChild(circle);
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


function star(find_stars){
  $.getJSON(find_stars, function(data){
    var items = [];
    $.each(data, function(index, val) {
        console.log(val);
        items.push(" "+val.label+" ");
        items.push(" x: "+val.x);
        items.push(" y: "+val.y);
        items.push(" z: "+val.z);
        $(".star_container").append("<li style='list-style-type: none;'>"+items+"</li>");
        items = [];
    });
  });
}

function star2(find_stars){ //for copying into an array more easily
  $.getJSON(find_stars, function(data){
    var items = [];
    $.each(data, function(index, val) {
        console.log(val);
        items.push("["+val.x);
        items.push(val.y);
        items.push(val.z+"]");
        $(".star_container").append("<li style='list-style-type: none;'>"+items+"</li>");
        items = [];
    });
  });
}

function constell(constellation){
  $.getJSON(constellation, function(data){
    var items2 = [];
    $.each(data, function(index, val) {
        console.log(val);
        alert(val);
        items2.push(" Name: "+val.id);
        items2.push("   Galaxy: "+val.galaxy);
        //$(".star_container").append("<li style='list-style-type: none;'>"+items2+"</li>");
        items2 = [];
    });
  });
}

function constell_to_star(link){
  $.getJSON(link, function(data){
    var str = 'https://star-api.herokuapp.com/api/v1/stars?';
    $.each(data, function(index, val) {
        console.log(val);
        var num = val.star_id;
        var min = 'min[id]=';
        var max = '&max[id]=';

        num_min = parseInt(num)-1;
        num_min = num_min.toString();
        num_max = parseInt(num)+1;
        num_max = num_max.toString();

        min = min+num_min;
        max = max+num_max;

        var chain = str+min+max;
        //$(".star_container").append("<li style='list-style-type: none;'>"+chain+"</li>");
        star2(chain);
        items3 = [];
    });
  });
}
