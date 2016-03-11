// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
// You can use CoffeeScript in this file: http://coffeescript.org/

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

function constell(constellation){
  $.getJSON(constellation, function(data){
    var items = [];
    $.each(data, function(index, val) {
        console.log(val);
        items.push(index);
        items.push(" Name: "+val.name);
        items.push("   Galaxy: "+val.galaxy);
        $(".star_container").append("<li style='list-style-type: none;'>"+items+"</li>");
        items = [];
    });
  });
}

function multi(){
  var canvas = document.getElementById('Canvas');
  var ctx = canvas.getContext('2d');
  var x, y;
  x = 40;
  y = 30;
  while(x < 900){
    y=0;
    while(y < 900){
      ctx.beginPath();
      ctx.arc(x, y, 2, 0, Math.PI*2);
      ctx.fillStyle ='#ff0055';
      ctx.fill();
      y+=30;
    }
    x+=30;
  }
}

function drawStar(x,y){
  var canvas = document.getElementById('Canvas');
  var ctx = canvas.getContext('2d');
  ctx.beginPath();
  ctx.arc(x*3+300, y*3, 2, 0, Math.PI*2);
  ctx.fillStyle ='#ff0055';
  ctx.fill();
}

//https://star-api.herokuapp.com/api/v1/constellation_star_unions
//https://star-api.herokuapp.com/api/v1/constellation_star_unions?min[constellation_id]=137&max[constellation_id]=139
//https://star-api.herokuapp.com/api/v1/constellations
