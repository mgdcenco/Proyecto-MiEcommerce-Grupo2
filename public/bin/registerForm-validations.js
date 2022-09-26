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
    let repeatedPassword ;

  registerForm.addEventListener("keyup", () => {

    name = registerFormName.value;
    lastname = registerFormLastname.value;
    username = registerFormUsername.value;
    password = registerFormPassword.value;
    repeatedPassword = registerFormRepeatedPassword.value;

    let validName = false;
    let validLastname = false;
    let validUsername = false;
    let validPassword = false;
    let validRepeatedPassword = false;
    let validProvider = false;
    
    let atSign = username.lastIndexOf('@'); // Obtiene la posición del @ en el email del usuario
    let emailProvider = username.slice(atSign); // Obtiene el proveedor de email, ej test@gmail.com devuelve @gmail.com.
    let emailName = username.slice(0, atSign); // Obtiene el nombre del nombre, siguiendo el ejemplo anterior devuelve test

    if(name != "" && name[0] != " " && name[name.length - 1] != " "){
        validName = true;
    }
    if(lastname != "" && lastname[0] != " " && lastname[lastname.length - 1] != " "){
        validLastname = true;
    }
    if(emailName != ""){
        validUsername = true;
    }
    if (emailProvider == "@gmail.com" && emailName != " "|| emailProvider == "@yahoo.com" || emailProvider == "@outlook.com"){
        validProvider = true;
    }
    if(password != "" && password.length >= 8){
        validPassword = true;
    }
    if(repeatedPassword != "" && password == repeatedPassword){
        validRepeatedPassword = true
    }

    // if (name != "" && name[0] != " " && name[name.length - 1] != " " && lastname != "" && lastname[0] != " " && lastname[lastname.length - 1] != " "  && password != "" && passwordRepeated != "" && password.length >= 8 && password == passwordRepeated && validProvider && emailName != "") {
    //     registerFormButton.removeAttribute("disabled");
    //     registerFormButton.classList.remove("formRegister--submit-button-inactive");
    //     registerFormButton.classList.add("formRegister--submit-button-active");
    // }

    // console.log(`validName = ${validName}`);
    // console.log(`validLastname = ${validLastname}`);
    // console.log(`validUsername = ${validUsername}`);
    // console.log(`validProvider = ${validProvider}`);
    // console.log(`validPassword = ${validPassword}`);
    // console.log(`validPasswordRepeated = ${validRepeatedPassword}`);

    if(validName && validLastname && validUsername && validProvider && validPassword && validRepeatedPassword){
        registerFormButton.removeAttribute("disabled");
        registerFormButton.classList.remove("formRegister--submit-button-inactive");
        registerFormButton.classList.add("formRegister--submit-button-active");
    }

    // else if(name == " " || name[0] == " " || name[name.length - 1] == " " || lastname == "" || lastname[0] == " " || lastname[lastname.length - 1] == " " || username == "" || password == "" || passwordRepeated == "" || !validProvider || password != passwordRepeated || emailName == ""){
    //     registerFormButton.setAttribute("disabled", "");
    //     registerFormButton.classList.add("formRegister--submit-button-inactive");
    //     registerFormButton.classList.remove("formRegister--submit-button-active");
    // }

  });
}


