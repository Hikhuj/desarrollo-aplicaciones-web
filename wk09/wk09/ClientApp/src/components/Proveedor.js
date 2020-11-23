import React, { Component } from 'react';
import axios from 'axios';
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';

export class Proveedor extends Component {
    static displayName = Proveedor.name;

    constructor(props) {
        super(props);
        // Loading es la Carga de datos
        this.state = {
            proveedores: [],
            loading: true,
            // Modal de crear Proveedor
            modal: false,
            // Modal de Editar Proveedor
            modalEditar: false,
            // Modal de Eliminar Proveedor
            modalEliminar: false,
            proveedor: {
                cod_Proveedor: 0,
                nombre_proveedor: '',
                telefono: '',
                direccion: ''
            }
        };
        this.handleChange = this.handleChange.bind(this);
        ////// LA SIGUIENTE LINEA NO SE ESTA USANDO
        this.handleChangeCodigo = this.handleChangeCodigo.bind(this);
        // MODALES
        this.abrirCerrarModal = this.abrirCerrarModal.bind(this);
        this.abrirCerrarModalEditar = this.abrirCerrarModalEditar.bind(this);
        this.abrirCerrarModalEliminar = this.abrirCerrarModalEliminar.bind(this);
    }

    ///////////// NO SE ESTA USANDO
    // De los inputs que acabamos de hacer
    // Para manejar el codigo de proveedor
    handleChangeCodigo(e) {
        // Esto nos ayudaria a maximimar el amig (de la forma larga)
        this.setState(preveState => ({
            proveedor: {
                ...preveState.proveedor, cod_Proveedor: parseInt(e.target.value)
            }
        }));
    }

    // De los inputs que acabamos de hacer
    handleChange(e) {
        const { name, value } = e.target;
        console.log(name, ':', value);
        // Esto nos ayudaria a maximimar el amig (de la forma larga)
        this.setState(preveState => ({
            proveedor: {
                ...preveState.proveedor, [name]: value
            }
        }));
    }

    // Esto hace que sea asincrono, va a esperar algo.
    // Axios es una libreria de JS
    async crearProveedor() {
        console.log(this.state.proveedor)
        await fetch('api/Proveedores', {
            method: 'POST',
            body: JSON.stringify(this.state.proveedor),
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(response => response.json())
            // En esta seccion hacemos que la aplicacion a la hora de agregar un nuevo elemento
            // a la lista de proveedores, se actualice la vista de inmediato sin tener que esperar
            // a que se refresque la vista de React completamente
            .then(data => {
                this.setState({
                    proveedores: this.state.proveedores.concat(data)
                })
                this.abrirCerrarModal();
            }).catch(error => console.log(error));
    }

    abrirCerrarModal() {
        this.setState({
            modal: !this.state.modal
        })
    }

    abrirCerrarModalEditar() {
        console.log('abrirCerrarModalEditar');
        this.setState({
            modalEditar: !this.state.modalEditar
        })
    }

    abrirCerrarModalEliminar() {
        console.log('abrirCerrarModalEliminar');
        this.setState({
            modalEliminar: !this.state.modalEliminar
        })
    }

    componentDidMount() {
        this.listarProveedoresInfo();
    }

    static construyendoTablaProveedores(listaProveedor, objeto) {
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
                                <button className="btn btn-success" onClick={() => objeto.abrirCerrarModalEditar()}>Editar</button>
                                <button className="btn btn-danger" onClick={() => objeto.abrirCerrarModalEliminar()}>Eliminar</button>
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
            : Proveedor.construyendoTablaProveedores(this.state.proveedores, this);

        // No se pueden devolver mas de dos componentes en un render
        // Esos modals es como si estuvieramos trabajando con las tarjetas de 
        // Bootstrap.

        // Para abrir y cerrar el modal cuando necesitamos es el this.abrirCerrarModal()
        // el buton
        return (
            <div>
                <h1 id="tabelLabel" >Proveedores</h1>
                <p>Lista de proveedores</p>
                <button className="btn btn-primary" onClick={() => this.abrirCerrarModal()}>Nuevo</button>
                {contents}
                {/* CREAR PROVEEDOR*/}
                <Modal isOpen={this.state.modal}>
                    <ModalHeader>Crear Proveedor</ModalHeader>
                    <ModalBody>
                        <div className="form-group">
                            <div className="form-group row">
                                <label for="nombre_Proveedor" className="col-sm-2 col-form-label">Nombre</label>
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
                                        className="form-control"
                                        onChange={this.handleChange}
                                    />
                                </div>
                            </div>
                        
                            <div>
                                <button className="btn btn-success" onClick={() => this.crearProveedor()}>Guardar</button>
                                <button className="btn btn-danger" onClick={() => this.abrirCerrarModal()}>Cancelar</button>
                            </div>
                        </div>
                    </ModalBody>
                    <ModalFooter></ModalFooter>
                </Modal>


                {/* EDITAR MODAL */}
                <Modal isOpen={this.state.modalEditar}>
                    <ModalHeader>Editar Proveedor</ModalHeader>
                    <ModalBody>
                        <div className="form-group">
                            <div className="form-group row">
                                <label for="nombre_Proveedor" className="col-sm-2 col-form-label">Nombre</label>
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
                                        className="form-control"
                                        onChange={this.handleChange}
                                    />
                                </div>
                            </div>

                            <div>
                                <button className="btn btn-success" onClick={() => this.editarProveedor()}>Salvar</button>
                                <button className="btn btn-danger" onClick={() => this.abrirCerrarModalEditar()}>Cancelar</button>
                            </div>
                        </div>
                    </ModalBody>
                    <ModalFooter></ModalFooter>
                </Modal>


                {/* ELIMINAR MODAL */}
                <Modal isOpen={this.state.modalEliminar}>
                    <ModalHeader>Eliminar Proveedor</ModalHeader>
                    <ModalBody>
                        <div className="form-group">
                            <div className="form-group row">
                                <p>Esta seguro que desea eliminar registro?</p>
                            </div>
                            <div>
                                <button className="btn btn-success" onClick={() => this.eliminarProveedor()}>Si</button>
                                <button className="btn btn-danger" onClick={() => this.abrirCerrarModalEliminar()}>No</button>
                            </div>
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
