/**
 * @summary 悬赏问题页面
 * @date    2017-07-29
 * @author  cuiqs
 */
import React, { Component } from 'react';
import style from './style.css';
import { NavBar, WhiteSpace } from 'antd-mobile';

import Item from './components/Item';

class RewardQuestion extends Component {
  constructor(props) {
    super(props);
    this.state ={};
  }

  render() {
    return (
      <div className={style.wrapper}>
        <NavBar
          leftContent="返回"
          mode="light"
          onLeftClick={() => console.log('取消')}
        >悬赏问题</NavBar>
        <WhiteSpace size="sm" />
        <Item
          price="15.0"
          content="保单的21天犹豫期到底是工作日还是自然日？21天内客户退保如何申请？"
          gz="54"
          cy="23"
          date="09-08"
        />
        <WhiteSpace size="sm" />
        <Item
          price="34.0"
          content="保单的21天犹豫期到底是工作日还是自然日？21天内客户退保如何申请？"
          gz="54"
          cy="23"
          date="09-08"
        />
        <WhiteSpace size="sm" />
        <Item
          price="23.0"
          content="保单的21天犹豫期到底是工作日还是自然日？21天内客户退保如何申请？"
          gz="54"
          cy="23"
          date="09-08"
        />
        <WhiteSpace size="sm" />
        <Item
          price="78.0"
          content="保单的21天犹豫期到底是工作日还是自然日？21天内客户退保如何申请？"
          gz="54"
          cy="23"
          date="09-08"
        />
        <WhiteSpace size="sm" />
        <Item
          price="15.0"
          content="保单的21天犹豫期到底是工作日还是自然日？21天内客户退保如何申请？"
          gz="54"
          cy="23"
          date="09-08"
        />
        <WhiteSpace size="sm" />
        <Item
          price="34.0"
          content="保单的21天犹豫期到底是工作日还是自然日？21天内客户退保如何申请？"
          gz="54"
          cy="23"
          date="09-08"
        />
      </div>
    );
  }
}

export default RewardQuestion;
