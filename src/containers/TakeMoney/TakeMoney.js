/**
 * @summary 提现-未绑定
 * @date    2017-07-30
 * @author  white
 */
import React, { Component } from 'react';
import style from './style.css';
import { NavBar, WhiteSpace, List, WingBlank, Button } from 'antd-mobile';
import zfb from './zfb.png';

const Item = List.Item;

class TakeMoney extends Component {
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
        >
          提现
        </NavBar>
        <List className="my-list" renderHeader={() => '提现到支付宝账号'}>
          <Item extra={'立即绑定'}><img src={zfb} /> 尚未绑定支付宝账号</Item>
        </List>
        <List className="my-list" renderHeader={() => '提现金额'}>
          <Item>
            <span className={style.rmb}>¥</span>
            <div className={style.mbox}>
              <input className={style.inp} type="number" placeholder="请输入10的倍数"/>
            </div>
          </Item>
          <Item extra={<span className={style.blue}>全部提现</span>}><span className={style.grey}>可提现金额 ¥ 1805.55</span></Item>
        </List>
        <WhiteSpace size='xl' />
        <WhiteSpace size='xl' />
        <WhiteSpace size='xl' />
        <WingBlank size='lg'>
          <Button className="btn" type="primary">确认提现</Button>
        </WingBlank>
        <WhiteSpace />
        <div className={style.note}>当天17:00前提现当天到账，17:00后提现第二天到账</div>
      </div>
    );
  }
}

export default TakeMoney;
