const {getProducts} = require("../data/api");


module.exports = {
    showCategory: async (req,res)=>{
        let category = req.params.category;
        const products = await getProducts();
        const productsByCategory = products.filter((pro) => pro.category == category);
        let noSearchBox = false;
        console.log(productsByCategory);

        if(productsByCategory.length > 0){
            res.render("category", {products: productsByCategory, noSearchBox, category})
        }else{
            res.render("error404", {noSearchBox, products})
        }
    }
}