var ursa_minor_count = 0;
var ursa_major_count = 0;
var aqu_count = 0;
var aqr_count = 0;
var ari_count = 0;
var aur_count = 0;
var bootes_count = 0;
var canis_minor_count = 0;
var cap_count = 0;
var car_count = 0;
var cass_count = 0;
var cen_count = 0;
var cep_count = 0;
var col_count = 0;
var cnc_count = 0;
var cra_count = 0;
var crb_count = 0;
var cru_count = 0;
var cygnus_count = 0;
var dor_count = 0;
var draco_count = 0;
var gem_count = 0;
var herc_count = 0 ;
var hydra_count = 0;
var leo_count = 0;
var leo_minor_count = 0;
var lib_count = 0;
var lyra_count = 0;
var lynx_count = 0;
var orion_count = 0;
var mon_count = 0;
var pers_count = 0;
var pegas_count = 0;
var pisc_count = 0;
var pup_count = 0;
var sco_count = 0;
var sgr_count = 0;
var taur_count = 0;
var vel_count = 0;
var virgo_count = 0;

var score_count = 0;

function createCircle(x, y) {
    var area, circle;
    area = document.getElementById("test");

    circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    circle.setAttribute('cx', x);
    circle.setAttribute('cy', y);
    circle.setAttribute('r', 20);

    area.appendChild(circle);
  }

function drawLabel(x, y, name){
  var area, tag;
  area = document.getElementById("test");

  tag = document.createElementNS('http://www.w3.org/2000/svg', 'text');
  tag.setAttribute('x', x);
  tag.setAttribute('y', y);
  tag.setAttribute('fill', "red")
  tag.setAttribute('font-size', "20")
  tag.textContent = name;

  area.appendChild(tag);
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
  document.getElementById("current_const").innerHTML ="Ursa Minor: "+ ursa_minor_count + "/7";
  document.getElementById("ursa_minor"+id).onclick = "";//do nothing now
  if(ursa_minor_count == 7){
    score_count = score_count + 1;
    document.getElementById("ursa_minor_a").innerHTML = "<a href='/constellations#UMi'>Ursa Minor, The Lesser Bear</a>";
    document.getElementById("found_coin").play();
  }
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
  document.getElementById("current_const").innerHTML ="Ursa Major: "+ ursa_major_count + "/20";
  document.getElementById("ursa_major"+id).onclick = ""; //do nothing now
  if(ursa_major_count == 20){
    score_count = score_count + 1;
    document.getElementById("ursa_major_a").innerHTML = "<a href='/constellations#UMa'>Ursa Major, The Great Bear</a>";
    document.getElementById("found").play();
  }
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
  document.getElementById("current_const").innerHTML = "Aquila: "+ aqu_count + "/10";
  document.getElementById("aqu"+id).onclick = ""; //do nothing now
  if(aqu_count == 10){
    score_count = score_count + 1;
    document.getElementById("aqu_a").innerHTML = "<a href='/constellations#Aql'>Aquila, The Eagle</a>";
    document.getElementById("found_coin").play();
  }
}

function aqr_Click(id) {
  var i;
  if (id > 0) {
    var change = document.getElementsByClassName("aqr"+id);
    for(i=0; i<change.length; i++){
      change[i].style.visibility = 'visible';
    }
  }
  if(id == 1 || id==2 || id==3 || id==4 || id==6 || id==7 || id==8 || id==9||id==10 ||id==11 ||id==12 ||id==13 || id==14){
      aqr_count = aqr_count + 1;
  }
  else if(id==5){
      aqr_count = aqr_count + 2;
  }
  var fill = document.getElementById("aqr_a");
  fill.innerHTML ="Aquarius: "+ aqr_count + "/15";
  document.getElementById("current_const").innerHTML = "Aquarius: "+ aqr_count + "/15";
  document.getElementById("aqr"+id).onclick = ""; //do nothing now
  if(aqr_count == 15){
    score_count = score_count + 1;
    document.getElementById("aqr_a").innerHTML = "<a href='/constellations#Aqr'>Aquarius, The Water Bearer</a>";
    document.getElementById("found").play();
  }
}

function ari_Click(id) {
  var i;
  if (id > 0) {
    var change = document.getElementsByClassName("ari"+id);
    for(i=0; i<change.length; i++){
      change[i].style.visibility = 'visible';
    }
  }
  if(id == 1 || id==2 || id==3){
      ari_count = ari_count + 1;
  }
  var fill = document.getElementById("ari_a");
  fill.innerHTML ="Aries: "+ ari_count + "/3";
  document.getElementById("current_const").innerHTML = "Aries: "+ ari_count + "/3";
  document.getElementById("ari"+id).onclick = ""; //do nothing now
  if(ari_count == 3){
    score_count = score_count + 1;
    document.getElementById("ari_a").innerHTML = "<a href='/constellations#Ari'>Aries, The Ram</a>";
    document.getElementById("found_coin").play();
  }
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
  document.getElementById("current_const").innerHTML = "Auriga: "+ aur_count + "/9";
  document.getElementById("aur"+id).onclick = ""; //do nothing now

  if(aur_count == 9){
    score_count = score_count + 1;
    document.getElementById("aur_a").innerHTML = "<a href='/constellations#Aur'>Auriga, The Charioteer</a>";
    document.getElementById("found_coin").play();
  }
}

function car_Click(id) {
  var i;
  if (id > 0) {
    var change = document.getElementsByClassName("car"+id);
    for(i=0; i<change.length; i++){
      change[i].style.visibility = 'visible';
    }
  }
  if(id == 1 || id==2 || id==3 || id==4 || id==5 || id==6|| id==7|| id==8|| id==9){
      car_count = car_count + 1;
  }
  var fill = document.getElementById("car_a");
  fill.innerHTML ="Carina: "+ car_count + "/9";
  document.getElementById("current_const").innerHTML = "Carina: "+ car_count + "/9";
  document.getElementById("car"+id).onclick = ""; //do nothing now
  if(car_count == 9){
    score_count = score_count + 1;
    document.getElementById("car_a").innerHTML = "<a href='/constellations#Car'>Carina, The Keel</a>";
    document.getElementById("found_coin").play();
  }
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
  document.getElementById("current_const").innerHTML = "Cassiopeia: "+ cass_count + "/4";
  document.getElementById("cass"+id).onclick = ""; //do nothing now
  if(cass_count == 4){
    score_count = score_count + 1;
    document.getElementById("cass_a").innerHTML = "<a href='/constellations#Cas'>Cassiopeia, The Queen</a>";
    document.getElementById("found_coin").play();
  }
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
  document.getElementById("current_const").innerHTML = "Canis Minor: "+ canis_minor_count + "/1";
  document.getElementById("canis_minor"+id).onclick = ""; //do nothing now

  if(canis_minor_count == 1){
    score_count = score_count + 1;
    document.getElementById("canis_minor_a").innerHTML = "<a href='/constellations#CMi'>Canis Minor, The Lesser Dog</a>";
    document.getElementById("found_coin").play();
  }
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
  document.getElementById("current_const").innerHTML = "Capricorn: "+ cap_count + "/11";
  document.getElementById("cap"+id).onclick = ""; //do nothing now
  if(cap_count == 11){
    score_count = score_count + 1;
    document.getElementById("cap_a").innerHTML = "<a href='/constellations#Cap'>Capricorn, The Goat</a>";
    document.getElementById("found_coin").play();
  }
}

function cen_Click(id) {
  var i;
  if (id > 0) {
    var change = document.getElementsByClassName("cen"+id);
    for(i=0; i<change.length; i++){
      change[i].style.visibility = 'visible';
    }
  }
  if(id == 1 || id==2 || id==3 || id==4|| id==5 || id==6 || id==7|| id==8 || id==12 || id==13||id==14||id==15||id==16){
      cen_count = cen_count + 1;
  }
  else if(id == 9 || id==10){
        cen_count = cen_count + 2;
  }
  var fill = document.getElementById("cen_a");
  fill.innerHTML ="Centaurus: "+ cen_count + "/17";
  document.getElementById("current_const").innerHTML = "Centaurus: "+ cen_count + "/17";
  document.getElementById("cen"+id).onclick = ""; //do nothing now
  if(cen_count == 17){
    score_count = score_count + 1;
    document.getElementById("cen_a").innerHTML = "<a href='/constellations#Cen'>Centaurus, The Centaur</a>";
    document.getElementById("found").play();
  }
}

function cnc_Click(id) {
  var i;
  if (id > 0) {
    var change = document.getElementsByClassName("cnc"+id);
    for(i=0; i<change.length; i++){
      change[i].style.visibility = 'visible';
    }
  }
  if(id == 1 || id==2 || id==3 || id==4){
      cnc_count = cnc_count + 1;
  }
  var fill = document.getElementById("cnc_a");
  fill.innerHTML ="Cancer: "+ cnc_count + "/4";
  document.getElementById("current_const").innerHTML = "Cancer: "+ cnc_count + "/4";
  document.getElementById("cnc"+id).onclick = ""; //do nothing now
  if(cnc_count == 4){
    score_count = score_count + 1;
    document.getElementById("cnc_a").innerHTML = "<a href='/constellations#Cnc'>Cancer, The Crab</a>";
    document.getElementById("found_coin").play();
  }
}

function col_Click(id) {
  var i;
  if (id > 0) {
    var change = document.getElementsByClassName("col"+id);
    for(i=0; i<change.length; i++){
      change[i].style.visibility = 'visible';
    }
  }
  if(id == 1 || id==2 || id==3 || id==4 || id==5 || id==6){
      col_count = col_count + 1;
  }
  var fill = document.getElementById("col_a");
  fill.innerHTML ="Columba: "+ col_count + "/6";
  document.getElementById("current_const").innerHTML = "Columba: "+ col_count + "/6";
  document.getElementById("col"+id).onclick = ""; //do nothing now
  if(col_count == 6){
    score_count = score_count + 1;
    document.getElementById("col_a").innerHTML = "<a href='/constellations#Col'>Columba, The Dove</a>";
    document.getElementById("found_coin").play();
  }
}

function cra_Click(id) {
  var i;
  if (id > 0) {
    var change = document.getElementsByClassName("cra"+id);
    for(i=0; i<change.length; i++){
      change[i].style.visibility = 'visible';
    }
  }
  if(id == 1 || id==2 || id==3 || id==4 || id==5){
      cra_count = cra_count + 1;
  }
  var fill = document.getElementById("cra_a");
  fill.innerHTML ="Corona Australis: "+ cra_count + "/5";
  document.getElementById("current_const").innerHTML = "Corona Australis: "+ cra_count + "/5";
  document.getElementById("cra"+id).onclick = ""; //do nothing now
  if(cra_count == 5){
    score_count = score_count + 1;
    document.getElementById("cra_a").innerHTML = "<a href='/constellations#CrA'>Corona Australis, The Southern Crown</a>";
    document.getElementById("found_coin").play();
  }
}

function crb_Click(id) {
  var i;
  if (id > 0) {
    var change = document.getElementsByClassName("crb"+id);
    for(i=0; i<change.length; i++){
      change[i].style.visibility = 'visible';
    }
  }
  if(id == 1 || id==2 || id==3 || id==4 || id==5||id==6){
      crb_count = crb_count + 1;
  }
  var fill = document.getElementById("crb_a");
  fill.innerHTML ="Corona Borealis: "+ crb_count + "/6";
  document.getElementById("current_const").innerHTML = "Corona Borealis: "+ crb_count + "/6";
  document.getElementById("crb"+id).onclick = ""; //do nothing now
  if(crb_count == 6){
    score_count = score_count + 1;
    document.getElementById("crb_a").innerHTML = "<a href='/constellations#CrB'>Corona Borealis, The Northern Crown</a>";
    document.getElementById("found_coin").play();
  }
}

function cru_Click(id) {
  var i;
  if (id > 0) {
    var change = document.getElementsByClassName("cru"+id);
    for(i=0; i<change.length; i++){
      change[i].style.visibility = 'visible';
    }
  }
  if(id == 1 || id==3){
      cru_count = cru_count + 1;
  }
  var fill = document.getElementById("cru_a");
  fill.innerHTML ="Crux: "+ cru_count + "/2";
  document.getElementById("current_const").innerHTML = "Crux: "+ cru_count + "/2";
  document.getElementById("cru"+id).onclick = ""; //do nothing now
  if(cru_count == 2){
    score_count = score_count + 1;
    document.getElementById("cru_a").innerHTML = "<a href='/constellations#Cru'>Crux, The Southern Cross</a>";
    document.getElementById("found_coin").play();
  }
}

function dor_Click(id) {
  var i;
  if (id > 0) {
    var change = document.getElementsByClassName("dor"+id);
    for(i=0; i<change.length; i++){
      change[i].style.visibility = 'visible';
    }
  }
  if(id == 1 || id==2 || id==3 || id==4){
      dor_count = dor_count + 1;
  }
  var fill = document.getElementById("dor_a");
  fill.innerHTML ="Dorado: "+ dor_count + "/4";
  document.getElementById("current_const").innerHTML = "Dorado: "+ dor_count + "/4";
  document.getElementById("dor"+id).onclick = ""; //do nothing now
  if(dor_count == 4){
    score_count = score_count + 1;
    document.getElementById("dor_a").innerHTML = "<a href='/constellations#Dor'>Dorado, The Goldfish</a>";
    document.getElementById("found_coin").play();
  }
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
  document.getElementById("current_const").innerHTML = "Draco: "+ draco_count + "/16";
  document.getElementById("draco"+id).onclick = ""; //do nothing now
  if(draco_count == 16){
    score_count = score_count + 1;
    document.getElementById("draco_a").innerHTML = "<a href='/constellations#Dra'>Draco, The Dragon</a>";
    document.getElementById("found").play();
  }
}

function herc_Click(id) {
  var i;
  if (id > 0) {
    var change = document.getElementsByClassName("herc"+id);
    for(i=0; i<change.length; i++){
      change[i].style.visibility = 'visible';
    }
  }
  if(id == 1 || id==2 || id==3 || id==4|| id==6|| id==7|| id==8||id==9||id==10||id==12|| id==13||id==15||id==16){
      herc_count = herc_count + 1;
  }
  else if(id==11||id==14||id==17){
    herc_count = herc_count + 2;
  }
  var fill = document.getElementById("herc_a");
  fill.innerHTML ="Hercules: "+ herc_count + "/19";
  document.getElementById("current_const").innerHTML = "Hercules: "+ herc_count + "/19";
  document.getElementById("herc"+id).onclick = ""; //do nothing now
  if(herc_count == 19){
    score_count = score_count + 1;
    document.getElementById("herc_a").innerHTML = "<a href='/constellations#Her'>Hercules</a>";
    document.getElementById("found").play();
  }
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
  document.getElementById("current_const").innerHTML = "Cygnus: "+ cygnus_count + "/9";
  document.getElementById("cygnus"+id).onclick = ""; //do nothing now
  if(cygnus_count == 9){
    score_count = score_count + 1;
    document.getElementById("cygnus_a").innerHTML = "<a href='/constellations#Cyg'>Cygnus, The Swan</a>";
    document.getElementById("found").play();
  }
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
  document.getElementById("current_const").innerHTML = "Cepheus: "+ cep_count + "/9";
  document.getElementById("cep"+id).onclick = ""; //do nothing now
  if(cep_count == 9){
    score_count = score_count + 1;
    document.getElementById("cep_a").innerHTML = "<a href='/constellations#Cep'>Cepheus, The King</a>";
    document.getElementById("found_coin").play();
  }
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
  document.getElementById("current_const").innerHTML = "Bootes: "+ bootes_count + "/9";
  document.getElementById("bootes"+id).onclick = ""; //do nothing now
  if(bootes_count == 9){
    score_count = score_count + 1;
    document.getElementById("bootes_a").innerHTML = "<a href='/constellations#Boo'>Bootes, The Herdsman</a>";
    document.getElementById("found_coin").play();
  }
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
  fill.innerHTML ="Gemini: "+ gem_count + "/10";
  document.getElementById("current_const").innerHTML = "Gemini: "+ gem_count + "/10";
  document.getElementById("gem"+id).onclick = ""; //do nothing now
  if(gem_count == 10){
    score_count = score_count + 1;
    document.getElementById("gem_a").innerHTML = "<a href='/constellations#Gem'>Gemini, The Twins</a>";
    document.getElementById("found_coin").play();
  }
}

function hydra_Click(id) {
  var i;
  if (id > 0) {
    var change = document.getElementsByClassName("hydra"+id);
    for(i=0; i<change.length; i++){
      change[i].style.visibility = 'visible';
    }
  }
  if(id==2 || id==3 || id==4 ||id == 5 || id==6 || id==7 || id==8 || id==9||id==10 ||id==11 ||id==12 ||id==13 || id==14){
    hydra_count = hydra_count + 1;
  }
  else if(id == 1){
    hydra_count = hydra_count + 2;
  }
  var fill = document.getElementById("hydra_a");
  fill.innerHTML ="Hydra: "+ hydra_count + "/17";
  document.getElementById("current_const").innerHTML = "Hydra: "+ hydra_count + "/17";
  document.getElementById("hydra"+id).onclick = ""; //do nothing now
  if(hydra_count == 17){
    score_count = score_count + 1;
    document.getElementById("hydra_a").innerHTML = "<a href='/constellations#Hya'>Hydra</a>";
    document.getElementById("found").play();
  }
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
  fill.innerHTML ="Leo: "+ leo_count + "/10";
  document.getElementById("current_const").innerHTML = "Leo: "+ leo_count + "/10";
  document.getElementById("leo"+id).onclick = ""; //do nothing now
  if(leo_count == 10){
    score_count = score_count + 1;
    document.getElementById("leo_a").innerHTML = "<a href='/constellations#Leo'>Leo, The Lion</a>";
    document.getElementById("found_coin").play();
  }
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
  document.getElementById("current_const").innerHTML = "Leo Minor: "+ leo_minor_count + "/2";
  document.getElementById("leo_minor"+id).onclick = ""; //do nothing now
  if(leo_minor_count == 2){
    score_count = score_count + 1;
    document.getElementById("leo_minor_a").innerHTML = "<a href='/constellations#LMi'>Leo Minor, The Lesser Lion</a>";
    document.getElementById("found_coin").play();
  }
}

function lib_Click(id) {
  var i;
  if (id > 0) {
    var change = document.getElementsByClassName("lib"+id);
    for(i=0; i<change.length; i++){
      change[i].style.visibility = 'visible';
    }
  }
  if(id == 2||id == 3||id == 4||id == 5){
    lib_count = lib_count + 1;
  }
  else if(id==1){
    lib_count = lib_count + 2;
  }
  var fill = document.getElementById("lib_a");
  fill.innerHTML ="Libra: "+ lib_count + "/6";
  document.getElementById("current_const").innerHTML = "Libra: "+ lib_count + "/6";
  document.getElementById("lib"+id).onclick = ""; //do nothing now
  if(lib_count == 6){
    score_count = score_count + 1;
    document.getElementById("lib_a").innerHTML = "<a href='/constellations#Lib'>Libra, The Scale</a>";
    document.getElementById("found_coin").play();
  }
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
  document.getElementById("current_const").innerHTML = "Lyra: "+ lyra_count + "/7";
  document.getElementById("lyra"+id).onclick = ""; //do nothing now
  if(lyra_count == 7){
    score_count = score_count + 1;
    document.getElementById("lyra_a").innerHTML = "<a href='/constellations#Lyr'>Lyra, The Lyre</a>";
    document.getElementById("found_coin").play();
  }
}

function lynx_Click(id) {
  var i;
  if (id > 0) {
    var change = document.getElementsByClassName("lynx"+id);
    for(i=0; i<change.length; i++){
      change[i].style.visibility = 'visible';
    }
  }
  if(id==1||id==2 || id==3 || id==4||id==5||id==6){
    lynx_count = lynx_count + 1;
  }
  var fill = document.getElementById("lynx_a");
  fill.innerHTML ="Lynx: "+ lynx_count + "/6";
  document.getElementById("current_const").innerHTML = "Lynx: "+ lynx_count + "/6";
  document.getElementById("lynx"+id).onclick = ""; //do nothing now
  if(lynx_count == 6){
    score_count = score_count + 1;
    document.getElementById("lynx_a").innerHTML = "<a href='/constellations#Lyn'>Lynx</a>";
    document.getElementById("found_coin").play();
  }
}

function mon_Click(id) {
  var i;
  if (id > 0) {
    var change = document.getElementsByClassName("mon"+id);
    for(i=0; i<change.length; i++){
      change[i].style.visibility = 'visible';
    }
  }
  if(id==3 || id==4 || id==5|| id==6|| id==7){
    mon_count = mon_count + 1;
  }
  else if(id==1){
    mon_count = mon_count + 3;
  }
  var fill = document.getElementById("mon_a");
  fill.innerHTML ="Monoceros: "+ mon_count + "/8";
  document.getElementById("current_const").innerHTML = "Monoceros: "+ mon_count + "/8";
  document.getElementById("mon"+id).onclick = ""; //do nothing now
  if(mon_count == 8){
    score_count = score_count + 1;
    document.getElementById("mon_a").innerHTML = "<a href='/constellations#Mon'>Monoceros, The Unicorn</a>";
    document.getElementById("found_coin").play();
  }
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
  document.getElementById("current_const").innerHTML = "Orion: "+ orion_count + "/21";
  document.getElementById("orion"+id).onclick = ""; //do nothing now
  if(orion_count == 21){
    score_count = score_count + 1;
    document.getElementById("orion_a").innerHTML = "<a href='/constellations#Ori'>Orion, The Hunter</a>";
    document.getElementById("found").play();
  }
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
  document.getElementById("current_const").innerHTML = "Perseus: "+ pers_count + "/11";
  document.getElementById("pers"+id).onclick = ""; //do nothing now
  if(pers_count == 11){
    score_count = score_count + 1;
    document.getElementById("pers_a").innerHTML = "<a href='/constellations#Per'>Perseus</a>";
    document.getElementById("found_coin").play();
  }
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
  document.getElementById("current_const").innerHTML = "Pegasus: "+ pegas_count + "/13";
  document.getElementById("pegas"+id).onclick = ""; //do nothing now
  if(pegas_count == 13){
    score_count = score_count + 1;
    document.getElementById("pegas_a").innerHTML = "<a href='/constellations#Peg'>Pegasus</a>";
    document.getElementById("found").play();
  }
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
  document.getElementById("current_const").innerHTML = "Pisces: "+ pisc_count + "/16";
  document.getElementById("pisc"+id).onclick = ""; //do nothing now
  if(pisc_count == 16){
    score_count = score_count + 1;
    document.getElementById("pisc_a").innerHTML = "<a href='/constellations#Psc'>Pisces, The Fish</a>";
    document.getElementById("found").play();
  }
}

function pup_Click(id) {
  var i;
  if (id > 0) {
    var change = document.getElementsByClassName("pup"+id);
    for(i=0; i<change.length; i++){
      change[i].style.visibility = 'visible';
    }
  }
  if(id == 1 || id==5|| id==6|| id==7|| id==8){
    pup_count = pup_count + 1;
  }
  var fill = document.getElementById("pup_a");
  fill.innerHTML ="Puppis: "+ pup_count + "/5";
  document.getElementById("current_const").innerHTML = "Puppis: "+ pup_count + "/5";
  document.getElementById("pup"+id).onclick = ""; //do nothing now
  if(pup_count == 5){
    score_count = score_count + 1;
    document.getElementById("pup_a").innerHTML = "<a href='/constellations#Pup'>Puppis, The Poop Deck</a>";
    document.getElementById("found_coin").play();
  }
}

function sgr_Click(id) {
  var i;
  if (id > 0) {
    var change = document.getElementsByClassName("sgr"+id);
    for(i=0; i<change.length; i++){
      change[i].style.visibility = 'visible';
    }
  }
  if(id==4 || id==8|| id==10){
    sgr_count = sgr_count + 1;
  }
  else if(id==6||id==7||id==9||id==11){
    sgr_count = sgr_count + 2;
  }
  var fill = document.getElementById("sgr_a");
  fill.innerHTML ="Sagittarius: "+ sgr_count + "/11";
  document.getElementById("current_const").innerHTML = "Sagittarius: "+ sgr_count + "/11";
  document.getElementById("sgr"+id).onclick = ""; //do nothing now
  if(sgr_count == 11){
    score_count = score_count + 1;
    document.getElementById("sgr_a").innerHTML = "<a href='/constellations#Sgr'>Sagittarius, The Archer</a>";
    document.getElementById("found").play();
  }
}

function sco_Click(id) {
  var i;
  if (id > 0) {
    var change = document.getElementsByClassName("sco"+id);
    for(i=0; i<change.length; i++){
      change[i].style.visibility = 'visible';
    }
  }
  if(id == 1 || id==2 || id==3 || id==4|| id==5|| id==6|| id==7|| id==8||id==11|id==12||id==13||id==14||id==15||id==16){
    sco_count = sco_count + 1;
  }
  else if(id==9){
    sco_count = sco_count + 2;
  }
  var fill = document.getElementById("sco_a");
  fill.innerHTML ="Scorpius: "+ sco_count + "/16";
  document.getElementById("current_const").innerHTML = "Scorpius: "+ sco_count + "/16";
  document.getElementById("sco"+id).onclick = ""; //do nothing now
  if(sco_count == 16){
    score_count = score_count + 1;
    document.getElementById("sco_a").innerHTML = "<a href='/constellations#Sco'>Scorpius, The Scorpion</a>";
    document.getElementById("found").play();
  }
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
  document.getElementById("current_const").innerHTML = "Taurus: "+ taur_count + "/9";
  document.getElementById("taur"+id).onclick = ""; //do nothing now
  if(taur_count == 9){
    score_count = score_count + 1;
    document.getElementById("taur_a").innerHTML = "<a href='/constellations#Tau'>Taurus, The Bull</a>";
    document.getElementById("found_coin").play();
  }
}

function vel_Click(id) {
  var i;
  if (id > 0) {
    var change = document.getElementsByClassName("vel"+id);
    for(i=0; i<change.length; i++){
      change[i].style.visibility = 'visible';
    }
  }
  if(id == 1 || id==2 || id==3 || id==4 || id==5|| id==7|| id==8|| id==9){
    vel_count = vel_count + 1;
  }
  else if(id==10){
    vel_count = vel_count + 2;
  }
  var fill = document.getElementById("vel_a");
  fill.innerHTML ="Vela: "+ vel_count + "/10";
  document.getElementById("current_const").innerHTML = "Vela: "+ vel_count + "/10";
  document.getElementById("vel"+id).onclick = ""; //do nothing now
  if(vel_count == 10){
    score_count = score_count + 1;
    document.getElementById("vel_a").innerHTML = "<a href='/constellations#Vel'>Vela, The Sails</a>";
    document.getElementById("found").play();
  }
}

function virgo_Click(id) {
  var i;
  if (id > 0) {
    var change = document.getElementsByClassName("virgo"+id);
    for(i=0; i<change.length; i++){
      change[i].style.visibility = 'visible';
    }
  }
  if(id==3 || id==6 || id==7 || id==8 || id==10|| id==11|| id==12){
    virgo_count = virgo_count + 1;
  }
  else if(id==2 || id==4){
    virgo_count = virgo_count + 2;
  }
  var fill = document.getElementById("virgo_a");
  fill.innerHTML ="Virgo: "+ virgo_count + "/11";
  document.getElementById("current_const").innerHTML = "Virgo: "+ virgo_count + "/11";
  document.getElementById("virgo"+id).onclick = ""; //do nothing now
  if(virgo_count == 11){
    score_count = score_count + 1;
    document.getElementById("virgo_a").innerHTML = "<a href='/constellations#Vir'>Virgo, The Maiden</a>";
    document.getElementById("found").play();
  }
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

function start_score(){
  var skymap = document.getElementById("test");
  skymap.addEventListener("click", function(){
    var fill = document.getElementById("score");
    fill.innerHTML= score_count;
  });
}
