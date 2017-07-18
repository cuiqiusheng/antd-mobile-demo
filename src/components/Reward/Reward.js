/**
 * @summary 问题悬赏内容部分
 */
import React, { Component } from 'react';
import style from './style.css';
import Medal from '../../components/Medal';

class Reward extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className={style.wrapper}>
        <div className={style.sign}><span>￥</span>{this.props.sign}</div>
        <div className={style.right}>
          <div className={style.main}>
            <Medal color={this.props.color}>{this.props.medal}</Medal>
            {this.props.children}
          </div>
          <div className={style.bottom}>
            <span className={style.num}>{this.props.num}</span>
            <span className={style.time}>{this.props.time}</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Reward;
