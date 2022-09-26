const addToCartButton = document.querySelector(
  ".section-product-addToCart__button"
);
const incrementButton = document.querySelector(".qty-selector-btn-increment");
const decrementbutton = document.querySelector(".qty-selector-btn-decrement");
const removeButton = document.querySelector(".section-product-remove__button");

let cart = [{}];
localStorage.setItem("shoppingCart", JSON.stringify(cart));

if (incrementButton) {
  incrementButton.addEventListener("click", () => {
    console.log("INCREMENT EVENT");
  });
}

if (decrementbutton) {
  decrementbutton.addEventListener("click", () => {
    console.log("DECREMENT EVENT");
  });
}

if (removeButton) {
  removeButton.addEventListener("click", () => {
    console.log(removeButton);
  });
}
