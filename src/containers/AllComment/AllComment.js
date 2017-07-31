/**
 * @summary 所有评论
 * @date    2017-07-31
 * @author  white
 */
import React, { Component } from 'react';
import style from './style.css';
import { NavBar, WhiteSpace } from 'antd-mobile'
import Comment from '../../components/Comment';

class AllComment extends Component {
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
        >所有评论</NavBar>
        <Comment></Comment>
        <WhiteSpace/>
        <Comment></Comment>
        <WhiteSpace/>
        <Comment></Comment>
        <WhiteSpace/>
        <Comment></Comment>
        <WhiteSpace/>
        <Comment></Comment>
        <WhiteSpace size="xl"/>
        <WhiteSpace size="xl"/>
        <div className={style.inputmod}>
          <input type="text" placeholder="发表评论" className={style.inp} />
          <span className={style.submit}>发送</span>
        </div>
      </div>
    );
  }
}

export default AllComment;
