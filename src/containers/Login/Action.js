import { store } from '../../index'
import { getLocalData } from "../../api/service"


/**
 * 检查当前的登陆信息
 */
export const checkLoginStatus = () => {
	let loginInfo = getLocalData("loginInfo");
	if (!loginInfo === null) {
		//判断token有效期，失效则重新登陆
		// console.log("发送给reducer,loginfo:");
		// console.log(loginInfo);
		return dispatch => {
			dispatch(setLoginInfo(loginInfo));
		}
	}
	else {
		return dispatch => {
			dispatch(initLoginInfo());
		}
	}
};

export const login = (userName, password) => {
	// console.log("登陆操作");
};

export const showlogin = () => {
	// console.log("dispath一个thunk");
	return dispatch => {
		let state = store.getState();
		const { login: { visible } } = state;
		// console.log("发送到reducer前的准备，visible=" + visible);
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

export const initLoginInfo = () => {
	// console.log("init");
	return {
		type: 'init_Login_Info'
	}
};