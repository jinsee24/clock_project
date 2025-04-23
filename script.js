const time = document.getElementById('time');
const timeformet = document.getElementById('timeformet');  // Correct ID

const showtime = () => {
    let date = new Date();

    let hr = date.getHours();
    let mins = date.getMinutes();
    let secs = date.getSeconds();
    
    let ampm = hr >= 12 ? "PM" : "AM";

    // Convert to 12-hour format
    hr = hr % 12 || 12;

    // Add leading zeros if necessary
    hr = hr < 10 ? `0${hr}` : hr;
    mins = mins < 10 ? `0${mins}` : mins;
    secs = secs < 10 ? `0${secs}` : secs;

    time.innerHTML = `${hr} : ${mins} : ${secs}`;
    timeformet.innerHTML = ampm;
};

document.addEventListener('DOMContentLoaded', () => {
    showtime(); 
    setInterval(showtime, 1000);
});




