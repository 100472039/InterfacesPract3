let productosCarrito = {};

document.addEventListener("DOMContentLoaded", function() {
    let paso1 = document.getElementById('paso1');
    let paso2 = document.getElementById('paso2');
    let paso2_2 = document.getElementById('paso2_2');
    let paso3 = document.getElementById('paso3');
    let alergenos = document.getElementById('alergenos');
    let menu_infantil = document.getElementById('menu_infantil')
    let contenedorMigas = document.querySelectorAll('.contenedor-migas');
    let textomp = document.querySelectorAll('.textomp');
    contenedorMigas[0].style.backgroundColor = '#dd1b2d';
    textomp[0].style.color = 'white';

    let paso1Selector = document.getElementById('paso1Selector');
    let paso2Selector = document.getElementById('paso2Selector');
    let paso22Selector = document.getElementById('boton-insertar');
    let paso3Selector = document.getElementById('paso3Selector');
    let paso3confirmar = document.getElementById('boton-pago');
    let paso3añadirplatos = document.getElementById('boton-pago2');
    let paso3_1confirmar = document.getElementById('boton-pago3');
    let paso3_1añadirplatos = document.getElementById('boton-pago4');
    let paso3inicio = document.getElementById('boton-inicio');
    let alergenossel = document.getElementById('alergenossel');
    let tituloinf = document.getElementById('titulo-apartado-inf');

    function hayProductosEnCarrito() {
        return Object.keys(productosCarrito).length > 0;
    }
    
    function InputsCompletados() {
        if (verificarformatoTitular() == false ||verificarformatoTelefono() == false|| verificarformatoEmail() == false || 
        verificarformatoTarjeta()== false || verificarformatoFecha() == false ||  verificarformatoCVC() == false) {
            return false;
        }

        return true;
    }
    function verificarformatoTelefono(){
        var telefono = document.getElementById("telefono").value;
        var expresion = /^[0-9]{9}$/;
        if (telefono === "") {
            document.getElementById("telefono").style.border = "2px solid red";
            alert("El campo telefono esta vacio");
            return false;
        } else if (!expresion.test(telefono)) {
            document.getElementById("telefono").style.border = "2px solid red";
            alert("El telefono no es valido");
            return false;
        } else {
            document.getElementById("telefono").style.border = "2px solid green";
            return true;
        }
    }
    
    function verificarformatoEmail(){
        let email = document.getElementById("email").value;
        let expresion = /\w+@\w+\.+[a-z]/;
        if (email === "") {
            document.getElementById("email").style.border = "2px solid red";
            alert("El campo email esta vacio");
            return false;
        } else if (!expresion.test(email)) {
            document.getElementById("email").style.border = "2px solid red";
            alert("El email no es valido");
            return false;
        } else {
            document.getElementById("email").style.border = "2px solid green";
            return true;
        }
    }
    function verificarformatoTitular(){
        let nombre = document.getElementById("titular").value;
        let regexNombre = /^[a-zA-Z\s]*$/; // Expresión regular para nombres que solo contienen letras y espacios
        if (nombre === "") {
            document.getElementById("titular").style.border = "2px solid red";
            alert("El campo titular esta vacio");
            return false;
        } else if (!regexNombre.test(nombre)) {
            document.getElementById("titular").style.border = "2px solid red";
            alert("El titular solo debe contener letras y espacios");
            return false;
        } else {
            document.getElementById("titular").style.border = "2px solid green";
            return true;
        }
    }
    function verificarformatoDireccion(){
        let nombre = document.getElementById("direccion").value;
        let regexNombre = /^[a-zA-Z0-9\s]*$/; // Expresión regular para nombres que solo contienen letras y espacios
        if (nombre === "") {
            document.getElementById("titular").style.border = "2px solid red";
            alert("El campo direccion esta vacio");
            return false;
        } else if (!regexNombre.test(nombre)) {
            document.getElementById("direccion").style.border = "2px solid red";
            alert("La direccion solo debe contener letras, numeros y espacios");
            return false;
        } else {
            document.getElementById("direccion").style.border = "2px solid green";
            return true;
        }
    }
    function verificarformatoTarjeta(){
        let tarjeta = document.getElementById("tarjeta").value;
        let expresion = /^[0-9]{16}$/;
        if (tarjeta === "") {
            document.getElementById("tarjeta").style.border = "2px solid red";
            alert("El campo numero de la tarjeta esta vacio");
            return false;
        } else if (!expresion.test(tarjeta)) {
            document.getElementById("tarjeta").style.border = "2px solid red";
            alert("El numero de la tarjeta no es valido");
            return false;
        } else {
            document.getElementById("tarjeta").style.border = "2px solid green";
            return true;
        }
    }
    
    function verificarformatoFecha(){
        let fecha = document.getElementById("caducidad").value;
        let expresion = /^(0[1-9]|1[0-2])\/([0-9]{2})$/;
        if (fecha === "") {
            document.getElementById("caducidad").style.border = "2px solid red";
            alert("El campo fecha esta vacio");
            return false;
        } else if (!expresion.test(fecha)) {
            document.getElementById("caducidad").style.border = "2px solid red";
            alert("El fecha no es valido");
            return false;
        } else {
            document.getElementById("caducidad").style.border = "2px solid green";
            return true;
        }
    }
    
    function verificarformatoCVC(){
        let cvc = document.getElementById("cvc").value;
        let expresion = /^[0-9]{3}$/;
        if (cvc === "") {
            document.getElementById("cvc").style.border = "2px solid red";
            alert("El campo CVC esta vacio");
            return false;
        } else if (!expresion.test(cvc)) {
            document.getElementById("cvc").style.border = "2px solid red";
            alert("El CVC no es valido");
            return false;
        } else {
            document.getElementById("cvc").style.border = "2px solid green";
            return true;
        }
    }
    // Función para mostrar el paso correspondiente.
    function mostrarPaso1(event) {
        event.preventDefault();
        paso1.classList.add('mostrar');
        paso2.classList.remove('mostrar');
        paso2_2.classList.remove('mostrar');
        paso3.classList.remove('mostrar');
        alergenos.classList.remove('mostrar');
        menu_infantil.classList.remove('mostrar');
        contenedorMigas[0].style.backgroundColor = '#dd1b2d';
        textomp[0].style.color = 'white';
        contenedorMigas[1].style.backgroundColor = 'white';
        textomp[1].style.color = '#dd1b2d';
        contenedorMigas[2].style.backgroundColor = 'white';
        textomp[2].style.color = '#dd1b2d';
    }

    function mostrarPaso2(event) {
        event.preventDefault();
        // Sólo muestra el paso 2 si se ha añadido algo al carrito
        if (hayProductosEnCarrito()) {
            paso1.classList.remove('mostrar');
            paso2.classList.add('mostrar');
            paso2_2.classList.remove('mostrar');
            paso3.classList.remove('mostrar');
            alergenos.classList.remove('mostrar');
            menu_infantil.classList.remove('mostrar');
            contenedorMigas[0].style.backgroundColor = 'white';
            textomp[0].style.color = '#dd1b2d';
            contenedorMigas[1].style.backgroundColor = '#dd1b2d';
            textomp[1].style.color = 'white';
            contenedorMigas[2].style.backgroundColor = 'white';
            textomp[2].style.color = '#dd1b2d';
        }else {
            alert('Por favor, añade algo al carrito antes de continuar.');
        }
    }

    function mostrarPaso22(event) {
        event.preventDefault();
        paso1.classList.remove('mostrar');
        paso2.classList.remove('mostrar');
        paso2_2.classList.add('mostrar');
        paso3.classList.remove('mostrar');
        alergenos.classList.remove('mostrar');
        menu_infantil.classList.remove('mostrar');
        contenedorMigas[0].style.backgroundColor = 'white';
        textomp[0].style.color = '#dd1b2d';
        contenedorMigas[1].style.backgroundColor = '#dd1b2d';
        textomp[1].style.color = 'white';
        contenedorMigas[2].style.backgroundColor = 'white';
        textomp[2].style.color = '#dd1b2d';
    }

    
    function mostrarPaso3(event) {
        event.preventDefault();
        // Sólo muestra el paso 3 si se ha completado la información de los inputs
        if (InputsCompletados()) {
            paso1.classList.remove('mostrar');
            paso2.classList.remove('mostrar');
            paso2_2.classList.remove('mostrar');
            paso3.classList.add('mostrar');
            alergenos.classList.remove('mostrar');
            menu_infantil.classList.remove('mostrar');
            contenedorMigas[1].style.backgroundColor = 'white';
            textomp[1].style.color = '#dd1b2d';
            contenedorMigas[2].style.backgroundColor = '#dd1b2d';
            textomp[2].style.color = 'white';
            contenedorMigas[0].style.backgroundColor = 'white';
            textomp[0].style.color = '#dd1b2d';
        } /* else {
            alert('Por favor, completa todos los campos antes de continuar.');
        } */
    }
    function mostrarAlergenos(event) {
        event.preventDefault();
        paso1.classList.remove('mostrar');
        paso2.classList.remove('mostrar');
        paso2_2.classList.remove('mostrar');
        paso3.classList.remove('mostrar');
        alergenos.classList.add('mostrar'); 
        menu_infantil.classList.remove('mostrar');
    }

    function mostrarMenuInfantil(event) {
        event.preventDefault();
        paso1.classList.remove('mostrar');
        paso2.classList.remove('mostrar');
        paso2_2.classList.remove('mostrar');
        paso3.classList.remove('mostrar');
        alergenos.classList.remove('mostrar'); 
        menu_infantil.classList.add('mostrar');
    }

    // Agrega los controladores de eventos de click
    paso1Selector.addEventListener('click', mostrarPaso1);
    paso2Selector.addEventListener('click', mostrarPaso2);
    paso22Selector.addEventListener('click', mostrarPaso22);
    paso3confirmar.addEventListener('click',mostrarPaso3);
    paso3Selector.addEventListener('click',mostrarPaso3);
    paso3añadirplatos.addEventListener('click', mostrarPaso1);
    paso3inicio.addEventListener('click',mostrarPaso1);
    paso3_1confirmar.addEventListener('click',mostrarPaso3);
    paso3_1añadirplatos.addEventListener('click', mostrarPaso1);
    alergenossel.addEventListener('click',mostrarAlergenos);
    tituloinf.addEventListener('click',mostrarMenuInfantil)

});

document.addEventListener('DOMContentLoaded', function() {
    let iconoCarrito = document.querySelector('label[for="btn-menu"]');
    let menuCarrito = document.querySelector('#menu-carrito');
    let contenedorProductos = document.querySelector('#productos-carrito');
    let totalCarrito = document.querySelector('#total-carrito');
    let productosSeleccionados = [];

    iconoCarrito.addEventListener('click', function() {
        // Cuando se hace click en el icono del carrito, muestra u oculta el menú del carrito
        if (menuCarrito.classList.contains('menu-visible')) {
            menuCarrito.classList.remove('menu-visible');
            menuCarrito.classList.add('menu-oculto');
            totalCarrito.classList.remove('total-visible');
            totalCarrito.classList.add('total-oculto');
        } else {
            menuCarrito.classList.add('menu-visible');
            menuCarrito.classList.remove('menu-oculto');
            totalCarrito.classList.add('total-visible');
            totalCarrito.classList.remove('total-oculto');
        }
    });
    

    let botonesSel = document.querySelectorAll('#boton-sel');

    botonesSel.forEach(boton => {
        boton.addEventListener('click', function() {
            let producto = this.parentElement.querySelector('.producto');
            let nombreProducto = producto.querySelector('.nombre-producto').textContent;
            if (producto.style.border == '') {
                producto.style.border = '20px solid #dd1b2d';
                productosSeleccionados.push(nombreProducto);
            } else {
                producto.style.border = '';
                let index = productosSeleccionados.indexOf(nombreProducto);
                if (index > -1) {
                    productosSeleccionados.splice(index, 1);
                }
            }

            let categoria = this.parentElement.parentElement;
            let botonesEnLaMismaCategoria = categoria.querySelectorAll('.boton2');
            botonesEnLaMismaCategoria.forEach(botonEnLaMismaCategoria => {
                if (botonEnLaMismaCategoria != this) { 
                    let producto = botonEnLaMismaCategoria.parentElement.querySelector('.producto');
                    let nombreProducto = producto.querySelector('.nombre-producto').textContent;
                    producto.style.border = '';
                    let index = productosSeleccionados.indexOf(nombreProducto);
                    if (index > -1) {
                        productosSeleccionados.splice(index, 1);
                    }
                }
            });
        });
    });

    let botonAnadir = document.querySelector('#boton-menuanadir');

    // Cuando añades el menú infantil pulsando al botón añadir, se añadirá al carrito con precio fijo de 20€ y se mostrarán los productos seleccionados
    botonAnadir.addEventListener('click', function() {
        if (productosSeleccionados.length < 3) {
            alert('Por favor, selecciona tres productos antes de añadir el menú infantil.');
            return;
        }
        let nombreProducto = 'Menu Infantil: <br>' + productosSeleccionados.join('<br>');
        let precioProducto = 20;
        if (productosCarrito[nombreProducto]) {
            productosCarrito[nombreProducto].cantidad++;
        } else {
            productosCarrito[nombreProducto] = {
                cantidad: 1,
                precio: precioProducto
            };
        }

        // Resetea el borde del contenedor y la lista de productos seleccionados
        botonesSel.forEach(boton => {
            boton.parentElement.querySelector('.producto').style.border = '';
        });
        productosSeleccionados = [];
        contenedorProductos.innerHTML = '';
        let total = 0;
        for (let producto in productosCarrito) {
            let cantidad = productosCarrito[producto].cantidad;
            let precio = productosCarrito[producto].precio;
            total += cantidad * precio;
            let elementoProducto = document.createElement('div');
            elementoProducto.className = 'producto-carrito';
            elementoProducto.innerHTML = '<span>' + producto + ' x' + cantidad +"  "+ (cantidad * precio) + '€</span>';
            contenedorProductos.appendChild(elementoProducto);
        }

        totalCarrito.textContent = 'Total: ' + total + '€';
    });

    let botones = document.querySelectorAll('.boton');

    //Cuando añades un producto pulsando al boton añadir se añafirá al carrito
    botones.forEach(boton => {
        boton.addEventListener('click', function() {
            let nombreProducto = this.parentElement.querySelector('.nombre-producto').textContent;
            let precioProducto = parseFloat(this.parentElement.querySelector('.precio-producto').textContent.replace('€', ''));
            if (productosCarrito[nombreProducto]) {
                productosCarrito[nombreProducto].cantidad++;
            } else {
                productosCarrito[nombreProducto] = {
                    cantidad: 1,
                    precio: precioProducto
                };
            }
            
            contenedorProductos.innerHTML = '';
            let total = 0;
            for (let producto in productosCarrito) {
                let cantidad = productosCarrito[producto].cantidad;
                let precio = productosCarrito[producto].precio;
                total += cantidad * precio;
                let elementoProducto = document.createElement('div');
                elementoProducto.className = 'producto-carrito';
                elementoProducto.innerHTML = '<span>' + producto + ' x' + cantidad +"  "+ (cantidad * precio) + '€</span>';
                contenedorProductos.appendChild(elementoProducto);
            }

            totalCarrito.textContent = 'Total: ' + total + '€';
        });
    });
});




document.addEventListener('DOMContentLoaded', function(){
    //lISTA PARA SELECCIONAR MÁS DE UNO
    let alergenosSeleccionados = [];
    document.querySelectorAll('.contenedor-alergias-sel img').forEach(function(img) {
        img.addEventListener('click', function() {
            let seleccionado = this.src.includes('_sel');

            // Cambia la imagen del alérgeno
            if (seleccionado) {
                this.src = this.src.replace('_sel.png', '.png');
                let index = alergenosSeleccionados.indexOf(this.dataset.alergenos);
                if (index > -1) {
                    alergenosSeleccionados.splice(index, 1);
                }
            } else {
                this.src = this.src.replace('.png', '_sel.png');
                alergenosSeleccionados.push(this.dataset.alergenos);
            }
            document.querySelectorAll('.producto-boton').forEach(function(producto) {
                producto.classList.remove('oculto');
            });

            // Si el alérgeno está seleccionado, oculta los productos que contienen los alérgenos seleccionados
            alergenosSeleccionados.forEach(function(alergeno) {
                document.querySelectorAll('.producto-boton[data-alergenos*=' + alergeno + ']').forEach(function(producto) {
                    producto.classList.add('oculto');
                });
            });
        });
    });
});







