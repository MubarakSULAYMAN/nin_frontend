import axios from 'axios'

var $api = axios.create({
    baseURL: `https://record-api.herokuapp.com/`,
    withCredentials: false,
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer {token}',
        'Owner': 'Mubarak SULAYMAN',
        'Access-Control-Allow-Methods': 'GET',
        'Access-Control-Allow-Origin': 'https://record-api.herokuapp.com',
        "Allow": 'HEAD, OPTIONS, GET'
    }
})

export default $api
