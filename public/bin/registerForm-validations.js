let registerForm = document.querySelector("#registerForm");
let registerFormName = document.querySelector("#name");
let registerFormLastname = document.querySelector("#lastname");
let registerFormUsername = document.querySelector("#username");
let registerFormPassword = document.querySelector("#password");
let registerFormRepeatedPassword =
  document.querySelector("#passwordRepeated");
let registerFormButton = document.querySelector("#registerFormButton");

if (registerFormButton) {
    let name ;
    let lastname;
    let username;
    let password;
    let passwordRepeated ;

  registerForm.addEventListener("keyup", () => {

    name = registerFormName.value;
    lastname = registerFormLastname.value;
    username = registerFormUsername.value;
    password = registerFormPassword.value;
    passwordRepeated = registerFormRepeatedPassword.value;
    validProvider = false;
    
    let atSign = username.lastIndexOf('@') + 1;
    let dot = username.lastIndexOf('.');
    let emailProvider = username.slice(atSign, dot)

    if (emailProvider == "gmail" || emailProvider == "yahoo" || emailProvider == "outlook" || emailProvider == "hotmail"){
        validProvider = true;
    }

    console.log(validProvider);

    if (name != "" && lastname != "" && password != "" && passwordRepeated != "" && password.length >= 8 && password == passwordRepeated && validProvider) {
        console.log("Boton habilitado");
        registerFormButton.removeAttribute("disabled");
        registerFormButton.classList.remove("formRegister--submit-button-inactive");
        registerFormButton.classList.add("formRegister--submit-button-active");
    }
    else if(name == "" || lastname == "" || username == "" || password == "" || passwordRepeated == "" || !validProvider){
        console.log("Boton inhabilitado");
        registerFormButton.setAttribute("disabled", "");
        registerFormButton.classList.add("formRegister--submit-button-inactive");
        registerFormButton.classList.remove("formRegister--submit-button-active");
    }

  });
}


