import React, { useRef } from 'react'
import { Fragment } from 'react/cjs/react.production.min';
//import { dataContainer } from '../data';
import { Header } from '../components/Header';
import axios from 'axios';


export default function GenerarOrden() {

    const origen = useRef()
    const destino = useRef()
    const numContainer = useRef()
    const dimensionContainer = useRef()
    const pesoContainer = useRef()
    const descripcion = useRef()

    function generarOrden () {
        let datos = { 
            origen: origen.current.value,
            destino: destino.current.value,
            numero: numContainer.current.value,
            dimension: dimensionContainer.current.value,
            peso: pesoContainer.current.value,
            descripcion: descripcion.current.value
        }

        // Envío los datos al servidor de la DB
        axios.post('http://localhost:8082/api/ordenes', datos)
            .then(res => {
                console.log(res.data)
                 // Limpio los campos de texto
                origen.current.value = ''
                destino.current.value = ''
                numContainer.current.value = ''
                dimensionContainer.current.value = ''
                pesoContainer.current.value = ''
                descripcion.current.value = ''
            })
            .catch(error => console.log("Error in GenerarOrden!" + error))

       
    }

    return (
        <Fragment>
            <Header session={true}/>
            <div className="container">

                <div className="card o-hidden border-0 shadow-lg my-5">
                    <div className="card-body p-0">
                        {/* <!-- Nested Row within Card Body --> */}
                        <div className="row">
                            <div className="col-lg-7">
                                <div className="p-5">
                                    <div className="text-center">
                                        <h1 className="h4 text-gray-900 mb-4">GENERAR ORDEN DE DESPACHO</h1>
                                    </div>
                                    <form className="user">
                                        <div className="form-group row">
                                            <div className="col-sm-6 mb-3 mb-sm-0">
                                                <input type="text" className="form-control " ref={origen}
                                                    placeholder="Origen de carga" />
                                            </div>
                                            <div className="col-sm-6">
                                                <input type="text" className="form-control " ref={destino}
                                                    placeholder="Destino de carga" />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <div className="col-sm-6 mb-3 mb-sm-0">
                                                <input type="text" className="form-control " ref={numContainer}
                                                    placeholder="Container No." />
                                            </div>
                                            <div className="col-sm-6">
                                                <input type="text" className="form-control " ref={dimensionContainer}
                                                    placeholder="Dimensión del container" />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <div className="col-sm-6 mb-3 mb-sm-0">
                                                <input type="text" className="form-control " ref={pesoContainer}
                                                    placeholder="Peso del container" />                                                
                                            </div>
                                            <div className="col-sm-6">
                                                <input type="text" className="form-control " ref={descripcion}
                                                    placeholder="Descripción" />
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <input onClick={generarOrden} type="button" className="submit-boton btn btn-success" value="Generar orden" />
                                        </div>
                                        
                                        <hr />
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </Fragment>
    );
}