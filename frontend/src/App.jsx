import React, { useEffect, useState } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect
  } from "react-router-dom";


import DashboardCrearPuerto from './pages/DashboardCrearPuerto';
import DashboardCrearRuta from './pages/DashboardCrearRuta';
import DashboardOrdenesDespacho from './pages/DashboardOrdenesDespacho';
import GenerarOrden from './pages/GenerarOrden';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { Error404 } from './pages/Error404';



export function App() {
    const [ user, setUser ] = useState(null)

    useEffect(() => {
        const loggedUserJSON = window.localStorage.getItem('loggedOrdenAppUser')
        if (loggedUserJSON){
            const user = JSON.parse(loggedUserJSON)
            setUser(user)
        }
    }, [])

    return (
        
        <Router>
            <Switch>
                <Route exact path="/" component={Home} />

                
                <Route exact path="/login" >
                    {user ? <Redirect to="/crear-orden" /> : <Login/>}
                </Route>
                
                <Route exact path="/register" component={Register} />
                <Route exact path="/crear-orden">
                    {user ? <GenerarOrden /> : <Redirect to="/login" />}
                </Route>
                <Route exact path="/crear-puerto" component={DashboardCrearPuerto} />
                <Route exact path="/crear-ruta" component={DashboardCrearRuta} />
                <Route exact path="/mostrar-ordenes" component={DashboardOrdenesDespacho} />
                
                {/* Para cualquier ruta desconocida */}
                <Route path="*" component={Error404} />
            </Switch>
        </Router>           
    );
}