/**
 * @summary 个人资料
 * @date    2017-07-30
 * @author  white
 */
import React, { Component } from 'react';
import style from './style.css';
import { NavBar, List, WhiteSpace, WingBlank, Switch, Button } from 'antd-mobile';
import TopInfo from '../../components/TopInfo'
import testphotojpg from './testphotojpg.jpg'

const Item = List.Item;
const Brief = Item.Brief;

class PersonalInfo extends Component {
  constructor(props) {
    super(props);
    this.state ={};
  }

  render() {
    return (
      <div className={style.wrapper}>
        <NavBar leftContent="返回"
        mode="light"
        onLeftClick={() => console.log('onLeftClick')}
        >个人资料设置</NavBar>
        <TopInfo>昵称30天只能修改一次</TopInfo>
        <List className="my-list">
          <Item arrow="horizontal" extra={<div className={style.imgbox}><img src={testphotojpg} /></div>}>头像</Item>
          <Item extra={"潘玮柏"}>昵称</Item>
          <Item extra={"15620789924"}>手机号</Item>
          <Item extra={"3/10"} align="bottom">你的头衔<Brief>持牌人</Brief></Item>
          <Item extra={"10/20"} align="bottom">擅长领域<Brief>对友邦保险有深入了解</Brief></Item>
          <Item align="bottom">
            个人简介
            <span className={style.introduction}>
            (座右铭、学历、工作经验等)
            </span>
            <div className={style.intcon}>
              如果你无法简洁的表达你的想法,说明你还不够了解它.
              <div className={style.extra}>40/400</div>
            </div>
          </Item>
        </List>
        <WhiteSpace size='lg' />
        <List className="my-list">
          <Item arrow="horizontal" extra={<span><span className={style.blue}>10</span> 元</span>}>想向我提问需要支付</Item>
          <Item extra={<Switch initialValue='true' checked/>}>加入知识开放计划 <span className={style.bluebtn}>开放规则</span></Item>
        </List>
        <WhiteSpace size='xl' />
        <WingBlank size='lg'>
          <Button className="btn" type="primary">保存</Button>
        </WingBlank>
        <WhiteSpace size='xl' />
      </div>
    );
  }
}

export default PersonalInfo;
