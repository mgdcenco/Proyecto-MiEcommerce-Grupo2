const mainRoutes = require("./mainRoutes");
const cartRoutes = require("./cartRoutes");
const checkoutRoutes = require("./checkoutRoutes");
const productRoutes = require("./productRoutes");
const userRoutes = require("./userRoutes");
const categoryRoutes = require("./categoryRoutes");

module.exports = (app)=> {
    app.use(mainRoutes)
    app.use(cartRoutes)
    app.use(checkoutRoutes)
    app.use(productRoutes)
    app.use(userRoutes)
    app.use(categoryRoutes)
}