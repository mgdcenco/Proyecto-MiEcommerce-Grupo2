const products = require("../../data/products.json");

module.exports = {
    home: function (req, res) {
        const url = req.url;
        res.render("index", { url, products });
    }
}