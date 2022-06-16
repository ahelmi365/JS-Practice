const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');
const ampm = document.getElementById('ampm');


setInterval(showTimeNow, 1000);

function showTimeNow() {
    // get the current time
    let timeNow = new Date;
    let timeNowHour = timeNow.getHours();
    let timeNowMinutes = timeNow.getMinutes();
    let timeNowSeconds = timeNow.getSeconds();
    // timeNowHour = 1;

    if (timeNowHour <= 12) {
        timeNowHour < 10 ? hours.textContent = '0' + timeNowHour : hours.textContent = timeNowHour;
    } else {
        let hoursDiff = timeNowHour - 12;
        hoursDiff < 10 ? hours.textContent = '0' + hoursDiff : hours.textContent = hoursDiff;
    }

    timeNowMinutes < 10 ? minutes.textContent = '0' + timeNowMinutes : minutes.textContent = timeNowMinutes;
    timeNowSeconds < 10 ? seconds.textContent = '0' + timeNowSeconds : seconds.textContent = timeNowSeconds;

    if (timeNowHour >= 12 && timeNowHour < 24) {
        ampm.textContent = "PM"
    } else {
        ampm.textContent = "AM"
    }

}