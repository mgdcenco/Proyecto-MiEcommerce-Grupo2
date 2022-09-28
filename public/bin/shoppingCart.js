const cartContainer = document.querySelector(".cart-container");

/* let cart = [{}];
localStorage.setItem("shoppingCart", JSON.stringify(cart));
 */

if (cartContainer) {
  if(localStorage.getItem("user")){
    window.addEventListener("load", async () => {
      let userId = parseInt(localStorage.getItem("id"));
      let cartList = document.querySelector(".cart-list");
  
      let promesas = await Promise.all([getProducts(), getUserCart(userId)]);
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
      let cart = renderCart(cartArray,userId);
      cartList.innerHTML = cart;
      calculateTotalPrice();
    });
  
    function updateProductQty(id, price, operation, userId) {
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
      updateQuantity(id, updatedQty, userId);
      calculateTotalPrice();
    }
    function deleteProduct(id,userId) {
      destroyProduct(id,userId);
      location.reload();
    }
  
    function renderCart(cartArray, userId) {
      let theme = localStorage.getItem("Theme");
      let productCart = cartArray
        .map((product) => {
          return `<article class= "product-in-cart ${
            theme === "Dark" ? "product-in-cart--dark-theme" : ""
          }">
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
              }, ${userId})">Quitar</button>
              <div class="qty-selector ${
                theme === "Dark" ? "qty-selector--dark-theme" : ""
              }">
                <button class="qty-selector-btn-decrement" onclick="updateProductQty(${
                  product.id
                }, ${product.price}, ${"'-'"}, ${userId})">-</button>
                <div class="total-qty" id="qty-${product.id}">${
            product.quantity
          }</div>
                <button class="qty-selector-btn-increment" onclick="updateProductQty(${
                  product.id
                }, ${product.price}, ${"'+'"}, ${userId})">+</button>
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
  
    async function updateQuantity(id, quantity,userId) {
      let updatedProduct = await fetch(`http://localhost:5000/api/cart`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId,
          product: {
            id: id,
            quantity: quantity,
          },
        }),
      });
    }
  
    async function destroyProduct(id, userId) {
      let destroyProducts = await fetch(
        `http://localhost:5000/api/cart/${userId}/?productId=${id}`,
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
  }else{
    let mainCart = document.querySelector(".cart-container");
    mainCart.innerHTML = `<p style="font-size:20px; width: 80%; margin-left:auto; margin-right:auto;">Ya estás a un paso de obtener tu producto. Solo hace falta que te registres para conseguirlo!En el siguiente link podras conseguirlo: <a href='http://localhost:3000/register' style='display: inline-block; text-decoration:underline; color:blue; font-size:20px;'>Registrarse</a></p>`
  }
  
}

async function getUserCart(id) {
  let loggedUser = await fetch(`http://localhost:5000/api/cart/${id}`);
  let result = await loggedUser.json();
  return result;
}
