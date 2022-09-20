// const products = require("../../data/products.json");
const {getProducts} = require("../data/api");

module.exports = {
    home: async (req, res) => {
        try{
            const products = await getProducts();
            let noSearchBox = false;
            const rateProducts = [...products].sort((prod1,prod2)=> prod2.rating.rate - prod1.rating.rate);
            const mostPopular = [...products].sort((product1, product2)=> product2.rating.count - product1.rating.count);
            res.render("index", {products: rateProducts, mostPopular, noSearchBox });
        }catch (err){
            console.log(err);
        }
    }
}