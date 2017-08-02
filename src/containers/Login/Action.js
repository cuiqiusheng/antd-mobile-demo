import { store } from '../../index'
import { getLocalData,setLocalData } from "../../api/service"
import {callLogin,getToken} from '../../api/loginService'
import {Toast} from 'antd-mobile'


/**
 * 检查当前的登陆信息
 */
export const checkLoginStatus = () => {
	let loginInfo = getLocalData("loginInfo");
	if (loginInfo !== null) {
		//TODO:判断token有效期，失效则重新登陆(暂不处理)
		return dispatch => {
			dispatch(setLoginInfo(loginInfo));
		}
	}
	else {
		return dispatch => {
			//初始化数据
			dispatch(initLoginInfo());
			let state = store.getState();
			const loginInfo = state.login;
			//存储本地
			setLocalData("loginInfo",loginInfo);
		}
	}
};

/**
 * 调用登陆api
 * @param {*} userName 
 * @param {*} password 
 */
export const toLogin = (userName, password) => {
	let loginParm = {"userName":userName,
		"password":password};
	return dispatch=>{
		dispatch(checkToken());
			callLogin(loginParm).then((response)=>{
				response.json().then(result=>{
						const code = result.code;
						if(code==200){
							Toast.success('登录成功！',1,null);
							const nickName = result.data.name;
							const uid = result.data.uid;
							const phone = result.data.mobile;
							//设置登陆状态
							let preLoginInfo = store.getState().login;
							preLoginInfo.userName = nickName;
							preLoginInfo.uid = uid;
							preLoginInfo.phone = phone;
							preLoginInfo.isLogin = true;
							preLoginInfo.visible = false;
							dispatch(setLoginInfo(preLoginInfo));
							//存储在本地
							setLocalData("loginInfo",preLoginInfo);
						}
						else{
							Toast.fail('请检查账号重新登陆！',1,null);
						}
					});
		 	});
	}

};

/**
 * 检查token状态，无效即调用api更新之
 */
export const checkToken = ()=>{
	let state = store.getState();
	const {login:{token}} = state;
	return dispatch=>{
		if(token!==null&&token!==''){
			//检查有效期（暂不处理）
				console.log("当前state中的："+token);
				console.log(getLocalData("loginInfo"))
		}
		else{
			getToken().then(response=>{
				response.json().then(
					result=>{
						const code = result.code;
						//重新获取token
						if(code!=200){
							var start = new Date();
        			while(new Date() - start < 500) { // delay 0.5 sec
        			}
							dispatch(checkToken());
							return;
						}
						const token = result.data.token;
						dispatch(setTokenInfo(token));
						const loginInfo = store.getState().login;
						//存储本地
						setLocalData("loginInfo",loginInfo);
					}
				);
			});
		}
	}
	

};

export const showlogin = () => {
	return dispatch => {
		let state = store.getState();
		const { login: { visible } } = state;
		dispatch(showLoginVisible(!visible));
	}
};

export const showLoginVisible = (visible) => {
	return {
		type: 'set_Login_Visible',
		visible
	}
};

export const setLoginInfo = (loginInfo) => {
	return {
		type: 'set_Login_Info',
		loginInfo
	}
};

/**
 * 初始化已登陆信息
 * @returns {{type: string}}
 */
export const initLoginInfo = () => {
	return {
		type: 'init_Login_Info'
	}
};

/**
 * 设置token
 * @param {*} token 
 */
export const setTokenInfo = (token)=>{
	return {
		type: 'set_Token_Info',
		token
	}
};