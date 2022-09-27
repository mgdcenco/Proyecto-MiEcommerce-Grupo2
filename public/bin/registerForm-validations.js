let registerForm = document.querySelector("#registerForm");
let registerFormName = document.querySelector("#name");
let registerFormLastname = document.querySelector("#lastname");
let registerFormUsername = document.querySelector("#username");
let registerFormPassword = document.querySelector("#password");
let registerFormRepeatedPassword = document.querySelector("#passwordRepeated");
let registerFormButton = document.querySelector("#registerFormButton");
// alerts
let nameErrorAlert = document.querySelector(".name-error-alert");
let lastnameErrorAlert = document.querySelector(".lastname-error-alert");
let usernameErrorAlert = document.querySelector(".username-error-alert");
let passwordErrorAlert = document.querySelector(".password-error-alert");
let repeatedPasswordErrorAlert = document.querySelector(
  ".repeated-password-error-alert"
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

  let errorMessages = [
    "El campo no puede quedar vacío",
    "El campo no puede contener espacios ni al prinicpio ni al final",
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
      nameErrorAlert.style.display = "none";
    }

    // Validación a true del input Apellido
    if (
      lastname != "" &&
      lastname[0] != " " &&
      lastname[lastname.length - 1] != " "
    ) {
      validLastname = true;
      lastnameErrorAlert.style.display = "none";
    }

    // Validación a true del nombre en el Email

    let atSign = username.lastIndexOf("@"); // Obtiene la posición del @ en el email del usuario
    let emailProvider = username.slice(atSign); // Obtiene el proveedor de email, ej test@gmail.com devuelve @gmail.com.
    let emailName = username.slice(0, atSign); // Obtiene el nombre del nombre en el email, siguiendo el ejemplo anterior devuelve test

    if (emailName != "") {
      validUsername = true;
    }

    // Validación a true del provedor de Email
    if (
      (emailProvider == "@gmail.com" && emailName != " ") ||
      emailProvider == "@yahoo.com" ||
      emailProvider == "@outlook.com"
    ) {
      validProvider = true;
    }

    if (emailName && emailProvider) {
      usernameErrorAlert.style.display = "none";
    }

    // Validación a true de la contraseña
    if (password != "" && password.length >= 8) {
      validPassword = true;
      passwordErrorAlert.style.display = "none";
    }

    // Validación a true de la repetición de la contraseña
    if (repeatedPassword != "" && password == repeatedPassword) {
      (validRepeatedPassword = true),
        (repeatedPasswordErrorAlert.style.display = "none");
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
    let symbols = ["!","#","$","%","&","'","(",")","*","+",",","-",".","/"];
    if (name.length != 0)
      [
        symbols.map((symbol) => {if (name.includes(symbol)) {validName = false;console.log("El nombre solo debe contener letras");nameErrorAlert.style.display = "inline";
          }
        }),
      ];

    if (name == "") {
      validName = false;
      (nameErrorAlert.style.display = "inline"), console.log(errorMessages[0]);
    }
    if (name[0] == " " || name[name.length - 1] == " ") {
      validName = false;
      (nameErrorAlert.style.display = "inline"), console.log(errorMessages[1]);
    }

    // Validación a false del input Apellido
    if (lastname == "") {
      validLastname = false;
      (lastnameErrorAlert.style.display = "inline"),
        console.log(errorMessages[0]);
    }
    if (lastname[0] == " " || lastname[lastname.length - 1] == " ") {
      validLastname = false;
      (lastnameErrorAlert.style.display = "inline"),
        console.log(errorMessages[1]);
    }

    // Validación a true del nombre en el Email
    if (username == "") {
      validLastname = false;
      (usernameErrorAlert.style.display = "inline"),
        console.log(errorMessages[0]);
    }
    if (username[0] == " " || username[username.length - 1] == " ") {
      validLastname = false;
      (usernameErrorAlert.style.display = "inline"),
        console.log(errorMessages[1]);
    }
    if (emailName == "") {
      validLastname = false;
      usernameErrorAlert.style.display = "inline";
    }

    // Validación a false del provedor de Email
    if (
      emailProvider != "@gmail.com" &&
      emailProvider != "@yahoo.com" &&
      emailProvider != "@outlook.com"
    ) {
      validProvider = false;
      usernameErrorAlert.style.display = "inline";
      console.log("Para registrarte debes usar un email de Gmail, Outlook o Yahoo!");
    }

    // Validación a false del input Contraseña
    if (password == "") {
      validUsername = false;
      (passwordErrorAlert.style.display = "inline"),
        console.log(errorMessages[0]);
    }
    if (password.length < 8) {
      validUsername = false;
      (passwordErrorAlert.style.display = "inline"),
        console.log("La contraseña debe contener al menos 8 caracteres");
    }
    if (password[0] == " " || password[password.length - 1] == " ") {
      validLastname = false;
      (passwordErrorAlert.style.display = "inline"),
        console.log(errorMessages[1]);
    }
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
      validLastname = false;
      (passwordErrorAlert.style.display = "inline"),
        console.log("La contraseña debe contener al menos 1 número");
    }

    // Validación a false de la repetición de la contraseña
    if (repeatedPassword == "") {
      (validRepeatedPassword = false),
        (repeatedPasswordErrorAlert.style.display = "inline"),
        console.log(errorMessages[0]);
    }
    if (repeatedPassword != password) {
      (validRepeatedPassword = false),
        (repeatedPasswordErrorAlert.style.display = "inline"),
        console.log("Las contraseñas no coinciden");
    }
    if (
      repeatedPassword[0] == " " ||
      repeatedPassword[repeatedPassword.length - 1] == " "
    ) {
      validLastname = false;
      (repeatedPasswordErrorAlert.style.display = "inline"),
        console.log(errorMessages[1]);
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

    //  console.log(`validName = ${validName}`);
    //  console.log(`validLastname = ${validLastname}`);
    //  console.log(`validUsername = ${validUsername}`);
    //  console.log(`validProvider = ${validProvider} - Provider: ${emailProvider}`);
    //  console.log(`validPassword = ${validPassword}`);
    //  console.log(`validPasswordRepeated = ${validRepeatedPassword}`);
    // console.log();
  });
}
