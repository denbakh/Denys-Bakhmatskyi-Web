(() => {
  const refs = {
    firstOpenModalBtn: document.querySelector("[data-first-gamemodal-open]"),
    secondOpenModalBtn: document.querySelector("[data-second-gamemodal-open]"),
    thirdOpenModalBtn: document.querySelector("[data-third-gamemodal-open]"),
    fourthOpenModalBtn: document.querySelector("[data-fourth-gamemodal-open]"),
    closeModalBtn: document.querySelector("[data-gamemodal-close]"),
    modal: document.querySelector("[data-gamemodal]"),
  };
  refs.firstOpenModalBtn.addEventListener("click", toggleModal);
  refs.secondOpenModalBtn.addEventListener("click", toggleModal);
  refs.thirdOpenModalBtn.addEventListener("click", toggleModal);
  refs.fourthOpenModalBtn.addEventListener("click", toggleModal);

  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();
