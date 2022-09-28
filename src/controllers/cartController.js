const { getProducts } = require("../data/api");

module.exports = {
  showCart: async (req, res) => {
    try {
      const products = await getProducts();
      const mostPopular = [...products].sort(
        (product1, product2) => product2.rating.count - product1.rating.count
      );
      let noSearchBox = false;
      res.render("cart", { noSearchBox, mostPopular });
    } catch (err) {
      console.log(err);
    }
  },
};
