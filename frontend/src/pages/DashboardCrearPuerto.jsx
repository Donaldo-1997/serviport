import React, { useState, useEffect, useRef } from 'react';
import {Link} from 'react-router-dom';
import { NavbarLeft } from '../components/NavbarLeft';
import axios from 'axios';


export default function DashboardCrearPuerto () {
    const [ puertos, setPuertos ] = useState([])

    useEffect(() => {
        axios.get('http://localhost:8082/api/puertos')
            .then(res => {
                setPuertos(res.data)
                console.log(`Puertos`)
                console.log(res.data)
            })
            .catch(error => console.log(error))
    }, [])

    let nomPuerto = useRef()
    let ubicPuerto = useRef()

    function guardar() {
        let datos = { 
            nom: nomPuerto.current.value, 
            ubic: ubicPuerto.current.value
        }
        
         // Envío los datos al servidor de la DB
        axios.post('http://localhost:8082/api/puertos', datos)
            .then(res => {
                console.log(res.data)
                // Limpio los campos de texto
                nomPuerto.current.value = ''
                ubicPuerto.current.value = ''
            
            })
            .catch(error => console.log("Error in Crear puertos!" + error))
    }

    return (
        <div id="wrapper">      
        {/* <!-- Page Wrapper --> */}
    
            {/* <!-- Content Wrapper --> */}
            <div id="content-wrapper" className="d-flex flex-column">
    
                {/* <!-- Main Content --> */}
                <div id="content">
                    <header>
                        <img src="/img/image 1.png" alt="" />
                    </header>
    
                    {/* <!-- Topbar --> */}
                    <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
    
                        {/* <!-- Sidebar Toggle (Topbar) --> */}
                        <button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
                            <i className="fa fa-bars"></i>
                        </button>
    
                        <Link className="sidebar-brand d-flex align-items-center justify-content-center" to="index.html">                       
                            <div className="sidebar-brand-text mx-3">Serviport</div>
                        </Link>
                        {/* <!-- Topbar Search --> */}
                        {/* <!-- <form
                            className="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
                            <div className="input-group">
                                <input type="text" className="form-control bg-light border-0 small" placeholder="Search for..."
                                    aria-label="Search" aria-describedby="basic-addon2"/>
                                <div className="input-group-append">
                                    <button className="btn btn-primary" type="button">
                                        <i className="fas fa-search fa-sm"></i>
                                    </button>
                                </div>
                            </div>
                        </form> --> */}
    
                        {/* <!-- Topbar Navbar --> */}
                        <ul className="navbar-nav ml-auto">
    
                            {/* <!-- Nav Item - Search Dropdown (Visible Only XS) --> */}
                            <li className="nav-item dropdown no-arrow d-sm-none">
                                <Link className="nav-link dropdown-toggle" to="#" id="searchDropdown" role="button"
                                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <i className="fas fa-search fa-fw"></i>
                                </Link>
                                {/* <!-- Dropdown - Messages --> */}
                                <div className="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in"
                                    aria-labelledby="searchDropdown">
                                    <form className="form-inline mr-auto w-100 navbar-search">
                                        <div className="input-group">
                                            <input type="text" className="form-control bg-light border-0 small"
                                                placeholder="Search for..." aria-label="Search"
                                                aria-describedby="basic-addon2"/>
                                            <div className="input-group-append">
                                                <button className="btn btn-primary" type="button">
                                                    <i className="fas fa-search fa-sm"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </li>
    
                            {/* <!-- Nav Item - Alerts --> */}
                            <li className="nav-item dropdown no-arrow mx-1">
                                <Link className="nav-link dropdown-toggle" to="#" id="alertsDropdown" role="button"
                                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <i className="fas fa-bell fa-fw"></i>
                                    {/* <!-- Counter - Alerts --> */}
                                    <span className="badge badge-danger badge-counter">3+</span>
                                </Link>
                                {/* <!-- Dropdown - Alerts --> */}
                                <div className="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in"
                                    aria-labelledby="alertsDropdown">
                                    <h6 className="dropdown-header">
                                        Alerts Center
                                    </h6>
                                    <Link className="dropdown-item d-flex align-items-center" to="#">
                                        <div className="mr-3">
                                            <div className="icon-circle bg-primary">
                                                <i className="fas fa-file-alt text-white"></i>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="small text-gray-500">December 12, 2019</div>
                                            <span className="font-weight-bold">A new monthly report is ready to download!</span>
                                        </div>
                                    </Link>
                                    <Link className="dropdown-item d-flex align-items-center" to="#">
                                        <div className="mr-3">
                                            <div className="icon-circle bg-success">
                                                <i className="fas fa-donate text-white"></i>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="small text-gray-500">December 7, 2019</div>
                                            $290.29 has been deposited into your account!
                                        </div>
                                    </Link>
                                    <Link className="dropdown-item d-flex align-items-center" to="#">
                                        <div className="mr-3">
                                            <div className="icon-circle bg-warning">
                                                <i className="fas fa-exclamation-triangle text-white"></i>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="small text-gray-500">December 2, 2019</div>
                                            Spending Alert: We've noticed unusually high spending for your account.
                                        </div>
                                    </Link>
                                    <Link className="dropdown-item text-center small text-gray-500" to="#">Show All Alerts</Link>
                                </div>
                            </li>
    
                            {/* <!-- Nav Item - Messages --> */}
                            <li className="nav-item dropdown no-arrow mx-1">
                                <Link className="nav-link dropdown-toggle" to="#" id="messagesDropdown" role="button"
                                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <i className="fas fa-envelope fa-fw"></i>
                                    {/* <!-- Counter - Messages --> */}
                                    <span className="badge badge-danger badge-counter">7</span>
                                </Link>
                                {/* <!-- Dropdown - Messages --> */}
                                <div className="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in"
                                    aria-labelledby="messagesDropdown">
                                    <h6 className="dropdown-header">
                                        Message Center
                                    </h6>
                                    <Link className="dropdown-item d-flex align-items-center" to="#">
                                        <div className="dropdown-list-image mr-3">
                                            <img className="rounded-circle" src="img/undraw_profile_1.svg"
                                                alt="" />
                                            <div className="status-indicator bg-success"></div>
                                        </div>
                                        <div className="font-weight-bold">
                                            <div className="text-truncate">Hi there! I am wondering if you can help me with a
                                                problem I've been having.</div>
                                            <div className="small text-gray-500">Emily Fowler · 58m</div>
                                        </div>
                                    </Link>
                                    <Link className="dropdown-item d-flex align-items-center" to="#">
                                        <div className="dropdown-list-image mr-3">
                                            <img className="rounded-circle" src="img/undraw_profile_2.svg"
                                                alt="" />
                                            <div className="status-indicator"></div>
                                        </div>
                                        <div>
                                            <div className="text-truncate">I have the photos that you ordered last month, how
                                                would you like them sent to you?</div>
                                            <div className="small text-gray-500">Jae Chun · 1d</div>
                                        </div>
                                    </Link>
                                    <Link className="dropdown-item d-flex align-items-center" to="#">
                                        <div className="dropdown-list-image mr-3">
                                            <img className="rounded-circle" src="img/undraw_profile_3.svg"
                                                alt="" />
                                            <div className="status-indicator bg-warning"></div>
                                        </div>
                                        <div>
                                            <div className="text-truncate">Last month's report looks great, I am very happy with
                                                the progress so far, keep up the good work!</div>
                                            <div className="small text-gray-500">Morgan Alvarez · 2d</div>
                                        </div>
                                    </Link>
                                    <Link className="dropdown-item d-flex align-items-center" to="#">
                                        <div className="dropdown-list-image mr-3">
                                            <img className="rounded-circle" src="https://source.unsplash.com/Mv9hjnEUHR4/60x60"
                                                alt="" />
                                            <div className="status-indicator bg-success"></div>
                                        </div>
                                        <div>
                                            <div className="text-truncate">Am I a good boy? The reason I ask is because someone
                                                told me that people say this to all dogs, even if they aren't good...</div>
                                            <div className="small text-gray-500">Chicken the Dog · 2w</div>
                                        </div>
                                    </Link>
                                    <Link className="dropdown-item text-center small text-gray-500" to="#">Read More Messages</Link>
                                </div>
                            </li>
    
                            <div className="topbar-divider d-none d-sm-block"></div>
    
                            {/* <!-- Nav Item - User Information --> */}
                            <li className="nav-item dropdown no-arrow">
                                <Link className="nav-link dropdown-toggle" to="#" id="userDropdown" role="button"
                                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <span className="mr-2 d-none d-lg-inline text-gray-600 small">Admin</span>
                                    <img className="img-profile rounded-circle"
                                        src="img/undraw_profile.svg" alt="" />
                                </Link>
                                {/* <!-- Dropdown - User Information --> */}
                                <div className="dropdown-menu dropdown-menu-right shadow animated--grow-in"
                                    aria-labelledby="userDropdown">
                                    <Link className="dropdown-item" to="#">
                                        <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
                                        Perfil
                                    </Link>
                                    <Link className="dropdown-item" to="#">
                                        <i className="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i>
                                        Configuración
                                    </Link>
                                    <Link className="dropdown-item" to="#">
                                        <i className="fas fa-list fa-sm fa-fw mr-2 text-gray-400"></i>
                                        Activity Log
                                    </Link>
                                    <div className="dropdown-divider"></div>
                                    <Link className="dropdown-item" to="#" data-toggle="modal" data-target="#logoutModal">
                                        <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                                        Logout
                                    </Link>
                                </div>
                            </li>
    
                        </ul>
    
                    </nav>
                    {/* <!-- End of Topbar --> */}               
    
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
                                        <button className="color-1 btn border-0 btn-block text-dark" type="button" data-toggle="modal" data-target="#detalle_puerto1">
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
    );
}