let menuBtn = document.querySelector("#menu-btn");
let menuDiv = document.querySelector("#menu-div");
let closeBtn = document.querySelector("#close-btn");

menuBtn.addEventListener("click", () => {
  menuDiv.classList.add("show");
  closeBtn.style.display = "block";
  menuBtn.style.display = "none";
});

closeBtn.addEventListener("click", () => {
  menuDiv.classList.remove("show");
  closeBtn.style.display = "none";
  menuBtn.style.display = "block";
});

let btn = document.querySelector("#stopwatchBtn");
let stopwatchTimer = document.querySelector("#stopwatchTimer");
let hr = 0;
let min = 0;
let sec = 0;
let ms = 0;
let interval;

btn.addEventListener("click", () => {
  if (!btn.classList.contains("active")) {
    btn.classList.add("active");
    btn.innerText = "STOP";
    interval = setInterval(updateTimer, 50); // Timer interval of 10ms for smoother increments
  } else {
    btn.classList.remove("active");
    btn.innerText = "START";
    clearInterval(interval);
  }
});

function updateTimer() {
  ms += 5; // Increment milliseconds by 1

  // Increment seconds if ms reaches 100
  if (ms >= 100) {
    ms = 0;
    sec++;

    // Increment minutes and hours as necessary
    if (sec >= 60) {
      sec = 0;
      min++;
    }
    if (min >= 60) {
      min = 0;
      hr++;
    }
  }

  setValues(hr, min, sec, ms);
}

function setValues(hr, min, sec, ms) {
  stopwatchTimer.innerText = String(hr).padStart(2, '0') + ":" +
                              String(min).padStart(2, '0') + ":" +
                              String(sec).padStart(2, '0') + ":" +
                              String(ms).padStart(2, '0');
}

let resetBtn = document.querySelector("#resetBtn");

resetBtn.addEventListener("click", () => {
  hr = 0;
  min = 0;
  sec = 0;
  ms = 0;
  clearInterval(interval);
  setValues(hr, min, sec, ms);
});
