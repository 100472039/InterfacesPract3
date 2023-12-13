function cerrarMenu() {
    var btnMenu = document.getElementById('btn-menu');
    btnMenu.checked = false;
}
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('enviarComentarioButton').addEventListener('click', function () {
        EnviarComen();
    });
});
/* window.onload = function() {
    document.getElementById("realizar_pedido").onclick = function(event) {
        event.preventDefault(); // Evita la acción predeterminada del enlace
        if (localStorage.getItem("usuario")) {
            window.location.href = "carrito_vips.html";
        } else {
            window.location.href = "login.html";
        }
    }
} */

/* document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('realizar_pedido').addEventListener('click', function (event) {
        event.preventDefault(); // Previene el comportamiento predeterminado del enlace
        let usuario = JSON.parse(localStorage.getItem("usuario"));
        if (usuario) {
            console.log("hay usuario");
            window.location.href = "carrito_vips.html";
        } else {
            
            alert("Debe iniciar sesión para realizar un pedido.")
            window.location.href = "login.html";
        }
    });
}); */
document.addEventListener('DOMContentLoaded', function() {
    let promocionesLink = document.querySelector('a[href="#promociones"]');
    promocionesLink.addEventListener('click', function() {
        cerrarMenu();
    });
});
function EnviarComen(){
    let comentario = document.getElementById("comentarios").value;
    
    // Comprueba si el comentario está vacío
    if (comentario.trim() === "") {
        alert("El comentario no puede estar vacío.");
        return;
    }
    let comentarios = JSON.parse(localStorage.getItem("comentarios")) || [];
    let fecha = new Date();
    let fechaFormateada = fecha.getDate() + "/" + (fecha.getMonth() + 1) + "/" + fecha.getFullYear();
    comentarios.push({texto: comentario, fecha: fechaFormateada});
    localStorage.setItem("comentarios", JSON.stringify(comentarios));
    
    document.getElementById("comentarios").value = "";
    alert("Se ha enviado su comentario.");

    mostrarComentarios();
}

function mostrarComentarios() {
    let comentarios = JSON.parse(localStorage.getItem("comentarios")) || [];
    let contenedorComentarios = document.getElementById("comentariosGuardados");
    contenedorComentarios.innerHTML = '';
    for (let i = 0; i < comentarios.length; i++) {
        contenedorComentarios.innerHTML += '<p><img src="img/perfil.png" class="icono-usuario">' + comentarios[i].texto + '<span class="fecha-comentario">' + comentarios[i].fecha + '</span></p>';
    }
}

window.onload = mostrarComentarios;

document.addEventListener('DOMContentLoaded', (event) => {
    const btnLeft = document.querySelector(".btn-left"),
          btnRight = document.querySelector(".btn-right"),
          slider = document.querySelector("#slider"),
          sliderSection = document.querySelectorAll(".slider-section");

    btnLeft.addEventListener("click", e => moveToLeft())
    btnRight.addEventListener("click", e => moveToRight())

    let operacion = 0,
        counter = 0,
        widthImg = 30 / sliderSection.length;

    function moveToRight() {
        if (counter >= sliderSection.length-1) {
            counter = 0;
            operacion = 0;
            slider.style.transform = `translate(-${operacion}%)`;
            slider.style.transition = "none";
            return;
        } 
        counter++;
        operacion = operacion + widthImg;
        slider.style.transform = `translate(-${operacion}%)`;
        slider.style.transition = "all ease .6s"
        
    }  

    function moveToLeft() {
        counter--;
        if (counter < 0 ) {
            counter = sliderSection.length-1;
            operacion = widthImg * (sliderSection.length-1)
            slider.style.transform = `translate(-${operacion}%)`;
            slider.style.transition = "none";
            return;
        } 
        operacion = operacion - widthImg;
        slider.style.transform = `translate(-${operacion}%)`;
        slider.style.transition = "all ease .6s"       
    };  

});

document.addEventListener('DOMContentLoaded', function() {
    console.log("Script ejecutado");
    
    console.log(window.location.pathname);
    if (window.location.pathname == "/reserva_finalizada.html"){
        console.log("Se cambió la posición del footer.");
        let footer = document.getElementById('foot');
        if (footer) {
            footer.style.position = "fixed";
           
        } else {
            console.error("No se encontró ningún elemento con la clase 'footer'.");
        }
        console.log(footer)
    }
});