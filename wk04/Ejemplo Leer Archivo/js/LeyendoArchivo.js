(function(){

    // Query selector se usa y trabaja muy bien para obtener un ID de un tag de HTML
    var contenido = {};
    var btnObtener = {};

    // Crear una funcion para inicializar
    // Inicializamos los componentes
    function init() {
        contenido = document.querySelector('#contenido');
        btnObtener = document.querySelector('#btnObtener');
        bind();
    }

    // BIND como palabra, hace una union entre el control y un metodo
    // como el siguiente
    function bind(){
        btnObtener.onclick = leerArchivoTxt;
    }

    function leerArchivoTxt(){
        // Vamos a usar un FETCH para leer el archivo que queremos leer
        // FETCH devuelve una promesa, y estas promesas estan dentro de los
        // .then que se veran a continuacion

        // Si este codigo lo pasamos a un servidor de aplicaciones si va a funcionar
        // esto debido a que es codigo para sitios web de servidores.

        // Podemos usar un API de randomuser.me para poder usar y practicar con un objeto
        // de tipo JSON para practicar.
        // Es mas rapido, mas liviano, accesible para
        fetch('texto.txt', {
            method: 'GET',
            mode: 'cors',
            headers: {
                'Content-Type': 'text/plain',
                'API-Key': 'secret'
            }
        })
            .then(data => {
                data.text()
            })
            .then(data => {
                console.log(data);
            })
    }

    // Debemos invocar la funcion principal para poder ejecutar todo.
    init();

})()