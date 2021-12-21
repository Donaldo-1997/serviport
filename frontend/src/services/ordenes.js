import axios from 'axios'

const baseUrl = 'http://localhost:8082/api/ordenes'

let token = null
const setToken = (newToken) => {
    token = `Bearer ${token}`
}

const getAll = () => {
    const req = axios.get(baseUrl)
    return req.then(res => res.data)
}

const create = (newObject) => {
    const config = { // Esto es necesario para enviarle el token al backend
        headers: {  // Esta es la informacion que se va por la cebecera de la solicitud
            Authorization: token
        }
    }

    const req = axios.post(baseUrl, newObject, config)
    return req.then(res => res.data)
}

const update = (id, newObject) => {
    const config = {
        headers: {
            Authorization: token
        }
    }

    const req = axios.put(`${baseUrl}/${id}`, newObject, config)
    return req.then(res => res.data)
}

export default { getAll, create, update, setToken }