let productosCarrito = {};

document.addEventListener("DOMContentLoaded", function() {
    var paso1 = document.getElementById('paso1');
    var paso2 = document.getElementById('paso2');
    var paso2_2 = document.getElementById('paso2_2');
    var paso3 = document.getElementById('paso3');
    var alergenos = document.getElementById('alergenos');
    var menu_infantil = document.getElementById('menu_infantil')
    let contenedorMigas = document.querySelectorAll('.contenedor-migas');
    let textomp = document.querySelectorAll('.textomp');
    contenedorMigas[0].style.backgroundColor = '#dd1b2d';
    textomp[0].style.color = 'white';

    var paso1Selector = document.getElementById('paso1Selector');
    var paso2Selector = document.getElementById('paso2Selector');
    var paso22Selector = document.getElementById('boton-insertar');
    var paso3Selector = document.getElementById('paso3Selector');
    var paso3confirmar = document.getElementById('boton-pago');
    var paso3añadirplatos = document.getElementById('boton-pago2');
    var paso3_1confirmar = document.getElementById('boton-pago3');
    var paso3_1añadirplatos = document.getElementById('boton-pago4');
    var paso3inicio = document.getElementById('boton-inicio');
    var alergenossel = document.getElementById('alergenossel');
    var tituloinf = document.getElementById('titulo-apartado-inf');

    function hayProductosEnCarrito() {
        return Object.keys(productosCarrito).length > 0;
    }
    
    function InputsCompletados() {
        let inputs = document.querySelectorAll('input');
        return Array.from(inputs).every(input => input.value !== '');
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
        } else {
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
        } else {
            alert('Por favor, completa todos los campos antes de continuar.');
        }
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
    var alergenosSeleccionados = [];
    document.querySelectorAll('.contenedor-alergias-sel img').forEach(function(img) {
        img.addEventListener('click', function() {
            var seleccionado = this.src.includes('_sel');

            // Cambia la imagen del alérgeno
            if (seleccionado) {
                this.src = this.src.replace('_sel.png', '.png');
                var index = alergenosSeleccionados.indexOf(this.dataset.alergenos);
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







