// const products = require("../../data/products.json");
const { getProducts, getProductById } = require("../data/api");

module.exports = {
  showProduct: async (req, res) => {
    try {
      const productId = parseInt(req.params.id);
      let noSearchBox = false;
      let promises = await Promise.all([
        getProducts(),
        getProductById(productId),
      ]);
      // let products = await getProducts();
      // let product = await getProductById(productId);
      let [products, product] = promises;
      if (product.status !== 404) {
        const productsByCategory = products.filter(
          (pro) => pro.category == product.category
        );
        res.render("product", {
          product,
          error: false,
          products,
          productsByCategory,
          noSearchBox,
        });
      } else {
        const mostPopular = [...products].sort(
          (product1, product2) => product2.rating.count - product1.rating.count
        );
        res.render("product", {
          error: true,
          products: mostPopular,
          noSearchBox,
        });
      }
    } catch (err) {
      console.log(err);
    }
  },

  searchProducts: async (req, res) => {
    try {
      const searchQuery = req.query.search;
      let noSearchBox = false;
      let products = await getProducts();
      const mostPopular = [...products].sort(
        (product1, product2) => product2.rating.count - product1.rating.count
      );
      const results = products.filter((pro) =>
        pro.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
      res.render("searchResults", {
        products: results,
        mostPopular,
        error: false,
        results,
        noSearchBox,
      });
    } catch (err) {
      console.log(err);
    }
  },

  showFer: async (req, res) => {
    try {
      let products = await getProducts();
      res.render("errorBonus", { products });
    } catch (err) {
      console.log(err);
    }
  },
};
