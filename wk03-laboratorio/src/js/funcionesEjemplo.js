(function() {

    /*
        Hacer dos objetos de JavaScript, y buscar 
        y usar las metodos de find, reduce, map 
        y filter de javascript, subir el ejemplo
    */

    // VARIABLES
    var buscarNumero = {};


    /******** Uso de metodo FIND() ********/
    /*
        Retorna el valor de un elemento que se busca. 
        El metodo .find() recibe un valor a buscar en un arreglo.
    */

    // Solo me funciona una vez
    var cargarControles = function() {
        buscarNumero = document.getElementById('numeroABuscar');

        btnObtenerEdadMinima.onclick = buscarEdadDeseada();
        limpiarEspacioEdadMinima();
    }

    var buscarEdadDeseada = function() {

        // Variables
        var edades = [1,2,3,4,5,6,7,8,9,10];
        var result = 'La edad que busca existe en el arreglo';
        var found = {};

        // Uso de metodo
        // Buscar el numero 8 de entre un arreglo
        found = edades.find(function (buscarNumero) {
            if(buscarNumero >= 7){
                
            }
        })

        // Escribir resultado en un tag de HTML
        document.getElementById('edadMinimaEspacio').innerHTML = buscarNumero;
        document.getElementById('arregloParaFind').innerHTML = edades;

    }

    // Funcion para limpiar textBoxes
    var limpiarEspacioEdadMinima = function() {
        numeroABuscar.innerHTML = ``;
        edadMinimaEspacio.innerHTML = ``;
    }

    cargarControles();

    /* USO DE FIND() */
    /*
        Retorna el valor del primer elemento en el arreglo dado que cumpla una condicion
    */
    const arreglo1 = [5,12,8,130,44];
    const buscar = arreglo1.find(elemento => elemento > 10);

    console.log(found)
    // Resultado esperado de: 12


    /* USO DE REDUCE() */
    /*
        Ejecuta la funcion reduce() en cada elemento del arreglo.
        Resultando en una sola salida
        Puede tomar 4 argumentos
        1. Accumulator (acc)
        2. Current value (cur)
        3. Current Index (idx)
        4. Source Array (src)
    */
    const arreglo2 = [1,2,3,4,5];
    const reducir = (acumulador, valorActual) => acumulador + valorActual;

    // 1 + 2 + 3 + 4
    console.log(arreglo2.reduce(reducir));
    // Valor esperado de: 10

    // 5 + 1 + 2 + 3 + 4
    console.log(arreglo2.reduce(reducir, 5));
    // Valor esperado de: 15


    /* USO DE MAP() */
    /*
        Me permite mapear una funcion o procedimiento con base en un arreglo
        En este caso se toma cada elemento y se multiplica por 2.
    */
    const arreglo3 = [1,4,9,16];

    // Pasar una funcion a mapear
    const mapa1 = arreglo3.map(x => x * 2);

    // Resultado esperado
    // arreglo3 = [2,8,18,32]
    console.log(map1);


    /* USO DE FILTER */
    // Arreglo de diferentes palabras para usar
    const palabras = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

    // Funcion de tipo arrow que crea un item de nombre word
    // donde se evalua el largo de la palabra, si esta es mayor a 6,
    // ira almacenando la palabra en el arreglo nuevo
    // usando la funcion filtrar del arreglo palabras
    const resultado = palabras.filter(word => word.length > 6);


})()