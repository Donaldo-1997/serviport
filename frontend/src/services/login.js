import axios from 'axios'

const baseUrl = 'http://localhost:8082/api/login'

const login = async credentials => {
    const { data } = await axios.post(baseUrl, credentials)
    return data
}

export default { login }