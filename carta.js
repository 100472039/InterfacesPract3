document.addEventListener("DOMContentLoaded", function() {
    var paso1 = document.getElementById('paso1');
    var menu_infantil = document.getElementById('menu_infantil')


    var volver = document.getElementById('volver');
    var tituloinf = document.getElementById('titulo-apartado-inf');
    

    // Función para mostrar el paso correspondiente.
    function mostrarPaso1(event) {
        event.preventDefault();
        paso1.classList.add('mostrar');
        menu_infantil.classList.remove('mostrar');
    }


    function mostrarMenuInfantil(event) {
        event.preventDefault();
        paso1.classList.remove('mostrar'); 
        menu_infantil.classList.add('mostrar');
    }

    volver.addEventListener('click', mostrarPaso1);
    tituloinf.addEventListener('click',mostrarMenuInfantil);

});



document.addEventListener("DOMContentLoaded", function() {
    var questions = document.querySelectorAll("#foodForm .pregunta");
    var currentQuestionIndex = 0;

    document.getElementById("nextButton").addEventListener("click", function() {
        // Oculta la pregunta actual
        questions[currentQuestionIndex].style.display = "none";

        // Incrementa el índice de la pregunta actual
        currentQuestionIndex++;

        // Si hay una siguiente pregunta, muéstrala
        if (currentQuestionIndex < questions.length) {
            questions[currentQuestionIndex].style.display = "block";
        } else {
            // Si no hay una siguiente pregunta, muestra el botón "Recomendar"
            document.getElementById("nextButton").style.display = "none";
            document.getElementById("recommendButton").style.display = "block";
        }
    });

    document.getElementById("recommendButton").addEventListener("click", function() {
        recommendDish();
        // Restablece el índice de la pregunta actual a 0
        currentQuestionIndex = 0;
        // Muestra la primera pregunta
        questions[currentQuestionIndex].style.display = "block";
        // Oculta el botón "Recomendar" y muestra el botón "Siguiente"
        document.getElementById("recommendButton").style.display = "none";
        document.getElementById("nextButton").style.display = "block";
    });

});

function recommendDish() {
    var HoradeComer = document.getElementById("HoradeComer").value;
    var Hambre = document.getElementById("Hambre").value;
    var Queso = document.getElementById("Queso").value;
    var Picante = document.getElementById("Picante").value;
    var BBQ = document.getElementById("BBQ").value;
    var Chocolate = document.getElementById("Chocolate").value;
    var Hamburguesas = document.getElementById("Hamburguesas").value;
    var Tarta = document.getElementById("Tarta").value;
    var Pescado = document.getElementById("Pescado").value;
    var Vegetariano = document.getElementById("Vegetariano").value;
    var dishName;
    var dishImageSrc;

    if (HoradeComer == "Desayuno" || HoradeComer == "Merienda") {
        if (Chocolate == "yes") {
            if (Tarta == "yes"){
                dishName = "Choco&Caramel";
                dishImageSrc = "img/tartaa.png";
            }
            else{
                dishName = "Tortitas";
                dishImageSrc = "img/tortitas.png";
            }
        } 
        else {
            dishName = "Fundy OClock";
            dishImageSrc = "img/oclock.png";
        }
    } else if (HoradeComer == "Comida" || HoradeComer == "Cena") {
        if (Vegetariano=="yes"){
            dishName = "Vegan Burguer";
            dishImageSrc = "img/VEGAN.jpg";
        }
        else{
            if (Hambre == "yes") {
                if (Hamburguesas == "burgers") {
                    if (BBQ == "yes") {
                        dishName = "Chicken BBQ";
                        dishImageSrc = "img/BBQ.png";
                    } else {
                        if (Queso == "yes") {
                            dishName = "La Burratisima";
                            dishImageSrc = "img/BURRATA.png";
                        } else {
                            dishName = "Vegan Burguer";
                            dishImageSrc = "img/VEGAN.jpg";
                        }
                    }
                } else {
                    if (BBQ == "yes") {
                        dishName = "Kentucky";
                        dishImageSrc = "img/kentucky.jpg";
                    } else {
                        if (Queso == "yes") {
                            dishName = "Cubano";
                        dishImageSrc = "img/cubano.jpg";
                        } else {
                            if (Pescado=="yes"){
                                dishName = "Salmon";
                                dishImageSrc = "img/salmon.png";
                            }
                            else{
                                if (Picante == "yes") {
                                    dishName = "Cacho Power";
                                    dishImageSrc = "img/cachopower.jpg";
                                } else {
                                    dishName = "Pastrami";
                                    dishImageSrc = "img/pastrami.jpg";
                                }
                            }
                        }
                    }
                }
            } else {
                if (Picante == "yes") {
                    dishName = "Alitas";
                    dishImageSrc = "alitas.png";
                } else {
                    if (Queso == "yes") {
                        dishName = "Nachos";
                        dishImageSrc = "nachos.jpg";
                    } else {
                        dishName = "Quesadilla";
                        dishImageSrc = "quesadilla.jpg";
                    }
                }
            }
        }
    }
    document.getElementById("dishImage").src = dishImageSrc;
    document.getElementById("dishName").textContent = dishName;

    // Oculta el formulario y muestra la imagen y el nombre del plato
    document.getElementById("foodForm").style.display = "none";
    document.getElementById("dishDisplay").style.display = "block";
    document.getElementById("dishName").style.display = "block";
    document.getElementById("dishImage").style.display = "block";

    // Muestra el formulario y oculta la imagen y el nombre del plato después de 5 segundos
    setTimeout(function() {
        document.getElementById("foodForm").style.display = "block";
        document.getElementById("dishDisplay").style.display = "none";
        document.getElementById("dishName").style.display = "none";
        document.getElementById("dishImage").style.display = "none";
    
    }, 10000);
}


