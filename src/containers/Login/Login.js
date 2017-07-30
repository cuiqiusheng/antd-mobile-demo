/**
 * 登陆页
 * Created by xintao on 2017/7/14.
 */
import React from 'react'
import { createForm } from 'rc-form'
import style from './style.css'

import { showLoginVisible } from './Action'

import imgPhone from './image/userphone.png'
import imgPassword from './image/userpassword.png'
import { Button, NavBar, InputItem, WhiteSpace, Flex, WingBlank, Picker } from 'antd-mobile'

const district = [
	{
		label: '中国大陆',
		value: '+86',
	},
	{
		label: '中国香港',
		value: '+852',
	},
	{
		label: '中国澳门',
		value: '+853',
	},
	{
		label: '中国台湾',
		value: '+088',
	}
];

/**
 * 地区选择器
 * @param props
 * @constructor
 */
const RegistChildren = props => (
	<div
		onClick={props.onClick}
		className={style.areaSelect}
	>
		{props.children}
	</div>
);

class Login extends React.Component {

	constructor(props) {
		super(props);
		this.hideLogin = this.hideLogin.bind(this);
	}

	state = {
		areaValue: [''],
	};

	areaSelected(value) {
		this.props.form.resetFields(["phone"]);
		this.setState({ areaValue: value });
	}

	hideLogin() {
		const { dispatch } = this.props;
		dispatch(showLoginVisible(false));
	}


	render() {
		const { getFieldProps } = this.props.form;
		return (
			<div className={style.content}>
				<NavBar iconName="cross"
					mode="light"
					onLeftClick={this.hideLogin}
				>登录</NavBar>
				<div>
					<WhiteSpace size="xl" />
					<InputItem
						{...getFieldProps('phone', {
							initialValue: (this.state.areaValue)
						}) }
						type="tel"
						placeholder="请输入手机号码"
						clear="true"
						labelNumber="5"
					>
						<img src={imgPhone} alt="imgPhone" />
					</InputItem>
					<InputItem
						type="password"
						labelNumber="5"
						placeholder="请输入登录密码"
					>
						<img src={imgPassword} alt="password" />
					</InputItem>
				</div>
				<Flex justify="between">
					<Picker data={district} cols={1} onChange={v => this.areaSelected(v)}>
						<RegistChildren>选择区号</RegistChildren>
					</Picker>
					<div className={style.areaSelect}>忘记密码?</div>
				</Flex>
				<WingBlank><Button type="primary" style={{ align: "middle" }}>登  录</Button></WingBlank>
				<div className={style.bottom}>
					没有账号，现在就去注册吧
        </div>
			</div>
		)
	}
}

const LoginWrapper = createForm()(Login);

export default (LoginWrapper)