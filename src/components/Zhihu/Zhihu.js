/**
 * @summary 
 */
import React, { Component } from 'react';
import style from './style.css';
import Medal from '../Medal';

class Zhihu extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className={style.grid}>
        <p className={style.title}><Medal>保险</Medal>{this.props.title}</p>
        <div className={style.clearfix}>
          <div className={style.avatarBox}>
            <div className={style.avatar} style={{background: this.props.color}}></div>
          </div>
          <div className={style.right}>
            <p>
              <span className={style.name}>{this.props.name}</span>
              <span className={style.dsc}>{this.props.dsc}</span>
            </p>
            {this.props.children}
            <p className={style.tip}>{this.props.z} 赞<span>·</span>{this.props.w} 人在围观</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Zhihu;
