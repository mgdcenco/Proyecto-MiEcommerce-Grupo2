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
let errorAlertArrow = document.querySelectorAll(".error-alert-arrow")

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
  // Chequea si estamos en la página de Registro.
  let name;
  let lastname;
  let username;
  let password;
  let repeatedPassword;

  let enableRegisterFormButton = () => {
    // Método que habilita el botón de registrarse
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
    // Función reutilizable que oculta los mensajes de error y el icono de alerta.
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

  let validName = false;
  let validLastname = false;
  let validUsername = false;
  let validDomain = false;
  let validProvider = false;
  let validPassword = false;
  let validRepeatedPassword = false;

  let checkTrueValidation = () => {
    if (
      validName &&
      validLastname &&
      validUsername &&
      validDomain &&
      validProvider &&
      validPassword &&
      validRepeatedPassword
    ) {
      enableRegisterFormButton();
    }
  };

  let checkFalseValidation = () => {
    if (
      !validName ||
      !validLastname ||
      !validUsername ||
      !validDomain ||
      !validProvider ||
      !validPassword ||
      !validRepeatedPassword
    ) {
      disabledRegisterFormButton();
    }
  };

  registerFormName.addEventListener("keyup", () => {
    name = registerFormName.value;

    if (name != "" && name[0] != " " && name[name.length - 1] != " ") {
      validName = true;
      HideElements(nameErrorAlert, nameErrorMessage.parentElement);
    }

    if (name.length != 0) {
      symbols.map((symbol) => {
        if (name.includes(symbol)) {
          validName = false;
          nameErrorMessage.innerHTML = errorMessages[2];
          ShowElements(nameErrorMessage.parentElement, nameErrorAlert);
        }
      });
    }

    // Validación a false del input Apellido
    if (name == "") {
      validName = false;
      ShowElements(nameErrorMessage.parentElement, nameErrorAlert);
      nameErrorMessage.innerHTML = errorMessages[0];
    }
    if (name[0] == " " || name[name.length - 1] == " ") {
      validName = false;
      ShowElements(nameErrorMessage.parentElement, nameErrorAlert);
      nameErrorMessage.innerHTML = errorMessages[1];
    }
    checkTrueValidation();
    checkFalseValidation();
  });

  registerFormLastname.addEventListener("keyup", () => {
    lastname = registerFormLastname.value;
    if (
      lastname != "" &&
      lastname[0] != " " &&
      lastname[lastname.length - 1] != " "
    ) {
      validLastname = true;
      HideElements(lastnameErrorAlert, lastnameErrorMessage.parentElement);
    }

    if (lastname.length != 0) {
      symbols.map((symbol) => {
        if (lastname.includes(symbol)) {
          validLastname = false;
          lastnameErrorMessage.innerHTML = errorMessages[2];
          ShowElements(lastnameErrorMessage.parentElement, lastnameErrorAlert);
        }
      });
    }

    // Validación a false del input Apellido
    if (lastname == "") {
      validLastname = false;
      ShowElements(lastnameErrorMessage.parentElement, lastnameErrorAlert);
      lastnameErrorMessage.innerHTML = errorMessages[0];
    }
    if (lastname[0] == " " || lastname[lastname.length - 1] == " ") {
      validLastname = false;
      ShowElements(lastnameErrorMessage.parentElement, lastnameErrorAlert);
      lastnameErrorMessage.innerHTML = errorMessages[1];
    }
    checkTrueValidation();
    checkFalseValidation();
  });

  registerFormUsername.addEventListener("keyup", () => {
    username = registerFormUsername.value;

    let atSign = username.lastIndexOf("@"); // Obtiene la posición del @ en el email del usuario
    let domain = username.slice(atSign); // Obtiene todo lo que viene cuando encuentra el @, ej test@gmail.com devuelve @gmail.com.
    let emailName = username.slice(0, atSign); // Obtiene el nombre del nombre en el email, siguiendo el ejemplo anterior devuelve test.
    let provider = username.slice(atSign + 1, username.lastIndexOf(".com")) // Obtiene el provedor del email, siguiendo el ejemplo devuelve gmail.

    if (emailName != "") {
      validUsername = true;
      HideElements(usernameErrorAlert, usernameErrorMessage.parentElement);
    }

    // Validación a true del provedor de Email
    
    if (domain.includes("@") && domain.includes(".com")) {
      validDomain = true;
      HideElements(usernameErrorAlert, usernameErrorMessage.parentElement);
    }

    if(provider != ""){
        validProvider = true;
        HideElements(usernameErrorAlert, usernameErrorMessage.parentElement);
    }

    // Validación a false del provedor de Email
    if (
    domain.includes("@") == false || domain.includes(".com") == false
    ) {
      validDomain = false;
      ShowElements(usernameErrorMessage.parentElement, usernameErrorAlert);
      usernameErrorMessage.innerHTML =
        "El email ingresado no es válido, ingresa uno correcto";
    }

    if(provider == ""){
        validProvider = false;
      ShowElements(usernameErrorMessage.parentElement, usernameErrorAlert);
      usernameErrorMessage.innerHTML =
        "El email ingresado no contiene un proveedor de correo electrónico, ej: gmail, yahoo, outlook, indica uno";
    }

    // Validación a false del nombre en el Email

    if (username == "") {
      validUsername = false;
      ShowElements(usernameErrorMessage.parentElement, usernameErrorAlert);
      usernameErrorMessage.innerHTML = errorMessages[0];
    }

    if (emailName == "" && username.includes("@")) {
      validUsername = false;
      ShowElements(usernameErrorMessage.parentElement, usernameErrorAlert);
      usernameErrorMessage.innerHTML =
        "El campo email debe contener un nombre antes del @";
    }

    if (username[0] == " " || username[username.length - 1] == " ") {
      validUsername = false;
      ShowElements(usernameErrorMessage.parentElement, usernameErrorAlert);
      usernameErrorMessage.innerHTML = errorMessages[1];
    }

    fetch("http://localhost:5000/api/user")
    .then(response => response.json())  
    .then(users => users.map((user)=> {
        if(user.email == username){
            validUsername = false;
            usernameErrorMessage.innerHTML = "Ya existe una cuenta con esta dirección de email";
            ShowElements(usernameErrorMessage.parentElement, usernameErrorAlert);
        }

        checkTrueValidation();
    checkFalseValidation();
    }))
  });

  registerFormPassword.addEventListener("keyup", () => {
    // Validación a true de la contraseña
    password = registerFormPassword.value;

    if (password != "" && password.length >= 8) {
      validPassword = true;
      HideElements(passwordErrorAlert, passwordErrorMessage.parentElement);
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
      passwordErrorMessage.innerHTML =
        "La contraseña debe contener al menos 1 número";
      ShowElements(passwordErrorMessage.parentElement, passwordErrorAlert);
    }

    if (password == "") {
      validPassword = false;
      ShowElements(passwordErrorMessage.parentElement, passwordErrorAlert);
      passwordErrorMessage.innerHTML = errorMessages[0];
    }
    if (password.length > 0 && password.length < 8) {
      validpassword = false;
      ShowElements(passwordErrorMessage.parentElement, passwordErrorAlert);
      passwordErrorMessage.innerHTML =
        "La contraseña debe contener al menos 8 caracteres";
    }
    if (password[0] == " " || password[password.length - 1] == " ") {
      validPassword = false;
      ShowElements(passwordErrorMessage.parentElement, passwordErrorAlert);
      passwordErrorMessage.innerHTML = errorMessages[1];
    }

    if (
      password.includes("password") == true ||
      password.includes("Password") == true
    ) {
      validPassword = false;
      passwordErrorMessage.innerHTML =
        "La contraseña no debe contener la palabra 'password'";
      ShowElements(passwordErrorMessage.parentElement, passwordErrorAlert);
    }
    if (
      password.includes("contraseña") == true ||
      password.includes("Contraseña") == true
    ) {
      validPassword = false;
      passwordErrorMessage.innerHTML =
        "La contraseña no debe contener la palabra 'contraseña'";
      ShowElements(passwordErrorMessage.parentElement, passwordErrorAlert);
    }

    if(repeatedPassword.length != 0 && password != repeatedPassword){
      validRepeatedPassword = false;
      repeatedPasswordErrorMessage.innerHTML = "Las contraseñas no coinciden";
      ShowElements(repeatedPasswordErrorMessage.parentElement, repeatedPasswordErrorAlert);
    }

    if(repeatedPassword.length != 0 && password == repeatedPassword){
      validRepeatedPassword = true;
      HideElements(repeatedPasswordErrorAlert, repeatedPasswordErrorMessage.parentElement);
    }

    checkTrueValidation();
    checkFalseValidation();
  });

  registerFormRepeatedPassword.addEventListener("keyup", () => {
    repeatedPassword = registerFormRepeatedPassword.value;

    if (repeatedPassword != "" && password == repeatedPassword) {
      validRepeatedPassword = true;
      HideElements(repeatedPasswordErrorAlert, repeatedPasswordErrorMessage.parentElement);
    }
    if (repeatedPassword != password) {
      validRepeatedPassword = false;
      repeatedPasswordErrorMessage.innerHTML = "Las contraseñas no coinciden";
      ShowElements(repeatedPasswordErrorMessage.parentElement, repeatedPasswordErrorAlert);
    }

    if (repeatedPassword == "") {
      validRepeatedPassword = false;
      repeatedPasswordErrorMessage.innerHTML = errorMessages[0];
      ShowElements(repeatedPasswordErrorMessage.parentElement, repeatedPasswordErrorAlert);
    }
    if (
      repeatedPassword[0] == " " ||
      repeatedPassword[repeatedPassword.length - 1] == " "
    ) {
      validRepeatedPassword = false;
      repeatedPasswordErrorMessage.innerHTML = errorMessages[1];
      ShowElements(repeatedPasswordErrorMessage.parentElement, repeatedPasswordErrorAlert);
    }

    checkTrueValidation();
    checkFalseValidation();
  });
}
