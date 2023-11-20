var [seconds,minutes, hours] = [0,0,0];
let displaytime = document.getElementById("displaytime");
let timer = null;

function stopWatch(){
    seconds++;
    if(seconds == 60){
        seconds = 0;
        minutes++;
        if(minutes== 60){
            minutes = 0;
            hours++; 
        }
    }
    displaytime.innerHTML= hours +":"+ minutes+":"+ hours;
}
// displaytime.innerHTML= hours +":"+ minutes+":"+ hours;
function watchStart(){
    if(timer!== null){
        clearInterval(timer);
    }
    timer = setInterval(stopWatch,1000);
}