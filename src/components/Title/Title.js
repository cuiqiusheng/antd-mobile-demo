/**
 * @summary 标题
 */
import React, { Component } from 'react';
import style from './style.css';

class GridAds extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    
    return (
      <div className={style.title}>
        { this.props.children }
        <span className={style.icon}>></span>
      </div>
    );
  }
}

export default GridAds;
