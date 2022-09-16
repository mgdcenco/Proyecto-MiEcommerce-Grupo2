module.exports = {
    showLogin: function (req, res) {
        const url = req.url;
        res.render("login", { url });
    },
    showRegister: function (req, res) {
        const url = req.url;
        res.render("register", { url });
    },
}