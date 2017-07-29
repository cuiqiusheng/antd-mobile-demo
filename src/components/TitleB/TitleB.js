/**
 * @summary 标题(右边没有内容)
 * @date    2017-07-30
 * @author  cuiqs
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
      </div>
    );
  }
}

export default GridAds;
