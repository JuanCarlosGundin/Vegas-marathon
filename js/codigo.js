window.onscroll = function() {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("nav").style.backgroundColor = "rgba(255,255,255,0.5";
        // document.getElementById("nav").style.backdropFilter = "blur(4px)";
        //document.getElementById("nav").style.backdropFilter = "sepia(0.9)";
    } else {
        document.getElementById("nav").style.backgroundColor = "rgba(255,255,255,0.5)";
        // document.getElementById("nav").style.backdropFilter = "blur(0px)";
        //document.getElementById("nav").style.backdropFilter = "sepia(0.9)";
    }
};

function startTimer(duration, display) {
    var timer = duration,
        minutes, seconds;
    setInterval(function() {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}

document.addEventListener("DOMContentLoaded", () => {
    var fiveMinutes = 60 * 45,
        display = document.querySelector('#time');
    startTimer(fiveMinutes, display);
});