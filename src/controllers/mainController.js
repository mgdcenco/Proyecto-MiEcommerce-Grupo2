// const products = require("../../data/products.json");
const {getProducts} = require("../data/api");

module.exports = {
    home: async (req, res) => {
        const products = await getProducts();
        let noSearchBox = false;
        const mostPopular = [...products].sort((product1, product2)=> product2.rating.count - product1.rating.count);
        res.render("index", {products, mostPopular, noSearchBox });
    }
}