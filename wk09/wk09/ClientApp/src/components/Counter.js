import React, { Component } from 'react';

export class Counter extends Component {
  static displayName = Counter.name;

    constructor(props) {
        // Heredar propiedades
        super(props);
        // Este es el estado que se debe modificar de acuerdo con los botones que se ven al final
        this.state = { currentCount: 0 };

        // Estas son funciones que se van a ver
        this.incrementCounter = this.incrementCounter.bind(this);
        this.decrementCounter = this.decrementCounter.bind(this);

    }

    // Incrementar la cuenta
    // Nueva forma de hacer las funciones de JS en React
    incrementCounter() {
        this.setState({
            currentCount: this.state.currentCount + 1
        });
    }

    // Disminuir la cuenta
    decrementCounter() {
        this.setState({
            currentCount: this.state.currentCount - 1
        });
    }

    render() {
        return (
            <div>
                <h1>Contador</h1>

                <p>Este es una pagina ejemplo de componentes de React.</p>

                <p aria-live="polite">Cuenta actual: <strong>{this.state.currentCount}</strong></p>

                {/* Estos botones poseen una clase, poseen una action, que en este caso es "onClick" que ejecuta una accion, en este caso una X funcion, llamada incrementCounter o bien decrementCounter. A esto
                se le va a ver afectado el estado del sitio donde estemos viendo los datos, en este caso el estado de current count es el que se va a ver afectado. como vemos en la linea
                de codigo anterior*/}

                <button className="btn btn-primary" onClick={this.incrementCounter}>+</button>
                <button className="btn btn-danger" onClick={this.decrementCounter}>-</button>
            </div>
        );
    }
}
