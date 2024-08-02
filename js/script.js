"use strict";
document.querySelectorAll(".card").forEach((card) => {
  card.addEventListener("mouseover", function () {
    let percentage = card.querySelector(".percentage");
    let current = 0;
    let target = 85;

    const interval = setInterval(() => {
      if (current <= target) {
        percentage.textContent = `${current}%`;
        current++;
      } else {
        clearInterval(interval);
      }
    }, 5);
  });
});
