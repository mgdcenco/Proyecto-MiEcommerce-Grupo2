const express = require("express");
const app = express();
const port = 3000;
const products = require("./data/products.json");

app.use(express.static("./src/public"));
app.set("views", "./src/views/pages");
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  const url = req.url;
  res.render("index", { url });
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
  const url = req.url;
  const productId = req.params.id;
  const product = products.find((product) => product.id === productId);
  product !== undefined
    ? res.render("product", { product, url })
    : res.send("No se encuentra producto");
});

app.get("/cart", (req, res) => {
  const url = req.url;
  const productsInCart = products.splice(0, 2);
  res.render("cart", { productsInCart, url });
});

app.listen(port, console.log(`listen on port ${3000}`));
