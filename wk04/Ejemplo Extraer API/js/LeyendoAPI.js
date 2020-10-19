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
        btnObtener.onclick = leerAPI;
    }

    function leerAPI(){
        // Vamos a usar un FETCH para leer el archivo que queremos leer
        // FETCH devuelve una promesa, y estas promesas estan dentro de los
        // .then que se veran a continuacion

        // Si este codigo lo pasamos a un servidor de aplicaciones si va a funcionar
        // esto debido a que es codigo para sitios web de servidores.

        // Podemos usar un API de randomuser.me para poder usar y practicar con un objeto
        // de tipo JSON para practicar.
        // Es mas rapido, mas liviano, accesible para
        fetch('https://randomuser.me/api/')
            .then(res => res.json())
            .then(data => {
                // Tiene que llamarse igual como el atributo que esta teniendo el objeto
                // El objeto le decimos que es 0 que es la posicion
                console.log(data.results);
                var objeto = data.results[0];
                contenido.innerHTML = `
                    <img src="${objeto.picture.large}" width="100px" class="img-fluid rounded-circle">
                    <p>Nombre: ${objeto.name.first} ${objeto.name.last}</p>
                `;
            })
    }

    // Debemos invocar la funcion principal para poder ejecutar todo.
    init();

})()