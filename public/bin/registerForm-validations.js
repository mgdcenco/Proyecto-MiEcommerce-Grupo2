// register form, register button and register inputs
let registerForm = document.querySelector("#registerForm");
let registerFormName = document.querySelector("#name");
let registerFormLastname = document.querySelector("#lastname");
let registerFormUsername = document.querySelector("#username");
let registerFormPassword = document.querySelector("#password");
let registerFormRepeatedPassword = document.querySelector("#passwordRepeated");
let registerFormButton = document.querySelector("#registerFormButton");

// alerts-icons
let nameErrorAlert = document.querySelector(".name-error-alert");
let lastnameErrorAlert = document.querySelector(".lastname-error-alert");
let usernameErrorAlert = document.querySelector(".username-error-alert");
let passwordErrorAlert = document.querySelector(".password-error-alert");
let repeatedPasswordErrorAlert = document.querySelector(
  ".repeated-password-error-alert"
);

// error-messages
let nameErrorMessage = document.querySelector(
  ".formRegister-name-container--name-error-message"
);
let lastnameErrorMessage = document.querySelector(
  ".formRegister-lastname-container--lastname-error-message"
);
let usernameErrorMessage = document.querySelector(
  ".formRegister-username-container--username-error-message"
);
let passwordErrorMessage = document.querySelector(
  ".formRegister-password-container--password-error-message"
);
let repeatedPasswordErrorMessage = document.querySelector(
  ".formRegister-repeated-password-container--repeated-password-error-message"
);

if (registerFormButton) {
  let name;
  let lastname;
  let username;
  let password;
  let repeatedPassword;

  let enableRegisterFormButton = () => {
    registerFormButton.removeAttribute("disabled");
    registerFormButton.classList.remove("formRegister--submit-button-inactive");
    registerFormButton.classList.add("formRegister--submit-button-active");
  };

  let disabledRegisterFormButton = () => {
    registerFormButton.setAttribute("disabled", "");
    registerFormButton.classList.add("formRegister--submit-button-inactive");
    registerFormButton.classList.remove("formRegister--submit-button-active");
  };

  let HideElements = (elem1, elem2) => {
    elem1.style.display = "none";
    elem2.style.display = "none";
  };

  let ShowElements = (elem1, elem2) => {
    elem1.style.display = "block";
    elem2.style.display = "inline";
  };

  let errorMessages = [
    "Este campo no puede quedar vacío",
    "Este campo no puede contener espacios blancos ni al prinicpio ni al final",
    "Este campo solo debe contener letras",
  ];

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
    if (name != "" && name[0] != " " && name[name.length - 1] != " ") {
      validName = true;
      HideElements(nameErrorAlert, nameErrorMessage);
    }

    // Validación a true del input Apellido
    if (
      lastname != "" &&
      lastname[0] != " " &&
      lastname[lastname.length - 1] != " "
    ) {
      validLastname = true;
      //   lastnameErrorAlert.style.display = "none";
      HideElements(lastnameErrorAlert, lastnameErrorMessage);
    }

    // Validación a true del nombre en el Email

    let atSign = username.lastIndexOf("@"); // Obtiene la posición del @ en el email del usuario
    let emailProvider = username.slice(atSign); // Obtiene el proveedor de email, ej test@gmail.com devuelve @gmail.com.
    let emailName = username.slice(0, atSign); // Obtiene el nombre del nombre en el email, siguiendo el ejemplo anterior devuelve test

    if (emailName != "") {
      validUsername = true;
      HideElements(usernameErrorAlert, usernameErrorMessage);
    }

    // Validación a true del provedor de Email
    if (
      (emailProvider == "@gmail.com" && emailName != " ") ||
      emailProvider == "@yahoo.com" ||
      emailProvider == "@outlook.com"
    ) {
      validProvider = true;
      HideElements(usernameErrorAlert, usernameErrorMessage);
    }

    // Validación a true de la contraseña
    if (password != "" && password.length >= 8) {
      validPassword = true;
      HideElements(passwordErrorAlert, passwordErrorMessage);

    }

    // Validación a true de la repetición de la contraseña
    if (repeatedPassword != "" && password == repeatedPassword) {
      validRepeatedPassword = true;
      HideElements(repeatedPasswordErrorAlert, repeatedPasswordErrorMessage);
    }

    // Se verifica que todas las variables estén en true para desbloquear el botón Crear cuenta

    if (
      validName &&
      validLastname &&
      validUsername &&
      validProvider &&
      validPassword &&
      validRepeatedPassword
    ) {
      enableRegisterFormButton();
    }

    //VALIDACIONES PARA BLOQUEAR EL BOTON DE CREAR CUENTA

    // Validación a false del input Nombre
    let symbols = [
      "!",
      "#",
      "$",
      "%",
      "&",
      "'",
      "(",
      ")",
      "*",
      "+",
      ",",
      "-",
      ".",
      "/",
      "=",
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      0,
    ];
    if (name.length != 0)
      [
        symbols.map((symbol) => {
          // Valida los simbolos en el nombre
          if (name.includes(symbol)) {
            validName = false;
            nameErrorMessage.innerHTML = errorMessages[2];
            ShowElements(nameErrorMessage, nameErrorAlert);
          }
          // Valida los simbolos en el apellido
          if (lastname.includes(symbol)) {
            validLastname = false;
            lastnameErrorMessage.innerHTML = errorMessages[2];
            ShowElements(lastnameErrorMessage, lastnameErrorAlert);
          }
        }),
      ];

    if (name == "") {
      validName = false;
      nameErrorMessage.innerHTML = errorMessages[0];
      ShowElements(nameErrorMessage, nameErrorAlert);
    }
    if (name[0] == " " || name[name.length - 1] == " ") {
      validName = false;
      nameErrorMessage.innerHTML = errorMessages[1];
      ShowElements(nameErrorMessage, nameErrorAlert);

      nameErrorAlert.style.display = "inline";
    }

    // Validación a false del input Apellido
    if (lastname == "") {
      validLastname = false;
      ShowElements(lastnameErrorMessage, lastnameErrorAlert);
      lastnameErrorMessage.innerHTML = errorMessages[0];
    }
    if (lastname[0] == " " || lastname[lastname.length - 1] == " ") {
      validLastname = false;
      ShowElements(lastnameErrorMessage, lastnameErrorAlert);
      lastnameErrorMessage.innerHTML = errorMessages[1];
    }

    // Validación a false del provedor de Email
    if (
      emailProvider != "@gmail.com" &&
      emailProvider != "@yahoo.com" &&
      emailProvider != "@outlook.com"
    ) {
      validProvider = false;
      ShowElements(usernameErrorMessage, usernameErrorAlert);
      usernameErrorMessage.innerHTML =
        "Para registrarte debes usar un email de Gmail, Outlook o Yahoo!";
    }

    // Validación a false del nombre en el Email

    if (username == "") {
      validUsername = false;
      ShowElements(usernameErrorMessage, usernameErrorAlert);
      usernameErrorMessage.innerHTML = errorMessages[0];
    }

    if (emailName == "" && username.includes("@")) {
      validUsername = false;
      ShowElements(usernameErrorMessage, usernameErrorAlert);
      usernameErrorMessage.innerHTML =
        "El campo email debe contener un nombre antes del @";
    }

    if (username[0] == " " || username[username.length - 1] == " ") {
      validUsername = false;
      ShowElements(usernameErrorMessage, usernameErrorAlert);
      usernameErrorMessage.innerHTML = errorMessages[1];
    }

    // Validación a false del input Contraseña

    if (
        password.includes(1) == false &&
        password.includes(2) == false &&
        password.includes(3) == false &&
        password.includes(4) == false &&
        password.includes(5) == false &&
        password.includes(6) == false &&
        password.includes(7) == false &&
        password.includes(8) == false &&
        password.includes(9) == false &&
        password.includes(0) == false
      ) {
          validPassword = false;
          passwordErrorMessage.innerHTML = "La contraseña debe contener al menos 1 número";
          ShowElements(passwordErrorMessage, passwordErrorAlert);
      }

    if (password == "") {
      validPassword = false;
      ShowElements(passwordErrorMessage, passwordErrorAlert);
      passwordErrorMessage.innerHTML = errorMessages[0];
    }
    if (password.length > 0 && password.length < 8) {
      validpassword = false;
      ShowElements(passwordErrorMessage, passwordErrorAlert);
      passwordErrorMessage.innerHTML = "La contraseña debe contener al menos 8 caracteres";
    }
    if (password[0] == " " || password[password.length - 1] == " ") {
        validPassword = false;
        ShowElements(passwordErrorMessage, passwordErrorAlert);
        passwordErrorMessage.innerHTML = errorMessages[1];
    }

    if (
      password.includes("password") == true ||
      password.includes("Password") == true
    ) {
        validPassword = false;
        passwordErrorMessage.innerHTML = "La contraseña no debe contener la palabra 'password'"
        ShowElements(passwordErrorMessage, passwordErrorAlert);
    }
    if (
      password.includes("contraseña") == true ||
      password.includes("Contraseña") == true
    ) {
        validPassword = false;
        passwordErrorMessage.innerHTML = "La contraseña no debe contener la palabra 'contraseña'";
        ShowElements(passwordErrorMessage, passwordErrorAlert);
    }

    // Validacion a false de la repetición de la contraseña

    if (repeatedPassword != password) {
        validRepeatedPassword = false;
        repeatedPasswordErrorMessage.innerHTML = "Las contraseñas no coinciden"
        ShowElements(repeatedPasswordErrorMessage, repeatedPasswordErrorAlert);
    }

     if (repeatedPassword == "") {
       validRepeatedPassword = false;
          repeatedPasswordErrorMessage.innerHTML = errorMessages[0]
       ShowElements(repeatedPasswordErrorMessage, repeatedPasswordErrorAlert); 
        
    }
     if (
       repeatedPassword[0] == " " ||
       repeatedPassword[repeatedPassword.length - 1] == " "
     ) {
         validRepeatedPassword = false;
       repeatedPasswordErrorMessage.innerHTML = errorMessages[1];
        ShowElements(repeatedPasswordErrorMessage, repeatedPasswordErrorAlert);
     }

    // Se verifica que una de las variables esté en false para bloquear el botón Crear cuenta

    if (
      !validName ||
      !validLastname ||
      !validUsername ||
      !validProvider ||
      !validPassword ||
      !validRepeatedPassword
    ) {
      disabledRegisterFormButton();
    }
  });
}
