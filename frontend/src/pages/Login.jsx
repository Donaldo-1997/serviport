import React, {Fragment, useEffect, useRef, useState} from 'react'
import { Link } from 'react-router-dom';

import { Header } from '../components/Header';



export default function Login(props) {
    const [ users, setUsers ] = useState([])
    // traigo datos de la DB
    useEffect(() => {
        fetch('http://localhost:3004/users')
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])

    // Obtengo los datos de los campos de texto
    const email = useRef();
    const password = useRef();
    
    // Compruebo que se encuantran en la base de datos
    const comprobar = () => {        
        // Busco que el usuario ingresado en el campo de texto exista en la DB.
        let searchUser = users.find(user => {
            if (user.email === email.current.value) {
                return user
            }
        })
        
        // Compruebo que haya infromación y le mando el rol que tiene el usuario
        if (searchUser){
            props.comprobar(searchUser.rol)                
        } else {
            console.log('no se encontro nada')
        }

        // Reseteo los campos de texto
        email.current.value = "";
        password.current.value = "";

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
                                                    <input ref={email} type="email" className="form-control form-control-user"
                                                        id="exampleInputEmail" aria-describedby="emailHelp"
                                                        placeholder="Enter Email Address..."/>
                                                </div>
                                                <div className="form-group">
                                                    <input ref={password} type="password" className="form-control form-control-user"
                                                        id="exampleInputPassword" placeholder="Password"/>
                                                </div>
                                                <div className="form-group">
                                                    <div className="custom-control custom-checkbox small">
                                                        <input type="checkbox" className="custom-control-input" id="customCheck"/>
                                                        <label className="custom-control-label" htmlFor="customCheck">Recuérdame</label>
                                                    </div>
                                                </div>
                                                <input type="button" value="Iniciar sesión" onClick={comprobar} className="submit-boton btn btn-succes btn-user btn-block"/>                                                    
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