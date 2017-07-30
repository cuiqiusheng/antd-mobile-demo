/**
 * @summary 立即报名
 * @date    2017-07-30
 * @author  cuiqs
 */
import React, { Component } from 'react';
import style from './style.css';
import { NavBar, List, Checkbox, Button } from 'antd-mobile';

class ApplyNow extends Component {
  constructor(props) {
    super(props);
    this.state ={};
  }

  render() {
    return (
      <div className={style.wrapper}>
        <NavBar
          mode="light"
          leftContent="返回"
          onLeftClick={() => console.log('返回')}
        >立即报名</NavBar>

        <div className={style.nameBox}>
          <p className={style.name}>中理职联 私银三人行系列活动-财联邦</p>
          <p className={style.balance}>当前余额：0.00元</p>
        </div>

        <p className={style.tip}>选择报名内容</p>

        <List>
          <List.Item>
            <div className={style.item}>
              <div>线下报名(99元)</div>
              <div><Checkbox /></div>
            </div>
          </List.Item>
          <List.Item>
            <div className={style.item}>
              <div>线上直播(10元)</div>
              <div><Checkbox /></div>
            </div>
          </List.Item>
        </List>

        <div className={style.btnBox}>
          <Button type="primary" className={style.btn}>确认支付99元</Button>
        </div>

      </div>
    );
  }
}

export default ApplyNow;
