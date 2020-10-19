(function () {
    var contenido = {};
    var btnObtener = {};
    function init() {
        contenido = document.querySelector('#contenido');
        btnObtener = document.querySelector('#btnObtener');
        bind();
    }
    function bind() {
        btnObtener.onclick = leerArchivoTxt;
    }

    function leerArchivoTxt() {
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
                console.log(data)
            })
    }
    init();
})()