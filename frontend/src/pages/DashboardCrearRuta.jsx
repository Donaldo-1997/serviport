import React, { Fragment, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import { NavbarLeft } from '../components/NavbarLeft';
import { ModalRuta } from '../components/ModalRuta';
import { ValorPorMilla } from '../components/ValorPorMilla';
import { Header } from '../components/Header';

export default function Dashboard() {
    
    // Traigo los datos de rutas del servidor
    const [ rutas, setRutas ] = useState([])
    const getRutas = () => { 
        axios.get('http://localhost:8082/api/rutas')
            .then(res => setRutas(res.data))
            .catch(error => console.log(error))
    }
    // Esto ejecutará la funcion cuando se renderice este componente
    useEffect(() => getRutas(), [])
        
    // Traigo los datos de puertos del servidor    
    const [ puertos, setPuertos ] = useState([])
    useEffect(() => {
        axios.get('http://localhost:8082/api/puertos')
            .then(res => {
                setPuertos(res.data)                
            })
            .catch(error => console.log(error))
    }, [])

    // TOMO LOS DATOS DE LOS CAMPOS DEL FORMULARIO
    const puertoOrigen = useRef()
    const puertoDestino = useRef()
    const distancia = useRef()

    function crearRuta() {
        let datos = { 
            origen: puertoOrigen.current.value, 
            destino: puertoDestino.current.value,
            distancia: distancia.current.value
        }
        
        // Envío los datos al servidor de la DB
        // Para enviar datos a la DB los nombres de cada campo requerido debe ser igual
        // al que está en la DB. En este caso "nombre" y "ubicacion".
        axios.post('http://localhost:8082/api/rutas', datos)
            .then(res => {
                console.log('ruta creada con exito!')
                // Limpio los campos de texto
                puertoOrigen.current.value = ''
                puertoDestino.current.value = ''
                distancia.current.value = ''
                
                getRutas() // SE ACTUALIZA LA LISTA DE RUTAS CREADAS
            
            })
            .catch(error => {
                console.log("Error al Crear rutas!")
                console.log(error)
                console.log(datos)
            })
                
    }

    
    let [ modal, setModal ] = useState([]) // PARA ENVIARLE DATOS AL MODAL
    return (
        <Fragment>
        <div id="wrapper">
        
            {/*
            <!-- Content Wrapper --> */}
            <div id="content-wrapper" className="d-flex flex-column">
        
                {/*
                <!-- Main Content --> */}
                <div id="content">
        
                   <Header/>
        
                    <div className="container-fluid">
                        <div className="row">
        
                            <NavbarLeft />
        
                            <div className="col">
                                <form className="g-3 mt-5">
                                    <div className="col-md-6 mx-auto">
                                        <label htmlFor="puertoOrigen" className="form-label">Nombre del puerto origen</label>
                                        <select className="form-control" id="puertoOrigen" ref={puertoOrigen}>
                                            {puertos.map(puerto => {
                                                return <option key={puerto._id} value={puerto.nombre} >{puerto.nombre}</option>
                                            })}
                                        </select>
                                        {/* <input ref={puertoOrigen} type="text" className="form-control" id=""/> */}
                                    </div>
        
                                    <div className="col-md-6 mx-auto">
                                        <label htmlFor="puertoDestino" className="form-label">Nombre del puerto destino</label>
                                        <select className="form-control" id="puertoDestino" ref={puertoDestino} >
                                            {puertos.map(puerto => {
                                                return <option key={puerto._id} value={puerto.nombre}> {puerto.nombre} </option>
                                            })}
                                        </select>
                                    </div>
        
                                    <div className="col-md-6 mx-auto">
                                        <label htmlFor="inputCity" className="form-label">Distancia entre los puertos (milla náutica)</label>
                                        <input ref={distancia} type="text" className="form-control" id=""/>
                                    </div>
        
                                    <div className="col-md-6 mt-5 mx-auto">
                                        <button 
                                            onClick={crearRuta}
                                            type="button" className="btn btn-primary border-0"
                                            style={{backgroundColor: "#4aff2f"}}>Crear</button>
                                    </div>
                                </form>
                            </div>
        
                            <div className="col-4 shadow p-3 bg-body rounded">
                                <ValorPorMilla/>
                                <h3>Rutas establecidas</h3>
                                <div className="d-grid gap-2">
                                    {rutas.map(ruta => {
                                        return (
                                            <button 
                                                key={ruta._id}
                                                onClick={() => setModal(ruta)}
                                                className="color-1 btn border-0 btn-block text-dark" type="button"
                                                data-toggle="modal" data-target="#detalle_ruta">{ruta.origen} - {ruta.destino} ({ruta.distancia})</button>
                                        )
                                    })}
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
        <ModalRuta modal={modal} getRutas={getRutas} />
        </Fragment>
    );
}