/**
 * @summary 所有评论
 * @date    2017-08-01
 * @author  white
 */
import React, { Component } from 'react';
import style from './style.css';
import { NavBar } from 'antd-mobile';
import titpic from './titpic.png';
import Item from './components/Item';

class ColumnList extends Component {
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
        >专栏列表</NavBar>
        <div className={style.imgbox}>
          <img src={titpic}/>
          <p className={style.pictext}>唐宁：独立理财师时代远未到来</p>
        </div>
        <Item></Item>
        <Item></Item>
        <Item></Item>
        <Item></Item>
        <Item></Item>
      </div>
    );
  }
}

export default ColumnList;
