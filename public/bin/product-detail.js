const primaryImage = document.querySelector(".section-product-detail__images-primary");

if(primaryImage){
    const collectionImages = document.querySelectorAll(".section-product-detail__images-collection-img");


    collectionImages.forEach((elem) => {
        elem.addEventListener("mouseover", ()=>{
            primaryImage.src = elem.src;
        })
    })

}