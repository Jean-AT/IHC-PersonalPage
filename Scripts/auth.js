document.addEventListener('DOMContentLoaded', () => {
    const btnRegister = document.getElementById('btn-register-action');
    if (btnRegister) {
        btnRegister.addEventListener('click', (e) => {
            e.preventDefault();
            const nombre = document.getElementById('reg-nombre').value;
            const correo = document.getElementById('reg-correo').value;
            const password = document.getElementById('reg-password').value;
            if (nombre === "" || correo === "" || password === "") {
                alert("Por favor, completa todos los campos obligatorios.");
                return;
            }
            const usuario = {
                nombre: nombre,
                correo: correo,
                password: password
            };
            localStorage.setItem('usuarioGlucoSmart', JSON.stringify(usuario));
            alert("¡Registro exitoso! Ahora puedes iniciar sesión.");
            window.location.href = "login.html"; // Redirigir al login
        });
    }

    const btnLogin = document.getElementById('btn-login-action');

    if (btnLogin) {
        btnLogin.addEventListener('click', (e) => {
            e.preventDefault();
            const emailInput = document.getElementById('login-email').value;
            const passwordInput = document.getElementById('login-password').value;
            const usuarioGuardado = localStorage.getItem('usuarioGlucoSmart');
            if (!usuarioGuardado) {
                alert("No hay ningún usuario registrado. Por favor regístrate primero.");
                return;
            }
            const usuarioObj = JSON.parse(usuarioGuardado);
            if (emailInput === usuarioObj.correo && passwordInput === usuarioObj.password) {
                alert(`¡Bienvenido de nuevo, ${usuarioObj.nombre}!`);
                window.location.href = "index.html"; // Redirigir al inicio
            } else {
                alert("Correo o contraseña incorrectos.");
            }
        });
    }
});