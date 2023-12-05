// Lista de usuarios
let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

function validarFormulario() {
    const dni = document.getElementById('dni').value;
    const nombre = document.getElementById('nombre').value;
    const contraseña = document.getElementById('contrasena').value;
    const conf_contraseña = document.getElementById('conf_contrasena').value;
    const email = document.getElementById('email').value;

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

    // Crear objeto de usuario
    const usuario = {
        dni: dni,
        nombre: nombre,
        contraseña: contraseña,
        email: email,
        coins: 500,
    };

    // Añadir usuario a la lista
    usuarios.push(usuario);

    // Guardar lista de usuarios en LocalStorage
    localStorage.setItem('usuarios', JSON.stringify(usuarios));

    alert('Formulario enviado correctamente');
}

function buscarUsuario(dni) {
    // Buscar usuario por nombre
    const usuario = usuarios.find(usuario => usuario.dni === dni);
    
    // Si no se encuentra el usuario, mostrar una alerta
    if (!usuario) {
        alert('No existe un usuario con ese nombre');
    }
    
    return usuario;
}


console.log(buscarUsuario('51731545z'));
