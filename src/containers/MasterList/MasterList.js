/**
 * @summary 答主列表
 */
import React, { Component } from 'react';
import style from './style.css';
import MasterListItem from '../../components/MasterListItem';
import { NavBar } from 'antd-mobile';

class MasterList extends Component {
  constructor(props) {
    super(props);
    this.state ={};
  }

  render() {
    return (
      <div className={style.wrapper}>
        <NavBar
            leftContent="返回"
            rightContent={null}
            mode="light"
            onLeftClick={() => console.log('取消')}
            className={style.navbar}
          >答主</NavBar>
        <MasterListItem
          name="张震岳"
          dsc="持牌人，对友邦保险有深入了解"
        />
        <MasterListItem
          name="热狗"
          dsc="持牌人，对友邦保险有深入了解"
        />
        <MasterListItem
          name="吴亦凡"
          dsc="持牌人，对友邦保险有深入了解"
        />
        <MasterListItem
          name="潘玮柏"
          dsc="持牌人，对友邦保险有深入了解"
        />
        <MasterListItem
          name="布瑞基"
          dsc="持牌人，对友邦保险有深入了解"
        />
        <MasterListItem
          name="PGone"
          dsc="持牌人，对友邦保险有深入了解"
        />
      </div>
    );
  }
}

export default MasterList;
