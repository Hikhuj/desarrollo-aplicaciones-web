import React, { Component } from 'react';
import axios from 'axios';
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import { data } from 'jquery';

export class Usuario extends Component {

    static displayName = Usuario.name;

    constructor(props) {
        super(props);

        // Objeto de tipo Usuarios para usar en la construcion de la tabla
        this.state = {
            usuarios: [],
            loading: true,
            modal: false,
            modalEditar: false,
            modalEliminar: false,
            usuario: {
                cod_Usuario: 0,
                nombre: '',
                pri_Ape: '',
                seg_Ape: '',
                login: '',
                pass: '',
                confirmar_Pass: '',
                telefono1: '',
                telefono2: '',
                admin_Seq: '',
                admin_Ad: ''
            }
        };

    }

    // Funciones
    static buildTableUsers(listaUsuario, objeto) {
        return (
            <table className='table table-striped' aria-labelledby="tableLabel">
                <thead>
                    <tr>
                        <th>Cod</th>
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>Segundo Apellido</th>
                        <th>Usuario</th>
                        <th>Contrasenia</th>
                        <th>Password de confirmacion</th>
                        <th>Telefono</th>
                        <th>Telefono 2</th>
                        <th>Admin Seg</th>
                        <th>Admin Ad</th>
                    </tr>
                </thead>
                <tbody>
                    {listaUsuario.map(user =>
                        <tr key={user.cod_Usuario}>
                            <td>{user.cod_Usuario}</td>
                            <td>{user.nombre}</td>
                            <td>{user.pri_Ape}</td>
                            <td>{user.seg_Ape}</td>
                            <td>{user.login}</td>
                            <td>{user.pass}</td>
                            <td>{user.confirmar_Pass}</td>
                            <td>{user.telefono1}</td>
                            <td>{user.telefono2}</td>
                            <td>{user.admin_Seq}</td>
                            <td>{user.admin_Ad}</td>
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

    async listarUsuariosInfo() {
        const response = await fetch('api/Usuarios');
        const data = await response.json();
        this.setState({usuarios: data, loading: false});
    }

    componentDidMount() {
        this.listarUsuariosInfo();
    }

    render() {

        // Generar la lista de contenido para mostrar
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : Usuario.buildTableUsers(this.state.usuarios, this);

        return (
            <div>
                <h1 id="tableLabel">Usuarios</h1>
                <p>Lista de Usuarios</p>
                {contents}
            </div>
        );
    }

}