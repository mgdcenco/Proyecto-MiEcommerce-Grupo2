// const products = require("../../data/products.json");
const products = require("../data/api");

module.exports = {
  showProduct: (req, res) => {
    const productId = parseInt(req.params.id);
    let product = products.showProduct(productId);
    const url = req.url;
    product !== undefined
      ? res.render("product", { product, url, error: false, products })
      : res.render("product", { url, error: true });
  },
};
