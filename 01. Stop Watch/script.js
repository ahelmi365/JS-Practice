// get all buttons and timers ByID
let minutes = document.getElementById('minutes');
let separator = document.getElementById('separator');
let seconds = document.getElementById('seconds');

let startBtn = document.getElementById('start');
let stopBtn = document.getElementById('stop');
let resetBtn = document.getElementById('reset');

// declare a variable to store the ID returned from the setInterval() function 
// this variable is to clearInterval when the resetBtn is clicked
let timeIntervalID;


// declare 2 variables to track the number of Seconds snd Minutes
let secondsVal = 0;
let minutesVal = 0;


// addEventListener to the 3 buttons in the program
startBtn.addEventListener('click', startTimer);
resetBtn.addEventListener('click', resetTimer);
stopBtn.addEventListener('click', stopTimer);

// Functions to be used when the startBtn is clicked 
function startTimer() {
    startBtn.setAttribute("disabled", true);
    timeIntervalID = setInterval(calculateTimer, 1000);
}

// Function to be called every 1 Second when the startBtn is clicked 
function calculateTimer() {
    secondsVal += 1;
    secondsVal < 10 ? seconds.textContent = "0" + secondsVal : seconds.textContent = secondsVal;

    if (secondsVal == 60) {
        secondsVal = 0;
        seconds.textContent = "0" + secondsVal;
        minutesVal += 1;
        minutesVal < 10 ? minutes.textContent = "0" + minutesVal : minutes.textContent = minutesVal;
    }

}

// Functions to be used when the resettBtn is clicked
function resetTimer() {
    clearInterval(timeIntervalID);
    startBtn.removeAttribute("disabled", true);
    secondsVal = 0;
    minutesVal = 0;
    seconds.textContent = "00";
    minutes.textContent = "00";
}

// Functions to be used when the stopBtn is clicked
function stopTimer() {
    clearInterval(timeIntervalID);
    startBtn.removeAttribute("disabled", true);
}