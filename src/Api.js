import axios from 'axios'

export default () => {
    return axios.create({
        baseURL: `http://127.0.0.1:5000/`,
        withCredentials: false,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer {token}',
            'Owner': 'Mubarak SULAYMAN'
        }
    })
}
