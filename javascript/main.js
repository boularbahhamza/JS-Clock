const secondHand = document.querySelector(".second-hand");
const minsHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");
const hand = document.querySelector(".hand");
const audio = new Audio("../media/tick.mp3");

function setDate() {
  const now = new Date();
  const seconds = now.getSeconds();
  const secondDegrees = seconds / 60 * 360 + 90;
  secondHand.style.transform = "rotate(" + secondDegrees + "deg)";
  audio.volume = 0.1;
  audio.play();
  console.log(secondDegrees);
  if (secondDegrees === 444) {
    hand.style.dosplay = "none";
  }
  const mins = now.getMinutes();
  const minsDegrees = mins / 60 * 360 + 90;
  minsHand.style.transform = "rotate(" + minsDegrees + "deg)";

  const hour = now.getHours();
  const hourDegrees = hour / 12 * 360 + 90;
  hourHand.style.transform = "rotate(" + hourDegrees + "deg)";
}
setInterval(setDate, 1000);
