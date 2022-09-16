// const products = require("../../data/products.json");
const {getProducts} = require("../data/api");

module.exports = {
    home: async (req, res) => {
        const url = req.url;
        res.render("index", { url, products: await getProducts() });
    }
}