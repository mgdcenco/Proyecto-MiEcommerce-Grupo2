const primaryImage = document.querySelector(".section-product-detail__images-primary");

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
    })

}