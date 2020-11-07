(function(){

    // Query selector se usa y trabaja muy bien para obtener un ID de un tag de HTML
    var contenido = {};
    var btnObtener = {};
    var filtro = {};
    var datos = [];

    // Funcion inicializadora de componentes
    function init() {
        contenido = document.querySelector('#contenido');
        btnObtener = document.querySelector('#btnObtener');
        filtro = document.querySelector('#txtFiltrar');
        btnBorrarFilas = document.querySelector("#btnDeleteRow");
        bind();
    }

    // BIND como palabra, hace una union entre el control y un metodo
    // como el siguiente
    function bind(){
        btnObtener.onclick = traerDatos;
        filtro.onblur = filtrarData;
        btnBorrarFilas.onclick = borrarFila(document.getElementById(this));
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

    // Agregar una columna o celda para crear cada uno de los botones
    function borrarFila(r) {
        // Recibe el número de fila para poder ser borrado
        var i = document.getElementById(r)
        document.getElementById("#fetchTable").deleteRow(i);
    }

    function editarFila(){
        /*
            Ubicar que columna esta.
            Ejecutar function que me permita editar texto en la posicion actual o donde este en ese momento.
        */
    }

    // Funcion para crear una tabla y recibe un objeto, en este caso un objeto de datos.
    // Esta es otra forma de ver las cosas, pues se puede guardar como variable tambien
    const crearTabla = function(info){
        info = (info === undefined)?datos:info;

        contenido.innerHTML = '';
        // Creamos el objeto
        var filas = info.map(e => {
            return `<tr>
                <td id="idTableFetch">${e.id}</td>
                <td id="titleTableFetch">${e.title}</td>
                <td id="contentTableFetch">${e.body}</td>
                <td id="btnEditTableFetch"><button class="btn btn-info" value="Edit" id="btnEditRow">Edit</button></td>
                <td id="btnRemoveTableFetch"><button class="btn btn-danger" value="Delete" id="btnDeleteRow">Remove</button></td>
            </tr>`;
        })

        // Agregamos el objeto
        filas.forEach(fila => {
            contenido.innerHTML+=fila;
        });
    }

    // Debemos invocar la funcion principal para poder ejecutar todo.
    init();

})()