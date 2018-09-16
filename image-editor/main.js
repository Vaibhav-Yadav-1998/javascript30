function Main() {
  const inputs = document.querySelectorAll("input");

  const handleInput = e => {
    const suffix = e.target.dataset.suffix || "";

    document.documentElement.style.setProperty(
      `--${e.target.name}`,
      e.target.value + suffix
    );
  };

  inputs.forEach(input => {
    input.addEventListener("input", handleInput);
  });
}

window.addEventListener("load", Main);
