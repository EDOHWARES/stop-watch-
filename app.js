const stop = document.getElementById("stop"),
start = document.getElementById("start"),
reset = document.getElementById("reset");

const watch = document.getElementById("watch");

let [seconds, minutes, hours] = [0, 0, 0];

let timer = null;


function watchCount() {
    seconds++;
    if (seconds == 60) {
        seconds = 0
        minutes++;
        if (minutes == 60) {
            minutes = 0
            hours++;
        }
    }
    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;
    watch.innerHTML = `${h}:${m}:${s}`
}

function details() {
    if(timer !== null) {
        clearInterval(timer)
    }
    timer = setInterval(watchCount, 1000);
}

start.addEventListener("click", () => {
    details()
})

stop.addEventListener("click", () => {
    clearInterval(timer)
})

reset.addEventListener("click", () => {
    clearInterval(timer);
    [seconds, minutes, hours] = [0, 0, 0];
    watch.innerHTML = `00:00:00`;
    details();
})





