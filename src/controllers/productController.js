const products = require("../../data/products.json");

module.exports = {
  showProduct: (req, res) => {
    const productId = parseInt(req.params.id);
    let product = products.find((prod) => prod.id === productId);
    const url = req.url;
    product !== undefined
      ? res.render("product", { product, url, error: false, products })
      : res.render("product", { url, error: true });
  },
};
