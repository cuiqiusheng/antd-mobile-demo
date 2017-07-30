import fetch from 'whatwg-fetch'

function checkStatus(response) {
    if(response.status>=200&&response.status<=300)
    {
        return response;
    }
    const error = new Error(response.statusText);
    error.response = response;
    throw error;
}

function parseJson(response) {
    return response.json;
}

export function fetchJson(url,header,params) {
    params = {
        ...params,
        headers:{
            ...header,
        }
    };
    return request(url,params);
}

export function request(url,options) {
    return fetch(url,options)
        .then(checkStatus)
        .then(parseJson)
        .then((data)=>({data}))
        .catch((err)=>({err}))
}