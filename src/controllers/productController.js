// const products = require("../../data/products.json");
const {getProducts, getProductById} = require("../data/api");

module.exports = {
  showProduct: async (req, res) => {
    const productId = parseInt(req.params.id);
    let products = await getProducts();
    let product = await getProductById(productId);
    console.log(product);
    const url = req.url;
    if(product.status !== 404){
      const productsByCategory = products.filter(pro => pro.category == product.category)
      res.render("product", { product, url, error: false, products, productsByCategory })
    }else{
      res.render("product", { url, error: true, products });
    }
  },
};
