import axios from 'axios'
import React, { Fragment, useEffect, useRef, useState } from 'react'

export function ModalOrdenExterno({ orden, getOrdenes }) {

    const eliminarOrden = () => {
        axios.delete(`http://localhost:8082/api/ordenes/${orden.id}`)
            .then(res => {
                console.log(res.data.mgs)
                getOrdenes()
            })
            .catch(error => console.log(error))
    }
    let estado = useRef()
    const guardar = () => {

        let datos = {
            origen: orden.origen,
            destino: orden.destino,
            numero: orden.numero,
            dimension: orden.dimension,
            peso: orden.peso,
            descripcion: orden.descripcion,
            estado: orden.aceptada ? estado.current.value : '',
            aceptada: orden.aceptada
        }

        axios.put('http://localhost:8082/api/ordenes/'+orden.id, datos)
            .then(res => {
                console.log('Orden actualizada')
                getOrdenes()
            })
            .catch(error => {
                console.log(error)
            })
    }

    const aceptarOrden = () => {
        let datos = { aceptada: true}
        axios.put('http://localhost:8082/api/ordenes/'+orden.id, datos)
            .then(res => {
                console.log(res.data.msg)
                getOrdenes()
            })
            .catch(error => {
                console.log(error)
            })
    }

    const estadosOrden = ["Pendiente", "Despachada", "Finalizada", "Cancelada"]

    return (
        <Fragment>
            <div className="modal fade" id="detalle_orden" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Detalle de la orden</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body d-flex">
                            <div className="col">
                                <p><strong>Origen:</strong> {orden.origen}</p>
                                <p><strong>Destino:</strong> {orden.destino}</p>
                                <p><strong>Número del container:</strong> {orden.numero}</p>
                                <p><strong>Peso:</strong> {orden.peso} Toneladas</p>
                                <p><strong>Dimensión:</strong> {orden.dimension} pies</p>
                                <p><strong>Descripción:</strong> {orden.descripcion}</p>
                                <p><strong>Estado: </strong>
                                {orden.aceptada ?
                                    orden.estado
                                    :
                                    'Aún no ha sido aceptada'
                                }
                                </p>
                            </div>
                        </div>
                        <div className="modal-footer">
                            {orden.aceptada ? 
                                <>
                                <button
                                    onClick={eliminarOrden}
                                    type="button" className="btn btn-danger" data-dismiss="modal">Eliminar</button>
                                <button
                                    onClick={guardar}
                                    type="button" className="btn btn-primary" data-dismiss="modal">Guardar</button>
                                </>
                                :
                                <>
                                <button                                    
                                    type="button" className="btn btn-danger" data-dismiss="modal">Rechazar</button>
                                <button
                                    onClick={aceptarOrden}
                                    type="button" className="btn btn-primary" data-dismiss="modal">Aceptar</button>
                                </>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
