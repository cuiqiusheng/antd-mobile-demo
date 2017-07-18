import React, { Component } from 'react';
import style from './style.css';
import { Link } from 'react-router';

class Guide extends Component {
  constructor(props) {
    super(props);
    this.state ={};
  }

  render() {
    return (
      <div className={style.wrapper}>
        <div>点击链接跳转到对应页面</div>
        <hr />
        <Link to="home">首页</Link><br />
        <Link to="ask">提问</Link><br />
        <Link to="chooseMaster">选择答主</Link><br />
      </div>
    );
  }
}

export default Guide;
