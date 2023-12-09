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

