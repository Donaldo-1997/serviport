import axios from 'axios'
import React, { Fragment } from 'react'

export function ModalPuerto({ modal, getPuertos }) {

    const eliminarPuerto = () => {
        axios.delete(`http://localhost:8082/api/puertos/${modal._id}`)
            .then(res => {
                getPuertos()
            })
            .catch(error => console.log(error))
    }
    // console.log(modal)
    return (
        <Fragment>
            <div className="modal fade" id="detalle_puerto1" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Detalle del puerto</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body d-flex">
                            <div className="col-5">
                                <p>{modal.nombre}</p>
                                <p>Ubicación: {modal.ubicacion}</p>
                            </div>
                            <div className="col">
                                <img className="img-fluid" src="/img/images (1).jfif" alt="Imagen del puerto" />
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button
                                onClick={eliminarPuerto}
                                type="button" className="btn btn-danger" data-dismiss="modal">Eliminar</button>
                            <button type="button" className="btn btn-primary" data-dismiss="modal">Cerrar</button>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
