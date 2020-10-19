(function(){

    // Query selector se usa y trabaja muy bien para obtener un ID de un tag de HTML
    var contenido = {};
    var btnObtener = {};
    var filtro = {};
    var datos = [];

    // Crear una funcion para inicializar
    // Inicializamos los componentes
    function init() {
        contenido = document.querySelector('#contenido');
        btnObtener = document.querySelector('#btnObtener');
        filtro = document.querySelector('#txtFiltrar');
        bind();
    }

    // BIND como palabra, hace una union entre el control y un metodo
    // como el siguiente
    function bind(){
        btnObtener.onclick = traerDatos;
        filtro.onblur = filtrarData;
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
        // Vamos a usar un FETCH para leer el archivo que queremos leer
        // FETCH devuelve una promesa, y estas promesas estan dentro de los
        // .then que se veran a continuacion

        // Si este codigo lo pasamos a un servidor de aplicaciones si va a funcionar
        // esto debido a que es codig o para sitios web de servidores.

        // Podemos usar un API de randomuser.me para poder usar y practicar con un objeto
        // de tipo JSON para practicar.
        // Es mas rapido, mas liviano, accesible para

        // Para un servidor local pero no funciona todavia
        // fetch('./data/tabla.json')
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(data => {
                datos = data;
                crearTabla();
                // console.log('en el metodo traerDatos ', data)
                // creaTabla()
            })
    }

    // El metodo MAP puede ayudarme a recorrer el arreglo

    /*
    function crearTabla(tabla){
        console.log(tabla)
        // console.log('en el metodo crearTabla', tabla)
    }
    */

    // Funcion para crear una tabla y recibe un objeto, en este caso un objeto de datos.
    // Esta es otra forma de ver las cosas, pues se puede guardar como variable tambien
    const crearTabla = function(info){
        info = (info === undefined)?datos:info;

        contenido.innerHTML = '';
        // Creamos el objeto
        var filas = info.map(e => {
            return `<tr>
                <td>${e.id}</td>
                <td>${e.title}</td>
                <td>${e.body}</td>
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