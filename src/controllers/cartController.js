const products = require("../../data/products.json");

module.exports = {
    showCart: function (req, res) {
        const url = req.url;
    let numRandom = Math.round(Math.random() * products.length - 3);
    if (numRandom <= 0) {
      numRandom = 1;
    }
    const productsInCart = products.slice(numRandom, numRandom + 3);
    res.render("cart", { products: productsInCart, url });
    }
}