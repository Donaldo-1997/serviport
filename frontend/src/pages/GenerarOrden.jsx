import React, { useRef, useState, Fragment, useEffect } from 'react'
//import { dataContainer } from '../data';
import { Header } from '../components/Header';
import axios from 'axios';


export default function GenerarOrden() {

     // Traigo los datos de puertos del servidor    
     const [ puertos, setPuertos ] = useState([])
     useEffect(() => {
         axios.get('http://localhost:8082/api/puertos')
             .then(res => {
                 setPuertos(res.data)                
             })
             .catch(error => console.log(error))
     }, [])

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
                                                <label htmlFor="origen" className="form-label">Origen de carga</label>
                                                <select className="form-control " id="origen" ref={origen}>
                                                    {puertos.map(puerto => {
                                                        return <option key={puerto._id} value={puerto.nombre}> {puerto.nombre} </option>
                                                    })}
                                                </select>
                                            </div>
                                            <div className="col-sm-6">
                                                <label htmlFor="destino" className="form-label">Destino de carga</label>
                                                <select className="form-control " id="destino" ref={destino}>
                                                    {puertos.map(puerto => {
                                                        return <option key={puerto._id} value={puerto.nombre}> {puerto.nombre} </option>
                                                    })}
                                                </select>
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <div className="col-sm-6 mb-3 mb-sm-0">
                                                <label htmlFor="numContainer" className="form-label">Container No.</label>
                                                <input type="text" className="form-control" id="numContainer" ref={numContainer}
                                                    placeholder="Container No." />
                                            </div>
                                            <div className="col-sm-6">
                                                <label htmlFor="dimensionContainer" className="form-label">Dimensión del container</label>
                                                <input type="text" className="form-control " id="dimensionContainer" ref={dimensionContainer}
                                                    placeholder="*Ej: 40 pies" />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <div className="col-sm-6 mb-3 mb-sm-0">
                                                <label htmlFor="pesoContainer" className="form-label">Peso del container</label>
                                                <input type="text" className="form-control " id="pesoContainer" ref={pesoContainer}
                                                    placeholder="*Ej: 29 toneladas" />                                                
                                            </div>
                                            <div className="col-sm-6">
                                                <label htmlFor="descripcion" className="form-label">Descripcion</label>
                                                <input type="text" className="form-control " id="descripcion" ref={descripcion}
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