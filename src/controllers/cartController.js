const { getProducts } = require("../data/api");

module.exports = {
  showCart: async (req, res) => {
    try {
      let noSearchBox = false;      
      res.render("cart", { noSearchBox });
    } catch (err) {
      console.log(err);
    }
  },
};
