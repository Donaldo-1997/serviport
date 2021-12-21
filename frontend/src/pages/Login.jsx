import React, {Fragment, useEffect, useRef, useState} from 'react'
import { Link } from 'react-router-dom';

import loginService from '../services/login'
import ordenService from '../services/ordenes'
import { Header } from '../components/Header';



export function Login() {
    const [ userEmail, setUserEmail ] = useState('')
    const [ password, setPassword ] = useState('')
    
    // Compruebo que se encuantran en la base de datos
    const handleLogin = async () => {        
        try {
            const user = await loginService.login({
                correo: userEmail, // Los nombres tienen que ser iguakes a los que estan en el backend
                password
            })
            
            window.localStorage.setItem(
                'loggedOrdenAppUser', JSON.stringify(user)
            )
            ordenService.setToken(user.token) // Uso el service ordenes para llevarme informacion del usuario devuelto por login

            setUserEmail('')
            setPassword('')
        } catch (error) {
            console.log(error)
            console.log(`${userEmail} ${password}`)
        }
    }


    return (
        <Fragment>
            <Header ruta={"login"}/>            
            <div className="container">
                {/* <!-- Outer Row --> */ }
                <div className="row justify-content-center">
                    
                    <div className="col-xl-10 col-lg-12 col-md-9">

                        <div className="card o-hidden border-0 shadow-lg my-5">
                            <div className="card-body p-0">
                                {/* <!-- Nested Row within Card Body --> */ }
                                <div className="row">
                                    <div className="col-lg-6 d-none d-lg-block bg-login-image"></div>
                                    <div className="col-lg-6">
                                        <div className="p-5">
                                            <div className="text-center">
                                                <h1 className="h4 text-gray-900 mb-4">SERVIPORT SA</h1>
                                            </div>
                                            <form className="user">
                                                <div className="form-group">
                                                    <input 
                                                        type="email"  
                                                        name="UserEmail"
                                                        value={userEmail}
                                                        onChange={({ target }) => setUserEmail(target.value)}
                                                        placeholder="Enter Email Address..."
                                                        className="form-control form-control-user" 
                                                        aria-describedby="emailHelp"
                                                    />
                                                </div>
                                                <div className="form-group">
                                                    <input 
                                                        type="password"
                                                        name="Password" 
                                                        value={password} 
                                                        onChange={({ target }) => setPassword(target.value)}                                                         
                                                        placeholder="Password"
                                                        className="form-control form-control-user"
                                                    />
                                                </div>
                                                <div className="form-group">
                                                    <div className="custom-control custom-checkbox small">
                                                        <input 
                                                            type="checkbox" 
                                                            id="customCheck"
                                                            className="custom-control-input" />
                                                        <label className="custom-control-label" htmlFor="customCheck">Recuérdame</label>
                                                    </div>
                                                </div>
                                                <Link to="/crear-orden" 
                                                    onClick={handleLogin} 
                                                    value="Iniciar sesión" 
                                                    type="button" 
                                                    className="submit-boton btn btn-succes btn-user btn-block">Iniciar sesion</Link>                                                    
                                            </form>
                                            <hr/>
                                            <div className="text-center">
                                                <Link className="small" to="#">Olvidaste tu contraseña?</Link>
                                            </div>
                                            <div className="text-center">
                                                No tienes una cuenta?
                                                <Link className="small" to="/register">¡Unete ahora!</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>

            </div>
        </Fragment>
    );
}