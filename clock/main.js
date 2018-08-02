function Main() {
  const secondHand = document.querySelector(".second-hand");
  const minuteHand = document.querySelector(".minute-hand");
  const hourHand = document.querySelector(".hour-hand");

  const time = document.querySelector(".time");

  function Clock() {
    const d = new Date();
    const seconds = d.getSeconds();
    const secondDegree = (seconds / 60) * 360 + 90;
    secondHand.style.transform = `rotate(${secondDegree}deg)`;

    const minutes = d.getMinutes();
    const minuteDegree = (minutes / 60) * 360 + 90;
    minuteHand.style.transform = `rotate(${minuteDegree}deg)`;

    const hours = d.getHours();
    const hourDegree = (hours / 12) * 360 + 90;
    hourHand.style.transform = `rotate(${hourDegree}deg)`;

    if (seconds === 0) {
      secondHand.style.transitionDuration = "0s";
      minuteHand.style.transitionDuration = "0s";
      hourHand.style.transitionDuration = "0s";
    }

    time.innerText = d.toLocaleTimeString();
  }

  setInterval(Clock, 1000);
}

window.addEventListener("load", Main);
