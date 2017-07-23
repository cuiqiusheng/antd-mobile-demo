/**
 * @summary 答主列表组件
 */
import React, { Component } from 'react';
import style from './style.css';
import img from './img1.jpg';

class MasterListItem extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className={style.wrapper}>
        <div className={style.avatar}><img src={img} alt="img"/></div>
        <div className={style.info}>
          <p>{this.props.name}</p>
          <p>{this.props.dsc}</p>
          <p>230 问答<span>·</span>1677 关注<span>·</span>76 赞</p>
        </div>
        <div className={style.btn}>关注</div>
      </div>
    );
  }
}

export default MasterListItem;
