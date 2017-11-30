// import 'babel-polyfill'
require('es6-promise').polyfill() // https://github.com/stefanpenner/es6-promise
require('isomorphic-fetch') // https://github.com/matthew-andrews/isomorphic-fetch

// TODO: test server
const API_URL = 'https://jsonplaceholder.typicode.com'

const fetchJson = path => {
    const url = `${API_URL}/${path}`
    
    return fetch(url)
        .then(
            response => response.json(),
            error => {
                console.error('fetchJson ERROR:', error)
                return error
            }
        )
}

const sendJson = (method, path, payload) => {
    const url = `${API_URL}/${path}`

    return fetch(url, {
            method: method,
            body: JSON.stringify(payload),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        .then(
            response => response.json(),
            error => {
                console.error('fetchJson ERROR:', error)
                return error
            }
        )
}

export {
    fetchJson,
    sendJson
}
