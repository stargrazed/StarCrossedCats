// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
// You can use CoffeeScript in this file: http://coffeescript.org/

function star(find_stars){
  $.getJSON(find_stars, function(data){
    var items = [];
    $.each(data, function(index, val) {
        console.log(val);
        items.push(val.label);
        items.push(" x: "+val.x);
        items.push(" y: "+val.y);
        items.push(" z: "+val.z);
        items.push(" color: "+val.colorb_v);
        items.push(" App_Mag: "+val.appmag);
        $(".star_container").append("<li style='list-style-type: none;'>"+items+"</li>");
        items = [];
    });
  });
}

function star2(find_stars){ //for copying into an array more easily
  $.getJSON(find_stars, function(data){
    var items = [];
    var star = [];
    var radius;
    $.each(data, function(index, val) {
        console.log(val);
        items.push(val.x);
        items.push(val.y);
        items.push(val.z);

        radius = Math.sqrt(items[0]*items[0]+items[1]*items[1]+items[2]*items[2]);
        items[0] = radius;
        items[1] = 180*(Math.atan((val.y/val.x)))/Math.PI;
        items[2] = 180*(Math.acos((val.z/radius)))/Math.PI;

        star.push("["+items[1]);
        star.push(" "+items[2]);
        star.push(" "+val.appmag);
        star.push(" "+val.colorb_v+"],");

        $(".star_container").append("<li style='list-style-type: none;'>"+star+"</li>");
        items = [];
        star = [];
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

//parseInt() turn string into int
//toString() turn int into string
//https://star-api.herokuapp.com/api/v1/constellation_star_unions
//https://star-api.herokuapp.com/api/v1/constellation_star_unions?min[constellation_id]=137&max[constellation_id]=139
//https://star-api.herokuapp.com/api/v1/constellations
