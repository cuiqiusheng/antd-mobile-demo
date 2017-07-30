
import {fetchJson} from "./request";

class service{
    constructor(){
        this.serviceUrl = "";
    }

    static token()
    {
        return fetchJson()
    }
}

export const setLocalData=(key,data)=>{
    if(typeof(data)==='object')
        localStorage.setItem(key,JSON.stringify(data));
    else
        localStorage.setItem(key,data);
};

export const getLocalData=(key)=>{
    let value = null;
    try{
        value = JSON.parse(localStorage.getItem(key));
    }
    catch(err){
        value = localStorage.getItem(key);
    }
    return value;
};

