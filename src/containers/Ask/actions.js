import fetch from 'isomorphic-fetch';
import * as at from '../../constants/actionTypes';

export function getData() {
  const api = './data.json';
  return (dispatch) => {
    fetch(api, {
      method: 'GET',
      // Origin: '*',
      // icredentials: 'include',
      // 'Access-Control-Allow-Origin': '*',
      headers: new Headers({
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }),
    })
    .then(
      response => {
        response.json().then(data => {
          console.log(data);
          dispatch({
            data,
            type: at.PAYMENT_AND_RELEASE,
          });
        })
      }
    )
  }
}
