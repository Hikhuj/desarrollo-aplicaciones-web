window.onload = function() {
    // var, let y const
    var nombreMascota = {}
    var nombreDuenio = {}
    var tipoMascota = {}
    var poseeVacunas = {}
    var castraccion = {}
    var email = {}
    var fNacimiento = {}
    var direccion = {}
    var formulario = {}
    var btnGuardar = {}
    var btnCancelar = {}

    function inicializarPagina(){
        // DOM document object module
        nombreMascota = document.getElementById('nombreMascota');
        nombreDuenio = document.getElementById('nombreDuenio');
        tipoMascota = document.getElementById('tipoMascota');
        poseeVacunas = document.getElementById('poseeVacunas');
        castraccion = document.getElementById('castraccion');
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

    function guardarFormulario(){
        let mensaje = `<p>
            Nombre de Mascota: ${nombreMascota.value}<br>
            Nombre de Dueño: ${nombreDuenio.value}<br>
            Tipo de Mascota: ${tipoMascota.value}<br>
            Posee Vacunas: ${poseeVacunas.value}<br>
            Esta castrado/a: ${castraccion.value}<br>
            Email: ${email.value}<br>
            Fecha de Nacimiento: ${fNacimiento.value}<br>
            Direccion: ${direccion.value}
        </p>`;
        const respuesta = document.getElementsByClassName('resulta');
        respuesta[0].innerHTML = mensaje;
        console.log('ejecuta el boton Guardar');
    }

    function cancelarFormulario(){
        console.log('ejecuta el boton Cancelar');
        formulario.reset()
    }

    inicializarPagina();

}