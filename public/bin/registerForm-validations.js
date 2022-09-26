let registerForm = document.querySelector("#registerForm");
let registerFormName = document.querySelector("#name");
let registerFormLastname = document.querySelector("#lastname");
let registerFormUsernameInput = document.querySelector("#username");
let registerFormPasswordInput = document.querySelector("#password");
let registerFormRepeatedPasswordInput =
  document.querySelector("#passwordRepeated");
let registerFormButton = document.querySelector("#registerFormButton");

if (registerFormButton) {
    let nameLength = 0;
    let lastnameLength = 0;
    let usernameLength = 0;
    let passwordLength = 0;
    let passwordRepeatedLength = 0;

  registerForm.addEventListener("keyup", (e) => {

    if(e.target.id == "username"){
        usernameLength = e.target.value.length
    }
    else if(e.target.id == "password"){
        passwordLength = e.target.value.length
    }
    else if(e.target.id == "passwordRepeated"){
        passwordRepeatedLength = e.target.value.length
    }
    else if(e.target.id == "name"){
        nameLength = e.target.value.length
    }
    else if(e.target.id == "lastname"){
        lastnameLength = e.target.value.length
    }

    if (nameLength != 0 && lastnameLength != 0 && usernameLength != 0 && passwordLength != 0 && passwordRepeatedLength != 0) {
        console.log("Boton habilitado");
        registerFormButton.removeAttribute("disabled");
        registerFormButton.classList.remove("formRegister--submit-button-inactive");
        registerFormButton.classList.add("formRegister--submit-button-active");
    }
    else if(nameLength == 0 || lastnameLength == 0 || usernameLength == 0 || passwordLength == 0 || passwordRepeatedLength == 0){
        console.log("Boton inhabilitado");
        registerFormButton.setAttribute("disabled", "");
        registerFormButton.classList.add("formRegister--submit-button-inactive");
        registerFormButton.classList.remove("formRegister--submit-button-active");
    }

  });
}


