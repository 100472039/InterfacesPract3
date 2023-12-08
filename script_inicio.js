function EnviarComen(){
    var comentario = document.getElementById("comentarios").value;
    
    // Comprueba si el comentario está vacío
    if (comentario.trim() === "") {
        alert("El comentario no puede estar vacío.");
        return;
    }
    var comentarios = JSON.parse(localStorage.getItem("comentarios")) || [];
    var fecha = new Date();
    var fechaFormateada = fecha.getDate() + "/" + (fecha.getMonth() + 1) + "/" + fecha.getFullYear();
    comentarios.push({texto: comentario, fecha: fechaFormateada});
    localStorage.setItem("comentarios", JSON.stringify(comentarios));
    
    document.getElementById("comentarios").value = "";
    alert("Se ha enviado su comentario.");

    mostrarComentarios();
}

function mostrarComentarios() {
    var comentarios = JSON.parse(localStorage.getItem("comentarios")) || [];
    var contenedorComentarios = document.getElementById("comentariosGuardados");
    contenedorComentarios.innerHTML = '';
    for (var i = 0; i < comentarios.length; i++) {
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
document.addEventListener('DOMContentLoaded', (event) => {
    let monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September','October', 'November', 'December'];

    let currentDate = new Date();
    let currentDay = currentDate.getDate();
    let monthNumber = currentDate.getMonth();
    let currentYear = currentDate.getFullYear();
    let selectedDayElement;

    let dates = document.getElementById('dates');
    let month = document.getElementById('month');
    let year = document.getElementById('year');

    let prevMonthDOM = document.getElementById('prev-month');
    let nextMonthDOM = document.getElementById('next-month');

    month.textContent = monthNames[monthNumber];
    year.textContent = currentYear.toString();

    prevMonthDOM.addEventListener('click', ()=>lastMonth());
    nextMonthDOM.addEventListener('click', ()=>nextMonth());



    const writeMonth = (month) => {

        for(let i = startDay(); i>0;i--){
            dates.innerHTML += ` <div class="calendar__date calendar__item calendar__last-days">
                ${getTotalDays(monthNumber-1)-(i-1)}
            </div>`;
        }

        for(let i=1; i<=getTotalDays(month); i++){
            dates.innerHTML += ` <div class="calendar__date calendar__item" onclick="selectDay(this, ${i})">${i}</div>`;
        }
    }
    
    window.selectDay = (element, day) => {
        selectedDay = day;
        if(selectedDayElement) {
            selectedDayElement.classList.remove('calendar__today');  // Restablecer el estilo del día anteriormente seleccionado
        }
        selectedDayElement = element;
        selectedDayElement.classList.add('calendar__today');  // Cambiar el estilo del día seleccionado
    }
    const getTotalDays = month => {
        if(month === -1) month = 11;

        if (month == 0 || month == 2 || month == 4 || month == 6 || month == 7 || month == 9 || month == 11) {
            return  31;

        } else if (month == 3 || month == 5 || month == 8 || month == 10) {
            return 30;

        } else {

            return isLeap() ? 29:28;
        }
    }

    const isLeap = () => {
        return ((currentYear % 100 !==0) && (currentYear % 4 === 0) || (currentYear % 400 === 0));
    }

    const startDay = () => {
        let start = new Date(currentYear, monthNumber, 1);
        return ((start.getDay()-1) === -1) ? 6 : start.getDay()-1;
    }

    const lastMonth = () => {
        if(monthNumber !== 0){
            monthNumber--;
        }else{
            monthNumber = 11;
            currentYear--;
        }

        setNewDate();
    }

    const nextMonth = () => {
        if(monthNumber !== 11){
            monthNumber++;
        }else{
            monthNumber = 0;
            currentYear++;
        }

        setNewDate();
    }

    const setNewDate = () => {
        currentDate.setFullYear(currentYear,monthNumber,currentDay);
        month.textContent = monthNames[monthNumber];
        year.textContent = currentYear.toString();
        dates.textContent = '';
        writeMonth(monthNumber);
    }


    writeMonth(monthNumber);
});
