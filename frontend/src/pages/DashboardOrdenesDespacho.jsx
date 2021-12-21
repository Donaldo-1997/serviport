import React, { useState, useEffect, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { NavbarLeft } from '../components/NavbarLeft';
import axios from 'axios';
import { Header } from '../components/Header';
import { Tabla } from '../components/Tabla';
import { ModalOrden } from '../components/ModalOrden';

export default function DashboardOrdenesDespacho() {
    const [ ordenes, setOrdenes ] = useState([])

    const getOrdenes = () => {
        axios.get('http://localhost:8082/api/ordenes')
            .then(res => {
            setOrdenes(res.data)
        })
            .catch(error => console.log(error))
    }

    useEffect(() => getOrdenes())

    const editar = (orden) => {
        console.log(`Editar`)
        console.log(orden)
    }

    const [dataModal, setDataModal] = useState([])


    return (
        <Fragment>
        <div id="wrapper">

            <div id="content-wrapper" className="d-flex flex-column">

                <div id="content">

                   <Header/>

                    <div className="container-fluid">
                        <div className="row">

                            <NavbarLeft />
                         
                            <div className="col-9 card shadow mb-4">
                                <div className="card-body">
                                    <div className="table-responsive table-hover">
                                        <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                                            <thead>
                                                <tr>
                                                    <th>No.orden</th>
                                                    <th>Fecha</th>
                                                    <th>Puerto origen</th>
                                                    <th>Puerto destino</th>
                                                    <th>Estado</th>
                                                </tr>
                                            </thead>
                                          
                                            <tbody>
                                                {ordenes.map((orden, id) => {
                                                    return (
                                                        <tr key={id} onClick={() => {setDataModal(orden); console.log(orden)}} data-toggle="modal" data-target="#detalle_orden" role="button" >
                                                            <td>{id}</td>
                                                            <td>2011/04/25</td>
                                                            <td>{orden.origen}</td>
                                                            <td>{orden.destino}</td>
                                                            <td> 
                                                            {orden.aceptada ? 
                                                                orden.estado
                                                                :
                                                                <><i className="text-info fas fa-bell"></i> Aceptar | Rechazar</>
                                                            }
                                                            </td>
                                                        </tr>
                                                    )
                                                })}
                                                <tr>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                </tr>                                                                                                                                            
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <footer className="sticky-footer bg-white">
                    <div className="container my-auto">
                        <div className="copyright text-center my-auto">
                            <span>Copyright &copy; Your Website 2021</span>
                        </div>
                    </div>
                </footer>

            </div>
        </div>
        <ModalOrden orden={dataModal} getOrdenes={getOrdenes} />
        </Fragment>
    );
}
