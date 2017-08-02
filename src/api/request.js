import fetch from 'isomorphic-fetch';
import {getLocalData} from "./service"

function checkStatus(response) {
	if (!(response.status >= 200 && response.status <= 300)) {
	} else {
		return response;
	}
	const error = new Error(response.statusText);
    error.response = response;
    throw error;
}

export function fetchJson(url,header,params) {
  
  const options = {
    method:"POST",
    headers:{
      ...header,
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body:JSON.stringify(params)
  };
  console.log("最终的参数");
  console.log(options);
  return request(url,options);
}

export function request(url,options) {
  return fetch(url,options)
           .then(checkStatus)
             .catch((err)=>({err}));
}