const express = require("express");
const app = express();
const port = 3000;
const products = require("./data/products.json");

app.use(express.static("./public"));
app.set("views", "./src/views/pages");

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  const url = req.url;
  res.render("index", { url, products });
});

app.get("/login", (req, res) => {
  const url = req.url;
  res.render("login", { url });
});

app.get("/register", (req, res) => {
  const url = req.url;
  res.render("register", { url });
});

app.get("/product/:id", (req, res) => {
  const productId = parseInt(req.params.id);
  let product = products.find((prod) => prod.id === productId);
  const url = req.url;
  product !== undefined
    ? res.render("product", { product, url, error: false, products })
    : res.render("product", { url, error: true });
});

app.get("/cart", (req, res) => {
  const url = req.url;
  let numRandom = Math.round(Math.random() * products.length - 3);
  if (numRandom <= 0) {
    numRandom = 1;
  }
  const productsInCart = products.slice(numRandom, numRandom + 3);
  res.render("cart", { products: productsInCart, url });
});

app.get("/cart/checkout", (req, res)=> {
  const url = req.url;
  res.render("checkout", { url })
})

app.get("*", (req, res) => {
  const url = req.url;
  res.render("error404", { url });
});
app.listen(port, console.log(`listen on port ${port}`));
