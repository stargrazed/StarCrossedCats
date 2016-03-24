var ursa_minor_count = 0;
var ursa_major_count = 0;
var aqu_count = 0;
var aur_count = 0;
var bootes_count = 0;
var cap_count = 0;
var canis_minor_count = 0;
var cep_count = 0;
var cass_count = 0;
var cygnus_count = 0;
var draco_count = 0;
var gem_count = 0;
var herc_count = 0 ;
var leo_count = 0;
var leo_minor_count = 0;
var lyra_count = 0;
var orion_count = 0;
var pers_count = 0;
var pegas_count = 0;
var pisc_count = 0;
var taur_count = 0;

function createCircle(x, y) {
    var area, circle;
    area = document.getElementById("test");

    circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    circle.setAttribute('cx', x);
    circle.setAttribute('cy', y);
    circle.setAttribute('r', 20);

    area.appendChild(circle);
  }

function ursa_minor_Click(id) {
  var i;
  if (id > 0) {
    var change = document.getElementsByClassName("ursa_minor"+id);
    for(i=0; i<change.length; i++){
      change[i].style.visibility = 'visible';
    }
  }
  if(id == 1 || id==2 || id==4 || id==5 || id==6){
      ursa_minor_count = ursa_minor_count + 1;
  }
  else if(id == 3){
      ursa_minor_count = ursa_minor_count + 2;
  }
  var fill = document.getElementById("ursa_minor_a");
  fill.innerHTML ="Ursa Minor: "+ ursa_minor_count + "/7";
  document.getElementById("ursa_minor"+id).onclick = "";//do nothing now
}

function ursa_major_Click(id) {
  var i;
  if (id > 0) {
    var change = document.getElementsByClassName("ursa_major"+id);
    for(i=0; i<change.length; i++){
      change[i].style.visibility = 'visible';
    }
  }
  if(id == 1 || id==2 || id==3 || id==5 || id==9 || id==10 || id==11 || id==12 || id==16 || id==13 || id==17){
      ursa_major_count = ursa_major_count + 1;
  }
  else if(id == 4 || id==7 || id==15){
      ursa_major_count = ursa_major_count + 2;
  }
  else if(id==6){
    ursa_major_count = ursa_major_count + 3;
  }
  var fill = document.getElementById("ursa_major_a");
  fill.innerHTML ="Ursa Major: "+ ursa_major_count + "/20";
  document.getElementById("ursa_major"+id).onclick = ""; //do nothing now
}

function aqu_Click(id) {
  var i;
  if (id > 0) {
    var change = document.getElementsByClassName("aqu"+id);
    for(i=0; i<change.length; i++){
      change[i].style.visibility = 'visible';
    }
  }
  if(id == 1 || id==2 || id==3 || id==4 || id==5 || id==6 || id==8 || id==9){
      aqu_count = aqu_count + 1;
  }
  else if(id==7){
      aqu_count = aqu_count + 2;
  }
  var fill = document.getElementById("aqu_a");
  fill.innerHTML ="Aquila: "+ aqu_count + "/10";
  document.getElementById("aqu"+id).onclick = ""; //do nothing now
}

function aur_Click(id) {
  var i;
  if (id > 0) {
    var change = document.getElementsByClassName("aur"+id);
    for(i=0; i<change.length; i++){
      change[i].style.visibility = 'visible';
    }
  }
  if(id == 1 || id==2 || id==4 || id==5 || id==7){
      aur_count = aur_count + 1;
  }
  else if(id==3 || id==6){
      aur_count = aur_count + 2;
  }
  var fill = document.getElementById("aur_a");
  fill.innerHTML ="Auriga: "+ aur_count + "/9";
  document.getElementById("aur"+id).onclick = ""; //do nothing now
}

function cass_Click(id) {
  var i;
  if (id > 0) {
    var change = document.getElementsByClassName("cass"+id);
    for(i=0; i<change.length; i++){
      change[i].style.visibility = 'visible';
    }
  }
  if(id == 1 || id==2 || id==3 || id==4){
      cass_count = cass_count + 1;
  }
  var fill = document.getElementById("cass_a");
  fill.innerHTML ="Cassiopeia: "+ cass_count + "/4";
    document.getElementById("cass"+id).onclick = ""; //do nothing now
}

function canis_major_Click(id) {
  var i;
  if (id > 0) {
    var change = document.getElementsByClassName("canis_major"+id);
    for(i=0; i<change.length; i++){
      change[i].style.visibility = 'visible';
    }
  }
  // do not insert yet
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
  if(id == 1){
      canis_minor_count = canis_minor_count + 1;
  }
  var fill = document.getElementById("canis_minor_a");
  fill.innerHTML ="Canis Minor: "+ canis_minor_count + "/1";
    document.getElementById("canis_minor"+id).onclick = ""; //do nothing now
}

function cap_Click(id) {
  var i;
  if (id > 0) {
    var change = document.getElementsByClassName("cap"+id);
    for(i=0; i<change.length; i++){
      change[i].style.visibility = 'visible';
    }
  }
  if(id == 1 || id==2 || id==3 || id==4 || id==5 || id==6 || id==7 || id==8 || id==9){
      cap_count = cap_count + 1;
  }
  else if(id==10){
    cap_count = cap_count + 2;
  }
  var fill = document.getElementById("cap_a");
  fill.innerHTML ="Capricorn: "+ cap_count + "/11";
  document.getElementById("cap"+id).onclick = ""; //do nothing now
}

function draco_Click(id) {
  var i;
  if (id > 0) {
    var change = document.getElementsByClassName("draco"+id);
    for(i=0; i<change.length; i++){
      change[i].style.visibility = 'visible';
    }
  }
  if(id == 1 || id==3 || id==4 || id==5|| id==6|| id==7|| id==8|| id==9|| id==10|| id==11|| id==12|| id==13|| id==14|| id==15){
      draco_count = draco_count + 1;
  }
  else if(id==2){
    draco_count = draco_count + 2;
  }
  var fill = document.getElementById("draco_a");
  fill.innerHTML ="Draco: "+ draco_count + "/16";
  document.getElementById("draco"+id).onclick = ""; //do nothing now
}

function herc_Click(id) {
  var i;
  if (id > 0) {
    var change = document.getElementsByClassName("herc"+id);
    for(i=0; i<change.length; i++){
      change[i].style.visibility = 'visible';
    }
  }
  if(id == 1 || id==2 || id==4 || id==5|| id==6|| id==7|| id==8||id==15||id==16){
      herc_count = herc_count + 1;
  }
  else if(id==14){
    herc_count = herc_count + 2;
  }
  else if(id == 10){
    herc_count = herc_count + 3;
  }
  else if(id==11){
    herc_count = herc_count + 5;
  }
  var fill = document.getElementById("herc_a");
  fill.innerHTML ="Hercules: "+ herc_count + "/19";
  document.getElementById("herc"+id).onclick = ""; //do nothing now
}

function cygnus_Click(id) {
  var i;
  if (id > 0) {
    var change = document.getElementsByClassName("cygnus"+id);
    for(i=0; i<change.length; i++){
      change[i].style.visibility = 'visible';
    }
  }
  if(id == 1 || id==2 || id==3 || id==4 || id==5|| id==6|| id==7|| id==8|| id==9){
    cygnus_count = cygnus_count + 1;
  }
  var fill = document.getElementById("cygnus_a");
  fill.innerHTML ="Cygnus: "+ cygnus_count + "/9";
  document.getElementById("cygnus"+id).onclick = ""; //do nothing now
}

function cep_Click(id) {
  var i;
  if (id > 0) {
    var change = document.getElementsByClassName("cep"+id);
    for(i=0; i<change.length; i++){
      change[i].style.visibility = 'visible';
    }
  }
  if(id==3 || id==6|| id==7|| id==8){
    cep_count = cep_count + 1;
  }
  else if(id == 5){
    cep_count = cep_count + 2;
  }
  else if(id == 4){
    cep_count = cep_count + 3;
  }
  var fill = document.getElementById("cep_a");
  fill.innerHTML ="Cepheus: "+ cep_count + "/9";
  document.getElementById("cep"+id).onclick = ""; //do nothing now
}

function bootes_Click(id) {
  var i;
  if (id > 0) {
    var change = document.getElementsByClassName("bootes"+id);
    for(i=0; i<change.length; i++){
      change[i].style.visibility = 'visible';
    }
  }
  if(id==3 || id==4 || id==5|| id==6|| id==7|| id==8|| id==9){
    bootes_count = bootes_count + 1;
  }
  else if(id==10){
    bootes_count = bootes_count + 2;
  }
  var fill = document.getElementById("bootes_a");
  fill.innerHTML ="Bootes: "+ bootes_count + "/9";
  document.getElementById("bootes"+id).onclick = ""; //do nothing now
}

function gem_Click(id) {
  var i;
  if (id > 0) {
    var change = document.getElementsByClassName("gem"+id);
    for(i=0; i<change.length; i++){
      change[i].style.visibility = 'visible';
    }
  }
  if(id==2 || id==3 || id==4 || id==5|| id==6|| id==7|| id==8|| id==10){
    gem_count = gem_count + 1;
  }
  else if(id==1){
    gem_count = gem_count + 2;
  }
  var fill = document.getElementById("gem_a");
  fill.innerHTML ="Gemeni: "+ gem_count + "/10";
  document.getElementById("gem"+id).onclick = ""; //do nothing now
}

function leo_Click(id) {
  var i;
  if (id > 0) {
    var change = document.getElementsByClassName("leo"+id);
    for(i=0; i<change.length; i++){
      change[i].style.visibility = 'visible';
    }
  }
  if(id == 1 || id==2 || id==4 || id==6|| id==7|| id==8){
    leo_count = leo_count + 1;
  }
  else if(id==3||id==5){
    leo_count = leo_count + 2;
  }
  var fill = document.getElementById("leo_a");
  fill.innerHTML ="Leo: "+ leo_count + "/9";
  document.getElementById("leo"+id).onclick = ""; //do nothing now
}

function leo_minor_Click(id) {
  var i;
  if (id > 0) {
    var change = document.getElementsByClassName("leo_minor"+id);
    for(i=0; i<change.length; i++){
      change[i].style.visibility = 'visible';
    }
  }
  if(id == 1){
    leo_minor_count = leo_minor_count + 2;
  }
  var fill = document.getElementById("leo_minor_a");
  fill.innerHTML ="Leo Minor: "+ leo_minor_count + "/2";
  document.getElementById("leo_minor"+id).onclick = ""; //do nothing now
}


function lyra_Click(id) {
  var i;
  if (id > 0) {
    var change = document.getElementsByClassName("lyra"+id);
    for(i=0; i<change.length; i++){
      change[i].style.visibility = 'visible';
    }
  }
  if(id==2 || id==3 || id==4){
    lyra_count = lyra_count + 1;
  }
  else if(id == 1||id==5){
    lyra_count = lyra_count + 2;
  }
  var fill = document.getElementById("lyra_a");
  fill.innerHTML ="Lyra: "+ lyra_count + "/7";
  document.getElementById("lyra"+id).onclick = ""; //do nothing now
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
  if(id == 1 || id==2 || id==3 || id==4 || id==5|| id==6|| id==7|| id==8){
    orion_count = orion_count + 1;
  }
  else if(id == 13){
    orion_count = orion_count + 2;
  }
  else if(id==9){
    orion_count = orion_count + 5;
  }
  else if(id == 14){
    orion_count = orion_count + 6;
  }
  var fill = document.getElementById("orion_a");
  fill.innerHTML ="Orion: "+ orion_count + "/21";
  document.getElementById("orion"+id).onclick = ""; //do nothing now
}

function pers_Click(id) {
  var i;
  if (id > 0) {
    var change = document.getElementsByClassName("pers"+id);
    for(i=0; i<change.length; i++){
      change[i].style.visibility = 'visible';
    }
  }
  if(id == 1 || id==2 || id==3 || id==4 || id==5|| id==6|| id==7|| id==8|| id==9 ||id==10||id==11){
    pers_count = pers_count + 1;
  }
  var fill = document.getElementById("pers_a");
  fill.innerHTML ="Perseus: "+ pers_count + "/11";
  document.getElementById("pers"+id).onclick = ""; //do nothing now
}

function pegas_Click(id) {
  var i;
  if (id > 0) {
    var change = document.getElementsByClassName("pegas"+id);
    for(i=0; i<change.length; i++){
      change[i].style.visibility = 'visible';
    }
  }
  if(id == 1 || id==2 || id==4 || id==5|| id==6|| id==7|| id==8|| id==9||id==10||id==11|id==12){
    pegas_count = pegas_count + 1;
  }
  else if(id==3){
    pegas_count = pegas_count + 2;
  }
  var fill = document.getElementById("pegas_a");
  fill.innerHTML ="Pegasus: "+ pegas_count + "/13";
  document.getElementById("pegas"+id).onclick = ""; //do nothing now
}

function pisc_Click(id) {
  var i;
  if (id > 0) {
    var change = document.getElementsByClassName("pisc"+id);
    for(i=0; i<change.length; i++){
      change[i].style.visibility = 'visible';
    }
  }
  if(id == 1 || id==2 || id==3 || id==5|| id==6|| id==7|| id==8|| id==9||id==10||id==11|id==12||id==13){
    pisc_count = pisc_count + 1;
  }
  else if (id==4 || id==14){
    pisc_count = pisc_count + 2;
  }
  var fill = document.getElementById("pisc_a");
  fill.innerHTML ="Pisces: "+ pisc_count + "/16";
  document.getElementById("pisc"+id).onclick = ""; //do nothing now
}

function taur_Click(id) {
  var i;
  if (id > 0) {
    var change = document.getElementsByClassName("taur"+id);
    for(i=0; i<change.length; i++){
      change[i].style.visibility = 'visible';
    }
  }
  if(id == 1 || id==2 || id==3 || id==4 || id==5|| id==6|| id==7|| id==8|| id==9){
    taur_count = taur_count + 1;
  }
  var fill = document.getElementById("taur_a");
  fill.innerHTML ="Taurus: "+ taur_count + "/9";
  document.getElementById("taur"+id).onclick = ""; //do nothing now
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
