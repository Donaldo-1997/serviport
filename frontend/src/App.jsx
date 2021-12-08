import React, { useState, useRef, Fragment } from 'react';
import {
    BrowserRouter as Router,
    HashRouter,
    Redirect,
    Route,
    Switch,
  } from "react-router-dom";


import DashboardCrearPuerto from './pages/DashboardCrearPuerto';
import DashboardCrearRuta from './pages/DashboardCrearRuta';
import DashboardOrdenesDespacho from './pages/DashboardOrdenesDespacho';
import GenerarOrden from './pages/GenerarOrden';
import { Home } from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import { Error404 } from './pages/Error404';
import { PrivateRoute } from './components/PrivateRoute';



export function App() {
    // Para saber si se ha iniciado sesion
    const [ login, setLogin ] = useState(false)   
    
    // Pa ra saber que tipo de usuario se está logueando
    const [ rol, setRol ] = useState(null)

    // La comprobacion se hace en login, quien es el que devuelve información a App
    const comprobar = (rol) => {
        setRol(rol)       
        setLogin(true)                 
    }

    return (
        
        <Router>
            <Switch>
                <Route exact path="/" component={Home} />

                {/* Con el metodo comprobar voy a traer informacion del componente 
                Login al componente App */}
                <Route exact path="/login">
                    <Login comprobar={comprobar} />
                </Route>
                
                <Route exact path="/register" component={Register} />
                <Route exact path="/crear-orden" component={GenerarOrden} />
                <Route exact path="/crear-puerto" component={DashboardCrearPuerto} />
                <Route exact path="/crear-ruta" component={DashboardCrearRuta} />
                <Route exact path="/mostrar-ordenes" component={DashboardOrdenesDespacho} />
                <Route path="*" component={<Error404/>} />
            </Switch>
        </Router>           
    );
}