/**
 * @summary 关注按钮
 * @date    2017-07-29
 * @author  cuiqs
 */
import React, { Component } from 'react';
import style from './style.css';

class FocusButton extends Component {

  constructor(props) {
    super(props);
    this.state = {
      focus: false,
    };
    this.onFocus = this.onFocus.bind(this);
  }

  onFocus() {
    this.setState({ focus: !this.state.focus });
  }

  render() {
    return (
      <button className={this.state.focus ? style.focusAlready : style.focusBtn} onClick={this.onFocus}>
        <span className={this.state.focus ? '' : style.focus}></span>
        {this.state.focus ? '已关注' : '关注'}
      </button>
    );
  }
}

export default FocusButton;
