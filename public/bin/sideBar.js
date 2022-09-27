const profileBtn = document.querySelectorAll(".profileBtn");
const sideBar = document.querySelector("#sideBar");
const dropDown = document.querySelector("#dropDown");
const dropDownList = document.querySelector("#dropDownList");
const themeButton = document.querySelector(".navbar-theme--button");
const profileBtnContainer = document.querySelector(".profile-btn--container");
const darkBg = document.querySelector("#darkBg");

profileBtn.forEach((prop) => {
  prop.addEventListener("click", (event) => {
    event.stopPropagation();
    darkBg.style.display === "block"
      ? (darkBg.style.display = "none")
      : (darkBg.style.display = "block");
    sideBar.style.display === "block"
      ? (sideBar.style.display = "none")
      : (sideBar.style.display = "block");
    dropDown.style.display === "block"
      ? (dropDown.style.display = "none")
      : (dropDown.style.display = "block");
  });
});


darkBg.addEventListener("click", () => {
  sideBar.style.display = "none";
  darkBg.style.display = "none";
});
