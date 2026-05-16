const saludo = document.getElementById("saludo");
const colorText = document.getElementById("color");
const mensaje = document.getElementById("mensaje");

btnSalir.addEventListener('click', () => {
    //alert(saludo.textContent);
    saludo.textContent = 'Adios Mundo'
});

btnSaludar.addEventListener('click', () => {
    //alert(saludo.textContent);
    saludo.textContent = 'Hola Mundo';
});


selectColor.addEventListener('change', (event) => {
    const color = event.target.value;
    //alert(color);
    colorText.textContent = `Color seleccionado ${color}`;
    if (color === 'amarillo') {
        colorText.style.background = 'yellow';
    } else {
        colorText.style.background = 'grey';
        colorText.style.color = 'black';
    }

});

formLogin.addEventListener('submit', (event) => {
    event.preventDefault();
    const login = document.querySelector('#login').value;
    const password = document.querySelector('#password').value;
    console.log(`Login: ${login}  - Password: ${password}` );
    if (login === "admin" && password === "123"){
        mensaje.style.background = 'yellow';
        mensaje.textContent = "Las Credenciales son Correctas";
    } else {
        mensaje.style.background = 'red';
        mensaje.textContent = "Las Credenciales son Invalidas";
    }

});

login.addEventListener('input', (event) => {
    const text = event.target.value;
    if (text.length > 8 ){
        formLogin.style.visibility = "hidden";  //visible
    }
    console.log(`valor actual ${text}`)
});