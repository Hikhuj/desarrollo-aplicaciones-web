(function(){

    // Query selector se usa y trabaja muy bien para obtener un ID de un tag de HTML
    var contenido = {};
    var btnObtener = {};
    var filtro = {};
    var datos = [];
    var btnGuardarUsuario = {};
    var btnCancelarUsuario = {};

    // Funcion inicializadora de componentes
    function init() {
        contenido = document.querySelector('#contenido');
        btnObtener = document.querySelector('#btnObtener');
        filtro = document.querySelector('#txtFiltrar');
        btnGuardarUsaurio = document.querySelector('#btnGuardarUsuario');
        btnCancelarUsaurio = document.querySelector('#btnCancelarUsuario');
        bind();
    }

    // BIND como palabra, hace una union entre el control y un metodo
    // como el siguiente
    function bind(){
        btnObtener.onclick = traerDatos;
        filtro.onblur = filtrarData;
        btnGuardarUsuario.onclick = guardarUsuario;
        btnCancelarUsuario.onclick = cancelarUsuario;
    }

    function guardarUsuario(e){
        e.preventDefault();
        console.log('Vamos bien');
        let userId = document.getElementById('userId').value;
        let id = document.getElementById('id').value;
        let title = document.getElementById('title').value;
        let body = document.getElementById('body').value;
        try {    
            if((parsetInt(userId)) < 0  || (parseInt(id) < 0)){
                alert('No se aceptan valores menores a 0.');
            }else{
                userId = parseInt(userId);
                id = parseInt(id);
            }
        } catch (error) {
            alert(error);
        }

        let user = {
            userId,
            id,
            title,
            body
        }
        datos.push(user);
        /*
        // Formato reducido del procedimiento de arriba
        datos.push({
            userId: document.getElementById('userId')
            id: document.getElementById('id')
            title: document.getElementById('title')
            body: document.getElementById('body')
        })
        */
       crearTabla();
       document.getElementById('formularioUsuario').reset();
    }

    function cancelarUsuario(e){
        e.preventDefault();
        document.getElementById('formUsuario').reset();
    }

    function modificarUsuario(e) {
        let control = e.target
        console.log(control.getAttribute('data-btnModificar'));
    }

    function eliminarUsuario(e) {
        console.log('Eliminando usuario')
    }

    function filtrarData(e){
        var control = e.target;
        // Operacion ternaria
        var objetos = (!control.value)?datos:datos.filter(dato => {
            // Por lo menos para que retorne un valor, en este caso aunue sea devuelva un dos o algo asi.
            if(dato.id === parseInt(control.value))
                return dato;
        });
        crearTabla(objetos);
    }

    function traerDatos(){
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(data => {
                datos = data;
                crearTabla();
                // console.log('en el metodo traerDatos ', data)
                // creaTabla()
            })
    }

    // Funcion para crear una tabla y recibe un objeto, en este caso un objeto de datos.
    // Esta es otra forma de ver las cosas, pues se puede guardar como variable tambien
    // con la palabra cable async hacemos el proceso sincronico
    const crearTabla = async function(info){
        info = (info === undefined)?datos:info;

        contenido.innerHTML = '';
        // Creamos el objeto
        var filas = await info.map(e => {
            return `<tr>
                <td>${e.userId}</td>
                <td>${e.id}</td>
                <td>${e.title}</td>
                <td>${e.body}</td>
                <td>
                    <div>
                    <button class="btn btn-info btnModificarUsuario" data-btnModificar="${e.userId}-${e.id}">
                        <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-check-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                        <path fill-rule="evenodd" d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.236.236 0 0 1 .02-.022z"/>
                        </svg>
                    </button>
                    <button class="btn btn-danger btnEliminarUsuario" data-btnEliminar="${e.userId}-${e.id}">
                        <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-clipboard-x" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"/>
                        <path fill-rule="evenodd" d="M9.5 1h-3a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3zm-.354 7.146a.5.5 0 0 1 .708 0L8 8.293l1.146-1.147a.5.5 0 1 1 .708.708L8.707 9l1.147 1.146a.5.5 0 0 1-.708.708L8 9.707l-1.146 1.147a.5.5 0 0 1-.708-.708L7.293 9 6.146 7.854a.5.5 0 0 1 0-.708z"/>
                        </svg>
                    </button>
                    </div>
                </td>
            </tr>`;
        })
        // El atributo data-blahblah="" Se puede tener atributos relacionados a HTML
        // se puede tener datos si se aplica el guion para darle un valor
        // Se ponen valores o controles

        // Agregamos el objeto
        // Con la palabra clave await, se espera por el objeto
        await filas.forEach(fila => {
            contenido.innerHTML+=fila;
        });

        var botonEliminar = document.getElementsByClassName('btnEliminarUsuario');
        var botonModificar = document.getElementsByClassName('btnModificarUsuario');
    
        for(var i=0; i < botonEliminar.length; i++){
            botonEliminar[i].onclick = eliminarUsuario;
        }

        for(var i=0; i < botonModificar.length; i++){
            botonModificar[i].onclick = modificarUsuario;
        }

    }

    // Debemos invocar la funcion principal para poder ejecutar todo.
    init();

})()