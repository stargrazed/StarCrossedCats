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

function ursa_minor_Click(id) {
  var i;
  if (id > 0) {
    var change = document.getElementsByClassName("ursa_minor"+id);
    for(i=0; i<change.length; i++){
      change[i].style.visibility = 'visible';
    }
  }
    document.getElementsByClassName("ursa_minor"+id).onclick = ""; //do nothing now
}

function ursa_major_Click(id) {
  var i;
  if (id > 0) {
    var change = document.getElementsByClassName("ursa_major"+id);
    for(i=0; i<change.length; i++){
      change[i].style.visibility = 'visible';
    }
  }
    document.getElementsByClassName("ursa_major"+id).onclick = ""; //do nothing now
}

function aqu_Click(id) {
  var i;
  if (id > 0) {
    var change = document.getElementsByClassName("aqu"+id);
    for(i=0; i<change.length; i++){
      change[i].style.visibility = 'visible';
    }
  }
    document.getElementsByClassName("aqu"+id).onclick = ""; //do nothing now
}

function aur_Click(id) {
  var i;
  if (id > 0) {
    var change = document.getElementsByClassName("aur"+id);
    for(i=0; i<change.length; i++){
      change[i].style.visibility = 'visible';
    }
  }
    document.getElementsByClassName("aur"+id).onclick = ""; //do nothing now
}

function cass_Click(id) {
  var i;
  if (id > 0) {
    var change = document.getElementsByClassName("cass"+id);
    for(i=0; i<change.length; i++){
      change[i].style.visibility = 'visible';
    }
  }
    document.getElementsByClassName("cass"+id).onclick = ""; //do nothing now
}

function canis_major_Click(id) {
  var i;
  if (id > 0) {
    var change = document.getElementsByClassName("canis_major"+id);
    for(i=0; i<change.length; i++){
      change[i].style.visibility = 'visible';
    }
  }
    document.getElementsByClassName("canis_major"+id).onclick = ""; //do nothing now
}

function canis_minor_Click(id) {
  var i;
  if (id > 0) {
    var change = document.getElementsByClassName("canis_minor"+id);
    for(i=0; i<change.length; i++){
      change[i].style.visibility = 'visible';
    }
  }
    document.getElementsByClassName("canis_minor"+id).onclick = ""; //do nothing now
}

function cap_Click(id) {
  var i;
  if (id > 0) {
    var change = document.getElementsByClassName("cap"+id);
    for(i=0; i<change.length; i++){
      change[i].style.visibility = 'visible';
    }
  }
    document.getElementsByClassName("cap"+id).onclick = ""; //do nothing now
}

function draco_Click(id) {
  var i;
  if (id > 0) {
    var change = document.getElementsByClassName("draco"+id);
    for(i=0; i<change.length; i++){
      change[i].style.visibility = 'visible';
    }
  }
    document.getElementsByClassName("draco"+id).onclick = ""; //do nothing now
}

function herc_Click(id) {
  var i;
  if (id > 0) {
    var change = document.getElementsByClassName("herc"+id);
    for(i=0; i<change.length; i++){
      change[i].style.visibility = 'visible';
    }
  }
    document.getElementsByClassName("herc"+id).onclick = ""; //do nothing now
}

function cygnus_Click(id) {
  var i;
  if (id > 0) {
    var change = document.getElementsByClassName("cygnus"+id);
    for(i=0; i<change.length; i++){
      change[i].style.visibility = 'visible';
    }
  }
    document.getElementsByClassName("cygnus"+id).onclick = ""; //do nothing now
}

function cep_Click(id) {
  var i;
  if (id > 0) {
    var change = document.getElementsByClassName("cep"+id);
    for(i=0; i<change.length; i++){
      change[i].style.visibility = 'visible';
    }
  }
    document.getElementsByClassName("cep"+id).onclick = ""; //do nothing now
}

function bootes_Click(id) {
  var i;
  if (id > 0) {
    var change = document.getElementsByClassName("bootes"+id);
    for(i=0; i<change.length; i++){
      change[i].style.visibility = 'visible';
    }
  }
    document.getElementsByClassName("bootes"+id).onclick = ""; //do nothing now
}

function draco_Click(id) {
  var i;
  if (id > 0) {
    var change = document.getElementsByClassName("draco"+id);
    for(i=0; i<change.length; i++){
      change[i].style.visibility = 'visible';
    }
  }
    document.getElementsByClassName("draco"+id).onclick = ""; //do nothing now
}

function gem_Click(id) {
  var i;
  if (id > 0) {
    var change = document.getElementsByClassName("gem"+id);
    for(i=0; i<change.length; i++){
      change[i].style.visibility = 'visible';
    }
  }
    document.getElementsByClassName("gem"+id).onclick = ""; //do nothing now
}

function leo_Click(id) {
  var i;
  if (id > 0) {
    var change = document.getElementsByClassName("leo"+id);
    for(i=0; i<change.length; i++){
      change[i].style.visibility = 'visible';
    }
  }
    document.getElementsByClassName("leo"+id).onclick = ""; //do nothing now
}

function leo_minor_Click(id) {
  var i;
  if (id > 0) {
    var change = document.getElementsByClassName("leo_minor"+id);
    for(i=0; i<change.length; i++){
      change[i].style.visibility = 'visible';
    }
  }
    document.getElementsByClassName("leo_minor"+id).onclick = ""; //do nothing now
}


function lyra_Click(id) {
  var i;
  if (id > 0) {
    var change = document.getElementsByClassName("lyra"+id);
    for(i=0; i<change.length; i++){
      change[i].style.visibility = 'visible';
    }
  }
    document.getElementsByClassName("lyra"+id).onclick = ""; //do nothing now
}

function lynx_Click(id) {
  var i;
  if (id > 0) {
    var change = document.getElementsByClassName("lynx"+id);
    for(i=0; i<change.length; i++){
      change[i].style.visibility = 'visible';
    }
  }
    document.getElementsByClassName("lynx"+id).onclick = ""; //do nothing now
}

function orion_Click(id) {
  var i;
  if (id > 0) {
    var change = document.getElementsByClassName("orion"+id);
    for(i=0; i<change.length; i++){
      change[i].style.visibility = 'visible';
    }
  }
    document.getElementsByClassName("orion"+id).onclick = ""; //do nothing now
}

function pers_Click(id) {
  var i;
  if (id > 0) {
    var change = document.getElementsByClassName("pers"+id);
    for(i=0; i<change.length; i++){
      change[i].style.visibility = 'visible';
    }
  }
    document.getElementsByClassName("pers"+id).onclick = ""; //do nothing now
}

function pegas_Click(id) {
  var i;
  if (id > 0) {
    var change = document.getElementsByClassName("pegas"+id);
    for(i=0; i<change.length; i++){
      change[i].style.visibility = 'visible';
    }
  }
    document.getElementsByClassName("pegas"+id).onclick = ""; //do nothing now
}

function pisc_Click(id) {
  var i;
  if (id > 0) {
    var change = document.getElementsByClassName("pisc"+id);
    for(i=0; i<change.length; i++){
      change[i].style.visibility = 'visible';
    }
  }
    document.getElementsByClassName("pisc"+id).onclick = ""; //do nothing now
}

function taur_Click(id) {
  var i;
  if (id > 0) {
    var change = document.getElementsByClassName("taur"+id);
    for(i=0; i<change.length; i++){
      change[i].style.visibility = 'visible';
    }
  }
    document.getElementsByClassName("taur"+id).onclick = ""; //do nothing now
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
