let darkModeBtn = document.querySelectorAll(".dark-mode-btn");
let body = document.querySelector("body");
let productCards = document.querySelectorAll(".product-list--cards--card");
let productsInCart = document.querySelectorAll(".product-in-cart--dark-themed");

function darkTheme() {
  body.classList.toggle("dark-mode--body");
  productCards.forEach((product) =>
    product.classList.toggle("product-list--cards--card--dark-theme")
  );
  productsInCart.forEach((product) =>
    product.classList.toggle("product-in-cart--dark-theme")
  );
}
