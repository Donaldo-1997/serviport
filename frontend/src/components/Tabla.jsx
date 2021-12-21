import axios from 'axios';
import React, { useState, useEffect, Fragment } from 'react';

import DataTable from 'react-data-table-component'
import { ModalOrden } from './ModalOrden'

const columns = [
    {
        name: 'No. orden',
        selector: row => row.numero,
        sortable: true,
        maxWidth: '100px'
    },
    {
        name: 'Fecha',
        selector: row => row.fecha,
        sortable: true
    },
    {
        name: 'Puerto origen',
        selector: row => row.origen,
        sortable: true
    },
    {
        name: 'Puerto destino',
        selector: row => row.destino,
        sortable: true
    },
    {
        name: 'Estado',
        selector: row => row.estado,
        sortable: true
    },
]

const paginationComponentOptions = {
    rowsPerPageText: 'Filas por página',
    rangeSeparatorText: 'de',
    selectAllRowsItem: true,
    selectAllRowsItemText: 'Todos',
};



export function Tabla() {
    const [ ordenes, setOrdenes ] = useState([])

    const getOrdenes = () => {
        axios.get('http://localhost:8082/api/ordenes')
            .then(res => {
            setOrdenes(res.data)
        })
            .catch(error => console.log(error))
    }

    useEffect(() => getOrdenes() ,[])

    const datosOrden = (datos) => datos

    const [ modal, setModal ] = useState(false)

    return (
        <Fragment>
            <DataTable
                columns={columns}
                data={ordenes}
                fixedHeader
                pagination
                paginationComponentOptions={paginationComponentOptions}
                onRowClicked={(row) => {
                    datosOrden(row)
                    setModal(true)
                }}
                pointerOnHover
            />
            {modal ? <ModalOrden orden={datosOrden} /> : null}
            
        </Fragment>
    )
}