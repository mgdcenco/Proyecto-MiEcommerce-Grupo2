const userRegister = document.querySelector('#registerForm');

userRegister.addEventListener('submit', (e) => {
    e.preventDefault();

    const userInfo = new FormData(userRegister);

    
    fetch('http://localhost:5000/api/user', {
        method: 'POST',
        body: userInfo,
    })

    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.log(err))
})