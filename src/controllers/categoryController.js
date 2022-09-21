const {getProducts} = require("../data/api");


module.exports = {
    showCategory: async (req,res)=>{
        try{

            let category = req.params.category;
            const products = await getProducts();
            let path = req.path;
            const productsByCategory = products.filter((pro) => pro.category == category);
            let noSearchBox = false;    
            if(productsByCategory.length > 0){
                res.render("category", {products: productsByCategory, noSearchBox, category})
            }else{
                res.render("error404", {noSearchBox, products, path})
            }
        }catch(err){
            console.log(err);
        }
    }
}