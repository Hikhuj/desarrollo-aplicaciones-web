import React, { Component } from 'react';

class Lec09 extends Component {

    constructor(props) {
        super(props);
        console.log(this.props.profesor);
    }

    render() {
        <div>
            <h1>Este mensaje funciona verdad profesor:{this.props.profesor.nombreCompleto }</h1>
        </div>
    }

}

export default Lec09;