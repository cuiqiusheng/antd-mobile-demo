import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Popup, Toast } from 'antd-mobile'
import { checkLoginStatus } from "./containers/Login/Action"
import Login from './containers/Login'
import './App.css';

// fix touch to scroll background page on iOS
// https://github.com/ant-design/ant-design-mobile/issues/307
// https://github.com/ant-design/ant-design-mobile/issues/163
const isIPhone = new RegExp('\\biPhone\\b|\\biPod\\b', 'i').test(window.navigator.userAgent);
let maskProps;
if (isIPhone) {
	Toast.info('iphone', 2, null, false);
	// Note: the popup content will not scroll.
	maskProps = {
		onTouchStart: function (e) {
			Toast.info('Toast without mask !!!', 2, null, false);
			e.preventDefault()
		},
	};
}
class App extends Component {
	onPlusReady() {
		// console.log("h5+就绪");
		// alert("就绪");
		// // 获取设备默认的摄像头对象
		// // eslint-disable-next-line
		// alert( "IMEI: " + plus.device.imei );
		// //eslint-disable-next-line
		// plus.nativeUI.actionSheet( {title:"Plus is ready!",cancel:"取消",buttons:[{title:"1"},{title:"2"}]}, function(e){
		//     console.log( "User pressed: "+e.index );
		// } );
		// let shares = null;
		//eslint-disable-next-line
		plus.share.getServices(function (s) {
			// shares = s;
		}, function (e) {
			alert("获取分享服务列表失败：" + e.message);
		});
		// ......
	}

	componentDidMount() {
		//启动时读取用户数据
		const { dispatch } = this.props;
		dispatch(checkLoginStatus());
		document.addEventListener("plusready", this.onPlusReady, false);
		// const r = null;
		// 扩展API加载完毕，现在可以正常调用扩展API
	}

	componentWillReceiveProps(nextProps) {
		// console.log("收到状态变化信息" + nextProps);
		// console.log("此时的visible=" + nextProps.login.visible);
		if (nextProps.login.visible) {
			Popup.show(<div style={{ height: (document.documentElement.clientHeight) }}>
				<Login dispatch={nextProps.dispatch} />
			</div>,
				{ animationType: 'slide-up', maskProps, maskClosable: false, mask: true });
		}
		else {
			Popup.hide();
		}
	}

	render() {
		return (
			<div className="App">
				{this.props.children}
			</div>
		);
	}
}

export default connect(state => ({
	login: state.login
}))(App);