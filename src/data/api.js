const fetch = require("node-fetch");
module.exports = {
  getProducts: async () => {
    try {
      const response = await fetch("http://localhost:5000/api/product");
      const json = await response.json();
      return json;
    } catch (err) {
      console.log(err);
    }
  },
  getProductById: async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/api/product/${id}`);
      const json = await response.json();
      return json;
    } catch (err) {
      console.log(err);
    }
  },

  getCartByUser: async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/api/cart/${id}`);
      const json = await response.json();
      return json;
    } catch (error) {
      console.log(error);
    }
  },
};
