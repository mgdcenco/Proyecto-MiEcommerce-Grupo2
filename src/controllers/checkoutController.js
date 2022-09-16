module.exports = {
  showCheckout: function (req, res) {
    const url = req.url;
    res.render("checkout", { url });
  },
};
