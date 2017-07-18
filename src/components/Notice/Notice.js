/**
 * @summary 
 */
import React, { Component } from 'react';
import style from './style.css';

class Notice extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className={style.notice}>
        <div className={style.content}>{this.props.children}</div>
        <div className={style.right}>
          <span className={style.icon}>{this.props.num}</span>
          <span className={style.btn}>></span>
        </div>
      </div>
    );
  }
}

export default Notice;
