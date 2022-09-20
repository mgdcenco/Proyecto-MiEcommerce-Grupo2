const {getProducts} = require("../data/api");

module.exports = {
    showCart: async (req, res) => {
      try{
        let noSearchBox = false;
        let products = await getProducts();
        let numRandom = Math.round(Math.random() * products.length - 3);
        if (numRandom <= 0) {
          numRandom = 1;
        }
        const productsInCart = products.slice(numRandom, numRandom + 3);
        res.render("cart", { products: productsInCart, noSearchBox });
      } catch(err){
        console.log(err)
      }
        
    }
}