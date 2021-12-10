import React, { useState, useRef, useEffect, Fragment } from 'react'
import axios from 'axios'

export const ValorPorMilla = () => {
    let [ readOnly, setReadOnly ] = useState(true) // PARA CONTROLAR EL BOTON DE EDITAR EL VALOR DE UNA MILLA
    
    const txt_valor_milla = useRef()
    const [ valor_milla, setValor_milla ] = useState(0)
    const [idMilla, setIdMilla] = useState('')
    
    useEffect(() => getValorMilla(), [])

    const getValorMilla = () => {
        axios.get('http://localhost:8082/api/milla')
            .then(res => {   
                res.data.map(({valor, _id}) => {
                    setValor_milla(valor)
                    setIdMilla(_id)
                    // console.log(`Valor: ${valor} id: ${_id}`)
                })             
                
                
            })
            .catch(error => console.log(error))
    }

    
    const establecerValorPorMilla = () => {
        // Toma el valor por milla que haya establecido el usuario        
        let datos = {
            valor: txt_valor_milla.current.value
        }

        axios.put('http://localhost:8082/api/milla/'+idMilla, datos)
            .then(res => {
                console.log('Valor por milla actualizado')
                getValorMilla()
                setReadOnly(!readOnly)
            })
            .catch(error => {
                console.log(error)
            })
    }

    return (
        <div className="row mb-2">
            <form
                className="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
                <div className="input-group">
                    {readOnly ? 
                        <Fragment>
                            <span className="form-control bg-light border-1 small"> {valor_milla} </span>
                            <div className="input-group-append">
                                <button
                                    onClick={() => setReadOnly(!readOnly)}
                                    className="btn btn-primary"
                                    type="button">
                                    <i className="far fa-edit"></i>
                                </button>                                
                            </div>
                        </Fragment>
                        :
                        <Fragment>
                            <input ref={txt_valor_milla} type="text" defaultValue={valor_milla} className="form-control bg-light border-1 small"
                                aria-label="Search" aria-describedby="basic-addon2" />
                            <div className="input-group-append">
                                <button
                                    onClick={() => setReadOnly(!readOnly)}
                                    className="btn btn-primary"
                                    type="button">
                                    <i className="far fa-edit"></i>
                                </button>
                                <button
                                    onClick={establecerValorPorMilla}
                                    className="btn btn-success"
                                    type="button">
                                    <i className="far fa-check-square"></i>
                                </button>
                            </div>
                        </Fragment>
                    }                    
                </div>
            </form>
        </div>
    )
}
