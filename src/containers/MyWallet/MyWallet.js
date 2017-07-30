/**
 * @summary 我的钱包
 * @date    2017-07-30
 * @author  white
 */
import React, { Component } from 'react';
import style from './style.css';
import { NavBar, Icon, WhiteSpace, List} from 'antd-mobile'

const Item = List.Item;

class MyWallet extends Component {
  constructor(props) {
    super(props);
    this.state ={};
  }

  render() {
    return (
      <div className={style.wrapper}>
        <NavBar leftContent="返回"
          mode="dark"
          onLeftClick={() => console.log('onLeftClick')}
          rightContent={[
            <Icon key="1" type="ellipsis" />
          ]}
        >
          钱包
        </NavBar>
        <div className={style.available}> 
          <div className={style.availcon}>
            <p className={style.info}>可提现金额</p>
            <p className={style.cash}>¥ 1,805.55</p>
          </div>
          <div className={style.walletbottom}>
            <div className={style.leftcon}>
              <p className={style.info}>可用余额</p>
              <p className={style.cash}>¥ 1,805.55</p>
            </div>
            <div className={style.rightcon}>
              <p className={style.info}>累计收益</p>
              <p className={style.cash}>¥ 532.55</p>
            </div>
          </div>
        </div>
        <div className={style.btnbar}>
          <div className={style.save}>充值</div>
          <div className={style.take}>提现</div>
        </div>
        <WhiteSpace size='sm'/>
        <List className="my-list">
          <Item arrow="horizontal">收支记录</Item>
          <Item arrow="horizontal">兑换码</Item>
        </List>
        <WhiteSpace size='md' />
        <List className="my-list">
          <Item arrow="horizontal">充值提现规则</Item>
        </List>
      </div>
    );
  }
}

export default MyWallet;
