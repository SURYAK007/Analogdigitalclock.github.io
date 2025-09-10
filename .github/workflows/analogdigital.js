//Analog Clock
let hr = document.querySelector('#hr');
let mn = document.querySelector('#mn');
let sc = document.querySelector('#sc');
let hours = document.getElementById('hour');
let minutes = document.getElementById('minutes');
let seconds= document.getElementById('seconds');



setInterval(() => {
    let day = new Date();
    let h = day.getHours();
    let m = day.getMinutes();
    let s = day.getSeconds();
    let hh = h * 30;
    let mm = m * 6;
    let ss = s * 6;

    hr.style.transform = `rotateZ(${hh + (mm / 12)}deg)`;
    mn.style.transform = `rotateZ(${mm}deg)`;
    sc.style.transform = `rotateZ(${ss}deg)`; 

    

    // Convert 24-hour clock to 12-hour clock
    h = h % 12; // Convert to 12-hour format
    h = h ? h : 12; // If h is 0, set it to 12

    // Add zero before single digit numbers
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    hours.innerHTML = h;
    minutes.innerHTML = m;
    seconds.innerHTML = s;
    
});
