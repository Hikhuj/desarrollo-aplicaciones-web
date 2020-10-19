(function () {
    var contenido = {};
    var btnObtener = {};
    function init() {
        contenido = document.querySelector('#contenido');
        btnObtener = document.querySelector('#btnObtener');
        bind();
    }
    function bind() {
        btnObtener.onclick = leerAPI;
    }

    function leerAPI() {
        fetch('https://randomuser.me/api/')
            .then(res => res.json())
            .then(data => {
                console.log(data.results)
                var objecto = data.results[0];
                contenido.innerHTML=`
                <img src="${objecto.picture.large}" width="100px" class="img-fluid rounded-circle"/>
                <p>Nombre: ${objecto.name.first} ${objecto.name.last}</p>
                `;
            })
    }
    init();
})()