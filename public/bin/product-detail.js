const primaryImage = document.querySelector(".section-product-detail__images-primary");

window.addEventListener("load", function(e){

    if(primaryImage){
        //array de imagenes
        const collectionImagesAll = document.querySelector(".section-product-detail__images-collection");
        //el div que contiene las imagenes
        const collectionImages = document.querySelectorAll(".section-product-detail__images-collection-img");
    
        let primaryImageConst = primaryImage.src;
        collectionImages[0].classList.add("image-product-active");
        collectionImages.forEach((elem,index) => {
            elem.addEventListener("mouseover", ()=>{
                primaryImage.src = elem.src;
            });
            //evento mouseleave al div padre de las imagenes, ya que al dejarla en la imagen hija, entre imagen e imagen ,se va a notar la imagen principal. De esta forma se ve mejor
            collectionImagesAll.addEventListener("mouseleave", ()=>{
                primaryImage.src = primaryImageConst;
            });
            elem.addEventListener("click", ()=>{
                primaryImageConst = elem.src;
                primaryImage.src = elem.src;
                elem.classList.add("image-product-active");
                for(let i = 0; i < collectionImages.length; i++){
                    if(i !== index){
                        collectionImages[i].classList.remove("image-product-active");
                    }
                }
            });
        });
    
        let botonAgregarAlCarro = document.querySelector(".section-product-detail__button-on-cart");
        botonAgregarAlCarro.addEventListener("click", async (e)=>{ 
            e.preventDefault();
            let userId = localStorage.getItem("id");
            try{
                let post = await fetch(`http://localhost:5000/api/cart`, {
                    method: "POST",
                    headers:{
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        userId: 0,
                        product:{
                            id: parseInt(botonAgregarAlCarro.id),
                            quantity: 1
                        }
                    })
                });
    
                let result = await post.json();
                console.log(result);

            }catch(err){
                console.error(err);
            }
        });
    }
})