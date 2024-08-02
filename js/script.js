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
    card.addEventListener('mouseleave', function reset() {
        clearInterval(interval); 
  
        let resetCurrent = parseInt(percentage.textContent);
        const resetInterval = setInterval(() => {
          if (resetCurrent >= 0) {
            percentage.textContent = `${resetCurrent}%`;
            resetCurrent--;
          } else {
            clearInterval(resetInterval);
            card.removeEventListener('mouseleave', reset);
          }
        }, 10); 
      });
  });
});
