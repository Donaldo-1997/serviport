import React, { Fragment, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import { NavbarLeft } from '../components/NavbarLeft';
import { ModalRuta } from '../components/ModalRuta';

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


    let [ readOnly, setReadOnly ] = useState(true) // PARA CONTROLAR EL BOTON DE EDITAR EL VALOR DE UNA MILLA
    
    let [ valor_milla, setValor_milla ] = useState(3500)

    function establecerValorPorMilla() {
        // Estable si el input sera editable o no.
        setReadOnly(!readOnly)

        // Toma el valor por milla que haya establecido el usuario
        if(!readOnly){
            console.log(`Valor por milla: ${valor_milla}`)
        }

    }
    
    let [ modal, setModal ] = useState([])

    function handleChange(e) {
        setValor_milla(e.target.value)
        e.preventDefault()
    }

    return (
        <Fragment>
        <div id="wrapper">
        
            {/*
            <!-- Content Wrapper --> */}
            <div id="content-wrapper" className="d-flex flex-column">
        
                {/*
                <!-- Main Content --> */}
                <div id="content">
        
                    <header>
                        <img src="/img/image 1.png" alt=""/>
                    </header>
        
                    {/*<!-- Topbar --> */}
                    <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
        
                        {/*
                        <!-- Sidebar Toggle (Topbar) --> */}
                        <button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
                            <i className="fa fa-bars"></i>
                        </button>
        
                        <Link className="sidebar-brand d-flex align-items-center justify-content-center" to="/">
                            <div className="sidebar-brand-text mx-3">Serviport</div>
                        </Link>
                        {/*
                        <!-- Topbar Search --> */}
                        {/*
                        <!-- <form
                                className="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
                                <div className="input-group">
                                    <input type="text" className="form-control bg-light border-0 small" placeholder="Search for..."
                                        aria-label="Search" aria-describedby="basic-addon2">
                                    <div className="input-group-append">
                                        <button className="btn btn-primary" type="button">
                                            <i className="fas fa-search fa-sm"></i>
                                        </button>
                                    </div>
                                </div>
                            </form> --> */}
        
                        {/*
                        <!-- Topbar Navbar --> */}
                        <ul className="navbar-nav ml-auto">
        
                            {/*
                            <!-- Nav Item - Search Dropdown (Visible Only XS) --> */}
                            <li className="nav-item dropdown no-arrow d-sm-none">
                                <a className="nav-link dropdown-toggle" href="#" id="searchDropdown" role="button"
                                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <i className="fas fa-search fa-fw"></i>
                                </a>
                                {/*
                                <!-- Dropdown - Messages --> */}
                                <div className="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in"
                                    aria-labelledby="searchDropdown">
                                    <form className="form-inline mr-auto w-100 navbar-search">
                                        <div className="input-group">
                                            <input type="text" className="form-control bg-light border-0 small"
                                                placeholder="Search for..." aria-label="Search" aria-describedby="basic-addon2"/>
                                            <div className="input-group-append">
                                                <button className="btn btn-primary" type="button">
                                                    <i className="fas fa-search fa-sm"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </li>
        
                            {/*
                            <!-- Nav Item - Alerts --> */}
                            <li className="nav-item dropdown no-arrow mx-1">
                                <a className="nav-link dropdown-toggle" href="#" id="alertsDropdown" role="button"
                                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <i className="fas fa-bell fa-fw"></i>
                                    {/*
                                    <!-- Counter - Alerts --> */}
                                    <span className="badge badge-danger badge-counter">3+</span>
                                </a>
                                {/*
                                <!-- Dropdown - Alerts --> */}
                                <div className="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in"
                                    aria-labelledby="alertsDropdown">
                                    <h6 className="dropdown-header">
                                        Alerts Center
                                    </h6>
                                    <a className="dropdown-item d-flex align-items-center" href="#">
                                        <div className="mr-3">
                                            <div className="icon-circle bg-primary">
                                                <i className="fas fa-file-alt text-white"></i>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="small text-gray-500">December 12, 2019</div>
                                            <span className="font-weight-bold">A new monthly report is ready to download!</span>
                                        </div>
                                    </a>
                                    <a className="dropdown-item d-flex align-items-center" href="#">
                                        <div className="mr-3">
                                            <div className="icon-circle bg-success">
                                                <i className="fas fa-donate text-white"></i>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="small text-gray-500">December 7, 2019</div>
                                            $290.29 has been deposited into your account!
                                        </div>
                                    </a>
                                    <a className="dropdown-item d-flex align-items-center" href="#">
                                        <div className="mr-3">
                                            <div className="icon-circle bg-warning">
                                                <i className="fas fa-exclamation-triangle text-white"></i>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="small text-gray-500">December 2, 2019</div>
                                            Spending Alert: We've noticed unusually high spending for your account.
                                        </div>
                                    </a>
                                    <a className="dropdown-item text-center small text-gray-500" href="#">Show All Alerts</a>
                                </div>
                            </li>
        
                            {/*
                            <!-- Nav Item - Messages --> */}
                            <li className="nav-item dropdown no-arrow mx-1">
                                <a className="nav-link dropdown-toggle" href="#" id="messagesDropdown" role="button"
                                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <i className="fas fa-envelope fa-fw"></i>
                                    {/*
                                    <!-- Counter - Messages --> */}
                                    <span className="badge badge-danger badge-counter">7</span>
                                </a>
                                {/*
                                <!-- Dropdown - Messages --> */}
                                <div className="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in"
                                    aria-labelledby="messagesDropdown">
                                    <h6 className="dropdown-header">
                                        Message Center
                                    </h6>
                                    <a className="dropdown-item d-flex align-items-center" href="#">
                                        <div className="dropdown-list-image mr-3">
                                            <img className="rounded-circle" src="img/undraw_profile_1.svg" alt="..."/>
                                            <div className="status-indicator bg-success"></div>
                                        </div>
                                        <div className="font-weight-bold">
                                            <div className="text-truncate">Hi there! I am wondering if you can help me with a
                                                problem I've been having.</div>
                                            <div className="small text-gray-500">Emily Fowler · 58m</div>
                                        </div>
                                    </a>
                                    <a className="dropdown-item d-flex align-items-center" href="#">
                                        <div className="dropdown-list-image mr-3">
                                            <img className="rounded-circle" src="img/undraw_profile_2.svg" alt="..."/>
                                            <div className="status-indicator"></div>
                                        </div>
                                        <div>
                                            <div className="text-truncate">I have the photos that you ordered last month, how
                                                would you like them sent to you?</div>
                                            <div className="small text-gray-500">Jae Chun · 1d</div>
                                        </div>
                                    </a>
                                    <a className="dropdown-item d-flex align-items-center" href="#">
                                        <div className="dropdown-list-image mr-3">
                                            <img className="rounded-circle" src="img/undraw_profile_3.svg" alt="..."/>
                                            <div className="status-indicator bg-warning"></div>
                                        </div>
                                        <div>
                                            <div className="text-truncate">Last month's report looks great, I am very happy with
                                                the progress so far, keep up the good work!</div>
                                            <div className="small text-gray-500">Morgan Alvarez · 2d</div>
                                        </div>
                                    </a>
                                    <a className="dropdown-item d-flex align-items-center" href="#">
                                        <div className="dropdown-list-image mr-3">
                                            <img className="rounded-circle" src="https://source.unsplash.com/Mv9hjnEUHR4/60x60"
                                                alt="..."/>
                                            <div className="status-indicator bg-success"></div>
                                        </div>
                                        <div>
                                            <div className="text-truncate">Am I a good boy? The reason I ask is because someone
                                                told me that people say this to all dogs, even if they aren't good...</div>
                                            <div className="small text-gray-500">Chicken the Dog · 2w</div>
                                        </div>
                                    </a>
                                    <a className="dropdown-item text-center small text-gray-500" href="#">Read More Messages</a>
                                </div>
                            </li>
        
                            <div className="topbar-divider d-none d-sm-block"></div>
        
                            {/*
                            <!-- Nav Item - User Information --> */}
                            <li className="nav-item dropdown no-arrow">
                                <a className="nav-link dropdown-toggle" href="#" id="userDropdown" role="button"
                                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <span className="mr-2 d-none d-lg-inline text-gray-600 small">Admin</span>
                                    <img className="img-profile rounded-circle" src="img/undraw_profile.svg"/>
                                </a>
                                {/*
                                <!-- Dropdown - User Information --> */}
                                <div className="dropdown-menu dropdown-menu-right shadow animated--grow-in"
                                    aria-labelledby="userDropdown">
                                    <a className="dropdown-item" href="#">
                                        <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
                                        Perfil
                                    </a>
                                    <a className="dropdown-item" href="#">
                                        <i className="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i>
                                        Configuración
                                    </a>
                                    <a className="dropdown-item" href="#">
                                        <i className="fas fa-list fa-sm fa-fw mr-2 text-gray-400"></i>
                                        Activity Log
                                    </a>
                                    <div className="dropdown-divider"></div>
                                    <a className="dropdown-item" href="#" data-toggle="modal" data-target="#logoutModal">
                                        <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                                        Logout
                                    </a>
                                </div>
                            </li>
        
                        </ul>
        
                    </nav>
        
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
                                <div className="row mb-2">
                                    <form
                                        className="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
                                        <div className="input-group">
                                            <input onChange={handleChange} type="text" value={valor_milla} className="form-control bg-light border-1 small"
                                                aria-label="Search" aria-describedby="basic-addon2" readOnly={readOnly} />
                                            <div className="input-group-append">
                                                <button 
                                                    onClick={establecerValorPorMilla} 
                                                    className={readOnly ? "btn btn-primary" : "btn btn-success"} 
                                                    type="button">
                                                    <i className={readOnly ? "far fa-edit" : "far fa-check-square" }></i>
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
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
        <ModalRuta modal={modal} />
        </Fragment>
    );
}