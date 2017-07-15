/**
 * @summary 
 */
import React, { Component } from 'react';
import style from './style.css';

class TipBlue extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className={style.grid}>
        <div className={style.t}></div>
        花 <span className={style.i}>￥{this.props.children}</span> 围观
      </div>
    );
  }
}

export default TipBlue;
