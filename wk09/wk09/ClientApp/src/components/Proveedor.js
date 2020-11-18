import React, { Component } from 'react';

export class Proveedor extends Component {
    static displayName = Proveedor.name;

    constructor(props) {
        super(props);
        // Loading es la Carga de datos
        this.state = { proveedores: [], loading: true };
    }

    componentDidMount() {
        this.listarProveedoresInfo();
    }

    static construyendoTablaProveedores(listaProveedor) {
        return (
            <table className='table table-striped' aria-labelledby="tabelLabel">
                <thead>
                    <tr>
                        <th>Codigo</th>
                        <th>Nombre</th>
                        <th>Telefono</th>
                        <th>Direccion</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {listaProveedor.map(prov =>
                        <tr key={prov.cod_Proveedor}>
                            <td>{prov.cod_Proveedor}</td>
                            <td>{prov.nombre_Proveedor}</td>
                            <td>{prov.telefono}</td>
                            <td>{prov.direccion}</td>
                            <td>
                                <button className="btn btn-success">Editar</button>
                                <button className="btn btn-danger">Eliminar</button>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        );
    }

    render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : Proveedor.construyendoTablaProveedores(this.state.proveedores);

        return (
            <div>
                <h1 id="tabelLabel" >Proveedores</h1>
                <p>Lista de proveedores</p>
                {contents}
            </div>
        );
    }

    async listarProveedoresInfo() {
        const response = await fetch('api/Proveedores');
        const data = await response.json();
        // Con esto de setState se puede hacer un cambio en las variables
        this.setState({ proveedores: data, loading: false });
    }
}
