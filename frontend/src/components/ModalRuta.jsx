import React, { Fragment } from 'react'

export function ModalRuta({ modal }) {
    return (
        <Fragment>
            <div className="modal fade" id="detalle_ruta" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Detalle de la ruta</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body d-flex">
                            <div className="col">
                                <p>Puerto-origen: {modal.origen} </p>
                                <p>Puerto-destino: {modal.destino} </p>
                                <p>Distancia: {modal.distancia}</p>
                            </div>
                            <div className="col">
                                <img src="/img/images.jfif" alt="Imagen del puerto"/>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-danger">Eliminar</button>
                            <button type="button" className="btn btn-primary" data-dismiss="modal">Cerrar</button>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

