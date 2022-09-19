const redirect_magic_icon = document.querySelector(".magic-redirect-icon");
const magic_button = document.querySelector("#magic-button");
const random = Math.round(Math.random() * 30);

if (magic_button) {
  magic_button.addEventListener("click", () => {
    redirect_magic_icon.style.display = "block";
    darkBg.style.display = "block";
    setTimeout(() => {
      window.location.replace(`/product/${random}`);
    }, 1000);
  });
}
