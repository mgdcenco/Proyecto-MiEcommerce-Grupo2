const express = require("express");
const app = express();
const port = 3000;
const products = require("./data/products.json");

app.use(express.static("public"));
app.set("views", "./views");
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("pages/index");
});

app.get("/login", (req, res) => {
  res.render("login");
});

app.get("/register", (req, res) => {
  res.render("register");
});

app.get("/product/:id", (req, res) => {
  const productId = req.params.id;
  const product = products.find((product) => product.id === productId);
  product !== undefined
    ? res.render("product", { product })
    : res.send("No se encuentra producto");
});

app.get("/cart", (req, res) => {
  const productsInCart = products.splice(0, 2);
  res.render("cart", { productsInCart });
});

app.listen(port, console.log(`listen on port ${3000}`));
