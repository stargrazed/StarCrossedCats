

function clickedSkymap(){
    var clickCnt = 0;
    var skymap = document.getElementById("test");
    skymap.addEventListener('click', function(event){
        if(clickCnt != 1)
            clickCnt += 1;
        if(clickCnt == 1)
            startTimer();
    }, false);
}

function startTimer(){
    var time = document.getElementById("timer");
    var timerVar = setInterval(countTimer, 1000);
    var timeInSec = 0;

    function countTimer(){
        ++timeInSec;
        var hour = pad(Math.floor(timeInSec / 3600));
        var minute = pad(Math.floor((timeInSec - hour * 3600) / 60));
        var second = pad(timeInSec - (hour * 3600 + minute * 60));

        time.innerHTML = hour + ":" + minute + ":" + second;
    }
}

function pad(n){
    var nString = n + "";
    if(nString.length < 2)
        return "0" + nString;
    else
        return  nString;
}
