const usernameLogin = document.querySelector('#usernameLogin')
const passwordLogin = document.querySelector('#passwordLogin')
const loginBtn = document.querySelector('#loginBtn')
const formLogin = document.querySelector('#loginForm')


if (loginBtn) {

    let usernameLength = 0;
    let passwordLength = 0;

  formLogin.addEventListener("keyup", (e) => {

    if (e.target.id == "usernameLogin") {
        usernameLength = e.target.value.length
    }
    else if (e.target.id == "passwordLogin") {
        passwordLength = e.target.value.length
    }

    if (usernameLength != 0 && passwordLength >= 8) {
        loginBtn.removeAttribute("disabled");
        loginBtn.classList.remove("formRegister--submit-button-inactive");
        loginBtn.classList.add("formRegister--submit-button-active");
    }
    /* else if (usernameLength == 0 || passwordLength == 0) {
        loginBtn.setAttribute("disabled", "");
        loginBtn.classList.add("formRegister--submit-button-inactive");
        loginBtn.classList.remove("formRegister--submit-button-active");
    } */

  });
}
