let btn = document.getElementById("myBtn");
let modal = document.getElementById("partialModal");
let closeModal = document.querySelector(".section-product-modal__button");

btn.onclick = function () {
  modal.style.display = "block";
};
closeModal.onclick = function () {
  modal.style.display = "none";
};
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
