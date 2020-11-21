import React, { Component } from 'react';
import axios from 'axios';
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap'

export class Proveedor extends Component {
    static displayName = Proveedor.name;

    constructor(props) {
        super(props);
        // Loading es la Carga de datos
        this.state = {
            proveedores: [],
            loading: true,
            modal: false,
            proveedor: {
                cod_proveedor: '',
                nombre_proveedor: '',
                telefono: '',
                direccion: ''
            }
        };
        this.handleChange = this.handleChange.bind(this);
    }

    abriCerrarModal() {
        this.setState({
            modal: !this.state.modal
        })
    }

    // De los inputs que acabamos de hacer
    handleChange(e) {
        const { name, value } = e.target;
        console.log(name, ':', value);
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
                                <button className="btn btn-danger" onClick={() => this.abriCerrarModal()}>Eliminar</button>
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

        // No se pueden devolver mas de dos componentes en un render
        // Esos modals es como si estuvieramos trabajando con las tarjetas de 
        // Bootstrap.
        return (
            <div>
                <h1 id="tabelLabel" >Proveedores</h1>
                <p>Lista de proveedores</p>
                {/* Para abrir y cerrar el modal cuando necesitemos */}
                <button className="btn btn-primary" onClick={ () => this.abrirCerrarModal()}>Nuevo</button>
                {contents}
                <Modal isOpen={this.state.modal}>
                    <ModalHeader>Crear proveedor</ModalHeader>
                    <ModalBody>
                        <div className="form-group">
                            <div className="form-group row">
                                <label for="cod_Proveedor" className="col-sm-2 col-form-label">Codigo</label>
                                <div className="col-sm-10">
                                    <input
                                        type="text"
                                        id="cod_Proveedor"
                                        name="cod_Proveedor"
                                        className="form-control"
                                        // Para el evento on change de cada uno de ellos
                                        // le asocie el mentodo anterior creado (handleChange())
                                        onChange={this.handleChange}
                                    />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label for="nombre_Proveedor" className="col-sm-2 col-form-label">Nombre de Proveedor</label>
                                <div className="col-sm-10">
                                    <input
                                        type="text"
                                        id="nombre_Proveedor"
                                        name="nombre_Proveedor"
                                        className="form-control"
                                        // Para el evento on change de cada uno de ellos
                                        // le asocie el mentodo anterior creado (handleChange())
                                        onChange={this.handleChange}
                                    />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label for="telefono" className="col-sm-2 col-form-label">Telefono</label>
                                <div className="col-sm-10">
                                <input
                                    type="text"
                                    id="telefono"
                                    name="telefono"
                                    className="form-control"
                                    onChange={this.handleChange}
                                />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label for="direccion" className="col-sm-2 col-form-label">Direccion</label>
                                <div className="col-sm-10">
                                <input
                                    type="text"
                                    id="direccion"
                                    name="direccion"
                                    class="form-control"
                                    onChange={this.handleChange}
                                />
                                </div>
                            </div>
                        </div>
                        <div>
                            <button className="btn btn-success">Guardar</button>
                            <button className="btn btn-danger">Cancelar</button>
                        </div>
                    </ModalBody>
                    <ModalFooter></ModalFooter>
                </Modal>
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
