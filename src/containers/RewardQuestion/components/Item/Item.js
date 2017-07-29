import React, { Component } from 'react';
import style from './style.css';
import Medal from '../../../../components/Medal';

class Item extends Component {
  constructor(props) {
    super(props);
    this.state ={
      focus: false,
    };
    this.onFocus = this.onFocus.bind(this);
  }

  onFocus() {
    this.setState({ focus: !this.state.focus });
  }

  render() {
    return (
      <div className={style.wrapper}>
        <div className={style.top}>
          <div className={style.price}><span>￥</span>{this.props.price}</div>
          <div className={style.content}>
            <Medal>保险</Medal>
            {this.props.content}
          </div>
        </div>
        <div className={style.bottom}>
          <div className={style.tip}>{this.props.gz} 关注<span>·</span>{this.props.cy} 参与<span>·</span>{this.props.date}</div>
          <div className={style.btnBox}>
            <button
              className={this.state.focus ? style.focusAlready : style.focus}
              onClick={this.onFocus}
            >
              {this.state.focus ? '已关注' : '关注'}
            </button>
            <button className={style.answer}>回答</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Item;
