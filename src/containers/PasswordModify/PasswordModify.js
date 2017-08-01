/**
 * @summary 修改密码
 * @date    2017-08-01
 * @author  cuiqs
 */
import React, { Component } from 'react';
import style from './style.css';
import { NavBar, InputItem, Picker, Button } from 'antd-mobile';
import { createForm } from 'rc-form';

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

const RegistChildren = props => (
	<div
		onClick={props.onClick}
		className={style.areaSelect}
	>
		{props.children}
	</div>
);


class PasswordModify extends Component {
  constructor(props) {
    super(props);
    this.state ={};
    this.areaSelected = this.areaSelected.bind(this);
    this.getCode = this.getCode.bind(this);
  }

  areaSelected(value) {
		this.props.form.resetFields(["phone"]);
		this.setState({ areaValue: value });
  }
  
  // 获取验证码
  getCode() {
    console.log('获取验证码');
  }

  render() {
    // const { getFieldProps } = this.props.form;
    return (
      <div className={style.wrapper}>
        <NavBar
          mode="light"
          leftContent="返回"
          onLeftClick={() => console.log('返回')}
        >修改密码</NavBar>

        <div className={style.content}>
          <div>
            <InputItem placeholder="请输入手机号" type="number" />
          </div>
          <div className={style.yzmBox}>
            <InputItem placeholder="请输入验证码" type="number" />
            <span className={style.yzm} onClick={this.getCode}>获取验证码</span>
          </div>
          <div>
            <InputItem placeholder="请输入密码" type="password" />
          </div>
          <div className={style.picker}>
            <Picker data={district} onChange={v => this.areaSelected(v)}>
              <RegistChildren>选择区号</RegistChildren>
            </Picker>
          </div>
          <div className={style.btnBox}>
            <Button type="primary">确认修改</Button>
          </div>
        </div>
      </div>
    );
  }
}

PasswordModify = createForm()(PasswordModify);
export default PasswordModify;
