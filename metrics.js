(function () {
  function animateHighlights() {
    document.querySelectorAll(".metric-value").forEach(function (el) {
      el.classList.remove("metric-pop");
      void el.offsetWidth;
      el.classList.add("metric-pop");
    });

    document.querySelectorAll(".tech-green").forEach(function (el) {
      el.classList.remove("tech-flicker");
      void el.offsetWidth;
      el.classList.add("tech-flicker");
    });
  }

  function init() {
    setTimeout(animateHighlights, 2000);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();