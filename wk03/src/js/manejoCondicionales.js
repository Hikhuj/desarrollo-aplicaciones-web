(function(){

    var nombre;
    var edad;
    var btnGuardar;
    var btnCancelar;

    /*
        Funcion obtiene los valores de las variables en el formulario
        Y define las acciones de unos botones
    */
    var validarControles = function() {
        let nombre = document.getElementById('name');
        let edad = document.getElementById('edad');
        let btnGuardar = document.getElementById('btnGuardar');
        let btnCancelar = document.getElementById('btnCancelar');
        btnGuardar.ejecutarBtnGuardar;
        btnCancelar.ejecutarBtnCancelar;
    }

    /* 
        Acciones del boton de Guardar
    */
    var ejecutarBtnGuardar = function(e) {
        e.preventDefault()

        /* Expresion regular que acepte letras UPPER CASE, lower case, caracteres especiales*/
        const expressionNombre = new RegExp('^[A-Z][a-z]+$','i')
        const expressionEdad = new RegExp('^[0-9]*$','i')

        // Evaluar los valores si son los necesarios o no
        if(!nombre.value){
            alert('Por favor digite un nombre');
            console.log('Error: sin nombre agregado');
            nombre.focus();
        }else if(expressionNombre.test(nombre.value)){
            alert('Por favor no digite numeros en el nombre');
            console.log('Error: numeros agregados');
            nombre.focus();
        }else if(!edad.value){
            alert('Por favor digite una edad');
            console.log('Error: edad no agregada');
            edad.focus();
        }else if(expressionNombre.test(edad.value)){
            alert('Por favor no digite letras en el campo edad');
            edad.focus();
        }
    }

    var ejecutarBtnCancelar = function(e) {
        e.preventDefault()
        console.log('Error: estamos en cancelar')
    }

    cargarControles();
})();