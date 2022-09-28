let userRegisterForm = document.querySelector("#registerForm");
let registerBtn = document.querySelector("#registerFormButton");

if (userRegisterForm) {
  userRegisterForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const respuesta = await fetch("http://localhost:5000/api/user")
      .then((response) => {
        return response.json();
      })
      .then((text) => {
        return text;
      })
      .catch((error) => {
        console.log(error);
      });

    const datosFormulario = new FormData(userRegisterForm);
    const data = Object.fromEntries(datosFormulario);

    await fetch("http://localhost:5000/api/user", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const redirect = (path) => {
      window.location.assign(path);
    };

    for (const users of respuesta) {
        if (data.email == users.email) {
            redirect('http://localhost:3000/login')
        }

    }
  });
}
