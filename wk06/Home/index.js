(function() {
    // Es recomendable que en JQUERY tenga un objeto o dos como maximo por que es dificil controlarlos.
    var login = {
        email: {},
        contrasenia: {},
        init:function(){
            // Con el signo de dolar lo que digo es que use la funcion de JQuery como tal
            this.email = $('#email');
            this.contrasenia = $('#contrasenia');
            this.btnGuardar = $('#btnGuardar');
            this.btnCancelar = $('#btnCancelar');
            this.bind();
        },
        // bind = asociar
        bind:function(){
            this.email.on('keypress', function(e){
                let control = $(e.target);
                console.log(control.val());
            });
            this.btnGuardar = $('#btnGuardar');
            this.btnCancelar = $('#btnCancelar');
            // Este es una accion para JQUERY y este es el formato action('nombre', function())
            // y recibe un objeto de tipo JQUERY
            /*
            this.btnGuardar.on('click', function(e){
                e.preventDefault();
                console.log('Estamos utilizando bien el JQuery');
            })
            */
        },

        logear:function(e){
            e.preventDefault();
            console.log('Estamos utilizando bien el JQuery');
        },

        limpiar:function(e){
            e.preventDefault();
            console.log('Evento limpiar');
        }

    }
    login.init();
})()