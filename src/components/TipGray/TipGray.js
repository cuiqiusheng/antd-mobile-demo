/**
 * @summary 
 */
import React, { Component } from 'react';
import style from './style.css';

class TipGray extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className={style.grid}>
        <div className={style.t}></div>
        {this.props.children}
      </div>
    );
  }
}

export default TipGray;
