// const products = require("../../data/products.json");
const {showProducts} = require("../data/api");

module.exports = {
    home: async (req, res) => {
        const url = req.url;
        const products = await showProducts();
        res.render("index", { url, products });
    }
}