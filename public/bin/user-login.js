const loginForm = document.querySelector('#loginForm');

    if(loginForm) {
        loginForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const datosForm = new FormData(loginForm);
        const usuario = Object.fromEntries(datosForm)

        const resultado = await fetch('http://localhost:5000/api/user/login', {
            method: 'POST',
            body: JSON.stringify(usuario),
            headers: {
                'Content-Type': 'application/json',
            }
        })

        const resultadoJson = await resultado.json();   
        debugger
        if (!resultadoJson.error) {
            localStorage.setItem('user', resultadoJson.name)
            localStorage.setItem('id', resultadoJson.id)
            window.location.replace('http://localhost:3000/')
        }else{
            alert("error")
        }

    })
}

