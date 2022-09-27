const cartContainer = document.querySelector(".cart-container");

/* let cart = [{}];
localStorage.setItem("shoppingCart", JSON.stringify(cart));
 */

if (cartContainer) {
  window.addEventListener("load", async () => {
    let userId = localStorage.getItem("id");
    let cartList = document.querySelector(".cart-list");

    let promesas = await Promise.all([getProducts(), getUserCart(0)]);
    let getProductsResult = promesas[0];
    let getUserCartResult = promesas[1];
    let cartArray = [];

    for (let i = 0; i < getProductsResult.length; i++) {
      for (let j = 0; j < getUserCartResult.length; j++) {
        if (getProductsResult[i].id === getUserCartResult[j].id) {
          console.log(getUserCartResult[j]);
          let product = {
            ...getProductsResult[i],
            quantity: getUserCartResult[j].quantity,
          };
          cartArray.push(product);
        }
      }
    }

    console.log(cartArray);
    let cart = renderCart(cartArray);
    cartList.innerHTML = cart;
  });

  function incrementProduct() {
    window.location.reload();
    console.log("INCREMENT");
  }
  function decrementProduct() {
    console.log("DECREMENTT");
  }
  function deleteProduct() {
    console.log("DEleteee");
  }

  function renderCart(cartArray) {
    let productCart = cartArray
      .map((product) => {
        return `<article class="product-in-cart">
      <div class="product-img">
        <img
          src="${
            product.images.length > 0
              ? product.images[product.images.length - 1]
              : "https://raw.githubusercontent.com/koehlersimon/fallback/master/Resources/Public/Images/placeholder.jpg"
          }"
          alt="${product.title}"
        />
      </div>
      <div class="product-details">
        <div class="product-title"><p>${product.title}</p></div>
        <div class="cart-actions">
          <div>
            <button class="section-product-remove__button" onclick="deleteProduct()">Quitar</button>
            <div class="qty-selector">
              <button class="qty-selector-btn-decrement" onclick="decrementProduct()">-</button>
              <div class="total-qty">${product.quantity}</div>
              <button class="qty-selector-btn-increment" onclick="incrementProduct()">+</button>
            </div>
          </div>
          <span class="product-price">${product.price}</span>
        </div>
      </div>
    </article>
    `;
      })
      .join(" ");
    return productCart;
  }

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
