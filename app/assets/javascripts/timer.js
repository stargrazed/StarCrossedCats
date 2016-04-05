var triggered = 0;
var time;
var timeVar;

function clickedSkymap(){
    var skymap = document.getElementById("test");
    skymap.addEventListener('click', function(event){
        if(triggered == 0){
            startTimer();
        }
        triggered = 1;
    }, false);
}

function startTimer(){
    time = document.getElementById("timer");
    timeVar = setInterval(countTimer, 1000);
    var timeInSec = 0;

    function countTimer(){
        ++timeInSec;
        var day = Math.floor(timeInSec / 86400);
        var hour = pad(Math.floor(timeInSec / 3600));
        var minute = pad(Math.floor((timeInSec - hour * 3600) / 60));
        var second = pad(timeInSec - (hour * 3600 + minute * 60));

        if(hour > 24)
            hour -= 24 * day;

        if(hour % 24 == 0)
            hour = pad(0);

        var displayTime = hour + ":" + minute + ":" + second;

        if(day > 0){
            displayTime = day + " " + formatDay(day) + ", " + displayTime;
        }
        time.innerHTML = displayTime;

        if(document.getElementById("zod") && score_count == 12)
            stopTimer();
        else if(document.getElementById("west") && score_count == 16)
            stopTimer();
        else if(document.getElementById("east") && score_count == 18)
            stopTimer();
        else if(document.getElementById("current") && score_count == 18)
            stopTimer();
    }
}

function pad(n){
    var nString = n + "";
    if(nString.length < 2)
        return "0" + nString;
    else
        return  nString;
}

function formatDay(day){
    var strDay = "day";
    if(day > 1)
        strDay += "s";
    return strDay;
}

function resetClick(){
    triggered = 0;
    clearInterval(timeVar)
}

function stopTimer(){
    clearInterval(timeVar);
}
