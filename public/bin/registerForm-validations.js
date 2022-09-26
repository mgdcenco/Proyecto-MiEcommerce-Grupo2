let registerForm = document.querySelector("#registerForm");
let registerFormUsernameInput = document.querySelector("#username");
let registerFormPasswordInput = document.querySelector("#password");
let registerFormRepeatedPasswordInput =
  document.querySelector("#passwordRepeated");
let registerFormButton = document.querySelector("#registerFormButton");

if (registerFormButton) {

    let usernameLength = 0;
    let passwordLength = 0;
    let passwordRepeatedLength = 0;

  registerForm.addEventListener("keyup", (e) => {

    if(e.target.id == "username"){
        usernameLength = e.target.value.length
        console.log(`username lenght = ${usernameLength}`);
    }
    else if(e.target.id == "password"){
        passwordLength = e.target.value.length
        console.log(`password lenght = ${passwordLength}`);
    }
    else if(e.target.id == "passwordRepeated"){
        passwordRepeatedLength = e.target.value.length
        console.log(`passwordRepeated lenght = ${passwordRepeatedLength}`);
    }

    if (usernameLength != 0 && passwordLength != 0 && passwordRepeatedLength != 0) {
        console.log("Boton habilitado");
        registerFormButton.removeAttribute("disabled");
        registerFormButton.classList.remove("formRegister--submit-button-inactive");
        registerFormButton.classList.add("formRegister--submit-button-active");
    }
    else if(usernameLength == 0 || passwordLength == 0 || passwordRepeatedLength == 0){
        console.log("Boton inhabilitado");
        registerFormButton.setAttribute("disabled", "");
        registerFormButton.classList.add("formRegister--submit-button-inactive");
        registerFormButton.classList.remove("formRegister--submit-button-active");
    }

  });
}


