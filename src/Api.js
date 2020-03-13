import axios from 'axios'

var $api = axios.create({
    baseURL: `http://127.0.0.1:5000/`,
    withCredentials: false,
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer {token}',
        'Owner': 'Mubarak SULAYMAN',
        'Access-Control-Allow-Methods' : 'GET',
        'Access-Control-Allow-Origin' : 'http://localhost:8080',
        "Allow": 'HEAD, OPTIONS, GET'
    }
})

export default $api
