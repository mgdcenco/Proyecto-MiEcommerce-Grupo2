const addToCartButton = document.querySelector(
  ".section-product-addToCart__button"
);
const incrementButton = document.querySelector(".qty-selector-btn-increment");
const decrementbutton = document.querySelector(".qty-selector-btn-decrement");
const removeButton = document.querySelector(".section-product-remove__button");
const cartContainer = document.querySelector(".cart-container");

/* let cart = [{}];
localStorage.setItem("shoppingCart", JSON.stringify(cart));
 */

if (cartContainer) {
  window.addEventListener("load", async () => {
    let userId = localStorage.getItem("id");
    let promesas = await Promise.all([getProducts(), getUserCart(0)]);
    let getProductsResult = promesas[0];
    let getUserCartResult = promesas[1];
    let cartArray = [];

    for (let i = 0; i < getProductsResult.length; i++) {
      for (let j = 0; j < getUserCartResult.length; j++) {
        if (getProductsResult[i].id === getUserCartResult[j].id) {
          cartArray.push(getProductsResult[i]);
        }
      }
    }
    console.log(cartArray);
  });

  async function getUserCart(id) {
    let loggedUser = await fetch(`http://localhost:5000/api/cart/${id}`);
    let result = await loggedUser.json();
    return result;
  }

  async function getProducts() {
    let totalProducts = await fetch(`http://localhost:5000/api/product`);
    let result = await totalProducts.json();
    console.log("Products:", result);
    return result;
  }
}

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
