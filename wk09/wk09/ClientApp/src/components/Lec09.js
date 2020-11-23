// Nuevo componente creado como demostracion para implementarse en el home
// Se debe importar siempre desde la libreria React a la clase "Component" para indicar
// que se va a usar como component, desde la libreria 'react'
import React, { Component } from 'react';

export class Lec09 extends Component {
    static displayName = Lec09.name;

    constructor(props) {
        super(props);
        console.log(this.props.profesor);
    }

    render() {
        return (
            <div>
                <h1>Vamos bien!!!</h1>
                <h2>Bienvenido profesor: {this.props.profesor.nombreCompleto}</h2>
                <h2>Carrera: {this.props.profesor.carrera}</h2>
                <h2>Universidad: {this.props.profesor.universidad}</h2>

                <button className="btn btn-danger"><a href="https://www.w3docs.com/">No haga click aqui</a></button>
                <button className="btn btn-danger" href="https://www.google.com">Ir a Google</button>
            </div>
            );
    }

}

export default Lec09;