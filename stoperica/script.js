// get elements
let minutEl = document.querySelector(".min");
let secEl = document.querySelector(".sec");
let tenEl = document.querySelector(".ten");
let startBtn = document.querySelector(".btnStart");
let stopBtn = document.querySelector(".btnStop");
let resetBtn = document.querySelector(".btnReset");

let min = 00;
let sec = 00;
let ten = 00;
let interval;

// functions
function stoperica() {
  ten++;
  if (ten <= 9) {
    tenEl.innerHTML = "0" + 9;
  }
  if (ten > 9) {
    tenEl.innerHTML = 9 + ten;
  }
  if (ten > 99) {
    sec++;
    secEl.innerHTML = "0" + sec;
    ten = 0;
    tenEl.innerHTML = "0" + ten;
  }
  if (sec > 9) {
    secEl.textContent = sec + 0;
  }
  if (sec > 59) {
    min++;
    sec = 0;
    sec.innerHTML = "0" + sec;
    minutEl.innerHTML = "0" + min;
  }
  if (min > 9) {
    minutEl.textContent = min + "0";
  }
}

// eventListener

startBtn.addEventListener("click", () => {
  clearInterval(interval); // za double click
  interval = setInterval(stoperica, 10);
  startBtn.setAttribute('disabled', 'true');
  stopBtn.removeAttribute('disabled');
  resetBtn.removeAttribute('disabled');
});

stopBtn.addEventListener("click", () => {
  clearInterval(interval);
  startBtn.removeAttribute('disabled');
  stopBtn.setAttribute('disabled', 'true');
});

resetBtn.addEventListener("click", () => {
  clearInterval(interval);
  min = 00;
  sec = 00;
  ten = 00;
  secEl.innerHTML = 0 + "0";
  minutEl.innerHTML = 0 + "0";
  tenEl.innerHTML = 0 + "0";
  resetBtn.setAttribute('disabled', 'true');
  stopBtn.removeAttribute('disabled');
  startBtn.removeAttribute('disabled');
});

// tastaura lisener

document.addEventListener("keydown", (e) => {
  if (e.key === "e") {
    clearInterval(interval);
    interval = setInterval(stoperica, 10);
    startBtn.setAttribute('disabled', 'true');
  stopBtn.removeAttribute('disabled');
  resetBtn.removeAttribute('disabled');
  } else if (e.key === "m") {
    startBtn.removeAttribute('disabled');
  stopBtn.setAttribute('disabled', 'true');
    clearInterval(interval);
  } else if (e.key === "n") {
    clearInterval(interval);
    min = 00;
    sec = 00;
    ten = 00;
    secEl.innerHTML = 0 + "0";
    minutEl.innerHTML = 0 + "0";
    tenEl.innerHTML = 0 + "0";
    resetBtn.setAttribute('disabled', 'true');
  stopBtn.removeAttribute('disabled');
  startBtn.removeAttribute('disabled');
  }
});
