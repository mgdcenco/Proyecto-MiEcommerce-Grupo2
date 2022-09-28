let darkModeBtn = document.querySelectorAll(".dark-mode-btn");
let body = document.querySelector("body");
let productCards = document.querySelectorAll(".product-list--cards--card");
let productsInCart = document.querySelectorAll(".product-in-cart");
console.log(productsInCart);

let theme = localStorage.getItem("Theme");
window.addEventListener("load", function (e) {
  //Chequeo el localStorage
  if (theme === "Dark") {
    body.classList.toggle("dark-mode--body");
    productCards.forEach((product) =>
      product.classList.toggle("product-list--cards--card--dark-theme")
    );
    productsInCart.forEach((product) =>
      product.classList.toggle("product-in-cart--dark-theme")
    );
    productsInCart.forEach((product) =>
      product.classList.toggle("product-in-cart--dark-theme")
    );
  }
});

function darkTheme() {
  //Chequeo el localStorage
  if (theme === null || theme === "Light") {
    localStorage.setItem("Theme", "Dark");
  } else if (theme === "Dark") localStorage.setItem("Theme", "Light");
  //Seteo las clases
  body.classList.toggle("dark-mode--body");
  productCards.forEach((product) =>
    product.classList.toggle("product-list--cards--card--dark-theme")
  );
  productsInCart.forEach((product) =>
    product.classList.toggle("product-in-cart--dark-theme")
  );
}
