let numberOfSeconds = document.querySelector(".number-of-seconds");
let numberOfMinutes = document.querySelector(".number-of-minutes");
let numberOfHours = document.querySelector(".number-of-hours");
let numberOfDay = document.querySelector(".number-of-day");
//
let setInTerval = setInterval(setInt, 1000);

function setInt() {
    numberOfSeconds.innerHTML--;
    // if
    if (numberOfSeconds.innerHTML === '0') {
        numberOfSeconds.innerHTML = "60";
        numberOfMinutes.innerHTML--;
        if (numberOfMinutes.innerHTML === '0') {
            numberOfMinutes.innerHTML = "60";
            numberOfHours.innerHTML--;
        }
        if ( numberOfHours.innerHTML === '0') {
            numberOfHours.innerHTML = "24";
            numberOfDay.innerHTML--;
        }
        if (numberOfDay.innerHTML === '0') {
            clearInterval(setInTerval);
        }
        }
    // local-storage
    localStorage.setItem("Seconds", `${numberOfSeconds.innerHTML}`);
    localStorage.setItem("Minutes", `${numberOfMinutes.innerHTML}`);
    localStorage.setItem("Hours", `${numberOfHours.innerHTML}`);
    localStorage.setItem("Day", `${numberOfDay.innerHTML}`);
};

if (localStorage.getItem("Seconds")) {
    numberOfSeconds.innerHTML = localStorage.getItem("Seconds");
}
if (localStorage.getItem("Minutes")) {
    numberOfMinutes.innerHTML = localStorage.getItem("Minutes");
}
if (localStorage.getItem("Hours")) {
    numberOfHours.innerHTML = localStorage.getItem("Hours");
}
if (localStorage.getItem("Day")) {
    numberOfDay.innerHTML = localStorage.getItem("Day");
}

let Mutual = document.querySelectorAll(".Mutual");

Mutual.forEach((el) => {
    el.onmouseover = function() {
        el.style.cssText = "transition-duration: 0.3s; border-color: #2196f3;";
        el.children[1].style = "transition-duration: 0.3s; border-color: #2196f3;";
    }
    el.onmouseleave= function() {
        el.style.cssText = "transition-duration: 0.3s; border-color: #d4d4d4;";
        el.children[1].style = "transition-duration: 0.3s; border-color: #d4d4d4;";
    }
})