let noSearchBox = true;
module.exports = {
    showLogin: function (req, res) {
        res.render("login", {noSearchBox });
    },
    showRegister: function (req, res) {
        res.render("register", { noSearchBox });
    },
}