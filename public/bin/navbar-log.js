let divNavbarUser = document.querySelector(".profile-btn--container");
let divNavbarCart = document.querySelector("#cart-button-navbar");
let divRegLogUser = document.querySelector(".navbar-div-log-reg");
let userNavbarName = document.querySelector("#user-name-navbar");
let userDropdownName = document.querySelector("#user-name-drop-down");
let userDropdownNameMobile = document.querySelector(
  "#user-name-drop-down-mobile"
);

let logout = document.querySelectorAll(".logout");

if (divNavbarCart) {
  if (localStorage.getItem("user")) {
    let userName = localStorage.getItem("user");
    divRegLogUser.style.display = "none";
    divNavbarCart.style.display = "flex";
    divNavbarUser.style.display = "flex";
    userNavbarName.innerHTML = userName;
    userDropdownName.innerHTML = userName;
    userDropdownNameMobile.innerHTML = userName;
  } else {
    divNavbarCart.style.display = "none";
    divNavbarUser.style.display = "none";
    divRegLogUser.style.display = "flex";
    userNavbarName.innerHTML = "";
    userDropdownName.innerHTML = "";
    userDropdownNameMobile.innerHTML = "";
  }

  if (logout) {
    logout.forEach(elem =>{
      elem.addEventListener("click", (e) => {
        e.preventDefault();
        localStorage.clear();
        window.location.replace('http://localhost:3000/login')
      });
    })

    let cartLength = document.querySelector("#cartLenght");
  }
}
