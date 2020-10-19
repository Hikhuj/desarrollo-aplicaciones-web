(function () {
    var contenido = {};
    var btnObtener = {};
    var filtro ={}
    var datos=[];
    function init() {
        contenido = document.querySelector('#contenido');
        btnObtener = document.querySelector('#btnObtener');
        filtro=document.querySelector('#txtFiltrar');
        bind();
    }
    function bind() {
        btnObtener.onclick = traerDatos;
        filtro.onblur=filtrarData;
    }
    function filtrarData(e){
        var control =e.target;
        var objetos= (!control.value)?datos:datos.filter(dato=>{
            if(dato.id===parseInt(control.value))
              return dato
        });

        crearTabla(objetos);

    }
    function traerDatos() {
        //fetch('./data/tabla.json')
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(data => {                
                datos =data;
                crearTabla();
            })
    }
    const crearTabla = function(info){
        info = (info===undefined)?datos:info;
        contenido.innerHTML='';
        var filas=info.map(e=>{
           return  `<tr><td>${e.id}</td><td>${e.title}</td><td>${e.body}</td>
           <td><button>Editar</button><button>Eliminar</button></td>
           </tr>`;
        })
        filas.forEach(fila => {
            contenido.innerHTML+=fila;    
        });        
    }
    init();
})()