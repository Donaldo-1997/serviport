import React, { Fragment } from 'react'
import { Redirect, Route } from 'react-router'
import DashboardOrdenesDespacho from '../pages/DashboardOrdenesDespacho'
import GenerarOrden from '../pages/GenerarOrden'

//let auth = true

export function PrivateRoute({ login, rol }) {
    let propiedadesRuta = {}

    if (login && rol === 'admin'){
        return <DashboardOrdenesDespacho/>        
    }
    else if (login && rol === 'externo'){
        return <GenerarOrden/>
    }

        
}
