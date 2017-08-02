import {serviceUrl,getGlobalHeader} from './service'
import {fetchJson} from './request'

export const loginParam = {
	name:'',//手机号
	password:''//密码
};

export const tokenParam = {
	appid:'',
	appkey:''
};

/**
 * 调用获取token接口 oauth/token
 * @param {*} param 
 */
export function getToken(){
	return fetchJson(`${serviceUrl}/oauth/token`,{...getGlobalHeader()},tokenParam);
}

/**
 * 调用登陆接口 user/login
 * @param {*} param 
 */
export function callLogin(param){
	let head = getGlobalHeader();
	return fetchJson(`${serviceUrl}/user/login`,{...getGlobalHeader()},param);
}
