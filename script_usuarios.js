// Lista de usuarios
let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

function buscarUsuario(email) {
    // Buscar usuario por email
    const usuario = usuarios.find((usuario) => usuario.email == email);
    return usuario;
}

function validarRegistro() {
    if (window.location.pathname != "/register.html"){
        console.log(window.location.pathname);
        return false;
    }
    const dni = document.getElementById('dni_r').value;
    const nombre = document.getElementById('nombre_r').value;
    const contraseña = document.getElementById('contrasena_r').value;
    const conf_contraseña = document.getElementById('conf_contrasena_r').value;
    const email = document.getElementById('email_r').value;

    // Validar DNI
    const dniRegex = /^[0-9]{8}[A-Za-z]$/;
    if (!dniRegex.test(dni)) {
        alert('Formato de DNI inválido');
        return false;
    }

    // Validar nombre y apellido
    if (nombre == '') {
        alert('Por favor, ingrese su nombre y apellido');
        return false;
    }

    // Validar contraseña
    if (contraseña == '') {
        alert('Por favor, ingrese una contraseña');
        return false;
    }
    if(contraseña != conf_contraseña){
        alert('Las contraseñas no coinciden');
        return false;
    }

    // Validar correo electrónico
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
        alert('Formato de correo electrónico inválido');
        return false;
    }
    if (buscarUsuario(email)) {
        alert('Ya existe un usuario con ese correo electrónico');
        return false;
    }

    // Crear objeto de usuario
    const usuario = {
        dni: dni,
        nombre: nombre,
        contraseña: contraseña,
        email: email,
        nPedidos: 0,
        nReservas: 0,
    };

    // Añadir usuario a la lista
    usuarios.push(usuario);

    // Guardar lista de usuarios en LocalStorage
    localStorage.setItem('usuarios', JSON.stringify(usuarios));

    alert('Formulario enviado correctamente');
    window.location = 'inicio.html';
    return true;
}

function validarLogin(){
    if (window.location.pathname != "/login.html"){
        return false;
    }
    const email = document.getElementById('email_l').value;
    const contraseña = document.getElementById('contrasena_l').value;

    // Buscar usuario por nombre
    const usuario = buscarUsuario(email);
    
    // Si no se encuentra el usuario, mostrar una alerta
    if (!usuario) {
        alert('Usuario no encontrado');
        return false;
    }
    
    // Validar contraseña
    if (usuario.contraseña != contraseña) {
        alert('Contraseña incorrecta');
        return false;
    }

    // Guardar usuario en LocalStorage
    localStorage.setItem('usuario', JSON.stringify(usuario));

    alert('Login correcto');
    window.location = 'inicio.html';
    return true;
}
