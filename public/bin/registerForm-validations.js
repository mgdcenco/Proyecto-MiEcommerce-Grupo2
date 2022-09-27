let registerForm = document.querySelector("#registerForm");
let registerFormName = document.querySelector("#name");
let registerFormLastname = document.querySelector("#lastname");
let registerFormUsername = document.querySelector("#username");
let registerFormPassword = document.querySelector("#password");
let registerFormRepeatedPassword =
  document.querySelector("#passwordRepeated");
let registerFormButton = document.querySelector("#registerFormButton");

let enableRegisterFormButton = () => {
    registerFormButton.removeAttribute("disabled");
        registerFormButton.classList.remove("formRegister--submit-button-inactive");
        registerFormButton.classList.add("formRegister--submit-button-active");
}

let disabledRegisterFormButton = () => {
    registerFormButton.setAttribute("disabled", "");
    registerFormButton.classList.add("formRegister--submit-button-inactive");
    registerFormButton.classList.remove("formRegister--submit-button-active");
}

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

    //VALIDACIONES PARA DESBLOQUEAR EL BOTON DE CREAR CUENTA

    // Validación a true del input Nombre
    if(name != "" && name[0] != " " && name[name.length - 1] != " "){validName = true;} 

    // Validación a true del input Apellido
    if(lastname != "" && lastname[0] != " " && lastname[lastname.length - 1] != " "){validLastname = true;} 

    // Validación a true del nombre en el Email

    let atSign = username.lastIndexOf('@'); // Obtiene la posición del @ en el email del usuario
    let emailProvider = username.slice(atSign); // Obtiene el proveedor de email, ej test@gmail.com devuelve @gmail.com.
    let emailName = username.slice(0, atSign); // Obtiene el nombre del nombre en el email, siguiendo el ejemplo anterior devuelve test

    if(emailName != ""){ validUsername = true;} 

    // Validación a true del provedor de Email
    if (emailProvider == "@gmail.com" && emailName != " "|| emailProvider == "@yahoo.com" || emailProvider == "@outlook.com"){validProvider = true;} 

    // Validación a true de la contraseña
    if(password != "" && password.length >= 8){validPassword = true;} 

    // Validación a true de la repetición de la contraseña
    if(repeatedPassword != "" && password == repeatedPassword){validRepeatedPassword = true} 

    // Se verifica que todas las variables estén en true para desbloquear el botón Crear cuenta

    if(validName && validLastname && validUsername && validProvider && validPassword && validRepeatedPassword){ 
        enableRegisterFormButton();
    }
  
    //VALIDACIONES PARA BLOQUEAR EL BOTON DE CREAR CUENTA
    
    // Validación a false del input Nombre
    if(name == " " || name[0] == " " || name[name.length - 1] == " "){validName = false;} 

    // Validación a false del input Apellido
    if(lastname == "" || lastname[0] == " " || lastname[lastname.length - 1] == " "){validLastname = false;} 

    // Validación a true del nombre en el Email
    if(emailName == ""){validLastname = false;} 

    // Validación a false del provedor de Email
    if (emailProvider != "@gmail.com" && emailProvider != "@yahoo.com" && emailProvider != "@outlook.com"){validProvider = false;} 
    
    // Validación a false del input Contraseña
    if(password == "" || password < 8){validUsername = false;} 
    
    // Validación a false de la repetición de la contraseña
    if(repeatedPassword == "" && repeatedPassword != password){validRepeatedPassword = false} 

    // Se verifica que una de las variables esté en false para bloquear el botón Crear cuenta

    else if(!validName || !validLastname || !validUsername || !validProvider || !validPassword || !validRepeatedPassword){ 
        disabledRegisterFormButton();
    }

    console.log(`validName = ${validName}`);
    console.log(`validLastname = ${validLastname}`);
    console.log(`validUsername = ${validUsername}`);
    console.log(`validProvider = ${validProvider} - Provider: ${emailProvider}`);
    console.log(`validPassword = ${validPassword}`);
    console.log(`validPasswordRepeated = ${validRepeatedPassword}`);

    



  });
}




// if (name != "" && name[0] != " " && name[name.length - 1] != " " && lastname != "" && lastname[0] != " " && lastname[lastname.length - 1] != " "  && password != "" && passwordRepeated != "" && password.length >= 8 && password == passwordRepeated && validProvider && emailName != "") {
    //     registerFormButton.removeAttribute("disabled");
    //     registerFormButton.classList.remove("formRegister--submit-button-inactive");
    //     registerFormButton.classList.add("formRegister--submit-button-active");
    // }


