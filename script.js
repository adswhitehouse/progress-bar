let number = document.querySelector(".jsNumber");
let circle = document.querySelector("circle");

let percent = 0;
let interval = setInterval(() => {
  if (percent == 85) {
    clearInterval(interval);
  } else {
    percent++;
    number.textContent = `${percent}%`;
  }
}, 23.5);
