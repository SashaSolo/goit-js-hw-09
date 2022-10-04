function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyElem = document.querySelector('body');

const startBtn = document.querySelector('[data-start]');

const stopBtn = document.querySelector('[data-stop]');

startBtn.addEventListener('click', btnStart);

stopBtn.addEventListener('click', btnStop);

let timerId = null;

function btnStart() {
  startBtn.disabled = true;
  stopBtn.disabled = false;
  timerId = setInterval(() => {
    bodyElem.style.background = getRandomHexColor();
  }, 1000);
}

function btnStop() {
  startBtn.disabled = false;
  stopBtn.disabled = true;
  clearInterval(timerId);
}
