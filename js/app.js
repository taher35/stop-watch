const stopwatchStart = document.getElementById('playButton');
const stopwatchReset = document.getElementById('resetButton');
const stopwatchPause = document.getElementById('pauseButton');
const minutes = document.getElementById('minute');
const seconds = document.getElementById('second');


let min;
let sec = 0;
let timer = null;
let watchIsRunning = false;

function start(){
    if(!watchIsRunning){
        watchIsRunning = true;
        timer = setInterval(function(){
            sec++;
            let {min, second} = getTime(sec);
            minutes.textContent = min <10 ? ('0' + min) : min;
            seconds.textContent = second <10 ? ('0' + second) : second;
        }, 1000)
    }
}

function reset(){
    watchIsRunning = false
    clearInterval(timer); 
    min = 0;
    sec = 0;
    minutes.textContent = '00';
    seconds.textContent = '00';
}

function pause(){
    watchIsRunning = false
    clearInterval(timer);
}

function getTime(sec){
    min = parseInt(sec / 60);
    let second = parseInt(sec % 60);

    return{
        min,
        second
    }

}


stopwatchStart.addEventListener('click', start);
stopwatchReset.addEventListener('click', reset);
stopwatchPause.addEventListener('click', pause);