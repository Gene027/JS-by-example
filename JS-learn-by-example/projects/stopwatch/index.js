
const timeDisplay = document.querySelector("#timeDisplay");
const startBtn = document.querySelector("#startBtn");
const pauseBtn = document.querySelector("#pauseBtn");
const resetBtn = document.querySelector("#resetBtn");

let startTime = 0;
let elapsedTime = 0;
let currentTime = 0;
let paused = true;
let intervalId;
let hrs = 0;
let mins = 0;
let secs = 0;

startBtn.addEventListener("click", () => {
    if(paused){
        paused = false;                 //set paused to false ie: play
        startTime = Date.now() - elapsedTime;  // a time value in ms thats marks an instance t
        intervalId = setInterval(updateTime, 1000); //run timer update every 1 sec ie: 1000ms
    }
});
pauseBtn.addEventListener("click", () => {
    if(!paused){
        paused = true;
        elapsedTime = Date.now() - startTime;
        clearInterval(intervalId);
    }
});
resetBtn.addEventListener("click", () => {
    paused = true;
    clearInterval(intervalId);
    startTime = 0;
    elapsedTime = 0;
    currentTime = 0;
    hrs = 0;
    mins = 0;
    secs = 0;
    timeDisplay.textContent = "00:00:00";
});

function updateTime(){
    elapsedTime = Date.now() - startTime;

    secs = Math.floor((elapsedTime / 1000) % 60);       // 1 % 60 = 1;  59 % 60 = 59; 60 % 60 = 0;
    mins = Math.floor((elapsedTime / (1000 * 60)) % 60); //range of sec or mins output is restricted to < 60
    hrs = Math.floor((elapsedTime / (1000 * 60 * 60)) % 60);

    secs = pad(secs);
    mins = pad(mins);
    hrs = pad(hrs);

    timeDisplay.textContent = `${hrs}:${mins}:${secs}`;

    function pad(unit){
        return (("0") + unit).length > 2 ? unit : "0" + unit;  // appends a zero to unit if unit.length is < 2. ie. for 10 tens it does nothing
    }
}