let darkModeBtn = document.querySelectorAll(".dark-mode-btn");
let body = document.querySelector("body");
let productCards = document.querySelectorAll(".product-list--cards--card");
let breadcrumb = document.querySelector(".breadcrumb");
let productDetail = document.querySelector(".section-product-detail");
let searchInput = document.querySelector(".search-input");
let navbar = document.querySelector(".navbar-drop-down");
let sidebar = document.querySelector(".side-bar");

window.addEventListener("load", function (e) {
  let theme = localStorage.getItem("Theme");
  //Chequeo el localStorage
  if (theme === "Dark") {
    body.classList.toggle("dark-mode--body");
    productCards.forEach((product) =>
      product.classList.toggle("product-list--cards--card--dark-theme")
    );
    if (breadcrumb) breadcrumb.classList.toggle("breadcrumb--dark-theme");
    if (productDetail)
      productDetail.classList.toggle("section-product-detail--dark-theme");
    searchInput.classList.toggle("search-input--dark-theme");
    navbar.classList.toggle("navbar-drop-down--dark-theme");
    sidebar.classList.toggle("side-bar--dark-theme");
  }
});
function darkTheme() {
  let theme = localStorage.getItem("Theme");
  let productsInCart = document.querySelectorAll(".product-in-cart");
  let qtySelector = document.querySelectorAll(".qty-selector");

  //Chequeo el localStorage
  if (theme === null || theme === "Light") {
    localStorage.setItem("Theme", "Dark");
  } else if (theme === "Dark") localStorage.setItem("Theme", "Light");
  //Seteo las clases
  body.classList.toggle("dark-mode--body");
  productCards.forEach((product) =>
    product.classList.toggle("product-list--cards--card--dark-theme")
  );
  productsInCart.forEach((product) => {
    product.classList.toggle("product-in-cart--dark-theme");
  });
  qtySelector.forEach((elem) => {
    elem.classList.toggle("qty-selector--dark-theme");
  });
  if (breadcrumb) breadcrumb.classList.toggle("breadcrumb--dark-theme");
  if (productDetail) {
    productDetail.classList.toggle("section-product-detail--dark-theme");
  }
  searchInput.classList.toggle("search-input--dark-theme");
  navbar.classList.toggle("navbar-drop-down--dark-theme");
  sidebar.classList.toggle("side-bar--dark-theme");
}
