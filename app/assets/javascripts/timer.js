function clickedSkymap(){
    var clickCnt = 0;
    var skymap = document.getElementById("test");
    skymap.addEventListener('click', function(event){
        clickCnt += 1;
        if(clickCnt == 1)
            startTimer();
    }, false);
}

function startTimer(){
    var x = document.getElementById("timer");
    
}
