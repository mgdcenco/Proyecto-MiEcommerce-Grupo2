const fetch = require("node-fetch");
module.exports = {
    showProducts: async () => {
      const response = await fetch('http://localhost:5000/api/product');
      const json = await response.json();
      return json
    },
    showProduct: async (id) => {
      const response = await fetch(`http://localhost:5000/api/product/${id}`);
      const json = await response.json();
      return json
    }

}