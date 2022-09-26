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
    
    let atSign = username.lastIndexOf('@'); // Obtiene la posición del @ en el email del usuario
    let emailProvider = username.slice(atSign); // Obtiene el proveedor de email, ej test@gmail.com devuelve @gmail.com.
    let emailName = username.slice(0, atSign); // Obtiene el nombre del nombre, siguiendo el ejemplo anterior devuelve test

    if (emailProvider == "@gmail.com" && emailName != " "|| emailProvider == "@yahoo.com" || emailProvider == "@outlook.com"){
        validProvider = true;
    }

    if (name != "" && name[0] != " " && name[name.length - 1] != " " && lastname != "" && lastname[0] != " " && lastname[lastname.length - 1] != " "  && password != "" && passwordRepeated != "" && password.length >= 8 && password == passwordRepeated && validProvider && emailName != "") {
        registerFormButton.removeAttribute("disabled");
        registerFormButton.classList.remove("formRegister--submit-button-inactive");
        registerFormButton.classList.add("formRegister--submit-button-active");
    }
    else if(name == " " || name[0] == " " || name[name.length - 1] == " " || lastname == "" || lastname[0] == " " || lastname[lastname.length - 1] == " " || username == "" || password == "" || passwordRepeated == "" || !validProvider || password != passwordRepeated || emailName == ""){
        registerFormButton.setAttribute("disabled", "");
        registerFormButton.classList.add("formRegister--submit-button-inactive");
        registerFormButton.classList.remove("formRegister--submit-button-active");
    }

  });
}


