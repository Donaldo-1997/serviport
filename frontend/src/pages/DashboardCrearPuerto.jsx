import React, { useState, useEffect, useRef, Fragment } from 'react';
import {Link} from 'react-router-dom';
import { NavbarLeft } from '../components/NavbarLeft';
import axios from 'axios';

import { ModalPuerto } from '../components/ModalPuerto';
import { Header } from '../components/Header';


export default function DashboardCrearPuerto () {
    const [ puertos, setPuertos ] = useState([])

    const getPuertos = () => {
        axios.get('http://localhost:8082/api/puertos')
            .then(res => {
                setPuertos(res.data)                
            })
            .catch(error => console.log(error))
    }

    useEffect(() => getPuertos(), [])

    let nomPuerto = useRef()
    let ubicPuerto = useRef()

    function guardar() {
        let datos = { 
            nombre: nomPuerto.current.value, 
            ubicacion: ubicPuerto.current.value
        }
        
         // Envío los datos al servidor de la DB
         // Para enviar datos a la DB los nombres de cada campo requerido debe ser igual
         // al que está en la DB. En este caso "nombre" y "ubicacion".
        axios.post('http://localhost:8082/api/puertos', datos)
            .then(res => {
                // Limpio los campos de texto
                nomPuerto.current.value = ''
                ubicPuerto.current.value = ''
                // Se vuelve a hacer una solicitud para que se renderice el nuevo puerto creado
                getPuertos()
            
            })
            .catch(error => {
                console.log("Error in Crear puertos!" + error)
                console.log(datos)
            })
        
    }

    let [ modal, setModal ] = useState([])

    return (
        <Fragment>

        <div id="wrapper">      
        {/* <!-- Page Wrapper --> */}
    
            {/* <!-- Content Wrapper --> */}
            <div id="content-wrapper" className="d-flex flex-column">
    
                {/* <!-- Main Content --> */}
                <div id="content">
    
                   <Header/>             
    
                    {/* <!-- Begin Page Content --> */}
                    <div className="container-fluid">
                        {/* <!-- row --> */}
                        <div className="row">
    
                            <NavbarLeft />
        
                            <div className="col">
                                <form className="g-3 mt-5">
                                    <div className="col-md-6 mx-auto">
                                      <label htmlFor="inputEmail4" className="form-label">Nombre del puerto</label>
                                      <input ref={nomPuerto} type="email" className="form-control" id="inputEmail4"/>
                                    </div>
                                   
                                    <div className="col-md-6 mx-auto">
                                        <label htmlFor="inputCity" className="form-label">Ubicación del puerto</label>
                                        <input ref={ubicPuerto} type="text" className="form-control" id="inputCity"/>
                                    </div>                          
        
                                    <div className="col-md-6 mt-5 mx-auto">
                                      <button type="button" onClick={guardar} className="btn btn-primary border-0" style={{backgroundColor: '#4aff2f'}}>Crear</button>
                                    </div>
                                  </form>
                            </div>
        
                            {/* <!-- Sidebar --> */}
                            <div className="col-4 shadow p-3 bg-body rounded">
                                <h3>Puertos existentes</h3>
                                <div className="d-grid gap-2">
                                    {puertos.map(puerto => {
                                        return (
                                        <button
                                            key={puerto._id}
                                            onClick={() => {
                                                setModal(puerto)
                                            }} 
                                            className="color-1 btn border-0 btn-block text-dark" type="button" data-toggle="modal" data-target="#detalle_puerto1">
                                            {puerto.nombre} - {puerto.ubicacion}
                                        </button>
                                        )
                                    })}                                    
                                </div>
                            </div>
                           {/* <!-- End of Sidebar --> */}
                        </div>
                        {/* <!-- end-row --> */}
                    </div>
                    {/* <!-- /.container-fluid --> */}                 
    
                </div>
                {/* <!-- End of Main Content --> */}
    
                {/* <!-- Footer --> */}
                <footer className="sticky-footer bg-white">
                    <div className="container my-auto">
                        <div className="copyright text-center my-auto">
                            <span>Copyright &copy; Your Website 2021</span>
                        </div>
                    </div>
                </footer>
                {/* <!-- End of Footer --> */}
    
            </div>
            {/* <!-- End of Content Wrapper --> */}
    
            {/* <!-- End of Page Wrapper --> */}
        </div>
        <ModalPuerto modal={modal} getPuertos={getPuertos} />
        {/* { modal ? <Modal modal={modal} /> : console.log(modal) } */}
        </Fragment>

    );
}