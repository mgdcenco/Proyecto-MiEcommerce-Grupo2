const primaryImage = document.querySelector(".section-product-detail__images-primary");

if(primaryImage){
    const collectionImages = document.querySelectorAll(".section-product-detail__images-collection-img");

    let primaryImageConst = primaryImage.src;
    collectionImages[0].classList.add("image-product-active");
    collectionImages.forEach((elem,index) => {
        elem.addEventListener("mouseover", ()=>{
            primaryImage.src = elem.src;
        });
        elem.addEventListener("mouseleave", ()=>{
            primaryImage.src = primaryImageConst;
        });
        elem.addEventListener("click", ()=>{
            primaryImageConst = elem.src;
            primaryImage.src = elem.src;
            collectionImages[0].classList.remove("image-product-active")
            elem.classList.add("image-product-active");
            for(let i = 0; i < collectionImages.length; i++){
                if(i !== index){
                    collectionImages[i].classList.remove("image-product-active");
                }
            }
        });
    })

}