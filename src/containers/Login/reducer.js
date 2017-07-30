export const login = (state = {
	visible: false,  //登陆UI是否显示
	isLogin: false,  //当前是否已登陆
	token: null,     //令牌
	uid: null,       //用户id
	userName: null   //用户昵称
}, action) => {
	// console.log("我已进入reducer");
	switch (action.type) {
		case "set_Login_Visible":
			let aa = Object.assign({}, state, { visible: action.visible });
			// console.log("action已匹配，返回visible=" + aa.visible);
			return aa;
		case "set_Login_Info":
			let info = Object.assign({}, state, {
				isLogin: true,
				uid: action.uid,
				userName: action.userName
			});
			return info;
		default:
			return state;
	}
};
