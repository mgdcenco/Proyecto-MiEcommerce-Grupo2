module.exports = {
  showCheckout: function (req, res) {
    const url = req.url;
    console.log("testing checkout");
    res.render("checkout", { url });
  },
};
