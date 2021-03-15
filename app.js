"use strict"

const clock = document.querySelector("#clock");

const updateTime = () => {
    const currentTime = new Date();
    const options = {
        second: "numeric",
        minute: "numeric",
        hours: "numeric",
        day: "numeric",
        month: "numeric",
        year: "numeric",
        weekday: "short"
    };
    const formatTime = new Intl.DateTimeFormat(navigator.language, options).format(currentTime);
    clock.textContent = formatTime;
}

window.addEventListener("load", event => {
    event.preventDefault();
    updateTime();
    const leftMilliseconds = 1000 - new Date().getMilliseconds();
    setTimeout(() => {
        setInterval(() => {
            updateTime();
        }, 1000);
        updateTime();
    }, leftMilliseconds);
});
