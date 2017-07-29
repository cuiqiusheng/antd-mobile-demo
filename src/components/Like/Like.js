/**
 * @summary 点赞按钮
 * @date    2017-07-29
 * @author  cuiqs 
 */
import React, { Component } from 'react';
import style from './style.css';

class Like extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <span className={style.wrapper}>
        <span className={style.icon}></span>
        {this.props.num}
      </span>
    );
  }
}

export default Like;
