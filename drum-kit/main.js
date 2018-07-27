function Drum(e) {
  const keys = document.querySelectorAll(".keys");
  const keyCode = e.keyCode;
  const sounds = document.querySelectorAll("audio");

  keys.forEach(i => {
    if (i.getAttribute("data-key") == keyCode) {
      i.classList.add("playing");
      setTimeout(() => {
        i.classList.remove("playing");
      }, 100);
    }
  });

  sounds.forEach(i => {
    if (i.getAttribute("data-key") == keyCode) {
      i.currentTime = 0;
      i.play();
    }
  });
}

window.addEventListener("keydown", Drum);
