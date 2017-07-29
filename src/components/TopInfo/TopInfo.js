/**
 * @summary 
 */
import React, { Component } from 'react';
import style from './style.css';

class TopInfo extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className={style.wrapper}>
        {this.props.children}
      </div>
    );
  }
}

export default TopInfo;
