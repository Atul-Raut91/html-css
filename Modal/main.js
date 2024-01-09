const modalOpenBtn = document.querySelector(".open-modal-btn");
const modalCloseBtn = document.querySelector(".modal-close-btn");
const modalOverlay = document.querySelector(".modal-overlay");

modalOpenBtn.addEventListener("click", () => {
  modalOverlay.classList.add("modal-overlay-close");
});

modalCloseBtn.addEventListener("click", () => {
    modalOverlay.classList.remove("modal-overlay-close");
  });
