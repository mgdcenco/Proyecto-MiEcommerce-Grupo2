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

app.get("/register", (req, res) => {
  res.render("./pages/register");
});

app.get("/product/:id", (req, res) => {
  const url = req.url;
  const productId = parseInt(req.params.id);
  let product = products.find((prod) => prod.id === productId);
  product !== undefined
  ? res.render("product", { product, url, error:false })
  : res.render("product", { url, error:true});
});

app.get("/cart", (req, res) => {
  const url = req.url;
  const productsInCart = products.splice(0, 2);
  res.render("cart", { productsInCart, url });
});

app.get("*", (req, res) => {
  const url = req.url;
  res.render("error404", { url });
});
app.listen(port, console.log(`listen on port ${3000}`));
