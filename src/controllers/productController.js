// const products = require("../../data/products.json");
const {getProducts, getProductById} = require("../data/api");

module.exports = {
  showProduct: async (req, res) => {
    const productId = parseInt(req.params.id);
    let noSearchBox = false;
    let products = await getProducts();
    let product = await getProductById(productId);
    if(product.status !== 404){
      const productsByCategory = products.filter(pro => pro.category == product.category)
      res.render("product", { product, error: false, products, productsByCategory,noSearchBox })
    }else{
      res.render("product", { error: true, products, noSearchBox });
    }
  },
};
