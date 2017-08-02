export const login = (state = {
	visible: false,  //登陆UI是否显示
	isLogin: false,  //当前是否已登陆
	lat:"",//当前纬度
	lon:"",//当前经度
	device:"",//设备类型
	deviceKey:"",//设备id
	token: null,     //令牌
	uid: null,       //用户id
	phone:"",
	avatar:"",
	userName: null   //用户昵称
}, action) => {
	switch (action.type) {
		case "set_Login_Visible":
			let aa = Object.assign({}, state, { visible: action.visible });
			return aa;
		case "set_Login_Info":
			let info_login = Object.assign({}, state, {
				...action.loginInfo
			});
			return info_login;
		case "set_Token_Info":
			let info_token = Object.assign({},state,{
				token:action.token
			});
			return info_token;
		default:
			return state;
	}
};
