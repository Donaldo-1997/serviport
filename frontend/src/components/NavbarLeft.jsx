import React from 'react'
import { Fragment } from 'react'
import { Link, NavLink } from 'react-router-dom'

export const NavbarLeft = () => {
    return (
        <Fragment>
            <ul className="navbar-nav sidebar sidebar-light accordion shadow bg-body rounded" id="accordionSidebar">

                {/* <!-- Sidebar - Brand --> */}
                <Link className="sidebar-brand d-flex align-items-center justify-content-center" to="index.html">
                    {/* <!-- <div className="sidebar-brand-icon rotate-n-15">
                <i className="fas fa-laugh-wink"></i>
            </div> --> */}
                    <div className="sidebar-brand-text mx-3">Dashboard</div>
                </Link>

                {/* <!-- Divider --> */}
                <hr className="sidebar-divider my-0" />

                {/* <!-- Divider --> */}
                <hr className="sidebar-divider" />

                <li>
                    <NavLink to="/mostrar-ordenes" className="border-0 list-group-item list-group-item-action">
                        <span>Ordenes de despacho</span>
                    </NavLink>
                </li>

                {/* <!-- Nav Item - Utilities Collapse Menu --> */}
                <li>
                    <NavLink to="/crear-puerto" className="border-0 list-group-item list-group-item-action">
                        <span>Crear Puerto</span>
                    </NavLink>
                </li>

                {/* <!-- Nav Item - Utilities Collapse Menu --> */}
                <li>
                    <NavLink to="/crear-ruta" className="border-0 list-group-item list-group-item-action">
                        <span>Crear Rutas</span>
                    </NavLink>
                </li>

            </ul>
        </Fragment>
    )
}
