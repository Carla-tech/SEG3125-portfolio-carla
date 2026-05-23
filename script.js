// Small interaction to show the page uses JavaScript.
document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".case-card, .process-card");
  cards.forEach((card) => {
    card.addEventListener("focusin", () => card.classList.add("shadow-soft"));
    card.addEventListener("focusout", () => card.classList.remove("shadow-soft"));
  });
});
