let btn = document.getElementById("myBtn");
let modal = document.getElementById("partialModal");
let closeModal = document.querySelector(".section-product-modal__button");
if(btn){
  btn.onclick = function () {
    modal.style.display = "block";
  };
  closeModal.addEventListener("click", function () {
    modal.style.display = "none";
  });
  window.addEventListener("click", function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  });

}
