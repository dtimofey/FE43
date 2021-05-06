let x;
let startstop = 0;

function startStop() {

  startstop = startstop + 1;

  if (startstop === 1) {
    start();
    document.getElementById("start").innerHTML = "STOP";
  }
  else if (startstop === 2) {
    document.getElementById("start").innerHTML = "START";
    startstop = 0;
    stop();
  }
	else if (startstop === 2) {
  	document.getElementById("start").style.backgroundColor = "red";
  }
}

function start() {
  x = setInterval(stopwatch, 1000);
} 

function stop() {
  clearInterval(x);
} 

let sec = 1; 
let min = 0;

let secOut = 0;
let minOut = 0;

function stopwatch() {

  secOut = checkTime(sec);
  minOut = checkTime(min);

  sec = ++sec;

  if (sec == 60) {
    min = ++min;
    sec = 0;
  }

  document.getElementById("sec").innerHTML = secOut;
  document.getElementById("min").innerHTML = minOut;

}

function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

function reset() {

  sec = 1;
  min = 0

  document.getElementById("sec").innerHTML = "00";
  document.getElementById("min").innerHTML = "00";

}