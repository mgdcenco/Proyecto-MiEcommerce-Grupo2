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
          let product = {
            ...getProductsResult[i],
            quantity: getUserCartResult[j].quantity,
          };
          cartArray.push(product);
        }
      }
    }
    let cart = renderCart(cartArray);
    cartList.innerHTML = cart;
    calculateTotalPrice();
  });

  function updateProductQty(id, price, operation) {
    let qty = document.querySelector(`#qty-${id}`);
    let productPrice = document.querySelector(`#price-${id}`);

    let updatedQty;
    if (operation === "+") {
      updatedQty = parseInt(qty.innerText) + 1;
    } else {
      if (parseInt(qty.innerText) > 1) {
        updatedQty = parseInt(qty.innerText) - 1;
      } else {
        return null;
      }
    }
    qty.innerText = updatedQty;
    let updatedPrice = price * updatedQty;
    productPrice.innerText = updatedPrice;
    updateQuantity(id, updatedQty);
    calculateTotalPrice();
  }
  function deleteProduct(id) {
    destroyProduct(id);
    location.reload();
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
            <button class="section-product-remove__button" onclick="deleteProduct(${
              product.id
            })">Quitar</button>
            <div class="qty-selector">
              <button class="qty-selector-btn-decrement" onclick="updateProductQty(${
                product.id
              }, ${product.price}, ${"'-'"})">-</button>
              <div class="total-qty" id="qty-${product.id}">${
          product.quantity
        }</div>
              <button class="qty-selector-btn-increment" onclick="updateProductQty(${
                product.id
              }, ${product.price}, ${"'+'"})">+</button>
            </div>
          </div>
          <span class="product-price" id="price-${product.id}">${
          product.price * product.quantity
        }</span>
        </div>
      </div>
    </article>
    `;
      })
      .join(" ");
    return productCart;
  }

  async function getProducts() {
    let totalProducts = await fetch(`http://localhost:5000/api/product`);
    let result = await totalProducts.json();
    return result;
  }

  async function updateQuantity(id, quantity) {
    let updatedProduct = await fetch(`http://localhost:5000/api/cart`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId: 0,
        product: {
          id: id,
          quantity: quantity,
        },
      }),
    });
  }

  async function destroyProduct(id, userId) {
    let destroyProduct = await fetch(
      `http://localhost:5000/api/cart/0/?productId=${id}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }

  function calculateTotalPrice() {
    let productPriceArray = document.querySelectorAll(".product-price");
    let totalPrice = document.querySelector(".total-price");
    totalPrice.innerText = [...productPriceArray].reduce(
      (acc, elem) => acc + parseInt(elem.innerText),
      0
    );
  }
}

async function getUserCart(id) {
  let loggedUser = await fetch(`http://localhost:5000/api/cart/${id}`);
  let result = await loggedUser.json();
  return result;
}
