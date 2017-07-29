/**
 * @summary 关注按钮(无图标)
 * @date    2017-07-30
 * @author  cuiqs
 */
import React, { Component } from 'react';
import style from './style.css';

class FocusButtonB extends Component {

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
        {this.state.focus ? '已关注' : '关注'}
      </button>
    );
  }
}

export default FocusButtonB;
