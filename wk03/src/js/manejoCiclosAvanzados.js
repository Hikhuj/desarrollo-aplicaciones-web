(function () {
    /*
    var persona = {
        id: '',
        nombre: '',
        edad: '',
        init: function() {
            console.log('asdas');
        }
    }

    persona['id'] = persona.init();
    */

    var arrEnteros = [1,2,3,4,5,6];

    var personas = [
        {
            id: 1,
            nombre: 'Randall',
            edad: '15'
        },
        {
            id: '2',
            nombre: 'Ana',
            edad: '30'
        },
        {
            id: 3,
            nombre: 'Miguel',
            edad: 50
        }
    ]

    var btnForEach = {};

    var cargarControles = () => {
        btnForEach = document.getElementById('btnForEach');
        btnForEach.onclick = ejecutarBtnForEach();
    }

    var ejecutarBtnForEach = () => {
        arrEnteros.push('Esteban');

        arrEnteros.forEach(e => {
            console.log('valor del arreglo ', e);
        });

        personas.pop();
        personas.push({
            id: 5,
            nombre: 'Esteban',
            edad: 27
        });
        personas.forEach(e => {
            console.log('Nombre de persona', e['nombre'], ', edad', e.edad);
        })
    }

    cargarControles();
})()