window.addEventListener("DOMContentLoaded", () => {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const h1Element = document.querySelector("h1");

  const startAnimation = () => {
    let iterations = 0;

    const interval = setInterval(() => {
      h1Element.innerText = h1Element.innerText.split("")
        .map((letter, index) => {
          if (index < iterations) {
            return h1Element.dataset.value[index];
          }

          return letters[Math.floor(Math.random() * letters.length)];
        })
        .join("");

      if (iterations >= h1Element.dataset.value.length) {
        clearInterval(interval);
        setTimeout(startAnimation, 3000);
      }

      iterations += 1 / 3;
    }, 10);
  };

  startAnimation(); // Start the animation immediately
});