window.onload = function() {
    // var, let y const
    var nombre = {}
    var cedula = {}
    var genero = {}
    var email = {}
    var fNacimiento = {}
    var direccion = {}
    var formulario = {}
    var btnGuardar = {}
    var btnCancelar = {}

    function iniciaizarPagina(){
        // DOM document object module
        nombre = document.getElementById('nombre');
        cedula = document.getElementById('cedula');
        genero = document.getElementById('genero');
        email = document.getElementById('email');
        fNacimiento = document.getElementById('fNacimiento');
        direccion = document.getElementById('direccion');
        formulario = document.getElementById('formulario');
        btnGuardar = document.getElementById('Guardar');
        btnCancelar = document.getElementById('Cancelar');
        btnGuardar.onClick = guardarFormulario();
        btnCancelar.onClick = cancelarFormulario();
        console.log('Controles cargados')
    }

    function guardarFormulario(e){
        e.preventDefault();
        let mensaje = `<p>
            Nombre: ${nombre.value}<br>
            Cedula: ${cedula.value}<br>
            Genero: ${genero.value}<br>
            Email: ${email.value}<br>
            Fecha de Nacimiento: ${fNacimiento.value}<br>
            Direccion: ${direccion.value}
        </p>`;
        const respuesta = document.getElementsByClassName('resulta');
        respuesta[0].innerHTML = mensaje;
        console.log('ejecuta el boton Guardar');
    }

    function cancelarFormulario(){
        e.preventDefault();
        console.log('ejecuta el boton Cancelar');
        formulario.reset()
    }

    iniciaizarPagina();

}