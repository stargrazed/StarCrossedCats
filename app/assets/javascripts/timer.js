function clickedSkymap(){
    var skymap = document.getElementById("test");
    skymap.addEventListener('click', function(event){
        startTimer();
    }, false);
}

function startTimer(){
    var x = document.getElementById("timer");
    x.innerHTML = "Time has started counting";
}
