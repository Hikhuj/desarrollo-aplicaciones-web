(function() {
    var divListaFor = {};
    var btnListaFor = {};
    var btnListaForLimpiar = {};
    var divListaWhile = {};
    var btnListaWhile = {};
    var btnListaWhileLimpiar = {};

    // Obtener los valores desde el sitio web que nosotros creamos
    var cargarControles = function() {
        divListaFor = document.getElementById('ListaFor');
        btnListaFor = document.getElementById('btnListaFor');
        btnListaForLimpiar = document.getElementById('btnListaForLimpiar');
        divListaWhile = document.getElementById('ListaWhile');
        btnListaWhile = document.getElementById('btnListaWhile');
        btnListaWhileLimpiar = document.getElementById('btnListaWhileLimpiar');

        // Acciones de los botones de ciclo For
        btnListaFor.onclick = ejecutarBtnListaFor;
        btnListaForLimpiar.onclick = ejecutardivListaForLimpiar;

        // Acciones de los botones de ciclo While
        btnListaWhile.onclick = ejecutarbtnListaWhile;
        btnListaWhileLimpiar.onclick = ejecutardivListaWhileLimpiar;
    }

    // Variable para almacenar una funcion para el boton de crear lista de ciclo FOR
    var ejecutarBtnListaFor = function() {
        let lista = document.createElement('ul');
        for(let i=0; i<10; i++){
            let opcion = document.createElement('li');
            opcion.innerHTML = `valor` + (i + 1);
            lista.append(opcion);
        }

        divListaFor.append(lista);
    }

    var ejecutardivListaForLimpiar = function() {
        divListaFor.innerHTML = ``;
    }

    var ejecutarbtnListaWhile = function() {
        ejecutardivListaWhileLimpiar();
        let lista = document.createElement('ol');
        let i = 0;
        while (i < 20){
            let opcion = document.createElement('li');
            opcion.innerHTML = `valor` + (i + 1);
            lista.append(opcion);
            i++;
        }

        divListaWhile.append(lista);
    }

    ejecutardivListaWhileLimpiar = function() {
        divListaWhile.innertHTML = '';
    }

    cargarControles();

})()