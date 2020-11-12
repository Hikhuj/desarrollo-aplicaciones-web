import React, { Component } from 'react';
import from '../components/Lec09'

export class Home extends Component {
    static displayName = Home.name;

    constructor(props) {
        super(props);
        this.state = {
            profesor: {
                nombreCompleto: "Roger Jose Ulate Rivera",
                carrera: "Ingenieria",
                universidad: "ULACIT"
            }
        }
    }

  render () {
      return (
          <Bienvenido profesor={this.state.profesor} />
          <ul>
              <li>Cuatri 3 2020</li>
              <li>Grupo: Sábados-Mañana</li>
              <li><a href="https://getgootstrap.com/">Bootstrap</a> para diseño y maquetado</li>
          </ul>
          <p></p>
    );
  }
}
