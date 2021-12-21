import React from 'react'
import { Fragment } from 'react/cjs/react.production.min';
import { Link } from 'react-router-dom';


export function Header({ ruta, session }) {
    return (
        <Fragment>
            <header className="navbar-expand d-flex">
                <div className="img-fondo"></div>
            </header>
            <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">

                {/* <!-- Sidebar Toggle (Topbar) --> 
                ¡¡¡¡ Esto solo aparece cuando es una pantalla pequeña !!!! */}
                {/* <button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
                    <i className="fa fa-bars"></i>
                </button> */}

                <Link className="sidebar-brand d-flex align-items-center justify-content-center" to="/">
                    <div className="sidebar-brand-text mx-3">Serviport</div>
                </Link>

                {/* <!-- Topbar Navbar --> */}
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item dropdown no-arrow d-sm mr-3">
                        <Link to="/mostrar-ordenes" >Dashboard</Link>
                    </li>
                    <li className="nav-item dropdown no-arrow d-sm mr-3">
                        <Link to="/crear-orden" >generar orden de despacho</Link>
                    </li>
                    {ruta === "register" || session ?
                        null
                        :
                        <li className="nav-item dropdown no-arrow d-sm mr-3">
                            <Link to="/register" >Registrarse</Link>
                        </li>}
                    {ruta === "login" || session ? 
                        null 
                        : 
                        <li className="nav-item dropdown no-arrow d-sm mr-3">
                            <Link to="/login" >Login</Link>
                        </li>}
                    
                </ul>

            </nav>
        </Fragment>
    );
}