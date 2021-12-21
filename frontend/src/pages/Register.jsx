import React, { useRef, useState } from 'react'
import { Fragment } from 'react/cjs/react.production.min';
import { Link } from 'react-router-dom';

import { Header } from '../components/Header';
import axios from 'axios';

export function Register() {

    const [ isValid, setIsValid ] = useState('')

    const nombre = useRef()
    const apellidos = useRef()
    const correo = useRef()
    const password = useRef()
    const password_repeat = useRef()

    const registrarse = () => {
        if(password.current.value !== password_repeat.current.value){
            console.log('las contraseñas no coinciden')
            setIsValid('invalid-feedback')
        } else {

            let datos = {
                nombre: nombre.current.value,
                apellidos: apellidos.current.value,
                correo: correo.current.value,
                password: password.current.value,
                rol: 'externo'
            }
            console.log('funciona')
    
            axios.post('http://localhost:8082/api/users', datos)
                .then(res => {
                    console.log('Registrado correctamente')
                    nombre.current.value = ''
                    apellidos.current.value = ''
                    correo.current.value = ''
                    password.current.value = ''
                    password_repeat.current.value = ''
                })
                .catch(error => console.log(error))
        }
        

    }

    const comrobarPassword = () => {
        console.log('validando')
    }

    return (
        <Fragment>
            <Header ruta={"register"}/>

            <div className="container">

                <div className="card o-hidden border-0 shadow-lg my-5">
                    <div className="card-body p-0">
                        {/* <!-- Nested Row within Card Body --> */}
                        <div className="row">
                            <div className="col-lg-5 d-none d-lg-block bg-register-image"></div>
                            <div className="col-lg-7">
                                <div className="p-5">
                                    <div className="text-center">
                                        <h1 className="h4 text-gray-900 mb-4">Crea una cuenta!</h1>
                                    </div>
                                    <form className="user needs-validation" noValidate >
                                        <div className="form-group row">
                                            <div className="col-sm-6 mb-3 mb-sm-0">
                                                <input 
                                                    ref={nombre}
                                                    type="text" className="form-control form-control-user" id="exampleFirstName"
                                                    placeholder="First Name" />
                                                    <div className='valid-feedback' >Muy bien</div>
                                            </div>
                                            <div className="col-sm-6">
                                                <input 
                                                    ref={apellidos}
                                                    type="text" className="form-control form-control-user" id="exampleLastName"
                                                    placeholder="Last Name" />
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <input 
                                                ref={correo}
                                                type="email" className="form-control form-control-user" id="exampleInputEmail"
                                                placeholder="Email Address" />
                                        </div>
                                        <div className="form-group row">
                                            <div className="col-sm-6 mb-3 mb-sm-0">
                                                <input 
                                                    ref={password} 
                                                    type="password" className={`form-control form-control-user`} 
                                                    id="exampleInputPassword" placeholder="Password" />
                                            </div>
                                            <div className="col-sm-6">
                                                <input 
                                                    ref={password_repeat}
                                                    type="password" className="form-control form-control-user"
                                                    id="exampleRepeatPassword" placeholder="Repeat Password"  />
                                            </div>
                                        </div>
                                        <button  
                                            onClick={registrarse}
                                            type='button'
                                            className="submit-boton btn btn-sucess btn-user btn-block">
                                            Registrar cuenta
                                        </button>                                        
                                    </form>
                                    <hr />
                                    <div className="text-center">
                                        <Link className="small" to="/login">Ya tienes un cuenta? Logueate!</Link>
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