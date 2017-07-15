/**
 * @summary 知名答主内容
 */
import React, { Component } from 'react';
import style from './style.css';
import Medal from '../Medal';

class Answer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      focus: false,
      style: {
        borderColor: '#0e95ff',
        color: '#0e95ff',
        background: '#ccc',
      },
    };
    this.handleFocus = this.handleFocus.bind(this);
  }

  handleFocus() {
    this.setState({
      focus: !this.state.focus,
    });
  }

  render() {
    const on = {
      border: '1px solid #0e95ff',
      color: '#0e95ff',
      backgroundColor: 'transparent',
    };

    const off = {
      border: 'none',
      color: '#999',
      backgroundColor: '#eee',
    };

    return (
      <div className={style.grid}>
        <div className={style.avatar} style={{backgroundColor: this.props.color}}>
          <img src="" alt=""/>
        </div>
        <div>
          <span className={style.name}>{this.props.name}</span>
          <Medal>保险</Medal>
          <Medal color="#d662f7">基金</Medal>
          <p className={style.dsc}>{this.props.dsc}</p>
          <p className={style.tip}>{this.props.q}个问答<span>·</span>{this.props.g}个关注</p>
          <span
            className={style.btn}
            onClick={this.handleFocus}
            style={this.state.focus ? off : on}
          >
            {this.state.focus ? '已关注' : '关注'}
          </span>
        </div>
      </div>
    );
  }
}

export default Answer;
