/**
 * @summary 勋章
 */
import React, { Component } from 'react';
import style from './style.css';

class Medal extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <span
        className={style.medal}
        style={{
          borderColor: this.props.color,
          color: this.props.color,
          fontSize: `${this.props.fontSize}px`,
        }}>
        { this.props.children }
      </span>
    );
  }
}

export default Medal;
