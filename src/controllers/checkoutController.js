module.exports = {
  showCheckout: function (req, res) {
    let noSearchBox = false;
    res.render("checkout", { noSearchBox });
  },
};
