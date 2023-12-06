function cerrarMenu() {
    var btnMenu = document.getElementById('btn-menu');
    btnMenu.checked = false;
}
function EnviarComen(){
    var comentario = document.getElementById("comentarios").value;
    
    // Comprueba si el comentario está vacío
    if (comentario.trim() === "") {
        alert("El comentario no puede estar vacío.");
        return;
    }
    var comentarios = JSON.parse(localStorage.getItem("comentarios")) || [];
    comentarios.push(comentario);
    localStorage.setItem("comentarios", JSON.stringify(comentarios));
    
    document.getElementById("comentarios").value = "";
    alert("Se ha enviado su comentario.");
}
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