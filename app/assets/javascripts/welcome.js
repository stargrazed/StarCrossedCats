// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
// You can use CoffeeScript in this file: http://coffeescript.org/

function star(find_stars){
  $.getJSON(find_stars, function(data){
    var items = [];
    $.each(data, function(index, val) {
      if(val.label){
        console.log(val);
        items.push(index);
        items.push(" "+val.label+" ");
        items.push(" x: "+val.x);
        items.push(" y: "+val.y);
        items.push(" z: "+val.z);
        $(".star_container").append("<li style='list-style-type: none;'>"+items+"</li>");
        items = [];
      }
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
